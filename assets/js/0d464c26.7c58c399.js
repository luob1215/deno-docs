"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[6659],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||r;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},35418:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const r={},i="Discord Slash Command",s={unversionedId:"tutorials/discord-slash",id:"tutorials/discord-slash",title:"Discord Slash Command",description:"Discord has a new feature called Slash Commands. They allow you to type /",source:"@site/deploy/tutorials/discord-slash.md",sourceDirName:"tutorials",slug:"/tutorials/discord-slash",permalink:"/deploy/tutorials/discord-slash",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"deployTutorialsHome",previous:{title:"Overview",permalink:"/deploy/tutorials/"},next:{title:"Basic Fresh site",permalink:"/deploy/tutorials/fresh"}},l={},p=[{value:"<strong>Step 1:</strong> Create an application on Discord Developer Portal",id:"step-1-create-an-application-on-discord-developer-portal",level:2},{value:"<strong>Step 2:</strong> Register Slash command with Discord app",id:"step-2-register-slash-command-with-discord-app",level:2},{value:"<strong>Step 3:</strong> Create and deploy the hello world Slash Command on Deno Deploy",id:"step-3-create-and-deploy-the-hello-world-slash-command-on-deno-deploy",level:2},{value:"<strong>Step 3:</strong> Configure Discord application to use our URL as interactions endpoint URL",id:"step-3-configure-discord-application-to-use-our-url-as-interactions-endpoint-url",level:2},{value:"<strong>Step 4:</strong> Install the Slash Command on your Discord server",id:"step-4-install-the-slash-command-on-your-discord-server",level:2}],d={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"discord-slash-command"},"Discord Slash Command"),(0,a.kt)("p",null,"Discord has a new feature called ",(0,a.kt)("strong",{parentName:"p"},"Slash Commands"),". They allow you to type ",(0,a.kt)("inlineCode",{parentName:"p"},"/"),"\nfollowed by a command name to perform some action. For example, you can type\n",(0,a.kt)("inlineCode",{parentName:"p"},"/giphy cats")," (a built-in command) to get some cat gifs."),(0,a.kt)("p",null,"Discord Slash Commands work by making a request to a URL whenever someone issues\na command. You don't need your app to be running all the time for Slash Commands\nto work, which makes Deno Deploy a perfect solution to build such commands."),(0,a.kt)("p",null,"In this post, let's see how we can build a hello world Slash Command using Deno\nDeploy."),(0,a.kt)("h2",{id:"step-1-create-an-application-on-discord-developer-portal"},(0,a.kt)("strong",{parentName:"h2"},"Step 1:")," Create an application on Discord Developer Portal"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to\n",(0,a.kt)("a",{parentName:"li",href:"https://discord.com/developers/applications"},"https://discord.com/developers/applications"),"\n(login using your discord account if required)."),(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("strong",{parentName:"li"},"New Application")," button available at left side of your profile\npicture."),(0,a.kt)("li",{parentName:"ol"},"Name your application and click on ",(0,a.kt)("strong",{parentName:"li"},"Create"),"."),(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"Bot")," section, click on ",(0,a.kt)("strong",{parentName:"li"},"Add Bot"),", and finally on ",(0,a.kt)("strong",{parentName:"li"},"Yes, do it!"),"\nto confirm.")),(0,a.kt)("p",null,"That's it. A new application is created which will hold our Slash Command. Don't\nclose the tab as we need information from this application page throughout our\ndevelopment."),(0,a.kt)("h2",{id:"step-2-register-slash-command-with-discord-app"},(0,a.kt)("strong",{parentName:"h2"},"Step 2:")," Register Slash command with Discord app"),(0,a.kt)("p",null,"Before we can write some code, we need to curl a Discord endpoint to register a\nSlash Command in our app."),(0,a.kt)("p",null,"Fill ",(0,a.kt)("inlineCode",{parentName:"p"},"BOT_TOKEN")," with the token available in the ",(0,a.kt)("strong",{parentName:"p"},"Bot")," section and ",(0,a.kt)("inlineCode",{parentName:"p"},"CLIENT_ID"),"\nwith the ID available on the ",(0,a.kt)("strong",{parentName:"p"},"General Information")," section of the page and run\nthe command on your terminal."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'BOT_TOKEN=\'replace_me_with_bot_token\'\nCLIENT_ID=\'replace_me_with_client_id\'\ncurl -X POST \\\n-H \'Content-Type: application/json\' \\\n-H "Authorization: Bot $BOT_TOKEN" \\\n-d \'{"name":"hello","description":"Greet a person","options":[{"name":"name","description":"The name of the person","type":3,"required":true}]}\' \\\n"https://discord.com/api/v8/applications/$CLIENT_ID/commands"\n')),(0,a.kt)("p",null,"This will register a Slash Command named ",(0,a.kt)("inlineCode",{parentName:"p"},"hello")," that accepts a parameter named\n",(0,a.kt)("inlineCode",{parentName:"p"},"name")," of type string."),(0,a.kt)("h2",{id:"step-3-create-and-deploy-the-hello-world-slash-command-on-deno-deploy"},(0,a.kt)("strong",{parentName:"h2"},"Step 3:")," Create and deploy the hello world Slash Command on Deno Deploy"),(0,a.kt)("p",null,"Next, we need to create a server to respond to Discord when it makes a POST\nrequest with someone's slash command."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigate to ",(0,a.kt)("a",{parentName:"p",href:"https://dash.deno.com/new"},"https://dash.deno.com/new")," and click ",(0,a.kt)("strong",{parentName:"p"},"Play")," under the\n",(0,a.kt)("strong",{parentName:"p"},"Playground")," card.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the next page, in the editor, click the ",(0,a.kt)("strong",{parentName:"p"},"Settings")," icon on the top menu.\nIn the modal that pops up, select ",(0,a.kt)("strong",{parentName:"p"},"+ Add Variable"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Input ",(0,a.kt)("inlineCode",{parentName:"p"},"DISCORD_PUBLIC_KEY")," as KEY. The VALUE should be the public key\navailable in ",(0,a.kt)("strong",{parentName:"p"},"General Information")," section in the Discord application page.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Copy and paste the following code into the editor:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'// Sift is a small routing library that abstracts away details like starting a\n// listener on a port, and provides a simple function (serve) that has an API\n// to invoke a function for a specific path.\nimport {\n  json,\n  serve,\n  validateRequest,\n} from "https://deno.land/x/sift@0.6.0/mod.ts";\n// TweetNaCl is a cryptography library that we use to verify requests\n// from Discord.\nimport nacl from "https://cdn.skypack.dev/tweetnacl@v1.0.3?dts";\n\n// For all requests to "/" endpoint, we want to invoke home() handler.\nserve({\n  "/": home,\n});\n\n// The main logic of the Discord Slash Command is defined in this function.\nasync function home(request: Request) {\n  // validateRequest() ensures that a request is of POST method and\n  // has the following headers.\n  const { error } = await validateRequest(request, {\n    POST: {\n      headers: ["X-Signature-Ed25519", "X-Signature-Timestamp"],\n    },\n  });\n  if (error) {\n    return json({ error: error.message }, { status: error.status });\n  }\n\n  // verifySignature() verifies if the request is coming from Discord.\n  // When the request\'s signature is not valid, we return a 401 and this is\n  // important as Discord sends invalid requests to test our verification.\n  const { valid, body } = await verifySignature(request);\n  if (!valid) {\n    return json(\n      { error: "Invalid request" },\n      {\n        status: 401,\n      },\n    );\n  }\n\n  const { type = 0, data = { options: [] } } = JSON.parse(body);\n  // Discord performs Ping interactions to test our application.\n  // Type 1 in a request implies a Ping interaction.\n  if (type === 1) {\n    return json({\n      type: 1, // Type 1 in a response is a Pong interaction response type.\n    });\n  }\n\n  // Type 2 in a request is an ApplicationCommand interaction.\n  // It implies that a user has issued a command.\n  if (type === 2) {\n    const { value } = data.options.find((option) => option.name === "name");\n    return json({\n      // Type 4 responds with the below message retaining the user\'s\n      // input at the top.\n      type: 4,\n      data: {\n        content: `Hello, ${value}!`,\n      },\n    });\n  }\n\n  // We will return a bad request error as a valid Discord request\n  // shouldn\'t reach here.\n  return json({ error: "bad request" }, { status: 400 });\n}\n\n/** Verify whether the request is coming from Discord. */\nasync function verifySignature(\n  request: Request,\n): Promise<{ valid: boolean; body: string }> {\n  const PUBLIC_KEY = Deno.env.get("DISCORD_PUBLIC_KEY")!;\n  // Discord sends these headers with every request.\n  const signature = request.headers.get("X-Signature-Ed25519")!;\n  const timestamp = request.headers.get("X-Signature-Timestamp")!;\n  const body = await request.text();\n  const valid = nacl.sign.detached.verify(\n    new TextEncoder().encode(timestamp + body),\n    hexToUint8Array(signature),\n    hexToUint8Array(PUBLIC_KEY),\n  );\n\n  return { valid, body };\n}\n\n/** Converts a hexadecimal string to Uint8Array. */\nfunction hexToUint8Array(hex: string) {\n  return new Uint8Array(\n    hex.match(/.{1,2}/g)!.map((val) => parseInt(val, 16)),\n  );\n}\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Save & Deploy")," to deploy the server")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Note the project URL once the file has been deployed. It will be on the upper\nright hand side of the editor, and end in ",(0,a.kt)("inlineCode",{parentName:"p"},".deno.dev"),"."))),(0,a.kt)("h2",{id:"step-3-configure-discord-application-to-use-our-url-as-interactions-endpoint-url"},(0,a.kt)("strong",{parentName:"h2"},"Step 3:")," Configure Discord application to use our URL as interactions endpoint URL"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go back to your application (Greeter) page on Discord Developer Portal"),(0,a.kt)("li",{parentName:"ol"},"Fill ",(0,a.kt)("strong",{parentName:"li"},"INTERACTIONS ENDPOINT URL")," field with the Deno Deploy project URL\nfrom above and click on ",(0,a.kt)("strong",{parentName:"li"},"Save Changes"),".")),(0,a.kt)("p",null,"The application is now ready. Let's proceed to the next section to install it."),(0,a.kt)("h2",{id:"step-4-install-the-slash-command-on-your-discord-server"},(0,a.kt)("strong",{parentName:"h2"},"Step 4:")," Install the Slash Command on your Discord server"),(0,a.kt)("p",null,"So to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"hello")," Slash Command, we need to install our Greeter application\non our Discord server. Here are the steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"OAuth2")," section of the Discord application page on Discord Developer\nPortal"),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("inlineCode",{parentName:"li"},"applications.commands")," scope and click on the ",(0,a.kt)("strong",{parentName:"li"},"Copy")," button below."),(0,a.kt)("li",{parentName:"ol"},"Now paste and visit the URL on your browser. Select your server and click on\n",(0,a.kt)("strong",{parentName:"li"},"Authorize"),".")),(0,a.kt)("p",null,"Open Discord, type ",(0,a.kt)("inlineCode",{parentName:"p"},"/hello Deno Deploy")," and press ",(0,a.kt)("strong",{parentName:"p"},"Enter"),". The output will\nlook something like below."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Hello, Deno Deploy!",src:n(52785).Z,width:"932",height:"294"})),(0,a.kt)("p",null,"Congratulations for completing the tutorial! Go ahead and build some awesome\nDiscord Slash Commands! And do share them with us on ",(0,a.kt)("strong",{parentName:"p"},"deploy")," channel of\n",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/deno"},"the Deno Discord server"),"."))}m.isMDXComponent=!0},52785:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/discord-slash-command-15cff2f022936484704604d1c1f75965.png"}}]);