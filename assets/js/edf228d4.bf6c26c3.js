"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[6325],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},62314:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={},i="Basic Fresh site",l={unversionedId:"tutorials/fresh",id:"tutorials/fresh",title:"Basic Fresh site",description:"This tutorial will cover how to deploy a Fresh application on Deno Deploy.",source:"@site/deploy/tutorials/fresh.md",sourceDirName:"tutorials",slug:"/tutorials/fresh",permalink:"/deno-docs/deploy/tutorials/fresh",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"deployTutorialsHome",previous:{title:"Discord Slash Command",permalink:"/deno-docs/deploy/tutorials/discord-slash"},next:{title:"Simple API server",permalink:"/deno-docs/deploy/tutorials/simple-api"}},p={},s=[{value:"<strong>Step 1:</strong> Create Fresh application",id:"step-1-create-fresh-application",level:2},{value:"<strong>Step 2:</strong> Create a new Github repo and link your local Fresh application.",id:"step-2-create-a-new-github-repo-and-link-your-local-fresh-application",level:2},{value:"<strong>Step 3:</strong> Deploy to Deno Deploy",id:"step-3-deploy-to-deno-deploy",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"basic-fresh-site"},"Basic Fresh site"),(0,o.kt)("p",null,"This tutorial will cover how to deploy a Fresh application on Deno Deploy."),(0,o.kt)("p",null,"Fresh is a web framework built for Deno, akin to Express for Node."),(0,o.kt)("h2",{id:"step-1-create-fresh-application"},(0,o.kt)("strong",{parentName:"h2"},"Step 1:")," Create Fresh application"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"deno run -A -r https://fresh.deno.dev fresh-site\n")),(0,o.kt)("p",null,"To run this application locally:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"deno task start\n")),(0,o.kt)("p",null,"You can edit ",(0,o.kt)("inlineCode",{parentName:"p"},"routes/index.js")," to modify the application."),(0,o.kt)("h2",{id:"step-2-create-a-new-github-repo-and-link-your-local-fresh-application"},(0,o.kt)("strong",{parentName:"h2"},"Step 2:")," Create a new Github repo and link your local Fresh application."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a new Github repo and record the git repo remote URL")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From your local ",(0,o.kt)("inlineCode",{parentName:"p"},"fresh-site"),", initialize git and push to the new remote repo:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'git init\ngit add .\ngit commit -m "First commit"\ngit remote add <remote-url>\ngit push origin main\n')))),(0,o.kt)("h2",{id:"step-3-deploy-to-deno-deploy"},(0,o.kt)("strong",{parentName:"h2"},"Step 3:")," Deploy to Deno Deploy"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to ",(0,o.kt)("a",{parentName:"li",href:"https://dash.deno.com/new"},"https://dash.deno.com/new")," and click the ",(0,o.kt)("strong",{parentName:"li"},"+New Project")," button."),(0,o.kt)("li",{parentName:"ol"},"On the next page, choose the ",(0,o.kt)("strong",{parentName:"li"},"Deploy from Github repository")," card."),(0,o.kt)("li",{parentName:"ol"},"To fill in the values on the form, choose:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"the new ",(0,o.kt)("inlineCode",{parentName:"li"},"fresh-site")," Github repo that you just created",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"automatic (fastest)"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"main")," branch"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"main.ts")," as the entrypoint file")))))}d.isMDXComponent=!0}}]);