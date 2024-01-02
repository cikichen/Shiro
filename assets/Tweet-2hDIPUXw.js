import{_ as m,j as e}from"./index-E5b5RAtc.js";import{I as a}from"./Gallery-nG-zo7mA.js";import"./Divider-b2e7VsT8.js";import"./helper-ikQ96nUE.js";import"./utils-b939Rm-x.js";const s={AvatarImg:t=>e.jsx(a,{...t,alt:"avatar",className:"!m-0"}),MediaImg:t=>e.jsx(a,{...t,fill:!0,unoptimized:!0,alt:"tweet-media",className:"!m-0 object-cover"})};async function p({id:t}){const{Tweet:r}=await m(()=>import("./index.client-3x7mpZla.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url);return e.jsx("span",{className:"flex justify-center",children:e.jsx(r,{id:t,components:s})})}export{p as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index.client-3x7mpZla.js","./index-E5b5RAtc.js","./index-80w7R6xI.css","./index-ZkXAAPIX.js","./helper-ikQ96nUE.js","./index-75n5Qq-a.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}