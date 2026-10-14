/* eslint-disable */
/**
 * 演示模式 Service Worker
 * ============================================================
 * 目的：让本前端在「无后端」的纯静态环境（GitHub Pages）下完整可用。
 * 原理：拦截同源 `{BASE}api/**` 请求，返回内置演示数据；
 *       栅格类资源（GeoTIFF / PNG）转发到随站点发布的真实文件 `{BASE}demo/*`。
 * 启用：仅在构建时 VITE_DEMO_MODE=true 的情况下由 main.tsx 注册。
 * 数据：全部为「合成演示数据」，非真实测量成果，仅用于界面演示。
 */

const BASE = self.location.pathname.replace(/demo-sw\.js$/, "");
const D = (p) => BASE + "demo/" + p;
const STRIP = BASE.replace(/\/$/, "");

const T0 = Date.now();
const iso = (minAgo) => new Date(T0 - minAgo * 60000).toISOString();

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });

/* ============================== 任务列表 ============================== */

const TASKS = [
  { webodm_task_id: "brighton-before", name: "brighton_beach 灾前 2026-09-12", status: "COMPLETED", progress: 100, processing_time_ms: 486000, created_at: iso(2880) },
  { webodm_task_id: "brighton-after", name: "brighton_beach 灾后 2026-10-01", status: "COMPLETED", progress: 100, processing_time_ms: 512000, created_at: iso(1440) },
  { webodm_task_id: "mine-survey", name: "矿区多光谱普查 2026-10-08", status: "COMPLETED", progress: 100, processing_time_ms: 355000, created_at: iso(720) },
  { webodm_task_id: "range-mag", name: "退役靶场磁测 2026-10-13", status: "RUNNING", progress: 62, processing_time_ms: null, created_at: iso(35) },
  { webodm_task_id: "wetland-patrol", name: "湿地巡护 2026-10-14", status: "QUEUED", progress: 0, processing_time_ms: null, created_at: iso(6) },
];

const CONSOLE_TAIL = [
  "[INFO] Initializing ODM 3.5.4 - Wed Oct 14 09:12:03 2026",
  "[INFO] Loading dataset from: /var/www/data/brighton/after/images (18 images)",
  "[INFO] Photo dimensions: 4032 x 3024 px",
  "[INFO] GPS information: 18 images have GPS, 0 have GCP",
  "[INFO] Running dataset stage",
  "[INFO] Found 3821 usable features across 18 images",
  "[INFO] Reconstruction of 18 images took 214 seconds",
  "[INFO] Densifying point cloud (mvs)",
  "[INFO] Completed MVS in 341 seconds, 2,417,882 points",
  "[INFO] Building orthophoto (resolution 2.4 cm/px)",
  "[INFO] Generating DSM / DTM rasters",
  "[INFO] Done. Results at /var/www/data/brighton/after/odm_orthophoto",
];

const CRS_OPTIONS = [
  { id: "EPSG:4326", label: "WGS 84 经纬度（全球通用）", proj: "+proj=longlat +datum=WGS84 +no_defs" },
  { id: "EPSG:32630", label: "WGS 84 / UTM 30N（西欧 · 英国）", proj: "+proj=utm +zone=30 +datum=WGS84 +units=m" },
  { id: "EPSG:32650", label: "WGS 84 / UTM 50N（北美西海岸）", proj: "+proj=utm +zone=50 +datum=WGS84 +units=m" },
  { id: "EPSG:3857", label: "Web Mercator（在线地图通用）", proj: "+proj=merc +a=6378137 +b=6378137 +units=m" },
];

const HEALTH = {
  url: "https://demo.local（演示模式 · 无后端）",
  processing_nodes: [{ id: 1, label: "NodeODM · 演示节点", online: true }],
  artifact_root: "/artifacts",
};

const ARTIFACTS = [
  { dir: "brighton_compare_20261014", files: ["diff.tif", "diff_render.tif", "stats.json", "report.pdf"] },
  { dir: "uxo_range_fused_20261013", files: ["fused.geojson", "confirmed.geojson", "targets.csv", "flight_plan.kml"] },
  { dir: "thermal_wetland_20261012", files: ["individuals.geojson", "overlay.png", "density.tif", "stats.json"] },
];

/* ============================== 对比定损 ============================== */

const COMPARE_STATS = {
  threshold_m: 0.15,
  pixel_size_m: 0.082,
  overlap_area_m2: 312450,
  subside: { area_m2: 18420, volume_m3: 32650, max_drop_m: 3.72 },
  accumulate: { area_m2: 9120, volume_m3: 14870, max_rise_m: 2.41 },
  unchanged_area_m2: 284910,
  mean_change_m: -0.018,
  changed_ratio: 0.088,
  align_vertical: true,
  datum_shift_m: 22.22,
};

const COMPARE_STATS_B = {
  threshold_m: 0.2,
  pixel_size_m: 0.082,
  overlap_area_m2: 308700,
  subside: { area_m2: 12680, volume_m3: 21940, max_drop_m: 2.86 },
  accumulate: { area_m2: 6340, volume_m3: 9870, max_rise_m: 1.92 },
  unchanged_area_m2: 289680,
  mean_change_m: -0.011,
  changed_ratio: 0.062,
  align_vertical: true,
  datum_shift_m: 21.86,
};

const COMPARES = [
  { id: "cmp-20261014-01", before_task: "brighton-before", after_task: "brighton-after", before_name: "brighton_beach 灾前 2026-09-12", after_name: "brighton_beach 灾后 2026-10-01", asset: "dsm", asset_label: "DSM 数字表面模型（含建筑植被）", created_at: iso(420), stats: COMPARE_STATS, diff_url: `${STRIP}/api/compare/cmp-20261014-01/diff.tif` },
];

/* ============================== 热红外 ============================== */

const THERMAL_STATS = {
  total: 26,
  density_per_ha: 8.67,
  herd_groups: 5,
  class_counts: { large: 9, medium: 11, small: 6 },
  cold_anomalies: 3,
  cold_area_m2: 12.4,
  max_dt_c: 14.62,
  survey_area_ha: 3.0,
  horizontal_shift_m: 22.22,
  pixel_size_m: 0.35,
  params: { k: 3.0, min_area_m2: 0.2, max_area_m2: 8, eps_m: 25, thr_hot_c: 3.5, robust_sigma_c: 1.42 },
  demo_truth: { n_truth: 30, n_matched: 26, recall: 0.867, n_disturbances_truth: 4, known_offset_m: { dx_m: 18.5, dy_m: 12.3 } },
};

function lcg(seed) {
  let s = seed >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}

function thermalIndividuals() {
  const rnd = lcg(20261014);
  const out = [];
  const groups = [
    { cx: 210, cy: 140 }, { cx: 240, cy: 152 }, { cx: 224, cy: 176 },
    { cx: 420, cy: 250 }, { cx: 445, cy: 262 }, { cx: 150, cy: 300 },
  ];
  for (let i = 0; i < 26; i++) {
    const g = groups[i % groups.length];
    const area = 0.2 + rnd() * 6.4;
    const cls = area >= 2.2 ? "大型哺乳动物" : area >= 0.7 ? "中型动物" : "鸟类/小目标";
    out.push({
      id: i + 1,
      kind: "hot",
      class: area >= 2.2 ? "large" : area >= 0.7 ? "medium" : "small",
      label: cls,
      area_m2: Math.round(area * 100) / 100,
      center_x: Math.round(g.cx + (rnd() - 0.5) * 26),
      center_y: Math.round(g.cy + (rnd() - 0.5) * 26),
      dt_mean_c: Math.round((3.1 + rnd() * 9.4) * 10) / 10,
      dt_peak_c: Math.round((7.2 + rnd() * 7.4) * 10) / 10,
      confidence: Math.round((0.72 + rnd() * 0.27) * 100) / 100,
      group_id: (i % groups.length) + 1,
    });
  }
  return out;
}

const THERMAL_RECORD = {
  id: "thermal-20261014-01",
  created_at: iso(300),
  mode: "demo",
  rgb_task: "brighton-after",
  rgb_name: "brighton_beach 灾后 2026-10-01",
  thermal_filename: "wetland_lwir_20261014.tif",
  stats: THERMAL_STATS,
  groups: [
    { group_id: 1, n: 5, center_x: 224, center_y: 156, member_ids: [1, 2, 3, 4, 5] },
    { group_id: 2, n: 4, center_x: 432, center_y: 256, member_ids: [6, 7, 8, 9] },
    { group_id: 3, n: 3, center_x: 150, center_y: 300, member_ids: [10, 11, 12] },
    { group_id: 4, n: 8, center_x: 330, center_y: 210, member_ids: [13, 14, 15, 16, 17, 18, 19, 20] },
    { group_id: 5, n: 6, center_x: 480, center_y: 130, member_ids: [21, 22, 23, 24, 25, 26] },
  ],
  individuals: thermalIndividuals(),
  cold_records: [
    { id: 1, kind: "cold", class: "cold", label: "低温异常（水体/阴影）", area_m2: 5.2, center_x: 96, center_y: 78, dt_mean_c: -4.6, dt_peak_c: -7.1, confidence: 0.81 },
    { id: 2, kind: "cold", class: "cold", label: "低温异常（水体/阴影）", area_m2: 4.1, center_x: 512, center_y: 332, dt_mean_c: -3.9, dt_peak_c: -6.2, confidence: 0.77 },
    { id: 3, kind: "cold", class: "cold", label: "低温异常（水淹）", area_m2: 3.1, center_x: 268, center_y: 356, dt_mean_c: -3.2, dt_peak_c: -5.4, confidence: 0.69 },
  ],
  overlay_url: `${STRIP}/api/thermal/thermal-20261014-01/overlay.png`,
  density_url: `${STRIP}/api/thermal/thermal-20261014-01/density.tif`,
  geojson_url: `${STRIP}/api/thermal/thermal-20261014-01/individuals.geojson`,
};

/* ============================== 多光谱 ============================== */

const SPECTRAL_STATS = {
  indices_selected: ["ndvi", "ndre", "gndvi", "ndwi"],
  thresholds: { healthy: 0.6, light: 0.4, severe: 0.2 },
  mean_ndvi: 0.512,
  classes: {
    healthy: { label: "健康植被", area_m2: 18420, ratio: 0.598 },
    light: { label: "轻度受损", area_m2: 7420, ratio: 0.241 },
    severe: { label: "重度受损", area_m2: 3260, ratio: 0.106 },
    dead: { label: "死亡 / 裸土", area_m2: 1690, ratio: 0.055 },
  },
  survey_area_m2: 30790,
  pixel_size_m: 0.12,
  n_bands: 5,
  band_descriptions: ["Blue", "Green", "Red", "RedEdge", "NIR"],
  demo_truth: {
    patches: [
      { class: "healthy", label: "健康植被", ndvi: 0.72, area_m2: 18400 },
      { class: "light", label: "轻度受损", ndvi: 0.48, area_m2: 7400 },
      { class: "severe", label: "重度受损", ndvi: 0.29, area_m2: 3250 },
      { class: "dead", label: "死亡 / 裸土", ndvi: 0.12, area_m2: 1700 },
    ],
    compare: {
      healthy: { truth_m2: 18400, detected_m2: 18420, err_ratio: 0.11 },
      light: { truth_m2: 7400, detected_m2: 7420, err_ratio: 0.27 },
      severe: { truth_m2: 3250, detected_m2: 3260, err_ratio: 0.31 },
      dead: { truth_m2: 1700, detected_m2: 1690, err_ratio: 0.59 },
    },
  },
};

const SPECTRAL_RECORD = {
  id: "spectral-20261014-01",
  created_at: iso(600),
  mode: "demo",
  filename: "mine_multispectral_5band.tif",
  rgb_task: "brighton-after",
  rgb_name: "brighton_beach 灾后 2026-10-01",
  stats: SPECTRAL_STATS,
  index_urls: {
    ndvi: "/demo/index_ndvi.png",
    ndre: "/demo/index_ndre.png",
    gndvi: "/demo/index_gndvi.png",
    ndwi: "/demo/index_ndwi.png",
  },
  classes_url: "/demo/classes.png",
  band_urls: {
    b1_blue: "/demo/band_1.png",
    b2_green: "/demo/band_2.png",
    b3_red: "/demo/band_3.png",
    b4_rededge: "/demo/band_4.png",
    b5_nir: "/demo/band_5.png",
  },
};

/* ============================== UXO ============================== */

const UXO_TASKS = [
  { id: "uxo-mag-20261013", source: "mag", name: "退役靶场 磁测 survey", status: "completed", results: ["anomalies.geojson", "stats.json"], error: null, created_at: iso(900), updated_at: iso(880) },
  { id: "uxo-emi-20261013", source: "emi", name: "退役靶场 EMI survey", status: "completed", results: ["anomalies.geojson", "stats.json"], error: null, created_at: iso(890), updated_at: iso(870) },
  { id: "uxo-gpr-20261013", source: "gpr", name: "退役靶场 GPR survey", status: "completed", results: ["anomalies.geojson", "stats.json"], error: null, created_at: iso(880), updated_at: iso(860) },
];

function anomalies(taskId) {
  const source = taskId.includes("mag") ? "mag" : taskId.includes("emi") ? "emi" : "gpr";
  const rnd = lcg(taskId.length * 7919 + 13);
  const n = source === "mag" ? 34 : source === "emi" ? 27 : 21;
  const features = [];
  const seedPts = [
    [120, 90], [128, 96], [300, 210], [308, 204], [420, 150], [428, 158],
    [500, 300], [180, 320], [240, 60], [420, 340], [360, 120], [90, 240],
  ];
  for (let i = 0; i < n; i++) {
    const anchor = seedPts[i % seedPts.length];
    const e = Math.round((anchor[0] + (rnd() - 0.5) * 22) * 100) / 100;
    const no = Math.round((anchor[1] + (rnd() - 0.5) * 22) * 100) / 100;
    features.push({
      type: "Feature",
      geometry: { type: "Point", coordinates: [e, no] },
      properties: {
        source,
        easting: e,
        northing: no,
        depth_est_m: Math.round((0.2 + rnd() * 2.6) * 100) / 100,
        confidence: Math.round((0.55 + rnd() * 0.44) * 100) / 100,
        label: rnd() > 0.72 ? "疑似铁磁目标" : null,
        features: { amplitude: Math.round(rnd() * 420), snr: Math.round(rnd() * 28) },
        survey_id: `survey-${source}-20261013`,
      },
    });
  }
  return { type: "FeatureCollection", features };
}

const FUSE_RESULT = {
  n_input_points: 82,
  radius_m: 2,
  n_clusters: 11,
  n_targets: 8,
  summary: { confirmed_target: 3, high_probability: 2, non_ferrous: 1, mag_gpr_only: 1, pending_emi: 1 },
  targets: [
    { verdict: "confirmed_target", verdict_cn: "已确认目标", priority: 1, action: "立即人工复核 + 现场避让", easting: 124.5, northing: 93.2, hits: { mag: true, emi: true, gpr: true }, sources: ["mag", "emi", "gpr"], confidence: 0.94, depth_est_m: { mag: 1.85, emi: 1.72, gpr: 1.9 }, labels: { mag: "疑似铁磁目标", emi: "高导体", gpr: "强反射" } },
    { verdict: "confirmed_target", verdict_cn: "已确认目标", priority: 2, action: "立即人工复核 + 现场避让", easting: 304.1, northing: 207.4, hits: { mag: true, emi: true, gpr: true }, sources: ["mag", "emi", "gpr"], confidence: 0.91, depth_est_m: { mag: 2.31, emi: 2.18, gpr: 2.4 }, labels: { mag: "疑似铁磁目标", emi: "高导体", gpr: "强反射" } },
    { verdict: "confirmed_target", verdict_cn: "已确认目标", priority: 3, action: "人工复核", easting: 424.8, northing: 154.6, hits: { mag: true, emi: true, gpr: true }, sources: ["mag", "emi", "gpr"], confidence: 0.88, depth_est_m: { mag: 1.44, emi: 1.51, gpr: 1.38 }, labels: { mag: "疑似铁磁目标", emi: "高导体", gpr: "强反射" } },
    { verdict: "high_probability", verdict_cn: "高概率目标", priority: 4, action: "安排复核", easting: 502.3, northing: 298.7, hits: { mag: true, emi: true, gpr: false }, sources: ["mag", "emi"], confidence: 0.79, depth_est_m: { mag: 2.66, emi: 2.54, gpr: null }, labels: { mag: "疑似铁磁目标", emi: "中导体", gpr: null } },
    { verdict: "high_probability", verdict_cn: "高概率目标", priority: 5, action: "安排复核", easting: 178.9, northing: 318.2, hits: { mag: true, emi: false, gpr: true }, sources: ["mag", "gpr"], confidence: 0.74, depth_est_m: { mag: 1.98, emi: null, gpr: 2.05 }, labels: { mag: "疑似铁磁目标", emi: null, gpr: "强反射" } },
    { verdict: "non_ferrous", verdict_cn: "非铁磁目标", priority: 6, action: "低优先级 · 记录归档", easting: 242.6, northing: 62.4, hits: { mag: false, emi: true, gpr: true }, sources: ["emi", "gpr"], confidence: 0.68, depth_est_m: { mag: null, emi: 1.12, gpr: 1.2 }, labels: { mag: null, emi: "高导体", gpr: "中反射" } },
    { verdict: "mag_gpr_only", verdict_cn: "磁 + 雷达命中", priority: 7, action: "低优先级 · 记录归档", easting: 418.2, northing: 342.5, hits: { mag: true, emi: false, gpr: true }, sources: ["mag", "gpr"], confidence: 0.61, depth_est_m: { mag: 2.9, emi: null, gpr: 2.76 }, labels: { mag: "疑似铁磁目标", emi: null, gpr: "弱反射" } },
    { verdict: "pending_emi", verdict_cn: "待 EMI 复核", priority: 8, action: "补测 EMI 后再判", easting: 92.4, northing: 238.8, hits: { mag: true, emi: false, gpr: false }, sources: ["mag"], confidence: 0.52, depth_est_m: { mag: 3.02, emi: null, gpr: null }, labels: { mag: "疑似铁磁目标", emi: null, gpr: null } },
  ],
  artifact_dir: "results/uxo_range_fused_20261013/",
  fused_at: iso(50),
};

const UXO_META = [
  { id: 1, survey_id: "survey-mag-20261013", date: "2026-10-13", site: "西欧 · 退役靶场 A 区", operator: "YANG AI STUDIO", weather: "晴 / 风速 3.2 m/s", instrument: "G-858 铯光泵磁力仪", calibration: "出场标定 2026-08-20", notes: "探测步长 2 m，飞行高度 1.5 m AGL" },
  { id: 2, survey_id: "survey-emi-20261013", date: "2026-10-13", site: "西欧 · 退役靶场 A 区", operator: "YANG AI STUDIO", weather: "晴 / 风速 2.8 m/s", instrument: "EM61-MK2 电磁感应", calibration: "日检通过", notes: "线圈距地 0.3 m，测线间距 1 m" },
];

const UXO_QC = {
  tasks_by_source: { mag: 1, emi: 1, gpr: 1 },
  tasks_by_status: { completed: 3 },
  anomalies_by_source: { mag: 34, emi: 27, gpr: 21 },
  fusion_runs: 1,
  verdict_counts: { confirmed_target: 3, high_probability: 2, non_ferrous: 1, mag_gpr_only: 1, pending_emi: 1 },
};

function flightPlan() {
  const rows = 6, cols = 8, spacing = 12.5, clearance = 8;
  const wp = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const cc = r % 2 === 0 ? c : cols - 1 - c;
      wp.push({
        lat: 50.8421 + cc * 0.000112,
        lon: 0.1362 + r * 0.000168,
        alt_m: 8 + r * 0.15,
        terrain_m: 6.4 + Math.sin(cc / 2) * 0.8,
      });
    }
  }
  return {
    n_waypoints: wp.length,
    grid: { rows, cols, spacing_m: spacing, clearance_m: clearance },
    waypoints: wp,
    csv_url: `${STRIP}/api/uxo/flight-plan/waypoints.csv`,
    kml_url: `${STRIP}/api/uxo/flight-plan/waypoints.kml`,
  };
}

function metaGeoJSON() {
  return {
    type: "FeatureCollection",
    features: UXO_META.map((m, i) => ({
      type: "Feature",
      geometry: { type: "Point", coordinates: [40 + i * 260, 200] },
      properties: m,
    })),
  };
}

/* ============================== AI 助手（SSE） ============================== */

const CHAT_REPLY =
  "当前处于**演示模式**（静态站点，未连接后端）。\n\n" +
  "本平台四大核心能力：\n" +
  "1. 三维重建 —— WebODM 摄影测量，输出正射图 / DSM / DTM / 点云\n" +
  "2. 双期对比定损 —— FFT 自动配准，零 GCP 也能量化塌陷与堆积\n" +
  "3. UXO 三源融合 —— 磁测 + EMI + GPR 异常点融合判级\n" +
  "4. 传感器分析 —— 热红外野生动物探测、多光谱植被分级\n\n" +
  "完整问答需连接后端（FastAPI :8010）后可用。";

function chatStream() {
  const enc = new TextEncoder();
  const chunks = CHAT_REPLY.match(/[\s\S]{1,12}/g) || [];
  let i = 0;
  return new ReadableStream({
    start(controller) {
      const meta =
        "event: sources\ndata: " +
        JSON.stringify({ items: [{ source: "user-guide.md", section: "平台能力总览", score: 0.92 }] }) +
        "\n\n";
      controller.enqueue(enc.encode(meta));
    },
    pull(controller) {
      if (i < chunks.length) {
        controller.enqueue(
          enc.encode("event: chunk\ndata: " + JSON.stringify({ text: chunks[i++] }) + "\n\n")
        );
      } else {
        controller.enqueue(
          enc.encode(
            "event: done\ndata: " + JSON.stringify({ session_id: "demo-session", latency_ms: 420 }) + "\n\n"
          )
        );
        controller.close();
      }
    },
  });
}

/* ============================== 二进制路由 ============================== */

function binaryTarget(path) {
  let m;
  if ((m = path.match(/^\/api\/tasks\/([^/]+)\/download\/orthophoto$/))) {
    return D(m[1].includes("before") ? "orthophoto_before.tif" : "orthophoto_after.tif");
  }
  if (/^\/api\/tasks\/[^/]+\/download\/dsm$/.test(path)) return D("diff.tif");
  if (/^\/api\/compare\/[^/]+\/diff\.tif$/.test(path)) return D("diff.tif");
  if (/^\/api\/thermal\/[^/]+\/thermal_aligned\.tif$/.test(path)) return D("thermal_aligned.tif");
  if (/^\/api\/thermal\/[^/]+\/density\.tif$/.test(path)) return D("density.tif");
  if (/^\/api\/thermal\/[^/]+\/overlay\.png$/.test(path)) return D("overlay.png");
  if (/^\/api\/thermal\/[^/]+\/individuals\.geojson$/.test(path)) return "GEOJSON:thermal";
  if (/^\/api\/uxo\/tasks\/[^/]+\/results\/anomalies\.geojson$/.test(path)) return "GEOJSON:anomalies";
  if (/^\/api\/uxo\/tasks\/[^/]+\/results\/fused\.geojson$/.test(path)) return "GEOJSON:fused";
  if (/^\/api\/uxo\/meta\/geojson$/.test(path)) return "GEOJSON:meta";
  return null;
}

/* ============================== 路由处理 ============================== */

function routeJson(path, method, url) {
  /* ---- 基础 ---- */
  if (path === "/api/health") return HEALTH;
  if (path === "/api/crs-options") return CRS_OPTIONS;
  if (path === "/api/artifacts") return ARTIFACTS;
  if (path === "/api/admin/cleanup" && method === "POST") return { removed: ["build_cache", "tmp_upload_20261010"] };

  /* ---- 任务 ---- */
  if (path === "/api/tasks" && method === "GET") return TASKS;
  if (path === "/api/tasks" && method === "POST")
    return { webodm_task_id: "new-demo-" + Date.now(), project_id: 1, name: "演示上传任务", crs: "EPSG:32630", status: "QUEUED" };
  let m;
  if ((m = path.match(/^\/api\/tasks\/([^/]+)$/))) {
    const id = m[1];
    const t = TASKS.find((x) => x.webodm_task_id === id) || TASKS[0];
    if (method === "DELETE") return null;
    return {
      webodm_task_id: t.webodm_task_id,
      name: t.name,
      status: t.status,
      status_detail: t.status === "RUNNING" ? "Densifying point cloud (MVS)" : null,
      progress: t.progress,
      console_tail: t.status === "QUEUED" ? CONSOLE_TAIL.slice(0, 2) : CONSOLE_TAIL,
    };
  }
  if (/^\/api\/tasks\/[^/]+\/retry$/.test(path)) return { ok: true };
  if (/^\/api\/tasks\/[^/]+\/export$/.test(path))
    return { artifact_dir: "artifacts/demo_export", files: ["orthophoto.tif", "dsm.tif", "dtm.tif", "report.pdf", "stats.json"] };

  /* ---- 对比 ---- */
  if (path === "/api/compare" && method === "GET") return COMPARES;
  if (path === "/api/compare" && method === "POST") {
    const body = safeJson(url);
    const before = TASKS.find((t) => t.webodm_task_id === body.before_task);
    const after = TASKS.find((t) => t.webodm_task_id === body.after_task);
    const asset = body.asset || "dsm";
    const label = asset === "dem" ? "DEM 数字高程模型（裸地）" : asset === "dtm" ? "DTM 数字地形模型（纯地面）" : "DSM 数字表面模型（含建筑植被）";
    return {
      id: "cmp-" + Date.now(),
      before_task: body.before_task,
      after_task: body.after_task,
      before_name: (before && before.name) || body.before_task,
      after_name: (after && after.name) || body.after_task,
      asset,
      asset_label: label,
      created_at: new Date().toISOString(),
      stats: COMPARE_STATS,
      diff_url: `${STRIP}/api/compare/cmp-demo/diff.tif`,
    };
  }

  /* ---- 热红外 ---- */
  if (path === "/api/thermal" && method === "GET") return [THERMAL_RECORD];
  if ((path === "/api/thermal" || path === "/api/thermal/demo") && method === "POST") return THERMAL_RECORD;
  if ((m = path.match(/^\/api\/thermal\/([^/]+)$/))) return THERMAL_RECORD;

  /* ---- 多光谱 ---- */
  if (path === "/api/spectral" && method === "GET") return [SPECTRAL_RECORD];
  if ((path === "/api/spectral" || path === "/api/spectral/demo") && method === "POST") return SPECTRAL_RECORD;

  /* ---- UXO ---- */
  if (path === "/api/uxo/tasks" && method === "GET") return UXO_TASKS;
  if (path === "/api/uxo/tasks" && method === "POST")
    return { id: "uxo-new-" + Date.now(), source: "mag", name: "演示上传任务", status: "queued", results: [], error: null, created_at: new Date().toISOString(), updated_at: new Date().toISOString() };
  if (path === "/api/uxo/fuse" && method === "POST") return FUSE_RESULT;
  if (path === "/api/uxo/meta" && method === "GET") return UXO_META;
  if (path === "/api/uxo/meta" && method === "POST") return { ...safeJson(url), id: UXO_META.length + 1 };
  if (/^\/api\/uxo\/meta\/\d+$/.test(path)) return method === "DELETE" ? { deleted: 1 } : UXO_META[0];
  if (path === "/api/uxo/qc") return UXO_QC;
  if (path === "/api/uxo/flight-plan" && method === "POST") return flightPlan();
  if (path === "/api/uxo/meta/geojson") return metaGeoJSON();

  /* ---- AI 助手 ---- */
  if (path === "/api/chat/health")
    return { provider: "demo", provider_ok: true, provider_error: null, docs_loaded: ["user-guide.md", "术语表.md", "ROADMAP.md"], rate_limit_per_min: 30 };
  if (path === "/api/chat/reload") return { reloaded: true, docs_loaded: ["user-guide.md", "术语表.md", "ROADMAP.md"] };

  return undefined;
}

function safeJson(url) {
  try {
    const q = url.searchParams.get("__body");
    if (q) return JSON.parse(q);
  } catch (e) {
    /* ignore */
  }
  return {};
}

async function handle(request, url) {
  let path = url.pathname;
  if (path.startsWith(BASE)) path = path.slice(BASE.length);
  path = "/" + path.replace(/^\/+/, "");
  const method = request.method.toUpperCase();

  /* SSE 流（AI 助手） */
  if (path === "/api/chat" && method === "POST") {
    return new Response(chatStream(), {
      status: 200,
      headers: { "Content-Type": "text/event-stream; charset=utf-8", "Cache-Control": "no-cache" },
    });
  }

  /* 二进制 / GeoJSON 转发 */
  const bin = binaryTarget(path);
  if (bin) {
    if (bin.startsWith("GEOJSON:")) {
      const kind = bin.slice(8);
      if (kind === "anomalies") {
        const mm = path.match(/\/api\/uxo\/tasks\/([^/]+)\/results/);
        return json(anomalies(mm ? mm[1] : "uxo-mag"));
      }
      if (kind === "fused") {
        return json({
          type: "FeatureCollection",
          features: FUSE_RESULT.targets.map((t, i) => ({
            type: "Feature",
            geometry: { type: "Point", coordinates: [t.easting, t.northing] },
            properties: { ...t, rank: i + 1 },
          })),
        });
      }
      if (kind === "meta") return json(metaGeoJSON());
      if (kind === "thermal")
        return json({
          type: "FeatureCollection",
          features: (THERMAL_RECORD.individuals || []).map((r) => ({
            type: "Feature",
            geometry: { type: "Point", coordinates: [r.center_x, r.center_y] },
            properties: r,
          })),
        });
    }
    try {
      const res = await fetch(bin);
      if (res.ok) return res;
    } catch (e) {
      /* 文件缺失时落到下方 JSON 兜底 */
    }
  }

  /* JSON 路由 */
  const data = routeJson(path, method, url);
  if (data !== undefined) {
    /* 简化实现：POST body 解析由 safeJson 从查询串获取，真正的前端 POST 走缓存兜底 */
    if (data === null) return new Response(null, { status: 204 });
    return json(data);
  }

  return json({ detail: "演示模式：该接口暂无演示数据" }, 404);
}

self.addEventListener("install", (e) => {
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  let url;
  try {
    url = new URL(req.url);
  } catch (e) {
    return;
  }
  if (url.origin !== self.location.origin) return;
  if (!url.pathname.startsWith(STRIP + "/api/") && url.pathname !== STRIP + "/api") return;

  /* POST body 需要先读出来（克隆请求） */
  if (req.method === "POST" || req.method === "PUT") {
    const ct = req.headers.get("content-type") || "";
    if (ct.includes("application/json")) {
      event.respondWith(
        req
          .clone()
          .text()
          .then((txt) => {
            try {
              const q = new URL(url.href);
              q.searchParams.set("__body", txt || "{}");
              return handle(req, q);
            } catch (e) {
              return handle(req, url);
            }
          })
      );
      return;
    }
  }

  event.respondWith(handle(req, url));
});
