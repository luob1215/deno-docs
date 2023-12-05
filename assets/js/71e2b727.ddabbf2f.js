"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[7758],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(t),u=a,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||s;return t?o.createElement(h,r(r({ref:n},c),{},{components:t})):o.createElement(h,r({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,r=new Array(s);r[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[d]="string"==typeof e?e:a,r[1]=i;for(var p=2;p<s;p++)r[p]=t[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},49708:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var o=t(87462),a=(t(67294),t(3905));const s={},r="Connecting to databases",i={unversionedId:"manual/basics/connecting_to_databases",id:"manual/basics/connecting_to_databases",title:"Connecting to databases",description:"The Deno community has published a number of third-party modules that make it",source:"@site/runtime/manual/basics/connecting_to_databases.md",sourceDirName:"manual/basics",slug:"/manual/basics/connecting_to_databases",permalink:"/deno-docs/runtime/manual/basics/connecting_to_databases",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"runtimeGuideHome",previous:{title:"Debugging Your Code",permalink:"/deno-docs/runtime/manual/basics/debugging_your_code"},next:{title:"Using React with Deno",permalink:"/deno-docs/runtime/manual/basics/react"}},l={},p=[{value:"MySQL",id:"mysql",level:2},{value:"Connect to MySQL with deno_mysql",id:"connect-to-mysql-with-deno_mysql",level:3},{value:"Postgres",id:"postgres",level:2},{value:"Connect to Postgres with postgresjs",id:"connect-to-postgres-with-postgresjs",level:3},{value:"MongoDB",id:"mongodb",level:2},{value:"SQLite",id:"sqlite",level:2},{value:"Connect to SQLite with the FFI Module",id:"connect-to-sqlite-with-the-ffi-module",level:3},{value:"Connect to SQLite with the WASM-Optimized Module",id:"connect-to-sqlite-with-the-wasm-optimized-module",level:3},{value:"Firebase",id:"firebase",level:2},{value:"Connect to Firebase with the firestore npm module",id:"connect-to-firebase-with-the-firestore-npm-module",level:3},{value:"Supabase",id:"supabase",level:2},{value:"Connect to Supabase with the supabase-js npm module",id:"connect-to-supabase-with-the-supabase-js-npm-module",level:3},{value:"ORMs",id:"orms",level:2},{value:"DenoDB",id:"denodb",level:3},{value:"Connect to DenoDB",id:"connect-to-denodb",level:4},{value:"GraphQL",id:"graphql",level:2},{value:"Server",id:"server",level:3},{value:"Run a GraphQL API server with gql",id:"run-a-graphql-api-server-with-gql",level:4},{value:"Client",id:"client",level:3},{value:"Make GraphQL client calls with the graphql npm module",id:"make-graphql-client-calls-with-the-graphql-npm-module",level:4}],c={toc:p},d="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"connecting-to-databases"},"Connecting to databases"),(0,a.kt)("p",null,"The Deno community has published a number of third-party modules that make it\neasy to connect to popular databases like MySQL, Postgres, and MongoDB."),(0,a.kt)("p",null,"They are hosted at Deno's third-party module site\n",(0,a.kt)("a",{parentName:"p",href:"https://deno.land/x"},"deno.land/x"),"."),(0,a.kt)("h2",{id:"mysql"},"MySQL"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://deno.land/x/mysql"},"deno_mysql")," is a MySQL and MariaDB database driver\nfor Deno."),(0,a.kt)("h3",{id:"connect-to-mysql-with-deno_mysql"},"Connect to MySQL with deno_mysql"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts,",metastring:"ignore",ignore:!0},'import { Client } from "https://deno.land/x/mysql/mod.ts";\n\nconst client = await new Client().connect({\n  hostname: "127.0.0.1",\n  username: "root",\n  db: "dbname",\n  password: "password",\n});\n')),(0,a.kt)("h2",{id:"postgres"},"Postgres"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://deno.land/x/postgresjs"},"postgresjs")," is a full featured Postgres client\nfor Node.js and Deno."),(0,a.kt)("h3",{id:"connect-to-postgres-with-postgresjs"},"Connect to Postgres with postgresjs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js,",metastring:"ignore",ignore:!0},'import postgres from "https://deno.land/x/postgresjs/mod.js";\n\nconst sql = postgres("postgres://username:password@host:port/database");\n')),(0,a.kt)("h2",{id:"mongodb"},"MongoDB"),(0,a.kt)("p",null,"We suggest using ",(0,a.kt)("a",{parentName:"p",href:"/deno-docs/runtime/manual/node/npm_specifiers"},"npm specifiers")," to work with the\nofficial ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/mongodb"},"MongoDB driver on npm"),". You can\nlearn more about how to work with the driver\n",(0,a.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/drivers/node/current/"},"in the official docs"),". The\nonly difference using this module in the context of Deno will be how you import\nthe module using an ",(0,a.kt)("inlineCode",{parentName:"p"},"npm:")," specifier."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Import the MongoDB driver using npm specifiers"',title:'"Import',the:!0,MongoDB:!0,driver:!0,using:!0,npm:!0,'specifiers"':!0},'// Import the latest major version of the MongoDB driver\nimport { MongoClient } from "npm:mongodb@6";\n\n// Configure a MongoDB client\nconst url = "mongodb://localhost:27017";\nconst client = new MongoClient(url);\nconst dbName = "myProject";\n\n// Connect to a MongoDB instance\nawait client.connect();\nconsole.log("Connected successfully to server");\n\n// Get a reference to a collection\nconst db = client.db(dbName);\nconst collection = db.collection("documents");\n\n// Execute an insert operation\nconst insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }]);\nconsole.log("Inserted documents =>", insertResult);\n\n// Close the connection\nclient.close();\n')),(0,a.kt)("h2",{id:"sqlite"},"SQLite"),(0,a.kt)("p",null,"There are two primary solutions to connect to SQLite in Deno:"),(0,a.kt)("h3",{id:"connect-to-sqlite-with-the-ffi-module"},"Connect to SQLite with the FFI Module"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://deno.land/x/sqlite3"},"sqlite3")," provides JavaScript bindings to the\nSQLite3 C API, using ",(0,a.kt)("a",{parentName:"p",href:"/deno-docs/runtime/manual/runtime/ffi_api"},"Deno FFI"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts,",metastring:"ignore",ignore:!0},'import { Database } from "https://deno.land/x/sqlite3@LATEST_VERSION/mod.ts";\n\nconst db = new Database("test.db");\n\ndb.close();\n')),(0,a.kt)("h3",{id:"connect-to-sqlite-with-the-wasm-optimized-module"},"Connect to SQLite with the WASM-Optimized Module"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://deno.land/x/sqlite"},"sqlite")," is a SQLite module for JavaScript and\nTypeScript. The wrapper made specifically for Deno and uses a version of SQLite3\ncompiled to WebAssembly (WASM)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts,",metastring:"ignore",ignore:!0},'import { DB } from "https://deno.land/x/sqlite/mod.ts";\n\nconst db = new DB("test.db");\n\ndb.close();\n')),(0,a.kt)("h2",{id:"firebase"},"Firebase"),(0,a.kt)("p",null,"To connect to Firebase with Deno, import the\n",(0,a.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/firestore/quickstart"},"firestore npm module"),"\nwith the ",(0,a.kt)("a",{parentName:"p",href:"https://www.skypack.dev/"},"skypak CDN"),". To learn more about using npm\nmodules in Deno with a CDN, see ",(0,a.kt)("a",{parentName:"p",href:"/deno-docs/runtime/manual/node/cdns"},"Using npm packages with CDNs"),"."),(0,a.kt)("h3",{id:"connect-to-firebase-with-the-firestore-npm-module"},"Connect to Firebase with the firestore npm module"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js,",metastring:"ignore",ignore:!0},'import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";\n\nimport {\n  addDoc,\n  collection,\n  connectFirestoreEmulator,\n  deleteDoc,\n  doc,\n  Firestore,\n  getDoc,\n  getDocs,\n  getFirestore,\n  query,\n  QuerySnapshot,\n  setDoc,\n  where,\n} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";\n\nimport { getAuth } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";\n\nconst app = initializeApp({\n  apiKey: Deno.env.get("FIREBASE_API_KEY"),\n  authDomain: Deno.env.get("FIREBASE_AUTH_DOMAIN"),\n  projectId: Deno.env.get("FIREBASE_PROJECT_ID"),\n  storageBucket: Deno.env.get("FIREBASE_STORAGE_BUCKET"),\n  messagingSenderId: Deno.env.get("FIREBASE_MESSING_SENDER_ID"),\n  appId: Deno.env.get("FIREBASE_APP_ID"),\n  measurementId: Deno.env.get("FIREBASE_MEASUREMENT_ID"),\n});\nconst db = getFirestore(app);\nconst auth = getAuth(app);\n')),(0,a.kt)("h2",{id:"supabase"},"Supabase"),(0,a.kt)("p",null,"To connect to Supabase with Deno, import the\n",(0,a.kt)("a",{parentName:"p",href:"https://supabase.com/docs/reference/javascript"},"supabase-js npm module")," with\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://esm.sh/"},"esm.sh CDN"),". To learn more about using npm modules in Deno\nwith a CDN, see ",(0,a.kt)("a",{parentName:"p",href:"/deno-docs/runtime/manual/node/cdns"},"Using npm packages with CDNs"),"."),(0,a.kt)("h3",{id:"connect-to-supabase-with-the-supabase-js-npm-module"},"Connect to Supabase with the supabase-js npm module"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js,",metastring:"ignore",ignore:!0},'import { createClient } from "https://esm.sh/@supabase/supabase-js";\n\nconst options = {\n  schema: "public",\n  headers: { "x-my-custom-header": "my-app-name" },\n  autoRefreshToken: true,\n  persistSession: true,\n  detectSessionInUrl: true,\n};\n\nconst supabase = createClient(\n  "https://xyzcompany.supabase.co",\n  "public-anon-key",\n  options,\n);\n')),(0,a.kt)("h2",{id:"orms"},"ORMs"),(0,a.kt)("p",null,"Object-Relational Mappings (ORM) define your data models as classes that you can\npersist to a database. You can read and write data in your database through\ninstances of these classes."),(0,a.kt)("p",null,"Deno supports multiple ORMs, including Prisma and DenoDB."),(0,a.kt)("h3",{id:"denodb"},"DenoDB"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://deno.land/x/denodb"},"DenoDB")," is a Deno-specific ORM."),(0,a.kt)("h4",{id:"connect-to-denodb"},"Connect to DenoDB"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts,",metastring:"ignore",ignore:!0},'import {\n  Database,\n  DataTypes,\n  Model,\n  PostgresConnector,\n} from "https://deno.land/x/denodb/mod.ts";\n\nconst connection = new PostgresConnector({\n  host: "...",\n  username: "user",\n  password: "password",\n  database: "airlines",\n});\n\nconst db = new Database(connection);\n')),(0,a.kt)("h2",{id:"graphql"},"GraphQL"),(0,a.kt)("p",null,"GraphQL is an API query language often used to compose disparate data sources\ninto client-centric APIs. To set up a GraphQL API, you should first set up a\nGraphQL server. This server exposes your data as a GraphQL API that your client\napplications can query for data."),(0,a.kt)("h3",{id:"server"},"Server"),(0,a.kt)("p",null,"You can use ",(0,a.kt)("a",{parentName:"p",href:"https://deno.land/x/gql"},"gql"),", an universal GraphQL HTTP middleware\nfor Deno, to run a GraphQL API server in Deno."),(0,a.kt)("h4",{id:"run-a-graphql-api-server-with-gql"},"Run a GraphQL API server with gql"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts,",metastring:"ignore",ignore:!0},'import { Server } from "https://deno.land/std@0.208.0/http/server.ts";\nimport { GraphQLHTTP } from "https://deno.land/x/gql/mod.ts";\nimport { makeExecutableSchema } from "https://deno.land/x/graphql_tools@0.0.2/mod.ts";\nimport { gql } from "https://deno.land/x/graphql_tag@0.0.1/mod.ts";\n\nconst typeDefs = gql`\n  type Query {\n    hello: String\n  }\n`;\n\nconst resolvers = {\n  Query: {\n    hello: () => `Hello World!`,\n  },\n};\n\nconst schema = makeExecutableSchema({ resolvers, typeDefs });\n\nconst s = new Server({\n  handler: async (req) => {\n    const { pathname } = new URL(req.url);\n\n    return pathname === "/graphql"\n      ? await GraphQLHTTP<Request>({\n        schema,\n        graphiql: true,\n      })(req)\n      : new Response("Not Found", { status: 404 });\n  },\n  port: 3000,\n});\n\ns.listenAndServe();\n\nconsole.log(`Started on http://localhost:3000`);\n')),(0,a.kt)("h3",{id:"client"},"Client"),(0,a.kt)("p",null,"To make GraphQL client calls in Deno, import the\n",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/graphql"},"graphql npm module")," with the\n",(0,a.kt)("a",{parentName:"p",href:"https://esm.sh/"},"esm CDN"),". To learn more about using npm modules in Deno via\nCDN read ",(0,a.kt)("a",{parentName:"p",href:"/deno-docs/runtime/manual/node/cdns"},"here"),"."),(0,a.kt)("h4",{id:"make-graphql-client-calls-with-the-graphql-npm-module"},"Make GraphQL client calls with the graphql npm module"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js,",metastring:"ignore",ignore:!0},'import { buildSchema, graphql } from "https://esm.sh/graphql";\n\nconst schema = buildSchema(`\ntype Query {\n  hello: String\n}\n`);\n\nconst rootValue = {\n  hello: () => {\n    return "Hello world!";\n  },\n};\n\nconst response = await graphql({\n  schema,\n  source: "{ hello }",\n  rootValue,\n});\n\nconsole.log(response);\n')))}m.isMDXComponent=!0}}]);