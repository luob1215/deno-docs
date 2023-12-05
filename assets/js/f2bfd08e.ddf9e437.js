"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[2498],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return t?o.createElement(h,l(l({ref:n},p),{},{components:t})):o.createElement(h,l({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<r;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},33763:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=t(87462),a=(t(67294),t(3905));const r={},l="Location API",i={unversionedId:"manual/runtime/location_api",id:"manual/runtime/location_api",title:"Location API",description:"Deno supports the",source:"@site/runtime/manual/runtime/location_api.md",sourceDirName:"manual/runtime",slug:"/manual/runtime/location_api",permalink:"/runtime/manual/runtime/location_api",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"runtimeGuideHome",previous:{title:"Using Web Platform APIs",permalink:"/runtime/manual/runtime/web_platform_apis"},next:{title:"Web Storage API",permalink:"/runtime/manual/runtime/web_storage_api"}},s={},c=[{value:"Location flag",id:"location-flag",level:2},{value:"Extended usage",id:"extended-usage",level:2},{value:"Fetch API",id:"fetch-api",level:3},{value:"Worker modules",id:"worker-modules",level:3},{value:"Only use if necessary",id:"only-use-if-necessary",level:2}],p={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"location-api"},"Location API"),(0,a.kt)("p",null,"Deno supports the\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/location"},(0,a.kt)("inlineCode",{parentName:"a"},"location")),"\nglobal from the web. Please read on."),(0,a.kt)("h2",{id:"location-flag"},"Location flag"),(0,a.kt)("p",null,'There is no "web page" whose URL we can use for a location in a Deno process. We\ninstead allow users to emulate a document location by specifying one on the CLI\nusing the ',(0,a.kt)("inlineCode",{parentName:"p"},"--location")," flag. It can be a ",(0,a.kt)("inlineCode",{parentName:"p"},"http")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"https")," URL."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'// deno run --location https://example.com/path main.ts\n\nconsole.log(location.href);\n// "https://example.com/path"\n')),(0,a.kt)("p",null,"You must pass ",(0,a.kt)("inlineCode",{parentName:"p"},"--location <href>")," for this to work. If you don't, any access to\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"location")," global will throw an error."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'// deno run main.ts\n\nconsole.log(location.href);\n// error: Uncaught ReferenceError: Access to "location", run again with --location <href>.\n')),(0,a.kt)("p",null,"Setting ",(0,a.kt)("inlineCode",{parentName:"p"},"location")," or any of its fields will normally cause navigation in\nbrowsers. This is not applicable in Deno, so it will throw in this situation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'// deno run --location https://example.com/path main.ts\n\nlocation.pathname = "./foo";\n// error: Uncaught NotSupportedError: Cannot set "location.pathname".\n')),(0,a.kt)("h2",{id:"extended-usage"},"Extended usage"),(0,a.kt)("p",null,"On the web, resource resolution (excluding modules) typically uses the value of\n",(0,a.kt)("inlineCode",{parentName:"p"},"location.href")," as the root on which to base any relative URLs. This affects\nsome web APIs adopted by Deno."),(0,a.kt)("h3",{id:"fetch-api"},"Fetch API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'// deno run --location https://api.github.com/ --allow-net main.ts\n\nconst response = await fetch("./orgs/denoland");\n// Fetches "https://api.github.com/orgs/denoland".\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch()")," call above would throw if the ",(0,a.kt)("inlineCode",{parentName:"p"},"--location")," flag was not passed,\nsince there is no web-analogous location to base it onto."),(0,a.kt)("h3",{id:"worker-modules"},"Worker modules"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'// deno run --location https://example.com/index.html --allow-net main.ts\n\nconst worker = new Worker("./workers/hello.ts", { type: "module" });\n// Fetches worker module at "https://example.com/workers/hello.ts".\n')),(0,a.kt)("h2",{id:"only-use-if-necessary"},"Only use if necessary"),(0,a.kt)("p",null,"For the above use cases, it is preferable to pass URLs in full rather than\nrelying on ",(0,a.kt)("inlineCode",{parentName:"p"},"--location"),". You can manually base a relative URL using the ",(0,a.kt)("inlineCode",{parentName:"p"},"URL"),"\nconstructor if needed."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"--location")," flag is intended for those who have some specific purpose in\nmind for emulating a document location and are aware that this will only work at\napplication-level. However, you may also use it to silence errors from a\ndependency which is frivolously accessing the ",(0,a.kt)("inlineCode",{parentName:"p"},"location")," global."))}m.isMDXComponent=!0}}]);