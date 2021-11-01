(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{105:function(e,t,a){"use strict";a.r(t);var s=a(2),c=a.n(s),n=a(23),i=a.n(n),r=a(13),l=(a(66),a(67),a(68),a(1));function o(e){var t=e.text;return Object(l.jsx)("div",{className:"bg-theme-main h-20 border-b-2 border-theme-purple","data-replace":'{ "translate-y-12": "translate-y-0" }',children:Object(l.jsx)("h2",{className:"pt-4 ml-5 font-bold text-4xl text-theme-accent",children:t})})}var d=a(12),h=a(56),m=a(130),j=a(128),b=a(125),x=a(127),p=a(53),u=a.n(p);function g(e){var t=e.images.map((function(e){return Object(l.jsx)("img",{src:e,alt:""},e)}));return Object(l.jsx)("div",{className:"center md:mx-16",children:Object(l.jsx)(u.a,{className:"carousel",elementType:"div",options:{initialIndex:0,contain:!0,prevNextButtons:!1,autoPlay:5e3,wrapAround:!0},disableImagesLoaded:!1,reloadOnUpdate:!0,static:!0,children:t})})}function O(e){var t=e.images,a=e.title,s=e.description,c=e.techUsed,n=e.role,i=e.links;return Object(l.jsxs)("div",{children:[Object(l.jsx)(g,{images:t}),Object(l.jsx)("h2",{className:"text-3xl underline pt-5 pb-7 text-theme-pink font-bold",children:a}),Object(l.jsxs)("div",{className:"pl-5 flex flex-col mx-auto space-y-2 bg-theme-main py-3 rounded md:px-10",children:[Object(l.jsxs)("span",{className:"text-theme-yellow",children:[Object(l.jsx)("strong",{className:"text-theme-accent",children:"Description: "}),s]}),Object(l.jsxs)("span",{className:"text-theme-yellow",children:[Object(l.jsx)("strong",{className:"text-theme-accent",children:"Role: "}),n]}),Object(l.jsxs)("span",{className:"text-theme-orange",children:[Object(l.jsx)("strong",{className:"text-theme-accent",children:"Technologies Used: "}),c]})]}),Object(l.jsxs)("div",{className:"pt-7 flex flex-row space-x-10",children:[Object(l.jsx)("a",{rel:"noreferrer",className:"text-theme-accent-light font-semibold text-lg hover:text-theme-purple transition duration-200",href:i.deployed,target:"_blank",children:"Deployed App"}),Object(l.jsx)("a",{href:i.github,target:"_blank",rel:"noreferrer",children:Object(l.jsx)("i",{className:"text-theme-accent-light hover:text-theme-purple fab fa-github text-3xl transition duration-200"})})]})]})}var f=a.p+"static/media/techblog1.61d73ba5.png",v=a.p+"static/media/techblog2.e0bdd90a.png",k=a.p+"static/media/techblog3.912f54bd.png",y=a.p+"static/media/trashparty1.f451a1aa.png",w=a.p+"static/media/trashparty2.54cf9c32.png",N=a.p+"static/media/trashparty3.da6596f5.png",S=a.p+"static/media/trashparty4.59b9a342.png",z=a.p+"static/media/tcgTracker1.f5e758fb.png",C=a.p+"static/media/tcgTracker2.b2fb65c2.png",M=a.p+"static/media/tcgTracker3.6a195c67.png",T=a.p+"static/media/quizzard1.5b5b6d29.png",A=a.p+"static/media/quizzard2.ccec2b34.png",L=a.p+"static/media/quizzard3.64b24b2d.png",q=a.p+"static/media/quizzard4.24a03d8f.png",P=a.p+"static/media/quizzard5.1b5cf1dc.png",D=a.p+"static/media/quizzard6.3b94c80d.png",I=a.p+"static/media/quizzard7.9d76a643.png",B=["children","value","index"],F=[T,A,L,q,P,D,I],J={github:"https://github.com/Quizzard-Dev/Quizzard",deployed:"https://quizzardweb.herokuapp.com/"},Q=[f,v,k],E={github:"https://github.com/AnthonyKrueger/MVC_Demo-Tech_Blog",deployed:"https://ak-tech-blog.herokuapp.com/"},G=[z,C,M],H={github:"https://github.com/Project01-TCG-Price-Tracker/TCG_Price_Tracker",deployed:"https://project01-tcg-price-tracker.github.io/TCG_Price_Tracker/"},_=[y,w,N,S],U={github:"https://github.com/Q-GAP/TrashParty",deployed:"https://trashy-houseparty.herokuapp.com/"};function W(e){var t=e.children,a=e.value,s=e.index,c=Object(h.a)(e,B);return Object(l.jsx)("div",Object(d.a)(Object(d.a)({role:"tabpanel",hidden:a!==s,id:"simple-tabpanel-".concat(s),"aria-labelledby":"simple-tab-".concat(s)},c),{},{children:a===s&&Object(l.jsx)(x.a,{p:3,children:t})}))}function R(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}function K(){var e=c.a.useState(0),t=Object(r.a)(e,2),a=t[0],s=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(m.a,{className:"bg-theme-main",position:"static",children:Object(l.jsxs)(j.a,{className:"bg-theme-main text-theme-accent-light",TabIndicatorProps:{style:{background:"#ff79c6"}},value:a,onChange:function(e,t){s(t)},"aria-label":"simple tabs example",children:[Object(l.jsx)(b.a,Object(d.a)({className:"focus:outline-none",label:"Quizzard"},R(0))),Object(l.jsx)(b.a,Object(d.a)({className:"focus:outline-none",label:"TCG Tracker"},R(1))),Object(l.jsx)(b.a,Object(d.a)({className:"focus:outline-none",label:"Trash Party"},R(2))),Object(l.jsx)(b.a,Object(d.a)({className:"focus:outline-none",label:"Tech Blog"},R(3)))]})}),Object(l.jsx)(W,{className:"bg-theme-light rounded",value:a,index:0,children:Object(l.jsx)(O,{title:"Quizzard",images:F,role:"Backend Lead/Frontend Support",techUsed:"React, GraphQL, Apollo-Client, Express, MongoDB, NodeJS, TailwindCSS, JsonWebToken",description:"An application that allows users to create and take quizzes of their own design. Using the quiz creator, the user can create a multiple choice quiz that can be assigned different tags for easy searching and sorting. Once created, quizzes are added to a MongoDB database, allowing other users to search for and take it. Quizzes are sorted by their popularity, and recent scores are displayed on each individual quiz page. Saved quizzes can be duplicated and editted by their creator. Users can search for quizzes by title, author, or by tags.",links:J})}),Object(l.jsx)(W,{className:"bg-theme-light rounded",value:a,index:1,children:Object(l.jsx)(O,{title:"TCG Price Tracker",images:G,role:"Backend Lead/Frontend Support",techUsed:"Javascript, HTML, CSS, jQuery, Materialize, API's, Font-Awesome",description:"An application to search a Pokemon card database by specific search criteria. Cards can be saved to a list of favorites to keep track of cards you like or have. Card arts can be clicked on to display a page with more information on the card including the artist and ID. Prices can be converted into different forms of cryptocurrency which are kept updated using an API",links:H})}),Object(l.jsx)(W,{className:"bg-theme-light rounded",value:a,index:2,children:Object(l.jsx)(O,{title:"Trash Party",images:_,role:"Backend Lead/Frontend Support",techUsed:"Javascript, NodeJS, MySQL, Sequelize, Express, Handlebars, Express-Sessions, HTML, CSS, jQuery, Materialize, GiphyAPI",description:"A website where twice a day the user can open a pack of random gifs of different types and rarities, jokingly name 'trash'. You can trade your 'trash' with other users until you get items you like. Throw cards you don't like away into the landfill for other users to collect, or trade specific cards user-to-user to get specific trash. Basically a virtual trading card game built using relational databases and ExpressJS.",links:U})}),Object(l.jsx)(W,{value:a,index:3,children:Object(l.jsx)(O,{title:"Tech Blog",images:Q,role:"Sole Developer",techUsed:"NodeJS, Express, MySQL, Handlebars, Javascript, HTML, CSS",description:"This is a simple CMS-Style blog application built to demonstrate knowledge of the Model View Controller structure in web app development. It allows the user to create an account with an encrypted password and then create posts or comment on other user's content. All data is stored in a MySQL database.",links:E})})]})}function V(){return Object(l.jsx)("div",{className:"my-5 container mx-auto rounded-lg shadow-lg bg-theme-light",children:Object(l.jsxs)("div",{id:"projects",children:[Object(l.jsx)(o,{text:"Projects"}),Object(l.jsx)(K,{})]})})}var Y=a(55);function X(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),a=t[0],c=t[1];return Object(s.useEffect)((function(){return c(!0)}),[]),Object(l.jsxs)("div",{id:"home",className:"text-xl flex flex-col mb-72 space-y-10 pt-10 min-h-128 text-theme-accent",children:[Object(l.jsx)("div",{className:"".concat(a?"":"translate-y-10 opacity-0"," transform transition duration-1000 ease-in-out"),children:Object(l.jsx)("span",{className:"text-3xl font-bold text-theme-pink",children:"Anthony Krueger"})}),Object(l.jsx)("div",{className:"".concat(a?"":"translate-y-10 opacity-0"," transform transition duration-1000 ease-in-out"),children:Object(l.jsx)(Y.a,{className:"font-mono",steps:['"Full Stack Web Developer"',2e3,'"Front End Designer"',2e3,'"Database/API Developer"',2e3,'"All Around Cool Dude"',2e3],loop:1/0,wrapper:"span"})})]})}function Z(){return Object(l.jsxs)("div",{className:"my-5 py-40 h-screen text-center container mx-auto",children:[Object(l.jsx)(X,{}),Object(l.jsx)("a",{className:"relative right-0",href:"#aboutme",children:Object(l.jsx)("i",{className:"fas fa-chevron-down mt-20 text-2xl text-theme-accent-light animate-bounce float-right relative"})})]})}var $=a.p+"static/media/profilePhoto.29d3dd26.JPG";function ee(){return Object(l.jsx)("div",{id:"aboutme",children:Object(l.jsxs)("div",{className:"my-5 pb-5 container mx-auto rounded-lg shadow-lg bg-theme-light",children:[Object(l.jsx)(o,{text:"About Me"}),Object(l.jsxs)("div",{className:"px-10 md:px-32",children:[Object(l.jsx)("div",{className:"container rounded-lg w-3/4 md:w-3/4 pt-10 flex mx-auto",children:Object(l.jsx)("img",{className:"rounded border-4 border-theme-purple",src:$,alt:""})}),Object(l.jsx)("div",{className:"flex mt-10 mx-auto py-5 px-5 container bg-theme-main rounded",children:Object(l.jsxs)("span",{className:"text-theme-yellow",children:["Hi! As you may have guessed by now, my name is ",Object(l.jsx)("span",{className:"text-theme-pink",children:"Anthony Krueger"})," and I'm a ",Object(l.jsx)("span",{className:"text-theme-orange",children:"full stack web developer"})," currently residing in Illinois. I'm a ",Object(l.jsx)("span",{className:"text-theme-orange",children:"quick learner"})," and I enjoy ",Object(l.jsx)("span",{className:"text-theme-orange",children:"frontend design"}),", but also am very fond of backend work like ",Object(l.jsx)("span",{className:"text-theme-orange",children:"database and API management"}),". I am equipped with a firm understanding of the ",Object(l.jsx)("span",{className:"text-theme-orange",children:"MERN stack"})," and am learning new technologies every day."]})}),Object(l.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-x-5",children:[Object(l.jsxs)("div",{className:"flex flex-col mt-10 mx-auto py-5 px-5 container bg-theme-main rounded",children:[Object(l.jsx)("h2",{className:"text-xl font-semibold text-theme-purple",children:"Passions"}),Object(l.jsxs)("ul",{className:"list-disc text-theme-pink pl-10 text-base md:text-lg md:pl-0 md:mx-auto pt-5",children:[Object(l.jsx)("li",{children:"Coding"}),Object(l.jsx)("li",{children:"Design"}),Object(l.jsx)("li",{children:"Learning New Technologies"})]})]}),Object(l.jsxs)("div",{className:"flex flex-col mt-10 mx-auto py-5 px-5 container bg-theme-main rounded",children:[Object(l.jsx)("h2",{className:"text-xl font-semibold text-theme-accent-light",children:"Strengths"}),Object(l.jsxs)("ul",{className:"list-disc text-theme-purple pl-10 text-base md:text-lg md:pl-0 md:mx-auto pt-5",children:[Object(l.jsx)("li",{children:"Leadership"}),Object(l.jsx)("li",{children:"Problem Solving"}),Object(l.jsx)("li",{children:"Teamwork"})]})]}),Object(l.jsxs)("div",{className:"flex flex-col mt-10 mx-auto py-5 px-5 container bg-theme-main rounded",children:[Object(l.jsx)("h2",{className:"text-xl font-semibold text-theme-accent",children:"Hobbies"}),Object(l.jsxs)("ul",{className:"list-disc text-theme-accent-light pl-10 text-base md:text-lg md:pl-0 md:mx-auto pt-5",children:[Object(l.jsx)("li",{children:"Running Game Servers"}),Object(l.jsx)("li",{children:"Skateboarding"}),Object(l.jsx)("li",{children:"Spending time with Animals"})]})]})]})]})]})})}var te=a(6),ae=a.n(te),se=a(24),ce=a(36),ne=a(54),ie=a.n(ne);function re(e){var t=e.hideFunction,a=e.message,s=e.color;return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"text-white transition duration-500 ease-in-out flex px-6 py-4 border-0 rounded relative mb-4 ".concat(s),children:[Object(l.jsxs)("span",{className:"inline-block align-middle mr-8",children:[Object(l.jsx)("b",{className:"capitalize",children:"Alert: "})," ",a]}),Object(l.jsx)("button",{onClick:t,className:"absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none",children:Object(l.jsx)("span",{children:"\xd7"})})]})})}function le(){var e=Object(s.useState)({email:"",message:""}),t=Object(r.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)({show:!1,message:null,color:"bg-theme-accent-light"}),i=Object(r.a)(n,2),h=i[0],m=i[1];function j(e,t){c(Object(d.a)(Object(d.a)({},a),{},Object(ce.a)({},e,t)))}function b(){return(b=Object(se.a)(ae.a.mark((function e(t){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,ie.a.post("/api/mail",{email:a.email,message:a.message}).catch((function(e){e.response?(console.log(e.response),m({show:!0,message:e.response.data.message,color:"bg-theme-orange"})):e.request?(console.log(e.request),m({show:!0,message:e.request,color:"bg-theme-orange"})):(console.log("error:",e.message),m({show:!0,message:e.message,color:"bg-theme-orange"}))}));case 3:e.sent&&(c({message:"",email:""}),m({show:!0,message:"Email Sent!",color:"bg-theme-accent-light"}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(l.jsxs)("div",{id:"contactme",className:"my-5 pb-5 container mx-auto",children:[Object(l.jsx)(o,{text:"Contact Me"}),Object(l.jsxs)("form",{onSubmit:function(e){return function(e){return b.apply(this,arguments)}(e)},className:"flex flex-col mx-5 md:mx-20 my-10 rounded bg-theme-main px-10 py-10",children:[Object(l.jsxs)("div",{className:"mb-6",children:[Object(l.jsx)("label",{className:"block text-theme-pink text-sm font-bold mb-2",htmlFor:"email",children:"Email"}),Object(l.jsx)("input",{required:!0,value:a.email,type:"email",onChange:function(e){return j("email",e.target.value)},className:"shadow bg-theme-light appearance-none rounded w-full py-2 px-3 text-theme-orange leading-tight focus:outline-none focus:shadow-outline",id:"email",placeholder:"Your Email Here"})]}),Object(l.jsxs)("div",{className:"mb-4",children:[Object(l.jsx)("label",{className:"block text-theme-pink text-sm font-bold mb-2",htmlFor:"message",children:"Message"}),Object(l.jsx)("textarea",{required:!0,value:a.message,onChange:function(e){return j("message",e.target.value)},className:"h-64 shadow bg-theme-light appearance-none rounded w-full py-2 px-3 text-theme-yellow leading-tight focus:outline-none focus:shadow-outline",id:"message",placeholder:"Leave me a message!"})]}),Object(l.jsx)("div",{className:"mx-auto",children:Object(l.jsx)("button",{type:"submit4",className:"bg-theme-main transition duration-200 font-semibold text-lg hover:bg-theme-light text-theme-accent-light py-2 px-4 rounded",children:"Send Message"})})]}),Object(l.jsx)("div",{className:"w-full",children:h.show?Object(l.jsx)(re,{message:h.message,color:h.color,hideFunction:function(){m(Object(d.a)(Object(d.a)({},h),{},{show:!1}))}}):null})]})}function oe(){return Object(l.jsxs)("div",{id:"links",className:"my-5 pb-5 container mx-auto rounded-lg shadow-lg bg-theme-light",children:[Object(l.jsx)(o,{text:"Links"}),Object(l.jsxs)("div",{className:"flex flex-col space-y-5 mx-auto py-5",children:[Object(l.jsx)("div",{className:"mx-auto transition duration-200 text-theme-accent-light hover:text-theme-purple",children:Object(l.jsxs)("a",{className:"space-x-2 text-3xl",href:"https://github.com/AnthonyKrueger",target:"_blank",rel:"noreferrer",children:[Object(l.jsx)("i",{className:"fab fa-github"}),Object(l.jsx)("span",{className:"font-semibold",children:"GitHub"})]})}),Object(l.jsx)("div",{className:"mx-auto transition duration-200 text-theme-accent-light hover:text-theme-purple",children:Object(l.jsxs)("a",{className:"space-x-2 text-3xl",href:"https://www.linkedin.com/in/anthony-krueger-1545a5208/",target:"_blank",rel:"noreferrer",children:[Object(l.jsx)("i",{className:"fab fa-linkedin"}),Object(l.jsx)("span",{className:"font-semibold",children:"LinkedIn"})]})}),Object(l.jsx)("div",{className:"pt-10 mx-auto transition duration-200 text-theme-pink hover:text-theme-purple",children:Object(l.jsxs)("a",{className:"space-x-2 text-3xl",href:"/AK_Resume.pdf",target:"_blank",rel:"noreferrer",download:!0,children:[Object(l.jsx)("i",{className:"fas fa-file-download"}),Object(l.jsx)("span",{className:"font-semibold",children:"Download My Resume"})]})})]})]})}function de(e){var t=e.icon,a=e.text,s=e.link;return Object(l.jsxs)("a",{href:s,target:"_blank",rel:"noreferrer",className:"text-5xl flex flex-col items-center text-theme-accent-light transition duration-200 hover:text-theme-purple py-2 px-5",children:[t,Object(l.jsx)("p",{className:"text-sm pt-1 text-theme-orange",children:a})]})}var he=a(21),me=a(27),je=a(16);function be(){return Object(l.jsx)("div",{className:"my-5 container mx-auto rounded-lg shadow-lg bg-theme-light",children:Object(l.jsxs)("div",{id:"skills",children:[Object(l.jsx)(o,{text:"Skills"}),Object(l.jsxs)("div",{className:"p-5",children:[Object(l.jsx)("h2",{className:"text-2xl underline pt-5 pb-7 text-theme-pink font-bold",children:"Languages"}),Object(l.jsxs)("div",{className:"bg-theme-main p-5 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-8 rounded-sm",children:[Object(l.jsx)(de,{text:"Javascript",link:"https://www.javascript.com/",icon:Object(l.jsx)(he.e,{})}),Object(l.jsx)(de,{text:"HTML5",link:"https://html.com/",icon:Object(l.jsx)(he.c,{})}),Object(l.jsx)(de,{text:"CSS3",link:"https://developer.mozilla.org/en-US/docs/Web/CSS",icon:Object(l.jsx)(he.a,{})}),Object(l.jsx)(de,{text:"MySQL",link:"https://www.mysql.com/",icon:Object(l.jsx)(me.c,{})}),Object(l.jsx)(de,{text:"MongoDB",link:"https://www.mongodb.com/",icon:Object(l.jsx)(he.g,{})})]}),Object(l.jsx)("h2",{className:"text-2xl underline pt-5 pb-7 text-theme-pink font-bold",children:"Applications"}),Object(l.jsxs)("div",{className:"bg-theme-main p-5 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-8 rounded-sm",children:[Object(l.jsx)(de,{text:"Github",link:"https://github.com/",icon:Object(l.jsx)(he.b,{})}),Object(l.jsx)(de,{text:"Heroku",link:"https://www.heroku.com/",icon:Object(l.jsx)(me.b,{})}),Object(l.jsx)(de,{text:"MongoAtlas",link:"https://www.mongodb.com/atlas/database",icon:Object(l.jsx)(je.f,{})}),Object(l.jsx)(de,{text:"AWS",link:"https://aws.amazon.com/console/",icon:Object(l.jsx)(je.b,{})})]}),Object(l.jsx)("h2",{className:"text-2xl underline pt-5 pb-7 text-theme-pink font-bold",children:"Tools"}),Object(l.jsxs)("div",{className:"bg-theme-main p-5 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-8 rounded-sm",children:[Object(l.jsx)(de,{text:"ReactJS",link:"https://reactjs.org/",icon:Object(l.jsx)(me.e,{})}),Object(l.jsx)(de,{text:"NodeJS",link:"https://nodejs.dev/",icon:Object(l.jsx)(me.d,{})}),Object(l.jsx)(de,{text:"ExpressJS",link:"https://expressjs.com/",icon:Object(l.jsx)(je.e,{})}),Object(l.jsx)(de,{text:"Bootstrap",link:"https://getbootstrap.com/",icon:Object(l.jsx)(je.d,{})}),Object(l.jsx)(de,{text:"MaterializeCSS",link:"https://materializecss.com/",icon:Object(l.jsx)(he.f,{})}),Object(l.jsx)(de,{text:"TailwindCSS",link:"https://tailwindcss.com/",icon:Object(l.jsx)(je.i,{})}),Object(l.jsx)(de,{text:"SASS",link:"https://sass-lang.com/",icon:Object(l.jsx)(je.g,{})}),Object(l.jsx)(de,{text:"jQuery",link:"https://jquery.com/",icon:Object(l.jsx)(he.d,{})}),Object(l.jsx)(de,{text:"Sequelize",link:"https://sequelize.org/",icon:Object(l.jsx)(je.h,{})}),Object(l.jsx)(de,{text:"GraphQL",link:"https://graphql.org/",icon:Object(l.jsx)(me.a,{})}),Object(l.jsx)(de,{text:"Apollo",link:"https://www.apollographql.com/",icon:Object(l.jsx)(je.c,{})}),Object(l.jsx)(de,{text:"Photoshop",link:"https://www.adobe.com/products/photoshop.html",icon:Object(l.jsx)(je.a,{})})]})]})]})})}function xe(e){var t=e.href,a=e.text;return Object(l.jsx)("a",{href:t,children:Object(l.jsx)("div",{className:"rounded transition duration-300 block py-4 px-4 hover:bg-theme-main hover:text-theme-purple",children:a})})}function pe(e){var t="bg-theme-light text-theme-pink inset-y-0 left-0 space-y-5 z-50 w-72 absolute -translate-x-full transform transition duration-200 ease-in-out md:relative md:translate-x-0";return t=e.openState?"bg-theme-light text-theme-pink inset-y-0 left-0 space-y-5 z-50 w-72 absolute transform transition duration-200 ease-in-out md:relative md:translate-x-0":"bg-theme-light text-theme-pink inset-y-0 left-0 space-y-5 z-50 w-72 absolute -translate-x-full transform transition duration-200 ease-in-out md:relative md:translate-x-0",Object(l.jsxs)("div",{className:t,children:[Object(l.jsx)("a",{href:"#home",children:Object(l.jsxs)("div",{className:"flex items-center space-x-3 pt-10 px-1 pb-10",children:[Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),Object(l.jsx)("span",{className:"text-xl font-bold",children:"Web Dev Portfolio"})]})}),Object(l.jsxs)("nav",{className:"text-theme-accent-light px-3",children:[Object(l.jsx)(xe,{href:"#aboutme",text:"About Me"}),Object(l.jsx)(xe,{href:"#projects",text:"Projects"}),Object(l.jsx)(xe,{href:"#skills",text:"Skills"}),Object(l.jsx)(xe,{href:"#links",text:"Links"}),Object(l.jsx)(xe,{href:"#contactme",text:"Contact Me"})]})]})}function ue(e){var t=e.openState,a=e.toggleFunction;var s="bg-black absolute opacity-50 z-20 h-screen w-screen";return s=t?"bg-black absolute opacity-50 z-20 h-screen w-screen":"bg-black hidden absolute opacity-50 z-20 h-screen w-screen",Object(l.jsxs)("div",{className:"bg-theme-light flex justify-between md:hidden fixed z-50 w-screen border-b-2 border-theme-purple",children:[Object(l.jsx)("div",{onClick:function(){return a(!1)},className:s}),Object(l.jsxs)("a",{href:"#home",className:"space-x-1 p-4 flex text-theme-pink font-bold",children:[Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:" mt-2h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),Object(l.jsx)("span",{className:"text-base font-bold",children:"Web Dev Portfolio"})]}),Object(l.jsx)("button",{className:"text-theme-accent-light mx-5 focus:outline-none",onClick:function(){a(!t)},children:Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})]})}var ge=function(){var e=c.a.useState(!1),t=Object(r.a)(e,2),a=t[0],s=t[1];return Object(l.jsxs)("div",{id:"main",className:"h-screen flex bg-theme-main overflow-hidden",children:[Object(l.jsx)(ue,{openState:a,toggleFunction:s}),Object(l.jsx)(pe,{openState:a}),Object(l.jsxs)("div",{onClick:function(){return s(!1)},id:"content",className:"flex flex-col py-5 md:mx-7 space-y-20 w-full overflow-y-auto mt-5 md:mt-0",children:[Object(l.jsx)(Z,{}),Object(l.jsx)(ee,{}),Object(l.jsx)(V,{}),Object(l.jsx)(be,{}),Object(l.jsx)(oe,{}),Object(l.jsx)(le,{})]})]})},Oe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,132)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),s(e),c(e),n(e),i(e)}))};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(ge,{})}),document.getElementById("root")),Oe()},67:function(e,t,a){},68:function(e,t,a){}},[[105,1,2]]]);
//# sourceMappingURL=main.ff2df243.chunk.js.map