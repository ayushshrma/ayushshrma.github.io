(this.webpackJsonppersonalwebsite=this.webpackJsonppersonalwebsite||[]).push([[6],{174:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),i=n(5),s=n(21),a=function(e){var t=e.data;return Object(r.jsx)("article",{className:"degree-container",children:Object(r.jsxs)("header",{children:[Object(r.jsx)("h4",{className:"degree",children:t.degree}),Object(r.jsxs)("p",{className:"school",children:[Object(r.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},o=function(e){var t=e.data;return Object(r.jsxs)("div",{className:"education",children:[Object(r.jsx)("div",{className:"link-to",id:"education"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Education"})}),t.map((function(e){return Object(r.jsx)(a,{data:e},e.school)}))]})};o.defaultProps={data:[]};var l=o,u=function(e){var t=e.data;return Object(r.jsxs)("article",{className:"jobs-container",children:[Object(r.jsxs)("header",{children:[Object(r.jsxs)("h4",{children:[Object(r.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),Object(r.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),Object(r.jsx)("ul",{className:"points",children:t.points.map((function(e){return Object(r.jsx)("li",{children:e},e)}))})]})},b=function(e){var t=e.data;return Object(r.jsxs)("div",{className:"experience",children:[Object(r.jsx)("div",{className:"link-to",id:"experience"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Experience"})}),t.map((function(e){return Object(r.jsx)(u,{data:e},e.company)}))]})};b.defaultProps={data:[]};var d=b;function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var c=p(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return h(this,n)}}var O=n(59),v=n(58),g=function(e){var t=e.handleClick,n=e.active,c=e.label;return Object(r.jsx)("button",{className:"skillbutton ".concat(n[c]?"skillbutton-active":""),type:"button",onClick:function(){return t(c)},children:c})},x=function(e){var t=e.data,n=e.categories,c=t.category,i=t.competency,s=t.title,a={background:n.filter((function(e){return c.includes(e.name)})).map((function(e){return e.color}))[0]},o=Object(v.a)(Object(v.a)({},a),{},{width:"".concat(String(Math.min(100,Math.max(i/5*100,0))),"%")});return Object(r.jsxs)("div",{className:"skillbar clearfix",children:[Object(r.jsx)("div",{className:"skillbar-title",style:a,children:Object(r.jsx)("span",{children:s})}),Object(r.jsx)("div",{className:"skillbar-bar",style:o}),Object(r.jsxs)("div",{className:"skill-bar-percent",children:[i," / 5"]})]})};x.defaultProps={categories:[]};var S=x,k=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(s,e);var t,n,c,i=y(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=i.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,r){return Object(v.a)(Object(v.a)({},n),{},Object(O.a)({},r,e===r&&!t.buttons[r]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return Object(v.a)(Object(v.a)({},e),{},Object(O.a)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=s,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return Object(r.jsx)(S,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return Object(r.jsx)(g,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"skills",children:[Object(r.jsx)("div",{className:"link-to",id:"skills"}),Object(r.jsxs)("div",{className:"title",children:[Object(r.jsx)("h3",{children:"Skills"}),Object(r.jsx)("p",{children:"Note: Here is a *mostly* honest overview of my skills."})]}),Object(r.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),Object(r.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&j(t.prototype,n),c&&j(t,c),s}(c.Component);k.defaultProps={skills:[],categories:[]};var P=k,N=function(e){var t=e.data,n=e.last;return Object(r.jsxs)("li",{className:"course-container",children:[Object(r.jsxs)("a",{href:t.link,children:[Object(r.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),Object(r.jsx)("p",{className:"course-name",children:t.title})]}),!n&&Object(r.jsx)("div",{className:"course-dot",children:Object(r.jsx)("p",{className:"course-name",children:" \u2022"})})]})};N.defaultProps={last:!1};var C=N,w=function(e){var t,n=e.data;return Object(r.jsxs)("div",{className:"courses",children:[Object(r.jsx)("div",{className:"link-to",id:"courses"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Selected Courses"})}),Object(r.jsx)("ul",{className:"course-list",children:(t=n,t.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(e,n){return Object(r.jsx)(C,{data:e,last:n===t.length-1},e.title)})))})]})};w.defaultProps={data:[]};var E=w,G=function(){return Object(r.jsxs)("div",{className:"references",children:[Object(r.jsx)("div",{className:"link-to",id:"references"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)(i.b,{to:"/contact",children:Object(r.jsx)("h3",{children:"Contact"})})})]})},D=[{title:"Discrete Mathematics and Algorithms",number:"ETCS203",link:"",university:"GGSIPU"},{title:"Data Structures",number:"ETCS 209",link:"",university:"GGSIPU"},{title:"Algorithms Design & Analysis",number:"ETCS301",link:"",university:"GGSIPU"},{title:"Software Engineering Concepts",number:"ETCS303",link:"",university:"GGSIPU"},{title:" Java Programming",number:"ETCS307",link:"",university:"GGSIPU"},{title:"Data Structures",number:"ETCS 209",link:"",university:"GGSIPU"},{title:"Artificial Intelligence",number:"ETCS310",link:"",university:""},{title:"Data Base & Management System",number:"ETCS 208",link:"",university:"GGSIPU"},{title:"Computer Networks",number:"ETCS306",link:"",university:"GGSIPU"},{title:"Computer Architecture",number:"ETCS204",link:"",university:"GGSIPU"},{title:"Operating System",number:"ETCS304",link:"",university:"GGSIPU"},{title:"Web Technologies",number:"ETCS308",link:"",university:"GGSIPU"},{title:"Object Oriented Programming",number:"ETCS 210",link:"",university:"GGSIPU"},{title:"Compiler Design",number:"ETCS302",link:"",university:"GGSIPU"}],T=[{school:"Dr Akhilesh Das Gupta Institute of Technology (GGSIPU)",degree:"B.Tech. Computer Science & Engineering. CGPA:7.9/10(till 5 semester)",link:"https://adgitmdelhi.ac.in/",year:"2019-2022"},{school:"Pusa Institute Of Technology , New Delhi",degree:"Engineering Diploma. Electronics and Communication Engineering. CGPA:7.8/10",link:"http://pitpusa.delhi.gov.in/",year:"2016-2019"}],A=n(17);var I=n(24);var J,U=[{title:"Javascript",competency:3.5,category:["Web Development","Languages","Javascript"]},{title:"Node.JS",competency:3.5,category:["Web Development","Javascript"]},{title:"React",competency:3.5,category:["Web Development","Javascript"]},{title:"Amazon Web Services",competency:3,category:["Web Development","Tools"]},{title:"MongoDB",competency:3,category:["Web Development","Databases"]},{title:"MySql",competency:3,category:["Web Development","Databases"]},{title:"Firebase",competency:3,category:["Web Development","Databases"]},{title:"Express.JS",competency:3.5,category:["Web Development","Javascript"]},{title:"Git",competency:3,category:["Tools"]},{title:"GitHub",competency:4,category:["Tools"]},{title:"Linux",competency:4,category:["Tools"]},{title:"HTML + SASS/SCSS/CSS",competency:4,category:["Web Development","Languages"]},{title:"JAVA",competency:5,category:["Languages","JAVA"]},{title:"Data Structures & Algorithms",competency:3,category:["Languages","JAVA"]},{title:"Problem Solving",competency:3,category:["Languages","JAVA"]}].map((function(e){return Object(v.a)(Object(v.a)({},e),{},{category:e.category.sort()})})),W=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],R=(J=new Set(U.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return Object(A.a)(e)}(J)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(J)||Object(I.a)(J)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:W[t]}})),L=[{company:"Credence Analytics",position:"SDE Backend Intern",link:"https://www.credenceanalytics.com/",daterange:"09/2021 - current",points:["Worked With Product team to Developed and Enhanced already existing software solutions for the company.","Provide help to resolve L1 Calls.","Involved in Version control and patch releasing mechanism.","Resolve Technical issue by debugging and identify the cause.","Tech Stack : Oracle, Nodejs, javascript."]}],_=["Education","Experience","Skills","Courses"];t.default=function(){return Object(r.jsx)(s.a,{title:"Resume",description:"Ayush Sharma B.Tech in Computer Science and Engineering.",children:Object(r.jsxs)("article",{className:"post",id:"resume",children:[Object(r.jsx)("header",{children:Object(r.jsxs)("div",{className:"title",children:[Object(r.jsx)("h2",{"data-testid":"heading",children:Object(r.jsx)(i.b,{to:"resume",children:"Resume"})}),Object(r.jsx)("div",{className:"link-container",children:_.map((function(e){return Object(r.jsx)("h4",{children:Object(r.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object(r.jsx)(l,{data:T}),Object(r.jsx)(d,{data:L}),Object(r.jsx)(P,{skills:U,categories:R}),Object(r.jsx)(E,{data:D}),Object(r.jsx)(G,{})]})})}},58:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(59);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},59:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=6.5b0ccdb4.chunk.js.map