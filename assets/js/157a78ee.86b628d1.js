"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[3098],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>N});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},k=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(t),k=a,N=u["".concat(p,".").concat(k)]||u[k]||d[k]||l;return t?i.createElement(N,r(r({ref:n},m),{},{components:t})):i.createElement(N,r({ref:n},m))}));function N(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=k;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[u]="string"==typeof e?e:a,r[1]=o;for(var s=2;s<l;s++)r[s]=t[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}k.displayName="MDXCreateElement"},46590:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var i=t(87462),a=(t(67294),t(3905));const l={},r="Node.js built-in APIs",o={unversionedId:"api/runtime-node",id:"api/runtime-node",title:"Node.js built-in APIs",description:"Deno Deploy natively supports importing built-in Node.js modules like fs,",source:"@site/deploy/api/runtime-node.md",sourceDirName:"api",slug:"/api/runtime-node",permalink:"/deno-docs/deploy/api/runtime-node",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"deployAPIHome",previous:{title:"File system APIs",permalink:"/deno-docs/deploy/api/runtime-fs"},next:{title:"Compressing response bodies",permalink:"/deno-docs/deploy/api/compression"}},p={},s=[],m={toc:s},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nodejs-built-in-apis"},"Node.js built-in APIs"),(0,a.kt)("p",null,"Deno Deploy natively supports importing built-in Node.js modules like ",(0,a.kt)("inlineCode",{parentName:"p"},"fs"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"path"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"http")," through ",(0,a.kt)("inlineCode",{parentName:"p"},"node:")," specifiers. This allows running code\noriginally written for Node.js without changes in Deno Deploy."),(0,a.kt)("p",null,"Here is an example of a Node.js HTTP server running on Deno Deploy:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { createServer } from "node:http";\nimport process from "node:process";\n\nconst server = createServer((req, res) => {\n  const message = `Hello from ${process.env.DENO_REGION} at ${new Date()}`;\n  res.end(message);\n});\n\nserver.listen(8080);\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"You can see this example live here:\n",(0,a.kt)("a",{parentName:"em",href:"https://dash.deno.com/playground/node-specifiers"},"https://dash.deno.com/playground/node-specifiers"))),(0,a.kt)("p",null,"When using ",(0,a.kt)("inlineCode",{parentName:"p"},"node:")," specifiers, all other features of Deno Deploy are still\navailable. For example, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"Deno.env")," to access environment variables\neven when using Node.js modules. You can also import other ESM modules from\nexternal URLs as usual."),(0,a.kt)("p",null,"The following Node.js modules are available:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"assert")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"assert/strict")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"async_hooks")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"buffer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"child_process")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cluster")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"console")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"constants")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"crypto")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dgram")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"diagnostics_channel")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dns")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dns/promises")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"domain")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"events")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fs/promises")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"http")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"http2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"https")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"module")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"net")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"os")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"path")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"path/posix")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"path/win32")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"perf_hooks")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"process")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"punycode")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"querystring")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"readline")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stream")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stream/consumers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stream/promises")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stream/web")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"string_decoder")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sys")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"timers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"timers/promises")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tls")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tty")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"url")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"util")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"util/types")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"v8")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"vm")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"worker_threads")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"zlib"))),(0,a.kt)("p",null,"The behavior of these modules should be identical to Node.js in most cases. Due\nto the sandboxing behaviour of Deno Deploy, some features are not available:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Executing binaries with ",(0,a.kt)("inlineCode",{parentName:"li"},"child_process")),(0,a.kt)("li",{parentName:"ul"},"Spawning workers using ",(0,a.kt)("inlineCode",{parentName:"li"},"worker_threads")),(0,a.kt)("li",{parentName:"ul"},"Creating contexts and evaluating code with ",(0,a.kt)("inlineCode",{parentName:"li"},"vm"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: the emulation of Node.js modules is sufficient for most use cases, but\nit is not yet perfect. If you encounter any issues, please\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/denoland/deno"},"open an issue"),".")))}d.isMDXComponent=!0}}]);