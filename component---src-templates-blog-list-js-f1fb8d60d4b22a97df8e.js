(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{eWDE:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return m}));var a=n("dI71"),r=n("q1tI"),o=n.n(r),l=n("Wbzz"),i=n("vrFN"),s=n("7oih"),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,n=e.allMarkdownRemark.edges,a=this.props.pageContext,r=a.currentPage,c=a.numPages,m=1===r,p=r===c,u=r-1==1?"/":(r-1).toString(),f=(r+1).toString();return o.a.createElement(s.a,{location:this.props.location,title:t},o.a.createElement(i.a,{title:t,keywords:["blog","dwb","董文博","dwbbb","dwbbb.com","javascript","design"]}),n.map((function(e){var t=e.node,n=t.frontmatter.title||t.fields.slug;return o.a.createElement("article",{className:"m-post",key:t.fields.slug,onClick:function(){return window.open(t.fields.slug,"_self")}},o.a.createElement("div",{className:"m-post-content"},o.a.createElement("h3",{className:"title"},n),o.a.createElement("small",null,t.frontmatter.date),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}})),t.frontmatter.photos&&t.frontmatter.photos.length&&t.frontmatter.photos[0]?o.a.createElement("div",{className:"m-post-img"},o.a.createElement("img",{className:"ui-img",src:t.frontmatter.photos&&t.frontmatter.photos.length&&t.frontmatter.photos[0]})):null)})),o.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",listStyle:"none",padding:0}},!m&&o.a.createElement(l.Link,{to:u,rel:"prev"},"← Previous Page"),Array.from({length:c},(function(e,t){return o.a.createElement("li",{key:"pagination-number"+(t+1),style:{margin:"0 8px"}},o.a.createElement(l.Link,{to:"/"+(0===t?"":t+1),style:{textDecoration:"none",color:t+1===r?"#ffffff":"",background:t+1===r?"#007acc":"",padding:".5em"}},t+1))})),!p&&o.a.createElement(l.Link,{to:f,rel:"next"},"Next Page →")))},t}(o.a.Component);t.default=c;var m="2646713404"}}]);
//# sourceMappingURL=component---src-templates-blog-list-js-f1fb8d60d4b22a97df8e.js.map