"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[3850],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20647:(e,t,n)=>{n.d(t,{ZP:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={toc:[]},i="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(i,(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Deno KV is currently in beta",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Deno KV and related cloud primitive APIs like queues and cron are currently\n",(0,a.kt)("strong",{parentName:"p"},"experimental")," and ",(0,a.kt)("strong",{parentName:"p"},"subject to change"),". While we do our best to ensure data\ndurability, data loss is possible, especially around Deno updates."),(0,a.kt)("p",{parentName:"admonition"},"Deno programs that use KV require the ",(0,a.kt)("inlineCode",{parentName:"p"},"--unstable")," flag when launching the\nprogram, as shown below:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"deno run -A --unstable my_kv_code.ts\n"))))}s.isMDXComponent=!0},8982:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),o=n(20647);const i={},s="Key Expiration",p={unversionedId:"manual/key_expiration",id:"manual/key_expiration",title:"Key Expiration",description:"Since version 1.36.2, Deno KV supports key expiration. This allows an expiration",source:"@site/kv/manual/key_expiration.mdx",sourceDirName:"manual",slug:"/manual/key_expiration",permalink:"/deno-docs/kv/manual/key_expiration",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"kvGuideHome",previous:{title:"Operations",permalink:"/deno-docs/kv/manual/operations"},next:{title:"Secondary Indexes",permalink:"/deno-docs/kv/manual/secondary_indexes"}},l={},c=[{value:"Atomic expiration of multiple keys",id:"atomic-expiration-of-multiple-keys",level:2},{value:"Caveats",id:"caveats",level:2}],u={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"key-expiration"},"Key Expiration"),(0,a.kt)(o.ZP,{mdxType:"Admonition"}),(0,a.kt)("p",null,"Since version 1.36.2, Deno KV supports key expiration. This allows an expiration\ntimestamp to be associated with a key, after which the key will be automatically\ndeleted from the database:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const kv = await Deno.openKv();\n\n// `expireIn` is the number of milliseconds after which the key will expire.\nfunction addSession(session: Session, expireIn: number) {\n  await kv.set(["sessions", session.id], session, { expireIn });\n}\n')),(0,a.kt)("p",null,"Key expiration is supported on both Deno CLI and Deno Deploy."),(0,a.kt)("h2",{id:"atomic-expiration-of-multiple-keys"},"Atomic expiration of multiple keys"),(0,a.kt)("p",null,"If multiple keys are set in the same atomic operation and have the same\n",(0,a.kt)("inlineCode",{parentName:"p"},"expireIn")," value, the expiration of those keys will be atomic. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const kv = await Deno.openKv();\n\nfunction addUnverifiedUser(\n  user: User,\n  verificationToken: string,\n  expireIn: number,\n) {\n  await kv.atomic()\n    .set(["users", user.id], user, { expireIn })\n    .set(["verificationTokens", verificationToken], user.id, { expireIn })\n    .commit();\n}\n')),(0,a.kt)("h2",{id:"caveats"},"Caveats"),(0,a.kt)("p",null,"The expire timestamp specifies the ",(0,a.kt)("em",{parentName:"p"},"earliest")," time after which the key can be\ndeleted from the database. An implementation is allowed to expire a key at any\ntime after the specified timestamp, but not before. If you need to strictly\nenforce an expiration time (e.g. for security purposes), please also add it as a\nfield of your value and do a check after retrieving the value from the database."))}d.isMDXComponent=!0}}]);