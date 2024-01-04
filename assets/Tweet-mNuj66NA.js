import{_ as m,j as e}from"./index-uQCVazRX.js";import{I as a}from"./Gallery-u6UU-H8O.js";import"./Divider-Hb8u-IMl.js";import"./helper-ABMQuD8K.js";import"./utils-K-bV3ouB.js";const s={AvatarImg:t=>e.jsx(a,{...t,alt:"avatar",className:"!m-0"}),MediaImg:t=>e.jsx(a,{...t,fill:!0,unoptimized:!0,alt:"tweet-media",className:"!m-0 object-cover"})};async function p({id:t}){const{Tweet:r}=await m(()=>import("./index.client-gqtJr7v_.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url);return e.jsx("span",{className:"flex justify-center",children:e.jsx(r,{id:t,components:s})})}export{p as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index.client-gqtJr7v_.js","./index-uQCVazRX.js","./index-hqcSa-fa.css","./index-ouN1WpZz.js","./helper-ABMQuD8K.js","./index-75n5Qq-a.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}