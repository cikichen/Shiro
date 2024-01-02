import{_ as m,j as e}from"./index-cUNMK_8T.js";import{I as a}from"./Gallery-dwy_tz_Y.js";import"./Divider-i4fcQE7z.js";import"./helper-ikQ96nUE.js";import"./utils-mnb9K_z7.js";const s={AvatarImg:t=>e.jsx(a,{...t,alt:"avatar",className:"!m-0"}),MediaImg:t=>e.jsx(a,{...t,fill:!0,unoptimized:!0,alt:"tweet-media",className:"!m-0 object-cover"})};async function p({id:t}){const{Tweet:r}=await m(()=>import("./index.client-pgxpIVoc.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url);return e.jsx("span",{className:"flex justify-center",children:e.jsx(r,{id:t,components:s})})}export{p as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index.client-pgxpIVoc.js","./index-cUNMK_8T.js","./index-80w7R6xI.css","./index--8iiSwes.js","./helper-ikQ96nUE.js","./index-75n5Qq-a.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}