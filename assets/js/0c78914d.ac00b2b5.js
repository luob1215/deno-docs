"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[441],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79919:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={},i="Connect to Firebase",l={unversionedId:"manual/firebase",id:"manual/firebase",title:"Connect to Firebase",description:"Firebase is a platform developed by Google for creating mobile and web",source:"@site/deploy/manual/firebase.md",sourceDirName:"manual",slug:"/manual/firebase",permalink:"/deno-docs/deploy/manual/firebase",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"deployGuideHome",previous:{title:"Connect to FaunaDB",permalink:"/deno-docs/deploy/manual/faunadb"},next:{title:"Connect to Postgres",permalink:"/deno-docs/deploy/manual/postgres"}},s={},p=[{value:"Get credentials from Firebase",id:"get-credentials-from-firebase",level:2},{value:"Create a Project in Deno Deploy",id:"create-a-project-in-deno-deploy",level:2},{value:"Write code that connects to Firebase",id:"write-code-that-connects-to-firebase",level:2},{value:"Deploy the application to Deno Deploy",id:"deploy-the-application-to-deno-deploy",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connect-to-firebase"},"Connect to Firebase"),(0,o.kt)("p",null,"Firebase is a platform developed by Google for creating mobile and web\napplications. Its features include authentication primitives for log in and a\nNoSQL datasore, Firestore, that you can persist data to."),(0,o.kt)("p",null,"This tutorial covers how to connect to Firebase from an application deployed on\nDeno Deploy."),(0,o.kt)("p",null,"You can find a more comprehensive tutorial that builds a sample application on\ntop of Firebase ",(0,o.kt)("a",{parentName:"p",href:"../tutorials/tutorial-firebase"},"here"),"."),(0,o.kt)("h2",{id:"get-credentials-from-firebase"},"Get credentials from Firebase"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This tutorial assumes that you've already created a project in Firebase and\nadded a web application to your project.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to your project in Firebase and click on ",(0,o.kt)("strong",{parentName:"p"},"Project Settings"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Scroll down until you see a card with your app name, and a code sample that\nincludes a ",(0,o.kt)("inlineCode",{parentName:"p"},"firebaseConfig"),"object. It should look something like the below.\nKeep this handy. We will use it later:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},'var firebaseConfig = {\n  apiKey: "APIKEY",\n  authDomain: "example-12345.firebaseapp.com",\n  projectId: "example-12345",\n  storageBucket: "example-12345.appspot.com",\n  messagingSenderId: "1234567890",\n  appId: "APPID",\n};\n')))),(0,o.kt)("h2",{id:"create-a-project-in-deno-deploy"},"Create a Project in Deno Deploy"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to ",(0,o.kt)("a",{parentName:"p",href:"https://dash.deno.com/new"},"https://dash.deno.com/new")," (Sign in with\nGitHub if you didn't already) and click on ",(0,o.kt)("strong",{parentName:"p"},"+ Empty Project")," under ",(0,o.kt)("strong",{parentName:"p"},"Deploy\nfrom the command line"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Now click on the ",(0,o.kt)("strong",{parentName:"p"},"Settings")," button available on the project page.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to the ",(0,o.kt)("strong",{parentName:"p"},"Environment Variables")," section and add the following:"),(0,o.kt)("dl",null,(0,o.kt)("dt",null,(0,o.kt)("code",null,"FIREBASE_USERNAME")),(0,o.kt)("dd",null,"The Firebase user (email address) that was added above."),(0,o.kt)("dt",null,(0,o.kt)("code",null,"FIREBASE_PASSWORD")),(0,o.kt)("dd",null,"The Firebase user password that was added above."),(0,o.kt)("dt",null,(0,o.kt)("code",null,"FIREBASE_CONFIG")),(0,o.kt)("dd",null,"The configuration of the Firebase application as a JSON string.")),(0,o.kt)("p",{parentName:"li"},"The configuration needs to be a valid JSON string to be readable by the\napplication. If the code snippet given when setting up looked like this:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},'var firebaseConfig = {\n  apiKey: "APIKEY",\n  authDomain: "example-12345.firebaseapp.com",\n  projectId: "example-12345",\n  storageBucket: "example-12345.appspot.com",\n  messagingSenderId: "1234567890",\n  appId: "APPID",\n};\n')),(0,o.kt)("p",{parentName:"li"},"You would need to set the value of the string to this (noting that spacing\nand new lines are not required):"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "apiKey": "APIKEY",\n  "authDomain": "example-12345.firebaseapp.com",\n  "projectId": "example-12345",\n  "storageBucket": "example-12345.appspot.com",\n  "messagingSenderId": "1234567890",\n  "appId": "APPID"\n}\n')))),(0,o.kt)("h2",{id:"write-code-that-connects-to-firebase"},"Write code that connects to Firebase"),(0,o.kt)("p",null,"The first thing we will do is import the ",(0,o.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," polyfill that Firebase\nneeds to work under Deploy as well as a polyfill for ",(0,o.kt)("inlineCode",{parentName:"p"},"localStorage")," to allow the\nFirebase auth to persist logged in users:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import "https://deno.land/x/xhr@0.1.1/mod.ts";\nimport { installGlobals } from "https://deno.land/x/virtualstorage@0.1.0/mod.ts";\ninstallGlobals();\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u2139\ufe0f we are using the current version of packages at the time of the writing of\nthis tutorial. They may not be up-to-date and you may want to double check\ncurrent versions.")),(0,o.kt)("p",null,"Because Deploy has a lot of the web standard APIs, it is best to use the web\nlibraries for Firebase under deploy. Currently v9 is in still in beta for\nFirebase, so we will use v8:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import firebase from "https://esm.sh/firebase@9.17.0/app";\nimport "https://esm.sh/firebase@9.17.0/auth";\nimport "https://esm.sh/firebase@9.17.0/firestore";\n')),(0,o.kt)("p",null,"Now we need to setup our Firebase application. We will be getting the\nconfiguration from the environment variables we set up previously and get\nreferences to the parts of Firebase we are going to use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const firebaseConfig = JSON.parse(Deno.env.get("FIREBASE_CONFIG"));\nconst firebaseApp = firebase.initializeApp(firebaseConfig, "example");\nconst auth = firebase.auth(firebaseApp);\nconst db = firebase.firestore(firebaseApp);\n')),(0,o.kt)("p",null,"Ok, we are almost done. We just need to create our middleware application and\nadd the ",(0,o.kt)("inlineCode",{parentName:"p"},"localStorage")," middleware we imported:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const app = new Application();\napp.use(virtualStorage());\n")),(0,o.kt)("p",null,"And then we need to add middleware to authenticate the user. In this tutorial we\nare simply grabbing the username and password from the environment variables we\nwill be setting up, but this could easily be adapted to redirect a user to a\nsign-in page if they are not logged in:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'app.use(async (ctx, next) => {\n  const signedInUid = ctx.cookies.get("LOGGED_IN_UID");\n  const signedInUser = signedInUid != null ? users.get(signedInUid) : undefined;\n  if (!signedInUid || !signedInUser || !auth.currentUser) {\n    const creds = await auth.signInWithEmailAndPassword(\n      Deno.env.get("FIREBASE_USERNAME"),\n      Deno.env.get("FIREBASE_PASSWORD"),\n    );\n    const { user } = creds;\n    if (user) {\n      users.set(user.uid, user);\n      ctx.cookies.set("LOGGED_IN_UID", user.uid);\n    } else if (signedInUser && signedInUid.uid !== auth.currentUser?.uid) {\n      await auth.updateCurrentUser(signedInUser);\n    }\n  }\n  return next();\n});\n')),(0,o.kt)("h2",{id:"deploy-the-application-to-deno-deploy"},"Deploy the application to Deno Deploy"),(0,o.kt)("p",null,"Once you have finished writing your application, you can deploy it on Deno\nDeploy."),(0,o.kt)("p",null,"To do this, go back to your project page at\n",(0,o.kt)("inlineCode",{parentName:"p"},"https://dash.deno.com/projects/<project-name>"),"."),(0,o.kt)("p",null,"You should see a couple of options to deploy:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"ci_github"},"Github integration")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"deployctl"},(0,o.kt)("inlineCode",{parentName:"a"},"deployctl")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"deployctl deploy --project=<project-name> <application-file-name>\n")))),(0,o.kt)("p",null,"Unless you want to add a build step, we recommend that you select the Github\nintegration."),(0,o.kt)("p",null,"For more details on the different ways to deploy on Deno Deploy and the\ndifferent configuration options, read ",(0,o.kt)("a",{parentName:"p",href:"how-to-deploy"},"here"),"."))}u.isMDXComponent=!0}}]);