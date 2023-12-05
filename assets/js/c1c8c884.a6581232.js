"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[7105],{3905:(e,t,n)=>{n.d(t,{Zo:()=>M,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},u=Object.keys(e);for(a=0;a<u.length;a++)n=u[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(a=0;a<u.length;a++)n=u[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},M=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},L="mdxType",j={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},N=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,u=e.originalType,s=e.parentName,M=i(e,["components","mdxType","originalType","parentName"]),L=l(n),N=r,g=L["".concat(s,".").concat(N)]||L[N]||j[N]||u;return n?a.createElement(g,o(o({ref:t},M),{},{components:n})):a.createElement(g,o({ref:t},M))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var u=n.length,o=new Array(u);o[0]=N;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[L]="string"==typeof e?e:r,o[1]=i;for(var l=2;l<u;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},53586:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>j,frontMatter:()=>u,metadata:()=>i,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const u={},o="API server with FaunaDB",i={unversionedId:"tutorials/tutorial-faunadb",id:"tutorials/tutorial-faunadb",title:"API server with FaunaDB",description:'FaunaDB calls itself "The data API for modern applications". It\'s a database',source:"@site/deploy/tutorials/tutorial-faunadb.md",sourceDirName:"tutorials",slug:"/tutorials/tutorial-faunadb",permalink:"/deno-docs/deploy/tutorials/tutorial-faunadb",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"deployTutorialsHome",previous:{title:"API server with DynamoDB",permalink:"/deno-docs/deploy/tutorials/tutorial-dynamodb"},next:{title:"API server with Firestore (Firebase)",permalink:"/deno-docs/deploy/tutorials/tutorial-firebase"}},s={},l=[{value:"Overview",id:"overview",level:2},{value:"Build the API Endpoints",id:"build-the-api-endpoints",level:2},{value:"Use FaunaDB for Persistence",id:"use-faunadb-for-persistence",level:2},{value:"Deploy the API",id:"deploy-the-api",level:2}],M={toc:l},L="wrapper";function j(e){let{components:t,...u}=e;return(0,r.kt)(L,(0,a.Z)({},M,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"api-server-with-faunadb"},"API server with FaunaDB"),(0,r.kt)("p",null,"FaunaDB calls itself \"The data API for modern applications\". It's a database\nwith a GraphQL interface that enables you to use GraphQL to interact with it.\nSince we communicate with it using HTTP requests, we don't need to manage\nconnections which suits very well for serverless applications."),(0,r.kt)("p",null,"The tutorial assumes that you've ",(0,r.kt)("a",{parentName:"p",href:"https://fauna.com"},"FaunaDB")," and Deno Deploy\naccounts, Deno Deploy CLI installed, and some basic knowledge of GraphQL."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#overview"},"Overview")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#build-the-api-endpoints"},"Build the API Endpoints")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#use-faunadb-for-persistence"},"Use FaunaDB for Persistence")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#deploy-the-api"},"Deploy the API"))),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"In this tutorial, let's build a small quotes API with endpoints to insert and\nretrieve quotes. And later use FaunaDB to persist the quotes."),(0,r.kt)("p",null,"Let's start by defining the API endpoints."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'# A POST request to the endpoint should insert the quote to the list.\nPOST /quotes/\n# Body of the request.\n{\n  "quote": "Don\'t judge each day by the harvest you reap but by the seeds that you plant.",\n  "author": "Robert Louis Stevenson"\n}\n\n# A GET request to the endpoint should return all the quotes from the database.\nGET /quotes/\n# Response of the request.\n{\n  "quotes": [\n    {\n      "quote": "Don\'t judge each day by the harvest you reap but by the seeds that you plant.",\n      "author": "Robert Louis Stevenson"\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"Now that we understand how the endpoint should behave, let's proceed to build\nit."),(0,r.kt)("h2",{id:"build-the-api-endpoints"},"Build the API Endpoints"),(0,r.kt)("p",null,"First, create a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"quotes.ts")," and paste the following content."),(0,r.kt)("p",null,"Read through the comments in the code to understand what's happening."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import {\n  json,\n  serve,\n  validateRequest,\n} from "https://deno.land/x/sift@0.6.0/mod.ts";\n\nserve({\n  "/quotes": handleQuotes,\n});\n\n// To get started, let\'s just use a global array of quotes.\nconst quotes = [\n  {\n    quote: "Those who can imagine anything, can create the impossible.",\n    author: "Alan Turing",\n  },\n  {\n    quote: "Any sufficiently advanced technology is equivalent to magic.",\n    author: "Arthur C. Clarke",\n  },\n];\n\nasync function handleQuotes(request: Request) {\n  // Make sure the request is a GET request.\n  const { error } = await validateRequest(request, {\n    GET: {},\n  });\n  // validateRequest populates the error if the request doesn\'t meet\n  // the schema we defined.\n  if (error) {\n    return json({ error: error.message }, { status: error.status });\n  }\n\n  // Return all the quotes.\n  return json({ quotes });\n}\n')),(0,r.kt)("p",null,"Run the above program using ",(0,r.kt)("a",{parentName:"p",href:"https://deno.land"},"the Deno CLI"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"deno run --allow-net=:8000 ./path/to/quotes.ts\n# Listening on http://0.0.0.0:8000/\n")),(0,r.kt)("p",null,"And curl the endpoint to see some quotes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'curl http://127.0.0.1:8000/quotes\n# {"quotes":[\n# {"quote":"Those who can imagine anything, can create the impossible.", "author":"Alan Turing"},\n# {"quote":"Any sufficiently advanced technology is equivalent to magic.","author":"Arthur C. Clarke"}\n# ]}\n')),(0,r.kt)("p",null,"Let's proceed to handle the POST request."),(0,r.kt)("p",null,"Update the ",(0,r.kt)("inlineCode",{parentName:"p"},"validateRequest")," function to make sure a POST request follows the\nprovided body scheme."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'-  const { error } = await validateRequest(request, {\n+  const { error, body } = await validateRequest(request, {\n    GET: {},\n+   POST: {\n+      body: ["quote", "author"]\n+   }\n  });\n')),(0,r.kt)("p",null,"Handle the POST request by updating ",(0,r.kt)("inlineCode",{parentName:"p"},"handleQuotes")," function with the following\ncode."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'async function handleQuotes(request: Request) {\n  const { error, body } = await validateRequest(request, {\n    GET: {},\n    POST: {\n      body: ["quote", "author"],\n    },\n  });\n  if (error) {\n    return json({ error: error.message }, { status: error.status });\n  }\n\n+  // Handle POST requests.\n+  if (request.method === "POST") {\n+    const { quote, author } = body as { quote: string; author: string };\n+    quotes.push({ quote, author });\n+    return json({ quote, author }, { status: 201 });\n+  }\n\n  return json({ quotes });\n}\n')),(0,r.kt)("p",null,"Let's test it by inserting some data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'curl --dump-header - --request POST --data \'{"quote": "A program that has not been tested does not work.", "author": "Bjarne Stroustrup"}\' http://127.0.0.1:8000/quotes\n')),(0,r.kt)("p",null,"The output might look like something below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'HTTP/1.1 201 Created\ntransfer-encoding: chunked\ncontent-type: application/json; charset=utf-8\n\n{"quote":"A program that has not been tested does not work.","author":"Bjarne Stroustrup"}\n')),(0,r.kt)("p",null,"Awesome! We built our API endpoint, and it's working as expected. Since the data\nis stored in memory, it will be lost after a restart. Let's use FaunaDB to\npersist our quotes."),(0,r.kt)("h2",{id:"use-faunadb-for-persistence"},"Use FaunaDB for Persistence"),(0,r.kt)("p",null,"Let's define our database schema using GraphQL Schema."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gql"},"# We're creating a new type named `Quote` to represent a quote and its author.\ntype Quote {\n  quote: String!\n  author: String!\n}\n\ntype Query {\n  # A new field in the Query operation to retrieve all quotes.\n  allQuotes: [Quote!]\n}\n")),(0,r.kt)("p",null,"Fauna has a graphql endpoint for its database, and it generates essential\nmutations like create, update, delete for a data type defined in the schema. For\nexample, fauna will generate a mutation named ",(0,r.kt)("inlineCode",{parentName:"p"},"createQuote")," to create a new\nquote in the database for the data type ",(0,r.kt)("inlineCode",{parentName:"p"},"Quote"),". And we're additionally defining\na query field named ",(0,r.kt)("inlineCode",{parentName:"p"},"allQuotes")," that returns all the quotes in the database."),(0,r.kt)("p",null,"Let's get to writing the code to interact with fauna from Deno Deploy\napplications."),(0,r.kt)("p",null,"To interact with fauna, we need to make a POST request to its graphql endpoint\nwith appropriate query and parameters to get the data in return. So let's\nconstruct a generic function that will handle those things."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'async function queryFauna(\n  query: string,\n  variables: { [key: string]: unknown },\n): Promise<{\n  data?: any;\n  error?: any;\n}> {\n  // Grab the secret from the environment.\n  const token = Deno.env.get("FAUNA_SECRET");\n  if (!token) {\n    throw new Error("environment variable FAUNA_SECRET not set");\n  }\n\n  try {\n    // Make a POST request to fauna\'s graphql endpoint with body being\n    // the query and its variables.\n    const res = await fetch("https://graphql.fauna.com/graphql", {\n      method: "POST",\n      headers: {\n        authorization: `Bearer ${token}`,\n        "content-type": "application/json",\n      },\n      body: JSON.stringify({\n        query,\n        variables,\n      }),\n    });\n\n    const { data, errors } = await res.json();\n    if (errors) {\n      // Return the first error if there are any.\n      return { data, error: errors[0] };\n    }\n\n    return { data };\n  } catch (error) {\n    return { error };\n  }\n}\n')),(0,r.kt)("p",null,"Add this code to the ",(0,r.kt)("inlineCode",{parentName:"p"},"quotes.ts")," file. Now let's proceed to update the endpoint\nto use fauna."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'async function handleQuotes(request: Request) {\n  const { error, body } = await validateRequest(request, {\n    GET: {},\n    POST: {\n      body: ["quote", "author"],\n    },\n  });\n  if (error) {\n    return json({ error: error.message }, { status: error.status });\n  }\n\n  if (request.method === "POST") {\n+    const { quote, author, error } = await createQuote(\n+      body as { quote: string; author: string }\n+    );\n+    if (error) {\n+      return json({ error: "couldn\'t create the quote" }, { status: 500 });\n+    }\n\n    return json({ quote, author }, { status: 201 });\n  }\n\n  return json({ quotes });\n}\n\n+async function createQuote({\n+  quote,\n+  author,\n+}: {\n+  quote: string;\n+  author: string;\n+}): Promise<{ quote?: string; author?: string; error?: string }> {\n+  const query = `\n+    mutation($quote: String!, $author: String!) {\n+      createQuote(data: { quote: $quote, author: $author }) {\n+        quote\n+        author\n+      }\n+    }\n+  `;\n+\n+  const { data, error } = await queryFauna(query, { quote, author });\n+  if (error) {\n+    return { error };\n+  }\n+\n+  return data;\n+}\n')),(0,r.kt)("p",null,"Now that we've updated the code to insert new quotes let's set up a fauna\ndatabase before proceeding to test the code."),(0,r.kt)("p",null,"Create a new database:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("a",{parentName:"li",href:"https://dashboard.fauna.com"},"https://dashboard.fauna.com")," (login if required) and click on ",(0,r.kt)("strong",{parentName:"li"},"New\nDatabase")),(0,r.kt)("li",{parentName:"ol"},"Fill the ",(0,r.kt)("strong",{parentName:"li"},"Database Name")," field and click on ",(0,r.kt)("strong",{parentName:"li"},"Save"),"."),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"GraphQL")," section visible on the left sidebar."),(0,r.kt)("li",{parentName:"ol"},"Create a file ending with ",(0,r.kt)("inlineCode",{parentName:"li"},".gql")," extension with the content being the schema\nwe defined above.")),(0,r.kt)("p",null,"Generate a secret to access the database:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Security")," section and click on ",(0,r.kt)("strong",{parentName:"li"},"New Key"),"."),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Server")," role and click on ",(0,r.kt)("strong",{parentName:"li"},"Save"),". Copy the secret.")),(0,r.kt)("p",null,"Let's now run the application with the secret."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"FAUNA_SECRET=<the_secret_you_just_obtained> deno run --allow-net=:8000 --watch quotes.ts\n# Listening on http://0.0.0.0:8000\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'curl --dump-header - --request POST --data \'{"quote": "A program that has not been tested does not work.", "author": "Bjarne Stroustrup"}\' http://127.0.0.1:8000/quotes\n')),(0,r.kt)("p",null,"Notice how the quote was added to your collection in FaunaDB."),(0,r.kt)("p",null,"Let's write a new function to get all the quotes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"async function getAllQuotes() {\n  const query = `\n    query {\n      allQuotes {\n        data {\n          quote\n          author\n        }\n      }\n    }\n  `;\n\n  const {\n    data: {\n      allQuotes: { data: quotes },\n    },\n    error,\n  } = await queryFauna(query, {});\n  if (error) {\n    return { error };\n  }\n\n  return { quotes };\n}\n")),(0,r.kt)("p",null,"And update the ",(0,r.kt)("inlineCode",{parentName:"p"},"handleQuotes")," function with the following code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'-// To get started, let\'s just use a global array of quotes.\n-const quotes = [\n-  {\n-    quote: "Those who can imagine anything, can create the impossible.",\n-    author: "Alan Turing",\n-  },\n-  {\n-    quote: "Any sufficiently advanced technology is equivalent to magic.",\n-    author: "Arthur C. Clarke",\n-  },\n-];\n\nasync function handleQuotes(request: Request) {\n  const { error, body } = await validateRequest(request, {\n    GET: {},\n    POST: {\n      body: ["quote", "author"],\n    },\n  });\n  if (error) {\n    return json({ error: error.message }, { status: error.status });\n  }\n\n  if (request.method === "POST") {\n    const { quote, author, error } = await createQuote(\n      body as { quote: string; author: string },\n    );\n    if (error) {\n      return json({ error: "couldn\'t create the quote" }, { status: 500 });\n    }\n\n    return json({ quote, author }, { status: 201 });\n  }\n\n+  // It\'s assumed that the request method is "GET".\n+  {\n+    const { quotes, error } = await getAllQuotes();\n+    if (error) {\n+      return json({ error: "couldn\'t fetch the quotes" }, { status: 500 });\n+    }\n+\n+    return json({ quotes });\n+  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl http://127.0.0.1:8000/quotes\n")),(0,r.kt)("p",null,"You should see all the quotes we've inserted into the database. The final code\nof the API is available at ",(0,r.kt)("a",{parentName:"p",href:"https://deno.com/examples/fauna.ts"},"https://deno.com/examples/fauna.ts"),"."),(0,r.kt)("h2",{id:"deploy-the-api"},"Deploy the API"),(0,r.kt)("p",null,"The process of deploying the API involves creating a new Deno Deploy project and\na secret to hold our FaunaDB secret."),(0,r.kt)("p",null,"Create a project and a secret:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("a",{parentName:"li",href:"https://dash.deno.com/new"},"https://dash.deno.com/new")," (Sign in with\nGitHub if you didn't already) and click on ",(0,r.kt)("strong",{parentName:"li"},"+ Empty Project")," under ",(0,r.kt)("strong",{parentName:"li"},"Deploy\nfrom the command line"),"."),(0,r.kt)("li",{parentName:"ol"},"Now click on ",(0,r.kt)("strong",{parentName:"li"},"Settings")," button available on the project page."),(0,r.kt)("li",{parentName:"ol"},"Navigate to ",(0,r.kt)("strong",{parentName:"li"},"Environment Variables")," Section and add the following secrets.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FAUNA_SECRET")," - The value should be the secret we created in the previous\nstep or a new one.")),(0,r.kt)("p",null,"Don't close this tab yet."),(0,r.kt)("p",null,"Deploy the code:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a gist (make sure the extension of the file is ",(0,r.kt)("inlineCode",{parentName:"li"},".ts"),") at\n",(0,r.kt)("a",{parentName:"li",href:"https://gist.github.com/new"},"https://gist.github.com/new")," with your code and grab the raw link of it.",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"For convenience, the code is also hosted at\n",(0,r.kt)("a",{parentName:"p",href:"https://deno.com/examples/fauna.ts"},"https://deno.com/examples/fauna.ts")," so you can skip creating a gist if you\njust want to try out the above example without making changes to it."))),(0,r.kt)("li",{parentName:"ol"},"Go back to Deno Deploy ",(0,r.kt)("strong",{parentName:"li"},"Settings")," screen where we created our secrets."),(0,r.kt)("li",{parentName:"ol"},"Click on your project name on the ",(0,r.kt)("strong",{parentName:"li"},"Settings")," page to go back to the\ndashboard of your project."),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Deploy URL"),", paste the raw link and click on ",(0,r.kt)("strong",{parentName:"li"},"Deploy"),"."),(0,r.kt)("li",{parentName:"ol"},"Click on Visit to see your project live on Deno Deploy (remember to append\n",(0,r.kt)("inlineCode",{parentName:"li"},"/quotes")," to the deployment URL to see the content of your FaunaDB)")),(0,r.kt)("p",null,"That's it."),(0,r.kt)("p",null,"Congrats on building and deploying the Quotes API!"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://dash.deno.com/new?url=https://deno.com/examples/fauna.ts&env=FAUNA_SECRET"},(0,r.kt)("img",{alt:"Deploy this example",src:n(81556).Z,width:"105",height:"36"}))))}j.isMDXComponent=!0},81556:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA1IiBoZWlnaHQ9IjM2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxyZWN0IHdpZHRoPSIxMDUiIGhlaWdodD0iMzYiIHJ4PSI0IiBmaWxsPSIjMDAwIi8+CiAgPHBhdGggZD0iTTIzLjY0IDI0LjYyYzEuMDYgMCAyLjAxLS4yMiAyLjg1LS42Ny44NS0uNDUgMS41MS0xLjEgMi0xLjk0LjUtLjg2Ljc1LTEuODguNzUtMy4wN1Y5aC0xLjk3djYuNTVoLS4wNWE0LjUzIDQuNTMgMCAwMC0zLjktMi4xN2MtMSAwLTEuOTEuMjItMi43Mi42N2E0Ljk3IDQuOTcgMCAwMC0xLjkxIDEuOTIgNS44NCA1Ljg0IDAgMDAtLjY5IDIuOWMwIDEuMTguMjQgMi4yLjcgMy4wOGE1LjA2IDUuMDYgMCAwMDIgMS45OGMuODYuNDYgMS44NC43IDIuOTQuN3ptMC0xLjY2Yy0uNjcgMC0xLjI5LS4xNi0xLjg0LS40OWEzLjU4IDMuNTggMCAwMS0xLjMxLTEuMzZjLS4zMy0uNi0uNS0xLjMtLjUtMi4xMSAwLS43OS4xNi0xLjQ3LjQ4LTIuMDZhMy41IDMuNSAwIDAxMy4xNS0xLjkgMy41IDMuNSAwIDAxMy4xMyAxLjg4Yy4zMy41OS41IDEuMjkuNSAyLjEgMCAuOC0uMTcgMS41LS41IDIuMDlhMy40MyAzLjQzIDAgMDEtMy4xIDEuODV6TTM3Ljg1IDI0LjM3YTcuNTEgNy41MSAwIDAxLTMuMjEtLjY1IDUuMzggNS4zOCAwIDAxLTIuMTctMS44OEE1LjIgNS4yIDAgMDEzMS43IDE5YzAtMS4wNy4yMi0yLjAyLjY2LTIuODZhNS4wOSA1LjA5IDAgMDExLjg1LTIuMDJjLjc4LS41IDEuNy0uNzQgMi43NC0uNzRhNS4xIDUuMSAwIDAxMi44MS43MSA0LjQgNC40IDAgMDExLjcgMS45NCA2LjMyIDYuMzIgMCAwMS41IDMuNjJIMzMuOGEzLjE3IDMuMTcgMCAwMDIuMDggMi43MmMuNTkuMjIgMS4yMy4zNCAxLjkzLjM0aDIuODV2MS42NmgtMi44em0tNC4wNy02LjA5aDYuMjRjMC0uNDYtLjEtLjk0LS4yOC0xLjQ1LS4xOC0uNS0uNS0uOTMtLjk0LTEuMjhhMi44MiAyLjgyIDAgMDAtMS44NS0uNTVjLS42NSAwLTEuMjIuMTctMS43LjUtLjQ1LjMzLS44Ljc0LTEuMDYgMS4yNS0uMjUuNDktLjM4IDEtLjQxIDEuNTN6TTUwLjA3IDEzLjM4Yy0xLjA2IDAtMi4wMS4yMi0yLjg2LjY3YTUuMDYgNS4wNiAwIDAwLTIuMDEgMS45NiA2IDYgMCAwMC0uNzMgMy4wNVYyOWgxLjk3di02LjU1aC4wNGMuMzYuNjUuOSAxLjE3IDEuNiAxLjU4LjcuNCAxLjQ2LjYgMi4zLjYgMSAwIDEuOTEtLjIzIDIuNzEtLjY4YTQuODIgNC44MiAwIDAwMS45LTEuOWMuNDgtLjgzLjcyLTEuOC43Mi0yLjkyIDAtMS4xOC0uMjUtMi4yLS43My0zLjA2YTQuODUgNC44NSAwIDAwLTItMiA1Ljk2IDUuOTYgMCAwMC0yLjkxLS43em0wIDEuNjZhMy41IDMuNSAwIDAxMy4xNSAxLjg1Yy4zMy42LjUgMS4zLjUgMi4xMSAwIC43OS0uMTcgMS40Ny0uNSAyLjA2YTMuNTMgMy41MyAwIDAxLTMuMTMgMS45Yy0uNjcgMC0xLjI5LS4xNi0xLjg1LS40OWEzLjU4IDMuNTggMCAwMS0xLjMtMS4zNiA0LjU0IDQuNTQgMCAwMS0uNDgtMi4xM2MwLS44LjE2LTEuNS40Ny0yLjA5YTMuNSAzLjUgMCAwMTMuMTMtMS44NXpNNTguMjMgMjQuMzdWOWgxLjk3djE1LjM3aC0xLjk3ek02OC40OSAyNC42MmMtMS4xMiAwLTIuMS0uMjQtMi45OC0uNzRhNS42OSA1LjY5IDAgMDEtMi4wNC0yLjAyIDUuNyA1LjcgMCAwMS0uNzMtMi44NiA1LjQ3IDUuNDcgMCAwMTIuNzctNC44NmMuODctLjUgMS44Ni0uNzYgMi45OC0uNzZhNS43MiA1LjcyIDAgMDE1IDIuNzhjLjUuODQuNzUgMS43OS43NSAyLjg0YTUuNTcgNS41NyAwIDAxLTIuNzkgNC44OGMtLjg2LjUtMS44NC43NC0yLjk2Ljc0em0wLTEuNjZhMy42MyAzLjYzIDAgMDAzLjI4LTEuOTRjLjMyLS42LjQ3LTEuMjguNDctMi4wMnMtLjE1LTEuNDEtLjQ3LTJhMy42NSAzLjY1IDAgMDAtMS4zLTEuNDMgMy42MyAzLjYzIDAgMDAtMS45OC0uNTNjLS43NCAwLTEuNC4xOC0xLjk3LjUzLS41Ni4zNS0xIC44My0xLjMxIDEuNDNhNC4xOCA0LjE4IDAgMDAtLjQ3IDJjMCAuNzQuMTUgMS40Mi40NyAyLjAyLjMxLjU5Ljc1IDEuMDYgMS4zIDEuNDFhMy43IDMuNyAwIDAwMS45OC41M3pNODAuOSAyOC42NHYtNC4xYTUuMDYgNS4wNiAwIDAxLTIuMTQtLjggNC41OCA0LjU4IDAgMDEtMi0zLjl2LTYuMmgydjYuMThjMCAuNjUuMTUgMS4yLjQzIDEuNjlhMy4xMiAzLjEyIDAgMDAyLjY4IDEuNDUgMy4yMiAzLjIyIDAgMDAyLjctMS40NWMuMy0uNDguNDYtMS4wNC40Ni0xLjY5di02LjE5SDg3djYuMjFhNC43IDQuNyAwIDAxLS41NCAyLjI4Yy0uMzQuNjYtLjgzIDEuMi0xLjQ1IDEuNjItLjYyLjQtMS4zMy42Ny0yLjEzLjh2NC4xaC0xLjk3eiIgZmlsbD0iI2ZmZiIvPgogIDxyZWN0IHdpZHRoPSIxMDUiIGhlaWdodD0iMzYiIHJ4PSI0IiBmaWxsPSIjMDAwIi8+CiAgPHBhdGggZD0iTTIzLjY0IDI1LjYyYzEuMDYgMCAyLjAxLS4yMiAyLjg1LS42Ny44NS0uNDUgMS41MS0xLjEgMi0xLjk0LjUtLjg2Ljc1LTEuODguNzUtMy4wN1YxMGgtMS45N3Y2LjU1aC0uMDVhNC41MyA0LjUzIDAgMDAtMy45LTIuMTdjLTEgMC0xLjkxLjIyLTIuNzIuNjdhNC45NyA0Ljk3IDAgMDAtMS45MSAxLjkyIDUuODQgNS44NCAwIDAwLS42OSAyLjljMCAxLjE4LjI0IDIuMi43IDMuMDhhNS4wNiA1LjA2IDAgMDAyIDEuOThjLjg2LjQ2IDEuODQuNyAyLjk0Ljd6bTAtMS42NmMtLjY3IDAtMS4yOS0uMTYtMS44NC0uNDlhMy41OCAzLjU4IDAgMDEtMS4zMS0xLjM2Yy0uMzMtLjYtLjUtMS4zLS41LTIuMTEgMC0uNzkuMTYtMS40Ny40OC0yLjA2YTMuNSAzLjUgMCAwMTMuMTUtMS45IDMuNSAzLjUgMCAwMTMuMTMgMS44OGMuMzMuNTkuNSAxLjI5LjUgMi4xIDAgLjgtLjE3IDEuNS0uNSAyLjA5YTMuNDMgMy40MyAwIDAxLTMuMSAxLjg1ek0zNy44NSAyNS4zN2E3LjUxIDcuNTEgMCAwMS0zLjIxLS42NSA1LjM4IDUuMzggMCAwMS0yLjE3LTEuODhBNS4yIDUuMiAwIDAxMzEuNyAyMGMwLTEuMDcuMjItMi4wMi42Ni0yLjg2YTUuMDkgNS4wOSAwIDAxMS44NS0yLjAyYy43OC0uNSAxLjctLjc0IDIuNzQtLjc0YTUuMSA1LjEgMCAwMTIuODEuNzEgNC40IDQuNCAwIDAxMS43IDEuOTQgNi4zMiA2LjMyIDAgMDEuNSAzLjYySDMzLjhhMy4xNyAzLjE3IDAgMDAyLjA4IDIuNzJjLjU5LjIyIDEuMjMuMzQgMS45My4zNGgyLjg1djEuNjZoLTIuOHptLTQuMDctNi4wOWg2LjI0YzAtLjQ2LS4xLS45NC0uMjgtMS40NS0uMTgtLjUtLjUtLjkzLS45NC0xLjI4YTIuODIgMi44MiAwIDAwLTEuODUtLjU1Yy0uNjUgMC0xLjIyLjE3LTEuNy41LS40NS4zMy0uOC43NC0xLjA2IDEuMjUtLjI1LjQ5LS4zOCAxLS40MSAxLjUzek01MC4wNyAxNC4zOGMtMS4wNiAwLTIuMDEuMjItMi44Ni42N2E1LjA2IDUuMDYgMCAwMC0yLjAxIDEuOTYgNiA2IDAgMDAtLjczIDMuMDVWMzBoMS45N3YtNi41NWguMDRjLjM2LjY1LjkgMS4xNyAxLjYgMS41OC43LjQgMS40Ni42IDIuMy42IDEgMCAxLjkxLS4yMyAyLjcxLS42OGE0LjgyIDQuODIgMCAwMDEuOS0xLjljLjQ4LS44My43Mi0xLjguNzItMi45MiAwLTEuMTgtLjI1LTIuMi0uNzMtMy4wNmE0Ljg1IDQuODUgMCAwMC0yLTIgNS45NiA1Ljk2IDAgMDAtMi45MS0uN3ptMCAxLjY2YTMuNSAzLjUgMCAwMTMuMTUgMS44NWMuMzMuNi41IDEuMy41IDIuMTEgMCAuNzktLjE3IDEuNDctLjUgMi4wNmEzLjUzIDMuNTMgMCAwMS0zLjEzIDEuOWMtLjY3IDAtMS4yOS0uMTYtMS44NS0uNDlhMy41OCAzLjU4IDAgMDEtMS4zLTEuMzYgNC41NCA0LjU0IDAgMDEtLjQ4LTIuMTNjMC0uOC4xNi0xLjUuNDctMi4wOWEzLjUgMy41IDAgMDEzLjEzLTEuODV6TTU4LjIzIDI1LjM3VjEwaDEuOTd2MTUuMzdoLTEuOTd6TTY4LjQ5IDI1LjYyYy0xLjEyIDAtMi4xLS4yNC0yLjk4LS43NGE1LjY5IDUuNjkgMCAwMS0yLjA0LTIuMDIgNS43IDUuNyAwIDAxLS43My0yLjg2IDUuNDcgNS40NyAwIDAxMi43Ny00Ljg2Yy44Ny0uNSAxLjg2LS43NiAyLjk4LS43NmE1LjcyIDUuNzIgMCAwMTUgMi43OGMuNS44NC43NSAxLjc5Ljc1IDIuODRhNS41NyA1LjU3IDAgMDEtMi43OSA0Ljg4Yy0uODYuNS0xLjg0Ljc0LTIuOTYuNzR6bTAtMS42NmEzLjYzIDMuNjMgMCAwMDMuMjgtMS45NGMuMzItLjYuNDctMS4yOC40Ny0yLjAycy0uMTUtMS40MS0uNDctMmEzLjY1IDMuNjUgMCAwMC0xLjMtMS40MyAzLjYzIDMuNjMgMCAwMC0xLjk4LS41M2MtLjc0IDAtMS40LjE4LTEuOTcuNTMtLjU2LjM1LTEgLjgzLTEuMzEgMS40M2E0LjE4IDQuMTggMCAwMC0uNDcgMmMwIC43NC4xNSAxLjQyLjQ3IDIuMDIuMzEuNTkuNzUgMS4wNiAxLjMgMS40MWEzLjcgMy43IDAgMDAxLjk4LjUzek04MC45IDI5LjY0di00LjFhNS4wNiA1LjA2IDAgMDEtMi4xNC0uOCA0LjU4IDQuNTggMCAwMS0yLTMuOXYtNi4yaDJ2Ni4xOGMwIC42NS4xNSAxLjIuNDMgMS42OWEzLjEyIDMuMTIgMCAwMDIuNjggMS40NSAzLjIyIDMuMjIgMCAwMDIuNy0xLjQ1Yy4zLS40OC40Ni0xLjA0LjQ2LTEuNjl2LTYuMTlIODd2Ni4yMWE0LjcgNC43IDAgMDEtLjU0IDIuMjhjLS4zNC42Ni0uODMgMS4yLTEuNDUgMS42Mi0uNjIuNC0xLjMzLjY3LTIuMTMuOHY0LjFoLTEuOTd6IiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo="}}]);