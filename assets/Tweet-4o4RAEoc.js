import{_ as m,j as e}from"./index-8itOWlMF.js";import{I as a}from"./Gallery-XH1UQDY7.js";import"./Divider-EXlZmjNV.js";import"./helper-DD-oFgKI.js";import"./utils-SOnoRJmR.js";import"./index-OVDJ2T7o.js";const o={AvatarImg:t=>e.jsx(a,{...t,alt:"avatar",className:"!m-0"}),MediaImg:t=>e.jsx(a,{...t,fill:!0,unoptimized:!0,alt:"tweet-media",className:"!m-0 object-cover"})};async function u({id:t}){const{Tweet:r}=await m(()=>import("./index.client-hLTiojck.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url);return e.jsx("span",{className:"flex justify-center",children:e.jsx(r,{id:t,components:o})})}export{u as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index.client-hLTiojck.js","./index-8itOWlMF.js","./index-tmm-dhS0.css","./index-A-Lzd2uA.js","./helper-DD-oFgKI.js","./index-75n5Qq-a.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
