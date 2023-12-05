"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[2735],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),c=a,h=d["".concat(l,".").concat(c)]||d[c]||m[c]||o;return t?r.createElement(h,i(i({ref:n},u),{},{components:t})):r.createElement(h,i({ref:n},u))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},29864:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={},i="How to use Apollo with Deno",s={unversionedId:"manual/node/how_to_with_npm/apollo",id:"manual/node/how_to_with_npm/apollo",title:"How to use Apollo with Deno",description:"Apollo Server is a GraphQL server that you can",source:"@site/runtime/manual/node/how_to_with_npm/apollo.md",sourceDirName:"manual/node/how_to_with_npm",slug:"/manual/node/how_to_with_npm/apollo",permalink:"/runtime/manual/node/how_to_with_npm/apollo",draft:!1,tags:[],version:"current",frontMatter:{}},l={},p=[{value:"schema.ts",id:"schemats",level:2},{value:"resolvers.ts",id:"resolversts",level:2},{value:"main.ts",id:"maints",level:2},{value:"Running the server",id:"running-the-server",level:2}],u={toc:p},d="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-use-apollo-with-deno"},"How to use Apollo with Deno"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.apollographql.com/"},"Apollo Server")," is a GraphQL server that you can\nset up in minutes and use with your existing data source (or REST API). You can\nthen connect any GraphQL client to it to receive the data and take advantage of\nGraphQL benefits, such as type-checking and efficient fetching."),(0,a.kt)("p",null,"We're going to get a simple Apollo server up and running that will allow us to\nquery some local data. We're only going to need three files for this:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"schema.ts")," to set up our data model"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"resolvers.ts")," to set up how we're going to populate the data fields in our\nschema"),(0,a.kt)("li",{parentName:"ol"},"Our ",(0,a.kt)("inlineCode",{parentName:"li"},"main.ts")," where the server is going to launch")),(0,a.kt)("p",null,"We'll start by creating them:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell,",metastring:"ignore",ignore:!0},"touch schema.ts resolvers.ts main.ts\n")),(0,a.kt)("p",null,"Let's go through setting up each."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/denoland/examples/tree/main/with-apollo"},"View source here.")),(0,a.kt)("h2",{id:"schemats"},"schema.ts"),(0,a.kt)("p",null,"Our ",(0,a.kt)("inlineCode",{parentName:"p"},"schema.ts")," file describes our data. In this case, our data is a list of\ndinosaurs. We want our users to be able to get the name and a short description\nof each dino. In GraphQL language, this means that ",(0,a.kt)("inlineCode",{parentName:"p"},"Dinosaur")," is our ",(0,a.kt)("strong",{parentName:"p"},"type"),",\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"description")," are our ",(0,a.kt)("strong",{parentName:"p"},"fields"),". We can also define the data\ntype for each field. In this case, both are strings."),(0,a.kt)("p",null,"This is also where we describe the queries we allow for our data, using the\nspecial ",(0,a.kt)("strong",{parentName:"p"},"Query")," type in GraphQL. We have two queries:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dinosaurs")," which gets a list of all dinosaurs"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dinosaur")," which takes in the ",(0,a.kt)("inlineCode",{parentName:"li"},"name")," of a dinosaur as an argument and returns\ninformation about that one type of dinosaur.")),(0,a.kt)("p",null,"We're going to export all this within our ",(0,a.kt)("inlineCode",{parentName:"p"},"typeDefs")," type definitions, variable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx,",metastring:"ignore",ignore:!0},"export const typeDefs = `\n  type Dinosaur {\n    name: String\n    description: String\n  }\n\n  type Query {\n    dinosaurs: [Dinosaur]\n        dinosaur(name: String): Dinosaur\n  }\n`;\n")),(0,a.kt)("p",null,"If we wanted to write data, this is also where we would describe the\n",(0,a.kt)("strong",{parentName:"p"},"Mutation")," to do so. Mutations are how you write data with GraphQL. Because we\nare using a static dataset here, we won't be writing anything."),(0,a.kt)("h2",{id:"resolversts"},"resolvers.ts"),(0,a.kt)("p",null,"A resolver is responsible for populating the data for each query. Here we have\nour list of dinosaurs and all the resolver is going to do is either a) pass that\nentire list to the client if the user requests the ",(0,a.kt)("inlineCode",{parentName:"p"},"dinosaurs")," query, or pass\njust one if the user requests the ",(0,a.kt)("inlineCode",{parentName:"p"},"dinosaur")," query."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx,",metastring:"ignore",ignore:!0},'const dinosaurs = [\n  {\n    name: "Aardonyx",\n    description: "An early stage in the evolution of sauropods.",\n  },\n  {\n    name: "Abelisaurus",\n    description: \'"Abel\\\'s lizard" has been reconstructed from a single skull.\',\n  },\n];\n\nexport const resolvers = {\n  Query: {\n    dinosaurs: () => dinosaurs,\n    dinosaur: (_: any, args: any) => {\n      return dinosaurs.find((dinosaur) => dinosaur.name === args.name);\n    },\n  },\n};\n')),(0,a.kt)("p",null,"With the latter, we pass the arguments from the client into a function to match\nthe name to a name in our dataset."),(0,a.kt)("h2",{id:"maints"},"main.ts"),(0,a.kt)("p",null,"In our ",(0,a.kt)("inlineCode",{parentName:"p"},"main.ts")," we're going to import the ",(0,a.kt)("inlineCode",{parentName:"p"},"ApolloServer")," as well as ",(0,a.kt)("inlineCode",{parentName:"p"},"graphql"),"\nand our ",(0,a.kt)("inlineCode",{parentName:"p"},"typeDefs")," from the schema and our resolvers:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx,",metastring:"ignore",ignore:!0},'import { ApolloServer } from "npm:@apollo/server@^4.1";\nimport { startStandaloneServer } from "npm:@apollo/server@4.1/standalone";\nimport { graphql } from "npm:graphql@16.6";\nimport { typeDefs } from "./schema.ts";\nimport { resolvers } from "./resolvers.ts";\n\nconst server = new ApolloServer({\n  typeDefs,\n  resolvers,\n});\n\nconst { url } = await startStandaloneServer(server, {\n  listen: { port: 8000 },\n});\n\nconsole.log(`Server running on: ${url}`);\n')),(0,a.kt)("p",null,"We pass our ",(0,a.kt)("inlineCode",{parentName:"p"},"typeDefs")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"resolvers")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"ApolloServer")," to spool up a new\nserver. Finally, ",(0,a.kt)("inlineCode",{parentName:"p"},"startStandaloneServer")," is a helper function to get the server\nup and running quickly."),(0,a.kt)("h2",{id:"running-the-server"},"Running the server"),(0,a.kt)("p",null,"All that is left to do now is run the server:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell,",metastring:"ignore",ignore:!0},"deno run --allow-net --allow-read --allow-env main.ts\n")),(0,a.kt)("p",null,"You should see ",(0,a.kt)("inlineCode",{parentName:"p"},"Server running on: 127.0.0.1:8000")," in your terminal. If you go\nto that address you will see the Apollo sandbox where we can enter our\n",(0,a.kt)("inlineCode",{parentName:"p"},"dinosaurs")," query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql,",metastring:"ignore",ignore:!0},"query {\n  dinosaurs {\n    name\n    description\n  }\n}\n")),(0,a.kt)("p",null,"This will return our dataset:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  "data": {\n    "dinosaurs": [\n      {\n        "name": "Aardonyx",\n        "description": "An early stage in the evolution of sauropods."\n      },\n      {\n        "name": "Abelisaurus",\n        "description": "\\"Abel\'s lizard\\" has been reconstructed from a single skull."\n      }\n    ]\n  }\n}\n')),(0,a.kt)("p",null,"Or if we want just one ",(0,a.kt)("inlineCode",{parentName:"p"},"dinosaur"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql,",metastring:"ignore",ignore:!0},'query {\n  dinosaur(name:"Aardonyx") {\n    name\n    description\n  }\n}\n')),(0,a.kt)("p",null,"Which returns:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql,",metastring:"ignore",ignore:!0},'{\n  "data": {\n    "dinosaur": {\n      "name": "Aardonyx",\n      "description": "An early stage in the evolution of sauropods."\n    }\n  }\n}\n')),(0,a.kt)("p",null,"Awesome!"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.apollographql.com/tutorials/"},"Learn more about using Apollo and GraphQL in their tutorials"),"."))}m.isMDXComponent=!0}}]);