"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[5578],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22167:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const i={},a="Configuring JSX in Deno",s={unversionedId:"manual/advanced/jsx_dom/jsx",id:"manual/advanced/jsx_dom/jsx",title:"Configuring JSX in Deno",description:"Deno has built-in support for JSX in both .jsx files and .tsx files. JSX in",source:"@site/runtime/manual/advanced/jsx_dom/jsx.md",sourceDirName:"manual/advanced/jsx_dom",slug:"/manual/advanced/jsx_dom/jsx",permalink:"/deno-docs/runtime/manual/advanced/jsx_dom/jsx",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"runtimeGuideHome",previous:{title:"Overview of JSX and DOM in Deno",permalink:"/deno-docs/runtime/manual/advanced/jsx_dom/overview"},next:{title:"Parsing and Stringifying CSS",permalink:"/deno-docs/runtime/manual/advanced/jsx_dom/css"}},l={},p=[{value:"Default configuration",id:"default-configuration",level:2},{value:"JSX import source",id:"jsx-import-source",level:2},{value:"JSX runtime",id:"jsx-runtime",level:3},{value:"Using the JSX import source pragma",id:"using-the-jsx-import-source-pragma",level:3},{value:"Using JSX import source in a configuration file",id:"using-jsx-import-source-in-a-configuration-file",level:3},{value:"Using an import map",id:"using-an-import-map",level:3},{value:"Current limitations",id:"current-limitations",level:3}],u={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuring-jsx-in-deno"},"Configuring JSX in Deno"),(0,r.kt)("p",null,"Deno has built-in support for JSX in both ",(0,r.kt)("inlineCode",{parentName:"p"},".jsx")," files and ",(0,r.kt)("inlineCode",{parentName:"p"},".tsx")," files. JSX in\nDeno can be handy for server-side rendering or generating code for consumption\nin a browser."),(0,r.kt)("h2",{id:"default-configuration"},"Default configuration"),(0,r.kt)("p",null,"The Deno CLI has a default configuration for JSX that is different than the\ndefaults for ",(0,r.kt)("inlineCode",{parentName:"p"},"tsc"),". Effectively Deno uses the following\n",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html"},"TypeScript compiler"),"\noptions by default:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "jsx": "react",\n    "jsxFactory": "React.createElement",\n    "jsxFragmentFactory": "React.Fragment"\n  }\n}\n')),(0,r.kt)("h2",{id:"jsx-import-source"},"JSX import source"),(0,r.kt)("p",null,"In React 17, the React team added what they called\n",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html"},"the ",(0,r.kt)("em",{parentName:"a"},"new")," JSX transforms"),".\nThis enhanced and modernized the API for JSX transforms as well as provided a\nmechanism to automatically import a JSX library into a module, instead of having\nto explicitly import it or make it part of the global scope. Generally this\nmakes it easier to use JSX in your application."),(0,r.kt)("p",null,"As of Deno 1.16, initial support for these transforms was added. Deno supports\nboth the JSX import source pragma as well as configuring a JSX import source in\na ",(0,r.kt)("a",{parentName:"p",href:"/deno-docs/runtime/manual/getting_started/configuration_file"},"configuration file"),"."),(0,r.kt)("h3",{id:"jsx-runtime"},"JSX runtime"),(0,r.kt)("p",null,"When using the automatic transforms, Deno will try to import a JSX runtime\nmodule that is expected to conform to the ",(0,r.kt)("em",{parentName:"p"},"new")," JSX API and is located at either\n",(0,r.kt)("inlineCode",{parentName:"p"},"jsx-runtime")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"jsx-dev-runtime"),". For example if a JSX import source is\nconfigured to ",(0,r.kt)("inlineCode",{parentName:"p"},"react"),", then the emitted code will add this to the emitted file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx,",metastring:"ignore",ignore:!0},'import { jsx as _jsx } from "react/jsx-runtime";\n')),(0,r.kt)("p",null,"Deno generally works off explicit specifiers, which means it will not try any\nother specifier at runtime than the one that is emitted. Which means to\nsuccessfully load the JSX runtime, ",(0,r.kt)("inlineCode",{parentName:"p"},'"react/jsx-runtime"')," would need to resolve\nto a module. Saying that, Deno supports remote modules, and most CDNs resolve\nthe specifier easily."),(0,r.kt)("p",null,"For example, if you wanted to use ",(0,r.kt)("a",{parentName:"p",href:"https://preactjs.com/"},"Preact")," from the\n",(0,r.kt)("a",{parentName:"p",href:"https://esm.sh/"},"esm.sh")," CDN, you would use ",(0,r.kt)("inlineCode",{parentName:"p"},"https://esm.sh/preact")," as the JSX\nimport source, and esm.sh will resolve ",(0,r.kt)("inlineCode",{parentName:"p"},"https://esm.sh/preact/jsx-runtime")," as a\nmodule, including providing a header in the response that tells Deno where to\nfind the type definitions for Preact."),(0,r.kt)("h3",{id:"using-the-jsx-import-source-pragma"},"Using the JSX import source pragma"),(0,r.kt)("p",null,'Whether you have a JSX import source configured for your project, or if you are\nusing the default "legacy" configuration, you can add the JSX import source\npragma to a ',(0,r.kt)("inlineCode",{parentName:"p"},".jsx")," or ",(0,r.kt)("inlineCode",{parentName:"p"},".tsx")," module, and Deno will respect it."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@jsxImportSource")," pragma needs to be in the leading comments of the module.\nFor example to use Preact from esm.sh, you would do something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx,",metastring:"ignore",ignore:!0},"/** @jsxImportSource https://esm.sh/preact */\n\nexport function App() {\n  return (\n    <div>\n      <h1>Hello, world!</h1>\n    </div>\n  );\n}\n")),(0,r.kt)("h3",{id:"using-jsx-import-source-in-a-configuration-file"},"Using JSX import source in a configuration file"),(0,r.kt)("p",null,"If you want to configure a JSX import source for a whole project, so you don't\nneed to insert the pragma on each module, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},'"compilerOptions"')," in\na ",(0,r.kt)("a",{parentName:"p",href:"/deno-docs/runtime/manual/getting_started/configuration_file"},"configuration file")," to specify\nthis. For example if you were using Preact as your JSX library from esm.sh, you\nwould configure the following, in the configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsonc"},'{\n  "compilerOptions": {\n    "jsx": "react-jsx",\n    "jsxImportSource": "https://esm.sh/preact"\n  }\n}\n')),(0,r.kt)("h3",{id:"using-an-import-map"},"Using an import map"),(0,r.kt)("p",null,"In situations where the import source plus ",(0,r.kt)("inlineCode",{parentName:"p"},"/jsx-runtime")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"/jsx-dev-runtime"),'\nis not resolvable to the correct module, an import map can be used to instruct\nDeno where to find the module. An import map can also be used to make the import\nsource "cleaner". For example, if you wanted to use Preact from skypack.dev and\nhave skypack.dev include all the type information, you could setup an import map\nlike this:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "imports": {\n    "preact/jsx-runtime": "https://cdn.skypack.dev/preact/jsx-runtime?dts",\n    "preact/jsx-dev-runtime": "https://cdn.skypack.dev/preact/jsx-dev-runtime?dts"\n  }\n}\n')),(0,r.kt)("p",null,"And then you could use the following pragma:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx,",metastring:"ignore",ignore:!0},"/** @jsxImportSource preact */\n")),(0,r.kt)("p",null,"Or you could configure it in the compiler options:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "jsx": "react-jsx",\n    "jsxImportSource": "preact"\n  }\n}\n')),(0,r.kt)("p",null,"You would then need to pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"--import-map")," option on the command line (along\nwith the ",(0,r.kt)("inlineCode",{parentName:"p"},"--config")," option is using a config file) or set the ",(0,r.kt)("inlineCode",{parentName:"p"},"deno.importMap"),"\noption (and ",(0,r.kt)("inlineCode",{parentName:"p"},"deno.config")," option) in your IDE."),(0,r.kt)("h3",{id:"current-limitations"},"Current limitations"),(0,r.kt)("p",null,"There are two current limitations of the support of the JSX import source:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A JSX module that does not have any imports or exports is not transpiled\nproperly when type checking (see:\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/microsoft/TypeScript/issues/46723"},"microsoft/TypeScript#46723"),").\nErrors will be seen at runtime about ",(0,r.kt)("inlineCode",{parentName:"li"},"_jsx")," not being defined. To work around\nthe issue, add ",(0,r.kt)("inlineCode",{parentName:"li"},"export {}")," to the file or use the ",(0,r.kt)("inlineCode",{parentName:"li"},"--no-check")," flag which will\ncause the module to be emitted properly."),(0,r.kt)("li",{parentName:"ul"},"Using ",(0,r.kt)("inlineCode",{parentName:"li"},'"jsx-reactdev"')," compiler option is not supported with\n",(0,r.kt)("inlineCode",{parentName:"li"},"--no-emit"),"/bundling/compiling (see:\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/swc-project/swc/issues/2656"},"swc-project/swc#2656"),").\nVarious runtime errors will occur about not being able to load ",(0,r.kt)("inlineCode",{parentName:"li"},"jsx-runtime"),"\nmodules. To work around the issue, use the ",(0,r.kt)("inlineCode",{parentName:"li"},'"jsx-react"')," compiler option\ninstead, or don't use ",(0,r.kt)("inlineCode",{parentName:"li"},"--no-emit"),", bundling or compiling.")))}c.isMDXComponent=!0}}]);