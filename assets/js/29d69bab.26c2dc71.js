"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[3092],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),m=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=m(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=m(t),b=a,d=c["".concat(l,".").concat(b)]||c[b]||p[b]||s;return t?r.createElement(d,o(o({ref:n},u),{},{components:t})):r.createElement(d,o({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=b;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var m=2;m<s;m++)o[m]=t[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},42784:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var r=t(87462),a=(t(67294),t(3905));const s={},o="Using WebAssembly",i={unversionedId:"manual/runtime/webassembly/index",id:"manual/runtime/webassembly/index",title:"Using WebAssembly",description:"Designed to be used alongside JavaScript to speed up key application components,",source:"@site/runtime/manual/runtime/webassembly/index.md",sourceDirName:"manual/runtime/webassembly",slug:"/manual/runtime/webassembly/",permalink:"/deno-docs/runtime/manual/runtime/webassembly/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"runtimeGuideHome",previous:{title:"FAQs about TypeScript in Deno",permalink:"/deno-docs/runtime/manual/advanced/typescript/faqs"},next:{title:"Using WebAssembly in Deno",permalink:"/deno-docs/runtime/manual/runtime/webassembly/using_wasm"}},l={},m=[],u={toc:m},c="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-webassembly"},"Using WebAssembly"),(0,a.kt)("p",null,"Designed to be used alongside JavaScript to speed up key application components,\n",(0,a.kt)("a",{parentName:"p",href:"https://webassembly.org/"},"WebAssembly")," can have much higher, and more\nconsistent execution speed than JavaScript, similar to C, C++, or Rust. Deno can\nexecute WebAssembly modules with the same interfaces that\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/WebAssembly"},"browsers provide"),"."),(0,a.kt)("p",null,"In this chapter we will discuss:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/deno-docs/runtime/manual/runtime/webassembly/using_wasm"},"Using WebAssembly in Deno")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/deno-docs/runtime/manual/runtime/webassembly/using_streaming_wasm"},"Using the Streaming WebAssembly APIs")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/deno-docs/runtime/manual/runtime/webassembly/wasm_resources"},"Helpful Resources"))))}p.isMDXComponent=!0}}]);