(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(A,e,a){},23:function(A,e,a){},43:function(A,e,a){"use strict";a.r(e);var t=a(2),s=a.n(t),c=a(16),n=a.n(c),i=(a(22),a(23),a(3)),m=a.p+"static/media/ratingMovie.de38a8ac.png",r=(a(7),a(0));var l=function(A){var e=A.dis,a=A.setDis,t=A.image,s=A.posterPath,c=A.title,n=A.date,i=A.lang,m=A.rating,l=A.plot,d=A.rated,o=A.votes,k=A.year;return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"info-Container",id:"info-Container",style:{backgroundColor:"rgba(0, 0, 0, 0.7)",display:"".concat(e)},children:[Object(r.jsx)("h3",{className:"cut",onClick:function(){a("none")},children:"X"}),Object(r.jsxs)("div",{className:"main-cont",children:[Object(r.jsx)("div",{className:"mov-img",children:Object(r.jsx)("input",{type:"image",className:"card-img-top",src:null===s?"":t,alt:"IMAGE"})}),Object(r.jsxs)("div",{className:"mov-details",children:[Object(r.jsx)("h4",{className:"heading",children:c}),Object(r.jsx)("br",{}),Object(r.jsxs)("h5",{className:"det",children:[Object(r.jsx)("span",{className:"head",children:"Year: "}),n.slice(0,4)]}),Object(r.jsxs)("h5",{className:"det",children:[Object(r.jsx)("span",{className:"head",children:"Language: "}),i]}),Object(r.jsxs)("h5",{className:"det",children:[Object(r.jsx)("span",{className:"head",children:"Rated: "}),d]}),Object(r.jsxs)("h5",{className:"det",children:[Object(r.jsx)("span",{className:"head",children:"Rating: "}),m," (",o,")"]}),Object(r.jsxs)("h5",{className:"det",children:[Object(r.jsx)("span",{className:"head",children:"Released: "}),k]}),Object(r.jsxs)("h5",{className:"det",children:[Object(r.jsx)("span",{className:"head",children:"Plot: "}),Object(r.jsx)("div",{className:"plot",children:l})]})]})]})]})})};var d=function(A){var e=A.title,a=A.image,s=A.posterPath,c=A.rating,n=A.date,d=A.lang,o=A.rated,k=A.plot,J=A.votes,j=A.year,h=Object(t.useState)("none"),b=Object(i.a)(h,2),g=b[0],O=b[1],Q=Object(t.useState)(),v=Object(i.a)(Q,2),N=v[0],x=v[1];return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"card",style:{width:"17rem",height:"33rem"},onClick:function(){x(a),O("flex")},children:[Object(r.jsx)("input",{type:"image",className:"card-img-top",src:"N/A"===s?"":a,alt:"IMAGE"}),Object(r.jsxs)("div",{className:"card-body",children:[e.length>47?Object(r.jsxs)("h5",{className:"card-title",children:[e.slice(0,44),"..."]}):Object(r.jsx)("h5",{className:"card-title",children:e}),Object(r.jsxs)("div",{className:"details",children:[Object(r.jsxs)("h5",{className:"date",children:["Year: ",n]}),Object(r.jsxs)("div",{className:"rating-details",children:[Object(r.jsx)("img",{src:m,alt:"",className:"rating-img"}),Object(r.jsx)("h5",{className:"rating",children:c})]})]})]})]}),Object(r.jsx)(l,{dis:g,setDis:O,image:N,posterPath:s,title:e,date:n,lang:d,rated:o,rating:c,plot:k,votes:J,year:j})]})},o=a(17),k=a.n(o),J=a.p+"static/media/movielogo.4497c662.png";var j=function(){var A=Object(t.useState)(),e=Object(i.a)(A,2),a=e[0],s=e[1],c=Object(t.useState)(null),n=Object(i.a)(c,2),m=n[0],l=n[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"cont",children:Object(r.jsxs)("div",{className:"Search-Cont",children:[Object(r.jsx)("h4",{className:"srch-head",children:"Search For Any Movie"}),Object(r.jsxs)("div",{className:"search",children:[Object(r.jsx)("input",{type:"text",onChange:function(A){l(A.target.value)}}),Object(r.jsx)("button",{className:"search-btn",onClick:function(){""!==m&&null!==m?k.a.get("https://api.themoviedb.org/3/search/movie?api_key=69f8e9780dee4fc0e26aec59a5b32f10&query=".concat(m)).then((function(A){var e=m;A.data.results[0].title.toLowerCase().includes(e.toLowerCase())&&s(A.data)})).catch((function(A){return alert("Enter valid movie name!")})):alert("Enter movie name")},children:Object(r.jsx)("img",{className:"search-img",src:"data:image/png;base64,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",alt:""})})]})]})}),Object(r.jsx)("div",{className:"display-container",children:a?a.results.map((function(A){return Object(r.jsx)(d,{title:A.title,image:"https://image.tmdb.org/t/p/w500/".concat(A.poster_path?A.poster_path:""),posterPath:A.poster_path?A.poster_path:"N/A",rating:A.vote_average?A.vote_average:"N/A",date:A.release_date?A.release_date.slice(0,4):"N/A",year:A.release_date?A.release_date:"N/A",movie:a,lang:A.original_language,rated:A.adult?"R 18+":"PG-13",plot:A.overview?A.overview:"N/A",votes:A.vote_count?A.vote_count:"N/A"},A.id)})):Object(r.jsx)("img",{src:J,alt:"",className:"mov-logo"})}),Object(r.jsx)("h2",{children:Object(r.jsx)("img",{src:J,alt:"",className:"movi-logo",id:"movi-logo"})})]})};var h=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(j,{})})},b=function(A){A&&A instanceof Function&&a.e(3).then(a.bind(null,44)).then((function(e){var a=e.getCLS,t=e.getFID,s=e.getFCP,c=e.getLCP,n=e.getTTFB;a(A),t(A),s(A),c(A),n(A)}))};n.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(h,{})}),document.getElementById("root")),b()},7:function(A,e,a){}},[[43,1,2]]]);
//# sourceMappingURL=main.44899570.chunk.js.map