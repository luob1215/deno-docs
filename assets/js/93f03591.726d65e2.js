"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[5798],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),l=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(i.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=r,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return t?o.createElement(f,c(c({ref:n},p),{},{components:t})):o.createElement(f,c({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[d]="string"==typeof e?e:r,c[1]=s;for(var l=2;l<a;l++)c[l]=t[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},61683:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=t(87462),r=(t(67294),t(3905));const a={},c="TCP sockets and TLS",s={unversionedId:"api/runtime-sockets",id:"api/runtime-sockets",title:"TCP sockets and TLS",description:"Deno Deploy supports outbound TCP and TLS connections. These APIs allow you to",source:"@site/deploy/api/runtime-sockets.md",sourceDirName:"api",slug:"/api/runtime-sockets",permalink:"/deno-docs/deploy/api/runtime-sockets",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"deployAPIHome",previous:{title:"Compressing response bodies",permalink:"/deno-docs/deploy/api/compression"},next:{title:"BroadcastChannel",permalink:"/deno-docs/deploy/api/runtime-broadcast-channel"}},i={},l=[{value:"<code>Deno.connect</code>",id:"denoconnect",level:2},{value:"Example",id:"example",level:3},{value:"<code>Deno.connectTls</code>",id:"denoconnecttls",level:2},{value:"Example",id:"example-1",level:3}],p={toc:l},d="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tcp-sockets-and-tls"},"TCP sockets and TLS"),(0,r.kt)("p",null,"Deno Deploy supports outbound TCP and TLS connections. These APIs allow you to\nuse databases like PostgreSQL, SQLite, MongoDB, etc., with Deploy."),(0,r.kt)("h2",{id:"denoconnect"},(0,r.kt)("inlineCode",{parentName:"h2"},"Deno.connect")),(0,r.kt)("p",null,"Make outbound TCP connections."),(0,r.kt)("p",null,"The function definition is same as\n",(0,r.kt)("a",{parentName:"p",href:"https://doc.deno.land/deno/stable/~/Deno.connect"},"Deno")," with the limitation\nthat ",(0,r.kt)("inlineCode",{parentName:"p"},"transport")," option can only be ",(0,r.kt)("inlineCode",{parentName:"p"},"tcp")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"hostname")," cannot be localhost or\nempty."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function Deno.connect(options: ConnectOptions): Promise<Conn>\n")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { serve } from "https://deno.land/std@0.208.0/http/server.ts";\n\nasync function handler(_req) {\n  // Make a TCP connection to example.com\n  const connection = await Deno.connect({\n    port: 80,\n    hostname: "example.com",\n  });\n\n  // Send raw HTTP GET request.\n  const request = new TextEncoder().encode(\n    "GET / HTTP/1.1\\nHost: example.com\\r\\n\\r\\n",\n  );\n  const _bytesWritten = await connection.write(request);\n\n  // Read 15 bytes from the connection.\n  const buffer = new Uint8Array(15);\n  await connection.read(buffer);\n  connection.close();\n\n  // Return the bytes as plain text.\n  return new Response(buffer, {\n    headers: {\n      "content-type": "text/plain;charset=utf-8",\n    },\n  });\n}\n\nserve(handler);\n')),(0,r.kt)("h2",{id:"denoconnecttls"},(0,r.kt)("inlineCode",{parentName:"h2"},"Deno.connectTls")),(0,r.kt)("p",null,"Make outbound TLS connections."),(0,r.kt)("p",null,"The function definition is the same as\n",(0,r.kt)("a",{parentName:"p",href:"https://doc.deno.land/deno/stable/~/Deno.connectTls"},"Deno")," with the limitation\nthat hostname cannot be localhost or empty."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function Deno.connectTls(options: ConnectTlsOptions): Promise<Conn>\n")),(0,r.kt)("h3",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { serve } from "https://deno.land/std@0.208.0/http/server.ts";\n\nasync function handler(_req) {\n  // Make a TLS connection to example.com\n  const connection = await Deno.connectTls({\n    port: 443,\n    hostname: "example.com",\n  });\n\n  // Send raw HTTP GET request.\n  const request = new TextEncoder().encode(\n    "GET / HTTP/1.1\\nHost: example.com\\r\\n\\r\\n",\n  );\n  const _bytesWritten = await connection.write(request);\n\n  // Read 15 bytes from the connection.\n  const buffer = new Uint8Array(15);\n  await connection.read(buffer);\n  connection.close();\n\n  // Return the bytes as plain text.\n  return new Response(buffer, {\n    headers: {\n      "content-type": "text/plain;charset=utf-8",\n    },\n  });\n}\n\nserve(handler);\n')))}u.isMDXComponent=!0}}]);