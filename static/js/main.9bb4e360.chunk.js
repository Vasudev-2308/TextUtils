(this.webpackJsonpunderstanding_react=this.webpackJsonpunderstanding_react||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(4),s=a.n(r),l=(a(9),a(2)),o=(a(10),a(0));function i(e){return Object(o.jsx)("div",{className:"Navigation",children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand ",href:"#",children:Object(o.jsx)("strong",{children:"Text Utils"})}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Alter Text"})})}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{onClick:e.toggleMode,className:"form-check-input",type:"checkbox",id:"darkModeSwitch"}),Object(o.jsx)("label",{htmlFor:"darkModeSwitch",children:e.text})]})]})]})})})}function d(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],r=a[1],s=.008*c.split(" ").filter((function(e){return 0!==e.length})).length;return s=0===s?s.toFixed(0):s.toFixed(4),Object(o.jsxs)("div",{className:"container my-5",children:[Object(o.jsxs)("div",{style:{backgroundColor:"dark"===e.mode?"#11085c":"white",color:"dark"===e.mode?"white":"black"},children:[Object(o.jsx)("h1",{children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control",style:{backgroundColor:"dark"===e.mode?"#13466e":"white",color:"dark"===e.mode?"white":"black"},value:c,onChange:function(e){r(e.target.value)},id:"myBox",rows:"5"})}),Object(o.jsx)("button",{className:"btn btn-primary mx-1 my-1",onClick:function(){var e=c.toUpperCase();r(e)},children:"Convert to Uppercase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-1 my 1",onClick:function(){var e=c.toLowerCase();r(e)},children:"Convert to Lowercase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-1 my-1",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Text Copied to Clipboard","success")},children:"Copy Text"}),Object(o.jsx)("button",{className:"btn btn-danger mx-1 my-1",onClick:function(){var e=c.split(/[ ]+/);r(e.join(" "))},children:"Clear Extra Spaces"}),Object(o.jsx)("button",{className:"btn btn-danger mx-1 my-1",onClick:function(){r(""),e.showAlert("Text Cleared","danger")},children:"Clear Text"})]}),Object(o.jsxs)("div",{className:"container my-5",style:{backgroundColor:"dark"===e.mode?"#11085c":"white",color:"dark"===e.mode?"white":"black"},children:[Object(o.jsx)("h2",{children:"Your Text Summary"}),Object(o.jsxs)("h4",{children:[c.split(" ").filter((function(e){return 0!==e.length})).length," Words, ",c.length," Characters"]}),Object(o.jsxs)("h5",{children:["You require ",s," Minutes to read this"]}),Object(o.jsx)("h2",{children:"Preview"}),Object(o.jsx)("h4",{children:c.length>0?c:"Enter Some text in the text Box"})]})]})}function b(e){return Object(o.jsx)("div",{style:{height:"40px"},children:e.alert&&Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{class:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:Object(o.jsx)("strong",{children:e.alert.message})})})})}var j=function(){var e=Object(n.useState)("light"),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)("Enable Dark Mode"),s=Object(l.a)(r,2),j=s[0],h=s[1],m=Object(n.useState)(null),x=Object(l.a)(m,2),u=x[0],g=x[1],O=function(e,t){g({message:e,type:t}),setTimeout((function(){g(null)}),2e3)};return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(i,{mode:a,toggleMode:function(){"light"===a?(c("dark"),document.body.style.backgroundColor="#11085c",h("Enable Light Mode"),O("Dark Mode Has Been Enabled","success")):(c("light"),h("Enable Dark Mode"),document.body.style.backgroundColor="white",O("Light Mode Has Been Enabled","primary"))},text:j}),Object(o.jsx)(b,{alert:u}),Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(d,{heading:"Enter The Text To Analyze Below",mode:a,showAlert:O})})]})};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root"))},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.9bb4e360.chunk.js.map