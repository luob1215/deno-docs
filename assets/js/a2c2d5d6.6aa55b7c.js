"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[5672],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=r.createContext({}),u=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(m.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(t),s=a,f=c["".concat(m,".").concat(s)]||c[s]||d[s]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=s;var l={};for(var m in n)hasOwnProperty.call(n,m)&&(l[m]=n[m]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},49522:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=t(87462),a=(t(67294),t(3905));const o={},i="Built-In Tooling",l={unversionedId:"manual/tools/index",id:"manual/tools/index",title:"Built-In Tooling",description:"Deno provides some built-in tooling that is useful when working with JavaScript",source:"@site/runtime/manual/tools/index.md",sourceDirName:"manual/tools",slug:"/manual/tools/",permalink:"/deno-docs/runtime/manual/tools/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"runtimeGuideHome",previous:{title:"Node API Compatibility List",permalink:"/deno-docs/runtime/manual/node/compatibility"},next:{title:"Benchmarking Tool",permalink:"/deno-docs/runtime/manual/tools/benchmarker"}},m={},u=[],p={toc:u},c="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"built-in-tooling"},"Built-In Tooling"),(0,a.kt)("p",null,"Deno provides some built-in tooling that is useful when working with JavaScript\nand TypeScript:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/deno-docs/runtime/manual/tools/init"},"start new project (",(0,a.kt)("inlineCode",{parentName:"a"},"deno init"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/deno-docs/runtime/manual/tools/benchmarker"},"benchmarker (",(0,a.kt)("inlineCode",{parentName:"a"},"deno bench"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/deno-docs/runtime/manual/tools/compiler"},"compiling executables (",(0,a.kt)("inlineCode",{parentName:"a"},"deno compile"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/deno-docs/runtime/manual/tools/script_installer"},"installer (",(0,a.kt)("inlineCode",{parentName:"a"},"deno install"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/deno-docs/runtime/manual/tools/jupyter"},"Jupyter kernel (",(0,a.kt)("inlineCode",{parentName:"a"},"deno jupyter"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/deno-docs/runtime/manual/tools/dependency_inspector"},"dependency inspector (",(0,a.kt)("inlineCode",{parentName:"a"},"deno info"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/deno-docs/runtime/manual/tools/documentation_generator"},"documentation generator (",(0,a.kt)("inlineCode",{parentName:"a"},"deno doc"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/deno-docs/runtime/manual/tools/formatter"},"formatter (",(0,a.kt)("inlineCode",{parentName:"a"},"deno fmt"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/deno-docs/runtime/manual/tools/linter"},"linter (",(0,a.kt)("inlineCode",{parentName:"a"},"deno lint"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/deno-docs/runtime/manual/tools/repl"},"repl (",(0,a.kt)("inlineCode",{parentName:"a"},"deno repl"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/deno-docs/runtime/manual/tools/task_runner"},"task runner (",(0,a.kt)("inlineCode",{parentName:"a"},"deno task"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/deno-docs/runtime/manual/basics/testing/"},"test runner (",(0,a.kt)("inlineCode",{parentName:"a"},"deno test"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/deno-docs/runtime/manual/tools/vendor"},"vendoring dependencies (",(0,a.kt)("inlineCode",{parentName:"a"},"deno vendor"),")"))))}d.isMDXComponent=!0}}]);