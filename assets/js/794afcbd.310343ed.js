"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[6615],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47378:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={},i="HTTP requests (fetch)",s={unversionedId:"api/runtime-fetch",id:"api/runtime-fetch",title:"HTTP requests (fetch)",description:"The Fetch API",source:"@site/deploy/api/runtime-fetch.md",sourceDirName:"api",slug:"/api/runtime-fetch",permalink:"/deploy/api/runtime-fetch",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"deployAPIHome",previous:{title:"BroadcastChannel",permalink:"/deploy/api/runtime-broadcast-channel"},next:{title:"HTTP Request",permalink:"/deploy/api/runtime-request"}},l={},p=[{value:"<code>fetch()</code>",id:"fetch",level:2},{value:"Parameters",id:"parameters",level:4},{value:"Examples",id:"examples",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"http-requests-fetch"},"HTTP requests (fetch)"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},"Fetch API"),"\nallows you to make outbound HTTP requests in Deno Deploy. It is a web standard\nand has the following interfaces:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fetch()")," - The method that allows you to make outbound HTTP requests"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./runtime-request"},(0,a.kt)("inlineCode",{parentName:"a"},"Request"))," - represents a request resource of fetch()"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./runtime-response"},(0,a.kt)("inlineCode",{parentName:"a"},"Response"))," - represents a response resource of fetch()"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./runtime-headers"},(0,a.kt)("inlineCode",{parentName:"a"},"Headers"))," - represents HTTP Headers of requests and\nresponses.")),(0,a.kt)("p",null,"This page shows usage for the fetch() method. You can click above on the other\ninterfaces to learn more about them."),(0,a.kt)("p",null,"Fetch also supports fetching from file URLs to retrieve static files. For more\ninfo on static files, see the ",(0,a.kt)("a",{parentName:"p",href:"./runtime-fs"},"filesystem API documentation"),"."),(0,a.kt)("h2",{id:"fetch"},(0,a.kt)("inlineCode",{parentName:"h2"},"fetch()")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch()")," method initiates a network request to the provided resource and\nreturns a promise that resolves after the response is available."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function fetch(\n  resource: Request | string,\n  init?: RequestInit,\n): Promise<Response>;\n")),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"optional"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"resource"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"./runtime-request"},(0,a.kt)("inlineCode",{parentName:"a"},"Request"))," ",(0,a.kt)("br",null)," ",(0,a.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/USVString"},(0,a.kt)("inlineCode",{parentName:"a"},"USVString"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",{parentName:"tr",align:null},"The resource can either be a request object or a URL string.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"init"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"./runtime-request#requestinit"},(0,a.kt)("inlineCode",{parentName:"a"},"RequestInit"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:null},"The init object lets you apply optional parameters to the request.")))),(0,a.kt)("p",null,"The return type of ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch()")," is a promise that resolves to a\n",(0,a.kt)("a",{parentName:"p",href:"./runtime-response"},(0,a.kt)("inlineCode",{parentName:"a"},"Response")),"."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"The Deno Deploy script below makes a ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch()")," request to the GitHub API for\neach incoming request, and then returns that response from the handler function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { serve } from "https://deno.land/std@0.208.0/http/server.ts";\n\nasync function handler(req: Request): Promise<Response> {\n  const resp = await fetch("https://api.github.com/users/denoland", {\n    // The init object here has an headers object containing a\n    // header that indicates what type of response we accept.\n    // We\'re not specifying the method field since by default\n    // fetch makes a GET request.\n    headers: {\n      accept: "application/json",\n    },\n  });\n  return new Response(resp.body, {\n    status: resp.status,\n    headers: {\n      "content-type": "application/json",\n    },\n  });\n}\n\nserve(handler);\n')))}m.isMDXComponent=!0}}]);