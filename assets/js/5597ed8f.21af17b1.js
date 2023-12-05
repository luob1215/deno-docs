"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[1310],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var M=a.createContext({}),l=function(e){var t=a.useContext(M),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(M.Provider,{value:t},e.children)},j="mdxType",L={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},N=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,M=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),j=l(n),N=o,g=j["".concat(M,".").concat(N)]||j[N]||L[N]||i;return n?a.createElement(g,r(r({ref:t},s),{},{components:n})):a.createElement(g,r({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=N;var u={};for(var M in t)hasOwnProperty.call(t,M)&&(u[M]=t[M]);u.originalType=e,u[j]="string"==typeof e?e:o,r[1]=u;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},81733:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>M,contentTitle:()=>r,default:()=>L,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const i={},r="API server with DynamoDB",u={unversionedId:"tutorials/tutorial-dynamodb",id:"tutorials/tutorial-dynamodb",title:"API server with DynamoDB",description:"In this tutorial let's take a look at how we can use it to build a small API",source:"@site/deploy/tutorials/tutorial-dynamodb.md",sourceDirName:"tutorials",slug:"/tutorials/tutorial-dynamodb",permalink:"/deno-docs/deploy/tutorials/tutorial-dynamodb",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"deployTutorialsHome",previous:{title:"Build a blog with Fresh",permalink:"/deno-docs/deploy/tutorials/tutorial-blog-fresh"},next:{title:"API server with FaunaDB",permalink:"/deno-docs/deploy/tutorials/tutorial-faunadb"}},M={},l=[{value:"Overview",id:"overview",level:2},{value:"Setup DynamoDB",id:"setup-dynamodb",level:2},{value:"Create a Project in Deno Deploy",id:"create-a-project-in-deno-deploy",level:2},{value:"Write the Application",id:"write-the-application",level:2},{value:"Deploy the Application",id:"deploy-the-application",level:2}],s={toc:l},j="wrapper";function L(e){let{components:t,...i}=e;return(0,o.kt)(j,(0,a.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"api-server-with-dynamodb"},"API server with DynamoDB"),(0,o.kt)("p",null,"In this tutorial let's take a look at how we can use it to build a small API\nthat has endpoints to insert and retrieve information, backed by DynamoDB."),(0,o.kt)("p",null,"The tutorial assumes that you have an AWS and Deno Deploy account."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#overview"},"Overview")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#setup-dynamodb"},"Setup DynamoDB")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#create-a-project-in-deno-deploy"},"Create a Project in Deno Deploy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#write-the-application"},"Write the Application")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#deploy-the-application"},"Deploy the Application"))),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"We're going to build an API with a single endpoint that accepts GET/POST\nrequests and returns appropriate information"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'# A GET request to the endpoint should return the details of the song based on its title.\nGET /songs?title=Song%20Title # \'%20\' == space\n# response\n{\n  title: "Song Title"\n  artist: "Someone"\n  album: "Something",\n  released: "1970",\n  genres: "country rap",\n}\n\n# A POST request to the endpoint should insert the song details.\nPOST /songs\n# post request body\n{\n  title: "A New Title"\n  artist: "Someone New"\n  album: "Something New",\n  released: "2020",\n  genres: "country rap",\n}\n')),(0,o.kt)("h2",{id:"setup-dynamodb"},"Setup DynamoDB"),(0,o.kt)("p",null,"Our first step in the process is to generate AWS credentials to programmatically\naccess DynamoDB."),(0,o.kt)("p",null,"Generate Credentials:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("a",{parentName:"li",href:"https://console.aws.amazon.com/iam/"},"https://console.aws.amazon.com/iam/"),' and go to "Users" section.'),(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("strong",{parentName:"li"},"Add user")," button, fill the ",(0,o.kt)("strong",{parentName:"li"},"User name")," field (maybe use\n",(0,o.kt)("inlineCode",{parentName:"li"},"denamo"),") and select ",(0,o.kt)("strong",{parentName:"li"},"Programmatic access")," type."),(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("strong",{parentName:"li"},"Next: Permissions"),", then on ",(0,o.kt)("strong",{parentName:"li"},"Attach existing policies\ndirectly"),", search for ",(0,o.kt)("inlineCode",{parentName:"li"},"AmazonDynamoDBFullAccess")," and select it."),(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("strong",{parentName:"li"},"Next: Tags"),", then on ",(0,o.kt)("strong",{parentName:"li"},"Next: Review")," and finally ",(0,o.kt)("strong",{parentName:"li"},"Create\nuser"),"."),(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("strong",{parentName:"li"},"Download .csv")," button to download the credentials.")),(0,o.kt)("p",null,"Create database table:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("a",{parentName:"li",href:"https://console.aws.amazon.com/dynamodb"},"https://console.aws.amazon.com/dynamodb")," and click on ",(0,o.kt)("strong",{parentName:"li"},"Create table"),"\nbutton."),(0,o.kt)("li",{parentName:"ol"},"Fill the ",(0,o.kt)("strong",{parentName:"li"},"Table name")," field with ",(0,o.kt)("inlineCode",{parentName:"li"},"Songs")," and ",(0,o.kt)("strong",{parentName:"li"},"Primary key")," with ",(0,o.kt)("inlineCode",{parentName:"li"},"title"),"."),(0,o.kt)("li",{parentName:"ol"},"Scroll down and click on ",(0,o.kt)("strong",{parentName:"li"},"Create"),". That's it.")),(0,o.kt)("h2",{id:"create-a-project-in-deno-deploy"},"Create a Project in Deno Deploy"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("a",{parentName:"li",href:"https://dash.deno.com/new"},"https://dash.deno.com/new")," (Sign in with\nGitHub if you didn't already) and click on ",(0,o.kt)("strong",{parentName:"li"},"Create"),"."),(0,o.kt)("li",{parentName:"ol"},"Now click on ",(0,o.kt)("strong",{parentName:"li"},"Settings")," button available on the project page."),(0,o.kt)("li",{parentName:"ol"},"Navigate to ",(0,o.kt)("strong",{parentName:"li"},"Environment Variables")," Section and add the following secrets.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"AWS_ACCESS_KEY_ID")," - Use the value that's available under ",(0,o.kt)("strong",{parentName:"li"},"Access key ID"),"\ncolumn in the downloaded CSV."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"AWS_SECRET_ACCESS_KEY")," - Use the value that's available under ",(0,o.kt)("strong",{parentName:"li"},"Secret access\nkey")," column in the downloaded CSV.")),(0,o.kt)("p",null,"Now click on the project name to go back to the project dashboard. Keep this tab\nopen as we will come back here later in the deploy step."),(0,o.kt)("h2",{id:"write-the-application"},"Write the Application"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import {\n  json,\n  serve,\n  validateRequest,\n} from "https://deno.land/x/sift@0.6.0/mod.ts";\n// AWS has an official SDK that works with browsers. As most Deno Deploy\'s\n// APIs are similar to browser\'s, the same SDK works with Deno Deploy.\n// So we import the SDK along with some classes required to insert and\n// retrieve data.\nimport {\n  DynamoDBClient,\n  GetItemCommand,\n  PutItemCommand,\n} from "https://cdn.skypack.dev/@aws-sdk/client-dynamodb?dts";\n\n// Create a client instance by providing your region information.\n// The credentials are obtained from environment variables which\n// we set during our project creation step on Deno Deploy.\nconst client = new DynamoDBClient({\n  region: "ap-south-1",\n  credentials: {\n    accessKeyId: Deno.env.get("AWS_ACCESS_KEY_ID"),\n    secretAccessKey: Deno.env.get("AWS_SECRET_ACCESS_KEY"),\n  },\n});\n\nserve({\n  "/songs": handleRequest,\n});\n\nasync function handleRequest(request) {\n  // The endpoint allows GET and POST request. A parameter named "title"\n  // for a GET request to be processed. And body with the fields defined\n  // below are required to process POST request.\n  // validateRequest ensures that the provided terms are met by the request.\n  const { error, body } = await validateRequest(request, {\n    GET: {\n      params: ["title"],\n    },\n    POST: {\n      body: ["title", "artist", "album", "released", "genres"],\n    },\n  });\n  if (error) {\n    return json({ error: error.message }, { status: error.status });\n  }\n\n  // Handle POST request.\n  if (request.method === "POST") {\n    try {\n      // When we want to interact with DynamoDB, we send a command using the client\n      // instance. Here we are sending a PutItemCommand to insert the data from the\n      // request.\n      const {\n        $metadata: { httpStatusCode },\n      } = await client.send(\n        new PutItemCommand({\n          TableName: "Songs",\n          Item: {\n            // Here \'S\' implies that the value is of type string\n            // and \'N\' implies a number.\n            title: { S: body.title },\n            artist: { S: body.artist },\n            album: { S: body.album },\n            released: { N: body.released },\n            genres: { S: body.genres },\n          },\n        }),\n      );\n\n      // On a successful put item request, dynamo returns a 200 status code (weird).\n      // So we test status code to verify if the data has been inserted and respond\n      // with the data provided by the request as a confirmation.\n      if (httpStatusCode === 200) {\n        return json({ ...body }, { status: 201 });\n      }\n    } catch (error) {\n      // If something goes wrong while making the request, we log\n      // the error for our reference.\n      console.log(error);\n    }\n\n    // If the execution reaches here it implies that the insertion wasn\'t successful.\n    return json({ error: "couldn\'t insert data" }, { status: 500 });\n  }\n\n  // Handle GET request.\n  try {\n    // We grab the title form the request and send a GetItemCommand\n    // to retrieve the information about the song.\n    const { searchParams } = new URL(request.url);\n    const { Item } = await client.send(\n      new GetItemCommand({\n        TableName: "Songs",\n        Key: {\n          title: { S: searchParams.get("title") },\n        },\n      }),\n    );\n\n    // The Item property contains all the data, so if it\'s not undefined,\n    // we proceed to returning the information about the title\n    if (Item) {\n      return json({\n        title: Item.title.S,\n        artist: Item.artist.S,\n        album: Item.album.S,\n        released: Item.released.S,\n        genres: Item.genres.S,\n      });\n    }\n  } catch (error) {\n    console.log(error);\n  }\n\n  // We might reach here if an error is thrown during the request to database\n  // or if the Item is not found in the database.\n  // We reflect both conditions with a general message.\n  return json(\n    {\n      message: "couldn\'t find the title",\n    },\n    { status: 404 },\n  );\n}\n')),(0,o.kt)("h2",{id:"deploy-the-application"},"Deploy the Application"),(0,o.kt)("p",null,"Now that we've everything in place, let's get to deploying the application."),(0,o.kt)("p",null,"The steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("a",{parentName:"li",href:"https://gist.github.com/new"},"https://gist.github.com/new")," and create a new gist with the above code\n(make sure the file ends with ",(0,o.kt)("inlineCode",{parentName:"li"},".js"),").",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"For convenience, the code is also hosted at\n",(0,o.kt)("a",{parentName:"p",href:"https://deno.com/examples/dynamo.js"},"https://deno.com/examples/dynamo.js")," so you can skip creating a gist if you\njust want to try out the above example without making changes to it."))),(0,o.kt)("li",{parentName:"ol"},"Go to the project (that we previously created) dashboard in Deno Deploy."),(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("strong",{parentName:"li"},"Deploy URL")," and paste the raw link of the gist."),(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("strong",{parentName:"li"},"Deploy")," and copy the URL that's displayed under ",(0,o.kt)("strong",{parentName:"li"},"Domains"),"\nsection.")),(0,o.kt)("p",null,"Let's test the API."),(0,o.kt)("p",null,"POST some data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'curl --request POST --data \\\n\'{"title": "Old Town Road", "artist": "Lil Nas X", "album": "7", "released": "2019", "genres": "Country rap, Pop"}\' \\\n--dump-header - https://<project_name>.deno.dev/songs\n')),(0,o.kt)("p",null,"GET information about the title."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"curl https://<project_name>.deno.dev/songs?title=Old%20Town%20Road\n")),(0,o.kt)("p",null,"Congratulations on learning how to use DynamoDB with Deno Deploy!"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://dash.deno.com/new?url=https://deno.com/examples/dynamo.js&env=AWS_ACCESS_KEY_ID,AWS_SECRET_ACCESS_KEY"},(0,o.kt)("img",{alt:"Deploy this example",src:n(81556).Z,width:"105",height:"36"}))))}L.isMDXComponent=!0},81556:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA1IiBoZWlnaHQ9IjM2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxyZWN0IHdpZHRoPSIxMDUiIGhlaWdodD0iMzYiIHJ4PSI0IiBmaWxsPSIjMDAwIi8+CiAgPHBhdGggZD0iTTIzLjY0IDI0LjYyYzEuMDYgMCAyLjAxLS4yMiAyLjg1LS42Ny44NS0uNDUgMS41MS0xLjEgMi0xLjk0LjUtLjg2Ljc1LTEuODguNzUtMy4wN1Y5aC0xLjk3djYuNTVoLS4wNWE0LjUzIDQuNTMgMCAwMC0zLjktMi4xN2MtMSAwLTEuOTEuMjItMi43Mi42N2E0Ljk3IDQuOTcgMCAwMC0xLjkxIDEuOTIgNS44NCA1Ljg0IDAgMDAtLjY5IDIuOWMwIDEuMTguMjQgMi4yLjcgMy4wOGE1LjA2IDUuMDYgMCAwMDIgMS45OGMuODYuNDYgMS44NC43IDIuOTQuN3ptMC0xLjY2Yy0uNjcgMC0xLjI5LS4xNi0xLjg0LS40OWEzLjU4IDMuNTggMCAwMS0xLjMxLTEuMzZjLS4zMy0uNi0uNS0xLjMtLjUtMi4xMSAwLS43OS4xNi0xLjQ3LjQ4LTIuMDZhMy41IDMuNSAwIDAxMy4xNS0xLjkgMy41IDMuNSAwIDAxMy4xMyAxLjg4Yy4zMy41OS41IDEuMjkuNSAyLjEgMCAuOC0uMTcgMS41LS41IDIuMDlhMy40MyAzLjQzIDAgMDEtMy4xIDEuODV6TTM3Ljg1IDI0LjM3YTcuNTEgNy41MSAwIDAxLTMuMjEtLjY1IDUuMzggNS4zOCAwIDAxLTIuMTctMS44OEE1LjIgNS4yIDAgMDEzMS43IDE5YzAtMS4wNy4yMi0yLjAyLjY2LTIuODZhNS4wOSA1LjA5IDAgMDExLjg1LTIuMDJjLjc4LS41IDEuNy0uNzQgMi43NC0uNzRhNS4xIDUuMSAwIDAxMi44MS43MSA0LjQgNC40IDAgMDExLjcgMS45NCA2LjMyIDYuMzIgMCAwMS41IDMuNjJIMzMuOGEzLjE3IDMuMTcgMCAwMDIuMDggMi43MmMuNTkuMjIgMS4yMy4zNCAxLjkzLjM0aDIuODV2MS42NmgtMi44em0tNC4wNy02LjA5aDYuMjRjMC0uNDYtLjEtLjk0LS4yOC0xLjQ1LS4xOC0uNS0uNS0uOTMtLjk0LTEuMjhhMi44MiAyLjgyIDAgMDAtMS44NS0uNTVjLS42NSAwLTEuMjIuMTctMS43LjUtLjQ1LjMzLS44Ljc0LTEuMDYgMS4yNS0uMjUuNDktLjM4IDEtLjQxIDEuNTN6TTUwLjA3IDEzLjM4Yy0xLjA2IDAtMi4wMS4yMi0yLjg2LjY3YTUuMDYgNS4wNiAwIDAwLTIuMDEgMS45NiA2IDYgMCAwMC0uNzMgMy4wNVYyOWgxLjk3di02LjU1aC4wNGMuMzYuNjUuOSAxLjE3IDEuNiAxLjU4LjcuNCAxLjQ2LjYgMi4zLjYgMSAwIDEuOTEtLjIzIDIuNzEtLjY4YTQuODIgNC44MiAwIDAwMS45LTEuOWMuNDgtLjgzLjcyLTEuOC43Mi0yLjkyIDAtMS4xOC0uMjUtMi4yLS43My0zLjA2YTQuODUgNC44NSAwIDAwLTItMiA1Ljk2IDUuOTYgMCAwMC0yLjkxLS43em0wIDEuNjZhMy41IDMuNSAwIDAxMy4xNSAxLjg1Yy4zMy42LjUgMS4zLjUgMi4xMSAwIC43OS0uMTcgMS40Ny0uNSAyLjA2YTMuNTMgMy41MyAwIDAxLTMuMTMgMS45Yy0uNjcgMC0xLjI5LS4xNi0xLjg1LS40OWEzLjU4IDMuNTggMCAwMS0xLjMtMS4zNiA0LjU0IDQuNTQgMCAwMS0uNDgtMi4xM2MwLS44LjE2LTEuNS40Ny0yLjA5YTMuNSAzLjUgMCAwMTMuMTMtMS44NXpNNTguMjMgMjQuMzdWOWgxLjk3djE1LjM3aC0xLjk3ek02OC40OSAyNC42MmMtMS4xMiAwLTIuMS0uMjQtMi45OC0uNzRhNS42OSA1LjY5IDAgMDEtMi4wNC0yLjAyIDUuNyA1LjcgMCAwMS0uNzMtMi44NiA1LjQ3IDUuNDcgMCAwMTIuNzctNC44NmMuODctLjUgMS44Ni0uNzYgMi45OC0uNzZhNS43MiA1LjcyIDAgMDE1IDIuNzhjLjUuODQuNzUgMS43OS43NSAyLjg0YTUuNTcgNS41NyAwIDAxLTIuNzkgNC44OGMtLjg2LjUtMS44NC43NC0yLjk2Ljc0em0wLTEuNjZhMy42MyAzLjYzIDAgMDAzLjI4LTEuOTRjLjMyLS42LjQ3LTEuMjguNDctMi4wMnMtLjE1LTEuNDEtLjQ3LTJhMy42NSAzLjY1IDAgMDAtMS4zLTEuNDMgMy42MyAzLjYzIDAgMDAtMS45OC0uNTNjLS43NCAwLTEuNC4xOC0xLjk3LjUzLS41Ni4zNS0xIC44My0xLjMxIDEuNDNhNC4xOCA0LjE4IDAgMDAtLjQ3IDJjMCAuNzQuMTUgMS40Mi40NyAyLjAyLjMxLjU5Ljc1IDEuMDYgMS4zIDEuNDFhMy43IDMuNyAwIDAwMS45OC41M3pNODAuOSAyOC42NHYtNC4xYTUuMDYgNS4wNiAwIDAxLTIuMTQtLjggNC41OCA0LjU4IDAgMDEtMi0zLjl2LTYuMmgydjYuMThjMCAuNjUuMTUgMS4yLjQzIDEuNjlhMy4xMiAzLjEyIDAgMDAyLjY4IDEuNDUgMy4yMiAzLjIyIDAgMDAyLjctMS40NWMuMy0uNDguNDYtMS4wNC40Ni0xLjY5di02LjE5SDg3djYuMjFhNC43IDQuNyAwIDAxLS41NCAyLjI4Yy0uMzQuNjYtLjgzIDEuMi0xLjQ1IDEuNjItLjYyLjQtMS4zMy42Ny0yLjEzLjh2NC4xaC0xLjk3eiIgZmlsbD0iI2ZmZiIvPgogIDxyZWN0IHdpZHRoPSIxMDUiIGhlaWdodD0iMzYiIHJ4PSI0IiBmaWxsPSIjMDAwIi8+CiAgPHBhdGggZD0iTTIzLjY0IDI1LjYyYzEuMDYgMCAyLjAxLS4yMiAyLjg1LS42Ny44NS0uNDUgMS41MS0xLjEgMi0xLjk0LjUtLjg2Ljc1LTEuODguNzUtMy4wN1YxMGgtMS45N3Y2LjU1aC0uMDVhNC41MyA0LjUzIDAgMDAtMy45LTIuMTdjLTEgMC0xLjkxLjIyLTIuNzIuNjdhNC45NyA0Ljk3IDAgMDAtMS45MSAxLjkyIDUuODQgNS44NCAwIDAwLS42OSAyLjljMCAxLjE4LjI0IDIuMi43IDMuMDhhNS4wNiA1LjA2IDAgMDAyIDEuOThjLjg2LjQ2IDEuODQuNyAyLjk0Ljd6bTAtMS42NmMtLjY3IDAtMS4yOS0uMTYtMS44NC0uNDlhMy41OCAzLjU4IDAgMDEtMS4zMS0xLjM2Yy0uMzMtLjYtLjUtMS4zLS41LTIuMTEgMC0uNzkuMTYtMS40Ny40OC0yLjA2YTMuNSAzLjUgMCAwMTMuMTUtMS45IDMuNSAzLjUgMCAwMTMuMTMgMS44OGMuMzMuNTkuNSAxLjI5LjUgMi4xIDAgLjgtLjE3IDEuNS0uNSAyLjA5YTMuNDMgMy40MyAwIDAxLTMuMSAxLjg1ek0zNy44NSAyNS4zN2E3LjUxIDcuNTEgMCAwMS0zLjIxLS42NSA1LjM4IDUuMzggMCAwMS0yLjE3LTEuODhBNS4yIDUuMiAwIDAxMzEuNyAyMGMwLTEuMDcuMjItMi4wMi42Ni0yLjg2YTUuMDkgNS4wOSAwIDAxMS44NS0yLjAyYy43OC0uNSAxLjctLjc0IDIuNzQtLjc0YTUuMSA1LjEgMCAwMTIuODEuNzEgNC40IDQuNCAwIDAxMS43IDEuOTQgNi4zMiA2LjMyIDAgMDEuNSAzLjYySDMzLjhhMy4xNyAzLjE3IDAgMDAyLjA4IDIuNzJjLjU5LjIyIDEuMjMuMzQgMS45My4zNGgyLjg1djEuNjZoLTIuOHptLTQuMDctNi4wOWg2LjI0YzAtLjQ2LS4xLS45NC0uMjgtMS40NS0uMTgtLjUtLjUtLjkzLS45NC0xLjI4YTIuODIgMi44MiAwIDAwLTEuODUtLjU1Yy0uNjUgMC0xLjIyLjE3LTEuNy41LS40NS4zMy0uOC43NC0xLjA2IDEuMjUtLjI1LjQ5LS4zOCAxLS40MSAxLjUzek01MC4wNyAxNC4zOGMtMS4wNiAwLTIuMDEuMjItMi44Ni42N2E1LjA2IDUuMDYgMCAwMC0yLjAxIDEuOTYgNiA2IDAgMDAtLjczIDMuMDVWMzBoMS45N3YtNi41NWguMDRjLjM2LjY1LjkgMS4xNyAxLjYgMS41OC43LjQgMS40Ni42IDIuMy42IDEgMCAxLjkxLS4yMyAyLjcxLS42OGE0LjgyIDQuODIgMCAwMDEuOS0xLjljLjQ4LS44My43Mi0xLjguNzItMi45MiAwLTEuMTgtLjI1LTIuMi0uNzMtMy4wNmE0Ljg1IDQuODUgMCAwMC0yLTIgNS45NiA1Ljk2IDAgMDAtMi45MS0uN3ptMCAxLjY2YTMuNSAzLjUgMCAwMTMuMTUgMS44NWMuMzMuNi41IDEuMy41IDIuMTEgMCAuNzktLjE3IDEuNDctLjUgMi4wNmEzLjUzIDMuNTMgMCAwMS0zLjEzIDEuOWMtLjY3IDAtMS4yOS0uMTYtMS44NS0uNDlhMy41OCAzLjU4IDAgMDEtMS4zLTEuMzYgNC41NCA0LjU0IDAgMDEtLjQ4LTIuMTNjMC0uOC4xNi0xLjUuNDctMi4wOWEzLjUgMy41IDAgMDEzLjEzLTEuODV6TTU4LjIzIDI1LjM3VjEwaDEuOTd2MTUuMzdoLTEuOTd6TTY4LjQ5IDI1LjYyYy0xLjEyIDAtMi4xLS4yNC0yLjk4LS43NGE1LjY5IDUuNjkgMCAwMS0yLjA0LTIuMDIgNS43IDUuNyAwIDAxLS43My0yLjg2IDUuNDcgNS40NyAwIDAxMi43Ny00Ljg2Yy44Ny0uNSAxLjg2LS43NiAyLjk4LS43NmE1LjcyIDUuNzIgMCAwMTUgMi43OGMuNS44NC43NSAxLjc5Ljc1IDIuODRhNS41NyA1LjU3IDAgMDEtMi43OSA0Ljg4Yy0uODYuNS0xLjg0Ljc0LTIuOTYuNzR6bTAtMS42NmEzLjYzIDMuNjMgMCAwMDMuMjgtMS45NGMuMzItLjYuNDctMS4yOC40Ny0yLjAycy0uMTUtMS40MS0uNDctMmEzLjY1IDMuNjUgMCAwMC0xLjMtMS40MyAzLjYzIDMuNjMgMCAwMC0xLjk4LS41M2MtLjc0IDAtMS40LjE4LTEuOTcuNTMtLjU2LjM1LTEgLjgzLTEuMzEgMS40M2E0LjE4IDQuMTggMCAwMC0uNDcgMmMwIC43NC4xNSAxLjQyLjQ3IDIuMDIuMzEuNTkuNzUgMS4wNiAxLjMgMS40MWEzLjcgMy43IDAgMDAxLjk4LjUzek04MC45IDI5LjY0di00LjFhNS4wNiA1LjA2IDAgMDEtMi4xNC0uOCA0LjU4IDQuNTggMCAwMS0yLTMuOXYtNi4yaDJ2Ni4xOGMwIC42NS4xNSAxLjIuNDMgMS42OWEzLjEyIDMuMTIgMCAwMDIuNjggMS40NSAzLjIyIDMuMjIgMCAwMDIuNy0xLjQ1Yy4zLS40OC40Ni0xLjA0LjQ2LTEuNjl2LTYuMTlIODd2Ni4yMWE0LjcgNC43IDAgMDEtLjU0IDIuMjhjLS4zNC42Ni0uODMgMS4yLTEuNDUgMS42Mi0uNjIuNC0xLjMzLjY3LTIuMTMuOHY0LjFoLTEuOTd6IiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo="}}]);