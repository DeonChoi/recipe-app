(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],{17:function(e,t,a){e.exports=a.p+"static/media/saveMoney.7de2ed3a.jpg"},18:function(e,t,a){e.exports=a.p+"static/media/stayHealthy.49dbd741.jpg"},19:function(e,t,a){e.exports=a.p+"static/media/stayConnected.1da1b266.jpg"},23:function(e,t,a){e.exports=a(39)},28:function(e,t,a){},29:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),l=a.n(r),i=(a(28),a(6)),o=a(5),s=(a(29),a(17)),m=a.n(s),u=a(18),p=a.n(u),d=a(19),h=a.n(d),f=function(){return c.a.createElement("div",{className:"home container"},c.a.createElement("div",{className:"search-container justify-content-center align-items-center flex-column row"},c.a.createElement("p",{for:"search",className:"font-weight-bolder text-capitalize h1"},"Find recipes you will love"),c.a.createElement(i.b,{className:"search-button h3",to:"/recipes"},"Start Cooking")),c.a.createElement("h1",{className:"row justify-content-center"},"Your food. Your choice."),c.a.createElement("div",{className:"row align-items-center text-center"},c.a.createElement("div",{className:"col-6"},c.a.createElement("h1",null,"Save Money"),c.a.createElement("h4",null,"No need to tip when you cook yourself.")),c.a.createElement("div",{className:"col-6"},c.a.createElement("img",{src:m.a,alt:"Save Money Logo",className:"homeLogo"}))),c.a.createElement("hr",null),c.a.createElement("div",{className:"row align-items-center text-center"},c.a.createElement("div",{className:"col-6"},c.a.createElement("img",{src:p.a,alt:"Stay Healthy Logo",className:"homeLogo"})),c.a.createElement("div",{className:"col-6"},c.a.createElement("h1",null,"Stay Healthy"),c.a.createElement("h4",null,"Take control of what you put into your body."))),c.a.createElement("hr",null),c.a.createElement("div",{className:"row align-items-center text-center"},c.a.createElement("div",{className:"col-6"},c.a.createElement("h1",null,"Stay Connected"),c.a.createElement("h4",null,"Spend more time with loved ones by cooking tonight.")),c.a.createElement("div",{className:"col-6"},c.a.createElement("img",{src:h.a,alt:"Stay Connected Logo",className:"homeLogo"}))))},E=a(13),b=a.n(E),v=a(22),g=a(9),y=(a(36),a(37),function(e){var t=e.title,a=e.calories,n=e.image,r=e.ingredients,l=e.carbs,i=e.fats,o=e.proteins;return c.a.createElement("div",{className:"recipe d-flex flex-column justify-content-around align-items-center"},c.a.createElement("h1",{className:"text-capitalize"},t),c.a.createElement("ol",null,r.map((function(e,t){return c.a.createElement("li",{key:t},e.text)}))),c.a.createElement("ul",null,c.a.createElement("li",null,"Calories: ",a," kcal"),c.a.createElement("li",null,"Carbs: ",l," g"),c.a.createElement("li",null,"Fats: ",i," g"),c.a.createElement("li",null,"Proteins: ",o," g")),c.a.createElement("img",{className:"image",src:n,alt:""}))}),N=function(){var e=Object(n.useState)([]),t=Object(g.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),i=Object(g.a)(l,2),o=i[0],s=i[1],m=Object(n.useState)("chicken"),u=Object(g.a)(m,2),p=u[0],d=u[1];Object(n.useEffect)((function(){h()}),[p]);var h=function(){var e=Object(v.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(p,"&app_id=").concat("85274a6a","&app_key=").concat("b0930f4d03f5cef1693dc678b7d5f5fa"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a.hits),r(a.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"App"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),d(o),s("")},className:"search-form justify-content-center row"},c.a.createElement("input",{className:"search-bar",type:"text",value:o,onChange:function(e){s(e.target.value)},placeholder:"What are you in the mood for? i.e. Chicken"}),c.a.createElement("button",{className:"search-button",type:"submit"},"Search")),c.a.createElement("div",{className:"row justify-content-center"},a.map((function(e){return c.a.createElement(y,{className:"recipe-container d-flex flex-wrap justify-content-around align-items-center",key:e.recipe.label,title:e.recipe.label,calories:Math.round(e.recipe.calories),image:e.recipe.image,ingredients:e.recipe.ingredients,carbs:Math.ceil(10*e.recipe.totalNutrients.CHOCDF.quantity)/10,fats:Math.ceil(10*e.recipe.totalNutrients.FAT.quantity)/10,proteins:Math.ceil(10*e.recipe.totalNutrients.PROCNT.quantity)/10})}))))},x=(a(38),function(){return c.a.createElement(i.a,null,c.a.createElement("div",null,c.a.createElement("nav",{className:"navbar navbar-light justify-content-between sticky-top bg-white"},c.a.createElement("div",{className:"navbar"},c.a.createElement(i.b,{className:"navbar-brand",to:"/"},"Delish")),c.a.createElement("div",{className:"navbar"},c.a.createElement(i.b,{className:"nav-link text-dark",to:"/"},"Home"),c.a.createElement(i.b,{className:"nav-link text-dark",to:"/recipes"},"Recipes"))),c.a.createElement("main",null,c.a.createElement(o.a,{exact:!0,path:"/",component:f}),c.a.createElement(o.a,{path:"/recipes",component:N}))))});l.a.render(c.a.createElement(x,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.b713619a.chunk.js.map