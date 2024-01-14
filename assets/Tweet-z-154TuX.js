import{_ as m,j as e}from"./index-6nmoZuY1.js";import{I as a}from"./Gallery-IcWmLINL.js";import"./Divider-EYPTBIK7.js";import"./helper-DD-oFgKI.js";import"./store-He7EqAuJ.js";import"./index-OVDJ2T7o.js";import"./env-y9k74Ds6.js";const o={AvatarImg:t=>e.jsx(a,{...t,alt:"avatar",className:"!m-0"}),MediaImg:t=>e.jsx(a,{...t,fill:!0,unoptimized:!0,alt:"tweet-media",className:"!m-0 object-cover"})};async function j({id:t}){const{Tweet:r}=await m(()=>import("./index.client-_JKDXwaG.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url);return e.jsx("span",{className:"flex justify-center",children:e.jsx(r,{id:t,components:o})})}export{j as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index.client-_JKDXwaG.js","./index-6nmoZuY1.js","./index-2VqBoVOK.css","./index-rg_eRVMP.js","./helper-DD-oFgKI.js","./index-75n5Qq-a.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
