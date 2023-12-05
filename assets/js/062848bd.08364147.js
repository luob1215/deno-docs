"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[1376],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=u(t),b=i,d=p["".concat(l,".").concat(b)]||p[b]||c[b]||o;return t?r.createElement(d,a(a({ref:n},m),{},{components:t})):r.createElement(d,a({ref:n},m))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=b;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},14393:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=t(87462),i=(t(67294),t(3905));const o={},a="Helpful Resources",s={unversionedId:"manual/runtime/webassembly/wasm_resources",id:"manual/runtime/webassembly/wasm_resources",title:"Helpful Resources",description:"This page contains some further information that is helpful when using and/or",source:"@site/runtime/manual/runtime/webassembly/wasm_resources.md",sourceDirName:"manual/runtime/webassembly",slug:"/manual/runtime/webassembly/wasm_resources",permalink:"/runtime/manual/runtime/webassembly/wasm_resources",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"runtimeGuideHome",previous:{title:"Using the Streaming WebAssembly APIs",permalink:"/runtime/manual/runtime/webassembly/using_streaming_wasm"},next:{title:"Overview of JSX and DOM in Deno",permalink:"/runtime/manual/advanced/jsx_dom/overview"}},l={},u=[{value:"WebAssembly API",id:"webassembly-api",level:2},{value:"Working with Non-Numeric Types",id:"working-with-non-numeric-types",level:2},{value:"Optimization",id:"optimization",level:2}],m={toc:u},p="wrapper";function c(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"helpful-resources"},"Helpful Resources"),(0,i.kt)("p",null,"This page contains some further information that is helpful when using and/or\ndeveloping WebAssembly modules."),(0,i.kt)("h2",{id:"webassembly-api"},"WebAssembly API"),(0,i.kt)("p",null,"Further information on all parts of the WebAssembly API can be found on\n",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/WebAssembly"},"MDN"),"."),(0,i.kt)("h2",{id:"working-with-non-numeric-types"},"Working with Non-Numeric Types"),(0,i.kt)("p",null,"The code samples in this chapter only used numeric types in the WebAssembly\nmodules. To run WebAssembly with more complex types (strings, classes) you will\nwant to use tools that generate type bindings between JavaScript and the\nlanguage used to compile to WebAssembly."),(0,i.kt)("p",null,"An example on how to create type bindings between JavaScript and Rust, compiling\nit into a binary and calling it from a JavaScript program can be found on\n",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/WebAssembly/Rust_to_wasm"},"MDN"),"."),(0,i.kt)("p",null,"If you plan to do a lot of work with Web APIs in Rust+WebAssembly, you may find\nthe ",(0,i.kt)("a",{parentName:"p",href:"https://rustwasm.github.io/wasm-bindgen/web-sys/index.html"},"web_sys")," and\n",(0,i.kt)("a",{parentName:"p",href:"https://rustwasm.github.io/wasm-bindgen/contributing/js-sys/index.html"},"js_sys"),"\nRust crates useful. ",(0,i.kt)("inlineCode",{parentName:"p"},"web_sys")," contains bindings to most of the Web APIs that are\navailable in Deno, while ",(0,i.kt)("inlineCode",{parentName:"p"},"js_sys")," provides bindings to JavaScript's standard,\nbuilt-in objects."),(0,i.kt)("h2",{id:"optimization"},"Optimization"),(0,i.kt)("p",null,"For production builds it can be a good idea to perform optimizations on\nWebAssembly binaries. If you're mainly serving binaries over networks then\noptimizing for size can make a real difference, whereas if you're mainly\nexecuting WebAssembly on a server to perform computationally intensive tasks,\noptimizing for speed can be beneficial. You can find a good guide on optimizing\n(production) builds\n",(0,i.kt)("a",{parentName:"p",href:"https://rustwasm.github.io/docs/book/reference/code-size.html"},"here"),". In\naddition, the\n",(0,i.kt)("a",{parentName:"p",href:"https://rustwasm.github.io/docs/book/reference/tools.html"},"rust-wasm group")," has\na list of tools that can be used to optimize and manipulate WebAssembly\nbinaries."))}c.isMDXComponent=!0}}]);