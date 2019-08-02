(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e){e.exports={Title:"Star Wars: Episode IV - A New Hope",Year:"1977",Rated:"PG",Released:"25 May 1977",Runtime:"121 min",Genre:"Action, Adventure, Fantasy, Sci-Fi",Director:"George Lucas",Writer:"George Lucas",Actors:"Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing",Plot:"The Imperial Forces, under orders from cruel Darth Vader, hold Princess Leia hostage in their efforts to quell the rebellion against the Galactic Empire. Luke Skywalker and Han Solo, captain of the Millennium Falcon, work together with the companionable droid duo R2-D2 and C-3PO to rescue the beautiful princess, help the Rebel Alliance and restore freedom and justice to the Galaxy.",Language:"English",Country:"USA",Awards:"Won 6 Oscars. Another 50 wins & 28 nominations.",Poster:"https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",Ratings:[{Source:"Internet Movie Database",Value:"8.6/10"},{Source:"Rotten Tomatoes",Value:"93%"},{Source:"Metacritic",Value:"90/100"}],Metascore:"90",imdbRating:"8.6",imdbVotes:"1,128,096",imdbID:"tt0076759",Type:"movie",DVD:"21 Sep 2004",BoxOffice:"N/A",Production:"20th Century Fox",Website:"http://www.starwars.com/episode-iv/",Response:"True"}},12:function(e,t,a){e.exports=a(22)},17:function(e,t,a){},18:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),i=a.n(l),c=(a(17),a(2)),o=a(3),s=a(5),u=a(4),m=a(1),d=a(6),h=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={value:"Jaws"},a.handleChange=a.handleChange.bind(Object(m.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.handleSubmit(this.state.value),this.setState({value:""})}},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"Title:",r.a.createElement("input",{type:"text",value:this.state.value,onChange:this.handleChange})),r.a.createElement("input",{type:"submit",value:"Submit"}))}}]),t}(n.Component),p=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={value:"Jaws"},a.clickHandler=a.clickHandler.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"clickHandler",value:function(e){e.preventDefault(),console.log(e.target.id),this.props.clickHandler(e.target.id)}},{key:"render",value:function(){var e,t=this;return this.props.results.length>0?(e=this.props.results.map(function(e,a){return r.a.createElement("li",{key:a,className:"d-flex list-group-item justify-content-between"},r.a.createElement("div",null,e.Title),r.a.createElement("div",null,r.a.createElement("button",{id:e.Title,onClick:t.clickHandler,type:"button",className:"btn btn-primary btn-sm"},"select")))}),r.a.createElement("div",{id:"results",className:"container"},r.a.createElement("h4",null,"Results:"),r.a.createElement("ul",{className:"list-group"},e))):null}}]),t}(n.Component),b=a(11),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).arr=[],a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"renderDetails",value:function(e){for(var t=JSON.parse(JSON.stringify(this.props.data)),a=0,n=Object.entries(t);a<n.length;a++){var r=n[a],l=Object(b.a)(r,2),i=l[0],c=l[1];"Poster"!==i&&"Ratings"!==i&&"Response"!==i&&"Type"!==i&&"DVD"!==i&&"Website"!==i&&"Metascore"!==i&&"imdbRating"!==i&&"imdbVotes"!==i&&this.arr.push("".concat(i,": ").concat(c))}}},{key:"render",value:function(){var e=JSON.parse(JSON.stringify(this.props.data));return null!=e?(this.renderDetails(),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"card text-center"},r.a.createElement("img",{src:e.Poster,className:"card-img-top",alt:"movie poster"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},e.Title," ",e.Year),r.a.createElement("a",{href:"/",className:"btn btn-primary"},"Save")),r.a.createElement("ul",{className:"list-group list-group-flush"},this.arr.map(function(e){return r.a.createElement("li",{className:"list-group-item"},e)})),r.a.createElement("div",{className:"card-footer text-muted"},"2 days ago")))):null}}]),t}(n.Component),f=function(e){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link",href:"/"},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/"},"Top Ten")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/"},"Disabled")))))},g=(a(18),function(e){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:""},"Cinema Search"),r.a.createElement("p",{className:"lead"},"This is a modified jumbotron that occupies the entire horizontal space of its parent.")))}),E=a(10),k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={movies:[],text:"",results:[],selectedMovie:null},a.handleSubmit=a.handleSubmit.bind(Object(m.a)(a)),a.clickHandler=a.clickHandler.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(JSON.stringify(E));console.log("componentDidMount",e)}},{key:"componentWillUnmount",value:function(){}},{key:"componentDidUpdate",value:function(){console.log("componentDidUpdate")}},{key:"shouldComponentUpdate",value:function(){return!0}},{key:"handleSubmit",value:function(e){var t=this;console.log("handleSubmit"),fetch("http://www.omdbapi.com/?apikey=a36e0862&s=".concat(e)).then(function(e){return e.json()}).then(function(e){var a=e.Search?e.Search:[];t.setState(function(e,t){return{results:a}})})}},{key:"clickHandler",value:function(e){var t=this;console.log(e),fetch("http://www.omdbapi.com/?apikey=a36e0862&t=".concat(e,"&plot=full")).then(function(e){return e.json()}).then(function(e){console.log(e.Title,e),t.setState(function(t,a){return{selectedMovie:e}})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement(g,null),r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Movies"),r.a.createElement(h,{handleSubmit:this.handleSubmit}),r.a.createElement(p,{clickHandler:this.clickHandler,results:this.state.results})),r.a.createElement("div",null,r.a.createElement(v,{data:this.state.selectedMovie})),r.a.createElement("footer",{className:"footer bg-inverse"},r.a.createElement("div",{className:"container"},r.a.createElement("span",{className:"text-muted"},"copyright 2018"))))}}]),t}(n.Component);a(19),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.3ad24f81.chunk.js.map