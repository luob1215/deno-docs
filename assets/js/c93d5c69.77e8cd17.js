"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[621],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70682:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={},i="How to use React with Deno",s={unversionedId:"manual/node/how_to_with_npm/react",id:"manual/node/how_to_with_npm/react",title:"How to use React with Deno",description:"React is the most widely used JavaScript frontend",source:"@site/runtime/manual/node/how_to_with_npm/react.md",sourceDirName:"manual/node/how_to_with_npm",slug:"/manual/node/how_to_with_npm/react",permalink:"/deno-docs/runtime/manual/node/how_to_with_npm/react",draft:!1,tags:[],version:"current",frontMatter:{}},p={},l=[{value:"Create Vite Extra",id:"create-vite-extra",level:2},{value:"Add a backend",id:"add-a-backend",level:2},{value:"Add a router",id:"add-a-router",level:2},{value:"Add pages",id:"add-pages",level:2}],d={toc:l},u="wrapper";function c(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-use-react-with-deno"},"How to use React with Deno"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org"},"React")," is the most widely used JavaScript frontend\nframework. It popularized a declarative approach towards designing user\ninterfaces, with a reactive data model. Due to its popularity, it's not\nsurprising that it's the most requested framework when it comes to building web\napps with Deno."),(0,r.kt)("p",null,"This is a tutorial that walks you through building a simple React app with Deno\nin less than five minutes. The app will display a list of dinosaurs. When you\nclick on one, it'll take you to a dinosaur page with more details."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"demo of the app",src:n(36186).Z,width:"960",height:"770"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/denoland/examples/tree/main/with-react"},"View source")," or\n",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=eStwt_2THd8"},"follow the video guide"),"."),(0,r.kt)("h2",{id:"create-vite-extra"},"Create Vite Extra"),(0,r.kt)("p",null,"This tutorial will use ",(0,r.kt)("a",{parentName:"p",href:"https://vitejs.dev/"},"Vite")," to quickly scaffold a Deno\nand React app. Let's run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell,",metastring:"ignore",ignore:!0},"deno run --allow-env --allow-read --allow-write npm:create-vite-extra\n")),(0,r.kt)("p",null,'We\'ll name our project "dinosaur-react-app". Then, ',(0,r.kt)("inlineCode",{parentName:"p"},"cd")," into the newly created\nproject folder."),(0,r.kt)("h2",{id:"add-a-backend"},"Add a backend"),(0,r.kt)("p",null,"The next step is to add a backend API. We'll create a very simple API that\nreturns information about dinosaurs."),(0,r.kt)("p",null,"In the directory, let's create an ",(0,r.kt)("inlineCode",{parentName:"p"},"api")," folder. In that folder, we'll create a\n",(0,r.kt)("inlineCode",{parentName:"p"},"main.ts")," file, which will run the server, and a ",(0,r.kt)("inlineCode",{parentName:"p"},"data.json"),", which is the hard\ncoded data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell,",metastring:"ignore",ignore:!0},"mkdir api && touch api/data.json && touch api/main.ts\n")),(0,r.kt)("p",null,"Copy and paste\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/denoland/deno-vue-example/blob/main/api/data.json"},"this json file"),"\ninto your ",(0,r.kt)("inlineCode",{parentName:"p"},"api/data.json"),"."),(0,r.kt)("p",null,"Then, let's update ",(0,r.kt)("inlineCode",{parentName:"p"},"api/main.ts"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts,",metastring:"ignore",ignore:!0},'import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";\nimport { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";\nimport data from "./data.json" assert { type: "json" };\n\nconst router = new Router();\nrouter\n  .get("/", (context) => {\n    context.response.body = "Welcome to dinosaur API!";\n  })\n  .get("/api", (context) => {\n    context.response.body = data;\n  })\n  .get("/api/:dinosaur", (context) => {\n    if (context?.params?.dinosaur) {\n      const found = data.find((item) =>\n        item.name.toLowerCase() === context.params.dinosaur.toLowerCase()\n      );\n      if (found) {\n        context.response.body = found;\n      } else {\n        context.response.body = "No dinosaurs found.";\n      }\n    }\n  });\n\nconst app = new Application();\napp.use(oakCors()); // Enable CORS for All Routes\napp.use(router.routes());\napp.use(router.allowedMethods());\n\nawait app.listen({ port: 8000 });\n')),(0,r.kt)("p",null,"This is a very simple API server using ",(0,r.kt)("a",{parentName:"p",href:"https://deno.land/x/oak"},(0,r.kt)("inlineCode",{parentName:"a"},"oak"))," that\nwill return dinosaur information based on the route. Let's start the API server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell,",metastring:"ignore",ignore:!0},"deno run --allow-env --allow-net api/main.ts\n")),(0,r.kt)("p",null,"If we go to ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:8000"),", we see:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"json response of dinosaurs",src:n(54280).Z,width:"1072",height:"571"})),(0,r.kt)("p",null,"Lookin' good so far."),(0,r.kt)("h2",{id:"add-a-router"},"Add a router"),(0,r.kt)("p",null,"Our app will have two routes: ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"/:dinosaur"),"."),(0,r.kt)("p",null,"We'll use ",(0,r.kt)("a",{parentName:"p",href:"https://reactrouter.com/en/main"},(0,r.kt)("inlineCode",{parentName:"a"},"react-router-dom"))," for our routing\nlogic. Let's add that to our dependencies in ",(0,r.kt)("inlineCode",{parentName:"p"},"vite.config.mjs"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-mjs,",metastring:"ignore",ignore:!0},'import { defineConfig } from "npm:vite@^3.1.3";\nimport react from "npm:@vitejs/plugin-react@^2.1";\n\nimport "npm:react@^18.2";\nimport "npm:react-dom@^18.2/client";\nimport "npm:react-router-dom@^6.4"; // Add this line\n\n// https://vitejs.dev/config/\nexport default defineConfig({\n  plugins: [react()],\n});\n')),(0,r.kt)("p",null,"Once we add the dependencies there, we can import them without ",(0,r.kt)("inlineCode",{parentName:"p"},"npm:")," specifier\nthroughout our React app."),(0,r.kt)("p",null,"Next, let's go to ",(0,r.kt)("inlineCode",{parentName:"p"},"src/App.jsx")," and add our routing logic:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx,",metastring:"ignore",ignore:!0},'import React from "react";\nimport {\n  BrowserRouter as Router,\n  Navigate,\n  Route,\n  Routes,\n} from "react-router-dom";\nimport Index from "./pages/Index.jsx";\nimport Dinosaur from "./pages/Dinosaur.jsx";\n\nexport default function App(props) {\n  return (\n    <Router>\n      <Routes>\n        <Route exact path="/" element={<Index />} />\n        <Route exact path="/:dinosaur" element={<Dinosaur />} />\n        <Route path="*" element={<Navigate to="/" />} />\n      </Routes>\n    </Router>\n  );\n}\n')),(0,r.kt)("p",null,"Next, let's add the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Index>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"<Dinosaur>")," pages."),(0,r.kt)("h2",{id:"add-pages"},"Add pages"),(0,r.kt)("p",null,"There will be two pages in this app:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/pages/Index.jsx"),": our index page, which lists all of the dinosaurs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/pages/Dinosaur.jsx"),": our dinosaur page, which shows details of the\ndinosaur")),(0,r.kt)("p",null,"We'll create a ",(0,r.kt)("inlineCode",{parentName:"p"},"src/pages")," folder and create the ",(0,r.kt)("inlineCode",{parentName:"p"},".jsx")," files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell,",metastring:"ignore",ignore:!0},"mkdir src/pages && touch src/pages/Index.jsx src/pages/Dinosaur.jsx\n")),(0,r.kt)("p",null,"Let's start with ",(0,r.kt)("inlineCode",{parentName:"p"},"<Index>"),". This page will ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch")," at ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:8000/api")," and\nrender that through JSX."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx,",metastring:"ignore",ignore:!0},'import React, { useEffect, useState } from "react";\nimport { Link, useParams } from "react-router-dom";\n\nconst Index = () => {\n  const [dinos, setDinos] = useState([]);\n  useEffect(() => {\n    fetch(`http://localhost:8000/api/`)\n      .then(async (res) => await res.json())\n      .then((json) => setDinos(json));\n  }, []);\n\n  return (\n    <div>\n      <h1>Welcome to the Dinosaur app</h1>\n      <p>\n        Click on a dinosaur below to learn more.\n      </p>\n      <div>\n        {dinos.map((dino) => {\n          return (\n            <div>\n              <Link to={`/${dino.name.toLowerCase()}`}>{dino.name}</Link>\n            </div>\n          );\n        })}\n      </div>\n    </div>\n  );\n};\n\nexport default Index;\n')),(0,r.kt)("p",null,"Next, in ",(0,r.kt)("inlineCode",{parentName:"p"},"<Dinosaur>"),", we'll do the same except for\n",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:8000/api/${dinosaur}"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx,",metastring:"ignore",ignore:!0},'import React, { useEffect, useState } from "react";\nimport { Link, useParams } from "react-router-dom";\n\nconst Dinosaur = () => {\n  const { dinosaur } = useParams();\n  const [dino, setDino] = useState({});\n  useEffect(() => {\n    fetch(`http://localhost:8000/api/${dinosaur}`)\n      .then(async (res) => await res.json())\n      .then((json) => setDino(json));\n  }, []);\n\n  return (\n    <div>\n      <h1>{dino.name}</h1>\n      <p>\n        {dino.description}\n      </p>\n      <Link to="/">See all</Link>\n    </div>\n  );\n};\n\nexport default Dinosaur;\n')),(0,r.kt)("p",null,"Let's start the React app:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"deno task start\n")),(0,r.kt)("p",null,"And click through the app:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"demo of the app",src:n(36186).Z,width:"960",height:"770"})),(0,r.kt)("p",null,"Huzzah!"))}c.isMDXComponent=!0},54280:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dinosaur-api-55fa3c52ba37583dba5b513aa6d3e6b8.png"},36186:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/react-dinosaur-app-demo-57edc99edd80a5573d71fe81d9e4187c.gif"}}]);