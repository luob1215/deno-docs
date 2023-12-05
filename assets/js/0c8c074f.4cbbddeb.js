"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[8791],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return t?a.createElement(g,i(i({ref:n},c),{},{components:t})):a.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},846:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=t(87462),r=(t(67294),t(3905));const o={},i="How to use MySQL2 with Deno",s={unversionedId:"manual/node/how_to_with_npm/mysql2",id:"manual/node/how_to_with_npm/mysql2",title:"How to use MySQL2 with Deno",description:"MySQL is the most popular database in the",source:"@site/runtime/manual/node/how_to_with_npm/mysql2.md",sourceDirName:"manual/node/how_to_with_npm",slug:"/manual/node/how_to_with_npm/mysql2",permalink:"/deno-docs/runtime/manual/node/how_to_with_npm/mysql2",draft:!1,tags:[],version:"current",frontMatter:{}},l={},u=[{value:"Connecting to MySQL",id:"connecting-to-mysql",level:2},{value:"Creating and populating the database",id:"creating-and-populating-the-database",level:2},{value:"Querying MySQL",id:"querying-mysql",level:2}],c={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-use-mysql2-with-deno"},"How to use MySQL2 with Deno"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.mysql.com/"},"MySQL")," is the most popular database in the\n",(0,r.kt)("a",{parentName:"p",href:"https://survey.stackoverflow.co/2022/#most-popular-technologies-database"},"2022 Stack Overflow Developer Survey"),"\nand counts Facebook, Twitter, YouTube, and Netflix among its users."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/denoland/examples/tree/main/with-mysql2"},"View source here.")),(0,r.kt)("p",null,"You can manipulate and query a MySQL database with Deno using the ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql2")," node\npackage and importing via ",(0,r.kt)("inlineCode",{parentName:"p"},"npm:mysql2"),". This allows us to use its Promise\nwrapper and take advantage of top-level await."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx,",metastring:"ignore",ignore:!0},'import mysql from "npm:mysql2@^2.3.3/promise";\n')),(0,r.kt)("h2",{id:"connecting-to-mysql"},"Connecting to MySQL"),(0,r.kt)("p",null,"We can connect to our MySQL server using the ",(0,r.kt)("inlineCode",{parentName:"p"},"createConnection()")," method. You\nneed the host (",(0,r.kt)("inlineCode",{parentName:"p"},"localhost")," if you are testing, or more likely a cloud database\nendpoint in production) and the user and password:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx,",metastring:"ignore",ignore:!0},'const connection = await mysql.createConnection({\n  host: "localhost",\n  user: "root",\n  password: "password",\n});\n')),(0,r.kt)("p",null,"You can also optionally specify a database during the connection creation. Here\nwe are going to use ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql2")," to create the database on the fly."),(0,r.kt)("h2",{id:"creating-and-populating-the-database"},"Creating and populating the database"),(0,r.kt)("p",null,"Now that you have the connection running, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"connection.query()")," with\nSQL commands to create databases and tables as well as insert the initial data."),(0,r.kt)("p",null,"First we want to generate and select the database to use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx,",metastring:"ignore",ignore:!0},'await connection.query("CREATE DATABASE denos");\nawait connection.query("use denos");\n')),(0,r.kt)("p",null,"Then we want to create the table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx,",metastring:"ignore",ignore:!0},'await connection.query(\n  "CREATE TABLE `dinosaurs` (   `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,   `name` varchar(255) NOT NULL,   `description` varchar(255) )",\n);\n')),(0,r.kt)("p",null,"After the table is created we can populate the data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx,",metastring:"ignore",ignore:!0},"await connection.query(\n  \"INSERT INTO `dinosaurs` (id, name, description) VALUES (1, 'Aardonyx', 'An early stage in the evolution of sauropods.'), (2, 'Abelisaurus', 'Abels lizard has been reconstructed from a single skull.'), (3, 'Deno', 'The fastest dinosaur that ever lived.')\",\n);\n")),(0,r.kt)("p",null,"We now have all the data ready to start querying."),(0,r.kt)("h2",{id:"querying-mysql"},"Querying MySQL"),(0,r.kt)("p",null,"We can use the same connection.query() method to write our queries. First we try\nand get all the data in our ",(0,r.kt)("inlineCode",{parentName:"p"},"dinosaurs")," table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx,",metastring:"ignore",ignore:!0},'const results = await connection.query("SELECT * FROM `dinosaurs`");\nconsole.log(results);\n')),(0,r.kt)("p",null,"The result from this query is all the data in our database:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx,",metastring:"ignore",ignore:!0},'[\n  [\n    {\n      id: 1,\n      name: "Aardonyx",\n      description: "An early stage in the evolution of sauropods."\n    },\n    {\n      id: 2,\n      name: "Abelisaurus",\n      description: `Abel\'s lizard" has been reconstructed from a single skull.`\n    },\n    { id: 3, name: "Deno", description: "The fastest dinosaur that ever lived." }\n  ],\n')),(0,r.kt)("p",null,"If we want to just get a single element from the database, we can change our\nquery:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx,",metastring:"ignore",ignore:!0},"const [results, fields] = await connection.query(\n  \"SELECT * FROM `dinosaurs` WHERE `name` = 'Deno'\",\n);\nconsole.log(results);\n")),(0,r.kt)("p",null,"Which gives us a single row result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx,",metastring:"ignore",ignore:!0},'[{ id: 3, name: "Deno", description: "The fastest dinosaur that ever lived." }];\n')),(0,r.kt)("p",null,"Finally, we can close the connection:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx,",metastring:"ignore",ignore:!0},"await connection.end();\n")),(0,r.kt)("p",null,"For more on ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql2"),", check out their documentation\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sidorares/node-mysql2"},"here"),"."))}d.isMDXComponent=!0}}]);