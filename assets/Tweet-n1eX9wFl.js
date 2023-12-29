import{_ as m,j as e}from"./index-LFfQgpzQ.js";import{I as a}from"./Gallery-GyOhSR9c.js";import"./Divider-YrCWkwbf.js";import"./helper-H2rpVDS9.js";import"./utils-S4u7VljP.js";const s={AvatarImg:t=>e.jsx(a,{...t,alt:"avatar",className:"!m-0"}),MediaImg:t=>e.jsx(a,{...t,fill:!0,unoptimized:!0,alt:"tweet-media",className:"!m-0 object-cover"})};async function p({id:t}){const{Tweet:r}=await m(()=>import("./index.client-fGn3757D.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url);return e.jsx("span",{className:"flex justify-center",children:e.jsx(r,{id:t,components:s})})}export{p as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index.client-fGn3757D.js","./index-LFfQgpzQ.js","./index-2pT2IeLa.css","./index-THmB0Xvu.js","./helper-H2rpVDS9.js","./index-75n5Qq-a.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}