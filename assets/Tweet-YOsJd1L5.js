import{_ as m,j as e}from"./index-4chY3ys6.js";import{I as a}from"./Gallery-q1r_PUDk.js";import"./Divider-ftKmPBFz.js";import"./helper-ABMQuD8K.js";import"./utils-LValqHZV.js";const s={AvatarImg:t=>e.jsx(a,{...t,alt:"avatar",className:"!m-0"}),MediaImg:t=>e.jsx(a,{...t,fill:!0,unoptimized:!0,alt:"tweet-media",className:"!m-0 object-cover"})};async function p({id:t}){const{Tweet:r}=await m(()=>import("./index.client-hS9R7f7b.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url);return e.jsx("span",{className:"flex justify-center",children:e.jsx(r,{id:t,components:s})})}export{p as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index.client-hS9R7f7b.js","./index-4chY3ys6.js","./index-ZtlwGQh9.css","./index-XM9eVpu5.js","./helper-ABMQuD8K.js","./index-75n5Qq-a.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}