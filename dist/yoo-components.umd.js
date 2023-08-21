(function(a,f){typeof exports=="object"&&typeof module<"u"?f(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],f):(a=typeof globalThis<"u"?globalThis:a||self,f(a["yoo-components"]={},a.react))})(this,function(a,f){"use strict";function C(e,n){const t={...e};return n.forEach(o=>{o in t&&delete t[o]}),t}function $(e,n,t){const{_ignorePropsFromGlobal:o}=e,r=f.useMemo(()=>({...n,...o?{}:t}),[n,t,o]);return f.useMemo(()=>{const c=C(e,["_ignorePropsFromGlobal"]);for(const i in r)c[i]===void 0&&(c[i]=r[i]);return c},[e,r])}function E(e){({...e})}function _(e){const n=[];let t=e.substr(1);return e.length===3&&(t=e.replace(/(.)/g,"$1$1")),t.replace(/../g,o=>{n.push(parseInt(o,16))}),{r:n[0],g:n[1],b:n[2],rgb:`rgb(${n.join(",")})`}}function T(e){const n=_(e);return{r:n.r,g:n.g,b:n.b}}function B(e){const n=T(e),t=N(n.r,n.g,n.b);return{h:t.h,s:t.s,l:t.l}}function N(e,n,t){const o=e/255,r=n/255,s=t/255,c=Math.max(o,r,s),i=Math.min(o,r,s),u=(c+i)/2;let l,g;if(c===i)l=0,g=0;else{const d=c-i;switch(g=u>.5?d/(2-c-i):d/(c+i),c){case o:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-o)/d+2;break;case s:l=(o-r)/d+4;break}l/=6}return{h:l,s:g,l:u,hsl:`hsl(${l*360}, ${g*100}%, ${u*100}%)`}}function h(e,n){const t=B(e),o=+t.h,r=+t.s,s=+t.l*100+ +n;return S([o*360,r*100,s]).join(",")}function S(e){const n=e[0]/360,t=e[1]/100,o=e[2]/100;let r,s,c;if(t===0)return c=o*255,[c,c,c];o<.5?r=o*(1+t):r=o+t-o*t;const i=2*o-r,u=[0,0,0];for(let l=0;l<3;l++)s=n+1/3*-(l-1),s<0&&s++,s>1&&s--,6*s<1?c=i+(r-i)*6*s:2*s<1?c=r:3*s<2?c=i+(r-i)*(2/3-s)*6:c=i,u[l]=c*255;return u}const y=Object.prototype.toString;function w(e){return y.call(e)==="[object Array]"}function P(e){return y.call(e)==="[object Object]"}function M(e){return y.call(e)==="[object String]"}const p={primaryColor:{default:"--arcoblue-6",hover:"--arcoblue-5",active:"--arcoblue-7"},successColor:{default:"--green-6",hover:"--green-5",active:"--green-7"},infoColor:{default:"--arcoblue-6",hover:"--arcoblue-5",active:"--arcoblue-7"},warningColor:{default:"--orangered-6",hover:"--orangered-5",active:"--orangered-7"},dangerColor:{default:"--red-6",hover:"--red-5",active:"--red-7"}};function O(e){if(e&&P(e)){const n=document.body;Object.keys(p).forEach(t=>{e[t]&&(n.style.setProperty(p[t].default,h(e[t],0)),e[`${t}Hover`]||n.style.setProperty(p[t].hover,h(e[t],10)),e[`${t}Active`]||n.style.setProperty(p[t].active,h(e[t],-10)))})}}const x={prefixCls:"arco",size:"default"},z={},b=f.createContext({getPrefixCls:(e,n)=>`${n||"arco"}-${e}`,...x});function m(e){const n=$(e,x,z),{theme:t,prefixCls:o,children:r}=n;f.useEffect(()=>{O(t)},[t]),f.useEffect(()=>{},[o]);function s(u,l){return`${l||o}-${u}`}const c={...C(n,["children"]),getPrefixCls:s};f.useEffect(()=>{E({prefixCls:o})},[o]);let i=r;return f.createElement(b.Provider,{value:c},i)}m.ConfigContext=b,m.displayName="ConfigProvider",b.Consumer;function F(...e){const n=e.length;let t=[];for(let o=0;o<n;o++){const r=e[o];r&&(M(r)?t.push(r):w(r)?t=t.concat(r):P(r)&&Object.keys(r).forEach(s=>{r[s]&&t.push(s)}))}return[...new Set(t)].join(" ")}const I="",L="",k={htmlType:"button",type:"default",shape:"square"};function A(e,n){const{getPrefixCls:t,size:o}=f.useContext(b),r=$(e,k,{}),{children:s,style:c,type:i,htmlType:u,size:l,className:g}=r,d=f.createElement(f.Fragment,null,s),H=f.useRef(),q=n||H,v=t("btn"),G=F(v,`${v}-${i==="default"?"secondary":i}`,`${v}-size-${l||o}`,g);return f.createElement("button",{ref:q,style:c,className:G,type:u},d)}const j=f.forwardRef(A);j.displayName="Button",a.Button=j,a.ConfigProvider=m,Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});
