import{g as Sl,c as Oi,r as vi,j as de,B as yl,X as Ml,L as El,T as bl}from"./index-D5zmeKq1.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Js="170",ni={ROTATE:0,DOLLY:1,PAN:2},ti={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Tl=0,ga=1,wl=2,Lo=1,Al=2,nn=3,on=0,be=1,We=2,Sn=0,ii=1,va=2,xa=3,Sa=4,Rl=5,Dn=100,Cl=101,Pl=102,Dl=103,Ll=104,Il=200,Ul=201,Nl=202,Fl=203,us=204,ds=205,Ol=206,Bl=207,kl=208,zl=209,Hl=210,Vl=211,Gl=212,Wl=213,Xl=214,fs=0,ps=1,ms=2,ai=3,_s=4,gs=5,vs=6,xs=7,Qs=0,jl=1,Yl=2,yn=0,ql=1,Zl=2,Kl=3,$l=4,Jl=5,Ql=6,tc=7,Io=300,oi=301,li=302,Ss=303,ys=304,Tr=306,Sr=1e3,In=1001,Ms=1002,ze=1003,ec=1004,Bi=1005,Xe=1006,Dr=1007,Un=1008,ln=1009,Uo=1010,No=1011,Ci=1012,ta=1013,Nn=1014,rn=1015,Di=1016,ea=1017,na=1018,ci=1020,Fo=35902,Oo=1021,Bo=1022,Be=1023,ko=1024,zo=1025,ri=1026,hi=1027,Ho=1028,ia=1029,Vo=1030,ra=1031,sa=1033,dr=33776,fr=33777,pr=33778,mr=33779,Es=35840,bs=35841,Ts=35842,ws=35843,As=36196,Rs=37492,Cs=37496,Ps=37808,Ds=37809,Ls=37810,Is=37811,Us=37812,Ns=37813,Fs=37814,Os=37815,Bs=37816,ks=37817,zs=37818,Hs=37819,Vs=37820,Gs=37821,_r=36492,Ws=36494,Xs=36495,Go=36283,js=36284,Ys=36285,qs=36286,nc=3200,ic=3201,Wo=0,rc=1,xn="",fe="srgb",di="srgb-linear",wr="linear",Jt="srgb",zn=7680,ya=519,sc=512,ac=513,oc=514,Xo=515,lc=516,cc=517,hc=518,uc=519,Ma=35044,Ea="300 es",sn=2e3,yr=2001;class Bn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gr=Math.PI/180,Zs=180/Math.PI;function Li(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(me[i&255]+me[i>>8&255]+me[i>>16&255]+me[i>>24&255]+"-"+me[t&255]+me[t>>8&255]+"-"+me[t>>16&15|64]+me[t>>24&255]+"-"+me[e&63|128]+me[e>>8&255]+"-"+me[e>>16&255]+me[e>>24&255]+me[n&255]+me[n>>8&255]+me[n>>16&255]+me[n>>24&255]).toLowerCase()}function ve(i,t,e){return Math.max(t,Math.min(e,i))}function dc(i,t){return(i%t+t)%t}function Lr(i,t,e){return(1-e)*i+e*t}function xi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Me(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const fc={DEG2RAD:gr};class Bt{constructor(t=0,e=0){Bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(t,e,n,r,s,o,a,l,c){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){const d=this.elements;return d[0]=t,d[1]=r,d[2]=a,d[3]=e,d[4]=s,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],f=n[7],m=n[2],u=n[5],v=n[8],_=r[0],p=r[3],h=r[6],y=r[1],E=r[4],M=r[7],L=r[2],C=r[5],P=r[8];return s[0]=o*_+a*y+l*L,s[3]=o*p+a*E+l*C,s[6]=o*h+a*M+l*P,s[1]=c*_+d*y+f*L,s[4]=c*p+d*E+f*C,s[7]=c*h+d*M+f*P,s[2]=m*_+u*y+v*L,s[5]=m*p+u*E+v*C,s[8]=m*h+u*M+v*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8];return e*o*d-e*a*c-n*s*d+n*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8],f=d*o-a*c,m=a*l-d*s,u=c*s-o*l,v=e*f+n*m+r*u;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return t[0]=f*_,t[1]=(r*c-d*n)*_,t[2]=(a*n-r*o)*_,t[3]=m*_,t[4]=(d*e-r*l)*_,t[5]=(r*s-a*e)*_,t[6]=u*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ir.makeScale(t,e)),this}rotate(t){return this.premultiply(Ir.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ir.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ir=new Ht;function jo(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Pi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pc(){const i=Pi("canvas");return i.style.display="block",i}const ba={};function Ti(i){i in ba||(ba[i]=!0,console.warn(i))}function mc(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function _c(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function gc(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Xt={enabled:!0,workingColorSpace:di,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Jt&&(i.r=an(i.r),i.g=an(i.g),i.b=an(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Jt&&(i.r=si(i.r),i.g=si(i.g),i.b=si(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===xn?wr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function an(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function si(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Ta=[.64,.33,.3,.6,.15,.06],wa=[.2126,.7152,.0722],Aa=[.3127,.329],Ra=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ca=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Xt.define({[di]:{primaries:Ta,whitePoint:Aa,transfer:wr,toXYZ:Ra,fromXYZ:Ca,luminanceCoefficients:wa,workingColorSpaceConfig:{unpackColorSpace:fe},outputColorSpaceConfig:{drawingBufferColorSpace:fe}},[fe]:{primaries:Ta,whitePoint:Aa,transfer:Jt,toXYZ:Ra,fromXYZ:Ca,luminanceCoefficients:wa,outputColorSpaceConfig:{drawingBufferColorSpace:fe}}});let Hn;class vc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Hn===void 0&&(Hn=Pi("canvas")),Hn.width=t.width,Hn.height=t.height;const n=Hn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Hn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Pi("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=an(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(an(e[n]/255)*255):e[n]=an(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let xc=0;class Yo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xc++}),this.uuid=Li(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ur(r[o].image)):s.push(Ur(r[o]))}else s=Ur(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Ur(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sc=0;class Se extends Bn{constructor(t=Se.DEFAULT_IMAGE,e=Se.DEFAULT_MAPPING,n=In,r=In,s=Xe,o=Un,a=Be,l=ln,c=Se.DEFAULT_ANISOTROPY,d=xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sc++}),this.uuid=Li(),this.name="",this.source=new Yo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Io)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Sr:t.x=t.x-Math.floor(t.x);break;case In:t.x=t.x<0?0:1;break;case Ms:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Sr:t.y=t.y-Math.floor(t.y);break;case In:t.y=t.y<0?0:1;break;case Ms:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Se.DEFAULT_IMAGE=null;Se.DEFAULT_MAPPING=Io;Se.DEFAULT_ANISOTROPY=1;class se{constructor(t=0,e=0,n=0,r=1){se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],d=l[4],f=l[8],m=l[1],u=l[5],v=l[9],_=l[2],p=l[6],h=l[10];if(Math.abs(d-m)<.01&&Math.abs(f-_)<.01&&Math.abs(v-p)<.01){if(Math.abs(d+m)<.1&&Math.abs(f+_)<.1&&Math.abs(v+p)<.1&&Math.abs(c+u+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,M=(u+1)/2,L=(h+1)/2,C=(d+m)/4,P=(f+_)/4,N=(v+p)/4;return E>M&&E>L?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=C/n,s=P/n):M>L?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=C/r,s=N/r):L<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),n=P/s,r=N/s),this.set(n,r,s,e),this}let y=Math.sqrt((p-v)*(p-v)+(f-_)*(f-_)+(m-d)*(m-d));return Math.abs(y)<.001&&(y=1),this.x=(p-v)/y,this.y=(f-_)/y,this.z=(m-d)/y,this.w=Math.acos((c+u+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yc extends Bn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Se(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Yo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fn extends yc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class qo extends Se{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=ze,this.minFilter=ze,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Mc extends Se{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=ze,this.minFilter=ze,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class On{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],d=n[r+2],f=n[r+3];const m=s[o+0],u=s[o+1],v=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=d,t[e+3]=f;return}if(a===1){t[e+0]=m,t[e+1]=u,t[e+2]=v,t[e+3]=_;return}if(f!==_||l!==m||c!==u||d!==v){let p=1-a;const h=l*m+c*u+d*v+f*_,y=h>=0?1:-1,E=1-h*h;if(E>Number.EPSILON){const L=Math.sqrt(E),C=Math.atan2(L,h*y);p=Math.sin(p*C)/L,a=Math.sin(a*C)/L}const M=a*y;if(l=l*p+m*M,c=c*p+u*M,d=d*p+v*M,f=f*p+_*M,p===1-a){const L=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=L,c*=L,d*=L,f*=L}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],d=n[r+3],f=s[o],m=s[o+1],u=s[o+2],v=s[o+3];return t[e]=a*v+d*f+l*u-c*m,t[e+1]=l*v+d*m+c*f-a*u,t[e+2]=c*v+d*u+a*m-l*f,t[e+3]=d*v-a*f-l*m-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(r/2),f=a(s/2),m=l(n/2),u=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=m*d*f+c*u*v,this._y=c*u*f-m*d*v,this._z=c*d*v+m*u*f,this._w=c*d*f-m*u*v;break;case"YXZ":this._x=m*d*f+c*u*v,this._y=c*u*f-m*d*v,this._z=c*d*v-m*u*f,this._w=c*d*f+m*u*v;break;case"ZXY":this._x=m*d*f-c*u*v,this._y=c*u*f+m*d*v,this._z=c*d*v+m*u*f,this._w=c*d*f-m*u*v;break;case"ZYX":this._x=m*d*f-c*u*v,this._y=c*u*f+m*d*v,this._z=c*d*v-m*u*f,this._w=c*d*f+m*u*v;break;case"YZX":this._x=m*d*f+c*u*v,this._y=c*u*f+m*d*v,this._z=c*d*v-m*u*f,this._w=c*d*f-m*u*v;break;case"XZY":this._x=m*d*f-c*u*v,this._y=c*u*f-m*d*v,this._z=c*d*v+m*u*f,this._w=c*d*f+m*u*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],d=e[6],f=e[10],m=n+a+f;if(m>0){const u=.5/Math.sqrt(m+1);this._w=.25/u,this._x=(d-l)*u,this._y=(s-c)*u,this._z=(o-r)*u}else if(n>a&&n>f){const u=2*Math.sqrt(1+n-a-f);this._w=(d-l)/u,this._x=.25*u,this._y=(r+o)/u,this._z=(s+c)/u}else if(a>f){const u=2*Math.sqrt(1+a-n-f);this._w=(s-c)/u,this._x=(r+o)/u,this._y=.25*u,this._z=(l+d)/u}else{const u=2*Math.sqrt(1+f-n-a);this._w=(o-r)/u,this._x=(s+c)/u,this._y=(l+d)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,d=e._w;return this._x=n*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-n*c,this._z=s*d+o*c+n*l-r*a,this._w=o*d-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const u=1-e;return this._w=u*o+e*this._w,this._x=u*n+e*this._x,this._y=u*r+e*this._y,this._z=u*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-e)*d)/c,m=Math.sin(e*d)/c;return this._w=o*f+this._w*m,this._x=n*f+this._x*m,this._y=r*f+this._y*m,this._z=s*f+this._z*m,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(t=0,e=0,n=0){Q.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Pa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Pa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),d=2*(a*e-s*r),f=2*(s*n-o*e);return this.x=e+l*c+o*f-a*d,this.y=n+l*d+a*c-s*f,this.z=r+l*f+s*d-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Nr.copy(this).projectOnVector(t),this.sub(Nr)}reflect(t){return this.sub(Nr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nr=new Q,Pa=new On;class fi{constructor(t=new Q(1/0,1/0,1/0),e=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ue.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ue.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ue.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ue):Ue.fromBufferAttribute(s,o),Ue.applyMatrix4(t.matrixWorld),this.expandByPoint(Ue);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ki.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ki.copy(n.boundingBox)),ki.applyMatrix4(t.matrixWorld),this.union(ki)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ue),Ue.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Si),zi.subVectors(this.max,Si),Vn.subVectors(t.a,Si),Gn.subVectors(t.b,Si),Wn.subVectors(t.c,Si),dn.subVectors(Gn,Vn),fn.subVectors(Wn,Gn),bn.subVectors(Vn,Wn);let e=[0,-dn.z,dn.y,0,-fn.z,fn.y,0,-bn.z,bn.y,dn.z,0,-dn.x,fn.z,0,-fn.x,bn.z,0,-bn.x,-dn.y,dn.x,0,-fn.y,fn.x,0,-bn.y,bn.x,0];return!Fr(e,Vn,Gn,Wn,zi)||(e=[1,0,0,0,1,0,0,0,1],!Fr(e,Vn,Gn,Wn,zi))?!1:(Hi.crossVectors(dn,fn),e=[Hi.x,Hi.y,Hi.z],Fr(e,Vn,Gn,Wn,zi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ue).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ue).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ke[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ke[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ke[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ke[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ke[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ke[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ke[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ke[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ke),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ke=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Ue=new Q,ki=new fi,Vn=new Q,Gn=new Q,Wn=new Q,dn=new Q,fn=new Q,bn=new Q,Si=new Q,zi=new Q,Hi=new Q,Tn=new Q;function Fr(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Tn.fromArray(i,s);const a=r.x*Math.abs(Tn.x)+r.y*Math.abs(Tn.y)+r.z*Math.abs(Tn.z),l=t.dot(Tn),c=e.dot(Tn),d=n.dot(Tn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const Ec=new fi,yi=new Q,Or=new Q;class Ii{constructor(t=new Q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ec.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yi.subVectors(t,this.center);const e=yi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(yi,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Or.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yi.copy(t.center).add(Or)),this.expandByPoint(yi.copy(t.center).sub(Or))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $e=new Q,Br=new Q,Vi=new Q,pn=new Q,kr=new Q,Gi=new Q,zr=new Q;class Ar{constructor(t=new Q,e=new Q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$e)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=$e.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):($e.copy(this.origin).addScaledVector(this.direction,e),$e.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Br.copy(t).add(e).multiplyScalar(.5),Vi.copy(e).sub(t).normalize(),pn.copy(this.origin).sub(Br);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Vi),a=pn.dot(this.direction),l=-pn.dot(Vi),c=pn.lengthSq(),d=Math.abs(1-o*o);let f,m,u,v;if(d>0)if(f=o*l-a,m=o*a-l,v=s*d,f>=0)if(m>=-v)if(m<=v){const _=1/d;f*=_,m*=_,u=f*(f+o*m+2*a)+m*(o*f+m+2*l)+c}else m=s,f=Math.max(0,-(o*m+a)),u=-f*f+m*(m+2*l)+c;else m=-s,f=Math.max(0,-(o*m+a)),u=-f*f+m*(m+2*l)+c;else m<=-v?(f=Math.max(0,-(-o*s+a)),m=f>0?-s:Math.min(Math.max(-s,-l),s),u=-f*f+m*(m+2*l)+c):m<=v?(f=0,m=Math.min(Math.max(-s,-l),s),u=m*(m+2*l)+c):(f=Math.max(0,-(o*s+a)),m=f>0?s:Math.min(Math.max(-s,-l),s),u=-f*f+m*(m+2*l)+c);else m=o>0?-s:s,f=Math.max(0,-(o*m+a)),u=-f*f+m*(m+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Br).addScaledVector(Vi,m),u}intersectSphere(t,e){$e.subVectors(t.center,this.origin);const n=$e.dot(this.direction),r=$e.dot($e)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,m=this.origin;return c>=0?(n=(t.min.x-m.x)*c,r=(t.max.x-m.x)*c):(n=(t.max.x-m.x)*c,r=(t.min.x-m.x)*c),d>=0?(s=(t.min.y-m.y)*d,o=(t.max.y-m.y)*d):(s=(t.max.y-m.y)*d,o=(t.min.y-m.y)*d),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-m.z)*f,l=(t.max.z-m.z)*f):(a=(t.max.z-m.z)*f,l=(t.min.z-m.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,$e)!==null}intersectTriangle(t,e,n,r,s){kr.subVectors(e,t),Gi.subVectors(n,t),zr.crossVectors(kr,Gi);let o=this.direction.dot(zr),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pn.subVectors(this.origin,t);const l=a*this.direction.dot(Gi.crossVectors(pn,Gi));if(l<0)return null;const c=a*this.direction.dot(kr.cross(pn));if(c<0||l+c>o)return null;const d=-a*pn.dot(zr);return d<0?null:this.at(d/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,n,r,s,o,a,l,c,d,f,m,u,v,_,p){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,d,f,m,u,v,_,p)}set(t,e,n,r,s,o,a,l,c,d,f,m,u,v,_,p){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=d,h[10]=f,h[14]=m,h[3]=u,h[7]=v,h[11]=_,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Xn.setFromMatrixColumn(t,0).length(),s=1/Xn.setFromMatrixColumn(t,1).length(),o=1/Xn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const m=o*d,u=o*f,v=a*d,_=a*f;e[0]=l*d,e[4]=-l*f,e[8]=c,e[1]=u+v*c,e[5]=m-_*c,e[9]=-a*l,e[2]=_-m*c,e[6]=v+u*c,e[10]=o*l}else if(t.order==="YXZ"){const m=l*d,u=l*f,v=c*d,_=c*f;e[0]=m+_*a,e[4]=v*a-u,e[8]=o*c,e[1]=o*f,e[5]=o*d,e[9]=-a,e[2]=u*a-v,e[6]=_+m*a,e[10]=o*l}else if(t.order==="ZXY"){const m=l*d,u=l*f,v=c*d,_=c*f;e[0]=m-_*a,e[4]=-o*f,e[8]=v+u*a,e[1]=u+v*a,e[5]=o*d,e[9]=_-m*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const m=o*d,u=o*f,v=a*d,_=a*f;e[0]=l*d,e[4]=v*c-u,e[8]=m*c+_,e[1]=l*f,e[5]=_*c+m,e[9]=u*c-v,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const m=o*l,u=o*c,v=a*l,_=a*c;e[0]=l*d,e[4]=_-m*f,e[8]=v*f+u,e[1]=f,e[5]=o*d,e[9]=-a*d,e[2]=-c*d,e[6]=u*f+v,e[10]=m-_*f}else if(t.order==="XZY"){const m=o*l,u=o*c,v=a*l,_=a*c;e[0]=l*d,e[4]=-f,e[8]=c*d,e[1]=m*f+_,e[5]=o*d,e[9]=u*f-v,e[2]=v*f-u,e[6]=a*d,e[10]=_*f+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bc,t,Tc)}lookAt(t,e,n){const r=this.elements;return we.subVectors(t,e),we.lengthSq()===0&&(we.z=1),we.normalize(),mn.crossVectors(n,we),mn.lengthSq()===0&&(Math.abs(n.z)===1?we.x+=1e-4:we.z+=1e-4,we.normalize(),mn.crossVectors(n,we)),mn.normalize(),Wi.crossVectors(we,mn),r[0]=mn.x,r[4]=Wi.x,r[8]=we.x,r[1]=mn.y,r[5]=Wi.y,r[9]=we.y,r[2]=mn.z,r[6]=Wi.z,r[10]=we.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],f=n[5],m=n[9],u=n[13],v=n[2],_=n[6],p=n[10],h=n[14],y=n[3],E=n[7],M=n[11],L=n[15],C=r[0],P=r[4],N=r[8],b=r[12],T=r[1],F=r[5],A=r[9],U=r[13],S=r[2],B=r[6],tt=r[10],W=r[14],q=r[3],K=r[7],ot=r[11],z=r[15];return s[0]=o*C+a*T+l*S+c*q,s[4]=o*P+a*F+l*B+c*K,s[8]=o*N+a*A+l*tt+c*ot,s[12]=o*b+a*U+l*W+c*z,s[1]=d*C+f*T+m*S+u*q,s[5]=d*P+f*F+m*B+u*K,s[9]=d*N+f*A+m*tt+u*ot,s[13]=d*b+f*U+m*W+u*z,s[2]=v*C+_*T+p*S+h*q,s[6]=v*P+_*F+p*B+h*K,s[10]=v*N+_*A+p*tt+h*ot,s[14]=v*b+_*U+p*W+h*z,s[3]=y*C+E*T+M*S+L*q,s[7]=y*P+E*F+M*B+L*K,s[11]=y*N+E*A+M*tt+L*ot,s[15]=y*b+E*U+M*W+L*z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],d=t[2],f=t[6],m=t[10],u=t[14],v=t[3],_=t[7],p=t[11],h=t[15];return v*(+s*l*f-r*c*f-s*a*m+n*c*m+r*a*u-n*l*u)+_*(+e*l*u-e*c*m+s*o*m-r*o*u+r*c*d-s*l*d)+p*(+e*c*f-e*a*u-s*o*f+n*o*u+s*a*d-n*c*d)+h*(-r*a*d-e*l*f+e*a*m+r*o*f-n*o*m+n*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8],f=t[9],m=t[10],u=t[11],v=t[12],_=t[13],p=t[14],h=t[15],y=f*p*c-_*m*c+_*l*u-a*p*u-f*l*h+a*m*h,E=v*m*c-d*p*c-v*l*u+o*p*u+d*l*h-o*m*h,M=d*_*c-v*f*c+v*a*u-o*_*u-d*a*h+o*f*h,L=v*f*l-d*_*l-v*a*m+o*_*m+d*a*p-o*f*p,C=e*y+n*E+r*M+s*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return t[0]=y*P,t[1]=(_*m*s-f*p*s-_*r*u+n*p*u+f*r*h-n*m*h)*P,t[2]=(a*p*s-_*l*s+_*r*c-n*p*c-a*r*h+n*l*h)*P,t[3]=(f*l*s-a*m*s-f*r*c+n*m*c+a*r*u-n*l*u)*P,t[4]=E*P,t[5]=(d*p*s-v*m*s+v*r*u-e*p*u-d*r*h+e*m*h)*P,t[6]=(v*l*s-o*p*s-v*r*c+e*p*c+o*r*h-e*l*h)*P,t[7]=(o*m*s-d*l*s+d*r*c-e*m*c-o*r*u+e*l*u)*P,t[8]=M*P,t[9]=(v*f*s-d*_*s-v*n*u+e*_*u+d*n*h-e*f*h)*P,t[10]=(o*_*s-v*a*s+v*n*c-e*_*c-o*n*h+e*a*h)*P,t[11]=(d*a*s-o*f*s-d*n*c+e*f*c+o*n*u-e*a*u)*P,t[12]=L*P,t[13]=(d*_*r-v*f*r+v*n*m-e*_*m-d*n*p+e*f*p)*P,t[14]=(v*a*r-o*_*r-v*n*l+e*_*l+o*n*p-e*a*p)*P,t[15]=(o*f*r-d*a*r+d*n*l-e*f*l-o*n*m+e*a*m)*P,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,d=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+n,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,d=o+o,f=a+a,m=s*c,u=s*d,v=s*f,_=o*d,p=o*f,h=a*f,y=l*c,E=l*d,M=l*f,L=n.x,C=n.y,P=n.z;return r[0]=(1-(_+h))*L,r[1]=(u+M)*L,r[2]=(v-E)*L,r[3]=0,r[4]=(u-M)*C,r[5]=(1-(m+h))*C,r[6]=(p+y)*C,r[7]=0,r[8]=(v+E)*P,r[9]=(p-y)*P,r[10]=(1-(m+_))*P,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Xn.set(r[0],r[1],r[2]).length();const o=Xn.set(r[4],r[5],r[6]).length(),a=Xn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Ne.copy(this);const c=1/s,d=1/o,f=1/a;return Ne.elements[0]*=c,Ne.elements[1]*=c,Ne.elements[2]*=c,Ne.elements[4]*=d,Ne.elements[5]*=d,Ne.elements[6]*=d,Ne.elements[8]*=f,Ne.elements[9]*=f,Ne.elements[10]*=f,e.setFromRotationMatrix(Ne),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=sn){const l=this.elements,c=2*s/(e-t),d=2*s/(n-r),f=(e+t)/(e-t),m=(n+r)/(n-r);let u,v;if(a===sn)u=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===yr)u=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=sn){const l=this.elements,c=1/(e-t),d=1/(n-r),f=1/(o-s),m=(e+t)*c,u=(n+r)*d;let v,_;if(a===sn)v=(o+s)*f,_=-2*f;else if(a===yr)v=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-m,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Xn=new Q,Ne=new ie,bc=new Q(0,0,0),Tc=new Q(1,1,1),mn=new Q,Wi=new Q,we=new Q,Da=new ie,La=new On;class Ye{constructor(t=0,e=0,n=0,r=Ye.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],f=r[2],m=r[6],u=r[10];switch(e){case"XYZ":this._y=Math.asin(ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,u),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(m,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ve(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ve(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(m,u),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Da.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Da,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return La.setFromEuler(this),this.setFromQuaternion(La,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ye.DEFAULT_ORDER="XYZ";class Zo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let wc=0;const Ia=new Q,jn=new On,Je=new ie,Xi=new Q,Mi=new Q,Ac=new Q,Rc=new On,Ua=new Q(1,0,0),Na=new Q(0,1,0),Fa=new Q(0,0,1),Oa={type:"added"},Cc={type:"removed"},Yn={type:"childadded",child:null},Hr={type:"childremoved",child:null};class le extends Bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wc++}),this.uuid=Li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=le.DEFAULT_UP.clone();const t=new Q,e=new Ye,n=new On,r=new Q(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ie},normalMatrix:{value:new Ht}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return jn.setFromAxisAngle(t,e),this.quaternion.multiply(jn),this}rotateOnWorldAxis(t,e){return jn.setFromAxisAngle(t,e),this.quaternion.premultiply(jn),this}rotateX(t){return this.rotateOnAxis(Ua,t)}rotateY(t){return this.rotateOnAxis(Na,t)}rotateZ(t){return this.rotateOnAxis(Fa,t)}translateOnAxis(t,e){return Ia.copy(t).applyQuaternion(this.quaternion),this.position.add(Ia.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ua,t)}translateY(t){return this.translateOnAxis(Na,t)}translateZ(t){return this.translateOnAxis(Fa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Je.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Xi.copy(t):Xi.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Mi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Je.lookAt(Mi,Xi,this.up):Je.lookAt(Xi,Mi,this.up),this.quaternion.setFromRotationMatrix(Je),r&&(Je.extractRotation(r.matrixWorld),jn.setFromRotationMatrix(Je),this.quaternion.premultiply(jn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Oa),Yn.child=t,this.dispatchEvent(Yn),Yn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Cc),Hr.child=t,this.dispatchEvent(Hr),Hr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Je.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Je.multiply(t.parent.matrixWorld)),t.applyMatrix4(Je),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Oa),Yn.child=t,this.dispatchEvent(Yn),Yn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mi,t,Ac),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mi,Rc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),d=o(t.images),f=o(t.shapes),m=o(t.skeletons),u=o(t.animations),v=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),m.length>0&&(n.skeletons=m),u.length>0&&(n.animations=u),v.length>0&&(n.nodes=v)}return n.object=r,n;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}le.DEFAULT_UP=new Q(0,1,0);le.DEFAULT_MATRIX_AUTO_UPDATE=!0;le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fe=new Q,Qe=new Q,Vr=new Q,tn=new Q,qn=new Q,Zn=new Q,Ba=new Q,Gr=new Q,Wr=new Q,Xr=new Q,jr=new se,Yr=new se,qr=new se;class Oe{constructor(t=new Q,e=new Q,n=new Q){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Fe.subVectors(t,e),r.cross(Fe);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Fe.subVectors(r,e),Qe.subVectors(n,e),Vr.subVectors(t,e);const o=Fe.dot(Fe),a=Fe.dot(Qe),l=Fe.dot(Vr),c=Qe.dot(Qe),d=Qe.dot(Vr),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const m=1/f,u=(c*l-a*d)*m,v=(o*d-a*l)*m;return s.set(1-u-v,v,u)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,tn)===null?!1:tn.x>=0&&tn.y>=0&&tn.x+tn.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,tn.x),l.addScaledVector(o,tn.y),l.addScaledVector(a,tn.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return jr.setScalar(0),Yr.setScalar(0),qr.setScalar(0),jr.fromBufferAttribute(t,e),Yr.fromBufferAttribute(t,n),qr.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(jr,s.x),o.addScaledVector(Yr,s.y),o.addScaledVector(qr,s.z),o}static isFrontFacing(t,e,n,r){return Fe.subVectors(n,e),Qe.subVectors(t,e),Fe.cross(Qe).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fe.subVectors(this.c,this.b),Qe.subVectors(this.a,this.b),Fe.cross(Qe).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Oe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Oe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Oe.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Oe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Oe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;qn.subVectors(r,n),Zn.subVectors(s,n),Gr.subVectors(t,n);const l=qn.dot(Gr),c=Zn.dot(Gr);if(l<=0&&c<=0)return e.copy(n);Wr.subVectors(t,r);const d=qn.dot(Wr),f=Zn.dot(Wr);if(d>=0&&f<=d)return e.copy(r);const m=l*f-d*c;if(m<=0&&l>=0&&d<=0)return o=l/(l-d),e.copy(n).addScaledVector(qn,o);Xr.subVectors(t,s);const u=qn.dot(Xr),v=Zn.dot(Xr);if(v>=0&&u<=v)return e.copy(s);const _=u*c-l*v;if(_<=0&&c>=0&&v<=0)return a=c/(c-v),e.copy(n).addScaledVector(Zn,a);const p=d*v-u*f;if(p<=0&&f-d>=0&&u-v>=0)return Ba.subVectors(s,r),a=(f-d)/(f-d+(u-v)),e.copy(r).addScaledVector(Ba,a);const h=1/(p+_+m);return o=_*h,a=m*h,e.copy(n).addScaledVector(qn,o).addScaledVector(Zn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ko={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_n={h:0,s:0,l:0},ji={h:0,s:0,l:0};function Zr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Xt.workingColorSpace){if(t=dc(t,1),e=ve(e,0,1),n=ve(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Zr(o,s,t+1/3),this.g=Zr(o,s,t),this.b=Zr(o,s,t-1/3)}return Xt.toWorkingColorSpace(this,r),this}setStyle(t,e=fe){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fe){const n=Ko[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=an(t.r),this.g=an(t.g),this.b=an(t.b),this}copyLinearToSRGB(t){return this.r=si(t.r),this.g=si(t.g),this.b=si(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fe){return Xt.fromWorkingColorSpace(_e.copy(this),t),Math.round(ve(_e.r*255,0,255))*65536+Math.round(ve(_e.g*255,0,255))*256+Math.round(ve(_e.b*255,0,255))}getHexString(t=fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.fromWorkingColorSpace(_e.copy(this),e);const n=_e.r,r=_e.g,s=_e.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(_e.copy(this),e),t.r=_e.r,t.g=_e.g,t.b=_e.b,t}getStyle(t=fe){Xt.fromWorkingColorSpace(_e.copy(this),t);const e=_e.r,n=_e.g,r=_e.b;return t!==fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(_n),this.setHSL(_n.h+t,_n.s+e,_n.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(_n),t.getHSL(ji);const n=Lr(_n.h,ji.h,e),r=Lr(_n.s,ji.s,e),s=Lr(_n.l,ji.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _e=new Gt;Gt.NAMES=Ko;let Pc=0;class cn extends Bn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pc++}),this.uuid=Li(),this.name="",this.blending=ii,this.side=on,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=us,this.blendDst=ds,this.blendEquation=Dn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=ai,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ya,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zn,this.stencilZFail=zn,this.stencilZPass=zn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ii&&(n.blending=this.blending),this.side!==on&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==us&&(n.blendSrc=this.blendSrc),this.blendDst!==ds&&(n.blendDst=this.blendDst),this.blendEquation!==Dn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ai&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ya&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class $o extends cn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ye,this.combine=Qs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ae=new Q,Yi=new Bt;class je{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ma,this.updateRanges=[],this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Yi.fromBufferAttribute(this,e),Yi.applyMatrix3(t),this.setXY(e,Yi.x,Yi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix3(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix4(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyNormalMatrix(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.transformDirection(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=xi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=xi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=xi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=xi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=xi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),r=Me(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),r=Me(r,this.array),s=Me(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ma&&(t.usage=this.usage),t}}class Jo extends je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Qo extends je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class xe extends je{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Dc=0;const Ce=new ie,Kr=new le,Kn=new Q,Ae=new fi,Ei=new fi,ue=new Q;class He extends Bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dc++}),this.uuid=Li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jo(t)?Qo:Jo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ht().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ce.makeRotationFromQuaternion(t),this.applyMatrix4(Ce),this}rotateX(t){return Ce.makeRotationX(t),this.applyMatrix4(Ce),this}rotateY(t){return Ce.makeRotationY(t),this.applyMatrix4(Ce),this}rotateZ(t){return Ce.makeRotationZ(t),this.applyMatrix4(Ce),this}translate(t,e,n){return Ce.makeTranslation(t,e,n),this.applyMatrix4(Ce),this}scale(t,e,n){return Ce.makeScale(t,e,n),this.applyMatrix4(Ce),this}lookAt(t){return Kr.lookAt(t),Kr.updateMatrix(),this.applyMatrix4(Kr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kn).negate(),this.translate(Kn.x,Kn.y,Kn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xe(n,3))}else{for(let n=0,r=e.count;n<r;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Ae.setFromBufferAttribute(s),this.morphTargetsRelative?(ue.addVectors(this.boundingBox.min,Ae.min),this.boundingBox.expandByPoint(ue),ue.addVectors(this.boundingBox.max,Ae.max),this.boundingBox.expandByPoint(ue)):(this.boundingBox.expandByPoint(Ae.min),this.boundingBox.expandByPoint(Ae.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ii);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(t){const n=this.boundingSphere.center;if(Ae.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Ei.setFromBufferAttribute(a),this.morphTargetsRelative?(ue.addVectors(Ae.min,Ei.min),Ae.expandByPoint(ue),ue.addVectors(Ae.max,Ei.max),Ae.expandByPoint(ue)):(Ae.expandByPoint(Ei.min),Ae.expandByPoint(Ei.max))}Ae.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)ue.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(ue));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)ue.fromBufferAttribute(a,c),l&&(Kn.fromBufferAttribute(t,c),ue.add(Kn)),r=Math.max(r,n.distanceToSquared(ue))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new je(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<n.count;N++)a[N]=new Q,l[N]=new Q;const c=new Q,d=new Q,f=new Q,m=new Bt,u=new Bt,v=new Bt,_=new Q,p=new Q;function h(N,b,T){c.fromBufferAttribute(n,N),d.fromBufferAttribute(n,b),f.fromBufferAttribute(n,T),m.fromBufferAttribute(s,N),u.fromBufferAttribute(s,b),v.fromBufferAttribute(s,T),d.sub(c),f.sub(c),u.sub(m),v.sub(m);const F=1/(u.x*v.y-v.x*u.y);isFinite(F)&&(_.copy(d).multiplyScalar(v.y).addScaledVector(f,-u.y).multiplyScalar(F),p.copy(f).multiplyScalar(u.x).addScaledVector(d,-v.x).multiplyScalar(F),a[N].add(_),a[b].add(_),a[T].add(_),l[N].add(p),l[b].add(p),l[T].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let N=0,b=y.length;N<b;++N){const T=y[N],F=T.start,A=T.count;for(let U=F,S=F+A;U<S;U+=3)h(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const E=new Q,M=new Q,L=new Q,C=new Q;function P(N){L.fromBufferAttribute(r,N),C.copy(L);const b=a[N];E.copy(b),E.sub(L.multiplyScalar(L.dot(b))).normalize(),M.crossVectors(C,b);const F=M.dot(l[N])<0?-1:1;o.setXYZW(N,E.x,E.y,E.z,F)}for(let N=0,b=y.length;N<b;++N){const T=y[N],F=T.start,A=T.count;for(let U=F,S=F+A;U<S;U+=3)P(t.getX(U+0)),P(t.getX(U+1)),P(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let m=0,u=n.count;m<u;m++)n.setXYZ(m,0,0,0);const r=new Q,s=new Q,o=new Q,a=new Q,l=new Q,c=new Q,d=new Q,f=new Q;if(t)for(let m=0,u=t.count;m<u;m+=3){const v=t.getX(m+0),_=t.getX(m+1),p=t.getX(m+2);r.fromBufferAttribute(e,v),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(d),l.add(d),c.add(d),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let m=0,u=e.count;m<u;m+=3)r.fromBufferAttribute(e,m+0),s.fromBufferAttribute(e,m+1),o.fromBufferAttribute(e,m+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),n.setXYZ(m+0,d.x,d.y,d.z),n.setXYZ(m+1,d.x,d.y,d.z),n.setXYZ(m+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ue.fromBufferAttribute(t,e),ue.normalize(),t.setXYZ(e,ue.x,ue.y,ue.z)}toNonIndexed(){function t(a,l){const c=a.array,d=a.itemSize,f=a.normalized,m=new c.constructor(l.length*d);let u=0,v=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?u=l[_]*a.data.stride+a.offset:u=l[_]*d;for(let h=0;h<d;h++)m[v++]=c[u++]}return new je(m,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new He,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,f=c.length;d<f;d++){const m=c[d],u=t(m,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,m=c.length;f<m;f++){const u=c[f];d.push(u.toJSON(t.data))}d.length>0&&(r[l]=d,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(e))}const s=t.morphAttributes;for(const c in s){const d=[],f=s[c];for(let m=0,u=f.length;m<u;m++)d.push(f[m].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ka=new ie,wn=new Ar,qi=new Ii,za=new Q,Zi=new Q,Ki=new Q,$i=new Q,$r=new Q,Ji=new Q,Ha=new Q,Qi=new Q;class ke extends le{constructor(t=new He,e=new $o){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Ji.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],f=s[l];d!==0&&($r.fromBufferAttribute(f,t),o?Ji.addScaledVector($r,d):Ji.addScaledVector($r.sub(e),d))}e.add(Ji)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qi.copy(n.boundingSphere),qi.applyMatrix4(s),wn.copy(t.ray).recast(t.near),!(qi.containsPoint(wn.origin)===!1&&(wn.intersectSphere(qi,za)===null||wn.origin.distanceToSquared(za)>(t.far-t.near)**2))&&(ka.copy(s).invert(),wn.copy(t.ray).applyMatrix4(ka),!(n.boundingBox!==null&&wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,wn)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,m=s.groups,u=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,_=m.length;v<_;v++){const p=m[v],h=o[p.materialIndex],y=Math.max(p.start,u.start),E=Math.min(a.count,Math.min(p.start+p.count,u.start+u.count));for(let M=y,L=E;M<L;M+=3){const C=a.getX(M),P=a.getX(M+1),N=a.getX(M+2);r=tr(this,h,t,n,c,d,f,C,P,N),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const v=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let p=v,h=_;p<h;p+=3){const y=a.getX(p),E=a.getX(p+1),M=a.getX(p+2);r=tr(this,o,t,n,c,d,f,y,E,M),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,_=m.length;v<_;v++){const p=m[v],h=o[p.materialIndex],y=Math.max(p.start,u.start),E=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let M=y,L=E;M<L;M+=3){const C=M,P=M+1,N=M+2;r=tr(this,h,t,n,c,d,f,C,P,N),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const v=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let p=v,h=_;p<h;p+=3){const y=p,E=p+1,M=p+2;r=tr(this,o,t,n,c,d,f,y,E,M),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function Lc(i,t,e,n,r,s,o,a){let l;if(t.side===be?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===on,a),l===null)return null;Qi.copy(a),Qi.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Qi);return c<e.near||c>e.far?null:{distance:c,point:Qi.clone(),object:i}}function tr(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,Zi),i.getVertexPosition(l,Ki),i.getVertexPosition(c,$i);const d=Lc(i,t,e,n,Zi,Ki,$i,Ha);if(d){const f=new Q;Oe.getBarycoord(Ha,Zi,Ki,$i,f),r&&(d.uv=Oe.getInterpolatedAttribute(r,a,l,c,f,new Bt)),s&&(d.uv1=Oe.getInterpolatedAttribute(s,a,l,c,f,new Bt)),o&&(d.normal=Oe.getInterpolatedAttribute(o,a,l,c,f,new Q),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const m={a,b:l,c,normal:new Q,materialIndex:0};Oe.getNormal(Zi,Ki,$i,m.normal),d.face=m,d.barycoord=f}return d}class Ui extends He{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],f=[];let m=0,u=0;v("z","y","x",-1,-1,n,e,t,o,s,0),v("z","y","x",1,-1,n,e,-t,o,s,1),v("x","z","y",1,1,t,n,e,r,o,2),v("x","z","y",1,-1,t,n,-e,r,o,3),v("x","y","z",1,-1,t,e,n,r,s,4),v("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(d,3)),this.setAttribute("uv",new xe(f,2));function v(_,p,h,y,E,M,L,C,P,N,b){const T=M/P,F=L/N,A=M/2,U=L/2,S=C/2,B=P+1,tt=N+1;let W=0,q=0;const K=new Q;for(let ot=0;ot<tt;ot++){const z=ot*F-U;for(let G=0;G<B;G++){const _t=G*T-A;K[_]=_t*y,K[p]=z*E,K[h]=S,c.push(K.x,K.y,K.z),K[_]=0,K[p]=0,K[h]=C>0?1:-1,d.push(K.x,K.y,K.z),f.push(G/P),f.push(1-ot/N),W+=1}}for(let ot=0;ot<N;ot++)for(let z=0;z<P;z++){const G=m+z+B*ot,_t=m+z+B*(ot+1),X=m+(z+1)+B*(ot+1),et=m+(z+1)+B*ot;l.push(G,_t,et),l.push(_t,X,et),q+=6}a.addGroup(u,q,b),u+=q,m+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ui(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ui(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function ge(i){const t={};for(let e=0;e<i.length;e++){const n=ui(i[e]);for(const r in n)t[r]=n[r]}return t}function Ic(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function tl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}const Uc={clone:ui,merge:ge};var Nc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mn extends cn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nc,this.fragmentShader=Fc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ui(t.uniforms),this.uniformsGroups=Ic(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class el extends le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=sn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gn=new Q,Va=new Bt,Ga=new Bt;class De extends el{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Zs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(gr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan(gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gn.x,gn.y).multiplyScalar(-t/gn.z),gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gn.x,gn.y).multiplyScalar(-t/gn.z)}getViewSize(t,e){return this.getViewBounds(t,Va,Ga),e.subVectors(Ga,Va)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(gr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const $n=-90,Jn=1;class Oc extends le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new De($n,Jn,t,e);r.layers=this.layers,this.add(r);const s=new De($n,Jn,t,e);s.layers=this.layers,this.add(s);const o=new De($n,Jn,t,e);o.layers=this.layers,this.add(o);const a=new De($n,Jn,t,e);a.layers=this.layers,this.add(a);const l=new De($n,Jn,t,e);l.layers=this.layers,this.add(l);const c=new De($n,Jn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===sn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===yr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,f=t.getRenderTarget(),m=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,d),t.setRenderTarget(f,m,u),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class nl extends Se{constructor(t,e,n,r,s,o,a,l,c,d){t=t!==void 0?t:[],e=e!==void 0?e:oi,super(t,e,n,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Bc extends Fn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new nl(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Xe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ui(5,5,5),s=new Mn({name:"CubemapFromEquirect",uniforms:ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:be,blending:Sn});s.uniforms.tEquirect.value=e;const o=new ke(r,s),a=e.minFilter;return e.minFilter===Un&&(e.minFilter=Xe),new Oc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}const Jr=new Q,kc=new Q,zc=new Ht;class vn{constructor(t=new Q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Jr.subVectors(n,e).cross(kc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Jr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||zc.getNormalMatrix(t),r=this.coplanarPoint(Jr).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const An=new Ii,er=new Q;class aa{constructor(t=new vn,e=new vn,n=new vn,r=new vn,s=new vn,o=new vn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=sn){const n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],f=r[6],m=r[7],u=r[8],v=r[9],_=r[10],p=r[11],h=r[12],y=r[13],E=r[14],M=r[15];if(n[0].setComponents(l-s,m-c,p-u,M-h).normalize(),n[1].setComponents(l+s,m+c,p+u,M+h).normalize(),n[2].setComponents(l+o,m+d,p+v,M+y).normalize(),n[3].setComponents(l-o,m-d,p-v,M-y).normalize(),n[4].setComponents(l-a,m-f,p-_,M-E).normalize(),e===sn)n[5].setComponents(l+a,m+f,p+_,M+E).normalize();else if(e===yr)n[5].setComponents(a,f,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),An.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),An.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(An)}intersectsSprite(t){return An.center.set(0,0,0),An.radius=.7071067811865476,An.applyMatrix4(t.matrixWorld),this.intersectsSphere(An)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(er.x=r.normal.x>0?t.max.x:t.min.x,er.y=r.normal.y>0?t.max.y:t.min.y,er.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(er)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function il(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Hc(i){const t=new WeakMap;function e(a,l){const c=a.array,d=a.usage,f=c.byteLength,m=i.createBuffer();i.bindBuffer(l,m),i.bufferData(l,c,d),a.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:m,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const d=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,d);else{f.sort((u,v)=>u.start-v.start);let m=0;for(let u=1;u<f.length;u++){const v=f[m],_=f[u];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++m,f[m]=_)}f.length=m+1;for(let u=0,v=f.length;u<v;u++){const _=f[u];i.bufferSubData(c,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Rr extends He{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,d=l+1,f=t/a,m=e/l,u=[],v=[],_=[],p=[];for(let h=0;h<d;h++){const y=h*m-o;for(let E=0;E<c;E++){const M=E*f-s;v.push(M,-y,0),_.push(0,0,1),p.push(E/a),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let y=0;y<a;y++){const E=y+c*h,M=y+c*(h+1),L=y+1+c*(h+1),C=y+1+c*h;u.push(E,M,C),u.push(M,L,C)}this.setIndex(u),this.setAttribute("position",new xe(v,3)),this.setAttribute("normal",new xe(_,3)),this.setAttribute("uv",new xe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rr(t.width,t.height,t.widthSegments,t.heightSegments)}}var Vc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kc=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$c=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,th=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,eh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ih=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ah=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ch=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,uh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ph=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_h=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vh="gl_FragColor = linearToOutputTexel( gl_FragColor );",xh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,yh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Eh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Th=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ah=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ch=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ph=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ih=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Uh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Nh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Oh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$h=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ru=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,su=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,au=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ou=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,uu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,du=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_u=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Su=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Eu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,bu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Tu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Au=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ru=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Du=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Iu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Uu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ou=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ku=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ju=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ku=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$u=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ju=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,td=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ed=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,id=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ad=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,od=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ld=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ud=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,md=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_d=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:Vc,alphahash_pars_fragment:Gc,alphamap_fragment:Wc,alphamap_pars_fragment:Xc,alphatest_fragment:jc,alphatest_pars_fragment:Yc,aomap_fragment:qc,aomap_pars_fragment:Zc,batching_pars_vertex:Kc,batching_vertex:$c,begin_vertex:Jc,beginnormal_vertex:Qc,bsdfs:th,iridescence_fragment:eh,bumpmap_pars_fragment:nh,clipping_planes_fragment:ih,clipping_planes_pars_fragment:rh,clipping_planes_pars_vertex:sh,clipping_planes_vertex:ah,color_fragment:oh,color_pars_fragment:lh,color_pars_vertex:ch,color_vertex:hh,common:uh,cube_uv_reflection_fragment:dh,defaultnormal_vertex:fh,displacementmap_pars_vertex:ph,displacementmap_vertex:mh,emissivemap_fragment:_h,emissivemap_pars_fragment:gh,colorspace_fragment:vh,colorspace_pars_fragment:xh,envmap_fragment:Sh,envmap_common_pars_fragment:yh,envmap_pars_fragment:Mh,envmap_pars_vertex:Eh,envmap_physical_pars_fragment:Uh,envmap_vertex:bh,fog_vertex:Th,fog_pars_vertex:wh,fog_fragment:Ah,fog_pars_fragment:Rh,gradientmap_pars_fragment:Ch,lightmap_pars_fragment:Ph,lights_lambert_fragment:Dh,lights_lambert_pars_fragment:Lh,lights_pars_begin:Ih,lights_toon_fragment:Nh,lights_toon_pars_fragment:Fh,lights_phong_fragment:Oh,lights_phong_pars_fragment:Bh,lights_physical_fragment:kh,lights_physical_pars_fragment:zh,lights_fragment_begin:Hh,lights_fragment_maps:Vh,lights_fragment_end:Gh,logdepthbuf_fragment:Wh,logdepthbuf_pars_fragment:Xh,logdepthbuf_pars_vertex:jh,logdepthbuf_vertex:Yh,map_fragment:qh,map_pars_fragment:Zh,map_particle_fragment:Kh,map_particle_pars_fragment:$h,metalnessmap_fragment:Jh,metalnessmap_pars_fragment:Qh,morphinstance_vertex:tu,morphcolor_vertex:eu,morphnormal_vertex:nu,morphtarget_pars_vertex:iu,morphtarget_vertex:ru,normal_fragment_begin:su,normal_fragment_maps:au,normal_pars_fragment:ou,normal_pars_vertex:lu,normal_vertex:cu,normalmap_pars_fragment:hu,clearcoat_normal_fragment_begin:uu,clearcoat_normal_fragment_maps:du,clearcoat_pars_fragment:fu,iridescence_pars_fragment:pu,opaque_fragment:mu,packing:_u,premultiplied_alpha_fragment:gu,project_vertex:vu,dithering_fragment:xu,dithering_pars_fragment:Su,roughnessmap_fragment:yu,roughnessmap_pars_fragment:Mu,shadowmap_pars_fragment:Eu,shadowmap_pars_vertex:bu,shadowmap_vertex:Tu,shadowmask_pars_fragment:wu,skinbase_vertex:Au,skinning_pars_vertex:Ru,skinning_vertex:Cu,skinnormal_vertex:Pu,specularmap_fragment:Du,specularmap_pars_fragment:Lu,tonemapping_fragment:Iu,tonemapping_pars_fragment:Uu,transmission_fragment:Nu,transmission_pars_fragment:Fu,uv_pars_fragment:Ou,uv_pars_vertex:Bu,uv_vertex:ku,worldpos_vertex:zu,background_vert:Hu,background_frag:Vu,backgroundCube_vert:Gu,backgroundCube_frag:Wu,cube_vert:Xu,cube_frag:ju,depth_vert:Yu,depth_frag:qu,distanceRGBA_vert:Zu,distanceRGBA_frag:Ku,equirect_vert:$u,equirect_frag:Ju,linedashed_vert:Qu,linedashed_frag:td,meshbasic_vert:ed,meshbasic_frag:nd,meshlambert_vert:id,meshlambert_frag:rd,meshmatcap_vert:sd,meshmatcap_frag:ad,meshnormal_vert:od,meshnormal_frag:ld,meshphong_vert:cd,meshphong_frag:hd,meshphysical_vert:ud,meshphysical_frag:dd,meshtoon_vert:fd,meshtoon_frag:pd,points_vert:md,points_frag:_d,shadow_vert:gd,shadow_frag:vd,sprite_vert:xd,sprite_frag:Sd},vt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Ge={basic:{uniforms:ge([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:ge([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:ge([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:ge([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:ge([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:ge([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:ge([vt.points,vt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:ge([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:ge([vt.common,vt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:ge([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:ge([vt.sprite,vt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:ge([vt.common,vt.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:ge([vt.lights,vt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};Ge.physical={uniforms:ge([Ge.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const nr={r:0,b:0,g:0},Rn=new Ye,yd=new ie;function Md(i,t,e,n,r,s,o){const a=new Gt(0);let l=s===!0?0:1,c,d,f=null,m=0,u=null;function v(y){let E=y.isScene===!0?y.background:null;return E&&E.isTexture&&(E=(y.backgroundBlurriness>0?e:t).get(E)),E}function _(y){let E=!1;const M=v(y);M===null?h(a,l):M&&M.isColor&&(h(M,1),E=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(y,E){const M=v(E);M&&(M.isCubeTexture||M.mapping===Tr)?(d===void 0&&(d=new ke(new Ui(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:ui(Ge.backgroundCube.uniforms),vertexShader:Ge.backgroundCube.vertexShader,fragmentShader:Ge.backgroundCube.fragmentShader,side:be,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(L,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Rn.copy(E.backgroundRotation),Rn.x*=-1,Rn.y*=-1,Rn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Rn.y*=-1,Rn.z*=-1),d.material.uniforms.envMap.value=M,d.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(yd.makeRotationFromEuler(Rn)),d.material.toneMapped=Xt.getTransfer(M.colorSpace)!==Jt,(f!==M||m!==M.version||u!==i.toneMapping)&&(d.material.needsUpdate=!0,f=M,m=M.version,u=i.toneMapping),d.layers.enableAll(),y.unshift(d,d.geometry,d.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new ke(new Rr(2,2),new Mn({name:"BackgroundMaterial",uniforms:ui(Ge.background.uniforms),vertexShader:Ge.background.vertexShader,fragmentShader:Ge.background.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Xt.getTransfer(M.colorSpace)!==Jt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||m!==M.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,f=M,m=M.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function h(y,E){y.getRGB(nr,tl(i)),n.buffers.color.setClear(nr.r,nr.g,nr.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(y,E=1){a.set(y),l=E,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,h(a,l)},render:_,addToRenderList:p}}function Ed(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=m(null);let s=r,o=!1;function a(T,F,A,U,S){let B=!1;const tt=f(U,A,F);s!==tt&&(s=tt,c(s.object)),B=u(T,U,A,S),B&&v(T,U,A,S),S!==null&&t.update(S,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,M(T,F,A,U),S!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(S).buffer))}function l(){return i.createVertexArray()}function c(T){return i.bindVertexArray(T)}function d(T){return i.deleteVertexArray(T)}function f(T,F,A){const U=A.wireframe===!0;let S=n[T.id];S===void 0&&(S={},n[T.id]=S);let B=S[F.id];B===void 0&&(B={},S[F.id]=B);let tt=B[U];return tt===void 0&&(tt=m(l()),B[U]=tt),tt}function m(T){const F=[],A=[],U=[];for(let S=0;S<e;S++)F[S]=0,A[S]=0,U[S]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:A,attributeDivisors:U,object:T,attributes:{},index:null}}function u(T,F,A,U){const S=s.attributes,B=F.attributes;let tt=0;const W=A.getAttributes();for(const q in W)if(W[q].location>=0){const ot=S[q];let z=B[q];if(z===void 0&&(q==="instanceMatrix"&&T.instanceMatrix&&(z=T.instanceMatrix),q==="instanceColor"&&T.instanceColor&&(z=T.instanceColor)),ot===void 0||ot.attribute!==z||z&&ot.data!==z.data)return!0;tt++}return s.attributesNum!==tt||s.index!==U}function v(T,F,A,U){const S={},B=F.attributes;let tt=0;const W=A.getAttributes();for(const q in W)if(W[q].location>=0){let ot=B[q];ot===void 0&&(q==="instanceMatrix"&&T.instanceMatrix&&(ot=T.instanceMatrix),q==="instanceColor"&&T.instanceColor&&(ot=T.instanceColor));const z={};z.attribute=ot,ot&&ot.data&&(z.data=ot.data),S[q]=z,tt++}s.attributes=S,s.attributesNum=tt,s.index=U}function _(){const T=s.newAttributes;for(let F=0,A=T.length;F<A;F++)T[F]=0}function p(T){h(T,0)}function h(T,F){const A=s.newAttributes,U=s.enabledAttributes,S=s.attributeDivisors;A[T]=1,U[T]===0&&(i.enableVertexAttribArray(T),U[T]=1),S[T]!==F&&(i.vertexAttribDivisor(T,F),S[T]=F)}function y(){const T=s.newAttributes,F=s.enabledAttributes;for(let A=0,U=F.length;A<U;A++)F[A]!==T[A]&&(i.disableVertexAttribArray(A),F[A]=0)}function E(T,F,A,U,S,B,tt){tt===!0?i.vertexAttribIPointer(T,F,A,S,B):i.vertexAttribPointer(T,F,A,U,S,B)}function M(T,F,A,U){_();const S=U.attributes,B=A.getAttributes(),tt=F.defaultAttributeValues;for(const W in B){const q=B[W];if(q.location>=0){let K=S[W];if(K===void 0&&(W==="instanceMatrix"&&T.instanceMatrix&&(K=T.instanceMatrix),W==="instanceColor"&&T.instanceColor&&(K=T.instanceColor)),K!==void 0){const ot=K.normalized,z=K.itemSize,G=t.get(K);if(G===void 0)continue;const _t=G.buffer,X=G.type,et=G.bytesPerElement,mt=X===i.INT||X===i.UNSIGNED_INT||K.gpuType===ta;if(K.isInterleavedBufferAttribute){const ut=K.data,pt=ut.stride,yt=K.offset;if(ut.isInstancedInterleavedBuffer){for(let Pt=0;Pt<q.locationSize;Pt++)h(q.location+Pt,ut.meshPerAttribute);T.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Pt=0;Pt<q.locationSize;Pt++)p(q.location+Pt);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let Pt=0;Pt<q.locationSize;Pt++)E(q.location+Pt,z/q.locationSize,X,ot,pt*et,(yt+z/q.locationSize*Pt)*et,mt)}else{if(K.isInstancedBufferAttribute){for(let ut=0;ut<q.locationSize;ut++)h(q.location+ut,K.meshPerAttribute);T.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ut=0;ut<q.locationSize;ut++)p(q.location+ut);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let ut=0;ut<q.locationSize;ut++)E(q.location+ut,z/q.locationSize,X,ot,z*et,z/q.locationSize*ut*et,mt)}}else if(tt!==void 0){const ot=tt[W];if(ot!==void 0)switch(ot.length){case 2:i.vertexAttrib2fv(q.location,ot);break;case 3:i.vertexAttrib3fv(q.location,ot);break;case 4:i.vertexAttrib4fv(q.location,ot);break;default:i.vertexAttrib1fv(q.location,ot)}}}}y()}function L(){N();for(const T in n){const F=n[T];for(const A in F){const U=F[A];for(const S in U)d(U[S].object),delete U[S];delete F[A]}delete n[T]}}function C(T){if(n[T.id]===void 0)return;const F=n[T.id];for(const A in F){const U=F[A];for(const S in U)d(U[S].object),delete U[S];delete F[A]}delete n[T.id]}function P(T){for(const F in n){const A=n[F];if(A[T.id]===void 0)continue;const U=A[T.id];for(const S in U)d(U[S].object),delete U[S];delete A[T.id]}}function N(){b(),o=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:b,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:p,disableUnusedAttributes:y}}function bd(i,t,e){let n;function r(c){n=c}function s(c,d){i.drawArrays(n,c,d),e.update(d,n,1)}function o(c,d,f){f!==0&&(i.drawArraysInstanced(n,c,d,f),e.update(d,n,f))}function a(c,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,f);let u=0;for(let v=0;v<f;v++)u+=d[v];e.update(u,n,1)}function l(c,d,f,m){if(f===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let v=0;v<c.length;v++)o(c[v],d[v],m[v]);else{u.multiDrawArraysInstancedWEBGL(n,c,0,d,0,m,0,f);let v=0;for(let _=0;_<f;_++)v+=d[_]*m[_];e.update(v,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Td(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==Be&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const N=P===Di&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==ln&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==rn&&!N)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=e.logarithmicDepthBuffer===!0,m=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=v>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:m,maxTextures:u,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:M,vertexTextures:L,maxSamples:C}}function wd(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new vn,a=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,m){const u=f.length!==0||m||n!==0||r;return r=m,n=f.length,u},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,m){e=d(f,m,0)},this.setState=function(f,m,u){const v=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,h=i.get(f);if(!r||v===null||v.length===0||s&&!p)s?d(null):c();else{const y=s?0:n,E=y*4;let M=h.clippingState||null;l.value=M,M=d(v,m,E,u);for(let L=0;L!==E;++L)M[L]=e[L];h.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(f,m,u,v){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,v!==!0||p===null){const h=u+_*4,y=m.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<h)&&(p=new Float32Array(h));for(let E=0,M=u;E!==_;++E,M+=4)o.copy(f[E]).applyMatrix4(y,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Ad(i){let t=new WeakMap;function e(o,a){return a===Ss?o.mapping=oi:a===ys&&(o.mapping=li),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ss||a===ys)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Bc(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class rl extends el{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ei=4,Wa=[.125,.215,.35,.446,.526,.582],Ln=20,Qr=new rl,Xa=new Gt;let ts=null,es=0,ns=0,is=!1;const Pn=(1+Math.sqrt(5))/2,Qn=1/Pn,ja=[new Q(-Pn,Qn,0),new Q(Pn,Qn,0),new Q(-Qn,0,Pn),new Q(Qn,0,Pn),new Q(0,Pn,-Qn),new Q(0,Pn,Qn),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)];class Ya{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){ts=this._renderer.getRenderTarget(),es=this._renderer.getActiveCubeFace(),ns=this._renderer.getActiveMipmapLevel(),is=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ka(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Za(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ts,es,ns),this._renderer.xr.enabled=is,t.scissorTest=!1,ir(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===oi||t.mapping===li?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ts=this._renderer.getRenderTarget(),es=this._renderer.getActiveCubeFace(),ns=this._renderer.getActiveMipmapLevel(),is=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:Di,format:Be,colorSpace:di,depthBuffer:!1},r=qa(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qa(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rd(s)),this._blurMaterial=Cd(s,t,e)}return r}_compileMaterial(t){const e=new ke(this._lodPlanes[0],t);this._renderer.compile(e,Qr)}_sceneToCubeUV(t,e,n,r){const a=new De(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,m=d.toneMapping;d.getClearColor(Xa),d.toneMapping=yn,d.autoClear=!1;const u=new $o({name:"PMREM.Background",side:be,depthWrite:!1,depthTest:!1}),v=new ke(new Ui,u);let _=!1;const p=t.background;p?p.isColor&&(u.color.copy(p),t.background=null,_=!0):(u.color.copy(Xa),_=!0);for(let h=0;h<6;h++){const y=h%3;y===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):y===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const E=this._cubeSize;ir(r,y*E,h>2?E:0,E,E),d.setRenderTarget(r),_&&d.render(v,a),d.render(t,a)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=m,d.autoClear=f,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===oi||t.mapping===li;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ka()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Za());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ke(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;ir(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Qr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ja[(r-s-1)%ja.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new ke(this._lodPlanes[r],c),m=c.uniforms,u=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*u):2*Math.PI/(2*Ln-1),_=s/v,p=isFinite(s)?1+Math.floor(d*_):Ln;p>Ln&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ln}`);const h=[];let y=0;for(let P=0;P<Ln;++P){const N=P/_,b=Math.exp(-N*N/2);h.push(b),P===0?y+=b:P<p&&(y+=2*b)}for(let P=0;P<h.length;P++)h[P]=h[P]/y;m.envMap.value=t.texture,m.samples.value=p,m.weights.value=h,m.latitudinal.value=o==="latitudinal",a&&(m.poleAxis.value=a);const{_lodMax:E}=this;m.dTheta.value=v,m.mipInt.value=E-n;const M=this._sizeLods[r],L=3*M*(r>E-ei?r-E+ei:0),C=4*(this._cubeSize-M);ir(e,L,C,3*M,2*M),l.setRenderTarget(e),l.render(f,Qr)}}function Rd(i){const t=[],e=[],n=[];let r=i;const s=i-ei+1+Wa.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-ei?l=Wa[o-i+ei-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),d=-c,f=1+c,m=[d,d,f,d,f,f,d,d,f,f,d,f],u=6,v=6,_=3,p=2,h=1,y=new Float32Array(_*v*u),E=new Float32Array(p*v*u),M=new Float32Array(h*v*u);for(let C=0;C<u;C++){const P=C%3*2/3-1,N=C>2?0:-1,b=[P,N,0,P+2/3,N,0,P+2/3,N+1,0,P,N,0,P+2/3,N+1,0,P,N+1,0];y.set(b,_*v*C),E.set(m,p*v*C);const T=[C,C,C,C,C,C];M.set(T,h*v*C)}const L=new He;L.setAttribute("position",new je(y,_)),L.setAttribute("uv",new je(E,p)),L.setAttribute("faceIndex",new je(M,h)),t.push(L),r>ei&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function qa(i,t,e){const n=new Fn(i,t,e);return n.texture.mapping=Tr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ir(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Cd(i,t,e){const n=new Float32Array(Ln),r=new Q(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:Ln,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Za(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Ka(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function oa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Pd(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ss||l===ys,d=l===oi||l===li;if(c||d){let f=t.get(a);const m=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==m)return e===null&&(e=new Ya(i)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const u=a.image;return c&&u&&u.height>0||d&&u&&r(u)?(e===null&&(e=new Ya(i)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Dd(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Ti("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Ld(i,t,e,n){const r={},s=new WeakMap;function o(f){const m=f.target;m.index!==null&&t.remove(m.index);for(const v in m.attributes)t.remove(m.attributes[v]);for(const v in m.morphAttributes){const _=m.morphAttributes[v];for(let p=0,h=_.length;p<h;p++)t.remove(_[p])}m.removeEventListener("dispose",o),delete r[m.id];const u=s.get(m);u&&(t.remove(u),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function a(f,m){return r[m.id]===!0||(m.addEventListener("dispose",o),r[m.id]=!0,e.memory.geometries++),m}function l(f){const m=f.attributes;for(const v in m)t.update(m[v],i.ARRAY_BUFFER);const u=f.morphAttributes;for(const v in u){const _=u[v];for(let p=0,h=_.length;p<h;p++)t.update(_[p],i.ARRAY_BUFFER)}}function c(f){const m=[],u=f.index,v=f.attributes.position;let _=0;if(u!==null){const y=u.array;_=u.version;for(let E=0,M=y.length;E<M;E+=3){const L=y[E+0],C=y[E+1],P=y[E+2];m.push(L,C,C,P,P,L)}}else if(v!==void 0){const y=v.array;_=v.version;for(let E=0,M=y.length/3-1;E<M;E+=3){const L=E+0,C=E+1,P=E+2;m.push(L,C,C,P,P,L)}}else return;const p=new(jo(m)?Qo:Jo)(m,1);p.version=_;const h=s.get(f);h&&t.remove(h),s.set(f,p)}function d(f){const m=s.get(f);if(m){const u=f.index;u!==null&&m.version<u.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function Id(i,t,e){let n;function r(m){n=m}let s,o;function a(m){s=m.type,o=m.bytesPerElement}function l(m,u){i.drawElements(n,u,s,m*o),e.update(u,n,1)}function c(m,u,v){v!==0&&(i.drawElementsInstanced(n,u,s,m*o,v),e.update(u,n,v))}function d(m,u,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,m,0,v);let p=0;for(let h=0;h<v;h++)p+=u[h];e.update(p,n,1)}function f(m,u,v,_){if(v===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<m.length;h++)c(m[h]/o,u[h],_[h]);else{p.multiDrawElementsInstancedWEBGL(n,u,0,s,m,0,_,0,v);let h=0;for(let y=0;y<v;y++)h+=u[y]*_[y];e.update(h,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function Ud(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Nd(i,t,e){const n=new WeakMap,r=new se;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let m=n.get(a);if(m===void 0||m.count!==f){let b=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",b)};m!==void 0&&m.texture.dispose();const u=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let E=0;u===!0&&(E=1),v===!0&&(E=2),_===!0&&(E=3);let M=a.attributes.position.count*E,L=1;M>t.maxTextureSize&&(L=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const C=new Float32Array(M*L*4*f),P=new qo(C,M,L,f);P.type=rn,P.needsUpdate=!0;const N=E*4;for(let T=0;T<f;T++){const F=p[T],A=h[T],U=y[T],S=M*L*4*T;for(let B=0;B<F.count;B++){const tt=B*N;u===!0&&(r.fromBufferAttribute(F,B),C[S+tt+0]=r.x,C[S+tt+1]=r.y,C[S+tt+2]=r.z,C[S+tt+3]=0),v===!0&&(r.fromBufferAttribute(A,B),C[S+tt+4]=r.x,C[S+tt+5]=r.y,C[S+tt+6]=r.z,C[S+tt+7]=0),_===!0&&(r.fromBufferAttribute(U,B),C[S+tt+8]=r.x,C[S+tt+9]=r.y,C[S+tt+10]=r.z,C[S+tt+11]=U.itemSize===4?r.w:1)}}m={count:f,texture:P,size:new Bt(M,L)},n.set(a,m),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let u=0;for(let _=0;_<c.length;_++)u+=c[_];const v=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:s}}function Fd(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,d=l.geometry,f=t.get(l,d);if(r.get(f)!==c&&(t.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const m=l.skeleton;r.get(m)!==c&&(m.update(),r.set(m,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class sl extends Se{constructor(t,e,n,r,s,o,a,l,c,d=ri){if(d!==ri&&d!==hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===ri&&(n=Nn),n===void 0&&d===hi&&(n=ci),super(null,r,s,o,a,l,d,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ze,this.minFilter=l!==void 0?l:ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const al=new Se,$a=new sl(1,1),ol=new qo,ll=new Mc,cl=new nl,Ja=[],Qa=[],to=new Float32Array(16),eo=new Float32Array(9),no=new Float32Array(4);function pi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Ja[r];if(s===void 0&&(s=new Float32Array(r),Ja[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function he(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Cr(i,t){let e=Qa[t];e===void 0&&(e=new Int32Array(t),Qa[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Od(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Bd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;i.uniform2fv(this.addr,t),he(e,t)}}function kd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ce(e,t))return;i.uniform3fv(this.addr,t),he(e,t)}}function zd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;i.uniform4fv(this.addr,t),he(e,t)}}function Hd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),he(e,t)}else{if(ce(e,n))return;no.set(n),i.uniformMatrix2fv(this.addr,!1,no),he(e,n)}}function Vd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),he(e,t)}else{if(ce(e,n))return;eo.set(n),i.uniformMatrix3fv(this.addr,!1,eo),he(e,n)}}function Gd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),he(e,t)}else{if(ce(e,n))return;to.set(n),i.uniformMatrix4fv(this.addr,!1,to),he(e,n)}}function Wd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Xd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;i.uniform2iv(this.addr,t),he(e,t)}}function jd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;i.uniform3iv(this.addr,t),he(e,t)}}function Yd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;i.uniform4iv(this.addr,t),he(e,t)}}function qd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Zd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;i.uniform2uiv(this.addr,t),he(e,t)}}function Kd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;i.uniform3uiv(this.addr,t),he(e,t)}}function $d(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;i.uniform4uiv(this.addr,t),he(e,t)}}function Jd(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?($a.compareFunction=Xo,s=$a):s=al,e.setTexture2D(t||s,r)}function Qd(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||ll,r)}function tf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||cl,r)}function ef(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||ol,r)}function nf(i){switch(i){case 5126:return Od;case 35664:return Bd;case 35665:return kd;case 35666:return zd;case 35674:return Hd;case 35675:return Vd;case 35676:return Gd;case 5124:case 35670:return Wd;case 35667:case 35671:return Xd;case 35668:case 35672:return jd;case 35669:case 35673:return Yd;case 5125:return qd;case 36294:return Zd;case 36295:return Kd;case 36296:return $d;case 35678:case 36198:case 36298:case 36306:case 35682:return Jd;case 35679:case 36299:case 36307:return Qd;case 35680:case 36300:case 36308:case 36293:return tf;case 36289:case 36303:case 36311:case 36292:return ef}}function rf(i,t){i.uniform1fv(this.addr,t)}function sf(i,t){const e=pi(t,this.size,2);i.uniform2fv(this.addr,e)}function af(i,t){const e=pi(t,this.size,3);i.uniform3fv(this.addr,e)}function of(i,t){const e=pi(t,this.size,4);i.uniform4fv(this.addr,e)}function lf(i,t){const e=pi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function cf(i,t){const e=pi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function hf(i,t){const e=pi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function uf(i,t){i.uniform1iv(this.addr,t)}function df(i,t){i.uniform2iv(this.addr,t)}function ff(i,t){i.uniform3iv(this.addr,t)}function pf(i,t){i.uniform4iv(this.addr,t)}function mf(i,t){i.uniform1uiv(this.addr,t)}function _f(i,t){i.uniform2uiv(this.addr,t)}function gf(i,t){i.uniform3uiv(this.addr,t)}function vf(i,t){i.uniform4uiv(this.addr,t)}function xf(i,t,e){const n=this.cache,r=t.length,s=Cr(e,r);ce(n,s)||(i.uniform1iv(this.addr,s),he(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||al,s[o])}function Sf(i,t,e){const n=this.cache,r=t.length,s=Cr(e,r);ce(n,s)||(i.uniform1iv(this.addr,s),he(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||ll,s[o])}function yf(i,t,e){const n=this.cache,r=t.length,s=Cr(e,r);ce(n,s)||(i.uniform1iv(this.addr,s),he(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||cl,s[o])}function Mf(i,t,e){const n=this.cache,r=t.length,s=Cr(e,r);ce(n,s)||(i.uniform1iv(this.addr,s),he(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||ol,s[o])}function Ef(i){switch(i){case 5126:return rf;case 35664:return sf;case 35665:return af;case 35666:return of;case 35674:return lf;case 35675:return cf;case 35676:return hf;case 5124:case 35670:return uf;case 35667:case 35671:return df;case 35668:case 35672:return ff;case 35669:case 35673:return pf;case 5125:return mf;case 36294:return _f;case 36295:return gf;case 36296:return vf;case 35678:case 36198:case 36298:case 36306:case 35682:return xf;case 35679:case 36299:case 36307:return Sf;case 35680:case 36300:case 36308:case 36293:return yf;case 36289:case 36303:case 36311:case 36292:return Mf}}class bf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=nf(e.type)}}class Tf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ef(e.type)}}class wf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const rs=/(\w+)(\])?(\[|\.)?/g;function io(i,t){i.seq.push(t),i.map[t.id]=t}function Af(i,t,e){const n=i.name,r=n.length;for(rs.lastIndex=0;;){const s=rs.exec(n),o=rs.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){io(e,c===void 0?new bf(a,i,t):new Tf(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new wf(a),io(e,f)),e=f}}}class vr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);Af(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function ro(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Rf=37297;let Cf=0;function Pf(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const so=new Ht;function Df(i){Xt._getMatrix(so,Xt.workingColorSpace,i);const t=`mat3( ${so.elements.map(e=>e.toFixed(4))} )`;switch(Xt.getTransfer(i)){case wr:return[t,"LinearTransferOETF"];case Jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ao(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Pf(i.getShaderSource(t),o)}else return r}function Lf(i,t){const e=Df(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function If(i,t){let e;switch(t){case ql:e="Linear";break;case Zl:e="Reinhard";break;case Kl:e="Cineon";break;case $l:e="ACESFilmic";break;case Ql:e="AgX";break;case tc:e="Neutral";break;case Jl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const rr=new Q;function Uf(){Xt.getLuminanceCoefficients(rr);const i=rr.x.toFixed(4),t=rr.y.toFixed(4),e=rr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Nf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wi).join(`
`)}function Ff(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Of(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function wi(i){return i!==""}function oo(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lo(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Bf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ks(i){return i.replace(Bf,zf)}const kf=new Map;function zf(i,t){let e=Vt[t];if(e===void 0){const n=kf.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ks(e)}const Hf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function co(i){return i.replace(Hf,Vf)}function Vf(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ho(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Gf(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Lo?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Al?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===nn&&(t="SHADOWMAP_TYPE_VSM"),t}function Wf(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case oi:case li:t="ENVMAP_TYPE_CUBE";break;case Tr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Xf(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case li:t="ENVMAP_MODE_REFRACTION";break}return t}function jf(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Qs:t="ENVMAP_BLENDING_MULTIPLY";break;case jl:t="ENVMAP_BLENDING_MIX";break;case Yl:t="ENVMAP_BLENDING_ADD";break}return t}function Yf(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function qf(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Gf(e),c=Wf(e),d=Xf(e),f=jf(e),m=Yf(e),u=Nf(e),v=Ff(s),_=r.createProgram();let p,h,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(wi).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(wi).join(`
`),h.length>0&&(h+=`
`)):(p=[ho(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wi).join(`
`),h=[ho(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+f:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yn?"#define TONE_MAPPING":"",e.toneMapping!==yn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==yn?If("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,Lf("linearToOutputTexel",e.outputColorSpace),Uf(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(wi).join(`
`)),o=Ks(o),o=oo(o,e),o=lo(o,e),a=Ks(a),a=oo(a,e),a=lo(a,e),o=co(o),a=co(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",e.glslVersion===Ea?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ea?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const E=y+p+o,M=y+h+a,L=ro(r,r.VERTEX_SHADER,E),C=ro(r,r.FRAGMENT_SHADER,M);r.attachShader(_,L),r.attachShader(_,C),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function P(F){if(i.debug.checkShaderErrors){const A=r.getProgramInfoLog(_).trim(),U=r.getShaderInfoLog(L).trim(),S=r.getShaderInfoLog(C).trim();let B=!0,tt=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,L,C);else{const W=ao(r,L,"vertex"),q=ao(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+A+`
`+W+`
`+q)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(U===""||S==="")&&(tt=!1);tt&&(F.diagnostics={runnable:B,programLog:A,vertexShader:{log:U,prefix:p},fragmentShader:{log:S,prefix:h}})}r.deleteShader(L),r.deleteShader(C),N=new vr(r,_),b=Of(r,_)}let N;this.getUniforms=function(){return N===void 0&&P(this),N};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(_,Rf)),T},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Cf++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=C,this}let Zf=0;class Kf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new $f(t),e.set(t,n)),n}}class $f{constructor(t){this.id=Zf++,this.code=t,this.usedTimes=0}}function Jf(i,t,e,n,r,s,o){const a=new Zo,l=new Kf,c=new Set,d=[],f=r.logarithmicDepthBuffer,m=r.vertexTextures;let u=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function p(b,T,F,A,U){const S=A.fog,B=U.geometry,tt=b.isMeshStandardMaterial?A.environment:null,W=(b.isMeshStandardMaterial?e:t).get(b.envMap||tt),q=W&&W.mapping===Tr?W.image.height:null,K=v[b.type];b.precision!==null&&(u=r.getMaxPrecision(b.precision),u!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",u,"instead."));const ot=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,z=ot!==void 0?ot.length:0;let G=0;B.morphAttributes.position!==void 0&&(G=1),B.morphAttributes.normal!==void 0&&(G=2),B.morphAttributes.color!==void 0&&(G=3);let _t,X,et,mt;if(K){const Kt=Ge[K];_t=Kt.vertexShader,X=Kt.fragmentShader}else _t=b.vertexShader,X=b.fragmentShader,l.update(b),et=l.getVertexShaderID(b),mt=l.getFragmentShaderID(b);const ut=i.getRenderTarget(),pt=i.state.buffers.depth.getReversed(),yt=U.isInstancedMesh===!0,Pt=U.isBatchedMesh===!0,It=!!b.map,Ut=!!b.matcap,jt=!!W,g=!!b.aoMap,at=!!b.lightMap,$=!!b.bumpMap,I=!!b.normalMap,D=!!b.displacementMap,k=!!b.emissiveMap,nt=!!b.metalnessMap,w=!!b.roughnessMap,x=b.anisotropy>0,O=b.clearcoat>0,Z=b.dispersion>0,V=b.iridescence>0,J=b.sheen>0,ft=b.transmission>0,ct=x&&!!b.anisotropyMap,gt=O&&!!b.clearcoatMap,Wt=O&&!!b.clearcoatNormalMap,ht=O&&!!b.clearcoatRoughnessMap,Tt=V&&!!b.iridescenceMap,Mt=V&&!!b.iridescenceThicknessMap,Lt=J&&!!b.sheenColorMap,wt=J&&!!b.sheenRoughnessMap,Nt=!!b.specularMap,Ot=!!b.specularColorMap,$t=!!b.specularIntensityMap,H=ft&&!!b.transmissionMap,xt=ft&&!!b.thicknessMap,st=!!b.gradientMap,lt=!!b.alphaMap,St=b.alphaTest>0,Et=!!b.alphaHash,kt=!!b.extensions;let re=yn;b.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(re=i.toneMapping);const pe={shaderID:K,shaderType:b.type,shaderName:b.name,vertexShader:_t,fragmentShader:X,defines:b.defines,customVertexShaderID:et,customFragmentShaderID:mt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:u,batching:Pt,batchingColor:Pt&&U._colorsTexture!==null,instancing:yt,instancingColor:yt&&U.instanceColor!==null,instancingMorph:yt&&U.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:ut===null?i.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:di,alphaToCoverage:!!b.alphaToCoverage,map:It,matcap:Ut,envMap:jt,envMapMode:jt&&W.mapping,envMapCubeUVHeight:q,aoMap:g,lightMap:at,bumpMap:$,normalMap:I,displacementMap:m&&D,emissiveMap:k,normalMapObjectSpace:I&&b.normalMapType===rc,normalMapTangentSpace:I&&b.normalMapType===Wo,metalnessMap:nt,roughnessMap:w,anisotropy:x,anisotropyMap:ct,clearcoat:O,clearcoatMap:gt,clearcoatNormalMap:Wt,clearcoatRoughnessMap:ht,dispersion:Z,iridescence:V,iridescenceMap:Tt,iridescenceThicknessMap:Mt,sheen:J,sheenColorMap:Lt,sheenRoughnessMap:wt,specularMap:Nt,specularColorMap:Ot,specularIntensityMap:$t,transmission:ft,transmissionMap:H,thicknessMap:xt,gradientMap:st,opaque:b.transparent===!1&&b.blending===ii&&b.alphaToCoverage===!1,alphaMap:lt,alphaTest:St,alphaHash:Et,combine:b.combine,mapUv:It&&_(b.map.channel),aoMapUv:g&&_(b.aoMap.channel),lightMapUv:at&&_(b.lightMap.channel),bumpMapUv:$&&_(b.bumpMap.channel),normalMapUv:I&&_(b.normalMap.channel),displacementMapUv:D&&_(b.displacementMap.channel),emissiveMapUv:k&&_(b.emissiveMap.channel),metalnessMapUv:nt&&_(b.metalnessMap.channel),roughnessMapUv:w&&_(b.roughnessMap.channel),anisotropyMapUv:ct&&_(b.anisotropyMap.channel),clearcoatMapUv:gt&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:wt&&_(b.sheenRoughnessMap.channel),specularMapUv:Nt&&_(b.specularMap.channel),specularColorMapUv:Ot&&_(b.specularColorMap.channel),specularIntensityMapUv:$t&&_(b.specularIntensityMap.channel),transmissionMapUv:H&&_(b.transmissionMap.channel),thicknessMapUv:xt&&_(b.thicknessMap.channel),alphaMapUv:lt&&_(b.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(I||x),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!B.attributes.uv&&(It||lt),fog:!!S,useFog:b.fog===!0,fogExp2:!!S&&S.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:pt,skinning:U.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:G,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:re,decodeVideoTexture:It&&b.map.isVideoTexture===!0&&Xt.getTransfer(b.map.colorSpace)===Jt,decodeVideoTextureEmissive:k&&b.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(b.emissiveMap.colorSpace)===Jt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===We,flipSided:b.side===be,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:kt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&b.extensions.multiDraw===!0||Pt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return pe.vertexUv1s=c.has(1),pe.vertexUv2s=c.has(2),pe.vertexUv3s=c.has(3),c.clear(),pe}function h(b){const T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(const F in b.defines)T.push(F),T.push(b.defines[F]);return b.isRawShaderMaterial===!1&&(y(T,b),E(T,b),T.push(i.outputColorSpace)),T.push(b.customProgramCacheKey),T.join()}function y(b,T){b.push(T.precision),b.push(T.outputColorSpace),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.mapUv),b.push(T.alphaMapUv),b.push(T.lightMapUv),b.push(T.aoMapUv),b.push(T.bumpMapUv),b.push(T.normalMapUv),b.push(T.displacementMapUv),b.push(T.emissiveMapUv),b.push(T.metalnessMapUv),b.push(T.roughnessMapUv),b.push(T.anisotropyMapUv),b.push(T.clearcoatMapUv),b.push(T.clearcoatNormalMapUv),b.push(T.clearcoatRoughnessMapUv),b.push(T.iridescenceMapUv),b.push(T.iridescenceThicknessMapUv),b.push(T.sheenColorMapUv),b.push(T.sheenRoughnessMapUv),b.push(T.specularMapUv),b.push(T.specularColorMapUv),b.push(T.specularIntensityMapUv),b.push(T.transmissionMapUv),b.push(T.thicknessMapUv),b.push(T.combine),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.numLightProbes),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function E(b,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),b.push(a.mask)}function M(b){const T=v[b.type];let F;if(T){const A=Ge[T];F=Uc.clone(A.uniforms)}else F=b.uniforms;return F}function L(b,T){let F;for(let A=0,U=d.length;A<U;A++){const S=d[A];if(S.cacheKey===T){F=S,++F.usedTimes;break}}return F===void 0&&(F=new qf(i,T,b,s),d.push(F)),F}function C(b){if(--b.usedTimes===0){const T=d.indexOf(b);d[T]=d[d.length-1],d.pop(),b.destroy()}}function P(b){l.remove(b)}function N(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:M,acquireProgram:L,releaseProgram:C,releaseShaderCache:P,programs:d,dispose:N}}function Qf(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function tp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function uo(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function fo(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(f,m,u,v,_,p){let h=i[t];return h===void 0?(h={id:f.id,object:f,geometry:m,material:u,groupOrder:v,renderOrder:f.renderOrder,z:_,group:p},i[t]=h):(h.id=f.id,h.object=f,h.geometry=m,h.material=u,h.groupOrder=v,h.renderOrder=f.renderOrder,h.z=_,h.group=p),t++,h}function a(f,m,u,v,_,p){const h=o(f,m,u,v,_,p);u.transmission>0?n.push(h):u.transparent===!0?r.push(h):e.push(h)}function l(f,m,u,v,_,p){const h=o(f,m,u,v,_,p);u.transmission>0?n.unshift(h):u.transparent===!0?r.unshift(h):e.unshift(h)}function c(f,m){e.length>1&&e.sort(f||tp),n.length>1&&n.sort(m||uo),r.length>1&&r.sort(m||uo)}function d(){for(let f=t,m=i.length;f<m;f++){const u=i[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function ep(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new fo,i.set(n,[o])):r>=s.length?(o=new fo,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function np(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new Q,color:new Gt};break;case"SpotLight":e={position:new Q,direction:new Q,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Q,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Q,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return i[t.id]=e,e}}}function ip(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let rp=0;function sp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ap(i){const t=new np,e=ip(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Q);const r=new Q,s=new ie,o=new ie;function a(c){let d=0,f=0,m=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let u=0,v=0,_=0,p=0,h=0,y=0,E=0,M=0,L=0,C=0,P=0;c.sort(sp);for(let b=0,T=c.length;b<T;b++){const F=c[b],A=F.color,U=F.intensity,S=F.distance,B=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)d+=A.r*U,f+=A.g*U,m+=A.b*U;else if(F.isLightProbe){for(let tt=0;tt<9;tt++)n.probe[tt].addScaledVector(F.sh.coefficients[tt],U);P++}else if(F.isDirectionalLight){const tt=t.get(F);if(tt.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const W=F.shadow,q=e.get(F);q.shadowIntensity=W.intensity,q.shadowBias=W.bias,q.shadowNormalBias=W.normalBias,q.shadowRadius=W.radius,q.shadowMapSize=W.mapSize,n.directionalShadow[u]=q,n.directionalShadowMap[u]=B,n.directionalShadowMatrix[u]=F.shadow.matrix,y++}n.directional[u]=tt,u++}else if(F.isSpotLight){const tt=t.get(F);tt.position.setFromMatrixPosition(F.matrixWorld),tt.color.copy(A).multiplyScalar(U),tt.distance=S,tt.coneCos=Math.cos(F.angle),tt.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),tt.decay=F.decay,n.spot[_]=tt;const W=F.shadow;if(F.map&&(n.spotLightMap[L]=F.map,L++,W.updateMatrices(F),F.castShadow&&C++),n.spotLightMatrix[_]=W.matrix,F.castShadow){const q=e.get(F);q.shadowIntensity=W.intensity,q.shadowBias=W.bias,q.shadowNormalBias=W.normalBias,q.shadowRadius=W.radius,q.shadowMapSize=W.mapSize,n.spotShadow[_]=q,n.spotShadowMap[_]=B,M++}_++}else if(F.isRectAreaLight){const tt=t.get(F);tt.color.copy(A).multiplyScalar(U),tt.halfWidth.set(F.width*.5,0,0),tt.halfHeight.set(0,F.height*.5,0),n.rectArea[p]=tt,p++}else if(F.isPointLight){const tt=t.get(F);if(tt.color.copy(F.color).multiplyScalar(F.intensity),tt.distance=F.distance,tt.decay=F.decay,F.castShadow){const W=F.shadow,q=e.get(F);q.shadowIntensity=W.intensity,q.shadowBias=W.bias,q.shadowNormalBias=W.normalBias,q.shadowRadius=W.radius,q.shadowMapSize=W.mapSize,q.shadowCameraNear=W.camera.near,q.shadowCameraFar=W.camera.far,n.pointShadow[v]=q,n.pointShadowMap[v]=B,n.pointShadowMatrix[v]=F.shadow.matrix,E++}n.point[v]=tt,v++}else if(F.isHemisphereLight){const tt=t.get(F);tt.skyColor.copy(F.color).multiplyScalar(U),tt.groundColor.copy(F.groundColor).multiplyScalar(U),n.hemi[h]=tt,h++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=m;const N=n.hash;(N.directionalLength!==u||N.pointLength!==v||N.spotLength!==_||N.rectAreaLength!==p||N.hemiLength!==h||N.numDirectionalShadows!==y||N.numPointShadows!==E||N.numSpotShadows!==M||N.numSpotMaps!==L||N.numLightProbes!==P)&&(n.directional.length=u,n.spot.length=_,n.rectArea.length=p,n.point.length=v,n.hemi.length=h,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=M+L-C,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=P,N.directionalLength=u,N.pointLength=v,N.spotLength=_,N.rectAreaLength=p,N.hemiLength=h,N.numDirectionalShadows=y,N.numPointShadows=E,N.numSpotShadows=M,N.numSpotMaps=L,N.numLightProbes=P,n.version=rp++)}function l(c,d){let f=0,m=0,u=0,v=0,_=0;const p=d.matrixWorldInverse;for(let h=0,y=c.length;h<y;h++){const E=c[h];if(E.isDirectionalLight){const M=n.directional[f];M.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),f++}else if(E.isSpotLight){const M=n.spot[u];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),u++}else if(E.isRectAreaLight){const M=n.rectArea[v];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(E.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(E.isPointLight){const M=n.point[m];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(p),m++}else if(E.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function po(i){const t=new ap(i),e=[],n=[];function r(d){c.camera=d,e.length=0,n.length=0}function s(d){e.push(d)}function o(d){n.push(d)}function a(){t.setup(e)}function l(d){t.setupView(e,d)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function op(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new po(i),t.set(r,[a])):s>=o.length?(a=new po(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class lp extends cn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=nc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class cp extends cn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const hp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,up=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dp(i,t,e){let n=new aa;const r=new Bt,s=new Bt,o=new se,a=new lp({depthPacking:ic}),l=new cp,c={},d=e.maxTextureSize,f={[on]:be,[be]:on,[We]:We},m=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:hp,fragmentShader:up}),u=m.clone();u.defines.HORIZONTAL_PASS=1;const v=new He;v.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ke(v,m),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lo;let h=this.type;this.render=function(C,P,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const b=i.getRenderTarget(),T=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),A=i.state;A.setBlending(Sn),A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);const U=h!==nn&&this.type===nn,S=h===nn&&this.type!==nn;for(let B=0,tt=C.length;B<tt;B++){const W=C[B],q=W.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const K=q.getFrameExtents();if(r.multiply(K),s.copy(q.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/K.x),r.x=s.x*K.x,q.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/K.y),r.y=s.y*K.y,q.mapSize.y=s.y)),q.map===null||U===!0||S===!0){const z=this.type!==nn?{minFilter:ze,magFilter:ze}:{};q.map!==null&&q.map.dispose(),q.map=new Fn(r.x,r.y,z),q.map.texture.name=W.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const ot=q.getViewportCount();for(let z=0;z<ot;z++){const G=q.getViewport(z);o.set(s.x*G.x,s.y*G.y,s.x*G.z,s.y*G.w),A.viewport(o),q.updateMatrices(W,z),n=q.getFrustum(),M(P,N,q.camera,W,this.type)}q.isPointLightShadow!==!0&&this.type===nn&&y(q,N),q.needsUpdate=!1}h=this.type,p.needsUpdate=!1,i.setRenderTarget(b,T,F)};function y(C,P){const N=t.update(_);m.defines.VSM_SAMPLES!==C.blurSamples&&(m.defines.VSM_SAMPLES=C.blurSamples,u.defines.VSM_SAMPLES=C.blurSamples,m.needsUpdate=!0,u.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Fn(r.x,r.y)),m.uniforms.shadow_pass.value=C.map.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(P,null,N,m,_,null),u.uniforms.shadow_pass.value=C.mapPass.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(P,null,N,u,_,null)}function E(C,P,N,b){let T=null;const F=N.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(F!==void 0)T=F;else if(T=N.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const A=T.uuid,U=P.uuid;let S=c[A];S===void 0&&(S={},c[A]=S);let B=S[U];B===void 0&&(B=T.clone(),S[U]=B,P.addEventListener("dispose",L)),T=B}if(T.visible=P.visible,T.wireframe=P.wireframe,b===nn?T.side=P.shadowSide!==null?P.shadowSide:P.side:T.side=P.shadowSide!==null?P.shadowSide:f[P.side],T.alphaMap=P.alphaMap,T.alphaTest=P.alphaTest,T.map=P.map,T.clipShadows=P.clipShadows,T.clippingPlanes=P.clippingPlanes,T.clipIntersection=P.clipIntersection,T.displacementMap=P.displacementMap,T.displacementScale=P.displacementScale,T.displacementBias=P.displacementBias,T.wireframeLinewidth=P.wireframeLinewidth,T.linewidth=P.linewidth,N.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const A=i.properties.get(T);A.light=N}return T}function M(C,P,N,b,T){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&T===nn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,C.matrixWorld);const U=t.update(C),S=C.material;if(Array.isArray(S)){const B=U.groups;for(let tt=0,W=B.length;tt<W;tt++){const q=B[tt],K=S[q.materialIndex];if(K&&K.visible){const ot=E(C,K,b,T);C.onBeforeShadow(i,C,P,N,U,ot,q),i.renderBufferDirect(N,null,U,ot,C,q),C.onAfterShadow(i,C,P,N,U,ot,q)}}}else if(S.visible){const B=E(C,S,b,T);C.onBeforeShadow(i,C,P,N,U,B,null),i.renderBufferDirect(N,null,U,B,C,null),C.onAfterShadow(i,C,P,N,U,B,null)}}const A=C.children;for(let U=0,S=A.length;U<S;U++)M(A[U],P,N,b,T)}function L(C){C.target.removeEventListener("dispose",L);for(const N in c){const b=c[N],T=C.target.uuid;T in b&&(b[T].dispose(),delete b[T])}}}const fp={[fs]:ps,[ms]:vs,[_s]:xs,[ai]:gs,[ps]:fs,[vs]:ms,[xs]:_s,[gs]:ai};function pp(i,t){function e(){let H=!1;const xt=new se;let st=null;const lt=new se(0,0,0,0);return{setMask:function(St){st!==St&&!H&&(i.colorMask(St,St,St,St),st=St)},setLocked:function(St){H=St},setClear:function(St,Et,kt,re,pe){pe===!0&&(St*=re,Et*=re,kt*=re),xt.set(St,Et,kt,re),lt.equals(xt)===!1&&(i.clearColor(St,Et,kt,re),lt.copy(xt))},reset:function(){H=!1,st=null,lt.set(-1,0,0,0)}}}function n(){let H=!1,xt=!1,st=null,lt=null,St=null;return{setReversed:function(Et){if(xt!==Et){const kt=t.get("EXT_clip_control");xt?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT);const re=St;St=null,this.setClear(re)}xt=Et},getReversed:function(){return xt},setTest:function(Et){Et?ut(i.DEPTH_TEST):pt(i.DEPTH_TEST)},setMask:function(Et){st!==Et&&!H&&(i.depthMask(Et),st=Et)},setFunc:function(Et){if(xt&&(Et=fp[Et]),lt!==Et){switch(Et){case fs:i.depthFunc(i.NEVER);break;case ps:i.depthFunc(i.ALWAYS);break;case ms:i.depthFunc(i.LESS);break;case ai:i.depthFunc(i.LEQUAL);break;case _s:i.depthFunc(i.EQUAL);break;case gs:i.depthFunc(i.GEQUAL);break;case vs:i.depthFunc(i.GREATER);break;case xs:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}lt=Et}},setLocked:function(Et){H=Et},setClear:function(Et){St!==Et&&(xt&&(Et=1-Et),i.clearDepth(Et),St=Et)},reset:function(){H=!1,st=null,lt=null,St=null,xt=!1}}}function r(){let H=!1,xt=null,st=null,lt=null,St=null,Et=null,kt=null,re=null,pe=null;return{setTest:function(Kt){H||(Kt?ut(i.STENCIL_TEST):pt(i.STENCIL_TEST))},setMask:function(Kt){xt!==Kt&&!H&&(i.stencilMask(Kt),xt=Kt)},setFunc:function(Kt,Le,qe){(st!==Kt||lt!==Le||St!==qe)&&(i.stencilFunc(Kt,Le,qe),st=Kt,lt=Le,St=qe)},setOp:function(Kt,Le,qe){(Et!==Kt||kt!==Le||re!==qe)&&(i.stencilOp(Kt,Le,qe),Et=Kt,kt=Le,re=qe)},setLocked:function(Kt){H=Kt},setClear:function(Kt){pe!==Kt&&(i.clearStencil(Kt),pe=Kt)},reset:function(){H=!1,xt=null,st=null,lt=null,St=null,Et=null,kt=null,re=null,pe=null}}}const s=new e,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let d={},f={},m=new WeakMap,u=[],v=null,_=!1,p=null,h=null,y=null,E=null,M=null,L=null,C=null,P=new Gt(0,0,0),N=0,b=!1,T=null,F=null,A=null,U=null,S=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let tt=!1,W=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(q)[1]),tt=W>=1):q.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),tt=W>=2);let K=null,ot={};const z=i.getParameter(i.SCISSOR_BOX),G=i.getParameter(i.VIEWPORT),_t=new se().fromArray(z),X=new se().fromArray(G);function et(H,xt,st,lt){const St=new Uint8Array(4),Et=i.createTexture();i.bindTexture(H,Et),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let kt=0;kt<st;kt++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(xt,0,i.RGBA,1,1,lt,0,i.RGBA,i.UNSIGNED_BYTE,St):i.texImage2D(xt+kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,St);return Et}const mt={};mt[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),mt[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),mt[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ut(i.DEPTH_TEST),o.setFunc(ai),$(!1),I(ga),ut(i.CULL_FACE),g(Sn);function ut(H){d[H]!==!0&&(i.enable(H),d[H]=!0)}function pt(H){d[H]!==!1&&(i.disable(H),d[H]=!1)}function yt(H,xt){return f[H]!==xt?(i.bindFramebuffer(H,xt),f[H]=xt,H===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=xt),H===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=xt),!0):!1}function Pt(H,xt){let st=u,lt=!1;if(H){st=m.get(xt),st===void 0&&(st=[],m.set(xt,st));const St=H.textures;if(st.length!==St.length||st[0]!==i.COLOR_ATTACHMENT0){for(let Et=0,kt=St.length;Et<kt;Et++)st[Et]=i.COLOR_ATTACHMENT0+Et;st.length=St.length,lt=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,lt=!0);lt&&i.drawBuffers(st)}function It(H){return v!==H?(i.useProgram(H),v=H,!0):!1}const Ut={[Dn]:i.FUNC_ADD,[Cl]:i.FUNC_SUBTRACT,[Pl]:i.FUNC_REVERSE_SUBTRACT};Ut[Dl]=i.MIN,Ut[Ll]=i.MAX;const jt={[Il]:i.ZERO,[Ul]:i.ONE,[Nl]:i.SRC_COLOR,[us]:i.SRC_ALPHA,[Hl]:i.SRC_ALPHA_SATURATE,[kl]:i.DST_COLOR,[Ol]:i.DST_ALPHA,[Fl]:i.ONE_MINUS_SRC_COLOR,[ds]:i.ONE_MINUS_SRC_ALPHA,[zl]:i.ONE_MINUS_DST_COLOR,[Bl]:i.ONE_MINUS_DST_ALPHA,[Vl]:i.CONSTANT_COLOR,[Gl]:i.ONE_MINUS_CONSTANT_COLOR,[Wl]:i.CONSTANT_ALPHA,[Xl]:i.ONE_MINUS_CONSTANT_ALPHA};function g(H,xt,st,lt,St,Et,kt,re,pe,Kt){if(H===Sn){_===!0&&(pt(i.BLEND),_=!1);return}if(_===!1&&(ut(i.BLEND),_=!0),H!==Rl){if(H!==p||Kt!==b){if((h!==Dn||M!==Dn)&&(i.blendEquation(i.FUNC_ADD),h=Dn,M=Dn),Kt)switch(H){case ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case va:i.blendFunc(i.ONE,i.ONE);break;case xa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sa:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case va:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case xa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sa:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}y=null,E=null,L=null,C=null,P.set(0,0,0),N=0,p=H,b=Kt}return}St=St||xt,Et=Et||st,kt=kt||lt,(xt!==h||St!==M)&&(i.blendEquationSeparate(Ut[xt],Ut[St]),h=xt,M=St),(st!==y||lt!==E||Et!==L||kt!==C)&&(i.blendFuncSeparate(jt[st],jt[lt],jt[Et],jt[kt]),y=st,E=lt,L=Et,C=kt),(re.equals(P)===!1||pe!==N)&&(i.blendColor(re.r,re.g,re.b,pe),P.copy(re),N=pe),p=H,b=!1}function at(H,xt){H.side===We?pt(i.CULL_FACE):ut(i.CULL_FACE);let st=H.side===be;xt&&(st=!st),$(st),H.blending===ii&&H.transparent===!1?g(Sn):g(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),s.setMask(H.colorWrite);const lt=H.stencilWrite;a.setTest(lt),lt&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),k(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function $(H){T!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),T=H)}function I(H){H!==Tl?(ut(i.CULL_FACE),H!==F&&(H===ga?i.cullFace(i.BACK):H===wl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pt(i.CULL_FACE),F=H}function D(H){H!==A&&(tt&&i.lineWidth(H),A=H)}function k(H,xt,st){H?(ut(i.POLYGON_OFFSET_FILL),(U!==xt||S!==st)&&(i.polygonOffset(xt,st),U=xt,S=st)):pt(i.POLYGON_OFFSET_FILL)}function nt(H){H?ut(i.SCISSOR_TEST):pt(i.SCISSOR_TEST)}function w(H){H===void 0&&(H=i.TEXTURE0+B-1),K!==H&&(i.activeTexture(H),K=H)}function x(H,xt,st){st===void 0&&(K===null?st=i.TEXTURE0+B-1:st=K);let lt=ot[st];lt===void 0&&(lt={type:void 0,texture:void 0},ot[st]=lt),(lt.type!==H||lt.texture!==xt)&&(K!==st&&(i.activeTexture(st),K=st),i.bindTexture(H,xt||mt[H]),lt.type=H,lt.texture=xt)}function O(){const H=ot[K];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function V(){try{i.compressedTexImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ft(){try{i.texSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function gt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Wt(){try{i.texStorage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ht(){try{i.texStorage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Tt(){try{i.texImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Mt(){try{i.texImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Lt(H){_t.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),_t.copy(H))}function wt(H){X.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),X.copy(H))}function Nt(H,xt){let st=c.get(xt);st===void 0&&(st=new WeakMap,c.set(xt,st));let lt=st.get(H);lt===void 0&&(lt=i.getUniformBlockIndex(xt,H.name),st.set(H,lt))}function Ot(H,xt){const lt=c.get(xt).get(H);l.get(xt)!==lt&&(i.uniformBlockBinding(xt,lt,H.__bindingPointIndex),l.set(xt,lt))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},K=null,ot={},f={},m=new WeakMap,u=[],v=null,_=!1,p=null,h=null,y=null,E=null,M=null,L=null,C=null,P=new Gt(0,0,0),N=0,b=!1,T=null,F=null,A=null,U=null,S=null,_t.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ut,disable:pt,bindFramebuffer:yt,drawBuffers:Pt,useProgram:It,setBlending:g,setMaterial:at,setFlipSided:$,setCullFace:I,setLineWidth:D,setPolygonOffset:k,setScissorTest:nt,activeTexture:w,bindTexture:x,unbindTexture:O,compressedTexImage2D:Z,compressedTexImage3D:V,texImage2D:Tt,texImage3D:Mt,updateUBOMapping:Nt,uniformBlockBinding:Ot,texStorage2D:Wt,texStorage3D:ht,texSubImage2D:J,texSubImage3D:ft,compressedTexSubImage2D:ct,compressedTexSubImage3D:gt,scissor:Lt,viewport:wt,reset:$t}}function mo(i,t,e,n){const r=mp(n);switch(e){case Oo:return i*t;case ko:return i*t;case zo:return i*t*2;case Ho:return i*t/r.components*r.byteLength;case ia:return i*t/r.components*r.byteLength;case Vo:return i*t*2/r.components*r.byteLength;case ra:return i*t*2/r.components*r.byteLength;case Bo:return i*t*3/r.components*r.byteLength;case Be:return i*t*4/r.components*r.byteLength;case sa:return i*t*4/r.components*r.byteLength;case dr:case fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case pr:case mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case bs:case ws:return Math.max(i,16)*Math.max(t,8)/4;case Es:case Ts:return Math.max(i,8)*Math.max(t,8)/2;case As:case Rs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Cs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ps:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ds:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ls:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Is:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Us:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ns:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Fs:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Os:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Bs:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ks:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case zs:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Hs:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Vs:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Gs:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case _r:case Ws:case Xs:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Go:case js:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ys:case qs:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function mp(i){switch(i){case ln:case Uo:return{byteLength:1,components:1};case Ci:case No:case Di:return{byteLength:2,components:1};case ea:case na:return{byteLength:2,components:4};case Nn:case ta:case rn:return{byteLength:4,components:1};case Fo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function _p(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Bt,d=new WeakMap;let f;const m=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,x){return u?new OffscreenCanvas(w,x):Pi("canvas")}function _(w,x,O){let Z=1;const V=nt(w);if((V.width>O||V.height>O)&&(Z=O/Math.max(V.width,V.height)),Z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const J=Math.floor(Z*V.width),ft=Math.floor(Z*V.height);f===void 0&&(f=v(J,ft));const ct=x?v(J,ft):f;return ct.width=J,ct.height=ft,ct.getContext("2d").drawImage(w,0,0,J,ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+J+"x"+ft+")."),ct}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),w;return w}function p(w){return w.generateMipmaps}function h(w){i.generateMipmap(w)}function y(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(w,x,O,Z,V=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let J=x;if(x===i.RED&&(O===i.FLOAT&&(J=i.R32F),O===i.HALF_FLOAT&&(J=i.R16F),O===i.UNSIGNED_BYTE&&(J=i.R8)),x===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.R8UI),O===i.UNSIGNED_SHORT&&(J=i.R16UI),O===i.UNSIGNED_INT&&(J=i.R32UI),O===i.BYTE&&(J=i.R8I),O===i.SHORT&&(J=i.R16I),O===i.INT&&(J=i.R32I)),x===i.RG&&(O===i.FLOAT&&(J=i.RG32F),O===i.HALF_FLOAT&&(J=i.RG16F),O===i.UNSIGNED_BYTE&&(J=i.RG8)),x===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RG8UI),O===i.UNSIGNED_SHORT&&(J=i.RG16UI),O===i.UNSIGNED_INT&&(J=i.RG32UI),O===i.BYTE&&(J=i.RG8I),O===i.SHORT&&(J=i.RG16I),O===i.INT&&(J=i.RG32I)),x===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RGB8UI),O===i.UNSIGNED_SHORT&&(J=i.RGB16UI),O===i.UNSIGNED_INT&&(J=i.RGB32UI),O===i.BYTE&&(J=i.RGB8I),O===i.SHORT&&(J=i.RGB16I),O===i.INT&&(J=i.RGB32I)),x===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),O===i.UNSIGNED_INT&&(J=i.RGBA32UI),O===i.BYTE&&(J=i.RGBA8I),O===i.SHORT&&(J=i.RGBA16I),O===i.INT&&(J=i.RGBA32I)),x===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),x===i.RGBA){const ft=V?wr:Xt.getTransfer(Z);O===i.FLOAT&&(J=i.RGBA32F),O===i.HALF_FLOAT&&(J=i.RGBA16F),O===i.UNSIGNED_BYTE&&(J=ft===Jt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function M(w,x){let O;return w?x===null||x===Nn||x===ci?O=i.DEPTH24_STENCIL8:x===rn?O=i.DEPTH32F_STENCIL8:x===Ci&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Nn||x===ci?O=i.DEPTH_COMPONENT24:x===rn?O=i.DEPTH_COMPONENT32F:x===Ci&&(O=i.DEPTH_COMPONENT16),O}function L(w,x){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==ze&&w.minFilter!==Xe?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function C(w){const x=w.target;x.removeEventListener("dispose",C),N(x),x.isVideoTexture&&d.delete(x)}function P(w){const x=w.target;x.removeEventListener("dispose",P),T(x)}function N(w){const x=n.get(w);if(x.__webglInit===void 0)return;const O=w.source,Z=m.get(O);if(Z){const V=Z[x.__cacheKey];V.usedTimes--,V.usedTimes===0&&b(w),Object.keys(Z).length===0&&m.delete(O)}n.remove(w)}function b(w){const x=n.get(w);i.deleteTexture(x.__webglTexture);const O=w.source,Z=m.get(O);delete Z[x.__cacheKey],o.memory.textures--}function T(w){const x=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let V=0;V<x.__webglFramebuffer[Z].length;V++)i.deleteFramebuffer(x.__webglFramebuffer[Z][V]);else i.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)i.deleteFramebuffer(x.__webglFramebuffer[Z]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=w.textures;for(let Z=0,V=O.length;Z<V;Z++){const J=n.get(O[Z]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(O[Z])}n.remove(w)}let F=0;function A(){F=0}function U(){const w=F;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),F+=1,w}function S(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function B(w,x){const O=n.get(w);if(w.isVideoTexture&&D(w),w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){const Z=w.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(O,w,x);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+x)}function tt(w,x){const O=n.get(w);if(w.version>0&&O.__version!==w.version){X(O,w,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+x)}function W(w,x){const O=n.get(w);if(w.version>0&&O.__version!==w.version){X(O,w,x);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+x)}function q(w,x){const O=n.get(w);if(w.version>0&&O.__version!==w.version){et(O,w,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+x)}const K={[Sr]:i.REPEAT,[In]:i.CLAMP_TO_EDGE,[Ms]:i.MIRRORED_REPEAT},ot={[ze]:i.NEAREST,[ec]:i.NEAREST_MIPMAP_NEAREST,[Bi]:i.NEAREST_MIPMAP_LINEAR,[Xe]:i.LINEAR,[Dr]:i.LINEAR_MIPMAP_NEAREST,[Un]:i.LINEAR_MIPMAP_LINEAR},z={[sc]:i.NEVER,[uc]:i.ALWAYS,[ac]:i.LESS,[Xo]:i.LEQUAL,[oc]:i.EQUAL,[hc]:i.GEQUAL,[lc]:i.GREATER,[cc]:i.NOTEQUAL};function G(w,x){if(x.type===rn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Xe||x.magFilter===Dr||x.magFilter===Bi||x.magFilter===Un||x.minFilter===Xe||x.minFilter===Dr||x.minFilter===Bi||x.minFilter===Un)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,K[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,K[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,K[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ot[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ot[x.minFilter]),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,z[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ze||x.minFilter!==Bi&&x.minFilter!==Un||x.type===rn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function _t(w,x){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",C));const Z=x.source;let V=m.get(Z);V===void 0&&(V={},m.set(Z,V));const J=S(x);if(J!==w.__cacheKey){V[J]===void 0&&(V[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),V[J].usedTimes++;const ft=V[w.__cacheKey];ft!==void 0&&(V[w.__cacheKey].usedTimes--,ft.usedTimes===0&&b(x)),w.__cacheKey=J,w.__webglTexture=V[J].texture}return O}function X(w,x,O){let Z=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=i.TEXTURE_3D);const V=_t(w,x),J=x.source;e.bindTexture(Z,w.__webglTexture,i.TEXTURE0+O);const ft=n.get(J);if(J.version!==ft.__version||V===!0){e.activeTexture(i.TEXTURE0+O);const ct=Xt.getPrimaries(Xt.workingColorSpace),gt=x.colorSpace===xn?null:Xt.getPrimaries(x.colorSpace),Wt=x.colorSpace===xn||ct===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let ht=_(x.image,!1,r.maxTextureSize);ht=k(x,ht);const Tt=s.convert(x.format,x.colorSpace),Mt=s.convert(x.type);let Lt=E(x.internalFormat,Tt,Mt,x.colorSpace,x.isVideoTexture);G(Z,x);let wt;const Nt=x.mipmaps,Ot=x.isVideoTexture!==!0,$t=ft.__version===void 0||V===!0,H=J.dataReady,xt=L(x,ht);if(x.isDepthTexture)Lt=M(x.format===hi,x.type),$t&&(Ot?e.texStorage2D(i.TEXTURE_2D,1,Lt,ht.width,ht.height):e.texImage2D(i.TEXTURE_2D,0,Lt,ht.width,ht.height,0,Tt,Mt,null));else if(x.isDataTexture)if(Nt.length>0){Ot&&$t&&e.texStorage2D(i.TEXTURE_2D,xt,Lt,Nt[0].width,Nt[0].height);for(let st=0,lt=Nt.length;st<lt;st++)wt=Nt[st],Ot?H&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,wt.width,wt.height,Tt,Mt,wt.data):e.texImage2D(i.TEXTURE_2D,st,Lt,wt.width,wt.height,0,Tt,Mt,wt.data);x.generateMipmaps=!1}else Ot?($t&&e.texStorage2D(i.TEXTURE_2D,xt,Lt,ht.width,ht.height),H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht.width,ht.height,Tt,Mt,ht.data)):e.texImage2D(i.TEXTURE_2D,0,Lt,ht.width,ht.height,0,Tt,Mt,ht.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ot&&$t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,Lt,Nt[0].width,Nt[0].height,ht.depth);for(let st=0,lt=Nt.length;st<lt;st++)if(wt=Nt[st],x.format!==Be)if(Tt!==null)if(Ot){if(H)if(x.layerUpdates.size>0){const St=mo(wt.width,wt.height,x.format,x.type);for(const Et of x.layerUpdates){const kt=wt.data.subarray(Et*St/wt.data.BYTES_PER_ELEMENT,(Et+1)*St/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,Et,wt.width,wt.height,1,Tt,kt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,wt.width,wt.height,ht.depth,Tt,wt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,Lt,wt.width,wt.height,ht.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?H&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,wt.width,wt.height,ht.depth,Tt,Mt,wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,Lt,wt.width,wt.height,ht.depth,0,Tt,Mt,wt.data)}else{Ot&&$t&&e.texStorage2D(i.TEXTURE_2D,xt,Lt,Nt[0].width,Nt[0].height);for(let st=0,lt=Nt.length;st<lt;st++)wt=Nt[st],x.format!==Be?Tt!==null?Ot?H&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,wt.width,wt.height,Tt,wt.data):e.compressedTexImage2D(i.TEXTURE_2D,st,Lt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?H&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,wt.width,wt.height,Tt,Mt,wt.data):e.texImage2D(i.TEXTURE_2D,st,Lt,wt.width,wt.height,0,Tt,Mt,wt.data)}else if(x.isDataArrayTexture)if(Ot){if($t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,Lt,ht.width,ht.height,ht.depth),H)if(x.layerUpdates.size>0){const st=mo(ht.width,ht.height,x.format,x.type);for(const lt of x.layerUpdates){const St=ht.data.subarray(lt*st/ht.data.BYTES_PER_ELEMENT,(lt+1)*st/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,ht.width,ht.height,1,Tt,Mt,St)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Tt,Mt,ht.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,ht.width,ht.height,ht.depth,0,Tt,Mt,ht.data);else if(x.isData3DTexture)Ot?($t&&e.texStorage3D(i.TEXTURE_3D,xt,Lt,ht.width,ht.height,ht.depth),H&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Tt,Mt,ht.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,ht.width,ht.height,ht.depth,0,Tt,Mt,ht.data);else if(x.isFramebufferTexture){if($t)if(Ot)e.texStorage2D(i.TEXTURE_2D,xt,Lt,ht.width,ht.height);else{let st=ht.width,lt=ht.height;for(let St=0;St<xt;St++)e.texImage2D(i.TEXTURE_2D,St,Lt,st,lt,0,Tt,Mt,null),st>>=1,lt>>=1}}else if(Nt.length>0){if(Ot&&$t){const st=nt(Nt[0]);e.texStorage2D(i.TEXTURE_2D,xt,Lt,st.width,st.height)}for(let st=0,lt=Nt.length;st<lt;st++)wt=Nt[st],Ot?H&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,Tt,Mt,wt):e.texImage2D(i.TEXTURE_2D,st,Lt,Tt,Mt,wt);x.generateMipmaps=!1}else if(Ot){if($t){const st=nt(ht);e.texStorage2D(i.TEXTURE_2D,xt,Lt,st.width,st.height)}H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt,Mt,ht)}else e.texImage2D(i.TEXTURE_2D,0,Lt,Tt,Mt,ht);p(x)&&h(Z),ft.__version=J.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function et(w,x,O){if(x.image.length!==6)return;const Z=_t(w,x),V=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+O);const J=n.get(V);if(V.version!==J.__version||Z===!0){e.activeTexture(i.TEXTURE0+O);const ft=Xt.getPrimaries(Xt.workingColorSpace),ct=x.colorSpace===xn?null:Xt.getPrimaries(x.colorSpace),gt=x.colorSpace===xn||ft===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const Wt=x.isCompressedTexture||x.image[0].isCompressedTexture,ht=x.image[0]&&x.image[0].isDataTexture,Tt=[];for(let lt=0;lt<6;lt++)!Wt&&!ht?Tt[lt]=_(x.image[lt],!0,r.maxCubemapSize):Tt[lt]=ht?x.image[lt].image:x.image[lt],Tt[lt]=k(x,Tt[lt]);const Mt=Tt[0],Lt=s.convert(x.format,x.colorSpace),wt=s.convert(x.type),Nt=E(x.internalFormat,Lt,wt,x.colorSpace),Ot=x.isVideoTexture!==!0,$t=J.__version===void 0||Z===!0,H=V.dataReady;let xt=L(x,Mt);G(i.TEXTURE_CUBE_MAP,x);let st;if(Wt){Ot&&$t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,Nt,Mt.width,Mt.height);for(let lt=0;lt<6;lt++){st=Tt[lt].mipmaps;for(let St=0;St<st.length;St++){const Et=st[St];x.format!==Be?Lt!==null?Ot?H&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St,0,0,Et.width,Et.height,Lt,Et.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St,Nt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St,0,0,Et.width,Et.height,Lt,wt,Et.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St,Nt,Et.width,Et.height,0,Lt,wt,Et.data)}}}else{if(st=x.mipmaps,Ot&&$t){st.length>0&&xt++;const lt=nt(Tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,Nt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(ht){Ot?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Tt[lt].width,Tt[lt].height,Lt,wt,Tt[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Nt,Tt[lt].width,Tt[lt].height,0,Lt,wt,Tt[lt].data);for(let St=0;St<st.length;St++){const kt=st[St].image[lt].image;Ot?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St+1,0,0,kt.width,kt.height,Lt,wt,kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St+1,Nt,kt.width,kt.height,0,Lt,wt,kt.data)}}else{Ot?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Lt,wt,Tt[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Nt,Lt,wt,Tt[lt]);for(let St=0;St<st.length;St++){const Et=st[St];Ot?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St+1,0,0,Lt,wt,Et.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St+1,Nt,Lt,wt,Et.image[lt])}}}p(x)&&h(i.TEXTURE_CUBE_MAP),J.__version=V.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function mt(w,x,O,Z,V,J){const ft=s.convert(O.format,O.colorSpace),ct=s.convert(O.type),gt=E(O.internalFormat,ft,ct,O.colorSpace),Wt=n.get(x),ht=n.get(O);if(ht.__renderTarget=x,!Wt.__hasExternalTextures){const Tt=Math.max(1,x.width>>J),Mt=Math.max(1,x.height>>J);V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?e.texImage3D(V,J,gt,Tt,Mt,x.depth,0,ft,ct,null):e.texImage2D(V,J,gt,Tt,Mt,0,ft,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),I(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,V,ht.__webglTexture,0,$(x)):(V===i.TEXTURE_2D||V>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,V,ht.__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(w,x,O){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer){const Z=x.depthTexture,V=Z&&Z.isDepthTexture?Z.type:null,J=M(x.stencilBuffer,V),ft=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=$(x);I(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,J,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,J,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,J,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,w)}else{const Z=x.textures;for(let V=0;V<Z.length;V++){const J=Z[V],ft=s.convert(J.format,J.colorSpace),ct=s.convert(J.type),gt=E(J.internalFormat,ft,ct,J.colorSpace),Wt=$(x);O&&I(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,gt,x.width,x.height):I(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt,gt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,gt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pt(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(x.depthTexture);Z.__renderTarget=x,(!Z.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),B(x.depthTexture,0);const V=Z.__webglTexture,J=$(x);if(x.depthTexture.format===ri)I(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,V,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,V,0);else if(x.depthTexture.format===hi)I(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,V,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,V,0);else throw new Error("Unknown depthTexture format")}function yt(w){const x=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){const Z=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Z){const V=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Z.removeEventListener("dispose",V)};Z.addEventListener("dispose",V),x.__depthDisposeCallback=V}x.__boundDepthTexture=Z}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");pt(x.__webglFramebuffer,w)}else if(O){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]===void 0)x.__webglDepthbuffer[Z]=i.createRenderbuffer(),ut(x.__webglDepthbuffer[Z],w,!1);else{const V=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,V,i.RENDERBUFFER,J)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),ut(x.__webglDepthbuffer,w,!1);else{const Z=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,V)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(w,x,O){const Z=n.get(w);x!==void 0&&mt(Z.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&yt(w)}function It(w){const x=w.texture,O=n.get(w),Z=n.get(x);w.addEventListener("dispose",P);const V=w.textures,J=w.isWebGLCubeRenderTarget===!0,ft=V.length>1;if(ft||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=x.version,o.memory.textures++),J){O.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[ct]=[];for(let gt=0;gt<x.mipmaps.length;gt++)O.__webglFramebuffer[ct][gt]=i.createFramebuffer()}else O.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let ct=0;ct<x.mipmaps.length;ct++)O.__webglFramebuffer[ct]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(ft)for(let ct=0,gt=V.length;ct<gt;ct++){const Wt=n.get(V[ct]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&I(w)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ct=0;ct<V.length;ct++){const gt=V[ct];O.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ct]);const Wt=s.convert(gt.format,gt.colorSpace),ht=s.convert(gt.type),Tt=E(gt.internalFormat,Wt,ht,gt.colorSpace,w.isXRRenderTarget===!0),Mt=$(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,Tt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,O.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(O.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),G(i.TEXTURE_CUBE_MAP,x);for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0)for(let gt=0;gt<x.mipmaps.length;gt++)mt(O.__webglFramebuffer[ct][gt],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,gt);else mt(O.__webglFramebuffer[ct],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);p(x)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let ct=0,gt=V.length;ct<gt;ct++){const Wt=V[ct],ht=n.get(Wt);e.bindTexture(i.TEXTURE_2D,ht.__webglTexture),G(i.TEXTURE_2D,Wt),mt(O.__webglFramebuffer,w,Wt,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),p(Wt)&&h(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ct=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,Z.__webglTexture),G(ct,x),x.mipmaps&&x.mipmaps.length>0)for(let gt=0;gt<x.mipmaps.length;gt++)mt(O.__webglFramebuffer[gt],w,x,i.COLOR_ATTACHMENT0,ct,gt);else mt(O.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,ct,0);p(x)&&h(ct),e.unbindTexture()}w.depthBuffer&&yt(w)}function Ut(w){const x=w.textures;for(let O=0,Z=x.length;O<Z;O++){const V=x[O];if(p(V)){const J=y(w),ft=n.get(V).__webglTexture;e.bindTexture(J,ft),h(J),e.unbindTexture()}}}const jt=[],g=[];function at(w){if(w.samples>0){if(I(w)===!1){const x=w.textures,O=w.width,Z=w.height;let V=i.COLOR_BUFFER_BIT;const J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=n.get(w),ct=x.length>1;if(ct)for(let gt=0;gt<x.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let gt=0;gt<x.length;gt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(V|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(V|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ft.__webglColorRenderbuffer[gt]);const Wt=n.get(x[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Wt,0)}i.blitFramebuffer(0,0,O,Z,0,0,O,Z,V,i.NEAREST),l===!0&&(jt.length=0,g.length=0,jt.push(i.COLOR_ATTACHMENT0+gt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(jt.push(J),g.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,g)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,jt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let gt=0;gt<x.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,ft.__webglColorRenderbuffer[gt]);const Wt=n.get(x[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,Wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const x=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function $(w){return Math.min(r.maxSamples,w.samples)}function I(w){const x=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function D(w){const x=o.render.frame;d.get(w)!==x&&(d.set(w,x),w.update())}function k(w,x){const O=w.colorSpace,Z=w.format,V=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==di&&O!==xn&&(Xt.getTransfer(O)===Jt?(Z!==Be||V!==ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}function nt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=A,this.setTexture2D=B,this.setTexture2DArray=tt,this.setTexture3D=W,this.setTextureCube=q,this.rebindTextures=Pt,this.setupRenderTarget=It,this.updateRenderTargetMipmap=Ut,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=I}function gp(i,t){function e(n,r=xn){let s;const o=Xt.getTransfer(r);if(n===ln)return i.UNSIGNED_BYTE;if(n===ea)return i.UNSIGNED_SHORT_4_4_4_4;if(n===na)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Fo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Uo)return i.BYTE;if(n===No)return i.SHORT;if(n===Ci)return i.UNSIGNED_SHORT;if(n===ta)return i.INT;if(n===Nn)return i.UNSIGNED_INT;if(n===rn)return i.FLOAT;if(n===Di)return i.HALF_FLOAT;if(n===Oo)return i.ALPHA;if(n===Bo)return i.RGB;if(n===Be)return i.RGBA;if(n===ko)return i.LUMINANCE;if(n===zo)return i.LUMINANCE_ALPHA;if(n===ri)return i.DEPTH_COMPONENT;if(n===hi)return i.DEPTH_STENCIL;if(n===Ho)return i.RED;if(n===ia)return i.RED_INTEGER;if(n===Vo)return i.RG;if(n===ra)return i.RG_INTEGER;if(n===sa)return i.RGBA_INTEGER;if(n===dr||n===fr||n===pr||n===mr)if(o===Jt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===dr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===pr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===dr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===pr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Es||n===bs||n===Ts||n===ws)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Es)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ts)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ws)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===As||n===Rs||n===Cs)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===As||n===Rs)return o===Jt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Cs)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ps||n===Ds||n===Ls||n===Is||n===Us||n===Ns||n===Fs||n===Os||n===Bs||n===ks||n===zs||n===Hs||n===Vs||n===Gs)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ps)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ds)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ls)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Is)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Us)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ns)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fs)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Os)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bs)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ks)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zs)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Hs)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vs)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Gs)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_r||n===Ws||n===Xs)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===_r)return o===Jt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ws)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xs)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Go||n===js||n===Ys||n===qs)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===_r)return s.COMPRESSED_RED_RGTC1_EXT;if(n===js)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ys)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qs)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ci?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class vp extends De{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ai extends le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xp={type:"move"};class ss{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),h=this._getHandJoint(c,_);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],m=d.position.distanceTo(f.position),u=.02,v=.005;c.inputState.pinching&&m>u+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&m<=u-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xp)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ai;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Sp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Mp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new Se,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Mn({vertexShader:Sp,fragmentShader:yp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ke(new Rr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ep extends Bn{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,m=null,u=null,v=null;const _=new Mp,p=e.getContextAttributes();let h=null,y=null;const E=[],M=[],L=new Bt;let C=null;const P=new De;P.viewport=new se;const N=new De;N.viewport=new se;const b=[P,N],T=new vp;let F=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let et=E[X];return et===void 0&&(et=new ss,E[X]=et),et.getTargetRaySpace()},this.getControllerGrip=function(X){let et=E[X];return et===void 0&&(et=new ss,E[X]=et),et.getGripSpace()},this.getHand=function(X){let et=E[X];return et===void 0&&(et=new ss,E[X]=et),et.getHandSpace()};function U(X){const et=M.indexOf(X.inputSource);if(et===-1)return;const mt=E[et];mt!==void 0&&(mt.update(X.inputSource,X.frame,c||o),mt.dispatchEvent({type:X.type,data:X.inputSource}))}function S(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",S),r.removeEventListener("inputsourceschange",B);for(let X=0;X<E.length;X++){const et=M[X];et!==null&&(M[X]=null,E[X].disconnect(et))}F=null,A=null,_.reset(),t.setRenderTarget(h),u=null,m=null,f=null,r=null,y=null,_t.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return m!==null?m:u},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(h=t.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",S),r.addEventListener("inputsourceschange",B),p.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(L),r.renderState.layers===void 0){const et={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(r,e,et),r.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new Fn(u.framebufferWidth,u.framebufferHeight,{format:Be,type:ln,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let et=null,mt=null,ut=null;p.depth&&(ut=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=p.stencil?hi:ri,mt=p.stencil?ci:Nn);const pt={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:s};f=new XRWebGLBinding(r,e),m=f.createProjectionLayer(pt),r.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),y=new Fn(m.textureWidth,m.textureHeight,{format:Be,type:ln,depthTexture:new sl(m.textureWidth,m.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),_t.setContext(r),_t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function B(X){for(let et=0;et<X.removed.length;et++){const mt=X.removed[et],ut=M.indexOf(mt);ut>=0&&(M[ut]=null,E[ut].disconnect(mt))}for(let et=0;et<X.added.length;et++){const mt=X.added[et];let ut=M.indexOf(mt);if(ut===-1){for(let yt=0;yt<E.length;yt++)if(yt>=M.length){M.push(mt),ut=yt;break}else if(M[yt]===null){M[yt]=mt,ut=yt;break}if(ut===-1)break}const pt=E[ut];pt&&pt.connect(mt)}}const tt=new Q,W=new Q;function q(X,et,mt){tt.setFromMatrixPosition(et.matrixWorld),W.setFromMatrixPosition(mt.matrixWorld);const ut=tt.distanceTo(W),pt=et.projectionMatrix.elements,yt=mt.projectionMatrix.elements,Pt=pt[14]/(pt[10]-1),It=pt[14]/(pt[10]+1),Ut=(pt[9]+1)/pt[5],jt=(pt[9]-1)/pt[5],g=(pt[8]-1)/pt[0],at=(yt[8]+1)/yt[0],$=Pt*g,I=Pt*at,D=ut/(-g+at),k=D*-g;if(et.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(k),X.translateZ(D),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),pt[10]===-1)X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const nt=Pt+D,w=It+D,x=$-k,O=I+(ut-k),Z=Ut*It/w*nt,V=jt*It/w*nt;X.projectionMatrix.makePerspective(x,O,Z,V,nt,w),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function K(X,et){et===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(et.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let et=X.near,mt=X.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(mt=_.depthFar)),T.near=N.near=P.near=et,T.far=N.far=P.far=mt,(F!==T.near||A!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),F=T.near,A=T.far),P.layers.mask=X.layers.mask|2,N.layers.mask=X.layers.mask|4,T.layers.mask=P.layers.mask|N.layers.mask;const ut=X.parent,pt=T.cameras;K(T,ut);for(let yt=0;yt<pt.length;yt++)K(pt[yt],ut);pt.length===2?q(T,P,N):T.projectionMatrix.copy(P.projectionMatrix),ot(X,T,ut)};function ot(X,et,mt){mt===null?X.matrix.copy(et.matrixWorld):(X.matrix.copy(mt.matrixWorld),X.matrix.invert(),X.matrix.multiply(et.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Zs*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(m===null&&u===null))return l},this.setFoveation=function(X){l=X,m!==null&&(m.fixedFoveation=X),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(T)};let z=null;function G(X,et){if(d=et.getViewerPose(c||o),v=et,d!==null){const mt=d.views;u!==null&&(t.setRenderTargetFramebuffer(y,u.framebuffer),t.setRenderTarget(y));let ut=!1;mt.length!==T.cameras.length&&(T.cameras.length=0,ut=!0);for(let yt=0;yt<mt.length;yt++){const Pt=mt[yt];let It=null;if(u!==null)It=u.getViewport(Pt);else{const jt=f.getViewSubImage(m,Pt);It=jt.viewport,yt===0&&(t.setRenderTargetTextures(y,jt.colorTexture,m.ignoreDepthValues?void 0:jt.depthStencilTexture),t.setRenderTarget(y))}let Ut=b[yt];Ut===void 0&&(Ut=new De,Ut.layers.enable(yt),Ut.viewport=new se,b[yt]=Ut),Ut.matrix.fromArray(Pt.transform.matrix),Ut.matrix.decompose(Ut.position,Ut.quaternion,Ut.scale),Ut.projectionMatrix.fromArray(Pt.projectionMatrix),Ut.projectionMatrixInverse.copy(Ut.projectionMatrix).invert(),Ut.viewport.set(It.x,It.y,It.width,It.height),yt===0&&(T.matrix.copy(Ut.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),ut===!0&&T.cameras.push(Ut)}const pt=r.enabledFeatures;if(pt&&pt.includes("depth-sensing")){const yt=f.getDepthInformation(mt[0]);yt&&yt.isValid&&yt.texture&&_.init(t,yt,r.renderState)}}for(let mt=0;mt<E.length;mt++){const ut=M[mt],pt=E[mt];ut!==null&&pt!==void 0&&pt.update(ut,et,c||o)}z&&z(X,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),v=null}const _t=new il;_t.setAnimationLoop(G),this.setAnimationLoop=function(X){z=X},this.dispose=function(){}}}const Cn=new Ye,bp=new ie;function Tp(i,t){function e(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function n(p,h){h.color.getRGB(p.fogColor.value,tl(i)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,y,E,M){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),f(p,h)):h.isMeshPhongMaterial?(s(p,h),d(p,h)):h.isMeshStandardMaterial?(s(p,h),m(p,h),h.isMeshPhysicalMaterial&&u(p,h,M)):h.isMeshMatcapMaterial?(s(p,h),v(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),_(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?l(p,h,y,E):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,e(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===be&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,e(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===be&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,e(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,e(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const y=t.get(h),E=y.envMap,M=y.envMapRotation;E&&(p.envMap.value=E,Cn.copy(M),Cn.x*=-1,Cn.y*=-1,Cn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Cn.y*=-1,Cn.z*=-1),p.envMapRotation.value.setFromMatrix4(bp.makeRotationFromEuler(Cn)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,y,E){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*y,p.scale.value=E*.5,h.map&&(p.map.value=h.map,e(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function d(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function m(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function u(p,h,y){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===be&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,h){h.matcap&&(p.matcap.value=h.matcap)}function _(p,h){const y=t.get(h).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function wp(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,E){const M=E.program;n.uniformBlockBinding(y,M)}function c(y,E){let M=r[y.id];M===void 0&&(v(y),M=d(y),r[y.id]=M,y.addEventListener("dispose",p));const L=E.program;n.updateUBOMapping(y,L);const C=t.render.frame;s[y.id]!==C&&(m(y),s[y.id]=C)}function d(y){const E=f();y.__bindingPointIndex=E;const M=i.createBuffer(),L=y.__size,C=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,L,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,M),M}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(y){const E=r[y.id],M=y.uniforms,L=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let C=0,P=M.length;C<P;C++){const N=Array.isArray(M[C])?M[C]:[M[C]];for(let b=0,T=N.length;b<T;b++){const F=N[b];if(u(F,C,b,L)===!0){const A=F.__offset,U=Array.isArray(F.value)?F.value:[F.value];let S=0;for(let B=0;B<U.length;B++){const tt=U[B],W=_(tt);typeof tt=="number"||typeof tt=="boolean"?(F.__data[0]=tt,i.bufferSubData(i.UNIFORM_BUFFER,A+S,F.__data)):tt.isMatrix3?(F.__data[0]=tt.elements[0],F.__data[1]=tt.elements[1],F.__data[2]=tt.elements[2],F.__data[3]=0,F.__data[4]=tt.elements[3],F.__data[5]=tt.elements[4],F.__data[6]=tt.elements[5],F.__data[7]=0,F.__data[8]=tt.elements[6],F.__data[9]=tt.elements[7],F.__data[10]=tt.elements[8],F.__data[11]=0):(tt.toArray(F.__data,S),S+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,A,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(y,E,M,L){const C=y.value,P=E+"_"+M;if(L[P]===void 0)return typeof C=="number"||typeof C=="boolean"?L[P]=C:L[P]=C.clone(),!0;{const N=L[P];if(typeof C=="number"||typeof C=="boolean"){if(N!==C)return L[P]=C,!0}else if(N.equals(C)===!1)return N.copy(C),!0}return!1}function v(y){const E=y.uniforms;let M=0;const L=16;for(let P=0,N=E.length;P<N;P++){const b=Array.isArray(E[P])?E[P]:[E[P]];for(let T=0,F=b.length;T<F;T++){const A=b[T],U=Array.isArray(A.value)?A.value:[A.value];for(let S=0,B=U.length;S<B;S++){const tt=U[S],W=_(tt),q=M%L,K=q%W.boundary,ot=q+K;M+=K,ot!==0&&L-ot<W.storage&&(M+=L-ot),A.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=M,M+=W.storage}}}const C=M%L;return C>0&&(M+=L-C),y.__size=M,y.__cache={},this}function _(y){const E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),E}function p(y){const E=y.target;E.removeEventListener("dispose",p);const M=o.indexOf(E.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function h(){for(const y in r)i.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class Ap{constructor(t={}){const{canvas:e=pc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:m=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;const v=new Uint32Array(4),_=new Int32Array(4);let p=null,h=null;const y=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fe,this.toneMapping=yn,this.toneMappingExposure=1;const M=this;let L=!1,C=0,P=0,N=null,b=-1,T=null;const F=new se,A=new se;let U=null;const S=new Gt(0);let B=0,tt=e.width,W=e.height,q=1,K=null,ot=null;const z=new se(0,0,tt,W),G=new se(0,0,tt,W);let _t=!1;const X=new aa;let et=!1,mt=!1;const ut=new ie,pt=new ie,yt=new Q,Pt=new se,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function jt(){return N===null?q:1}let g=n;function at(R,j){return e.getContext(R,j)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Js}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",Et,!1),g===null){const j="webgl2";if(g=at(j,R),g===null)throw at(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let $,I,D,k,nt,w,x,O,Z,V,J,ft,ct,gt,Wt,ht,Tt,Mt,Lt,wt,Nt,Ot,$t,H;function xt(){$=new Dd(g),$.init(),Ot=new gp(g,$),I=new Td(g,$,t,Ot),D=new pp(g,$),I.reverseDepthBuffer&&m&&D.buffers.depth.setReversed(!0),k=new Ud(g),nt=new Qf,w=new _p(g,$,D,nt,I,Ot,k),x=new Ad(M),O=new Pd(M),Z=new Hc(g),$t=new Ed(g,Z),V=new Ld(g,Z,k,$t),J=new Fd(g,V,Z,k),Lt=new Nd(g,I,w),ht=new wd(nt),ft=new Jf(M,x,O,$,I,$t,ht),ct=new Tp(M,nt),gt=new ep,Wt=new op($),Mt=new Md(M,x,O,D,J,u,l),Tt=new dp(M,J,I),H=new wp(g,k,I,D),wt=new bd(g,$,k),Nt=new Id(g,$,k),k.programs=ft.programs,M.capabilities=I,M.extensions=$,M.properties=nt,M.renderLists=gt,M.shadowMap=Tt,M.state=D,M.info=k}xt();const st=new Ep(M,g);this.xr=st,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const R=$.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=$.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(R){R!==void 0&&(q=R,this.setSize(tt,W,!1))},this.getSize=function(R){return R.set(tt,W)},this.setSize=function(R,j,it=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}tt=R,W=j,e.width=Math.floor(R*q),e.height=Math.floor(j*q),it===!0&&(e.style.width=R+"px",e.style.height=j+"px"),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(tt*q,W*q).floor()},this.setDrawingBufferSize=function(R,j,it){tt=R,W=j,q=it,e.width=Math.floor(R*it),e.height=Math.floor(j*it),this.setViewport(0,0,R,j)},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy(z)},this.setViewport=function(R,j,it,rt){R.isVector4?z.set(R.x,R.y,R.z,R.w):z.set(R,j,it,rt),D.viewport(F.copy(z).multiplyScalar(q).round())},this.getScissor=function(R){return R.copy(G)},this.setScissor=function(R,j,it,rt){R.isVector4?G.set(R.x,R.y,R.z,R.w):G.set(R,j,it,rt),D.scissor(A.copy(G).multiplyScalar(q).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(R){D.setScissorTest(_t=R)},this.setOpaqueSort=function(R){K=R},this.setTransparentSort=function(R){ot=R},this.getClearColor=function(R){return R.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor.apply(Mt,arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha.apply(Mt,arguments)},this.clear=function(R=!0,j=!0,it=!0){let rt=0;if(R){let Y=!1;if(N!==null){const dt=N.texture.format;Y=dt===sa||dt===ra||dt===ia}if(Y){const dt=N.texture.type,bt=dt===ln||dt===Nn||dt===Ci||dt===ci||dt===ea||dt===na,At=Mt.getClearColor(),Rt=Mt.getClearAlpha(),Ft=At.r,zt=At.g,Ct=At.b;bt?(v[0]=Ft,v[1]=zt,v[2]=Ct,v[3]=Rt,g.clearBufferuiv(g.COLOR,0,v)):(_[0]=Ft,_[1]=zt,_[2]=Ct,_[3]=Rt,g.clearBufferiv(g.COLOR,0,_))}else rt|=g.COLOR_BUFFER_BIT}j&&(rt|=g.DEPTH_BUFFER_BIT),it&&(rt|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),gt.dispose(),Wt.dispose(),nt.dispose(),x.dispose(),O.dispose(),J.dispose(),$t.dispose(),H.dispose(),ft.dispose(),st.dispose(),st.removeEventListener("sessionstart",ca),st.removeEventListener("sessionend",ha),En.stop()};function lt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const R=k.autoReset,j=Tt.enabled,it=Tt.autoUpdate,rt=Tt.needsUpdate,Y=Tt.type;xt(),k.autoReset=R,Tt.enabled=j,Tt.autoUpdate=it,Tt.needsUpdate=rt,Tt.type=Y}function Et(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function kt(R){const j=R.target;j.removeEventListener("dispose",kt),re(j)}function re(R){pe(R),nt.remove(R)}function pe(R){const j=nt.get(R).programs;j!==void 0&&(j.forEach(function(it){ft.releaseProgram(it)}),R.isShaderMaterial&&ft.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,it,rt,Y,dt){j===null&&(j=It);const bt=Y.isMesh&&Y.matrixWorld.determinant()<0,At=gl(R,j,it,rt,Y);D.setMaterial(rt,bt);let Rt=it.index,Ft=1;if(rt.wireframe===!0){if(Rt=V.getWireframeAttribute(it),Rt===void 0)return;Ft=2}const zt=it.drawRange,Ct=it.attributes.position;let Yt=zt.start*Ft,te=(zt.start+zt.count)*Ft;dt!==null&&(Yt=Math.max(Yt,dt.start*Ft),te=Math.min(te,(dt.start+dt.count)*Ft)),Rt!==null?(Yt=Math.max(Yt,0),te=Math.min(te,Rt.count)):Ct!=null&&(Yt=Math.max(Yt,0),te=Math.min(te,Ct.count));const ee=te-Yt;if(ee<0||ee===1/0)return;$t.setup(Y,rt,At,it,Rt);let ye,qt=wt;if(Rt!==null&&(ye=Z.get(Rt),qt=Nt,qt.setIndex(ye)),Y.isMesh)rt.wireframe===!0?(D.setLineWidth(rt.wireframeLinewidth*jt()),qt.setMode(g.LINES)):qt.setMode(g.TRIANGLES);else if(Y.isLine){let Dt=rt.linewidth;Dt===void 0&&(Dt=1),D.setLineWidth(Dt*jt()),Y.isLineSegments?qt.setMode(g.LINES):Y.isLineLoop?qt.setMode(g.LINE_LOOP):qt.setMode(g.LINE_STRIP)}else Y.isPoints?qt.setMode(g.POINTS):Y.isSprite&&qt.setMode(g.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)qt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if($.get("WEBGL_multi_draw"))qt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Dt=Y._multiDrawStarts,Ze=Y._multiDrawCounts,Zt=Y._multiDrawCount,Ie=Rt?Z.get(Rt).bytesPerElement:1,kn=nt.get(rt).currentProgram.getUniforms();for(let Te=0;Te<Zt;Te++)kn.setValue(g,"_gl_DrawID",Te),qt.render(Dt[Te]/Ie,Ze[Te])}else if(Y.isInstancedMesh)qt.renderInstances(Yt,ee,Y.count);else if(it.isInstancedBufferGeometry){const Dt=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,Ze=Math.min(it.instanceCount,Dt);qt.renderInstances(Yt,ee,Ze)}else qt.render(Yt,ee)};function Kt(R,j,it){R.transparent===!0&&R.side===We&&R.forceSinglePass===!1?(R.side=be,R.needsUpdate=!0,Fi(R,j,it),R.side=on,R.needsUpdate=!0,Fi(R,j,it),R.side=We):Fi(R,j,it)}this.compile=function(R,j,it=null){it===null&&(it=R),h=Wt.get(it),h.init(j),E.push(h),it.traverseVisible(function(Y){Y.isLight&&Y.layers.test(j.layers)&&(h.pushLight(Y),Y.castShadow&&h.pushShadow(Y))}),R!==it&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(j.layers)&&(h.pushLight(Y),Y.castShadow&&h.pushShadow(Y))}),h.setupLights();const rt=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const dt=Y.material;if(dt)if(Array.isArray(dt))for(let bt=0;bt<dt.length;bt++){const At=dt[bt];Kt(At,it,Y),rt.add(At)}else Kt(dt,it,Y),rt.add(dt)}),E.pop(),h=null,rt},this.compileAsync=function(R,j,it=null){const rt=this.compile(R,j,it);return new Promise(Y=>{function dt(){if(rt.forEach(function(bt){nt.get(bt).currentProgram.isReady()&&rt.delete(bt)}),rt.size===0){Y(R);return}setTimeout(dt,10)}$.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Le=null;function qe(R){Le&&Le(R)}function ca(){En.stop()}function ha(){En.start()}const En=new il;En.setAnimationLoop(qe),typeof self<"u"&&En.setContext(self),this.setAnimationLoop=function(R){Le=R,st.setAnimationLoop(R),R===null?En.stop():En.start()},st.addEventListener("sessionstart",ca),st.addEventListener("sessionend",ha),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(j),j=st.getCamera()),R.isScene===!0&&R.onBeforeRender(M,R,j,N),h=Wt.get(R,E.length),h.init(j),E.push(h),pt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),X.setFromProjectionMatrix(pt),mt=this.localClippingEnabled,et=ht.init(this.clippingPlanes,mt),p=gt.get(R,y.length),p.init(),y.push(p),st.enabled===!0&&st.isPresenting===!0){const dt=M.xr.getDepthSensingMesh();dt!==null&&Pr(dt,j,-1/0,M.sortObjects)}Pr(R,j,0,M.sortObjects),p.finish(),M.sortObjects===!0&&p.sort(K,ot),Ut=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Ut&&Mt.addToRenderList(p,R),this.info.render.frame++,et===!0&&ht.beginShadows();const it=h.state.shadowsArray;Tt.render(it,R,j),et===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=p.opaque,Y=p.transmissive;if(h.setupLights(),j.isArrayCamera){const dt=j.cameras;if(Y.length>0)for(let bt=0,At=dt.length;bt<At;bt++){const Rt=dt[bt];da(rt,Y,R,Rt)}Ut&&Mt.render(R);for(let bt=0,At=dt.length;bt<At;bt++){const Rt=dt[bt];ua(p,R,Rt,Rt.viewport)}}else Y.length>0&&da(rt,Y,R,j),Ut&&Mt.render(R),ua(p,R,j);N!==null&&(w.updateMultisampleRenderTarget(N),w.updateRenderTargetMipmap(N)),R.isScene===!0&&R.onAfterRender(M,R,j),$t.resetDefaultState(),b=-1,T=null,E.pop(),E.length>0?(h=E[E.length-1],et===!0&&ht.setGlobalState(M.clippingPlanes,h.state.camera)):h=null,y.pop(),y.length>0?p=y[y.length-1]:p=null};function Pr(R,j,it,rt){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)it=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)h.pushLight(R),R.castShadow&&h.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||X.intersectsSprite(R)){rt&&Pt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(pt);const bt=J.update(R),At=R.material;At.visible&&p.push(R,bt,At,it,Pt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||X.intersectsObject(R))){const bt=J.update(R),At=R.material;if(rt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Pt.copy(R.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Pt.copy(bt.boundingSphere.center)),Pt.applyMatrix4(R.matrixWorld).applyMatrix4(pt)),Array.isArray(At)){const Rt=bt.groups;for(let Ft=0,zt=Rt.length;Ft<zt;Ft++){const Ct=Rt[Ft],Yt=At[Ct.materialIndex];Yt&&Yt.visible&&p.push(R,bt,Yt,it,Pt.z,Ct)}}else At.visible&&p.push(R,bt,At,it,Pt.z,null)}}const dt=R.children;for(let bt=0,At=dt.length;bt<At;bt++)Pr(dt[bt],j,it,rt)}function ua(R,j,it,rt){const Y=R.opaque,dt=R.transmissive,bt=R.transparent;h.setupLightsView(it),et===!0&&ht.setGlobalState(M.clippingPlanes,it),rt&&D.viewport(F.copy(rt)),Y.length>0&&Ni(Y,j,it),dt.length>0&&Ni(dt,j,it),bt.length>0&&Ni(bt,j,it),D.buffers.depth.setTest(!0),D.buffers.depth.setMask(!0),D.buffers.color.setMask(!0),D.setPolygonOffset(!1)}function da(R,j,it,rt){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[rt.id]===void 0&&(h.state.transmissionRenderTarget[rt.id]=new Fn(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?Di:ln,minFilter:Un,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace}));const dt=h.state.transmissionRenderTarget[rt.id],bt=rt.viewport||F;dt.setSize(bt.z,bt.w);const At=M.getRenderTarget();M.setRenderTarget(dt),M.getClearColor(S),B=M.getClearAlpha(),B<1&&M.setClearColor(16777215,.5),M.clear(),Ut&&Mt.render(it);const Rt=M.toneMapping;M.toneMapping=yn;const Ft=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),h.setupLightsView(rt),et===!0&&ht.setGlobalState(M.clippingPlanes,rt),Ni(R,it,rt),w.updateMultisampleRenderTarget(dt),w.updateRenderTargetMipmap(dt),$.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let Ct=0,Yt=j.length;Ct<Yt;Ct++){const te=j[Ct],ee=te.object,ye=te.geometry,qt=te.material,Dt=te.group;if(qt.side===We&&ee.layers.test(rt.layers)){const Ze=qt.side;qt.side=be,qt.needsUpdate=!0,fa(ee,it,rt,ye,qt,Dt),qt.side=Ze,qt.needsUpdate=!0,zt=!0}}zt===!0&&(w.updateMultisampleRenderTarget(dt),w.updateRenderTargetMipmap(dt))}M.setRenderTarget(At),M.setClearColor(S,B),Ft!==void 0&&(rt.viewport=Ft),M.toneMapping=Rt}function Ni(R,j,it){const rt=j.isScene===!0?j.overrideMaterial:null;for(let Y=0,dt=R.length;Y<dt;Y++){const bt=R[Y],At=bt.object,Rt=bt.geometry,Ft=rt===null?bt.material:rt,zt=bt.group;At.layers.test(it.layers)&&fa(At,j,it,Rt,Ft,zt)}}function fa(R,j,it,rt,Y,dt){R.onBeforeRender(M,j,it,rt,Y,dt),R.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(M,j,it,rt,R,dt),Y.transparent===!0&&Y.side===We&&Y.forceSinglePass===!1?(Y.side=be,Y.needsUpdate=!0,M.renderBufferDirect(it,j,rt,Y,R,dt),Y.side=on,Y.needsUpdate=!0,M.renderBufferDirect(it,j,rt,Y,R,dt),Y.side=We):M.renderBufferDirect(it,j,rt,Y,R,dt),R.onAfterRender(M,j,it,rt,Y,dt)}function Fi(R,j,it){j.isScene!==!0&&(j=It);const rt=nt.get(R),Y=h.state.lights,dt=h.state.shadowsArray,bt=Y.state.version,At=ft.getParameters(R,Y.state,dt,j,it),Rt=ft.getProgramCacheKey(At);let Ft=rt.programs;rt.environment=R.isMeshStandardMaterial?j.environment:null,rt.fog=j.fog,rt.envMap=(R.isMeshStandardMaterial?O:x).get(R.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,Ft===void 0&&(R.addEventListener("dispose",kt),Ft=new Map,rt.programs=Ft);let zt=Ft.get(Rt);if(zt!==void 0){if(rt.currentProgram===zt&&rt.lightsStateVersion===bt)return ma(R,At),zt}else At.uniforms=ft.getUniforms(R),R.onBeforeCompile(At,M),zt=ft.acquireProgram(At,Rt),Ft.set(Rt,zt),rt.uniforms=At.uniforms;const Ct=rt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ct.clippingPlanes=ht.uniform),ma(R,At),rt.needsLights=xl(R),rt.lightsStateVersion=bt,rt.needsLights&&(Ct.ambientLightColor.value=Y.state.ambient,Ct.lightProbe.value=Y.state.probe,Ct.directionalLights.value=Y.state.directional,Ct.directionalLightShadows.value=Y.state.directionalShadow,Ct.spotLights.value=Y.state.spot,Ct.spotLightShadows.value=Y.state.spotShadow,Ct.rectAreaLights.value=Y.state.rectArea,Ct.ltc_1.value=Y.state.rectAreaLTC1,Ct.ltc_2.value=Y.state.rectAreaLTC2,Ct.pointLights.value=Y.state.point,Ct.pointLightShadows.value=Y.state.pointShadow,Ct.hemisphereLights.value=Y.state.hemi,Ct.directionalShadowMap.value=Y.state.directionalShadowMap,Ct.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ct.spotShadowMap.value=Y.state.spotShadowMap,Ct.spotLightMatrix.value=Y.state.spotLightMatrix,Ct.spotLightMap.value=Y.state.spotLightMap,Ct.pointShadowMap.value=Y.state.pointShadowMap,Ct.pointShadowMatrix.value=Y.state.pointShadowMatrix),rt.currentProgram=zt,rt.uniformsList=null,zt}function pa(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=vr.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function ma(R,j){const it=nt.get(R);it.outputColorSpace=j.outputColorSpace,it.batching=j.batching,it.batchingColor=j.batchingColor,it.instancing=j.instancing,it.instancingColor=j.instancingColor,it.instancingMorph=j.instancingMorph,it.skinning=j.skinning,it.morphTargets=j.morphTargets,it.morphNormals=j.morphNormals,it.morphColors=j.morphColors,it.morphTargetsCount=j.morphTargetsCount,it.numClippingPlanes=j.numClippingPlanes,it.numIntersection=j.numClipIntersection,it.vertexAlphas=j.vertexAlphas,it.vertexTangents=j.vertexTangents,it.toneMapping=j.toneMapping}function gl(R,j,it,rt,Y){j.isScene!==!0&&(j=It),w.resetTextureUnits();const dt=j.fog,bt=rt.isMeshStandardMaterial?j.environment:null,At=N===null?M.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:di,Rt=(rt.isMeshStandardMaterial?O:x).get(rt.envMap||bt),Ft=rt.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,zt=!!it.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Ct=!!it.morphAttributes.position,Yt=!!it.morphAttributes.normal,te=!!it.morphAttributes.color;let ee=yn;rt.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(ee=M.toneMapping);const ye=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,qt=ye!==void 0?ye.length:0,Dt=nt.get(rt),Ze=h.state.lights;if(et===!0&&(mt===!0||R!==T)){const Re=R===T&&rt.id===b;ht.setState(rt,R,Re)}let Zt=!1;rt.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Ze.state.version||Dt.outputColorSpace!==At||Y.isBatchedMesh&&Dt.batching===!1||!Y.isBatchedMesh&&Dt.batching===!0||Y.isBatchedMesh&&Dt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Dt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Dt.instancing===!1||!Y.isInstancedMesh&&Dt.instancing===!0||Y.isSkinnedMesh&&Dt.skinning===!1||!Y.isSkinnedMesh&&Dt.skinning===!0||Y.isInstancedMesh&&Dt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Dt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Dt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Dt.instancingMorph===!1&&Y.morphTexture!==null||Dt.envMap!==Rt||rt.fog===!0&&Dt.fog!==dt||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==ht.numPlanes||Dt.numIntersection!==ht.numIntersection)||Dt.vertexAlphas!==Ft||Dt.vertexTangents!==zt||Dt.morphTargets!==Ct||Dt.morphNormals!==Yt||Dt.morphColors!==te||Dt.toneMapping!==ee||Dt.morphTargetsCount!==qt)&&(Zt=!0):(Zt=!0,Dt.__version=rt.version);let Ie=Dt.currentProgram;Zt===!0&&(Ie=Fi(rt,j,Y));let kn=!1,Te=!1,_i=!1;const ne=Ie.getUniforms(),Ve=Dt.uniforms;if(D.useProgram(Ie.program)&&(kn=!0,Te=!0,_i=!0),rt.id!==b&&(b=rt.id,Te=!0),kn||T!==R){D.buffers.depth.getReversed()?(ut.copy(R.projectionMatrix),_c(ut),gc(ut),ne.setValue(g,"projectionMatrix",ut)):ne.setValue(g,"projectionMatrix",R.projectionMatrix),ne.setValue(g,"viewMatrix",R.matrixWorldInverse);const hn=ne.map.cameraPosition;hn!==void 0&&hn.setValue(g,yt.setFromMatrixPosition(R.matrixWorld)),I.logarithmicDepthBuffer&&ne.setValue(g,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&ne.setValue(g,"isOrthographic",R.isOrthographicCamera===!0),T!==R&&(T=R,Te=!0,_i=!0)}if(Y.isSkinnedMesh){ne.setOptional(g,Y,"bindMatrix"),ne.setOptional(g,Y,"bindMatrixInverse");const Re=Y.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),ne.setValue(g,"boneTexture",Re.boneTexture,w))}Y.isBatchedMesh&&(ne.setOptional(g,Y,"batchingTexture"),ne.setValue(g,"batchingTexture",Y._matricesTexture,w),ne.setOptional(g,Y,"batchingIdTexture"),ne.setValue(g,"batchingIdTexture",Y._indirectTexture,w),ne.setOptional(g,Y,"batchingColorTexture"),Y._colorsTexture!==null&&ne.setValue(g,"batchingColorTexture",Y._colorsTexture,w));const gi=it.morphAttributes;if((gi.position!==void 0||gi.normal!==void 0||gi.color!==void 0)&&Lt.update(Y,it,Ie),(Te||Dt.receiveShadow!==Y.receiveShadow)&&(Dt.receiveShadow=Y.receiveShadow,ne.setValue(g,"receiveShadow",Y.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Ve.envMap.value=Rt,Ve.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&j.environment!==null&&(Ve.envMapIntensity.value=j.environmentIntensity),Te&&(ne.setValue(g,"toneMappingExposure",M.toneMappingExposure),Dt.needsLights&&vl(Ve,_i),dt&&rt.fog===!0&&ct.refreshFogUniforms(Ve,dt),ct.refreshMaterialUniforms(Ve,rt,q,W,h.state.transmissionRenderTarget[R.id]),vr.upload(g,pa(Dt),Ve,w)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(vr.upload(g,pa(Dt),Ve,w),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&ne.setValue(g,"center",Y.center),ne.setValue(g,"modelViewMatrix",Y.modelViewMatrix),ne.setValue(g,"normalMatrix",Y.normalMatrix),ne.setValue(g,"modelMatrix",Y.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const Re=rt.uniformsGroups;for(let hn=0,un=Re.length;hn<un;hn++){const _a=Re[hn];H.update(_a,Ie),H.bind(_a,Ie)}}return Ie}function vl(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function xl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(R,j,it){nt.get(R.texture).__webglTexture=j,nt.get(R.depthTexture).__webglTexture=it;const rt=nt.get(R);rt.__hasExternalTextures=!0,rt.__autoAllocateDepthBuffer=it===void 0,rt.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),rt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,j){const it=nt.get(R);it.__webglFramebuffer=j,it.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(R,j=0,it=0){N=R,C=j,P=it;let rt=!0,Y=null,dt=!1,bt=!1;if(R){const Rt=nt.get(R);if(Rt.__useDefaultFramebuffer!==void 0)D.bindFramebuffer(g.FRAMEBUFFER,null),rt=!1;else if(Rt.__webglFramebuffer===void 0)w.setupRenderTarget(R);else if(Rt.__hasExternalTextures)w.rebindTextures(R,nt.get(R.texture).__webglTexture,nt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ct=R.depthTexture;if(Rt.__boundDepthTexture!==Ct){if(Ct!==null&&nt.has(Ct)&&(R.width!==Ct.image.width||R.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(R)}}const Ft=R.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(bt=!0);const zt=nt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(zt[j])?Y=zt[j][it]:Y=zt[j],dt=!0):R.samples>0&&w.useMultisampledRTT(R)===!1?Y=nt.get(R).__webglMultisampledFramebuffer:Array.isArray(zt)?Y=zt[it]:Y=zt,F.copy(R.viewport),A.copy(R.scissor),U=R.scissorTest}else F.copy(z).multiplyScalar(q).floor(),A.copy(G).multiplyScalar(q).floor(),U=_t;if(D.bindFramebuffer(g.FRAMEBUFFER,Y)&&rt&&D.drawBuffers(R,Y),D.viewport(F),D.scissor(A),D.setScissorTest(U),dt){const Rt=nt.get(R.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+j,Rt.__webglTexture,it)}else if(bt){const Rt=nt.get(R.texture),Ft=j||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,Rt.__webglTexture,it||0,Ft)}b=-1},this.readRenderTargetPixels=function(R,j,it,rt,Y,dt,bt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=nt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&bt!==void 0&&(At=At[bt]),At){D.bindFramebuffer(g.FRAMEBUFFER,At);try{const Rt=R.texture,Ft=Rt.format,zt=Rt.type;if(!I.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!I.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-rt&&it>=0&&it<=R.height-Y&&g.readPixels(j,it,rt,Y,Ot.convert(Ft),Ot.convert(zt),dt)}finally{const Rt=N!==null?nt.get(N).__webglFramebuffer:null;D.bindFramebuffer(g.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(R,j,it,rt,Y,dt,bt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=nt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&bt!==void 0&&(At=At[bt]),At){const Rt=R.texture,Ft=Rt.format,zt=Rt.type;if(!I.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!I.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=R.width-rt&&it>=0&&it<=R.height-Y){D.bindFramebuffer(g.FRAMEBUFFER,At);const Ct=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,Ct),g.bufferData(g.PIXEL_PACK_BUFFER,dt.byteLength,g.STREAM_READ),g.readPixels(j,it,rt,Y,Ot.convert(Ft),Ot.convert(zt),0);const Yt=N!==null?nt.get(N).__webglFramebuffer:null;D.bindFramebuffer(g.FRAMEBUFFER,Yt);const te=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);return g.flush(),await mc(g,te,4),g.bindBuffer(g.PIXEL_PACK_BUFFER,Ct),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,dt),g.deleteBuffer(Ct),g.deleteSync(te),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,j=null,it=0){R.isTexture!==!0&&(Ti("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,R=arguments[1]);const rt=Math.pow(2,-it),Y=Math.floor(R.image.width*rt),dt=Math.floor(R.image.height*rt),bt=j!==null?j.x:0,At=j!==null?j.y:0;w.setTexture2D(R,0),g.copyTexSubImage2D(g.TEXTURE_2D,it,0,0,bt,At,Y,dt),D.unbindTexture()},this.copyTextureToTexture=function(R,j,it=null,rt=null,Y=0){R.isTexture!==!0&&(Ti("WebGLRenderer: copyTextureToTexture function signature has changed."),rt=arguments[0]||null,R=arguments[1],j=arguments[2],Y=arguments[3]||0,it=null);let dt,bt,At,Rt,Ft,zt,Ct,Yt,te;const ee=R.isCompressedTexture?R.mipmaps[Y]:R.image;it!==null?(dt=it.max.x-it.min.x,bt=it.max.y-it.min.y,At=it.isBox3?it.max.z-it.min.z:1,Rt=it.min.x,Ft=it.min.y,zt=it.isBox3?it.min.z:0):(dt=ee.width,bt=ee.height,At=ee.depth||1,Rt=0,Ft=0,zt=0),rt!==null?(Ct=rt.x,Yt=rt.y,te=rt.z):(Ct=0,Yt=0,te=0);const ye=Ot.convert(j.format),qt=Ot.convert(j.type);let Dt;j.isData3DTexture?(w.setTexture3D(j,0),Dt=g.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(w.setTexture2DArray(j,0),Dt=g.TEXTURE_2D_ARRAY):(w.setTexture2D(j,0),Dt=g.TEXTURE_2D),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,j.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,j.unpackAlignment);const Ze=g.getParameter(g.UNPACK_ROW_LENGTH),Zt=g.getParameter(g.UNPACK_IMAGE_HEIGHT),Ie=g.getParameter(g.UNPACK_SKIP_PIXELS),kn=g.getParameter(g.UNPACK_SKIP_ROWS),Te=g.getParameter(g.UNPACK_SKIP_IMAGES);g.pixelStorei(g.UNPACK_ROW_LENGTH,ee.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,ee.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Rt),g.pixelStorei(g.UNPACK_SKIP_ROWS,Ft),g.pixelStorei(g.UNPACK_SKIP_IMAGES,zt);const _i=R.isDataArrayTexture||R.isData3DTexture,ne=j.isDataArrayTexture||j.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const Ve=nt.get(R),gi=nt.get(j),Re=nt.get(Ve.__renderTarget),hn=nt.get(gi.__renderTarget);D.bindFramebuffer(g.READ_FRAMEBUFFER,Re.__webglFramebuffer),D.bindFramebuffer(g.DRAW_FRAMEBUFFER,hn.__webglFramebuffer);for(let un=0;un<At;un++)_i&&g.framebufferTextureLayer(g.READ_FRAMEBUFFER,g.COLOR_ATTACHMENT0,nt.get(R).__webglTexture,Y,zt+un),R.isDepthTexture?(ne&&g.framebufferTextureLayer(g.DRAW_FRAMEBUFFER,g.COLOR_ATTACHMENT0,nt.get(j).__webglTexture,Y,te+un),g.blitFramebuffer(Rt,Ft,dt,bt,Ct,Yt,dt,bt,g.DEPTH_BUFFER_BIT,g.NEAREST)):ne?g.copyTexSubImage3D(Dt,Y,Ct,Yt,te+un,Rt,Ft,dt,bt):g.copyTexSubImage2D(Dt,Y,Ct,Yt,te+un,Rt,Ft,dt,bt);D.bindFramebuffer(g.READ_FRAMEBUFFER,null),D.bindFramebuffer(g.DRAW_FRAMEBUFFER,null)}else ne?R.isDataTexture||R.isData3DTexture?g.texSubImage3D(Dt,Y,Ct,Yt,te,dt,bt,At,ye,qt,ee.data):j.isCompressedArrayTexture?g.compressedTexSubImage3D(Dt,Y,Ct,Yt,te,dt,bt,At,ye,ee.data):g.texSubImage3D(Dt,Y,Ct,Yt,te,dt,bt,At,ye,qt,ee):R.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,Y,Ct,Yt,dt,bt,ye,qt,ee.data):R.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,Y,Ct,Yt,ee.width,ee.height,ye,ee.data):g.texSubImage2D(g.TEXTURE_2D,Y,Ct,Yt,dt,bt,ye,qt,ee);g.pixelStorei(g.UNPACK_ROW_LENGTH,Ze),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Zt),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Ie),g.pixelStorei(g.UNPACK_SKIP_ROWS,kn),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Te),Y===0&&j.generateMipmaps&&g.generateMipmap(Dt),D.unbindTexture()},this.copyTextureToTexture3D=function(R,j,it=null,rt=null,Y=0){return R.isTexture!==!0&&(Ti("WebGLRenderer: copyTextureToTexture3D function signature has changed."),it=arguments[0]||null,rt=arguments[1]||null,R=arguments[2],j=arguments[3],Y=arguments[4]||0),Ti('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,j,it,rt,Y)},this.initRenderTarget=function(R){nt.get(R).__webglFramebuffer===void 0&&w.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?w.setTextureCube(R,0):R.isData3DTexture?w.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?w.setTexture2DArray(R,0):w.setTexture2D(R,0),D.unbindTexture()},this.resetState=function(){C=0,P=0,N=null,D.reset(),$t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Xt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xt._getUnpackColorSpace()}}class Rp extends le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ye,this.environmentIntensity=1,this.environmentRotation=new Ye,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class xr extends cn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Mr=new Q,Er=new Q,_o=new ie,bi=new Ar,sr=new Ii,as=new Q,go=new Q;class Cp extends le{constructor(t=new He,e=new xr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Mr.fromBufferAttribute(e,r-1),Er.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Mr.distanceTo(Er);t.setAttribute("lineDistance",new xe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere),sr.applyMatrix4(r),sr.radius+=s,t.ray.intersectsSphere(sr)===!1)return;_o.copy(r).invert(),bi.copy(t.ray).applyMatrix4(_o);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=n.index,m=n.attributes.position;if(d!==null){const u=Math.max(0,o.start),v=Math.min(d.count,o.start+o.count);for(let _=u,p=v-1;_<p;_+=c){const h=d.getX(_),y=d.getX(_+1),E=ar(this,t,bi,l,h,y);E&&e.push(E)}if(this.isLineLoop){const _=d.getX(v-1),p=d.getX(u),h=ar(this,t,bi,l,_,p);h&&e.push(h)}}else{const u=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let _=u,p=v-1;_<p;_+=c){const h=ar(this,t,bi,l,_,_+1);h&&e.push(h)}if(this.isLineLoop){const _=ar(this,t,bi,l,v-1,u);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ar(i,t,e,n,r,s){const o=i.geometry.attributes.position;if(Mr.fromBufferAttribute(o,r),Er.fromBufferAttribute(o,s),e.distanceSqToSegment(Mr,Er,as,go)>n)return;as.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(as);if(!(l<t.near||l>t.far))return{distance:l,point:go.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const vo=new Q,xo=new Q;class So extends Cp{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)vo.fromBufferAttribute(e,r),xo.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+vo.distanceTo(xo);t.setAttribute("lineDistance",new xe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ri extends cn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const yo=new ie,$s=new Ar,or=new Ii,lr=new Q;class os extends le{constructor(t=new He,e=new Ri){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere),or.applyMatrix4(r),or.radius+=s,t.ray.intersectsSphere(or)===!1)return;yo.copy(r).invert(),$s.copy(t.ray).applyMatrix4(yo);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const m=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let v=m,_=u;v<_;v++){const p=c.getX(v);lr.fromBufferAttribute(f,p),Mo(lr,p,l,r,t,e,this)}}else{const m=Math.max(0,o.start),u=Math.min(f.count,o.start+o.count);for(let v=m,_=u;v<_;v++)lr.fromBufferAttribute(f,v),Mo(lr,v,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Mo(i,t,e,n,r,s,o){const a=$s.distanceSqToPoint(i);if(a<e){const l=new Q;$s.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class hl extends cn{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new Gt(16777215),this.specular=new Gt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wo,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ye,this.combine=Qs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const br={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class ul{constructor(t,e,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(d){a++,s===!1&&r.onStart!==void 0&&r.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,r.onProgress!==void 0&&r.onProgress(d,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,f){return c.push(d,f),this},this.removeHandler=function(d){const f=c.indexOf(d);return f!==-1&&c.splice(f,2),this},this.getHandler=function(d){for(let f=0,m=c.length;f<m;f+=2){const u=c[f],v=c[f+1];if(u.global&&(u.lastIndex=0),u.test(d))return v}return null}}}const dl=new ul;class mi{constructor(t){this.manager=t!==void 0?t:dl,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}mi.DEFAULT_MATERIAL_NAME="__DEFAULT";const en={};class Pp extends Error{constructor(t,e){super(t),this.response=e}}class fl extends mi{constructor(t){super(t)}load(t,e,n,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=br.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(en[t]!==void 0){en[t].push({onLoad:e,onProgress:n,onError:r});return}en[t]=[],en[t].push({onLoad:e,onProgress:n,onError:r});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=en[t],f=c.body.getReader(),m=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),u=m?parseInt(m):0,v=u!==0;let _=0;const p=new ReadableStream({start(h){y();function y(){f.read().then(({done:E,value:M})=>{if(E)h.close();else{_+=M.byteLength;const L=new ProgressEvent("progress",{lengthComputable:v,loaded:_,total:u});for(let C=0,P=d.length;C<P;C++){const N=d[C];N.onProgress&&N.onProgress(L)}h.enqueue(M),y()}},E=>{h.error(E)})}}});return new Response(p)}else throw new Pp(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),m=f&&f[1]?f[1].toLowerCase():void 0,u=new TextDecoder(m);return c.arrayBuffer().then(v=>u.decode(v))}}}).then(c=>{br.add(t,c);const d=en[t];delete en[t];for(let f=0,m=d.length;f<m;f++){const u=d[f];u.onLoad&&u.onLoad(c)}}).catch(c=>{const d=en[t];if(d===void 0)throw this.manager.itemError(t),c;delete en[t];for(let f=0,m=d.length;f<m;f++){const u=d[f];u.onError&&u.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Dp extends mi{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=br.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=Pi("img");function l(){d(),br.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(f){d(),r&&r(f),s.manager.itemError(t),s.manager.itemEnd(t)}function d(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class Lp extends mi{constructor(t){super(t)}load(t,e,n,r){const s=new Se,o=new Dp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}}class pl extends le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Ip extends pl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ls=new ie,Eo=new Q,bo=new Q;class Up{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new aa,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Eo.setFromMatrixPosition(t.matrixWorld),e.position.copy(Eo),bo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bo),e.updateMatrixWorld(),ls.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ls),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ls)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Np extends Up{constructor(){super(new rl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fp extends pl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(le.DEFAULT_UP),this.updateMatrix(),this.target=new le,this.shadow=new Np}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Op{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,r=t.length;n<r;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class To{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ve(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Bp extends Bn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Js}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Js);const kp=/^[og]\s*(.+)?/,zp=/^mtllib /,Hp=/^usemtl /,Vp=/^usemap /,wo=/\s+/,Ao=new Q,cs=new Q,Ro=new Q,Co=new Q,Pe=new Q,cr=new Gt;function Gp(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=e!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:e!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,s){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:r||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),r&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},n&&n.name&&typeof n.clone=="function"){const r=n.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseNormalIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseUVIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/2)*2},addVertex:function(t,e,n){const r=this.vertices,s=this.object.geometry.vertices;s.push(r[t+0],r[t+1],r[t+2]),s.push(r[e+0],r[e+1],r[e+2]),s.push(r[n+0],r[n+1],r[n+2])},addVertexPoint:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,n){const r=this.normals,s=this.object.geometry.normals;s.push(r[t+0],r[t+1],r[t+2]),s.push(r[e+0],r[e+1],r[e+2]),s.push(r[n+0],r[n+1],r[n+2])},addFaceNormal:function(t,e,n){const r=this.vertices,s=this.object.geometry.normals;Ao.fromArray(r,t),cs.fromArray(r,e),Ro.fromArray(r,n),Pe.subVectors(Ro,cs),Co.subVectors(Ao,cs),Pe.cross(Co),Pe.normalize(),s.push(Pe.x,Pe.y,Pe.z),s.push(Pe.x,Pe.y,Pe.z),s.push(Pe.x,Pe.y,Pe.z)},addColor:function(t,e,n){const r=this.colors,s=this.object.geometry.colors;r[t]!==void 0&&s.push(r[t+0],r[t+1],r[t+2]),r[e]!==void 0&&s.push(r[e+0],r[e+1],r[e+2]),r[n]!==void 0&&s.push(r[n+0],r[n+1],r[n+2])},addUV:function(t,e,n){const r=this.uvs,s=this.object.geometry.uvs;s.push(r[t+0],r[t+1]),s.push(r[e+0],r[e+1]),s.push(r[n+0],r[n+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,n,r,s,o,a,l,c){const d=this.vertices.length;let f=this.parseVertexIndex(t,d),m=this.parseVertexIndex(e,d),u=this.parseVertexIndex(n,d);if(this.addVertex(f,m,u),this.addColor(f,m,u),a!==void 0&&a!==""){const v=this.normals.length;f=this.parseNormalIndex(a,v),m=this.parseNormalIndex(l,v),u=this.parseNormalIndex(c,v),this.addNormal(f,m,u)}else this.addFaceNormal(f,m,u);if(r!==void 0&&r!==""){const v=this.uvs.length;f=this.parseUVIndex(r,v),m=this.parseUVIndex(s,v),u=this.parseUVIndex(o,v),this.addUV(f,m,u),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const e=this.vertices.length;for(let n=0,r=t.length;n<r;n++){const s=this.parseVertexIndex(t[n],e);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";const n=this.vertices.length,r=this.uvs.length;for(let s=0,o=t.length;s<o;s++)this.addVertexLine(this.parseVertexIndex(t[s],n));for(let s=0,o=e.length;s<o;s++)this.addUVLine(this.parseUVIndex(e[s],r))}};return i.startObject("",!1),i}class Wp extends mi{constructor(t){super(t),this.materials=null}load(t,e,n,r){const s=this,o=new fl(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(s.parse(a))}catch(l){r?r(l):console.error(l),s.manager.itemError(t)}},n,r)}setMaterials(t){return this.materials=t,this}parse(t){const e=new Gp;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const n=t.split(`
`);let r=[];for(let a=0,l=n.length;a<l;a++){const c=n[a].trimStart();if(c.length===0)continue;const d=c.charAt(0);if(d!=="#")if(d==="v"){const f=c.split(wo);switch(f[0]){case"v":e.vertices.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3])),f.length>=7?(cr.setRGB(parseFloat(f[4]),parseFloat(f[5]),parseFloat(f[6]),fe),e.colors.push(cr.r,cr.g,cr.b)):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3]));break;case"vt":e.uvs.push(parseFloat(f[1]),parseFloat(f[2]));break}}else if(d==="f"){const m=c.slice(1).trim().split(wo),u=[];for(let _=0,p=m.length;_<p;_++){const h=m[_];if(h.length>0){const y=h.split("/");u.push(y)}}const v=u[0];for(let _=1,p=u.length-1;_<p;_++){const h=u[_],y=u[_+1];e.addFace(v[0],h[0],y[0],v[1],h[1],y[1],v[2],h[2],y[2])}}else if(d==="l"){const f=c.substring(1).trim().split(" ");let m=[];const u=[];if(c.indexOf("/")===-1)m=f;else for(let v=0,_=f.length;v<_;v++){const p=f[v].split("/");p[0]!==""&&m.push(p[0]),p[1]!==""&&u.push(p[1])}e.addLineGeometry(m,u)}else if(d==="p"){const m=c.slice(1).trim().split(" ");e.addPointGeometry(m)}else if((r=kp.exec(c))!==null){const f=(" "+r[0].slice(1).trim()).slice(1);e.startObject(f)}else if(Hp.test(c))e.object.startMaterial(c.substring(7).trim(),e.materialLibraries);else if(zp.test(c))e.materialLibraries.push(c.substring(7).trim());else if(Vp.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(d==="s"){if(r=c.split(" "),r.length>1){const m=r[1].trim().toLowerCase();e.object.smooth=m!=="0"&&m!=="off"}else e.object.smooth=!0;const f=e.object.currentMaterial();f&&(f.smooth=e.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}e.finalize();const s=new Ai;if(s.materialLibraries=[].concat(e.materialLibraries),!(e.objects.length===1&&e.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=e.objects.length;a<l;a++){const c=e.objects[a],d=c.geometry,f=c.materials,m=d.type==="Line",u=d.type==="Points";let v=!1;if(d.vertices.length===0)continue;const _=new He;_.setAttribute("position",new xe(d.vertices,3)),d.normals.length>0&&_.setAttribute("normal",new xe(d.normals,3)),d.colors.length>0&&(v=!0,_.setAttribute("color",new xe(d.colors,3))),d.hasUVIndices===!0&&_.setAttribute("uv",new xe(d.uvs,2));const p=[];for(let y=0,E=f.length;y<E;y++){const M=f[y],L=M.name+"_"+M.smooth+"_"+v;let C=e.materials[L];if(this.materials!==null){if(C=this.materials.create(M.name),m&&C&&!(C instanceof xr)){const P=new xr;cn.prototype.copy.call(P,C),P.color.copy(C.color),C=P}else if(u&&C&&!(C instanceof Ri)){const P=new Ri({size:10,sizeAttenuation:!1});cn.prototype.copy.call(P,C),P.color.copy(C.color),P.map=C.map,C=P}}C===void 0&&(m?C=new xr:u?C=new Ri({size:1,sizeAttenuation:!1}):C=new hl,C.name=M.name,C.flatShading=!M.smooth,C.vertexColors=v,e.materials[L]=C),p.push(C)}let h;if(p.length>1){for(let y=0,E=f.length;y<E;y++){const M=f[y];_.addGroup(M.groupStart,M.groupCount,y)}m?h=new So(_,p):u?h=new os(_,p):h=new ke(_,p)}else m?h=new So(_,p[0]):u?h=new os(_,p[0]):h=new ke(_,p[0]);h.name=c.name,s.add(h)}else if(e.vertices.length>0){const a=new Ri({size:1,sizeAttenuation:!1}),l=new He;l.setAttribute("position",new xe(e.vertices,3)),e.colors.length>0&&e.colors[0]!==void 0&&(l.setAttribute("color",new xe(e.colors,3)),a.vertexColors=!0);const c=new os(l,a);s.add(c)}return s}}class Xp extends mi{constructor(t){super(t)}load(t,e,n,r){const s=this,o=this.path===""?Op.extractUrlBase(t):this.path,a=new fl(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(l){try{e(s.parse(l,o))}catch(c){r?r(c):console.error(c),s.manager.itemError(t)}},n,r)}setMaterialOptions(t){return this.materialOptions=t,this}parse(t,e){const n=t.split(`
`);let r={};const s=/\s+/,o={};for(let l=0;l<n.length;l++){let c=n[l];if(c=c.trim(),c.length===0||c.charAt(0)==="#")continue;const d=c.indexOf(" ");let f=d>=0?c.substring(0,d):c;f=f.toLowerCase();let m=d>=0?c.substring(d+1):"";if(m=m.trim(),f==="newmtl")r={name:m},o[m]=r;else if(f==="ka"||f==="kd"||f==="ks"||f==="ke"){const u=m.split(s,3);r[f]=[parseFloat(u[0]),parseFloat(u[1]),parseFloat(u[2])]}else r[f]=m}const a=new jp(this.resourcePath||e,this.materialOptions);return a.setCrossOrigin(this.crossOrigin),a.setManager(this.manager),a.setMaterials(o),a}}class jp{constructor(t="",e={}){this.baseUrl=t,this.options=e,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.crossOrigin="anonymous",this.side=this.options.side!==void 0?this.options.side:on,this.wrap=this.options.wrap!==void 0?this.options.wrap:Sr}setCrossOrigin(t){return this.crossOrigin=t,this}setManager(t){this.manager=t}setMaterials(t){this.materialsInfo=this.convert(t),this.materials={},this.materialsArray=[],this.nameLookup={}}convert(t){if(!this.options)return t;const e={};for(const n in t){const r=t[n],s={};e[n]=s;for(const o in r){let a=!0,l=r[o];const c=o.toLowerCase();switch(c){case"kd":case"ka":case"ks":this.options&&this.options.normalizeRGB&&(l=[l[0]/255,l[1]/255,l[2]/255]),this.options&&this.options.ignoreZeroRGBs&&l[0]===0&&l[1]===0&&l[2]===0&&(a=!1);break}a&&(s[c]=l)}}return e}preload(){for(const t in this.materialsInfo)this.create(t)}getIndex(t){return this.nameLookup[t]}getAsArray(){let t=0;for(const e in this.materialsInfo)this.materialsArray[t]=this.create(e),this.nameLookup[e]=t,t++;return this.materialsArray}create(t){return this.materials[t]===void 0&&this.createMaterial_(t),this.materials[t]}createMaterial_(t){const e=this,n=this.materialsInfo[t],r={name:t,side:this.side};function s(a,l){return typeof l!="string"||l===""?"":/^https?:\/\//i.test(l)?l:a+l}function o(a,l){if(r[a])return;const c=e.getTextureParams(l,r),d=e.loadTexture(s(e.baseUrl,c.url));d.repeat.copy(c.scale),d.offset.copy(c.offset),d.wrapS=e.wrap,d.wrapT=e.wrap,(a==="map"||a==="emissiveMap")&&(d.colorSpace=fe),r[a]=d}for(const a in n){const l=n[a];let c;if(l!=="")switch(a.toLowerCase()){case"kd":r.color=Xt.toWorkingColorSpace(new Gt().fromArray(l),fe);break;case"ks":r.specular=Xt.toWorkingColorSpace(new Gt().fromArray(l),fe);break;case"ke":r.emissive=Xt.toWorkingColorSpace(new Gt().fromArray(l),fe);break;case"map_kd":o("map",l);break;case"map_ks":o("specularMap",l);break;case"map_ke":o("emissiveMap",l);break;case"norm":o("normalMap",l);break;case"map_bump":case"bump":o("bumpMap",l);break;case"map_d":o("alphaMap",l),r.transparent=!0;break;case"ns":r.shininess=parseFloat(l);break;case"d":c=parseFloat(l),c<1&&(r.opacity=c,r.transparent=!0);break;case"tr":c=parseFloat(l),this.options&&this.options.invertTrProperty&&(c=1-c),c>0&&(r.opacity=1-c,r.transparent=!0);break}}return this.materials[t]=new hl(r),this.materials[t]}getTextureParams(t,e){const n={scale:new Bt(1,1),offset:new Bt(0,0)},r=t.split(/\s+/);let s;return s=r.indexOf("-bm"),s>=0&&(e.bumpScale=parseFloat(r[s+1]),r.splice(s,2)),s=r.indexOf("-s"),s>=0&&(n.scale.set(parseFloat(r[s+1]),parseFloat(r[s+2])),r.splice(s,4)),s=r.indexOf("-o"),s>=0&&(n.offset.set(parseFloat(r[s+1]),parseFloat(r[s+2])),r.splice(s,4)),n.url=r.join(" ").trim(),n}loadTexture(t,e,n,r,s){const o=this.manager!==void 0?this.manager:dl;let a=o.getHandler(t);a===null&&(a=new Lp(o)),a.setCrossOrigin&&a.setCrossOrigin(this.crossOrigin);const l=a.load(t,n,r,s);return e!==void 0&&(l.mapping=e),l}}const Po={type:"change"},la={type:"start"},ml={type:"end"},hr=new Ar,Do=new vn,Yp=Math.cos(70*fc.DEG2RAD),oe=new Q,Ee=2*Math.PI,Qt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},hs=1e-6;class qp extends Bp{constructor(t,e=null){super(t,e),this.state=Qt.NONE,this.enabled=!0,this.target=new Q,this.cursor=new Q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ni.ROTATE,MIDDLE:ni.DOLLY,RIGHT:ni.PAN},this.touches={ONE:ti.ROTATE,TWO:ti.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Q,this._lastQuaternion=new On,this._lastTargetPosition=new Q,this._quat=new On().setFromUnitVectors(t.up,new Q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new To,this._sphericalDelta=new To,this._scale=1,this._panOffset=new Q,this._rotateStart=new Bt,this._rotateEnd=new Bt,this._rotateDelta=new Bt,this._panStart=new Bt,this._panEnd=new Bt,this._panDelta=new Bt,this._dollyStart=new Bt,this._dollyEnd=new Bt,this._dollyDelta=new Bt,this._dollyDirection=new Q,this._mouse=new Bt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Kp.bind(this),this._onPointerDown=Zp.bind(this),this._onPointerUp=$p.bind(this),this._onContextMenu=rm.bind(this),this._onMouseWheel=tm.bind(this),this._onKeyDown=em.bind(this),this._onTouchStart=nm.bind(this),this._onTouchMove=im.bind(this),this._onMouseDown=Jp.bind(this),this._onMouseMove=Qp.bind(this),this._interceptControlDown=sm.bind(this),this._interceptControlUp=am.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Po),this.update(),this.state=Qt.NONE}update(t=null){const e=this.object.position;oe.copy(e).sub(this.target),oe.applyQuaternion(this._quat),this._spherical.setFromVector3(oe),this.autoRotate&&this.state===Qt.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Ee:n>Math.PI&&(n-=Ee),r<-Math.PI?r+=Ee:r>Math.PI&&(r-=Ee),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(oe.setFromSpherical(this._spherical),oe.applyQuaternion(this._quatInverse),e.copy(this.target).add(oe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=oe.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new Q(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new Q(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=oe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(hr.origin.copy(this.object.position),hr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(hr.direction))<Yp?this.object.lookAt(this.target):(Do.setFromNormalAndCoplanarPoint(this.object.up,this.target),hr.intersectPlane(Do,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>hs||8*(1-this._lastQuaternion.dot(this.object.quaternion))>hs||this._lastTargetPosition.distanceToSquared(this.target)>hs?(this.dispatchEvent(Po),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ee/60*this.autoRotateSpeed*t:Ee/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){oe.setFromMatrixColumn(e,0),oe.multiplyScalar(-t),this._panOffset.add(oe)}_panUp(t,e){this.screenSpacePanning===!0?oe.setFromMatrixColumn(e,1):(oe.setFromMatrixColumn(e,0),oe.crossVectors(this.object.up,oe)),oe.multiplyScalar(t),this._panOffset.add(oe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;oe.copy(r).sub(this.target);let s=oe.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ee*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ee*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Ee*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Ee*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Ee*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Ee*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ee*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ee*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Bt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Zp(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Kp(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function $p(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ml),this.state=Qt.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Jp(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ni.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Qt.DOLLY;break;case ni.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Qt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Qt.ROTATE}break;case ni.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Qt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Qt.PAN}break;default:this.state=Qt.NONE}this.state!==Qt.NONE&&this.dispatchEvent(la)}function Qp(i){switch(this.state){case Qt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Qt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Qt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function tm(i){this.enabled===!1||this.enableZoom===!1||this.state!==Qt.NONE||(i.preventDefault(),this.dispatchEvent(la),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(ml))}function em(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function nm(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ti.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Qt.TOUCH_ROTATE;break;case ti.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Qt.TOUCH_PAN;break;default:this.state=Qt.NONE}break;case 2:switch(this.touches.TWO){case ti.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Qt.TOUCH_DOLLY_PAN;break;case ti.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Qt.TOUCH_DOLLY_ROTATE;break;default:this.state=Qt.NONE}break;default:this.state=Qt.NONE}this.state!==Qt.NONE&&this.dispatchEvent(la)}function im(i){switch(this._trackPointer(i),this.state){case Qt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Qt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Qt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Qt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Qt.NONE}}function rm(i){this.enabled!==!1&&i.preventDefault()}function sm(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function am(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ur(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var _l={exports:{}};/*!

JSZip v3.10.2 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(i,t){(function(e){i.exports=e()})(function(){return function e(n,r,s){function o(c,d){if(!r[c]){if(!n[c]){var f=typeof ur=="function"&&ur;if(!d&&f)return f(c,!0);if(a)return a(c,!0);var m=new Error("Cannot find module '"+c+"'");throw m.code="MODULE_NOT_FOUND",m}var u=r[c]={exports:{}};n[c][0].call(u.exports,function(v){var _=n[c][1][v];return o(_||v)},u,u.exports,e,n,r,s)}return r[c].exports}for(var a=typeof ur=="function"&&ur,l=0;l<s.length;l++)o(s[l]);return o}({1:[function(e,n,r){var s=e("./utils"),o=e("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(l){for(var c,d,f,m,u,v,_,p=[],h=0,y=l.length,E=y,M=s.getTypeOf(l)!=="string";h<l.length;)E=y-h,f=M?(c=l[h++],d=h<y?l[h++]:0,h<y?l[h++]:0):(c=l.charCodeAt(h++),d=h<y?l.charCodeAt(h++):0,h<y?l.charCodeAt(h++):0),m=c>>2,u=(3&c)<<4|d>>4,v=1<E?(15&d)<<2|f>>6:64,_=2<E?63&f:64,p.push(a.charAt(m)+a.charAt(u)+a.charAt(v)+a.charAt(_));return p.join("")},r.decode=function(l){var c,d,f,m,u,v,_=0,p=0,h="data:";if(l.substr(0,h.length)===h)throw new Error("Invalid base64 input, it looks like a data url.");var y,E=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===a.charAt(64)&&E--,l.charAt(l.length-2)===a.charAt(64)&&E--,E%1!=0)throw new Error("Invalid base64 input, bad content length.");for(y=o.uint8array?new Uint8Array(0|E):new Array(0|E);_<l.length;)c=a.indexOf(l.charAt(_++))<<2|(m=a.indexOf(l.charAt(_++)))>>4,d=(15&m)<<4|(u=a.indexOf(l.charAt(_++)))>>2,f=(3&u)<<6|(v=a.indexOf(l.charAt(_++))),y[p++]=c,u!==64&&(y[p++]=d),v!==64&&(y[p++]=f);return y}},{"./support":30,"./utils":32}],2:[function(e,n,r){var s=e("./external"),o=e("./stream/DataWorker"),a=e("./stream/Crc32Probe"),l=e("./stream/DataLengthProbe");function c(d,f,m,u,v){this.compressedSize=d,this.uncompressedSize=f,this.crc32=m,this.compression=u,this.compressedContent=v}c.prototype={getContentWorker:function(){var d=new o(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),f=this;return d.on("end",function(){if(this.streamInfo.data_length!==f.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),d},getCompressedWorker:function(){return new o(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},c.createWorkerFrom=function(d,f,m){return d.pipe(new a).pipe(new l("uncompressedSize")).pipe(f.compressWorker(m)).pipe(new l("compressedSize")).withStreamInfo("compression",f)},n.exports=c},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,n,r){var s=e("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},r.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,n,r){var s=e("./utils"),o=function(){for(var a,l=[],c=0;c<256;c++){a=c;for(var d=0;d<8;d++)a=1&a?3988292384^a>>>1:a>>>1;l[c]=a}return l}();n.exports=function(a,l){return a!==void 0&&a.length?s.getTypeOf(a)!=="string"?function(c,d,f,m){var u=o,v=m+f;c^=-1;for(var _=m;_<v;_++)c=c>>>8^u[255&(c^d[_])];return-1^c}(0|l,a,a.length,0):function(c,d,f,m){var u=o,v=m+f;c^=-1;for(var _=m;_<v;_++)c=c>>>8^u[255&(c^d.charCodeAt(_))];return-1^c}(0|l,a,a.length,0):0}},{"./utils":32}],5:[function(e,n,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(e,n,r){var s=null;s=typeof Promise<"u"?Promise:e("lie"),n.exports={Promise:s}},{lie:37}],7:[function(e,n,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",o=e("pako"),a=e("./utils"),l=e("./stream/GenericWorker"),c=s?"uint8array":"array";function d(f,m){l.call(this,"FlateWorker/"+f),this._pako=null,this._pakoAction=f,this._pakoOptions=m,this.meta={}}r.magic="\b\0",a.inherits(d,l),d.prototype.processChunk=function(f){this.meta=f.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(c,f.data),!1)},d.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},d.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},d.prototype._createPako=function(){this._pako=new o[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var f=this;this._pako.onData=function(m){f.push({data:m,meta:f.meta})}},r.compressWorker=function(f){return new d("Deflate",f)},r.uncompressWorker=function(){return new d("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,n,r){function s(u,v){var _,p="";for(_=0;_<v;_++)p+=String.fromCharCode(255&u),u>>>=8;return p}function o(u,v,_,p,h,y){var E,M,L=u.file,C=u.compression,P=y!==c.utf8encode,N=a.transformTo("string",y(L.name)),b=a.transformTo("string",c.utf8encode(L.name)),T=L.comment,F=a.transformTo("string",y(T)),A=a.transformTo("string",c.utf8encode(T)),U=b.length!==L.name.length,S=A.length!==T.length,B="",tt="",W="",q=L.dir,K=L.date,ot={crc32:0,compressedSize:0,uncompressedSize:0};v&&!_||(ot.crc32=u.crc32,ot.compressedSize=u.compressedSize,ot.uncompressedSize=u.uncompressedSize);var z=0;v&&(z|=8),P||!U&&!S||(z|=2048);var G=0,_t=0;q&&(G|=16),h==="UNIX"?(_t=798,G|=function(et,mt){var ut=et;return et||(ut=mt?16893:33204),(65535&ut)<<16}(L.unixPermissions,q)):(_t=20,G|=function(et){return 63&(et||0)}(L.dosPermissions)),E=K.getUTCHours(),E<<=6,E|=K.getUTCMinutes(),E<<=5,E|=K.getUTCSeconds()/2,M=K.getUTCFullYear()-1980,M<<=4,M|=K.getUTCMonth()+1,M<<=5,M|=K.getUTCDate(),U&&(tt=s(1,1)+s(d(N),4)+b,B+="up"+s(tt.length,2)+tt),S&&(W=s(1,1)+s(d(F),4)+A,B+="uc"+s(W.length,2)+W);var X="";return X+=`
\0`,X+=s(z,2),X+=C.magic,X+=s(E,2),X+=s(M,2),X+=s(ot.crc32,4),X+=s(ot.compressedSize,4),X+=s(ot.uncompressedSize,4),X+=s(N.length,2),X+=s(B.length,2),{fileRecord:f.LOCAL_FILE_HEADER+X+N+B,dirRecord:f.CENTRAL_FILE_HEADER+s(_t,2)+X+s(F.length,2)+"\0\0\0\0"+s(G,4)+s(p,4)+N+B+F}}var a=e("../utils"),l=e("../stream/GenericWorker"),c=e("../utf8"),d=e("../crc32"),f=e("../signature");function m(u,v,_,p){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=v,this.zipPlatform=_,this.encodeFileName=p,this.streamFiles=u,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(m,l),m.prototype.push=function(u){var v=u.meta.percent||0,_=this.entriesCount,p=this._sources.length;this.accumulate?this.contentBuffer.push(u):(this.bytesWritten+=u.data.length,l.prototype.push.call(this,{data:u.data,meta:{currentFile:this.currentFile,percent:_?(v+100*(_-p-1))/_:100}}))},m.prototype.openedSource=function(u){this.currentSourceOffset=this.bytesWritten,this.currentFile=u.file.name;var v=this.streamFiles&&!u.file.dir;if(v){var _=o(u,v,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:_.fileRecord,meta:{percent:0}})}else this.accumulate=!0},m.prototype.closedSource=function(u){this.accumulate=!1;var v=this.streamFiles&&!u.file.dir,_=o(u,v,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(_.dirRecord),v)this.push({data:function(p){return f.DATA_DESCRIPTOR+s(p.crc32,4)+s(p.compressedSize,4)+s(p.uncompressedSize,4)}(u),meta:{percent:100}});else for(this.push({data:_.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},m.prototype.flush=function(){for(var u=this.bytesWritten,v=0;v<this.dirRecords.length;v++)this.push({data:this.dirRecords[v],meta:{percent:100}});var _=this.bytesWritten-u,p=function(h,y,E,M,L){var C=a.transformTo("string",L(M));return f.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(h,2)+s(h,2)+s(y,4)+s(E,4)+s(C.length,2)+C}(this.dirRecords.length,_,u,this.zipComment,this.encodeFileName);this.push({data:p,meta:{percent:100}})},m.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},m.prototype.registerPrevious=function(u){this._sources.push(u);var v=this;return u.on("data",function(_){v.processChunk(_)}),u.on("end",function(){v.closedSource(v.previous.streamInfo),v._sources.length?v.prepareNextSource():v.end()}),u.on("error",function(_){v.error(_)}),this},m.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},m.prototype.error=function(u){var v=this._sources;if(!l.prototype.error.call(this,u))return!1;for(var _=0;_<v.length;_++)try{v[_].error(u)}catch{}return!0},m.prototype.lock=function(){l.prototype.lock.call(this);for(var u=this._sources,v=0;v<u.length;v++)u[v].lock()},n.exports=m},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,n,r){var s=e("../compressions"),o=e("./ZipFileWorker");r.generateWorker=function(a,l,c){var d=new o(l.streamFiles,c,l.platform,l.encodeFileName),f=0;try{a.forEach(function(m,u){f++;var v=function(y,E){var M=y||E,L=s[M];if(!L)throw new Error(M+" is not a valid compression method !");return L}(u.options.compression,l.compression),_=u.options.compressionOptions||l.compressionOptions||{},p=u.dir,h=u.date;u._compressWorker(v,_).withStreamInfo("file",{name:m,dir:p,date:h,comment:u.comment||"",unixPermissions:u.unixPermissions,dosPermissions:u.dosPermissions}).pipe(d)}),d.entriesCount=f}catch(m){d.error(m)}return d}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,n,r){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var o=new s;for(var a in this)typeof this[a]!="function"&&(o[a]=this[a]);return o}}(s.prototype=e("./object")).loadAsync=e("./load"),s.support=e("./support"),s.defaults=e("./defaults"),s.version="3.10.2",s.loadAsync=function(o,a){return new s().loadAsync(o,a)},s.external=e("./external"),n.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,n,r){var s=e("./utils"),o=e("./external"),a=e("./utf8"),l=e("./zipEntries"),c=e("./stream/Crc32Probe"),d=e("./nodejsUtils");function f(m){return new o.Promise(function(u,v){var _=m.decompressed.getContentWorker().pipe(new c);_.on("error",function(p){v(p)}).on("end",function(){_.streamInfo.crc32!==m.decompressed.crc32?v(new Error("Corrupted zip : CRC32 mismatch")):u()}).resume()})}n.exports=function(m,u){var v=this;return u=s.extend(u||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),d.isNode&&d.isStream(m)?o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",m,!0,u.optimizedBinaryString,u.base64).then(function(_){var p=new l(u);return p.load(_),p}).then(function(_){var p=[o.Promise.resolve(_)],h=_.files;if(u.checkCRC32)for(var y=0;y<h.length;y++)p.push(f(h[y]));return o.Promise.all(p)}).then(function(_){for(var p=_.shift(),h=p.files,y=0;y<h.length;y++){var E=h[y],M=E.fileNameStr,L=s.resolve(E.fileNameStr);v.file(L,E.decompressed,{binary:!0,optimizedBinaryString:!0,date:E.date,dir:E.dir,comment:E.fileCommentStr.length?E.fileCommentStr:null,unixPermissions:E.unixPermissions,dosPermissions:E.dosPermissions,createFolders:u.createFolders}),E.dir||(v.file(L).unsafeOriginalName=M)}return p.zipComment.length&&(v.comment=p.zipComment),v})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,n,r){var s=e("../utils"),o=e("../stream/GenericWorker");function a(l,c){o.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(c)}s.inherits(a,o),a.prototype._bindStream=function(l){var c=this;(this._stream=l).pause(),l.on("data",function(d){c.push({data:d,meta:{percent:0}})}).on("error",function(d){c.isPaused?this.generatedError=d:c.error(d)}).on("end",function(){c.isPaused?c._upstreamEnded=!0:c.end()})},a.prototype.pause=function(){return!!o.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},n.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,n,r){var s=e("readable-stream").Readable;function o(a,l,c){s.call(this,l),this._helper=a;var d=this;a.on("data",function(f,m){d.push(f)||d._helper.pause(),c&&c(m)}).on("error",function(f){d.emit("error",f)}).on("end",function(){d.push(null)})}e("../utils").inherits(o,s),o.prototype._read=function(){this._helper.resume()},n.exports=o},{"../utils":32,"readable-stream":16}],14:[function(e,n,r){n.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,o){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,o);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,o)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var o=new Buffer(s);return o.fill(0),o},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(e,n,r){function s(L,C,P){var N,b=a.getTypeOf(C),T=a.extend(P||{},d);T.date=T.date||new Date,T.compression!==null&&(T.compression=T.compression.toUpperCase()),typeof T.unixPermissions=="string"&&(T.unixPermissions=parseInt(T.unixPermissions,8)),T.unixPermissions&&16384&T.unixPermissions&&(T.dir=!0),T.dosPermissions&&16&T.dosPermissions&&(T.dir=!0),T.dir&&(L=h(L)),T.createFolders&&(N=p(L))&&y.call(this,N,!0);var F=b==="string"&&T.binary===!1&&T.base64===!1;P&&P.binary!==void 0||(T.binary=!F),(C instanceof f&&C.uncompressedSize===0||T.dir||!C||C.length===0)&&(T.base64=!1,T.binary=!0,C="",T.compression="STORE",b="string");var A=null;A=C instanceof f||C instanceof l?C:v.isNode&&v.isStream(C)?new _(L,C):a.prepareContent(L,C,T.binary,T.optimizedBinaryString,T.base64);var U=new m(L,A,T);this.files[L]=U}var o=e("./utf8"),a=e("./utils"),l=e("./stream/GenericWorker"),c=e("./stream/StreamHelper"),d=e("./defaults"),f=e("./compressedObject"),m=e("./zipObject"),u=e("./generate"),v=e("./nodejsUtils"),_=e("./nodejs/NodejsStreamInputAdapter"),p=function(L){L.slice(-1)==="/"&&(L=L.substring(0,L.length-1));var C=L.lastIndexOf("/");return 0<C?L.substring(0,C):""},h=function(L){return L.slice(-1)!=="/"&&(L+="/"),L},y=function(L,C){return C=C!==void 0?C:d.createFolders,L=h(L),this.files[L]||s.call(this,L,null,{dir:!0,createFolders:C}),this.files[L]};function E(L){return Object.prototype.toString.call(L)==="[object RegExp]"}var M={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(L){var C,P,N;for(C in this.files)N=this.files[C],(P=C.slice(this.root.length,C.length))&&C.slice(0,this.root.length)===this.root&&L(P,N)},filter:function(L){var C=[];return this.forEach(function(P,N){L(P,N)&&C.push(N)}),C},file:function(L,C,P){if(arguments.length!==1)return L=this.root+L,s.call(this,L,C,P),this;if(E(L)){var N=L;return this.filter(function(T,F){return!F.dir&&N.test(T)})}var b=this.files[this.root+L];return b&&!b.dir?b:null},folder:function(L){if(!L)return this;if(E(L))return this.filter(function(b,T){return T.dir&&L.test(b)});var C=this.root+L,P=y.call(this,C),N=this.clone();return N.root=P.name,N},remove:function(L){L=this.root+L;var C=this.files[L];if(C||(L.slice(-1)!=="/"&&(L+="/"),C=this.files[L]),C&&!C.dir)delete this.files[L];else for(var P=this.filter(function(b,T){return T.name.slice(0,L.length)===L}),N=0;N<P.length;N++)delete this.files[P[N].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(L){var C,P={};try{if((P=a.extend(L||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:o.utf8encode})).type=P.type.toLowerCase(),P.compression=P.compression.toUpperCase(),P.type==="binarystring"&&(P.type="string"),!P.type)throw new Error("No output type specified.");a.checkSupport(P.type),P.platform!=="darwin"&&P.platform!=="freebsd"&&P.platform!=="linux"&&P.platform!=="sunos"||(P.platform="UNIX"),P.platform==="win32"&&(P.platform="DOS");var N=P.comment||this.comment||"";C=u.generateWorker(this,P,N)}catch(b){(C=new l("error")).error(b)}return new c(C,P.type||"string",P.mimeType)},generateAsync:function(L,C){return this.generateInternalStream(L).accumulate(C)},generateNodeStream:function(L,C){return(L=L||{}).type||(L.type="nodebuffer"),this.generateInternalStream(L).toNodejsStream(C)}};n.exports=M},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,n,r){n.exports=e("stream")},{stream:void 0}],17:[function(e,n,r){var s=e("./DataReader");function o(a){s.call(this,a);for(var l=0;l<this.data.length;l++)a[l]=255&a[l]}e("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data[this.zero+a]},o.prototype.lastIndexOfSignature=function(a){for(var l=a.charCodeAt(0),c=a.charCodeAt(1),d=a.charCodeAt(2),f=a.charCodeAt(3),m=this.length-4;0<=m;--m)if(this.data[m]===l&&this.data[m+1]===c&&this.data[m+2]===d&&this.data[m+3]===f)return m-this.zero;return-1},o.prototype.readAndCheckSignature=function(a){var l=a.charCodeAt(0),c=a.charCodeAt(1),d=a.charCodeAt(2),f=a.charCodeAt(3),m=this.readData(4);return l===m[0]&&c===m[1]&&d===m[2]&&f===m[3]},o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./DataReader":18}],18:[function(e,n,r){var s=e("../utils");function o(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}o.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var l,c=0;for(this.checkOffset(a),l=this.index+a-1;l>=this.index;l--)c=(c<<8)+this.byteAt(l);return this.index+=a,c},readString:function(a){return s.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},n.exports=o},{"../utils":32}],19:[function(e,n,r){var s=e("./Uint8ArrayReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,n,r){var s=e("./DataReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},o.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},o.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./DataReader":18}],21:[function(e,n,r){var s=e("./ArrayReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./ArrayReader":17}],22:[function(e,n,r){var s=e("../utils"),o=e("../support"),a=e("./ArrayReader"),l=e("./StringReader"),c=e("./NodeBufferReader"),d=e("./Uint8ArrayReader");n.exports=function(f){var m=s.getTypeOf(f);return s.checkSupport(m),m!=="string"||o.uint8array?m==="nodebuffer"?new c(f):o.uint8array?new d(s.transformTo("uint8array",f)):new a(s.transformTo("array",f)):new l(f)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,n,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,n,r){var s=e("./GenericWorker"),o=e("../utils");function a(l){s.call(this,"ConvertWorker to "+l),this.destType=l}o.inherits(a,s),a.prototype.processChunk=function(l){this.push({data:o.transformTo(this.destType,l.data),meta:l.meta})},n.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(e,n,r){var s=e("./GenericWorker"),o=e("../crc32");function a(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(a,s),a.prototype.processChunk=function(l){this.streamInfo.crc32=o(l.data,this.streamInfo.crc32||0),this.push(l)},n.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,n,r){var s=e("../utils"),o=e("./GenericWorker");function a(l){o.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}s.inherits(a,o),a.prototype.processChunk=function(l){if(l){var c=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=c+l.data.length}o.prototype.processChunk.call(this,l)},n.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(e,n,r){var s=e("../utils"),o=e("./GenericWorker");function a(l){o.call(this,"DataWorker");var c=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(d){c.dataIsReady=!0,c.data=d,c.max=d&&d.length||0,c.type=s.getTypeOf(d),c.isPaused||c._tickAndRepeat()},function(d){c.error(d)})}s.inherits(a,o),a.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,c=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,c);break;case"uint8array":l=this.data.subarray(this.index,c);break;case"array":case"nodebuffer":l=this.data.slice(this.index,c)}return this.index=c,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},n.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(e,n,r){function s(o){this.name=o||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(o){this.emit("data",o)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(o){this.emit("error",o)}return!0},error:function(o){return!this.isFinished&&(this.isPaused?this.generatedError=o:(this.isFinished=!0,this.emit("error",o),this.previous&&this.previous.error(o),this.cleanUp()),!0)},on:function(o,a){return this._listeners[o].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(o,a){if(this._listeners[o])for(var l=0;l<this._listeners[o].length;l++)this._listeners[o][l].call(this,a)},pipe:function(o){return o.registerPrevious(this)},registerPrevious:function(o){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=o.streamInfo,this.mergeStreamInfo(),this.previous=o;var a=this;return o.on("data",function(l){a.processChunk(l)}),o.on("end",function(){a.end()}),o.on("error",function(l){a.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var o=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),o=!0),this.previous&&this.previous.resume(),!o},flush:function(){},processChunk:function(o){this.push(o)},withStreamInfo:function(o,a){return this.extraStreamInfo[o]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var o in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,o)&&(this.streamInfo[o]=this.extraStreamInfo[o])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var o="Worker "+this.name;return this.previous?this.previous+" -> "+o:o}},n.exports=s},{}],29:[function(e,n,r){var s=e("../utils"),o=e("./ConvertWorker"),a=e("./GenericWorker"),l=e("../base64"),c=e("../support"),d=e("../external"),f=null;if(c.nodestream)try{f=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function m(v,_){return new d.Promise(function(p,h){var y=[],E=v._internalType,M=v._outputType,L=v._mimeType;v.on("data",function(C,P){y.push(C),_&&_(P)}).on("error",function(C){y=[],h(C)}).on("end",function(){try{var C=function(P,N,b){switch(P){case"blob":return s.newBlob(s.transformTo("arraybuffer",N),b);case"base64":return l.encode(N);default:return s.transformTo(P,N)}}(M,function(P,N){var b,T=0,F=null,A=0;for(b=0;b<N.length;b++)A+=N[b].length;switch(P){case"string":return N.join("");case"array":return Array.prototype.concat.apply([],N);case"uint8array":for(F=new Uint8Array(A),b=0;b<N.length;b++)F.set(N[b],T),T+=N[b].length;return F;case"nodebuffer":return Buffer.concat(N);default:throw new Error("concat : unsupported type '"+P+"'")}}(E,y),L);p(C)}catch(P){h(P)}y=[]}).resume()})}function u(v,_,p){var h=_;switch(_){case"blob":case"arraybuffer":h="uint8array";break;case"base64":h="string"}try{this._internalType=h,this._outputType=_,this._mimeType=p,s.checkSupport(h),this._worker=v.pipe(new o(h)),v.lock()}catch(y){this._worker=new a("error"),this._worker.error(y)}}u.prototype={accumulate:function(v){return m(this,v)},on:function(v,_){var p=this;return v==="data"?this._worker.on(v,function(h){_.call(p,h.data,h.meta)}):this._worker.on(v,function(){s.delay(_,arguments,p)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(v){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new f(this,{objectMode:this._outputType!=="nodebuffer"},v)}},n.exports=u},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,n,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",r.nodebuffer=typeof Buffer<"u",r.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")r.blob=!1;else{var s=new ArrayBuffer(0);try{r.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);o.append(s),r.blob=o.getBlob("application/zip").size===0}catch{r.blob=!1}}}try{r.nodestream=!!e("readable-stream").Readable}catch{r.nodestream=!1}},{"readable-stream":16}],31:[function(e,n,r){for(var s=e("./utils"),o=e("./support"),a=e("./nodejsUtils"),l=e("./stream/GenericWorker"),c=new Array(256),d=0;d<256;d++)c[d]=252<=d?6:248<=d?5:240<=d?4:224<=d?3:192<=d?2:1;c[254]=c[254]=1;function f(){l.call(this,"utf-8 decode"),this.leftOver=null}function m(){l.call(this,"utf-8 encode")}r.utf8encode=function(u){return o.nodebuffer?a.newBufferFrom(u,"utf-8"):function(v){var _,p,h,y,E,M=v.length,L=0;for(y=0;y<M;y++)(64512&(p=v.charCodeAt(y)))==55296&&y+1<M&&(64512&(h=v.charCodeAt(y+1)))==56320&&(p=65536+(p-55296<<10)+(h-56320),y++),L+=p<128?1:p<2048?2:p<65536?3:4;for(_=o.uint8array?new Uint8Array(L):new Array(L),y=E=0;E<L;y++)(64512&(p=v.charCodeAt(y)))==55296&&y+1<M&&(64512&(h=v.charCodeAt(y+1)))==56320&&(p=65536+(p-55296<<10)+(h-56320),y++),p<128?_[E++]=p:(p<2048?_[E++]=192|p>>>6:(p<65536?_[E++]=224|p>>>12:(_[E++]=240|p>>>18,_[E++]=128|p>>>12&63),_[E++]=128|p>>>6&63),_[E++]=128|63&p);return _}(u)},r.utf8decode=function(u){return o.nodebuffer?s.transformTo("nodebuffer",u).toString("utf-8"):function(v){var _,p,h,y,E=v.length,M=new Array(2*E);for(_=p=0;_<E;)if((h=v[_++])<128)M[p++]=h;else if(4<(y=c[h]))M[p++]=65533,_+=y-1;else{for(h&=y===2?31:y===3?15:7;1<y&&_<E;)h=h<<6|63&v[_++],y--;1<y?M[p++]=65533:h<65536?M[p++]=h:(h-=65536,M[p++]=55296|h>>10&1023,M[p++]=56320|1023&h)}return M.length!==p&&(M.subarray?M=M.subarray(0,p):M.length=p),s.applyFromCharCode(M)}(u=s.transformTo(o.uint8array?"uint8array":"array",u))},s.inherits(f,l),f.prototype.processChunk=function(u){var v=s.transformTo(o.uint8array?"uint8array":"array",u.data);if(this.leftOver&&this.leftOver.length){if(o.uint8array){var _=v;(v=new Uint8Array(_.length+this.leftOver.length)).set(this.leftOver,0),v.set(_,this.leftOver.length)}else v=this.leftOver.concat(v);this.leftOver=null}var p=function(y,E){var M;for((E=E||y.length)>y.length&&(E=y.length),M=E-1;0<=M&&(192&y[M])==128;)M--;return M<0||M===0?E:M+c[y[M]]>E?M:E}(v),h=v;p!==v.length&&(o.uint8array?(h=v.subarray(0,p),this.leftOver=v.subarray(p,v.length)):(h=v.slice(0,p),this.leftOver=v.slice(p,v.length))),this.push({data:r.utf8decode(h),meta:u.meta})},f.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=f,s.inherits(m,l),m.prototype.processChunk=function(u){this.push({data:r.utf8encode(u.data),meta:u.meta})},r.Utf8EncodeWorker=m},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,n,r){var s=e("./support"),o=e("./base64"),a=e("./nodejsUtils"),l=e("./external");function c(_){return _}function d(_,p){for(var h=0;h<_.length;++h)p[h]=255&_.charCodeAt(h);return p}e("setimmediate"),r.newBlob=function(_,p){r.checkSupport("blob");try{return new Blob([_],{type:p})}catch{try{var h=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return h.append(_),h.getBlob(p)}catch{throw new Error("Bug : can't construct the Blob.")}}};var f={stringifyByChunk:function(_,p,h){var y=[],E=0,M=_.length;if(M<=h)return String.fromCharCode.apply(null,_);for(;E<M;)p==="array"||p==="nodebuffer"?y.push(String.fromCharCode.apply(null,_.slice(E,Math.min(E+h,M)))):y.push(String.fromCharCode.apply(null,_.subarray(E,Math.min(E+h,M)))),E+=h;return y.join("")},stringifyByChar:function(_){for(var p="",h=0;h<_.length;h++)p+=String.fromCharCode(_[h]);return p},applyCanBeUsed:{uint8array:function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function m(_){var p=65536,h=r.getTypeOf(_),y=!0;if(h==="uint8array"?y=f.applyCanBeUsed.uint8array:h==="nodebuffer"&&(y=f.applyCanBeUsed.nodebuffer),y)for(;1<p;)try{return f.stringifyByChunk(_,h,p)}catch{p=Math.floor(p/2)}return f.stringifyByChar(_)}function u(_,p){for(var h=0;h<_.length;h++)p[h]=_[h];return p}r.applyFromCharCode=m;var v={};v.string={string:c,array:function(_){return d(_,new Array(_.length))},arraybuffer:function(_){return v.string.uint8array(_).buffer},uint8array:function(_){return d(_,new Uint8Array(_.length))},nodebuffer:function(_){return d(_,a.allocBuffer(_.length))}},v.array={string:m,array:c,arraybuffer:function(_){return new Uint8Array(_).buffer},uint8array:function(_){return new Uint8Array(_)},nodebuffer:function(_){return a.newBufferFrom(_)}},v.arraybuffer={string:function(_){return m(new Uint8Array(_))},array:function(_){return u(new Uint8Array(_),new Array(_.byteLength))},arraybuffer:c,uint8array:function(_){return new Uint8Array(_)},nodebuffer:function(_){return a.newBufferFrom(new Uint8Array(_))}},v.uint8array={string:m,array:function(_){return u(_,new Array(_.length))},arraybuffer:function(_){return _.buffer},uint8array:c,nodebuffer:function(_){return a.newBufferFrom(_)}},v.nodebuffer={string:m,array:function(_){return u(_,new Array(_.length))},arraybuffer:function(_){return v.nodebuffer.uint8array(_).buffer},uint8array:function(_){return u(_,new Uint8Array(_.length))},nodebuffer:c},r.transformTo=function(_,p){if(p=p||"",!_)return p;r.checkSupport(_);var h=r.getTypeOf(p);return v[h][_](p)},r.resolve=function(_){for(var p=_.split("/"),h=[],y=0;y<p.length;y++){var E=p[y];E==="."||E===""&&y!==0&&y!==p.length-1||(E===".."?h.pop():h.push(E))}return h.join("/")},r.getTypeOf=function(_){if(typeof _=="string")return"string";var p=Object.prototype.toString.call(_);return p==="[object Array]"?"array":s.nodebuffer&&a.isBuffer(_)?"nodebuffer":s.uint8array&&p==="[object Uint8Array]"?"uint8array":s.arraybuffer&&p==="[object ArrayBuffer]"?"arraybuffer":void 0},r.checkSupport=function(_){if(!s[_.toLowerCase()])throw new Error(_+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(_){var p,h,y="";for(h=0;h<(_||"").length;h++)y+="\\x"+((p=_.charCodeAt(h))<16?"0":"")+p.toString(16).toUpperCase();return y},r.delay=function(_,p,h){setImmediate(function(){_.apply(h||null,p||[])})},r.inherits=function(_,p){function h(){}h.prototype=p.prototype,_.prototype=new h},r.extend=function(){var _,p,h={};for(_=0;_<arguments.length;_++)for(p in arguments[_])Object.prototype.hasOwnProperty.call(arguments[_],p)&&h[p]===void 0&&(h[p]=arguments[_][p]);return h},r.prepareContent=function(_,p,h,y,E){return l.Promise.resolve(p).then(function(M){return s.blob&&(M instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(M))!==-1)?Blob.prototype.arrayBuffer!==void 0?M.arrayBuffer():typeof FileReader<"u"?new l.Promise(function(L,C){var P=new FileReader;P.onload=function(N){L(N.target.result)},P.onerror=function(N){C(N.target.error)},P.readAsArrayBuffer(M)}):l.Promise.reject(new Error(_+" is a Blob, but we have no way of reading it.")):M}).then(function(M){var L=r.getTypeOf(M);return L?(L==="arraybuffer"?M=r.transformTo("uint8array",M):L==="string"&&(E?M=o.decode(M):h&&y!==!0&&(M=function(C){return d(C,s.uint8array?new Uint8Array(C.length):new Array(C.length))}(M))),M):l.Promise.reject(new Error("Can't read the data of '"+_+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,n,r){var s=e("./reader/readerFor"),o=e("./utils"),a=e("./signature"),l=e("./zipEntry"),c=e("./support");function d(f){this.files=[],this.loadOptions=f}d.prototype={checkSignature:function(f){if(!this.reader.readAndCheckSignature(f)){this.reader.index-=4;var m=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+o.pretty(m)+", expected "+o.pretty(f)+")")}},isSignature:function(f,m){var u=this.reader.index;this.reader.setIndex(f);var v=this.reader.readString(4)===m;return this.reader.setIndex(u),v},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var f=this.reader.readData(this.zipCommentLength),m=c.uint8array?"uint8array":"array",u=o.transformTo(m,f);this.zipComment=this.loadOptions.decodeFileName(u)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var f,m,u,v=this.zip64EndOfCentralSize-44;0<v;)f=this.reader.readInt(2),m=this.reader.readInt(4),u=this.reader.readData(m),this.zip64ExtensibleData[f]={id:f,length:m,value:u}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var f,m;for(f=0;f<this.files.length;f++)m=this.files[f],this.reader.setIndex(m.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),m.readLocalPart(this.reader),m.handleUTF8(),m.processAttributes()},readCentralDir:function(){var f;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(f=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(f);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var f=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(f<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(f);var m=f;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===o.MAX_VALUE_16BITS||this.diskWithCentralDirStart===o.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===o.MAX_VALUE_16BITS||this.centralDirRecords===o.MAX_VALUE_16BITS||this.centralDirSize===o.MAX_VALUE_32BITS||this.centralDirOffset===o.MAX_VALUE_32BITS){if(this.zip64=!0,(f=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(f),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var u=this.centralDirOffset+this.centralDirSize;this.zip64&&(u+=20,u+=12+this.zip64EndOfCentralSize);var v=m-u;if(0<v)this.isSignature(m,a.CENTRAL_FILE_HEADER)||(this.reader.zero=v);else if(v<0)throw new Error("Corrupted zip: missing "+Math.abs(v)+" bytes.")},prepareReader:function(f){this.reader=s(f)},load:function(f){this.prepareReader(f),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},n.exports=d},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,n,r){var s=e("./reader/readerFor"),o=e("./utils"),a=e("./compressedObject"),l=e("./crc32"),c=e("./utf8"),d=e("./compressions"),f=e("./support");function m(u,v){this.options=u,this.loadOptions=v}m.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(u){var v,_;if(u.skip(22),this.fileNameLength=u.readInt(2),_=u.readInt(2),this.fileName=u.readData(this.fileNameLength),u.skip(_),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((v=function(p){for(var h in d)if(Object.prototype.hasOwnProperty.call(d,h)&&d[h].magic===p)return d[h];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+o.pretty(this.compressionMethod)+" unknown (inner file : "+o.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,v,u.readData(this.compressedSize))},readCentralPart:function(u){this.versionMadeBy=u.readInt(2),u.skip(2),this.bitFlag=u.readInt(2),this.compressionMethod=u.readString(2),this.date=u.readDate(),this.crc32=u.readInt(4),this.compressedSize=u.readInt(4),this.uncompressedSize=u.readInt(4);var v=u.readInt(2);if(this.extraFieldsLength=u.readInt(2),this.fileCommentLength=u.readInt(2),this.diskNumberStart=u.readInt(2),this.internalFileAttributes=u.readInt(2),this.externalFileAttributes=u.readInt(4),this.localHeaderOffset=u.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");u.skip(v),this.readExtraFields(u),this.parseZIP64ExtraField(u),this.fileComment=u.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var u=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),u==0&&(this.dosPermissions=63&this.externalFileAttributes),u==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var u=s(this.extraFields[1].value);this.uncompressedSize===o.MAX_VALUE_32BITS&&(this.uncompressedSize=u.readInt(8)),this.compressedSize===o.MAX_VALUE_32BITS&&(this.compressedSize=u.readInt(8)),this.localHeaderOffset===o.MAX_VALUE_32BITS&&(this.localHeaderOffset=u.readInt(8)),this.diskNumberStart===o.MAX_VALUE_32BITS&&(this.diskNumberStart=u.readInt(4))}},readExtraFields:function(u){var v,_,p,h=u.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});u.index+4<h;)v=u.readInt(2),_=u.readInt(2),p=u.readData(_),this.extraFields[v]={id:v,length:_,value:p};u.setIndex(h)},handleUTF8:function(){var u=f.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=c.utf8decode(this.fileName),this.fileCommentStr=c.utf8decode(this.fileComment);else{var v=this.findExtraFieldUnicodePath();if(v!==null)this.fileNameStr=v;else{var _=o.transformTo(u,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(_)}var p=this.findExtraFieldUnicodeComment();if(p!==null)this.fileCommentStr=p;else{var h=o.transformTo(u,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(h)}}},findExtraFieldUnicodePath:function(){var u=this.extraFields[28789];if(u){var v=s(u.value);return v.readInt(1)!==1||l(this.fileName)!==v.readInt(4)?null:c.utf8decode(v.readData(u.length-5))}return null},findExtraFieldUnicodeComment:function(){var u=this.extraFields[25461];if(u){var v=s(u.value);return v.readInt(1)!==1||l(this.fileComment)!==v.readInt(4)?null:c.utf8decode(v.readData(u.length-5))}return null}},n.exports=m},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,n,r){function s(v,_,p){this.name=v,this.dir=p.dir,this.date=p.date,this.comment=p.comment,this.unixPermissions=p.unixPermissions,this.dosPermissions=p.dosPermissions,this._data=_,this._dataBinary=p.binary,this.options={compression:p.compression,compressionOptions:p.compressionOptions}}var o=e("./stream/StreamHelper"),a=e("./stream/DataWorker"),l=e("./utf8"),c=e("./compressedObject"),d=e("./stream/GenericWorker");s.prototype={internalStream:function(v){var _=null,p="string";try{if(!v)throw new Error("No output type specified.");var h=(p=v.toLowerCase())==="string"||p==="text";p!=="binarystring"&&p!=="text"||(p="string"),_=this._decompressWorker();var y=!this._dataBinary;y&&!h&&(_=_.pipe(new l.Utf8EncodeWorker)),!y&&h&&(_=_.pipe(new l.Utf8DecodeWorker))}catch(E){(_=new d("error")).error(E)}return new o(_,p,"")},async:function(v,_){return this.internalStream(v).accumulate(_)},nodeStream:function(v,_){return this.internalStream(v||"nodebuffer").toNodejsStream(_)},_compressWorker:function(v,_){if(this._data instanceof c&&this._data.compression.magic===v.magic)return this._data.getCompressedWorker();var p=this._decompressWorker();return this._dataBinary||(p=p.pipe(new l.Utf8EncodeWorker)),c.createWorkerFrom(p,v,_)},_decompressWorker:function(){return this._data instanceof c?this._data.getContentWorker():this._data instanceof d?this._data:new a(this._data)}};for(var f=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],m=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},u=0;u<f.length;u++)s.prototype[f[u]]=m;n.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,n,r){(function(s){var o,a,l=s.MutationObserver||s.WebKitMutationObserver;if(l){var c=0,d=new l(v),f=s.document.createTextNode("");d.observe(f,{characterData:!0}),o=function(){f.data=c=++c%2}}else if(s.setImmediate||s.MessageChannel===void 0)o="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var _=s.document.createElement("script");_.onreadystatechange=function(){v(),_.onreadystatechange=null,_.parentNode.removeChild(_),_=null},s.document.documentElement.appendChild(_)}:function(){setTimeout(v,0)};else{var m=new s.MessageChannel;m.port1.onmessage=v,o=function(){m.port2.postMessage(0)}}var u=[];function v(){var _,p;a=!0;for(var h=u.length;h;){for(p=u,u=[],_=-1;++_<h;)p[_]();h=u.length}a=!1}n.exports=function(_){u.push(_)!==1||a||o()}}).call(this,typeof Oi<"u"?Oi:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,n,r){var s=e("immediate");function o(){}var a={},l=["REJECTED"],c=["FULFILLED"],d=["PENDING"];function f(h){if(typeof h!="function")throw new TypeError("resolver must be a function");this.state=d,this.queue=[],this.outcome=void 0,h!==o&&_(this,h)}function m(h,y,E){this.promise=h,typeof y=="function"&&(this.onFulfilled=y,this.callFulfilled=this.otherCallFulfilled),typeof E=="function"&&(this.onRejected=E,this.callRejected=this.otherCallRejected)}function u(h,y,E){s(function(){var M;try{M=y(E)}catch(L){return a.reject(h,L)}M===h?a.reject(h,new TypeError("Cannot resolve promise with itself")):a.resolve(h,M)})}function v(h){var y=h&&h.then;if(h&&(typeof h=="object"||typeof h=="function")&&typeof y=="function")return function(){y.apply(h,arguments)}}function _(h,y){var E=!1;function M(P){E||(E=!0,a.reject(h,P))}function L(P){E||(E=!0,a.resolve(h,P))}var C=p(function(){y(L,M)});C.status==="error"&&M(C.value)}function p(h,y){var E={};try{E.value=h(y),E.status="success"}catch(M){E.status="error",E.value=M}return E}(n.exports=f).prototype.finally=function(h){if(typeof h!="function")return this;var y=this.constructor;return this.then(function(E){return y.resolve(h()).then(function(){return E})},function(E){return y.resolve(h()).then(function(){throw E})})},f.prototype.catch=function(h){return this.then(null,h)},f.prototype.then=function(h,y){if(typeof h!="function"&&this.state===c||typeof y!="function"&&this.state===l)return this;var E=new this.constructor(o);return this.state!==d?u(E,this.state===c?h:y,this.outcome):this.queue.push(new m(E,h,y)),E},m.prototype.callFulfilled=function(h){a.resolve(this.promise,h)},m.prototype.otherCallFulfilled=function(h){u(this.promise,this.onFulfilled,h)},m.prototype.callRejected=function(h){a.reject(this.promise,h)},m.prototype.otherCallRejected=function(h){u(this.promise,this.onRejected,h)},a.resolve=function(h,y){var E=p(v,y);if(E.status==="error")return a.reject(h,E.value);var M=E.value;if(M)_(h,M);else{h.state=c,h.outcome=y;for(var L=-1,C=h.queue.length;++L<C;)h.queue[L].callFulfilled(y)}return h},a.reject=function(h,y){h.state=l,h.outcome=y;for(var E=-1,M=h.queue.length;++E<M;)h.queue[E].callRejected(y);return h},f.resolve=function(h){return h instanceof this?h:a.resolve(new this(o),h)},f.reject=function(h){var y=new this(o);return a.reject(y,h)},f.all=function(h){var y=this;if(Object.prototype.toString.call(h)!=="[object Array]")return this.reject(new TypeError("must be an array"));var E=h.length,M=!1;if(!E)return this.resolve([]);for(var L=new Array(E),C=0,P=-1,N=new this(o);++P<E;)b(h[P],P);return N;function b(T,F){y.resolve(T).then(function(A){L[F]=A,++C!==E||M||(M=!0,a.resolve(N,L))},function(A){M||(M=!0,a.reject(N,A))})}},f.race=function(h){var y=this;if(Object.prototype.toString.call(h)!=="[object Array]")return this.reject(new TypeError("must be an array"));var E=h.length,M=!1;if(!E)return this.resolve([]);for(var L=-1,C=new this(o);++L<E;)P=h[L],y.resolve(P).then(function(N){M||(M=!0,a.resolve(C,N))},function(N){M||(M=!0,a.reject(C,N))});var P;return C}},{immediate:36}],38:[function(e,n,r){var s={};(0,e("./lib/utils/common").assign)(s,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),n.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,n,r){var s=e("./zlib/deflate"),o=e("./utils/common"),a=e("./utils/strings"),l=e("./zlib/messages"),c=e("./zlib/zstream"),d=Object.prototype.toString,f=0,m=-1,u=0,v=8;function _(h){if(!(this instanceof _))return new _(h);this.options=o.assign({level:m,method:v,chunkSize:16384,windowBits:15,memLevel:8,strategy:u,to:""},h||{});var y=this.options;y.raw&&0<y.windowBits?y.windowBits=-y.windowBits:y.gzip&&0<y.windowBits&&y.windowBits<16&&(y.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var E=s.deflateInit2(this.strm,y.level,y.method,y.windowBits,y.memLevel,y.strategy);if(E!==f)throw new Error(l[E]);if(y.header&&s.deflateSetHeader(this.strm,y.header),y.dictionary){var M;if(M=typeof y.dictionary=="string"?a.string2buf(y.dictionary):d.call(y.dictionary)==="[object ArrayBuffer]"?new Uint8Array(y.dictionary):y.dictionary,(E=s.deflateSetDictionary(this.strm,M))!==f)throw new Error(l[E]);this._dict_set=!0}}function p(h,y){var E=new _(y);if(E.push(h,!0),E.err)throw E.msg||l[E.err];return E.result}_.prototype.push=function(h,y){var E,M,L=this.strm,C=this.options.chunkSize;if(this.ended)return!1;M=y===~~y?y:y===!0?4:0,typeof h=="string"?L.input=a.string2buf(h):d.call(h)==="[object ArrayBuffer]"?L.input=new Uint8Array(h):L.input=h,L.next_in=0,L.avail_in=L.input.length;do{if(L.avail_out===0&&(L.output=new o.Buf8(C),L.next_out=0,L.avail_out=C),(E=s.deflate(L,M))!==1&&E!==f)return this.onEnd(E),!(this.ended=!0);L.avail_out!==0&&(L.avail_in!==0||M!==4&&M!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(o.shrinkBuf(L.output,L.next_out))):this.onData(o.shrinkBuf(L.output,L.next_out)))}while((0<L.avail_in||L.avail_out===0)&&E!==1);return M===4?(E=s.deflateEnd(this.strm),this.onEnd(E),this.ended=!0,E===f):M!==2||(this.onEnd(f),!(L.avail_out=0))},_.prototype.onData=function(h){this.chunks.push(h)},_.prototype.onEnd=function(h){h===f&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=h,this.msg=this.strm.msg},r.Deflate=_,r.deflate=p,r.deflateRaw=function(h,y){return(y=y||{}).raw=!0,p(h,y)},r.gzip=function(h,y){return(y=y||{}).gzip=!0,p(h,y)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,n,r){var s=e("./zlib/inflate"),o=e("./utils/common"),a=e("./utils/strings"),l=e("./zlib/constants"),c=e("./zlib/messages"),d=e("./zlib/zstream"),f=e("./zlib/gzheader"),m=Object.prototype.toString;function u(_){if(!(this instanceof u))return new u(_);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},_||{});var p=this.options;p.raw&&0<=p.windowBits&&p.windowBits<16&&(p.windowBits=-p.windowBits,p.windowBits===0&&(p.windowBits=-15)),!(0<=p.windowBits&&p.windowBits<16)||_&&_.windowBits||(p.windowBits+=32),15<p.windowBits&&p.windowBits<48&&!(15&p.windowBits)&&(p.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new d,this.strm.avail_out=0;var h=s.inflateInit2(this.strm,p.windowBits);if(h!==l.Z_OK)throw new Error(c[h]);this.header=new f,s.inflateGetHeader(this.strm,this.header)}function v(_,p){var h=new u(p);if(h.push(_,!0),h.err)throw h.msg||c[h.err];return h.result}u.prototype.push=function(_,p){var h,y,E,M,L,C,P=this.strm,N=this.options.chunkSize,b=this.options.dictionary,T=!1;if(this.ended)return!1;y=p===~~p?p:p===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof _=="string"?P.input=a.binstring2buf(_):m.call(_)==="[object ArrayBuffer]"?P.input=new Uint8Array(_):P.input=_,P.next_in=0,P.avail_in=P.input.length;do{if(P.avail_out===0&&(P.output=new o.Buf8(N),P.next_out=0,P.avail_out=N),(h=s.inflate(P,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&b&&(C=typeof b=="string"?a.string2buf(b):m.call(b)==="[object ArrayBuffer]"?new Uint8Array(b):b,h=s.inflateSetDictionary(this.strm,C)),h===l.Z_BUF_ERROR&&T===!0&&(h=l.Z_OK,T=!1),h!==l.Z_STREAM_END&&h!==l.Z_OK)return this.onEnd(h),!(this.ended=!0);P.next_out&&(P.avail_out!==0&&h!==l.Z_STREAM_END&&(P.avail_in!==0||y!==l.Z_FINISH&&y!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(E=a.utf8border(P.output,P.next_out),M=P.next_out-E,L=a.buf2string(P.output,E),P.next_out=M,P.avail_out=N-M,M&&o.arraySet(P.output,P.output,E,M,0),this.onData(L)):this.onData(o.shrinkBuf(P.output,P.next_out)))),P.avail_in===0&&P.avail_out===0&&(T=!0)}while((0<P.avail_in||P.avail_out===0)&&h!==l.Z_STREAM_END);return h===l.Z_STREAM_END&&(y=l.Z_FINISH),y===l.Z_FINISH?(h=s.inflateEnd(this.strm),this.onEnd(h),this.ended=!0,h===l.Z_OK):y!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(P.avail_out=0))},u.prototype.onData=function(_){this.chunks.push(_)},u.prototype.onEnd=function(_){_===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=_,this.msg=this.strm.msg},r.Inflate=u,r.inflate=v,r.inflateRaw=function(_,p){return(p=p||{}).raw=!0,v(_,p)},r.ungzip=v},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,n,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";r.assign=function(l){for(var c=Array.prototype.slice.call(arguments,1);c.length;){var d=c.shift();if(d){if(typeof d!="object")throw new TypeError(d+"must be non-object");for(var f in d)d.hasOwnProperty(f)&&(l[f]=d[f])}}return l},r.shrinkBuf=function(l,c){return l.length===c?l:l.subarray?l.subarray(0,c):(l.length=c,l)};var o={arraySet:function(l,c,d,f,m){if(c.subarray&&l.subarray)l.set(c.subarray(d,d+f),m);else for(var u=0;u<f;u++)l[m+u]=c[d+u]},flattenChunks:function(l){var c,d,f,m,u,v;for(c=f=0,d=l.length;c<d;c++)f+=l[c].length;for(v=new Uint8Array(f),c=m=0,d=l.length;c<d;c++)u=l[c],v.set(u,m),m+=u.length;return v}},a={arraySet:function(l,c,d,f,m){for(var u=0;u<f;u++)l[m+u]=c[d+u]},flattenChunks:function(l){return[].concat.apply([],l)}};r.setTyped=function(l){l?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,o)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,a))},r.setTyped(s)},{}],42:[function(e,n,r){var s=e("./common"),o=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{o=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var l=new s.Buf8(256),c=0;c<256;c++)l[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;function d(f,m){if(m<65537&&(f.subarray&&a||!f.subarray&&o))return String.fromCharCode.apply(null,s.shrinkBuf(f,m));for(var u="",v=0;v<m;v++)u+=String.fromCharCode(f[v]);return u}l[254]=l[254]=1,r.string2buf=function(f){var m,u,v,_,p,h=f.length,y=0;for(_=0;_<h;_++)(64512&(u=f.charCodeAt(_)))==55296&&_+1<h&&(64512&(v=f.charCodeAt(_+1)))==56320&&(u=65536+(u-55296<<10)+(v-56320),_++),y+=u<128?1:u<2048?2:u<65536?3:4;for(m=new s.Buf8(y),_=p=0;p<y;_++)(64512&(u=f.charCodeAt(_)))==55296&&_+1<h&&(64512&(v=f.charCodeAt(_+1)))==56320&&(u=65536+(u-55296<<10)+(v-56320),_++),u<128?m[p++]=u:(u<2048?m[p++]=192|u>>>6:(u<65536?m[p++]=224|u>>>12:(m[p++]=240|u>>>18,m[p++]=128|u>>>12&63),m[p++]=128|u>>>6&63),m[p++]=128|63&u);return m},r.buf2binstring=function(f){return d(f,f.length)},r.binstring2buf=function(f){for(var m=new s.Buf8(f.length),u=0,v=m.length;u<v;u++)m[u]=f.charCodeAt(u);return m},r.buf2string=function(f,m){var u,v,_,p,h=m||f.length,y=new Array(2*h);for(u=v=0;u<h;)if((_=f[u++])<128)y[v++]=_;else if(4<(p=l[_]))y[v++]=65533,u+=p-1;else{for(_&=p===2?31:p===3?15:7;1<p&&u<h;)_=_<<6|63&f[u++],p--;1<p?y[v++]=65533:_<65536?y[v++]=_:(_-=65536,y[v++]=55296|_>>10&1023,y[v++]=56320|1023&_)}return d(y,v)},r.utf8border=function(f,m){var u;for((m=m||f.length)>f.length&&(m=f.length),u=m-1;0<=u&&(192&f[u])==128;)u--;return u<0||u===0?m:u+l[f[u]]>m?u:m}},{"./common":41}],43:[function(e,n,r){n.exports=function(s,o,a,l){for(var c=65535&s|0,d=s>>>16&65535|0,f=0;a!==0;){for(a-=f=2e3<a?2e3:a;d=d+(c=c+o[l++]|0)|0,--f;);c%=65521,d%=65521}return c|d<<16|0}},{}],44:[function(e,n,r){n.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,n,r){var s=function(){for(var o,a=[],l=0;l<256;l++){o=l;for(var c=0;c<8;c++)o=1&o?3988292384^o>>>1:o>>>1;a[l]=o}return a}();n.exports=function(o,a,l,c){var d=s,f=c+l;o^=-1;for(var m=c;m<f;m++)o=o>>>8^d[255&(o^a[m])];return-1^o}},{}],46:[function(e,n,r){var s,o=e("../utils/common"),a=e("./trees"),l=e("./adler32"),c=e("./crc32"),d=e("./messages"),f=0,m=4,u=0,v=-2,_=-1,p=4,h=2,y=8,E=9,M=286,L=30,C=19,P=2*M+1,N=15,b=3,T=258,F=T+b+1,A=42,U=113,S=1,B=2,tt=3,W=4;function q(g,at){return g.msg=d[at],at}function K(g){return(g<<1)-(4<g?9:0)}function ot(g){for(var at=g.length;0<=--at;)g[at]=0}function z(g){var at=g.state,$=at.pending;$>g.avail_out&&($=g.avail_out),$!==0&&(o.arraySet(g.output,at.pending_buf,at.pending_out,$,g.next_out),g.next_out+=$,at.pending_out+=$,g.total_out+=$,g.avail_out-=$,at.pending-=$,at.pending===0&&(at.pending_out=0))}function G(g,at){a._tr_flush_block(g,0<=g.block_start?g.block_start:-1,g.strstart-g.block_start,at),g.block_start=g.strstart,z(g.strm)}function _t(g,at){g.pending_buf[g.pending++]=at}function X(g,at){g.pending_buf[g.pending++]=at>>>8&255,g.pending_buf[g.pending++]=255&at}function et(g,at){var $,I,D=g.max_chain_length,k=g.strstart,nt=g.prev_length,w=g.nice_match,x=g.strstart>g.w_size-F?g.strstart-(g.w_size-F):0,O=g.window,Z=g.w_mask,V=g.prev,J=g.strstart+T,ft=O[k+nt-1],ct=O[k+nt];g.prev_length>=g.good_match&&(D>>=2),w>g.lookahead&&(w=g.lookahead);do if(O[($=at)+nt]===ct&&O[$+nt-1]===ft&&O[$]===O[k]&&O[++$]===O[k+1]){k+=2,$++;do;while(O[++k]===O[++$]&&O[++k]===O[++$]&&O[++k]===O[++$]&&O[++k]===O[++$]&&O[++k]===O[++$]&&O[++k]===O[++$]&&O[++k]===O[++$]&&O[++k]===O[++$]&&k<J);if(I=T-(J-k),k=J-T,nt<I){if(g.match_start=at,w<=(nt=I))break;ft=O[k+nt-1],ct=O[k+nt]}}while((at=V[at&Z])>x&&--D!=0);return nt<=g.lookahead?nt:g.lookahead}function mt(g){var at,$,I,D,k,nt,w,x,O,Z,V=g.w_size;do{if(D=g.window_size-g.lookahead-g.strstart,g.strstart>=V+(V-F)){for(o.arraySet(g.window,g.window,V,V,0),g.match_start-=V,g.strstart-=V,g.block_start-=V,at=$=g.hash_size;I=g.head[--at],g.head[at]=V<=I?I-V:0,--$;);for(at=$=V;I=g.prev[--at],g.prev[at]=V<=I?I-V:0,--$;);D+=V}if(g.strm.avail_in===0)break;if(nt=g.strm,w=g.window,x=g.strstart+g.lookahead,O=D,Z=void 0,Z=nt.avail_in,O<Z&&(Z=O),$=Z===0?0:(nt.avail_in-=Z,o.arraySet(w,nt.input,nt.next_in,Z,x),nt.state.wrap===1?nt.adler=l(nt.adler,w,Z,x):nt.state.wrap===2&&(nt.adler=c(nt.adler,w,Z,x)),nt.next_in+=Z,nt.total_in+=Z,Z),g.lookahead+=$,g.lookahead+g.insert>=b)for(k=g.strstart-g.insert,g.ins_h=g.window[k],g.ins_h=(g.ins_h<<g.hash_shift^g.window[k+1])&g.hash_mask;g.insert&&(g.ins_h=(g.ins_h<<g.hash_shift^g.window[k+b-1])&g.hash_mask,g.prev[k&g.w_mask]=g.head[g.ins_h],g.head[g.ins_h]=k,k++,g.insert--,!(g.lookahead+g.insert<b)););}while(g.lookahead<F&&g.strm.avail_in!==0)}function ut(g,at){for(var $,I;;){if(g.lookahead<F){if(mt(g),g.lookahead<F&&at===f)return S;if(g.lookahead===0)break}if($=0,g.lookahead>=b&&(g.ins_h=(g.ins_h<<g.hash_shift^g.window[g.strstart+b-1])&g.hash_mask,$=g.prev[g.strstart&g.w_mask]=g.head[g.ins_h],g.head[g.ins_h]=g.strstart),$!==0&&g.strstart-$<=g.w_size-F&&(g.match_length=et(g,$)),g.match_length>=b)if(I=a._tr_tally(g,g.strstart-g.match_start,g.match_length-b),g.lookahead-=g.match_length,g.match_length<=g.max_lazy_match&&g.lookahead>=b){for(g.match_length--;g.strstart++,g.ins_h=(g.ins_h<<g.hash_shift^g.window[g.strstart+b-1])&g.hash_mask,$=g.prev[g.strstart&g.w_mask]=g.head[g.ins_h],g.head[g.ins_h]=g.strstart,--g.match_length!=0;);g.strstart++}else g.strstart+=g.match_length,g.match_length=0,g.ins_h=g.window[g.strstart],g.ins_h=(g.ins_h<<g.hash_shift^g.window[g.strstart+1])&g.hash_mask;else I=a._tr_tally(g,0,g.window[g.strstart]),g.lookahead--,g.strstart++;if(I&&(G(g,!1),g.strm.avail_out===0))return S}return g.insert=g.strstart<b-1?g.strstart:b-1,at===m?(G(g,!0),g.strm.avail_out===0?tt:W):g.last_lit&&(G(g,!1),g.strm.avail_out===0)?S:B}function pt(g,at){for(var $,I,D;;){if(g.lookahead<F){if(mt(g),g.lookahead<F&&at===f)return S;if(g.lookahead===0)break}if($=0,g.lookahead>=b&&(g.ins_h=(g.ins_h<<g.hash_shift^g.window[g.strstart+b-1])&g.hash_mask,$=g.prev[g.strstart&g.w_mask]=g.head[g.ins_h],g.head[g.ins_h]=g.strstart),g.prev_length=g.match_length,g.prev_match=g.match_start,g.match_length=b-1,$!==0&&g.prev_length<g.max_lazy_match&&g.strstart-$<=g.w_size-F&&(g.match_length=et(g,$),g.match_length<=5&&(g.strategy===1||g.match_length===b&&4096<g.strstart-g.match_start)&&(g.match_length=b-1)),g.prev_length>=b&&g.match_length<=g.prev_length){for(D=g.strstart+g.lookahead-b,I=a._tr_tally(g,g.strstart-1-g.prev_match,g.prev_length-b),g.lookahead-=g.prev_length-1,g.prev_length-=2;++g.strstart<=D&&(g.ins_h=(g.ins_h<<g.hash_shift^g.window[g.strstart+b-1])&g.hash_mask,$=g.prev[g.strstart&g.w_mask]=g.head[g.ins_h],g.head[g.ins_h]=g.strstart),--g.prev_length!=0;);if(g.match_available=0,g.match_length=b-1,g.strstart++,I&&(G(g,!1),g.strm.avail_out===0))return S}else if(g.match_available){if((I=a._tr_tally(g,0,g.window[g.strstart-1]))&&G(g,!1),g.strstart++,g.lookahead--,g.strm.avail_out===0)return S}else g.match_available=1,g.strstart++,g.lookahead--}return g.match_available&&(I=a._tr_tally(g,0,g.window[g.strstart-1]),g.match_available=0),g.insert=g.strstart<b-1?g.strstart:b-1,at===m?(G(g,!0),g.strm.avail_out===0?tt:W):g.last_lit&&(G(g,!1),g.strm.avail_out===0)?S:B}function yt(g,at,$,I,D){this.good_length=g,this.max_lazy=at,this.nice_length=$,this.max_chain=I,this.func=D}function Pt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=y,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new o.Buf16(2*P),this.dyn_dtree=new o.Buf16(2*(2*L+1)),this.bl_tree=new o.Buf16(2*(2*C+1)),ot(this.dyn_ltree),ot(this.dyn_dtree),ot(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new o.Buf16(N+1),this.heap=new o.Buf16(2*M+1),ot(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new o.Buf16(2*M+1),ot(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function It(g){var at;return g&&g.state?(g.total_in=g.total_out=0,g.data_type=h,(at=g.state).pending=0,at.pending_out=0,at.wrap<0&&(at.wrap=-at.wrap),at.status=at.wrap?A:U,g.adler=at.wrap===2?0:1,at.last_flush=f,a._tr_init(at),u):q(g,v)}function Ut(g){var at=It(g);return at===u&&function($){$.window_size=2*$.w_size,ot($.head),$.max_lazy_match=s[$.level].max_lazy,$.good_match=s[$.level].good_length,$.nice_match=s[$.level].nice_length,$.max_chain_length=s[$.level].max_chain,$.strstart=0,$.block_start=0,$.lookahead=0,$.insert=0,$.match_length=$.prev_length=b-1,$.match_available=0,$.ins_h=0}(g.state),at}function jt(g,at,$,I,D,k){if(!g)return v;var nt=1;if(at===_&&(at=6),I<0?(nt=0,I=-I):15<I&&(nt=2,I-=16),D<1||E<D||$!==y||I<8||15<I||at<0||9<at||k<0||p<k)return q(g,v);I===8&&(I=9);var w=new Pt;return(g.state=w).strm=g,w.wrap=nt,w.gzhead=null,w.w_bits=I,w.w_size=1<<w.w_bits,w.w_mask=w.w_size-1,w.hash_bits=D+7,w.hash_size=1<<w.hash_bits,w.hash_mask=w.hash_size-1,w.hash_shift=~~((w.hash_bits+b-1)/b),w.window=new o.Buf8(2*w.w_size),w.head=new o.Buf16(w.hash_size),w.prev=new o.Buf16(w.w_size),w.lit_bufsize=1<<D+6,w.pending_buf_size=4*w.lit_bufsize,w.pending_buf=new o.Buf8(w.pending_buf_size),w.d_buf=1*w.lit_bufsize,w.l_buf=3*w.lit_bufsize,w.level=at,w.strategy=k,w.method=$,Ut(g)}s=[new yt(0,0,0,0,function(g,at){var $=65535;for($>g.pending_buf_size-5&&($=g.pending_buf_size-5);;){if(g.lookahead<=1){if(mt(g),g.lookahead===0&&at===f)return S;if(g.lookahead===0)break}g.strstart+=g.lookahead,g.lookahead=0;var I=g.block_start+$;if((g.strstart===0||g.strstart>=I)&&(g.lookahead=g.strstart-I,g.strstart=I,G(g,!1),g.strm.avail_out===0)||g.strstart-g.block_start>=g.w_size-F&&(G(g,!1),g.strm.avail_out===0))return S}return g.insert=0,at===m?(G(g,!0),g.strm.avail_out===0?tt:W):(g.strstart>g.block_start&&(G(g,!1),g.strm.avail_out),S)}),new yt(4,4,8,4,ut),new yt(4,5,16,8,ut),new yt(4,6,32,32,ut),new yt(4,4,16,16,pt),new yt(8,16,32,32,pt),new yt(8,16,128,128,pt),new yt(8,32,128,256,pt),new yt(32,128,258,1024,pt),new yt(32,258,258,4096,pt)],r.deflateInit=function(g,at){return jt(g,at,y,15,8,0)},r.deflateInit2=jt,r.deflateReset=Ut,r.deflateResetKeep=It,r.deflateSetHeader=function(g,at){return g&&g.state?g.state.wrap!==2?v:(g.state.gzhead=at,u):v},r.deflate=function(g,at){var $,I,D,k;if(!g||!g.state||5<at||at<0)return g?q(g,v):v;if(I=g.state,!g.output||!g.input&&g.avail_in!==0||I.status===666&&at!==m)return q(g,g.avail_out===0?-5:v);if(I.strm=g,$=I.last_flush,I.last_flush=at,I.status===A)if(I.wrap===2)g.adler=0,_t(I,31),_t(I,139),_t(I,8),I.gzhead?(_t(I,(I.gzhead.text?1:0)+(I.gzhead.hcrc?2:0)+(I.gzhead.extra?4:0)+(I.gzhead.name?8:0)+(I.gzhead.comment?16:0)),_t(I,255&I.gzhead.time),_t(I,I.gzhead.time>>8&255),_t(I,I.gzhead.time>>16&255),_t(I,I.gzhead.time>>24&255),_t(I,I.level===9?2:2<=I.strategy||I.level<2?4:0),_t(I,255&I.gzhead.os),I.gzhead.extra&&I.gzhead.extra.length&&(_t(I,255&I.gzhead.extra.length),_t(I,I.gzhead.extra.length>>8&255)),I.gzhead.hcrc&&(g.adler=c(g.adler,I.pending_buf,I.pending,0)),I.gzindex=0,I.status=69):(_t(I,0),_t(I,0),_t(I,0),_t(I,0),_t(I,0),_t(I,I.level===9?2:2<=I.strategy||I.level<2?4:0),_t(I,3),I.status=U);else{var nt=y+(I.w_bits-8<<4)<<8;nt|=(2<=I.strategy||I.level<2?0:I.level<6?1:I.level===6?2:3)<<6,I.strstart!==0&&(nt|=32),nt+=31-nt%31,I.status=U,X(I,nt),I.strstart!==0&&(X(I,g.adler>>>16),X(I,65535&g.adler)),g.adler=1}if(I.status===69)if(I.gzhead.extra){for(D=I.pending;I.gzindex<(65535&I.gzhead.extra.length)&&(I.pending!==I.pending_buf_size||(I.gzhead.hcrc&&I.pending>D&&(g.adler=c(g.adler,I.pending_buf,I.pending-D,D)),z(g),D=I.pending,I.pending!==I.pending_buf_size));)_t(I,255&I.gzhead.extra[I.gzindex]),I.gzindex++;I.gzhead.hcrc&&I.pending>D&&(g.adler=c(g.adler,I.pending_buf,I.pending-D,D)),I.gzindex===I.gzhead.extra.length&&(I.gzindex=0,I.status=73)}else I.status=73;if(I.status===73)if(I.gzhead.name){D=I.pending;do{if(I.pending===I.pending_buf_size&&(I.gzhead.hcrc&&I.pending>D&&(g.adler=c(g.adler,I.pending_buf,I.pending-D,D)),z(g),D=I.pending,I.pending===I.pending_buf_size)){k=1;break}k=I.gzindex<I.gzhead.name.length?255&I.gzhead.name.charCodeAt(I.gzindex++):0,_t(I,k)}while(k!==0);I.gzhead.hcrc&&I.pending>D&&(g.adler=c(g.adler,I.pending_buf,I.pending-D,D)),k===0&&(I.gzindex=0,I.status=91)}else I.status=91;if(I.status===91)if(I.gzhead.comment){D=I.pending;do{if(I.pending===I.pending_buf_size&&(I.gzhead.hcrc&&I.pending>D&&(g.adler=c(g.adler,I.pending_buf,I.pending-D,D)),z(g),D=I.pending,I.pending===I.pending_buf_size)){k=1;break}k=I.gzindex<I.gzhead.comment.length?255&I.gzhead.comment.charCodeAt(I.gzindex++):0,_t(I,k)}while(k!==0);I.gzhead.hcrc&&I.pending>D&&(g.adler=c(g.adler,I.pending_buf,I.pending-D,D)),k===0&&(I.status=103)}else I.status=103;if(I.status===103&&(I.gzhead.hcrc?(I.pending+2>I.pending_buf_size&&z(g),I.pending+2<=I.pending_buf_size&&(_t(I,255&g.adler),_t(I,g.adler>>8&255),g.adler=0,I.status=U)):I.status=U),I.pending!==0){if(z(g),g.avail_out===0)return I.last_flush=-1,u}else if(g.avail_in===0&&K(at)<=K($)&&at!==m)return q(g,-5);if(I.status===666&&g.avail_in!==0)return q(g,-5);if(g.avail_in!==0||I.lookahead!==0||at!==f&&I.status!==666){var w=I.strategy===2?function(x,O){for(var Z;;){if(x.lookahead===0&&(mt(x),x.lookahead===0)){if(O===f)return S;break}if(x.match_length=0,Z=a._tr_tally(x,0,x.window[x.strstart]),x.lookahead--,x.strstart++,Z&&(G(x,!1),x.strm.avail_out===0))return S}return x.insert=0,O===m?(G(x,!0),x.strm.avail_out===0?tt:W):x.last_lit&&(G(x,!1),x.strm.avail_out===0)?S:B}(I,at):I.strategy===3?function(x,O){for(var Z,V,J,ft,ct=x.window;;){if(x.lookahead<=T){if(mt(x),x.lookahead<=T&&O===f)return S;if(x.lookahead===0)break}if(x.match_length=0,x.lookahead>=b&&0<x.strstart&&(V=ct[J=x.strstart-1])===ct[++J]&&V===ct[++J]&&V===ct[++J]){ft=x.strstart+T;do;while(V===ct[++J]&&V===ct[++J]&&V===ct[++J]&&V===ct[++J]&&V===ct[++J]&&V===ct[++J]&&V===ct[++J]&&V===ct[++J]&&J<ft);x.match_length=T-(ft-J),x.match_length>x.lookahead&&(x.match_length=x.lookahead)}if(x.match_length>=b?(Z=a._tr_tally(x,1,x.match_length-b),x.lookahead-=x.match_length,x.strstart+=x.match_length,x.match_length=0):(Z=a._tr_tally(x,0,x.window[x.strstart]),x.lookahead--,x.strstart++),Z&&(G(x,!1),x.strm.avail_out===0))return S}return x.insert=0,O===m?(G(x,!0),x.strm.avail_out===0?tt:W):x.last_lit&&(G(x,!1),x.strm.avail_out===0)?S:B}(I,at):s[I.level].func(I,at);if(w!==tt&&w!==W||(I.status=666),w===S||w===tt)return g.avail_out===0&&(I.last_flush=-1),u;if(w===B&&(at===1?a._tr_align(I):at!==5&&(a._tr_stored_block(I,0,0,!1),at===3&&(ot(I.head),I.lookahead===0&&(I.strstart=0,I.block_start=0,I.insert=0))),z(g),g.avail_out===0))return I.last_flush=-1,u}return at!==m?u:I.wrap<=0?1:(I.wrap===2?(_t(I,255&g.adler),_t(I,g.adler>>8&255),_t(I,g.adler>>16&255),_t(I,g.adler>>24&255),_t(I,255&g.total_in),_t(I,g.total_in>>8&255),_t(I,g.total_in>>16&255),_t(I,g.total_in>>24&255)):(X(I,g.adler>>>16),X(I,65535&g.adler)),z(g),0<I.wrap&&(I.wrap=-I.wrap),I.pending!==0?u:1)},r.deflateEnd=function(g){var at;return g&&g.state?(at=g.state.status)!==A&&at!==69&&at!==73&&at!==91&&at!==103&&at!==U&&at!==666?q(g,v):(g.state=null,at===U?q(g,-3):u):v},r.deflateSetDictionary=function(g,at){var $,I,D,k,nt,w,x,O,Z=at.length;if(!g||!g.state||(k=($=g.state).wrap)===2||k===1&&$.status!==A||$.lookahead)return v;for(k===1&&(g.adler=l(g.adler,at,Z,0)),$.wrap=0,Z>=$.w_size&&(k===0&&(ot($.head),$.strstart=0,$.block_start=0,$.insert=0),O=new o.Buf8($.w_size),o.arraySet(O,at,Z-$.w_size,$.w_size,0),at=O,Z=$.w_size),nt=g.avail_in,w=g.next_in,x=g.input,g.avail_in=Z,g.next_in=0,g.input=at,mt($);$.lookahead>=b;){for(I=$.strstart,D=$.lookahead-(b-1);$.ins_h=($.ins_h<<$.hash_shift^$.window[I+b-1])&$.hash_mask,$.prev[I&$.w_mask]=$.head[$.ins_h],$.head[$.ins_h]=I,I++,--D;);$.strstart=I,$.lookahead=b-1,mt($)}return $.strstart+=$.lookahead,$.block_start=$.strstart,$.insert=$.lookahead,$.lookahead=0,$.match_length=$.prev_length=b-1,$.match_available=0,g.next_in=w,g.input=x,g.avail_in=nt,$.wrap=k,u},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,n,r){n.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,n,r){n.exports=function(s,o){var a,l,c,d,f,m,u,v,_,p,h,y,E,M,L,C,P,N,b,T,F,A,U,S,B;a=s.state,l=s.next_in,S=s.input,c=l+(s.avail_in-5),d=s.next_out,B=s.output,f=d-(o-s.avail_out),m=d+(s.avail_out-257),u=a.dmax,v=a.wsize,_=a.whave,p=a.wnext,h=a.window,y=a.hold,E=a.bits,M=a.lencode,L=a.distcode,C=(1<<a.lenbits)-1,P=(1<<a.distbits)-1;t:do{E<15&&(y+=S[l++]<<E,E+=8,y+=S[l++]<<E,E+=8),N=M[y&C];e:for(;;){if(y>>>=b=N>>>24,E-=b,(b=N>>>16&255)===0)B[d++]=65535&N;else{if(!(16&b)){if(!(64&b)){N=M[(65535&N)+(y&(1<<b)-1)];continue e}if(32&b){a.mode=12;break t}s.msg="invalid literal/length code",a.mode=30;break t}T=65535&N,(b&=15)&&(E<b&&(y+=S[l++]<<E,E+=8),T+=y&(1<<b)-1,y>>>=b,E-=b),E<15&&(y+=S[l++]<<E,E+=8,y+=S[l++]<<E,E+=8),N=L[y&P];n:for(;;){if(y>>>=b=N>>>24,E-=b,!(16&(b=N>>>16&255))){if(!(64&b)){N=L[(65535&N)+(y&(1<<b)-1)];continue n}s.msg="invalid distance code",a.mode=30;break t}if(F=65535&N,E<(b&=15)&&(y+=S[l++]<<E,(E+=8)<b&&(y+=S[l++]<<E,E+=8)),u<(F+=y&(1<<b)-1)){s.msg="invalid distance too far back",a.mode=30;break t}if(y>>>=b,E-=b,(b=d-f)<F){if(_<(b=F-b)&&a.sane){s.msg="invalid distance too far back",a.mode=30;break t}if(U=h,(A=0)===p){if(A+=v-b,b<T){for(T-=b;B[d++]=h[A++],--b;);A=d-F,U=B}}else if(p<b){if(A+=v+p-b,(b-=p)<T){for(T-=b;B[d++]=h[A++],--b;);if(A=0,p<T){for(T-=b=p;B[d++]=h[A++],--b;);A=d-F,U=B}}}else if(A+=p-b,b<T){for(T-=b;B[d++]=h[A++],--b;);A=d-F,U=B}for(;2<T;)B[d++]=U[A++],B[d++]=U[A++],B[d++]=U[A++],T-=3;T&&(B[d++]=U[A++],1<T&&(B[d++]=U[A++]))}else{for(A=d-F;B[d++]=B[A++],B[d++]=B[A++],B[d++]=B[A++],2<(T-=3););T&&(B[d++]=B[A++],1<T&&(B[d++]=B[A++]))}break}}break}}while(l<c&&d<m);l-=T=E>>3,y&=(1<<(E-=T<<3))-1,s.next_in=l,s.next_out=d,s.avail_in=l<c?c-l+5:5-(l-c),s.avail_out=d<m?m-d+257:257-(d-m),a.hold=y,a.bits=E}},{}],49:[function(e,n,r){var s=e("../utils/common"),o=e("./adler32"),a=e("./crc32"),l=e("./inffast"),c=e("./inftrees"),d=1,f=2,m=0,u=-2,v=1,_=852,p=592;function h(A){return(A>>>24&255)+(A>>>8&65280)+((65280&A)<<8)+((255&A)<<24)}function y(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function E(A){var U;return A&&A.state?(U=A.state,A.total_in=A.total_out=U.total=0,A.msg="",U.wrap&&(A.adler=1&U.wrap),U.mode=v,U.last=0,U.havedict=0,U.dmax=32768,U.head=null,U.hold=0,U.bits=0,U.lencode=U.lendyn=new s.Buf32(_),U.distcode=U.distdyn=new s.Buf32(p),U.sane=1,U.back=-1,m):u}function M(A){var U;return A&&A.state?((U=A.state).wsize=0,U.whave=0,U.wnext=0,E(A)):u}function L(A,U){var S,B;return A&&A.state?(B=A.state,U<0?(S=0,U=-U):(S=1+(U>>4),U<48&&(U&=15)),U&&(U<8||15<U)?u:(B.window!==null&&B.wbits!==U&&(B.window=null),B.wrap=S,B.wbits=U,M(A))):u}function C(A,U){var S,B;return A?(B=new y,(A.state=B).window=null,(S=L(A,U))!==m&&(A.state=null),S):u}var P,N,b=!0;function T(A){if(b){var U;for(P=new s.Buf32(512),N=new s.Buf32(32),U=0;U<144;)A.lens[U++]=8;for(;U<256;)A.lens[U++]=9;for(;U<280;)A.lens[U++]=7;for(;U<288;)A.lens[U++]=8;for(c(d,A.lens,0,288,P,0,A.work,{bits:9}),U=0;U<32;)A.lens[U++]=5;c(f,A.lens,0,32,N,0,A.work,{bits:5}),b=!1}A.lencode=P,A.lenbits=9,A.distcode=N,A.distbits=5}function F(A,U,S,B){var tt,W=A.state;return W.window===null&&(W.wsize=1<<W.wbits,W.wnext=0,W.whave=0,W.window=new s.Buf8(W.wsize)),B>=W.wsize?(s.arraySet(W.window,U,S-W.wsize,W.wsize,0),W.wnext=0,W.whave=W.wsize):(B<(tt=W.wsize-W.wnext)&&(tt=B),s.arraySet(W.window,U,S-B,tt,W.wnext),(B-=tt)?(s.arraySet(W.window,U,S-B,B,0),W.wnext=B,W.whave=W.wsize):(W.wnext+=tt,W.wnext===W.wsize&&(W.wnext=0),W.whave<W.wsize&&(W.whave+=tt))),0}r.inflateReset=M,r.inflateReset2=L,r.inflateResetKeep=E,r.inflateInit=function(A){return C(A,15)},r.inflateInit2=C,r.inflate=function(A,U){var S,B,tt,W,q,K,ot,z,G,_t,X,et,mt,ut,pt,yt,Pt,It,Ut,jt,g,at,$,I,D=0,k=new s.Buf8(4),nt=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!A||!A.state||!A.output||!A.input&&A.avail_in!==0)return u;(S=A.state).mode===12&&(S.mode=13),q=A.next_out,tt=A.output,ot=A.avail_out,W=A.next_in,B=A.input,K=A.avail_in,z=S.hold,G=S.bits,_t=K,X=ot,at=m;t:for(;;)switch(S.mode){case v:if(S.wrap===0){S.mode=13;break}for(;G<16;){if(K===0)break t;K--,z+=B[W++]<<G,G+=8}if(2&S.wrap&&z===35615){k[S.check=0]=255&z,k[1]=z>>>8&255,S.check=a(S.check,k,2,0),G=z=0,S.mode=2;break}if(S.flags=0,S.head&&(S.head.done=!1),!(1&S.wrap)||(((255&z)<<8)+(z>>8))%31){A.msg="incorrect header check",S.mode=30;break}if((15&z)!=8){A.msg="unknown compression method",S.mode=30;break}if(G-=4,g=8+(15&(z>>>=4)),S.wbits===0)S.wbits=g;else if(g>S.wbits){A.msg="invalid window size",S.mode=30;break}S.dmax=1<<g,A.adler=S.check=1,S.mode=512&z?10:12,G=z=0;break;case 2:for(;G<16;){if(K===0)break t;K--,z+=B[W++]<<G,G+=8}if(S.flags=z,(255&S.flags)!=8){A.msg="unknown compression method",S.mode=30;break}if(57344&S.flags){A.msg="unknown header flags set",S.mode=30;break}S.head&&(S.head.text=z>>8&1),512&S.flags&&(k[0]=255&z,k[1]=z>>>8&255,S.check=a(S.check,k,2,0)),G=z=0,S.mode=3;case 3:for(;G<32;){if(K===0)break t;K--,z+=B[W++]<<G,G+=8}S.head&&(S.head.time=z),512&S.flags&&(k[0]=255&z,k[1]=z>>>8&255,k[2]=z>>>16&255,k[3]=z>>>24&255,S.check=a(S.check,k,4,0)),G=z=0,S.mode=4;case 4:for(;G<16;){if(K===0)break t;K--,z+=B[W++]<<G,G+=8}S.head&&(S.head.xflags=255&z,S.head.os=z>>8),512&S.flags&&(k[0]=255&z,k[1]=z>>>8&255,S.check=a(S.check,k,2,0)),G=z=0,S.mode=5;case 5:if(1024&S.flags){for(;G<16;){if(K===0)break t;K--,z+=B[W++]<<G,G+=8}S.length=z,S.head&&(S.head.extra_len=z),512&S.flags&&(k[0]=255&z,k[1]=z>>>8&255,S.check=a(S.check,k,2,0)),G=z=0}else S.head&&(S.head.extra=null);S.mode=6;case 6:if(1024&S.flags&&(K<(et=S.length)&&(et=K),et&&(S.head&&(g=S.head.extra_len-S.length,S.head.extra||(S.head.extra=new Array(S.head.extra_len)),s.arraySet(S.head.extra,B,W,et,g)),512&S.flags&&(S.check=a(S.check,B,et,W)),K-=et,W+=et,S.length-=et),S.length))break t;S.length=0,S.mode=7;case 7:if(2048&S.flags){if(K===0)break t;for(et=0;g=B[W+et++],S.head&&g&&S.length<65536&&(S.head.name+=String.fromCharCode(g)),g&&et<K;);if(512&S.flags&&(S.check=a(S.check,B,et,W)),K-=et,W+=et,g)break t}else S.head&&(S.head.name=null);S.length=0,S.mode=8;case 8:if(4096&S.flags){if(K===0)break t;for(et=0;g=B[W+et++],S.head&&g&&S.length<65536&&(S.head.comment+=String.fromCharCode(g)),g&&et<K;);if(512&S.flags&&(S.check=a(S.check,B,et,W)),K-=et,W+=et,g)break t}else S.head&&(S.head.comment=null);S.mode=9;case 9:if(512&S.flags){for(;G<16;){if(K===0)break t;K--,z+=B[W++]<<G,G+=8}if(z!==(65535&S.check)){A.msg="header crc mismatch",S.mode=30;break}G=z=0}S.head&&(S.head.hcrc=S.flags>>9&1,S.head.done=!0),A.adler=S.check=0,S.mode=12;break;case 10:for(;G<32;){if(K===0)break t;K--,z+=B[W++]<<G,G+=8}A.adler=S.check=h(z),G=z=0,S.mode=11;case 11:if(S.havedict===0)return A.next_out=q,A.avail_out=ot,A.next_in=W,A.avail_in=K,S.hold=z,S.bits=G,2;A.adler=S.check=1,S.mode=12;case 12:if(U===5||U===6)break t;case 13:if(S.last){z>>>=7&G,G-=7&G,S.mode=27;break}for(;G<3;){if(K===0)break t;K--,z+=B[W++]<<G,G+=8}switch(S.last=1&z,G-=1,3&(z>>>=1)){case 0:S.mode=14;break;case 1:if(T(S),S.mode=20,U!==6)break;z>>>=2,G-=2;break t;case 2:S.mode=17;break;case 3:A.msg="invalid block type",S.mode=30}z>>>=2,G-=2;break;case 14:for(z>>>=7&G,G-=7&G;G<32;){if(K===0)break t;K--,z+=B[W++]<<G,G+=8}if((65535&z)!=(z>>>16^65535)){A.msg="invalid stored block lengths",S.mode=30;break}if(S.length=65535&z,G=z=0,S.mode=15,U===6)break t;case 15:S.mode=16;case 16:if(et=S.length){if(K<et&&(et=K),ot<et&&(et=ot),et===0)break t;s.arraySet(tt,B,W,et,q),K-=et,W+=et,ot-=et,q+=et,S.length-=et;break}S.mode=12;break;case 17:for(;G<14;){if(K===0)break t;K--,z+=B[W++]<<G,G+=8}if(S.nlen=257+(31&z),z>>>=5,G-=5,S.ndist=1+(31&z),z>>>=5,G-=5,S.ncode=4+(15&z),z>>>=4,G-=4,286<S.nlen||30<S.ndist){A.msg="too many length or distance symbols",S.mode=30;break}S.have=0,S.mode=18;case 18:for(;S.have<S.ncode;){for(;G<3;){if(K===0)break t;K--,z+=B[W++]<<G,G+=8}S.lens[nt[S.have++]]=7&z,z>>>=3,G-=3}for(;S.have<19;)S.lens[nt[S.have++]]=0;if(S.lencode=S.lendyn,S.lenbits=7,$={bits:S.lenbits},at=c(0,S.lens,0,19,S.lencode,0,S.work,$),S.lenbits=$.bits,at){A.msg="invalid code lengths set",S.mode=30;break}S.have=0,S.mode=19;case 19:for(;S.have<S.nlen+S.ndist;){for(;yt=(D=S.lencode[z&(1<<S.lenbits)-1])>>>16&255,Pt=65535&D,!((pt=D>>>24)<=G);){if(K===0)break t;K--,z+=B[W++]<<G,G+=8}if(Pt<16)z>>>=pt,G-=pt,S.lens[S.have++]=Pt;else{if(Pt===16){for(I=pt+2;G<I;){if(K===0)break t;K--,z+=B[W++]<<G,G+=8}if(z>>>=pt,G-=pt,S.have===0){A.msg="invalid bit length repeat",S.mode=30;break}g=S.lens[S.have-1],et=3+(3&z),z>>>=2,G-=2}else if(Pt===17){for(I=pt+3;G<I;){if(K===0)break t;K--,z+=B[W++]<<G,G+=8}G-=pt,g=0,et=3+(7&(z>>>=pt)),z>>>=3,G-=3}else{for(I=pt+7;G<I;){if(K===0)break t;K--,z+=B[W++]<<G,G+=8}G-=pt,g=0,et=11+(127&(z>>>=pt)),z>>>=7,G-=7}if(S.have+et>S.nlen+S.ndist){A.msg="invalid bit length repeat",S.mode=30;break}for(;et--;)S.lens[S.have++]=g}}if(S.mode===30)break;if(S.lens[256]===0){A.msg="invalid code -- missing end-of-block",S.mode=30;break}if(S.lenbits=9,$={bits:S.lenbits},at=c(d,S.lens,0,S.nlen,S.lencode,0,S.work,$),S.lenbits=$.bits,at){A.msg="invalid literal/lengths set",S.mode=30;break}if(S.distbits=6,S.distcode=S.distdyn,$={bits:S.distbits},at=c(f,S.lens,S.nlen,S.ndist,S.distcode,0,S.work,$),S.distbits=$.bits,at){A.msg="invalid distances set",S.mode=30;break}if(S.mode=20,U===6)break t;case 20:S.mode=21;case 21:if(6<=K&&258<=ot){A.next_out=q,A.avail_out=ot,A.next_in=W,A.avail_in=K,S.hold=z,S.bits=G,l(A,X),q=A.next_out,tt=A.output,ot=A.avail_out,W=A.next_in,B=A.input,K=A.avail_in,z=S.hold,G=S.bits,S.mode===12&&(S.back=-1);break}for(S.back=0;yt=(D=S.lencode[z&(1<<S.lenbits)-1])>>>16&255,Pt=65535&D,!((pt=D>>>24)<=G);){if(K===0)break t;K--,z+=B[W++]<<G,G+=8}if(yt&&!(240&yt)){for(It=pt,Ut=yt,jt=Pt;yt=(D=S.lencode[jt+((z&(1<<It+Ut)-1)>>It)])>>>16&255,Pt=65535&D,!(It+(pt=D>>>24)<=G);){if(K===0)break t;K--,z+=B[W++]<<G,G+=8}z>>>=It,G-=It,S.back+=It}if(z>>>=pt,G-=pt,S.back+=pt,S.length=Pt,yt===0){S.mode=26;break}if(32&yt){S.back=-1,S.mode=12;break}if(64&yt){A.msg="invalid literal/length code",S.mode=30;break}S.extra=15&yt,S.mode=22;case 22:if(S.extra){for(I=S.extra;G<I;){if(K===0)break t;K--,z+=B[W++]<<G,G+=8}S.length+=z&(1<<S.extra)-1,z>>>=S.extra,G-=S.extra,S.back+=S.extra}S.was=S.length,S.mode=23;case 23:for(;yt=(D=S.distcode[z&(1<<S.distbits)-1])>>>16&255,Pt=65535&D,!((pt=D>>>24)<=G);){if(K===0)break t;K--,z+=B[W++]<<G,G+=8}if(!(240&yt)){for(It=pt,Ut=yt,jt=Pt;yt=(D=S.distcode[jt+((z&(1<<It+Ut)-1)>>It)])>>>16&255,Pt=65535&D,!(It+(pt=D>>>24)<=G);){if(K===0)break t;K--,z+=B[W++]<<G,G+=8}z>>>=It,G-=It,S.back+=It}if(z>>>=pt,G-=pt,S.back+=pt,64&yt){A.msg="invalid distance code",S.mode=30;break}S.offset=Pt,S.extra=15&yt,S.mode=24;case 24:if(S.extra){for(I=S.extra;G<I;){if(K===0)break t;K--,z+=B[W++]<<G,G+=8}S.offset+=z&(1<<S.extra)-1,z>>>=S.extra,G-=S.extra,S.back+=S.extra}if(S.offset>S.dmax){A.msg="invalid distance too far back",S.mode=30;break}S.mode=25;case 25:if(ot===0)break t;if(et=X-ot,S.offset>et){if((et=S.offset-et)>S.whave&&S.sane){A.msg="invalid distance too far back",S.mode=30;break}mt=et>S.wnext?(et-=S.wnext,S.wsize-et):S.wnext-et,et>S.length&&(et=S.length),ut=S.window}else ut=tt,mt=q-S.offset,et=S.length;for(ot<et&&(et=ot),ot-=et,S.length-=et;tt[q++]=ut[mt++],--et;);S.length===0&&(S.mode=21);break;case 26:if(ot===0)break t;tt[q++]=S.length,ot--,S.mode=21;break;case 27:if(S.wrap){for(;G<32;){if(K===0)break t;K--,z|=B[W++]<<G,G+=8}if(X-=ot,A.total_out+=X,S.total+=X,X&&(A.adler=S.check=S.flags?a(S.check,tt,X,q-X):o(S.check,tt,X,q-X)),X=ot,(S.flags?z:h(z))!==S.check){A.msg="incorrect data check",S.mode=30;break}G=z=0}S.mode=28;case 28:if(S.wrap&&S.flags){for(;G<32;){if(K===0)break t;K--,z+=B[W++]<<G,G+=8}if(z!==(4294967295&S.total)){A.msg="incorrect length check",S.mode=30;break}G=z=0}S.mode=29;case 29:at=1;break t;case 30:at=-3;break t;case 31:return-4;case 32:default:return u}return A.next_out=q,A.avail_out=ot,A.next_in=W,A.avail_in=K,S.hold=z,S.bits=G,(S.wsize||X!==A.avail_out&&S.mode<30&&(S.mode<27||U!==4))&&F(A,A.output,A.next_out,X-A.avail_out)?(S.mode=31,-4):(_t-=A.avail_in,X-=A.avail_out,A.total_in+=_t,A.total_out+=X,S.total+=X,S.wrap&&X&&(A.adler=S.check=S.flags?a(S.check,tt,X,A.next_out-X):o(S.check,tt,X,A.next_out-X)),A.data_type=S.bits+(S.last?64:0)+(S.mode===12?128:0)+(S.mode===20||S.mode===15?256:0),(_t==0&&X===0||U===4)&&at===m&&(at=-5),at)},r.inflateEnd=function(A){if(!A||!A.state)return u;var U=A.state;return U.window&&(U.window=null),A.state=null,m},r.inflateGetHeader=function(A,U){var S;return A&&A.state&&2&(S=A.state).wrap?((S.head=U).done=!1,m):u},r.inflateSetDictionary=function(A,U){var S,B=U.length;return A&&A.state?(S=A.state).wrap!==0&&S.mode!==11?u:S.mode===11&&o(1,U,B,0)!==S.check?-3:F(A,U,B,B)?(S.mode=31,-4):(S.havedict=1,m):u},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,n,r){var s=e("../utils/common"),o=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],c=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];n.exports=function(d,f,m,u,v,_,p,h){var y,E,M,L,C,P,N,b,T,F=h.bits,A=0,U=0,S=0,B=0,tt=0,W=0,q=0,K=0,ot=0,z=0,G=null,_t=0,X=new s.Buf16(16),et=new s.Buf16(16),mt=null,ut=0;for(A=0;A<=15;A++)X[A]=0;for(U=0;U<u;U++)X[f[m+U]]++;for(tt=F,B=15;1<=B&&X[B]===0;B--);if(B<tt&&(tt=B),B===0)return v[_++]=20971520,v[_++]=20971520,h.bits=1,0;for(S=1;S<B&&X[S]===0;S++);for(tt<S&&(tt=S),A=K=1;A<=15;A++)if(K<<=1,(K-=X[A])<0)return-1;if(0<K&&(d===0||B!==1))return-1;for(et[1]=0,A=1;A<15;A++)et[A+1]=et[A]+X[A];for(U=0;U<u;U++)f[m+U]!==0&&(p[et[f[m+U]]++]=U);if(P=d===0?(G=mt=p,19):d===1?(G=o,_t-=257,mt=a,ut-=257,256):(G=l,mt=c,-1),A=S,C=_,q=U=z=0,M=-1,L=(ot=1<<(W=tt))-1,d===1&&852<ot||d===2&&592<ot)return 1;for(;;){for(N=A-q,T=p[U]<P?(b=0,p[U]):p[U]>P?(b=mt[ut+p[U]],G[_t+p[U]]):(b=96,0),y=1<<A-q,S=E=1<<W;v[C+(z>>q)+(E-=y)]=N<<24|b<<16|T|0,E!==0;);for(y=1<<A-1;z&y;)y>>=1;if(y!==0?(z&=y-1,z+=y):z=0,U++,--X[A]==0){if(A===B)break;A=f[m+p[U]]}if(tt<A&&(z&L)!==M){for(q===0&&(q=tt),C+=S,K=1<<(W=A-q);W+q<B&&!((K-=X[W+q])<=0);)W++,K<<=1;if(ot+=1<<W,d===1&&852<ot||d===2&&592<ot)return 1;v[M=z&L]=tt<<24|W<<16|C-_|0}}return z!==0&&(v[C+z]=A-q<<24|64<<16|0),h.bits=tt,0}},{"../utils/common":41}],51:[function(e,n,r){n.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,n,r){var s=e("../utils/common"),o=0,a=1;function l(D){for(var k=D.length;0<=--k;)D[k]=0}var c=0,d=29,f=256,m=f+1+d,u=30,v=19,_=2*m+1,p=15,h=16,y=7,E=256,M=16,L=17,C=18,P=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],N=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],b=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],T=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],F=new Array(2*(m+2));l(F);var A=new Array(2*u);l(A);var U=new Array(512);l(U);var S=new Array(256);l(S);var B=new Array(d);l(B);var tt,W,q,K=new Array(u);function ot(D,k,nt,w,x){this.static_tree=D,this.extra_bits=k,this.extra_base=nt,this.elems=w,this.max_length=x,this.has_stree=D&&D.length}function z(D,k){this.dyn_tree=D,this.max_code=0,this.stat_desc=k}function G(D){return D<256?U[D]:U[256+(D>>>7)]}function _t(D,k){D.pending_buf[D.pending++]=255&k,D.pending_buf[D.pending++]=k>>>8&255}function X(D,k,nt){D.bi_valid>h-nt?(D.bi_buf|=k<<D.bi_valid&65535,_t(D,D.bi_buf),D.bi_buf=k>>h-D.bi_valid,D.bi_valid+=nt-h):(D.bi_buf|=k<<D.bi_valid&65535,D.bi_valid+=nt)}function et(D,k,nt){X(D,nt[2*k],nt[2*k+1])}function mt(D,k){for(var nt=0;nt|=1&D,D>>>=1,nt<<=1,0<--k;);return nt>>>1}function ut(D,k,nt){var w,x,O=new Array(p+1),Z=0;for(w=1;w<=p;w++)O[w]=Z=Z+nt[w-1]<<1;for(x=0;x<=k;x++){var V=D[2*x+1];V!==0&&(D[2*x]=mt(O[V]++,V))}}function pt(D){var k;for(k=0;k<m;k++)D.dyn_ltree[2*k]=0;for(k=0;k<u;k++)D.dyn_dtree[2*k]=0;for(k=0;k<v;k++)D.bl_tree[2*k]=0;D.dyn_ltree[2*E]=1,D.opt_len=D.static_len=0,D.last_lit=D.matches=0}function yt(D){8<D.bi_valid?_t(D,D.bi_buf):0<D.bi_valid&&(D.pending_buf[D.pending++]=D.bi_buf),D.bi_buf=0,D.bi_valid=0}function Pt(D,k,nt,w){var x=2*k,O=2*nt;return D[x]<D[O]||D[x]===D[O]&&w[k]<=w[nt]}function It(D,k,nt){for(var w=D.heap[nt],x=nt<<1;x<=D.heap_len&&(x<D.heap_len&&Pt(k,D.heap[x+1],D.heap[x],D.depth)&&x++,!Pt(k,w,D.heap[x],D.depth));)D.heap[nt]=D.heap[x],nt=x,x<<=1;D.heap[nt]=w}function Ut(D,k,nt){var w,x,O,Z,V=0;if(D.last_lit!==0)for(;w=D.pending_buf[D.d_buf+2*V]<<8|D.pending_buf[D.d_buf+2*V+1],x=D.pending_buf[D.l_buf+V],V++,w===0?et(D,x,k):(et(D,(O=S[x])+f+1,k),(Z=P[O])!==0&&X(D,x-=B[O],Z),et(D,O=G(--w),nt),(Z=N[O])!==0&&X(D,w-=K[O],Z)),V<D.last_lit;);et(D,E,k)}function jt(D,k){var nt,w,x,O=k.dyn_tree,Z=k.stat_desc.static_tree,V=k.stat_desc.has_stree,J=k.stat_desc.elems,ft=-1;for(D.heap_len=0,D.heap_max=_,nt=0;nt<J;nt++)O[2*nt]!==0?(D.heap[++D.heap_len]=ft=nt,D.depth[nt]=0):O[2*nt+1]=0;for(;D.heap_len<2;)O[2*(x=D.heap[++D.heap_len]=ft<2?++ft:0)]=1,D.depth[x]=0,D.opt_len--,V&&(D.static_len-=Z[2*x+1]);for(k.max_code=ft,nt=D.heap_len>>1;1<=nt;nt--)It(D,O,nt);for(x=J;nt=D.heap[1],D.heap[1]=D.heap[D.heap_len--],It(D,O,1),w=D.heap[1],D.heap[--D.heap_max]=nt,D.heap[--D.heap_max]=w,O[2*x]=O[2*nt]+O[2*w],D.depth[x]=(D.depth[nt]>=D.depth[w]?D.depth[nt]:D.depth[w])+1,O[2*nt+1]=O[2*w+1]=x,D.heap[1]=x++,It(D,O,1),2<=D.heap_len;);D.heap[--D.heap_max]=D.heap[1],function(ct,gt){var Wt,ht,Tt,Mt,Lt,wt,Nt=gt.dyn_tree,Ot=gt.max_code,$t=gt.stat_desc.static_tree,H=gt.stat_desc.has_stree,xt=gt.stat_desc.extra_bits,st=gt.stat_desc.extra_base,lt=gt.stat_desc.max_length,St=0;for(Mt=0;Mt<=p;Mt++)ct.bl_count[Mt]=0;for(Nt[2*ct.heap[ct.heap_max]+1]=0,Wt=ct.heap_max+1;Wt<_;Wt++)lt<(Mt=Nt[2*Nt[2*(ht=ct.heap[Wt])+1]+1]+1)&&(Mt=lt,St++),Nt[2*ht+1]=Mt,Ot<ht||(ct.bl_count[Mt]++,Lt=0,st<=ht&&(Lt=xt[ht-st]),wt=Nt[2*ht],ct.opt_len+=wt*(Mt+Lt),H&&(ct.static_len+=wt*($t[2*ht+1]+Lt)));if(St!==0){do{for(Mt=lt-1;ct.bl_count[Mt]===0;)Mt--;ct.bl_count[Mt]--,ct.bl_count[Mt+1]+=2,ct.bl_count[lt]--,St-=2}while(0<St);for(Mt=lt;Mt!==0;Mt--)for(ht=ct.bl_count[Mt];ht!==0;)Ot<(Tt=ct.heap[--Wt])||(Nt[2*Tt+1]!==Mt&&(ct.opt_len+=(Mt-Nt[2*Tt+1])*Nt[2*Tt],Nt[2*Tt+1]=Mt),ht--)}}(D,k),ut(O,ft,D.bl_count)}function g(D,k,nt){var w,x,O=-1,Z=k[1],V=0,J=7,ft=4;for(Z===0&&(J=138,ft=3),k[2*(nt+1)+1]=65535,w=0;w<=nt;w++)x=Z,Z=k[2*(w+1)+1],++V<J&&x===Z||(V<ft?D.bl_tree[2*x]+=V:x!==0?(x!==O&&D.bl_tree[2*x]++,D.bl_tree[2*M]++):V<=10?D.bl_tree[2*L]++:D.bl_tree[2*C]++,O=x,ft=(V=0)===Z?(J=138,3):x===Z?(J=6,3):(J=7,4))}function at(D,k,nt){var w,x,O=-1,Z=k[1],V=0,J=7,ft=4;for(Z===0&&(J=138,ft=3),w=0;w<=nt;w++)if(x=Z,Z=k[2*(w+1)+1],!(++V<J&&x===Z)){if(V<ft)for(;et(D,x,D.bl_tree),--V!=0;);else x!==0?(x!==O&&(et(D,x,D.bl_tree),V--),et(D,M,D.bl_tree),X(D,V-3,2)):V<=10?(et(D,L,D.bl_tree),X(D,V-3,3)):(et(D,C,D.bl_tree),X(D,V-11,7));O=x,ft=(V=0)===Z?(J=138,3):x===Z?(J=6,3):(J=7,4)}}l(K);var $=!1;function I(D,k,nt,w){X(D,(c<<1)+(w?1:0),3),function(x,O,Z,V){yt(x),_t(x,Z),_t(x,~Z),s.arraySet(x.pending_buf,x.window,O,Z,x.pending),x.pending+=Z}(D,k,nt)}r._tr_init=function(D){$||(function(){var k,nt,w,x,O,Z=new Array(p+1);for(x=w=0;x<d-1;x++)for(B[x]=w,k=0;k<1<<P[x];k++)S[w++]=x;for(S[w-1]=x,x=O=0;x<16;x++)for(K[x]=O,k=0;k<1<<N[x];k++)U[O++]=x;for(O>>=7;x<u;x++)for(K[x]=O<<7,k=0;k<1<<N[x]-7;k++)U[256+O++]=x;for(nt=0;nt<=p;nt++)Z[nt]=0;for(k=0;k<=143;)F[2*k+1]=8,k++,Z[8]++;for(;k<=255;)F[2*k+1]=9,k++,Z[9]++;for(;k<=279;)F[2*k+1]=7,k++,Z[7]++;for(;k<=287;)F[2*k+1]=8,k++,Z[8]++;for(ut(F,m+1,Z),k=0;k<u;k++)A[2*k+1]=5,A[2*k]=mt(k,5);tt=new ot(F,P,f+1,m,p),W=new ot(A,N,0,u,p),q=new ot(new Array(0),b,0,v,y)}(),$=!0),D.l_desc=new z(D.dyn_ltree,tt),D.d_desc=new z(D.dyn_dtree,W),D.bl_desc=new z(D.bl_tree,q),D.bi_buf=0,D.bi_valid=0,pt(D)},r._tr_stored_block=I,r._tr_flush_block=function(D,k,nt,w){var x,O,Z=0;0<D.level?(D.strm.data_type===2&&(D.strm.data_type=function(V){var J,ft=4093624447;for(J=0;J<=31;J++,ft>>>=1)if(1&ft&&V.dyn_ltree[2*J]!==0)return o;if(V.dyn_ltree[18]!==0||V.dyn_ltree[20]!==0||V.dyn_ltree[26]!==0)return a;for(J=32;J<f;J++)if(V.dyn_ltree[2*J]!==0)return a;return o}(D)),jt(D,D.l_desc),jt(D,D.d_desc),Z=function(V){var J;for(g(V,V.dyn_ltree,V.l_desc.max_code),g(V,V.dyn_dtree,V.d_desc.max_code),jt(V,V.bl_desc),J=v-1;3<=J&&V.bl_tree[2*T[J]+1]===0;J--);return V.opt_len+=3*(J+1)+5+5+4,J}(D),x=D.opt_len+3+7>>>3,(O=D.static_len+3+7>>>3)<=x&&(x=O)):x=O=nt+5,nt+4<=x&&k!==-1?I(D,k,nt,w):D.strategy===4||O===x?(X(D,2+(w?1:0),3),Ut(D,F,A)):(X(D,4+(w?1:0),3),function(V,J,ft,ct){var gt;for(X(V,J-257,5),X(V,ft-1,5),X(V,ct-4,4),gt=0;gt<ct;gt++)X(V,V.bl_tree[2*T[gt]+1],3);at(V,V.dyn_ltree,J-1),at(V,V.dyn_dtree,ft-1)}(D,D.l_desc.max_code+1,D.d_desc.max_code+1,Z+1),Ut(D,D.dyn_ltree,D.dyn_dtree)),pt(D),w&&yt(D)},r._tr_tally=function(D,k,nt){return D.pending_buf[D.d_buf+2*D.last_lit]=k>>>8&255,D.pending_buf[D.d_buf+2*D.last_lit+1]=255&k,D.pending_buf[D.l_buf+D.last_lit]=255&nt,D.last_lit++,k===0?D.dyn_ltree[2*nt]++:(D.matches++,k--,D.dyn_ltree[2*(S[nt]+f+1)]++,D.dyn_dtree[2*G(k)]++),D.last_lit===D.lit_bufsize-1},r._tr_align=function(D){X(D,2,3),et(D,E,F),function(k){k.bi_valid===16?(_t(k,k.bi_buf),k.bi_buf=0,k.bi_valid=0):8<=k.bi_valid&&(k.pending_buf[k.pending++]=255&k.bi_buf,k.bi_buf>>=8,k.bi_valid-=8)}(D)}},{"../utils/common":41}],53:[function(e,n,r){n.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,n,r){(function(s){(function(o,a){if(!o.setImmediate){var l,c,d,f,m=1,u={},v=!1,_=o.document,p=Object.getPrototypeOf&&Object.getPrototypeOf(o);p=p&&p.setTimeout?p:o,l={}.toString.call(o.process)==="[object process]"?function(M){process.nextTick(function(){y(M)})}:function(){if(o.postMessage&&!o.importScripts){var M=!0,L=o.onmessage;return o.onmessage=function(){M=!1},o.postMessage("","*"),o.onmessage=L,M}}()?(f="setImmediate$"+Math.random()+"$",o.addEventListener?o.addEventListener("message",E,!1):o.attachEvent("onmessage",E),function(M){o.postMessage(f+M,"*")}):o.MessageChannel?((d=new MessageChannel).port1.onmessage=function(M){y(M.data)},function(M){d.port2.postMessage(M)}):_&&"onreadystatechange"in _.createElement("script")?(c=_.documentElement,function(M){var L=_.createElement("script");L.onreadystatechange=function(){y(M),L.onreadystatechange=null,c.removeChild(L),L=null},c.appendChild(L)}):function(M){setTimeout(y,0,M)},p.setImmediate=function(M){typeof M!="function"&&(M=new Function(""+M));for(var L=new Array(arguments.length-1),C=0;C<L.length;C++)L[C]=arguments[C+1];var P={callback:M,args:L};return u[m]=P,l(m),m++},p.clearImmediate=h}function h(M){delete u[M]}function y(M){if(v)setTimeout(y,0,M);else{var L=u[M];if(L){v=!0;try{(function(C){var P=C.callback,N=C.args;switch(N.length){case 0:P();break;case 1:P(N[0]);break;case 2:P(N[0],N[1]);break;case 3:P(N[0],N[1],N[2]);break;default:P.apply(a,N)}})(L)}finally{h(M),v=!1}}}}function E(M){M.source===o&&typeof M.data=="string"&&M.data.indexOf(f)===0&&y(+M.data.slice(f.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof Oi<"u"?Oi:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(_l);var om=_l.exports;const lm=Sl(om);async function cm(i){const t=await fetch(i);if(!t.ok)throw new Error(`拉取模型失败 (${t.status})`);const e=await lm.loadAsync(await t.blob());let n="",r=null;const s=new Map,o=Object.values(e.files).filter(a=>!a.dir);for(const a of o){const l=a.name.split("/").pop()??a.name,c=l.toLowerCase();c.endsWith(".obj")&&!n?n=URL.createObjectURL(await a.async("blob")):c.endsWith(".mtl")&&!r?r=URL.createObjectURL(await a.async("blob")):/\.(jpg|jpeg|png|bmp)$/.test(c)&&s.set(l,URL.createObjectURL(await a.async("blob")))}if(!n)throw new Error("压缩包内未找到 OBJ 模型文件");return{objUrl:n,mtlUrl:r,textureUrls:s}}function um({title:i,url:t,onClose:e}){const n=vi.useRef(null),[r,s]=vi.useState(!0),[o,a]=vi.useState(null),[l,c]=vi.useState(null);return vi.useEffect(()=>{let d=null,f=0;const m=[];let u=!1;return(async()=>{try{const{objUrl:_,mtlUrl:p,textureUrls:h}=await cm(t);if(u)return;m.push(_,...p?[p]:[],...h.values());const y=new ul;y.setURLModifier(q=>{const K=decodeURIComponent(q.split("/").pop()??q);return h.get(K)??h.get(K.toLowerCase())??q});const E=new Wp(y);if(p){const q=await new Xp(y).loadAsync(p);q.preload(),E.setMaterials(q)}const M=await E.loadAsync(_);if(u)return;const L=n.current;if(!L)return;let C=0;M.traverse(q=>{var ot;const K=q;if(K.isMesh&&K.geometry){const z=K.geometry;C+=z.index?z.index.count/3:(((ot=z.attributes.position)==null?void 0:ot.count)??0)/3}}),c(Math.round(C));const P=new Rp;P.background=new Gt("#101a2c"),M.traverse(q=>{const K=q;if(K.isMesh){K.castShadow=!1;const ot=K.material;ot&&(ot.side=We)}}),P.add(M);const N=new fi().setFromObject(M),b=N.getSize(new Q),T=N.getCenter(new Q),F=Math.max(b.x,b.y,b.z)||1,A=new De(50,L.clientWidth/Math.max(1,L.clientHeight),F/1e3,F*10);A.position.set(T.x+F*.9,T.y+F*.7,T.z+F*.9),A.lookAt(T);const U=new Ip(16777215,3359068,1.1);U.position.set(0,F*2,0);const S=new Fp(16777215,1.6);S.position.set(F,F*1.5,F),P.add(U,S),d=new Ap({antialias:!0}),d.setPixelRatio(Math.min(window.devicePixelRatio,2)),d.setSize(L.clientWidth,L.clientHeight),L.appendChild(d.domElement);const B=new qp(A,d.domElement);B.target.copy(T),B.enableDamping=!0,B.dampingFactor=.08,B.update();const tt=()=>{f=requestAnimationFrame(tt),B.update(),d==null||d.render(P,A)};tt();const W=()=>{!d||!L||(A.aspect=L.clientWidth/Math.max(1,L.clientHeight),A.updateProjectionMatrix(),d.setSize(L.clientWidth,L.clientHeight))};window.addEventListener("resize",W),s(!1)}catch(_){u||(a(_ instanceof Error?_.message:"模型解析失败"),s(!1))}})(),()=>{u=!0,cancelAnimationFrame(f),d==null||d.dispose(),d!=null&&d.domElement.parentElement&&d.domElement.parentElement.removeChild(d.domElement);for(const _ of m)URL.revokeObjectURL(_)}},[t]),de.jsxs("div",{className:"fixed inset-0 z-40 flex flex-col bg-ink/80 backdrop-blur-sm",children:[de.jsxs("div",{className:"flex h-14 shrink-0 items-center justify-between bg-[#101a2c] px-5 text-white",children:[de.jsxs("div",{className:"flex items-center gap-2.5",children:[de.jsx(yl,{size:16,className:"text-[#2B7FFF]"}),de.jsxs("span",{className:"text-sm font-medium",children:[i," · 三维模型预览"]}),l!=null&&de.jsxs("span",{className:"text-xs text-[#8FA3BF]",children:[l.toLocaleString()," 三角面 · 拖拽旋转 / 滚轮缩放"]})]}),de.jsx("button",{onClick:e,className:"flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-[#8FA3BF] transition-colors hover:bg-white/10 hover:text-white",children:de.jsx(Ml,{size:17})})]}),de.jsxs("div",{className:"relative min-h-0 flex-1",children:[de.jsx("div",{ref:n,className:"h-full w-full"}),r&&de.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#101a2c] text-[#8FA3BF]",children:[de.jsx(El,{size:28,className:"animate-spin"}),de.jsx("p",{className:"text-sm",children:"正在下载并解压三维模型…"})]}),o&&de.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#101a2c]",children:[de.jsx(bl,{size:28,className:"text-[#E37318]"}),de.jsx("p",{className:"max-w-md text-center text-sm text-[#8FA3BF]",children:o}),de.jsx("button",{onClick:e,className:"cursor-pointer rounded-lg border border-white/20 px-4 py-2 text-sm text-white transition-colors hover:bg-white/10",children:"关闭"})]})]})]})}export{um as ModelViewer};
