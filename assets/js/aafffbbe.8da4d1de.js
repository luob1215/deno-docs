"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[8410],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(a),d=r,m=p["".concat(u,".").concat(d)]||p[d]||h[d]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},65131:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={},i="Deno KV Tutorials & Examples",l={unversionedId:"tutorials/index",id:"tutorials/index",title:"Deno KV Tutorials & Examples",description:"Check out these examples showing real-world usage of Deno KV.",source:"@site/kv/tutorials/index.md",sourceDirName:"tutorials",slug:"/tutorials/",permalink:"/kv/tutorials/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"kvTutorialsHome",next:{title:"Schedule a notification for a future date",permalink:"/kv/tutorials/schedule_notification"}},u={},s=[{value:"Use queues to process incoming webhooks",id:"use-queues-to-process-incoming-webhooks",level:2},{value:"Use queues to schedule a future notification",id:"use-queues-to-schedule-a-future-notification",level:2},{value:"CRUD in Deno KV - TODO List",id:"crud-in-deno-kv---todo-list",level:2},{value:"Deno SaaSKit",id:"deno-saaskit",level:2},{value:"Multi-player Tic-Tac-Toe",id:"multi-player-tic-tac-toe",level:2},{value:"Multi-user pixel art drawing",id:"multi-user-pixel-art-drawing",level:2},{value:"GitHub authentication and KV",id:"github-authentication-and-kv",level:2},{value:"Deno KV oAuth 2",id:"deno-kv-oauth-2",level:2}],c={toc:s},p="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deno-kv-tutorials--examples"},"Deno KV Tutorials & Examples"),(0,r.kt)("p",null,"Check out these examples showing real-world usage of Deno KV."),(0,r.kt)("h2",{id:"use-queues-to-process-incoming-webhooks"},"Use queues to process incoming webhooks"),(0,r.kt)("p",null,"Follow ",(0,r.kt)("a",{parentName:"p",href:"/kv/tutorials/webhook_processor"},"this tutorial")," to learn how to use queues to\noffload tasks to a background process, so your web app can remain responsive.\nThis example shows how to enqueue tasks that handle incoming webhook requests\nfrom ",(0,r.kt)("a",{parentName:"p",href:"https://www.github.com"},"GitHub"),"."),(0,r.kt)("h2",{id:"use-queues-to-schedule-a-future-notification"},"Use queues to schedule a future notification"),(0,r.kt)("p",null,"Follow ",(0,r.kt)("a",{parentName:"p",href:"/kv/tutorials/schedule_notification"},"this tutorial")," to learn how to schedule code\nto execute at some time in the future using queues. This example shows how to\nschedule a notification with ",(0,r.kt)("a",{parentName:"p",href:"https://www.courier.com/"},"Courier"),"."),(0,r.kt)("h2",{id:"crud-in-deno-kv---todo-list"},"CRUD in Deno KV - TODO List"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Zod schema validation"),(0,r.kt)("li",{parentName:"ul"},"Built using Fresh"),(0,r.kt)("li",{parentName:"ul"},"Real-time collaboration using BroadcastChannel"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/denoland/showcase_todo"},"Source code")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://showcase-todo.deno.dev/"},"Live preview"))),(0,r.kt)("h2",{id:"deno-saaskit"},"Deno SaaSKit"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Modern SaaS template built on Fresh."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.producthunt.com/"},"Product Hunt"),"-like template entirely built on\nKV."),(0,r.kt)("li",{parentName:"ul"},"Uses Deno KV OAuth for GitHub OAuth 2.0 authentication"),(0,r.kt)("li",{parentName:"ul"},"Use to launch your next app project faster"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/denoland/saaskit"},"Source code")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://hunt.deno.land/"},"Live preview"))),(0,r.kt)("h2",{id:"multi-player-tic-tac-toe"},"Multi-player Tic-Tac-Toe"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GitHub authentication"),(0,r.kt)("li",{parentName:"ul"},"Saved user state"),(0,r.kt)("li",{parentName:"ul"},"Real-time sync using BroadcastChannel"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/denoland/tic-tac-toe"},"Source code")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://tic-tac-toe-game.deno.dev/"},"Live preview"))),(0,r.kt)("h2",{id:"multi-user-pixel-art-drawing"},"Multi-user pixel art drawing"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Persistent canvas state"),(0,r.kt)("li",{parentName:"ul"},"Multi-user collaboration"),(0,r.kt)("li",{parentName:"ul"},"Real-time sync using BroadcastChannel"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/denoland/pixelpage"},"Source code")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pixelpage.deno.dev/"},"Live preview"))),(0,r.kt)("h2",{id:"github-authentication-and-kv"},"GitHub authentication and KV"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Stores drawings in KV"),(0,r.kt)("li",{parentName:"ul"},"GitHub authentication"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/hashrock/kv-sketchbook"},"Source code")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://hashrock-kv-sketchbook.deno.dev/"},"Live preview"))),(0,r.kt)("h2",{id:"deno-kv-oauth-2"},"Deno KV oAuth 2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"High-level OAuth 2.0 powered by Deno KV"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/denoland/deno_kv_oauth"},"Source code")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kv-oauth.deno.dev/"},"Live preview"))))}h.isMDXComponent=!0}}]);