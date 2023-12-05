"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[3770],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19182:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={},i="Using React with Deno",s={unversionedId:"manual/basics/react",id:"manual/basics/react",title:"Using React with Deno",description:"To use React with Deno, we recommend using one of the third-party frameworks",source:"@site/runtime/manual/basics/react.md",sourceDirName:"manual/basics",slug:"/manual/basics/react",permalink:"/deno-docs/runtime/manual/basics/react",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"runtimeGuideHome",previous:{title:"Connecting to databases",permalink:"/deno-docs/runtime/manual/basics/connecting_to_databases"},next:{title:"ECMAScript Modules in Deno",permalink:"/deno-docs/runtime/manual/basics/modules/"}},c={},l=[{value:"Fresh",id:"fresh",level:2},{value:"Aleph",id:"aleph",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-react-with-deno"},"Using React with Deno"),(0,o.kt)("p",null,"To use React with Deno, we recommend using one of the third-party frameworks\nbelow."),(0,o.kt)("p",null,"If you want to better understand how JSX and Deno interface under the hood, read\non ",(0,o.kt)("a",{parentName:"p",href:"../advanced/jsx_dom"},"here"),"."),(0,o.kt)("p",null,"Note: Fresh and Aleph.js provide a framework for developing React-like websites.\nHowever, Fresh uses an alternative foundational technology, Preact to provide a\nbetter, more performant experience."),(0,o.kt)("h2",{id:"fresh"},"Fresh"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://fresh.deno.dev/"},"Fresh")," is the most popular React framework for Deno.\nIt uses a model where you send no JavaScript to clients by default. The majority\nof rendering is done on a server, and the client is only responsible for\nre-rendering small\n",(0,o.kt)("a",{parentName:"p",href:"https://jasonformat.com/islands-architecture/"},"islands of interactivity"),". This\nmeans the developer explicitly opts in to client side rendering for specific\ncomponents."),(0,o.kt)("h2",{id:"aleph"},"Aleph"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://alephjs.org/docs/get-started"},"Aleph.js")," is the second most popular\nReact framework for Deno. It gives you the same sort of quick-start with React\nas Create-React-App. Like Next.js, Aleph provides SSR and SSG out of the box in\norder to allow developers to create SEO-friendly apps. In addition, Aleph\nprovides some other built-in features that don't come out of the box in Next.js,\nsuch as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Hot Reloading (Using React Fast Refresh)"),(0,o.kt)("li",{parentName:"ul"},"ESM Import Syntax (No need for webpack)"),(0,o.kt)("li",{parentName:"ul"},"TypeScript-Ready")))}d.isMDXComponent=!0}}]);