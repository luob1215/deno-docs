"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[8],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(g,l(l({ref:t},s),{},{components:n})):o.createElement(g,l({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52545:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={},l="Application logging",i={unversionedId:"manual/logs",id:"manual/logs",title:"Application logging",description:"Applications can generate logs at runtime using the console API, with methods",source:"@site/deploy/manual/logs.md",sourceDirName:"manual",slug:"/manual/logs",permalink:"/deno-docs/deploy/manual/logs",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"deployGuideHome",previous:{title:"Organizations",permalink:"/deno-docs/deploy/manual/organizations"},next:{title:"Connect to DynamoDB",permalink:"/deno-docs/deploy/manual/dynamodb"}},p={},c=[],s={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"application-logging"},"Application logging"),(0,r.kt)("p",null,"Applications can generate logs at runtime using the console API, with methods\nsuch as ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"console.error"),", etc. These logs can be viewed in real\ntime by either:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigating to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Logs")," panel of a project or deployment."),(0,r.kt)("li",{parentName:"ul"},"Using the ",(0,r.kt)("inlineCode",{parentName:"li"},"logs")," subcommand in\n",(0,r.kt)("a",{parentName:"li",href:"https://docs.deno.com/deploy/manual/deployctl"},"deployctl"),".")),(0,r.kt)("p",null,"Logs will be streamed directly from the application to the log panel or\ndisplayed in ",(0,r.kt)("inlineCode",{parentName:"p"},"deployctl logs"),"."),(0,r.kt)("p",null,"In addition to real-time logs, logs are also retained for a certain duration,\nwhich depends on the subscription plan you are on. To view persisted logs, you\ncan:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you are using the log panel in your browser, switch from ",(0,r.kt)("inlineCode",{parentName:"li"},"Live")," to either\n",(0,r.kt)("inlineCode",{parentName:"li"},"Recent")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Custom")," in the dropdown menu next to the search box."),(0,r.kt)("li",{parentName:"ul"},"If you prefer the command line, add ",(0,r.kt)("inlineCode",{parentName:"li"},"--since=<DATETIME>")," and/or\n",(0,r.kt)("inlineCode",{parentName:"li"},"--until=<DATETIME>")," to your ",(0,r.kt)("inlineCode",{parentName:"li"},"deployctl logs")," command. For more details,\nconsult ",(0,r.kt)("inlineCode",{parentName:"li"},"deployctl logs --help"),".")),(0,r.kt)("p",null,"Logs older than the retention period are automatically deleted from the system."),(0,r.kt)("p",null,"Log messages have a maximum size of 2KB. Messages larger than this limit are\ntrimmed to 2KB."))}d.isMDXComponent=!0}}]);