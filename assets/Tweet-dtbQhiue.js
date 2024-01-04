import{_ as m,j as e}from"./index-Psnmq2F-.js";import{I as a}from"./Gallery-4b3tkpr5.js";import"./Divider-138Kvhmd.js";import"./helper-ABMQuD8K.js";import"./utils-DGIwa5Yy.js";const s={AvatarImg:t=>e.jsx(a,{...t,alt:"avatar",className:"!m-0"}),MediaImg:t=>e.jsx(a,{...t,fill:!0,unoptimized:!0,alt:"tweet-media",className:"!m-0 object-cover"})};async function p({id:t}){const{Tweet:r}=await m(()=>import("./index.client-kUq6Wnq8.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url);return e.jsx("span",{className:"flex justify-center",children:e.jsx(r,{id:t,components:s})})}export{p as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index.client-kUq6Wnq8.js","./index-Psnmq2F-.js","./index-QTZPYe45.css","./index-1KjnFL1A.js","./helper-ABMQuD8K.js","./index-75n5Qq-a.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}