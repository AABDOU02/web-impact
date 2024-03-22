(this["webpackJsonpweb-impact-app"]=this["webpackJsonpweb-impact-app"]||[]).push([[0],{177:function(e,a,t){},183:function(e,a,t){"use strict";t.r(a);var s=t(0),r=t.n(s),c=t(66),l=t.n(c),n=(t(74),t(22)),i=t(5),o=t(189),d=t(187),j=t(26),b=(t(75),t(1));var h=function(){const[e,a]=Object(s.useState)([]),[t]=Object(s.useState)(!0),[r]=Object(s.useState)(null),[c,l]=Object(s.useState)(1),[n,i]=Object(s.useState)(null);Object(s.useEffect)((()=>{(async()=>{try{const e=await fetch("https://dummyjson.com/users");if(!e.ok)throw new Error("Failed to fetch users");const t=await e.json();if(Array.isArray(t))a(t);else{if("object"!==typeof t||!t.users)throw new Error("Invalid data format");a(t.users)}}catch(e){console.error("Error fetching users:",e.message),r(e)}})()}),[]);const h=10*c,x=h-10,m=e.slice(x,h);return Object(b.jsxs)("div",{className:"container mt-4",children:[Object(b.jsxs)("h2",{className:"mb-3",children:[" ",Object(b.jsx)(j.d,{})," Users List"]}),Object(b.jsxs)("table",{className:"table table-striped",children:[Object(b.jsx)("thead",{className:"thead-dark",children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"col",children:"id"}),Object(b.jsx)("th",{scope:"col",children:"First Name"}),Object(b.jsx)("th",{scope:"col",children:"Last Name"}),Object(b.jsx)("th",{scope:"col",children:"Email"})]})}),Object(b.jsx)("tbody",{children:m.map(((e,a)=>Object(b.jsxs)("tr",{onClick:()=>(e=>{i(e)})(e),style:{cursor:"pointer"},children:[Object(b.jsx)("th",{scope:"row",children:e.id}),Object(b.jsx)("td",{children:e.firstName}),Object(b.jsx)("td",{children:e.lastName}),Object(b.jsx)("td",{children:e.email})]},e.id)))})]}),Object(b.jsx)(o.a,{className:"mt-3",children:Array.from({length:Math.ceil(e.length/10)},((e,a)=>Object(b.jsx)(o.a.Item,{active:a+1===c,onClick:()=>{l(a+1)},children:a+1},a+1)))}),Object(b.jsxs)(d.a,{show:!!n,onHide:()=>{i(null)},dialogClassName:"custom-modal",children:[Object(b.jsx)(d.a.Header,{closeButton:!0,children:Object(b.jsx)(d.a.Title,{children:"User Details"})}),Object(b.jsx)(d.a.Body,{children:n&&Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"d-flex align-items-start",children:[Object(b.jsx)("img",{src:n.image,alt:n.firstName,style:{width:"100px",height:"100px"},className:"mr-3"}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("h5",{children:["Name: ",n.firstName," ",n.lastName]}),Object(b.jsxs)("p",{children:[Object(b.jsx)(j.b,{})," Email: ",n.email]}),Object(b.jsxs)("p",{children:[Object(b.jsx)(j.c,{})," Phone: ",n.phone]}),Object(b.jsxs)("p",{children:[Object(b.jsx)(j.a,{})," Birth Date: ",n.birthDate]})]})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("h6",{children:"Additional Information:"}),Object(b.jsxs)("ul",{children:[Object(b.jsxs)("li",{children:["Age: ",n.age]}),Object(b.jsxs)("li",{children:["Gender: ",n.gender]}),Object(b.jsxs)("li",{children:["Address: ",n.address.address,", ",n.address.city,", ",n.address.state,", ",n.address.postalCode]})]})]})})]})]})},x=t(188),m=t(19);var O=()=>{const[e,a]=Object(s.useState)([]);Object(s.useEffect)((()=>{(async()=>{try{const e=await x.a.get("https://dummyjson.com/users");if(!e.data||!Array.isArray(e.data.users))throw new Error("API response format error: Users data not found or not an array.");a(e.data.users)}catch(e){console.error("Error fetching users:",e)}})()}),[]);const t=(()=>{if(!Array.isArray(e))return console.error("Users data is not an array."),{male:0,female:0};const a={male:0,female:0};return e.forEach((e=>{"male"===e.gender?a.male++:"female"===e.gender&&a.female++})),a})(),r=(()=>{if(!Array.isArray(e))return console.error("Users data is not an array."),{};const a={};return e.forEach((e=>{const t=10*Math.floor(e.age/10);a[t]?a[t]++:a[t]=1})),a})(),c=(()=>{if(!Array.isArray(e))return console.error("Users data is not an array."),{};const a={};return e.forEach((e=>{const t=e.bloodGroup;a[t]?a[t]++:a[t]=1})),a})(),l=(()=>{if(!Array.isArray(e))return console.error("Users data is not an array."),{};const a={};return e.forEach((e=>{const t=e.address.city;a[t]?a[t]++:a[t]=1})),a})(),n=(()=>{if(!Array.isArray(e))return console.error("Users data is not an array."),"";const a={};e.forEach((e=>{var t;const s=null===(t=e.bankDetails)||void 0===t?void 0:t.name;s&&(a[s]?a[s]++:a[s]=1)}));let t="",s=0;return Object.entries(a).forEach((e=>{let[a,r]=e;r>s&&(s=r,t=a)})),t})(),i=(()=>{if(!Array.isArray(e))return console.error("Users data is not an array."),{male:{},female:{}};const a={male:{},female:{}};return e.forEach((e=>{var t;const s=e.gender,r=null===(t=e.cryptoDetails)||void 0===t?void 0:t.coin;r&&(a[s][r]?a[s][r]++:a[s][r]=1)})),a})(),o=(()=>{if(!Array.isArray(e))return console.error("Users data is not an array."),{};const a={male:{},female:{}};return e.forEach((e=>{const t=e.gender,s=10*Math.floor(e.age/10);a[t][s]?a[t][s]++:a[t][s]=1})),a})(),d={labels:["Male","Female"],datasets:[{label:"Gender Distribution",data:[t.male,t.female],backgroundColor:["#FF6384","#36A2EB"]}]},j={labels:Object.keys(r),datasets:[{label:"Age Distribution",data:Object.values(r),backgroundColor:"#FFCE56"}]},h={labels:Object.keys(c),datasets:[{label:"Blood Group Distribution",data:Object.values(c),backgroundColor:["#FF6384","#36A2EB","#FFCE56","#4BC0C0"]}]},O={labels:Object.keys(l),datasets:[{label:"Address Distribution",data:Object.values(l),backgroundColor:["#FF6384","#36A2EB","#FFCE56","#4BC0C0","#9966FF"]}]},u={labels:Object.keys(i.male),datasets:[{label:"Popular Crypto (Male)",data:Object.values(i.male),backgroundColor:"#FF6384"}]},p={labels:Object.keys(i.female),datasets:[{label:"Popular Crypto (Female)",data:Object.values(i.female),backgroundColor:"#36A2EB"}]},f={labels:Object.keys(o.male),datasets:[{label:"Crypto Users (Male)",data:Object.values(o.male),backgroundColor:"#FF6384"},{label:"Crypto Users (Female)",data:Object.values(o.female),backgroundColor:"#36A2EB"}]};return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{class:"title-container",children:Object(b.jsx)("h1",{class:"title",children:"Users Statistics"})}),Object(b.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between"},children:[Object(b.jsxs)("div",{style:{maxWidth:"600px",margin:"20px",flexBasis:"48%"},children:[Object(b.jsx)("div",{style:{marginBottom:"20px"},children:Object(b.jsx)(m.Pie,{data:d})}),Object(b.jsx)("div",{children:Object(b.jsx)(m.Bar,{data:j})})]}),Object(b.jsxs)("div",{style:{maxWidth:"600px",margin:"20px",flexBasis:"48%"},children:[Object(b.jsx)("div",{style:{marginBottom:"20px"},children:Object(b.jsx)(m.Pie,{data:h})}),Object(b.jsx)("div",{children:Object(b.jsx)(m.Bar,{data:O})})]}),Object(b.jsxs)("div",{style:{maxWidth:"600px",margin:"20px",flexBasis:"48%"},children:[Object(b.jsx)("div",{children:Object(b.jsxs)("p",{children:["Popular Bank: ",n]})}),Object(b.jsx)("div",{style:{marginBottom:"20px"},children:Object(b.jsx)(m.Bar,{data:u})}),Object(b.jsx)("div",{children:Object(b.jsx)(m.Bar,{data:p})})]}),Object(b.jsx)("div",{style:{maxWidth:"600px",margin:"20px",flexBasis:"48%"},children:Object(b.jsx)("div",{children:Object(b.jsx)(m.Bar,{data:f})})})]})]})};t(177);var u=()=>Object(b.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(b.jsx)(n.b,{className:"navbar-brand",to:"/",children:"Web Impact"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(b.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(n.b,{className:"nav-link",to:"/web-impact/users",children:"Users"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(n.b,{className:"nav-link",to:"/web-impact/statistics",children:"Statistics"})})]})})]});var p=()=>Object(b.jsx)("footer",{children:Object(b.jsx)("div",{className:"footer-container",children:Object(b.jsx)("p",{children:"\xa9 2024  ABDELKHALEK AKERMI. All Rights Reserved."})})});var f=()=>Object(b.jsxs)(n.a,{children:[Object(b.jsx)(u,{}),Object(b.jsxs)(i.c,{children:[Object(b.jsx)(i.a,{exact:!0,path:"/web-impact",component:h}),Object(b.jsx)(i.a,{path:"/web-impact/users",component:h}),Object(b.jsx)(i.a,{path:"/web-impact/statistics",component:O})]}),Object(b.jsx)(p,{})]});l.a.createRoot(document.getElementById("root")).render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(f,{})}))},74:function(e,a,t){},75:function(e,a,t){}},[[183,1,2]]]);
//# sourceMappingURL=main.ee1b2b18.chunk.js.map