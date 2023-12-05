"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[9754],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),d=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=d(r),m=a,y=s["".concat(i,".").concat(m)]||s[m]||u[m]||o;return r?n.createElement(y,l(l({ref:t},c),{},{components:r})):n.createElement(y,l({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[s]="string"==typeof e?e:a,l[1]=p;for(var d=2;d<o;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},41694:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const o={},l="Reverse proxy middleware",p={unversionedId:"manual/middleware",id:"manual/middleware",title:"Reverse proxy middleware",description:"This quickstart will cover how to deploy a small piece of middleware that",source:"@site/deploy/manual/middleware.md",sourceDirName:"manual",slug:"/manual/middleware",permalink:"/deploy/manual/middleware",draft:!1,tags:[],version:"current",frontMatter:{}},i={},d=[{value:"<strong>Step 1:</strong> Create a new playground project on Deno Deploy",id:"step-1-create-a-new-playground-project-on-deno-deploy",level:2},{value:"<strong>Step 2:</strong> Deploy middleware code via playground",id:"step-2-deploy-middleware-code-via-playground",level:2}],c={toc:d},s="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(s,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"reverse-proxy-middleware"},"Reverse proxy middleware"),(0,a.kt)("p",null,"This quickstart will cover how to deploy a small piece of middleware that\nreverse proxies another server (in this case example.com). For additional\nexamples of common middleware functions, see the\n",(0,a.kt)("a",{parentName:"p",href:"/deploy/tutorials/"},"example gallery"),"."),(0,a.kt)("h2",{id:"step-1-create-a-new-playground-project-on-deno-deploy"},(0,a.kt)("strong",{parentName:"h2"},"Step 1:")," Create a new playground project on Deno Deploy"),(0,a.kt)("p",null,"Navigate to ",(0,a.kt)("a",{parentName:"p",href:"https://dash.deno.com/projects"},"https://dash.deno.com/projects"),' and click on the "New Playground"\nbutton.'),(0,a.kt)("h2",{id:"step-2-deploy-middleware-code-via-playground"},(0,a.kt)("strong",{parentName:"h2"},"Step 2:")," Deploy middleware code via playground"),(0,a.kt)("p",null,"On the next page, copy and paste the code below into the editor. It is an HTTP\nserver that proxies all requests to ",(0,a.kt)("a",{parentName:"p",href:"https://example.com"},"https://example.com"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'async function reqHandler(req: Request) {\n  const reqPath = new URL(req.url).pathname;\n  return await fetch("https://example.com" + reqPath, { headers: req.headers });\n}\n\nDeno.serve(reqHandler);\n')),(0,a.kt)("p",null,"Click ",(0,a.kt)("strong",{parentName:"p"},"Save and Deploy"),"."),(0,a.kt)("p",null,"You should see something like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:r(4258).Z,width:"1594",height:"1135"})))}u.isMDXComponent=!0},4258:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/proxy_to_example-87d6aa1a577d2d2d8a7e2ca11060faa6.png"}}]);