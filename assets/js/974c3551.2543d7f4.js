"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[1894],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>b});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(t),m=o,b=p["".concat(s,".").concat(m)]||p[m]||c[m]||a;return t?r.createElement(b,l(l({ref:n},d),{},{components:t})):r.createElement(b,l({ref:n},d))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},82956:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=t(87462),o=(t(67294),t(3905));const a={},l="Bundling static assets (deprecated)",i={unversionedId:"manual/tools/bundler",id:"manual/tools/bundler",title:"Bundling static assets (deprecated)",description:"deno bundle has been deprecated and will be removed in some future release.",source:"@site/runtime/manual/tools/bundler.md",sourceDirName:"manual/tools",slug:"/manual/tools/bundler",permalink:"/deno-docs/runtime/manual/tools/bundler",draft:!1,tags:[],version:"current",frontMatter:{}},s={},u=[{value:"Bundling for the Web",id:"bundling-for-the-web",level:2}],d={toc:u},p="wrapper";function c(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bundling-static-assets-deprecated"},"Bundling static assets (deprecated)"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"deno bundle")," has been deprecated and will be removed in some future release.\nUse ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/denoland/deno_emit"},"deno_emit"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://esbuild.github.io/"},"esbuild")," or ",(0,o.kt)("a",{parentName:"p",href:"https://rollupjs.org"},"rollup")," instead.")),(0,o.kt)("h1",{id:"bundling"},"Bundling"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"deno bundle [URL]")," will output a single JavaScript file for consumption in\nDeno, which includes all dependencies of the specified input. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'deno bundle https://deno.land/std/examples/colors.ts colors.bundle.js\nBundle https://deno.land/std/examples/colors.ts\nDownload https://deno.land/std/examples/colors.ts\nDownload https://deno.land/std/fmt/colors.ts\nEmit "colors.bundle.js" (9.83KB)\n')),(0,o.kt)("p",null,"If you omit the out file, the bundle will be sent to ",(0,o.kt)("inlineCode",{parentName:"p"},"stdout"),"."),(0,o.kt)("p",null,"The bundle can just be run as any other module in Deno would:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"deno run colors.bundle.js\n")),(0,o.kt)("p",null,"The output is a self contained ES Module, where any exports from the main module\nsupplied on the command line will be available. For example, if the main module\nlooked something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts,",metastring:"ignore",ignore:!0},'export { foo } from "./foo.js";\n\nexport const bar = "bar";\n')),(0,o.kt)("p",null,"It could be imported like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts,",metastring:"ignore",ignore:!0},'import { bar, foo } from "./lib.bundle.js";\n')),(0,o.kt)("h2",{id:"bundling-for-the-web"},"Bundling for the Web"),(0,o.kt)("p",null,"The output of ",(0,o.kt)("inlineCode",{parentName:"p"},"deno bundle")," is intended for consumption in Deno and not for use\nin a web browser or other runtimes. That said, depending on the input it may\nwork in other environments."),(0,o.kt)("p",null,"If you wish to bundle for the web, we recommend other solutions such as\n",(0,o.kt)("a",{parentName:"p",href:"https://esbuild.github.io/"},"esbuild"),"."))}c.isMDXComponent=!0}}]);