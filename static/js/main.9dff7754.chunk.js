(this.webpackJsonpmon_fil=this.webpackJsonpmon_fil||[]).push([[0],{64:function(e,t,c){},65:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(27),r=c.n(s),i=c(4),a=c(0),j=function(){var e=function(){document.querySelectorAll(".social-network a").forEach((function(e){e.addEventListener("mouseover",(function(t){var c=t.offsetX-30,n=t.offsetY-3;e.style.transform="translate(".concat(c,"px, ").concat(n,"px)")})),e.addEventListener("mouseleave",(function(){e.style.transform=""}))}))};return Object(a.jsxs)("div",{className:"social-network",children:[Object(a.jsx)("ul",{className:"content",children:Object(a.jsx)("a",{href:"https://www.facebook.com",target:"blank",rel:"noopener noreferrer",className:"hover",onMouseOver:e,children:Object(a.jsx)("li",{children:Object(a.jsx)("i",{className:"fab fa-facebook color-social"})})})}),Object(a.jsx)("ul",{className:"content",children:Object(a.jsx)("a",{href:"https://www.linkedin.com/in/clement-dominique",target:"blank",rel:"noopener noreferrer",className:"hover",onMouseOver:e,children:Object(a.jsx)("li",{children:Object(a.jsx)("i",{className:"fab fa-linkedin-in color-lin"})})})})]})},l=function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"navbar",children:[Object(a.jsx)("div",{children:Object(a.jsx)(j,{})}),Object(a.jsxs)("div",{className:"div-block",children:[" ",Object(a.jsxs)("h1",{className:"header-home",children:["Cl\xe9ment",Object(a.jsx)("span",{className:"title-cv",children:"PORTFOLIO"})]})]})]}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsxs)("h2",{children:[Object(a.jsxs)("p",{children:["Bienvenue sur ma page  portfolio, elle est enti\xe8rement r\xe9alis\xe9e en react et ",Object(a.jsx)("span",{className:"en-cours",children:" en cours de r\xe9alisation."}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{children:"Je me presente Cl\xe9ment 33 ans,  vous y trouverez  plusieurs projets sur differentes pages  avec les liens ci dessous  :"}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsxs)("a",{href:"./assets/img/cv.jpg",target:"_blank",children:[" ",Object(a.jsx)("li",{className:"lien-cv",children:" Ici un lien  pour t\xe9l\xe9charger mon cv standard"})]}),Object(a.jsx)("br",{}),Object(a.jsx)("li",{children:"  Au milieu de la page d'acceuil avec 4 liens de projets "}),Object(a.jsx)("br",{}),Object(a.jsx)("li",{children:"   Puis un lien qui dirigera  vers la page  de contact"}),Object(a.jsx)("li",{})]}),Object(a.jsx)("p",{})]})]})},o=function(){return Object(a.jsxs)("div",{className:"home ",children:[Object(a.jsx)("div",{className:"header",children:Object(a.jsx)(l,{})}),Object(a.jsx)("div",{className:"projet-flag button-home ",children:Object(a.jsx)(i.b,{to:"/projetFlag",children:Object(a.jsxs)("ul",{children:[" ",Object(a.jsx)("li",{children:"Projet  REACT"})]})})}),Object(a.jsx)("div",{className:"projet-2 button-home ",children:Object(a.jsx)(i.b,{to:"/project-2",children:Object(a.jsxs)("ul",{children:[" ",Object(a.jsx)("li",{children:"Projet  MERN"})]})})}),Object(a.jsxs)("div",{className:"projet-3 button-home ",children:["  ",Object(a.jsx)(i.b,{to:"/project-3",children:Object(a.jsxs)("ul",{children:[" ",Object(a.jsx)("li",{children:"Projet 3"})]})})]}),Object(a.jsxs)("div",{className:"projet-4 button-home",children:["  ",Object(a.jsx)(i.b,{to:"/project-4",children:Object(a.jsxs)("ul",{children:[" ",Object(a.jsx)("li",{children:"Projet PHP"})]})})]}),Object(a.jsxs)("div",{className:" contact1 ",children:[" ",Object(a.jsx)(i.b,{to:"/contact",children:Object(a.jsxs)("ul",{children:[" ",Object(a.jsx)("li",{children:" Me contacter"})]})})]}),Object(a.jsx)("div",{className:"paul",children:Object(a.jsx)("img",{src:".././public/assets/img/projet-2.jpg",alt:""})})]})},b=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"404 404 404 404 "})})},d=c(3),u=function(e){return Object(a.jsx)("div",{className:"scroll-bottom",children:Object(a.jsxs)("div",{className:"sb-main",children:[e.left&&Object(a.jsx)(i.b,{to:e.left,className:"left hover",children:Object(a.jsx)("span",{children:" \u276c"})}),Object(a.jsx)("p",{className:"center",children:"scroll"}),e.right&&Object(a.jsx)(i.b,{to:e.right,className:"right hover",children:Object(a.jsx)("span",{children:" \u276d"})})]})})},O=c(2),m=function(){var e=Object(n.useState)(!1),t=Object(O.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(window.innerWidth),j=Object(O.a)(r,2),l=j[0],o=j[1];return Object(n.useEffect)((function(){var e=function(){o(window.innerWidth),Window.innerWidth>500&&s(!1)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),Object(a.jsxs)("nav",{children:[(c||l>500)&&Object(a.jsxs)("ul",{className:"liste",children:[Object(a.jsx)(i.b,{to:"/",exact:!0,children:Object(a.jsx)("li",{className:"items",children:"Acceuil |"})}),Object(a.jsx)(i.b,{to:"/projetFlag",children:Object(a.jsx)("li",{className:"items",children:"Projet React |"})}),Object(a.jsx)(i.b,{to:"/project-2",children:Object(a.jsx)("li",{className:"items",children:"Porjet MERN |"})}),Object(a.jsx)(i.b,{to:"/project-3",children:Object(a.jsx)("li",{className:"items",children:"Projet 3 |"})}),Object(a.jsx)(i.b,{to:"/project-4",children:Object(a.jsx)("li",{className:"items",children:"Projet PHP |"})}),Object(a.jsx)(i.b,{to:"/contact",children:Object(a.jsx)("li",{className:"items",children:"Contact"})})]}),Object(a.jsx)("button",{onClick:function(){s(!c)},className:"btn",children:"-="})]})},h=c(29),x=c.n(h),p=function(e){var t,c=e.country;return Object(a.jsxs)("li",{className:"card",children:[Object(a.jsx)("img",{src:c.flag,alt:"flag"}),Object(a.jsx)("div",{className:"data-container",children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:c.name}),Object(a.jsx)("li",{children:c.capital}),Object(a.jsxs)("li",{children:["Pop:",(t=c.population,t.toString().replace(/\B(?=(\d{3})+(?!\d))/g," "))]})]})})]})},v=function(){var e=Object(n.useState)([]),t=Object(O.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)([]),i=Object(O.a)(r,2),j=i[0],l=i[1],o=Object(n.useState)(!0),b=Object(O.a)(o,2),d=b[0],u=b[1],m=Object(n.useState)(3),h=Object(O.a)(m,2),v=h[0],f=h[1],g=Object(n.useState)(""),N=Object(O.a)(g,2),y=N[0],k=N[1];return Object(n.useEffect)((function(){d&&x.a.get("https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag").then((function(e){s(e.data),u(!1)}));!function(){var e=Object.keys(c).map((function(e){return c[e]})).sort((function(e,t){return t.population-e.population}));e.length=v,l(e)}()}),[c,v,d]),Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"pays",children:[Object(a.jsxs)("div",{className:"sort-countainer",children:[Object(a.jsx)("input",{type:"range",min:"1",max:"250",value:v,onChange:function(e){return f(e.target.value)}}),Object(a.jsx)("ul",{children:["Africa","America","Asia","Europe","Oceania"].map((function(e){return Object(a.jsxs)("li",{children:[Object(a.jsx)("input",{type:"radio",value:e,id:e,checked:e===y,onChange:function(e){return k(e.target.value)}}),Object(a.jsx)("label",{htmlFor:e,children:e})]},e)}))})]}),Object(a.jsx)("div",{className:"cancel",children:y&&Object(a.jsx)("h5",{onClick:function(){return k("")},children:"Annuler recherche"})}),Object(a.jsx)("ul",{className:"pays_liste",children:j.filter((function(e){return e.region.includes(y)})).map((function(e){return Object(a.jsx)(p,{country:e},e.name)}))})]})})},f=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(m,{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{})," ",Object(a.jsx)("div",{className:"countries",children:Object(a.jsx)("p",{children:"Ici un projet en REACT avec une api rest qui references les drapeaux du monde ( pas tous) avec une methode axios simple "})}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)(v,{}),Object(a.jsx)("div",{className:"countries"}),Object(a.jsx)(u,{left:"/",right:"/project-2"})]})},g=[{id:1,title:"Cas",date:"Janvier 2020",languages:["React","Php","Sass"],infos:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas cumque labore suscipit, pariatur laboriosam autem omnis saepe quisquam enim iste.",img:"./assets/img/react.jpg",link:"http://www.google.com"},{id:2,title:"Projet Mern",date:"Mars 2020",languages:["Express","React","MongoDb"],infos:"Voici un projet avec systeme de crud, une base de donn\xe9e mongodb avec systeme d'authentification",img:"./assets/img/react.png",link:"https://rocky-plains-40656.herokuapp.com/#/"},{id:3,title:"Everpost",date:"Avril 2020",languages:["Wordpress","Php","React"],infos:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas cumque labore suscipit, pariatur laboriosam autem omnis saepe quisquam enim iste.",img:"./assets/img/react.jpg",link:"http://www.google.com"},{id:4,title:"My cave, CRUD",date:"Avril 2021",languages:["Js","Php","MySql"],infos:"Systeme de stock, r\xe9alis\xe9 en php  avec un systeme de crud pour la base de don\xe9e avec mySql et pour le front en bootstrap(4) et javascript",img:"./assets/img/my_cave.png",link:"https://projetcave.000webhostapp.com/"}],N=c(68),y=function(e){Math.floor(200*Math.random()+700),Math.floor(200*Math.random()+150),Math.random();var t=Math.random()>.4?1:-1,c={initial:{opacity:0,x:350*Math.random()*t,y:120*Math.random()*t},visible:{opacity:1,x:0,y:0}},s=Object(n.useState)(g),r=Object(O.a)(s,1)[0][e.projectNumber];return console.log(r),Object(a.jsx)("main",{children:Object(a.jsxs)("div",{className:"project-main",children:[Object(a.jsxs)("div",{className:"project-content",children:[Object(a.jsx)("h1",{children:r.title}),Object(a.jsx)("p",{children:r.date}),Object(a.jsx)("ul",{className:"languages",children:r.languages.map((function(e){return Object(a.jsx)("li",{children:e},e)}))})]}),Object(a.jsx)("div",{className:"img-content",children:Object(a.jsxs)(N.a.div,{className:"img-content",initial:"initial",animate:"visible",variants:c,transition:{duration:1.2},children:[Object(a.jsxs)("div",{className:"img-container hover",children:[Object(a.jsxs)("span",{children:[Object(a.jsx)("h3",{children:r.title}),Object(a.jsx)("p",{children:r.infos})]}),Object(a.jsx)("img",{src:r.img,alt:r.title,className:"img"})]}),Object(a.jsx)("div",{className:"button-container",children:Object(a.jsx)("a",{href:r.link,target:"_blank",rel:"noopener noreferrer",className:"hover",children:Object(a.jsx)("span",{className:"button",children:"Voir le site"})})})]})})]})})},k=function(){return Object(a.jsx)("main",{children:Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)(m,{}),Object(a.jsx)(y,{projectNumber:1}),Object(a.jsx)("div",{className:"absolute",children:Object(a.jsx)(u,{left:"/projetflag",right:"/project-3"})})]})})},C=function(){return Object(a.jsx)("main",{children:Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)(m,{}),Object(a.jsx)(y,{projectNumber:2}),Object(a.jsx)(u,{left:"/project-2",right:"/project-4",className:"absolute"})]})})},w=function(){return Object(a.jsx)("main",{children:Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)(m,{}),Object(a.jsx)(y,{projectNumber:3}),Object(a.jsx)(u,{left:"/project-3",right:"/contact"})]})})},E=c(18),S=c.n(E),M=function(){var e=Object(n.useState)(""),t=Object(O.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(""),i=Object(O.a)(r,2),j=i[0],l=i[1],o=Object(n.useState)(""),b=Object(O.a)(o,2),d=b[0],u=b[1],m=Object(n.useState)(""),h=Object(O.a)(m,2),x=h[0],p=h[1],v=Object(n.useState)(""),f=Object(O.a)(v,2),g=f[0],N=f[1],y=function(e){var t=document.querySelector(".form-message");t.innerHTML=e,t.style.opacity="1",t.style.background="rgb (253,87,87)",document.getElementById("name").classList.add("error"),document.getElementById("email").classList.add("error"),document.getElementById("message").classList.add("error")},k=function(e,t){window.emailjs.send("service_i9eo3a4",e,t).then((function(e){!function(){var e=document.querySelector(".form-message");e.innerHTML="Message envoy\xe9 ! je vous recontacterais au plus vite !",e.style.background="#00c1ec",e.style.opacity="1",document.getElementById("name").classList.remove("error"),document.getElementById("email").classList.remove("error"),document.getElementById("message").classList.remove("error"),setTimeout((function(){e.style.opacity="1"}),5e3)}(),s(""),l(""),u(""),p(""),N("")})).catch((function(e){y("Une erreur s'est produite, veuillez r\xe9essayer.")}))};return Object(a.jsxs)("form",{className:"contact-form",children:[Object(a.jsx)("h2",{children:"Contactez-moi"}),Object(a.jsxs)("div",{className:"form-content",children:[Object(a.jsx)("input",{type:"text",id:"name",name:"name",onChange:function(e){return s(e.target.value)},placeholder:"nom *",value:c,autoComplete:"off"}),Object(a.jsx)("input",{type:"text",id:"company",name:"company",onChange:function(e){return l(e.target.value)},placeholder:"soci\xe9t\xe9",value:j}),Object(a.jsx)("input",{type:"text",id:"phone",name:"phone",onChange:function(e){return u(e.target.value)},placeholder:"t\xe9l\xe9phone",value:d}),Object(a.jsxs)("div",{className:"email-content",children:[Object(a.jsx)("label",{id:"not-mail",children:"Email non valide"}),Object(a.jsx)("input",{type:"mail",id:"email",name:"email",onChange:function(e){return p(e.target.value)},placeholder:"email *",value:x,autoComplete:"off"})]}),Object(a.jsx)("textarea",{id:"message",name:"message",onChange:function(e){return N(e.target.value)},placeholder:"message *",value:g})]}),Object(a.jsx)("input",{className:"button",type:"button",value:"Envoyer",onClick:function(e){e.preventDefault(),c&&function(){var e=document.getElementById("not-mail");return x.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)?(e.style.display="none",!0):(e.style.display="block",e.style.animation="dongle 1s",setTimeout((function(){e.style.animation="none"}),1e3),!1)}()&&g?k("template_1dlii9q",{name:c,company:j,phone:d,email:x,message:g}):y("Merci de remplir correctement les champs   non pas avec des salades mais avec des etoiles * ")}}),Object(a.jsx)("div",{className:"form-message"})]})},q=function(){return Object(a.jsx)("main",{children:Object(a.jsxs)("div",{className:"contact",children:[Object(a.jsx)(m,{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)(j,{}),Object(a.jsx)("div",{className:"phone",children:Object(a.jsx)("div",{className:"content",children:Object(a.jsx)(S.a,{text:"06 71 77 81 35",children:Object(a.jsx)("h3",{style:{cursor:"pointer"},className:"clipboard",onClick:function(){alert("telephone copi\xe9  !")},children:"06 71 77 81 35 "})})})}),Object(a.jsx)("div",{className:"email",children:Object(a.jsxs)("div",{className:"email",children:[Object(a.jsx)(S.a,{text:"mrdominiqueclement@gmail.com",className:"hover2",children:Object(a.jsx)("h3",{style:{cursor:"pointer"},className:"clipboard reduire",onClick:function(){alert("Email copi\xe9  !")},children:"  Mrdominiqueclement@gmail.com"})}),Object(a.jsx)(M,{})]})}),Object(a.jsx)("div",{children:Object(a.jsx)(u,{left:"/project-4"})})]})})},P=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Use Context"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"Nom:"}),Object(a.jsx)("li",{children:"Age:"})]})]})},L=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(P,{})})},A=function(){var e=Object(n.useState)(0),t=Object(O.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(0),i=Object(O.a)(r,2),j=i[0],l=i[1];return Object(n.useEffect)((function(){document.title="Vous avez clique ".concat(c," fois")}),[c]),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Use effect"}),Object(a.jsx)("h1",{children:c}),Object(a.jsx)("button",{onClick:function(){return s(c+1)},children:"clique"}),Object(a.jsx)("input",{type:"text",value:j,onChange:function(e){return l(e.target.value)}}),Object(a.jsx)("div",{})]})},R=function(){var e=Object(n.useState)(""),t=Object(O.a)(e,2),c=t[0],s=t[1],r=function(e){s(e.code)};return Object(n.useEffect)((function(){return document.addEventListener("keyup",r),function(){document.removeEventListener("keyup",r)}}),[]),Object(a.jsx)("div",{children:Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:c})})})},I=function(){var e=Object(n.useState)(!0),t=Object(O.a)(e,2),c=t[0],s=t[1],r=c?"cacher":"afficher";return Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{onClick:function(){return s(!c)},children:r}),c&&Object(a.jsx)(R,{})]})},B=function(){var e=Object(n.useState)(null),t=Object(O.a)(e,2),c=t[0],s=t[1],r=Object(n.useRef)(null);return Object(a.jsxs)("div",{children:[Object(a.jsxs)("h3",{children:["  ",c]}),Object(a.jsx)("input",{ref:r,type:"text"}),Object(a.jsx)("button",{onClick:function(){s(r.current.value)},children:"focusses"})]})},z=function(e,t){switch(t){case"increment":return e+1;case"decrement":return e-1;case"reinitialiser":return 1;default:return e}},_=function(){var e=Object(n.useReducer)(z,1),t=Object(O.a)(e,2),c=t[0],s=t[1];return console.log(typeof c),console.log(typeof n.useReducer),console.log(n.useReducer),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"counteducer"}),Object(a.jsx)("h1",{children:c}),Object(a.jsx)("button",{onClick:function(){return s("increment")},children:"+   plus "}),Object(a.jsx)("hr",{}),Object(a.jsx)("br",{}),Object(a.jsx)("hr",{}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{onClick:function(){return s("decrement")},children:"  -   moins"}),Object(a.jsx)("hr",{}),Object(a.jsx)("br",{}),Object(a.jsx)("hr",{}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{onClick:function(){return s("reinitialiser")},children:"  Reinitialiser"})]})},T=function(e){var t=e.name,c=e.age;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"destructuring"}),Object(a.jsxs)("p",{children:["Chanteur :",t," "]}),Object(a.jsxs)("p",{children:["age ",e.age,": "]}),Object(a.jsxs)("p",{children:["age ",c,": "]})]})},J=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(T,{name:"eric clapton",age:"74"}),Object(a.jsx)(T,{name:"jimi hendrix",age:"27"}),Object(a.jsx)(T,{name:"David Glimour",age:"73"})]})},W=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(A,{}),Object(a.jsx)(J,{}),Object(a.jsx)(L,{}),Object(a.jsx)(_,{}),Object(a.jsxs)("div",{children:[Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{})]}),Object(a.jsx)(I,{}),Object(a.jsx)(R,{}),Object(a.jsx)(B,{})]})};var D=function(){return Object(a.jsxs)(d.c,{children:[Object(a.jsx)(d.a,{exact:!0,path:"/",component:o}),Object(a.jsx)(d.a,{exact:!0,path:"/projetflag",component:f}),Object(a.jsx)(d.a,{exact:!0,path:"/contact",component:q}),Object(a.jsx)(d.a,{exact:!0,path:"/test",component:W}),Object(a.jsx)(d.a,{exact:!0,path:"/project-2",component:k}),Object(a.jsx)(d.a,{exact:!0,path:"/project-3",component:C}),Object(a.jsx)(d.a,{exact:!0,path:"/project-4",component:w}),Object(a.jsx)(d.a,{component:b})]})};c(64);r.a.render(Object(a.jsx)(i.a,{children:Object(a.jsx)(D,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.9dff7754.chunk.js.map