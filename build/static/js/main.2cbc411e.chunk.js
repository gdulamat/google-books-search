(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports={wrapper:"App_wrapper__3JOml"}},18:function(e,t,n){e.exports={form:"Form_form__RgC28"}},19:function(e,t,n){e.exports=n.p+"static/media/no-cover.7f8724d9.jpg"},2:function(e,t,n){e.exports={listItem__wrapper:"ListItem_listItem__wrapper__hRPaT",listItem__image:"ListItem_listItem__image__2h4BG",listItem__textWrapper:"ListItem_listItem__textWrapper__2uIwE",listItem__title:"ListItem_listItem__title__1u9IK",listItem__description:"ListItem_listItem__description__1qC6q"}},22:function(e,t,n){e.exports=n(47)},47:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12),i=n.n(o),l=n(4),s=n(5),c=n(13),m=n(14),u=n(20),d=n(15),p=n(21),f=n(16),_=n.n(f),g=r.a.createContext(),b=n(17),h=n.n(b),v=n(18),E=n.n(v),w=function(){document.querySelector("button").click()},I=function(){return r.a.createElement(g.Consumer,null,function(e){return r.a.createElement("form",{className:E.a.form,onSubmit:e.buildQueryString},r.a.createElement("div",{className:"input-group"},r.a.createElement("span",{className:"input-group-addon"},"Book title:"),r.a.createElement("input",{type:"text",className:"form-input",placeholder:"...",required:!0}),r.a.createElement("button",{className:"btn btn-primary input-group-btn"},"Search")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"form-radio form-inline"},r.a.createElement("input",{onChange:w,type:"radio",name:"order",value:"relevance",defaultChecked:!0}),r.a.createElement("i",{className:"form-icon"}),"Order by relevance"),r.a.createElement("label",{className:"form-radio form-inline"},r.a.createElement("input",{onChange:w,type:"radio",name:"order",value:"newest"}),r.a.createElement("i",{className:"form-icon"}),"Order by newest")))})},k=n(2),y=n.n(k),x=n(19),N=function(e){var t=e.title,n=e.cover,a=e.description,o=e.link;return r.a.createElement("li",{className:y.a.listItem__wrapper},r.a.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:n,alt:t,className:y.a.listItem__image})),r.a.createElement("div",{className:y.a.listItem__textWrapper},r.a.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("h2",{className:y.a.listItem__title},t)),r.a.createElement("p",{className:y.a.listItem__description},a.length>200?"".concat(a.slice(0,200),".."):a)))};N.defaultProps={cover:n.n(x).a,description:"No description available."};var S=N,L=function(){return r.a.createElement(g.Consumer,null,function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,e.infoText),0!==e.books.length?r.a.createElement("ul",null,e.books.map(function(e,t){var n=e.id,a=e.volumeInfo,o=a.title,i=a.description,l=a.readingModes,s=a.imageLinks,c=a.infoLink;return r.a.createElement(S,{key:n+t.toString(),title:o,cover:l.image?"thumbnail"in s?s.thumbnail:s.smallThumbnail:void 0,description:i,link:c})})):null,e.isLoading?r.a.createElement("div",{className:"loading loading-lg"}):null)})},O={books:[],request:"",isLoading:!1,numberOfBooks:0,infoText:"",errorText:""},q=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state=Object(s.a)({},O),n.buildQueryString=function(e){e.preventDefault(),n.setState(O);var t="&q=".concat(encodeURIComponent(document.querySelector("input[type=text]").value)),a="&orderBy=".concat(document.querySelector("input[type=radio]:checked").value),r="https://www.googleapis.com/books/v1/volumes?maxResults=10".concat(t).concat(a);n.setState({isLoading:!0,request:r}),n.sendRequest(r)},n.sendRequest=function(e){h.a.get(e).then(function(e){"items"in e.data?n.setState(function(t){return{books:[].concat(Object(l.a)(t.books),Object(l.a)(e.data.items)),isLoading:!1,numberOfBooks:e.data.totalItems,infoText:"".concat(e.data.totalItems," results found")}}):n.setState({isLoading:!1,infoText:"No results found"})}).catch(function(t){n.setState({errorText:"Error: ".concat(t.message)}),setTimeout(function(){n.sendRequest(e)},1e3)})},n.getMoreData=function(){if(n.state.numberOfBooks!==n.state.books.length&&!n.state.isLoading){var e="".concat(n.state.request,"&startIndex=").concat(n.state.books.length);n.setState({isLoading:!0}),n.sendRequest(e)}},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=Object(s.a)({},this.state,{buildQueryString:this.buildQueryString});return r.a.createElement(g.Provider,{value:e},r.a.createElement("div",{className:_.a.wrapper},r.a.createElement("h1",null,"Google books search"),r.a.createElement(I,null),r.a.createElement(L,null)))}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",function(){console.log(Math.round(window.innerHeight+window.scrollY)+1),console.log(document.body.offsetHeight),Math.floor(window.innerHeight+window.scrollY)+1>=document.body.offsetHeight&&e.getMoreData()},!1)}}]),t}(r.a.Component);i.a.render(r.a.createElement(q,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.2cbc411e.chunk.js.map