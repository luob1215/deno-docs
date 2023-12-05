"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[2839],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(t),m=a,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},23060:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const o={},i="Node and npm modules",l={unversionedId:"manual/node/index",id:"manual/node/index",title:"Node and npm modules",description:"Many people will want to leverage code and libraries that are built for",source:"@site/runtime/manual/node/index.md",sourceDirName:"manual/node",slug:"/manual/node/",permalink:"/deno-docs/runtime/manual/node/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"runtimeGuideHome",previous:{title:"Workers",permalink:"/deno-docs/runtime/manual/runtime/workers"},next:{title:"npm: specifiers",permalink:"/deno-docs/runtime/manual/node/npm_specifiers"}},p={},c=[],u={toc:c},s="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(s,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"node-and-npm-modules"},"Node and npm modules"),(0,a.kt)("p",null,"Many people will want to leverage code and libraries that are built for\n",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"Node"),", in particular the large set of packages available\non the ",(0,a.kt)("a",{parentName:"p",href:"https://npmjs.com/"},"npm")," registry."),(0,a.kt)("p",null,"There are currently several ways to do this:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Using ",(0,a.kt)("a",{parentName:"li",href:"/deno-docs/runtime/manual/node/npm_specifiers"},(0,a.kt)("inlineCode",{parentName:"a"},"npm:")," specifiers")," and\n",(0,a.kt)("a",{parentName:"li",href:"/deno-docs/runtime/manual/node/node_specifiers"},(0,a.kt)("inlineCode",{parentName:"a"},"node:")," specifiers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/deno-docs/runtime/manual/node/package_json"},"package.json compatibility")),(0,a.kt)("li",{parentName:"ul"},"Using ",(0,a.kt)("a",{parentName:"li",href:"/deno-docs/runtime/manual/node/cdns"},"CDNs"))))}d.isMDXComponent=!0}}]);