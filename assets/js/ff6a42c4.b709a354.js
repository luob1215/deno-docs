"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[4706],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(n),m=o,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||r;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84058:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={},l="Connect to FaunaDB",i={unversionedId:"manual/faunadb",id:"manual/faunadb",title:"Connect to FaunaDB",description:'FaunaDB calls itself "the data API for modern applications." It\'s a database',source:"@site/deploy/manual/faunadb.md",sourceDirName:"manual",slug:"/manual/faunadb",permalink:"/deploy/manual/faunadb",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"deployGuideHome",previous:{title:"Connect to DynamoDB",permalink:"/deploy/manual/dynamodb"},next:{title:"Connect to Firebase",permalink:"/deploy/manual/firebase"}},p={},c=[{value:"Get credentials from Fauna",id:"get-credentials-from-fauna",level:2},{value:"Create a project in Deno Deploy",id:"create-a-project-in-deno-deploy",level:2},{value:"Write code that connects to Fauna",id:"write-code-that-connects-to-fauna",level:2},{value:"Deploy application to Deno Deploy",id:"deploy-application-to-deno-deploy",level:2}],u={toc:c},s="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connect-to-faunadb"},"Connect to FaunaDB"),(0,o.kt)("p",null,"FaunaDB calls itself \"the data API for modern applications.\" It's a database\nwith a GraphQL interface that enables you to use GraphQL to interact with it.\nSince you communicate with it using HTTP requests, you don't need to manage\nconnections, which works well for serverless applications."),(0,o.kt)("p",null,"This tutorial covers how to connect to a Fauna database from an application\ndeployed on Deno Deploy."),(0,o.kt)("p",null,"You can find a more comprehensive tutorial that builds a sample application on\ntop of Fauna ",(0,o.kt)("a",{parentName:"p",href:"../tutorials/tutorial-faunadb"},"here"),"."),(0,o.kt)("h2",{id:"get-credentials-from-fauna"},"Get credentials from Fauna"),(0,o.kt)("p",null,"We assume that you've already created a Fauna instance at\n",(0,o.kt)("a",{parentName:"p",href:"https://dashboard.fauna.com"},"https://dashboard.fauna.com"),"."),(0,o.kt)("p",null,"To access your Fauna database programmatically, you'll need to generate a\ncredential:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("strong",{parentName:"p"},"Security")," section inside your particular database and click on\n",(0,o.kt)("strong",{parentName:"p"},"New Key"),". ",(0,o.kt)("img",{alt:"fauna1",src:n(59286).Z,width:"907",height:"527"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"Server")," role and click on ",(0,o.kt)("strong",{parentName:"p"},"Save"),". Copy the secret. You'll need it\nfor the next step."))),(0,o.kt)("h2",{id:"create-a-project-in-deno-deploy"},"Create a project in Deno Deploy"),(0,o.kt)("p",null,"Next, let's create a project on Deno Deploy and set it up with the requisite\nenvironment variables:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("a",{parentName:"li",href:"https://dash.deno.com/new"},"https://dash.deno.com/new")," (Sign in with\nGitHub if you didn't already) and click on ",(0,o.kt)("strong",{parentName:"li"},"+ Empty Project")," under ",(0,o.kt)("strong",{parentName:"li"},"Deploy\nfrom the command line"),"."),(0,o.kt)("li",{parentName:"ol"},"Now click on the ",(0,o.kt)("strong",{parentName:"li"},"Settings")," button available on the project page."),(0,o.kt)("li",{parentName:"ol"},"Navigate to the ",(0,o.kt)("strong",{parentName:"li"},"Environment Variables")," section and add the following\nsecrets.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"FAUNA_SECRET")," - The value should be the secret we created in the previous\nstep. ",(0,o.kt)("img",{alt:"fauna2",src:n(30979).Z,width:"720",height:"567"}))),(0,o.kt)("h2",{id:"write-code-that-connects-to-fauna"},"Write code that connects to Fauna"),(0,o.kt)("p",null,"While with Node there is a Fauna JavaScript driver, with Deno, you should use\nthe graphql endpoint."),(0,o.kt)("p",null,"Fauna has a graphql endpoint for its database, and it generates essential\nmutations like ",(0,o.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"update"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"delete")," for a data type defined in the\nschema. For example, Fauna will generate a mutation named ",(0,o.kt)("inlineCode",{parentName:"p"},"createQuote")," to\ncreate a new quote in the database for the data type ",(0,o.kt)("inlineCode",{parentName:"p"},"Quote"),"."),(0,o.kt)("p",null,"To interact with Fauna, we need to make a POST request to its graphql endpoint\nwith appropriate query and parameters to get the data in return. So let's\nconstruct a generic function that will handle those things."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import query from "https://esm.sh/faunadb@4.7.1";\nimport Client from "https://esm.sh/faunadb@4.7.1";\n\n// Grab the secret from the environment.\nconst token = Deno.env.get("FAUNA_SECRET");\nif (!token) {\n  throw new Error("environment variable FAUNA_SECRET not set");\n}\n\nvar client = new Client.Client({\n  secret: token,\n  // Adjust the endpoint if you are using Region Groups\n  endpoint: "https://db.fauna.com/",\n});\n// HEAD\nclient.query(query.ToDate("2018-06-06"));\n//\nclient\n  .query(query.ToDate("2018-06-06"))\n  //1e2f378 (Add some more pages)\n  .then(function (res) {\n    console.log("Result:", res);\n  })\n  .catch(function (err) {\n    console.log("Error:", err);\n  });\n')),(0,o.kt)("h2",{id:"deploy-application-to-deno-deploy"},"Deploy application to Deno Deploy"),(0,o.kt)("p",null,"Once you have finished writing your application, you can deploy it on Deno\nDeploy."),(0,o.kt)("p",null,"To do this, go back to your project page at\n",(0,o.kt)("inlineCode",{parentName:"p"},"https://dash.deno.com/projects/<project-name>"),"."),(0,o.kt)("p",null,"You should see a couple options to deploy:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"ci_github"},"Github integration")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"deployctl"},(0,o.kt)("inlineCode",{parentName:"a"},"deployctl")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"deployctl deploy --project=<project-name> <application-file-name>\n")))),(0,o.kt)("p",null,"Unless you want to add a build step, we recommend that you select the Github\nintegration."),(0,o.kt)("p",null,"For more details on the different ways to deploy on Deno Deploy and the\ndifferent configuration options, read ",(0,o.kt)("a",{parentName:"p",href:"how-to-deploy"},"here"),"."))}d.isMDXComponent=!0},59286:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fauna1-dfbbafe0fc532faf83e6f68b2f11ae67.png"},30979:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fauna2-59afc87c29e58f04371b123359ae5378.png"}}]);