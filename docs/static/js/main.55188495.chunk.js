(this["webpackJsonpheroes-app"]=this["webpackJsonpheroes-app"]||[]).push([[0],Array(34).concat([function(e,a,r){var t={"./dc-arrow.jpg":35,"./dc-batman.jpg":36,"./dc-black.jpg":37,"./dc-blue.jpg":38,"./dc-flash.jpg":39,"./dc-green.jpg":40,"./dc-martian.jpg":41,"./dc-robin.jpg":42,"./dc-superman.jpg":43,"./dc-wonder.jpg":44,"./marvel-captain.jpg":45,"./marvel-cyclops.jpg":46,"./marvel-daredevil.jpg":47,"./marvel-hawkeye.jpg":48,"./marvel-hulk.jpg":49,"./marvel-iron.jpg":50,"./marvel-silver.jpg":51,"./marvel-spider.jpg":52,"./marvel-thor.jpg":53,"./marvel-wolverine.jpg":54};function c(e){var a=s(e);return r(a)}function s(e){if(!r.o(t,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t[e]}c.keys=function(){return Object.keys(t)},c.resolve=s,e.exports=c,c.id=34},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-arrow.15b27bc2.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-batman.ab9eadc3.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-black.3747c663.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-blue.cc8169a3.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-flash.b3922f25.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-green.01c54ee1.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-martian.78565f7d.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-robin.ea4afe99.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-superman.e9391474.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-wonder.970ba2d6.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-captain.d2c7774d.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-cyclops.f1442408.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-daredevil.2f4f1a57.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-hawkeye.1f78e874.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-hulk.d1af5fe5.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-iron.b394df11.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-silver.1d43a08b.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-spider.054016b4.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-thor.c63e651c.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-wolverine.ee676488.jpg"},function(e,a,r){},,function(e,a,r){"use strict";r.r(a);var t=r(1),c=r(18),s=r.n(c),i=r(10),n=Object(t.createContext)(),l=r(4),o="[auth] login",u="[auth] logout",d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case o:return Object(l.a)(Object(l.a)({},a.payload),{},{logged:!0});case u:return{logged:!1};default:return e}},j=r(14),p=r(2),h=r(0),m=["isAuthenticated","component"],b=function(e){var a=e.isAuthenticated,r=e.component,t=Object(j.a)(e,m);return localStorage.setItem("lastPath",t.location.pathname),Object(h.jsx)(p.b,Object(l.a)(Object(l.a)({},t),{},{component:function(e){return a?Object(h.jsx)(r,Object(l.a)({},e)):Object(h.jsx)(p.a,{to:"/login"})}}))},v=["isAuthenticated","component"],f=function(e){var a=e.isAuthenticated,r=e.component,t=Object(j.a)(e,v);return Object(h.jsx)(p.b,Object(l.a)(Object(l.a)({},t),{},{component:function(e){return a?Object(h.jsx)(p.a,{to:"/"}):Object(h.jsx)(r,Object(l.a)({},e))}}))},O=r(8),g=function(e){var a=e.history,r=Object(t.useContext)(n).dispatch;return Object(h.jsxs)("div",{className:"container mt-5",children:[Object(h.jsx)("h1",{children:"LoginScreen"}),Object(h.jsx)("hr",{}),Object(h.jsx)("button",{className:" btn btn-primary",onClick:function(){var e=localStorage.getItem("lastPath")||"/";r({type:o,payload:{name:"Ariel"}}),a.replace(e)},children:"Login"})]})},x=function(){var e=Object(t.useContext)(n),a=e.user.name,r=e.dispatch,c=Object(p.g)();return Object(h.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(h.jsxs)("div",{className:"container-fluid",children:[Object(h.jsx)(O.b,{className:"navbar-brand",to:"/",children:"Asociaciones"}),Object(h.jsx)("div",{className:"navbar-collapse",children:Object(h.jsxs)("div",{className:"navbar-nav",children:[Object(h.jsx)(O.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/marvel",children:"Marvel"}),Object(h.jsx)(O.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/dc",children:"DC"}),Object(h.jsx)(O.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/search",children:"BuscarHeroe"})]})}),Object(h.jsx)("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2",children:Object(h.jsxs)("ul",{className:"navbar-nav ms-auto",children:[Object(h.jsxs)("span",{className:"nav-item nav-link text-info",children:[" ",a," "]}),Object(h.jsx)("button",{className:"nav-item nav-link btn",onClick:function(){c.replace("/login"),r({type:u})},children:"Logout"})]})})]})})},C=r(34),_=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],N=function(e){var a=e.history,r=Object(p.i)().heroeId,c=Object(t.useMemo)((function(){return e=r,_.find((function(a){return a.id===e}));var e}),[r]);if(!c)return Object(h.jsx)(p.a,{to:"/"});var s=c.superhero,i=c.publisher,n=c.alter_ego,l=c.first_appearance,o=c.characters;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsx)("img",{src:C("./".concat(r,".jpg")).default,alt:s,className:"img img-responsive animate__animated animate__fadeInLeft"})}),Object(h.jsxs)("div",{className:"col-md-6",children:[Object(h.jsxs)("h3",{children:[" ",s," "]}),Object(h.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(h.jsxs)("li",{className:"list-group-item",children:[" ",Object(h.jsx)("b",{children:" Alter ego: "})," ",n,"   "]}),Object(h.jsxs)("li",{className:"list-group-item",children:[" ",Object(h.jsx)("b",{children:" Puslisher: "})," ",i,"   "]}),Object(h.jsxs)("li",{className:"list-group-item",children:[" ",Object(h.jsx)("b",{children:" First Appearence: "})," ",l,"   "]})]}),Object(h.jsx)("h5",{children:" Charactesr "}),Object(h.jsxs)("p",{children:[" ",o," "]}),Object(h.jsx)("button",{className:"btn btn-outline-info",onClick:function(){a.length<=2?a.push("/"):a.goBack()},children:"Volver"})]})]})})})},y=(r(55),function(e){var a=e.id,r=e.superhero,t=e.publisher,c=e.alter_ego,s=e.first_appearance,i=e.characters;return Object(h.jsxs)(O.b,{to:"./hero/".concat(a),className:"my-card",children:[Object(h.jsx)("img",{src:C("./".concat(a,".jpg")).default,className:"img img-responsive",alt:r}),Object(h.jsx)("div",{className:"profile-name",children:r}),Object(h.jsx)("div",{className:"profile-position",children:c}),Object(h.jsx)("div",{className:"profile-overview",children:Object(h.jsx)("div",{className:"profile-overview",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"col-ms-4",children:[Object(h.jsx)("h3",{children:t}),Object(h.jsxs)("p",{children:["Primera aparici\xf3n: ",Object(h.jsx)("br",{}),s]}),c!==i&&Object(h.jsx)("p",{children:i})]})})})})]})}),k=function(e){var a=e.publisher,r=Object(t.useMemo)((function(){return function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error('Publisher "'.concat(e,'" no es correcto'));return _.filter((function(a){return a.publisher===e}))}(a)}),[a]);return Object(h.jsx)("div",{className:"animate__animated animate__fadeIn",children:r.map((function(e){return Object(h.jsx)(y,Object(l.a)({},e),e.id)}))})},w=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Dc Screen"}),Object(h.jsx)("hr",{}),Object(h.jsx)(k,{publisher:"DC Comics"})]})},M=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Marvel Screen"}),Object(h.jsx)("hr",{}),Object(h.jsx)(k,{publisher:"Marvel Comics"})]})},S=r(20),D=r.n(S),A=r(13),B=function(e){var a=e.history,r=Object(p.h)(),c=D.a.parse(r.search).q,s=void 0===c?"":c,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(t.useState)(e),r=Object(i.a)(a,2),c=r[0],s=r[1];return[c,function(e){var a=e.target;s(Object(l.a)(Object(l.a)({},c),{},Object(A.a)({},a.name,a.value)))},function(){s(e)}]}({searchText:s}),o=Object(i.a)(n,2),u=o[0],d=o[1],j=u.searchText,m=Object(t.useMemo)((function(){return""===(e=s)?[]:(e=e.toLocaleLowerCase(),_.filter((function(a){return a.superhero.toLocaleLowerCase().includes(e)})));var e}),[s]);return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Search Screen"}),Object(h.jsx)("hr",{}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"col-5",children:[Object(h.jsx)("h4",{children:" Search Form"}),Object(h.jsx)("hr",{}),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.push("?q=".concat(j))},children:[Object(h.jsx)("input",{type:"text",placeholder:"Busca un heroe",className:"form-control",name:"searchText",autoComplete:"off",value:j,onChange:d}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{type:"submit",className:"btn m-1 btn-block btn-outline-primary",children:"Buscar"})]})]}),Object(h.jsxs)("div",{className:"col-7",children:[Object(h.jsx)("h4",{children:" Resultados "}),Object(h.jsx)("hr",{}),""===s&&Object(h.jsx)("div",{className:"alert alert-info",children:"Search a Hero"}),""!==s&&0===m.length&&Object(h.jsxs)("div",{className:"alert alert-danger",children:["There is no a hero with ",s]}),m.map((function(e){return Object(h.jsx)(y,Object(l.a)({},e),e.id)}))]})]})]})},T=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(x,{}),Object(h.jsx)("div",{className:"container mt-2",children:Object(h.jsxs)(p.d,{children:[Object(h.jsx)(p.b,{exact:!0,path:"/marvel",component:M}),Object(h.jsx)(p.b,{exact:!0,path:"/hero/:heroeId",component:N}),Object(h.jsx)(p.b,{exact:!0,path:"/dc",component:w}),Object(h.jsx)(p.b,{exact:!0,path:"/search",component:B}),Object(h.jsx)(p.a,{to:"/marvel"})]})})]})},J=function(){var e=Object(t.useContext)(n).user;return Object(h.jsx)(O.a,{children:Object(h.jsx)("div",{children:Object(h.jsxs)(p.d,{children:[Object(h.jsx)(f,{exact:!0,path:"/login",component:g,isAuthenticated:e.logged}),Object(h.jsx)(b,{path:"/",component:T,isAuthenticated:e.logged})]})})})},F=function(){return JSON.parse(localStorage.getItem("user"))||{logged:!1}},I=function(){var e=Object(t.useReducer)(d,{},F),a=Object(i.a)(e,2),r=a[0],c=a[1];return Object(t.useEffect)((function(){localStorage.setItem("user",JSON.stringify(r))}),[r]),Object(h.jsx)(n.Provider,{value:{user:r,dispatch:c},children:Object(h.jsx)(J,{})})};s.a.render(Object(h.jsx)(I,{}),document.getElementById("root"))}]),[[57,1,2]]]);
//# sourceMappingURL=main.55188495.chunk.js.map