(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{51:function(e,t,a){},52:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(17),i=a.n(c),r=a(20),l=(a(50),a(51),a(52),a(1));function o(e){var t=e.text;return Object(l.jsx)("div",{className:"bg-theme-main h-20 border-b-2 border-theme-purple","data-replace":'{ "translate-y-12": "translate-y-0" }',children:Object(l.jsx)("h2",{className:"pt-4 ml-5 font-bold text-4xl text-theme-accent",children:t})})}var d=a(21),h=a(40),m=a(96),x=a(94),b=a(91),j=a(93),p=a(38),u=a.n(p);function g(e){var t=e.images.map((function(e){return Object(l.jsx)("img",{src:e,alt:""},e)}));return Object(l.jsx)("div",{className:"center md:mx-16",children:Object(l.jsx)(u.a,{className:"carousel",elementType:"div",options:{initialIndex:0,contain:!0,prevNextButtons:!1,autoPlay:5e3,wrapAround:!0},disableImagesLoaded:!1,reloadOnUpdate:!0,static:!0,children:t})})}function f(e){var t=e.images,a=e.title,s=e.description,n=e.techUsed,c=e.role,i=e.links;return Object(l.jsxs)("div",{children:[Object(l.jsx)(g,{images:t}),Object(l.jsx)("h2",{className:"text-3xl underline pt-5 pb-7 text-theme-pink font-bold",children:a}),Object(l.jsxs)("div",{className:"pl-5 flex flex-col mx-auto space-y-2 bg-theme-main py-3 rounded md:px-10",children:[Object(l.jsxs)("span",{className:"text-theme-yellow",children:[Object(l.jsx)("strong",{className:"text-theme-accent",children:"Description: "}),s]}),Object(l.jsxs)("span",{className:"text-theme-yellow",children:[Object(l.jsx)("strong",{className:"text-theme-accent",children:"Role: "}),c]}),Object(l.jsxs)("span",{className:"text-theme-orange",children:[Object(l.jsx)("strong",{className:"text-theme-accent",children:"Technologies Used: "}),n]})]}),Object(l.jsxs)("div",{className:"pt-7 flex flex-row space-x-10",children:[Object(l.jsx)("a",{rel:"noreferrer",className:"text-theme-accent-light font-semibold text-lg hover:text-theme-purple transition duration-200",href:i.deployed,target:"_blank",children:"Deployed App"}),Object(l.jsx)("a",{href:i.github,target:"_blank",rel:"noreferrer",children:Object(l.jsx)("i",{className:"text-theme-accent-light hover:text-theme-purple fab fa-github text-3xl transition duration-200"})})]})]})}var O=a.p+"static/media/techblog1.61d73ba5.png",v=a.p+"static/media/techblog2.e0bdd90a.png",y=a.p+"static/media/techblog3.912f54bd.png",N=a.p+"static/media/trashparty1.f451a1aa.png",k=a.p+"static/media/trashparty2.54cf9c32.png",w=a.p+"static/media/trashparty3.da6596f5.png",S=a.p+"static/media/trashparty4.59b9a342.png",T=a.p+"static/media/tcgTracker1.f5e758fb.png",M=a.p+"static/media/tcgTracker2.b2fb65c2.png",C=a.p+"static/media/tcgTracker3.6a195c67.png",P=["children","value","index"],L=[O,v,y],A={github:"https://github.com/AnthonyKrueger/MVC_Demo-Tech_Blog",deployed:"https://ak-tech-blog.herokuapp.com/"},I=[T,M,C],D={github:"https://github.com/Project01-TCG-Price-Tracker/TCG_Price_Tracker",deployed:"https://project01-tcg-price-tracker.github.io/TCG_Price_Tracker/"},z=[N,k,w,S],B={github:"https://github.com/Q-GAP/TrashParty",deployed:"https://trashy-houseparty.herokuapp.com/"};function _(e){var t=e.children,a=e.value,s=e.index,n=Object(h.a)(e,P);return Object(l.jsx)("div",Object(d.a)(Object(d.a)({role:"tabpanel",hidden:a!==s,id:"simple-tabpanel-".concat(s),"aria-labelledby":"simple-tab-".concat(s)},n),{},{children:a===s&&Object(l.jsx)(j.a,{p:3,children:t})}))}function H(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}function G(){var e=n.a.useState(0),t=Object(r.a)(e,2),a=t[0],s=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(m.a,{className:"bg-theme-main",position:"static",children:Object(l.jsxs)(x.a,{className:"bg-theme-main text-theme-accent-light",TabIndicatorProps:{style:{background:"#ff79c6"}},value:a,onChange:function(e,t){s(t)},"aria-label":"simple tabs example",children:[Object(l.jsx)(b.a,Object(d.a)({className:"focus:outline-none",label:"TCG Tracker"},H(0))),Object(l.jsx)(b.a,Object(d.a)({className:"focus:outline-none",label:"Trash Party"},H(1))),Object(l.jsx)(b.a,Object(d.a)({className:"focus:outline-none",label:"Tech Blog"},H(2)))]})}),Object(l.jsx)(_,{className:"bg-theme-light rounded",value:a,index:0,children:Object(l.jsx)(f,{title:"TCG Price Tracker",images:I,role:"Backend Lead/Frontend Support",techUsed:"Javascript, HTML, CSS, jQuery, Materialize, API's, Font-Awesome",description:"An application to search a Pokemon card database by specific search criteria. Cards can be saved to a list of favorites to keep track of cards you like or have. Card arts can be clicked on to display a page with more information on the card including the artist and ID. Prices can be converted into different forms of cryptocurrency which are kept updated using an API",links:D})}),Object(l.jsx)(_,{className:"bg-theme-light rounded",value:a,index:1,children:Object(l.jsx)(f,{title:"Trash Party",images:z,role:"Backend Lead/Creator",techUsed:"Javascript, NodeJS, MySQL, Sequelize, Express, Handlebars, Express-Sessions, HTML, CSS, jQuery, Materialize, GiphyAPI",description:"A website where twice a day the user can open a pack of random gifs of different types and rarities, jokingly name 'trash'. You can trade your 'trash' with other users until you get items you like. Throw cards you don't like away into the landfill for other users to collect, or trade specific cards user-to-user to get specific trash. Basically a virtual trading card game built using relational databases and ExpressJS.",links:B})}),Object(l.jsx)(_,{value:a,index:2,children:Object(l.jsx)(f,{title:"Tech Blog",images:L,role:"Sole Developer",techUsed:"NodeJS, Express, MySQL, Handlebars, Javascript, HTML, CSS",description:"This is a simple CMS-Style blog application built to demonstrate knowledge of the Model View Controller structure in web app development. It allows the user to create an account with an encrypted password and then create posts or comment on other user's content. All data is stored in a MySQL database.",links:A})})]})}function E(){return Object(l.jsx)("div",{className:"my-5 container mx-auto rounded-lg shadow-lg bg-theme-light",children:Object(l.jsxs)("div",{id:"projects",children:[Object(l.jsx)(o,{text:"Projects"}),Object(l.jsx)(G,{})]})})}var F=a(39);function J(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(s.useEffect)((function(){return n(!0)}),[]),Object(l.jsxs)("div",{id:"home",className:"text-xl flex flex-col mb-72 space-y-10 pt-10 min-h-128 text-theme-accent",children:[Object(l.jsx)("div",{className:"".concat(a?"":"translate-y-10 opacity-0"," transform transition duration-1000 ease-in-out"),children:Object(l.jsx)("span",{className:"text-3xl font-bold text-theme-pink",children:"Anthony Krueger"})}),Object(l.jsx)("div",{className:"".concat(a?"":"translate-y-10 opacity-0"," transform transition duration-1000 ease-in-out"),children:Object(l.jsx)(F.a,{className:"font-mono",steps:['"Full Stack Web Developer"',2e3,'"UI/UX Designer"',2e3,'"Database/API Manager"',2e3,'"All Around Cool Dude"',2e3],loop:1/0,wrapper:"span"})})]})}function U(){return Object(l.jsxs)("div",{className:"my-5 py-40 h-screen text-center container mx-auto",children:[Object(l.jsx)(J,{}),Object(l.jsx)("a",{className:"relative right-0",href:"#aboutme",children:Object(l.jsx)("i",{className:"fas fa-chevron-down mt-20 text-2xl text-theme-accent-light animate-bounce float-right relative"})})]})}var Q=a.p+"static/media/profilePhoto.fb7f6115.JPG";function W(){return Object(l.jsx)("div",{id:"aboutme",children:Object(l.jsxs)("div",{className:"my-5 pb-5 container mx-auto rounded-lg shadow-lg bg-theme-light",children:[Object(l.jsx)(o,{text:"About Me"}),Object(l.jsxs)("div",{className:"px-10 md:px-32",children:[Object(l.jsx)("div",{className:"container rounded-lg w-64 md:w-72 pt-10 flex mx-auto",children:Object(l.jsx)("img",{className:"rounded border-4 border-theme-purple",src:Q,alt:""})}),Object(l.jsx)("div",{className:"flex mt-10 mx-auto py-5 px-5 container bg-theme-main rounded",children:Object(l.jsxs)("span",{className:"text-theme-yellow",children:["Hi! As you may have guessed by now, my name is ",Object(l.jsx)("span",{className:"text-theme-pink",children:"Anthony Krueger"})," and I'm a ",Object(l.jsx)("span",{className:"text-theme-orange",children:"full stack web developer"})," currently residing in Illinois. I'm a ",Object(l.jsx)("span",{className:"text-theme-orange",children:"quick learner"})," who specializes in backend work like ",Object(l.jsx)("span",{className:"text-theme-orange",children:"database and API management"}),", but also greatly enjoy frontend design. I am equipped with a firm understanding of the ",Object(l.jsx)("span",{className:"text-theme-orange",children:"MERN stack"})," and am learning new technologies every day."]})}),Object(l.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-x-5",children:[Object(l.jsxs)("div",{className:"flex flex-col mt-10 mx-auto py-5 px-5 container bg-theme-main rounded",children:[Object(l.jsx)("h2",{className:"text-xl font-semibold text-theme-purple",children:"Passions"}),Object(l.jsxs)("ul",{className:"list-disc text-theme-pink pl-10 text-base md:text-lg md:pl-0 md:mx-auto pt-5",children:[Object(l.jsx)("li",{children:"Coding"}),Object(l.jsx)("li",{children:"Design"}),Object(l.jsx)("li",{children:"Learning New Technologies"})]})]}),Object(l.jsxs)("div",{className:"flex flex-col mt-10 mx-auto py-5 px-5 container bg-theme-main rounded",children:[Object(l.jsx)("h2",{className:"text-xl font-semibold text-theme-accent-light",children:"Strengths"}),Object(l.jsxs)("ul",{className:"list-disc text-theme-purple pl-10 text-base md:text-lg md:pl-0 md:mx-auto pt-5",children:[Object(l.jsx)("li",{children:"Leadership"}),Object(l.jsx)("li",{children:"Problem Solving"}),Object(l.jsx)("li",{children:"Teamwork"})]})]}),Object(l.jsxs)("div",{className:"flex flex-col mt-10 mx-auto py-5 px-5 container bg-theme-main rounded",children:[Object(l.jsx)("h2",{className:"text-xl font-semibold text-theme-accent",children:"Hobbies"}),Object(l.jsxs)("ul",{className:"list-disc text-theme-accent-light pl-10 text-base md:text-lg md:pl-0 md:mx-auto pt-5",children:[Object(l.jsx)("li",{children:"Running Game Servers"}),Object(l.jsx)("li",{children:"Skateboarding"}),Object(l.jsx)("li",{children:"Spending time with Animals"})]})]})]})]})]})})}function K(){return Object(l.jsxs)("div",{id:"contactme",className:"my-5 pb-5 container mx-auto",children:[Object(l.jsx)(o,{text:"Contact Me"}),Object(l.jsxs)("form",{className:"flex flex-col mx-5 md:mx-20 my-10 rounded bg-theme-main px-10 py-10",children:[Object(l.jsxs)("div",{className:"mb-6",children:[Object(l.jsx)("label",{className:"block text-theme-pink text-sm font-bold mb-2",for:"email",children:"Email"}),Object(l.jsx)("input",{className:"shadow bg-theme-light appearance-none rounded w-full py-2 px-3 text-theme-orange leading-tight focus:outline-none focus:shadow-outline",id:"email",type:"text",placeholder:"Your Email Here"})]}),Object(l.jsxs)("div",{className:"mb-4",children:[Object(l.jsx)("label",{className:"block text-theme-pink text-sm font-bold mb-2",for:"message",children:"Message"}),Object(l.jsx)("textarea",{className:"h-64 shadow bg-theme-light appearance-none rounded w-full py-2 px-3 text-theme-yellow leading-tight focus:outline-none focus:shadow-outline",id:"message",placeholder:"Leave me a message!"})]}),Object(l.jsx)("div",{className:"mx-auto",children:Object(l.jsx)("button",{type:"submit",className:"bg-theme-main transition duration-200 font-semibold text-lg hover:bg-theme-light text-theme-accent-light py-2 px-4 rounded",children:"Send Message"})})]})]})}function R(){return Object(l.jsxs)("div",{id:"links",className:"my-5 pb-5 container mx-auto rounded-lg shadow-lg bg-theme-light",children:[Object(l.jsx)(o,{text:"Links"}),Object(l.jsxs)("div",{className:"flex flex-col space-y-5 mx-auto py-5",children:[Object(l.jsx)("div",{className:"mx-auto transition duration-200 text-theme-accent-light hover:text-theme-purple",children:Object(l.jsxs)("a",{className:"space-x-2 text-3xl",href:"https://github.com/AnthonyKrueger",target:"_blank",rel:"noreferrer",children:[Object(l.jsx)("i",{className:"fab fa-github"}),Object(l.jsx)("span",{className:"font-semibold",children:"GitHub"})]})}),Object(l.jsx)("div",{className:"mx-auto transition duration-200 text-theme-accent-light hover:text-theme-purple",children:Object(l.jsxs)("a",{className:"space-x-2 text-3xl",href:"https://www.linkedin.com/in/anthony-krueger-1545a5208/",target:"_blank",rel:"noreferrer",children:[Object(l.jsx)("i",{className:"fab fa-linkedin"}),Object(l.jsx)("span",{className:"font-semibold",children:"LinkedIn"})]})}),Object(l.jsx)("div",{className:"pt-10 mx-auto transition duration-200 text-theme-pink hover:text-theme-purple",children:Object(l.jsxs)("a",{className:"space-x-2 text-3xl",href:"/AK_Resume.pdf",target:"_blank",rel:"noreferrer",download:!0,children:[Object(l.jsx)("i",{className:"fas fa-file-download"}),Object(l.jsx)("span",{className:"font-semibold",children:"Download My Resume"})]})})]})]})}function V(e){var t=e.href,a=e.text;return Object(l.jsx)("a",{href:t,children:Object(l.jsx)("div",{className:"rounded transition duration-300 block py-4 px-4 hover:bg-theme-main hover:text-theme-purple",children:a})})}function q(e){var t="bg-theme-light text-theme-pink inset-y-0 left-0 space-y-5 z-50 w-72 absolute -translate-x-full transform transition duration-200 ease-in-out md:relative md:translate-x-0";return t=e.openState?"bg-theme-light text-theme-pink inset-y-0 left-0 space-y-5 z-50 w-72 absolute transform transition duration-200 ease-in-out md:relative md:translate-x-0":"bg-theme-light text-theme-pink inset-y-0 left-0 space-y-5 z-50 w-72 absolute -translate-x-full transform transition duration-200 ease-in-out md:relative md:translate-x-0",Object(l.jsxs)("div",{className:t,children:[Object(l.jsx)("a",{href:"#home",children:Object(l.jsxs)("div",{className:"flex items-center space-x-3 pt-10 px-1 pb-10",children:[Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),Object(l.jsx)("span",{className:"text-xl font-bold",children:"Web Dev Portfolio"})]})}),Object(l.jsxs)("nav",{className:"text-theme-accent-light px-3",children:[Object(l.jsx)(V,{href:"#aboutme",text:"About Me"}),Object(l.jsx)(V,{href:"#projects",text:"Projects"}),Object(l.jsx)(V,{href:"#skills",text:"Skills"}),Object(l.jsx)(V,{href:"#links",text:"Links"}),Object(l.jsx)(V,{href:"#contactme",text:"Contact Me"})]})]})}function Y(e){var t=e.openState,a=e.toggleFunction;var s="bg-black absolute opacity-50 z-20 h-screen w-screen";return s=t?"bg-black absolute opacity-50 z-20 h-screen w-screen":"bg-black hidden absolute opacity-50 z-20 h-screen w-screen",Object(l.jsxs)("div",{className:"bg-theme-light flex justify-between md:hidden fixed z-50 w-screen border-b-2 border-theme-purple",children:[Object(l.jsx)("div",{onClick:function(){return a(!1)},className:s}),Object(l.jsxs)("a",{href:"#home",className:"space-x-1 p-4 flex text-theme-pink font-bold",children:[Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:" mt-2h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),Object(l.jsx)("span",{className:"text-base font-bold",children:"Web Dev Portfolio"})]}),Object(l.jsx)("button",{className:"text-theme-accent-light mx-5 focus:outline-none",onClick:function(){a(!t)},children:Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})]})}var X=function(){var e=n.a.useState(!1),t=Object(r.a)(e,2),a=t[0],s=t[1];return Object(l.jsxs)("div",{id:"main",className:"h-screen flex bg-theme-main overflow-hidden",children:[Object(l.jsx)(Y,{openState:a,toggleFunction:s}),Object(l.jsx)(q,{openState:a}),Object(l.jsxs)("div",{onClick:function(){return s(!1)},id:"content",className:"flex flex-col py-5 mx-7 space-y-20 w-full overflow-y-auto mt-5 md:mt-0",children:[Object(l.jsx)(U,{}),Object(l.jsx)(W,{}),Object(l.jsx)(E,{}),Object(l.jsx)(R,{}),Object(l.jsx)(K,{})]})]})},Z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,98)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),c(e),i(e)}))};i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(X,{})}),document.getElementById("root")),Z()}},[[71,1,2]]]);
//# sourceMappingURL=main.923fa97d.chunk.js.map