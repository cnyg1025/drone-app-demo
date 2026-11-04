# 无人机灾后定损平台 · 交互演示站

> YANG AI STUDIO 低空智能评估平台的**界面演示版**，纯静态，可直接在浏览器里体验"上传 → 重建 → 对比定损 → UXO 探测"的完整流程。

- 在线访问：<https://cnyg1025.github.io/drone-app-demo/>
- 产品介绍页：<https://cnyg1025.github.io/drone-assessment-site/>
- 使用手册：[`docs/user-guide.md`](docs/user-guide.md)

---

## 这是什么

| 是 | 不是 |
|---|---|
| 前端构建产物（dist），用于演示交互与信息架构 | 平台源码（源码在私有仓库，暂未公开） |
| 由 `demo-sw.js` 提供**合成演示数据**的静态站点 | 连接真实后端的生产环境 |
| 部署在 GitHub Pages | 可承载真实业务的系统 |

> ⚠️ **数据声明**：演示数据全部为合成数据（见 `demo-sw.js` 头部注释），非真实测量成果，不可用于任何生产决策。

## 演示模式是怎么工作的

项目没有后端，`demo-sw.js` 是一个 Service Worker：

1. 拦截同源的 `/drone-app-demo/api/**` 请求，返回内置的合成 JSON（任务列表、对比结果、UXO 判级等）；
2. 栅格类资源（GeoTIFF / PNG）转发到随仓库发布的真实文件，位于 `demo/`；
3. 该 Worker 由构建时开启 `VITE_DEMO_MODE=true` 后自动注册。

## 本地预览

`index.html` 以 `/drone-app-demo/` 作为资源前缀（对应 GitHub Pages 项目站点路径），因此本地预览需要保持同名子路径：

```bash
# 在仓库的上一级目录执行
mkdir -p site && cp -r drone-app-demo site/drone-app-demo
cd site && python -m http.server 8000
# 打开 http://localhost:8000/drone-app-demo/
```

## 目录结构

```
index.html              入口（SPA）
404.html                SPA 路由回退
assets/                 前端构建产物（JS / CSS）
demo/                   演示用栅格数据（GeoTIFF / PNG）
demo-sw.js              演示模式 Service Worker（合成 API + 数据转发）
docs/user-guide.md      面向使用者的操作手册
```

## 许可

[Apache License 2.0](LICENSE) © 2026 YANG AI STUDIO
