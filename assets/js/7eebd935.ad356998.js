"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[9594],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68412:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={},l="TCP echo Server",i={unversionedId:"tutorials/tcp_echo",id:"tutorials/tcp_echo",title:"TCP echo Server",description:"Concepts",source:"@site/runtime/tutorials/tcp_echo.md",sourceDirName:"tutorials",slug:"/tutorials/tcp_echo",permalink:"/deno-docs/runtime/tutorials/tcp_echo",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"runtimeTutorialsHome",previous:{title:"File Server",permalink:"/deno-docs/runtime/tutorials/file_server"},next:{title:"Creating a Subprocess",permalink:"/deno-docs/runtime/tutorials/subprocess"}},c={},s=[{value:"Concepts",id:"concepts",level:2},{value:"Example",id:"example",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tcp-echo-server"},"TCP echo Server"),(0,o.kt)("h2",{id:"concepts"},"Concepts"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Listening for TCP port connections with\n",(0,o.kt)("a",{parentName:"li",href:"https://deno.land/api?s=Deno.listen"},"Deno.listen"),"."),(0,o.kt)("li",{parentName:"ul"},"Use ",(0,o.kt)("a",{parentName:"li",href:"https://deno.land/api?s=Deno.Conn#prop_readable"},"Deno.Conn.readable")," and\n",(0,o.kt)("a",{parentName:"li",href:"https://deno.land/api?s=Deno.Conn#prop_writable"},"Deno.Conn.writable")," to take\ninbound data and redirect it to be outbound data.")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"This is an example of a server which accepts connections on port 8080, and\nreturns to the client anything it sends."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'/**\n * echo_server.ts\n */\nconst listener = Deno.listen({ port: 8080 });\nconsole.log("listening on 0.0.0.0:8080");\nfor await (const conn of listener) {\n  conn.readable.pipeTo(conn.writable);\n}\n')),(0,o.kt)("p",null,"Run with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"deno run --allow-net echo_server.ts\n")),(0,o.kt)("p",null,"To test it, try sending data to it with\n",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Netcat"},"netcat")," (Linux/MacOS only). Below\n",(0,o.kt)("inlineCode",{parentName:"p"},"'hello world'")," is sent over the connection, which is then echoed back to the\nuser:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ nc localhost 8080\nhello world\nhello world\n")),(0,o.kt)("p",null,"Like the ",(0,o.kt)("a",{parentName:"p",href:"/deno-docs/runtime/tutorials/unix_cat"},"cat.ts example"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"pipeTo()")," method here also does\nnot make unnecessary memory copies. It receives a packet from the kernel and\nsends back, without further complexity."))}d.isMDXComponent=!0}}]);