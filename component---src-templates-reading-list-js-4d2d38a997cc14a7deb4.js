(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{Q4iy:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return c}));var n=a("dI71"),r=a("q1tI"),o=a.n(r),s=(a("Wbzz"),a("vrFN")),l=a("7oih"),i=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges,n=this.props.pageContext,r=n.currentPage;n.numPages,r-1==1||(r-1).toString(),(r+1).toString();return o.a.createElement(l.a,{location:this.props.location,title:t,extraClassname:"container-reading"},o.a.createElement(s.a,{title:t,keywords:["blog","dwb","董文博","dwbbb","dwbbb.com","javascript","reading"]}),a.map((function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug,n=t.frontmatter.process,r=t.frontmatter.tags,s=Math.floor(n[0]/n[1]*100),l="";return s<=20?l="low":s>20&&s<100?l="middle":100===s&&(l="complete"),o.a.createElement("article",{className:"m-post",key:t.fields.slug,onClick:function(){return window.open(t.fields.slug,"_self")}},t.frontmatter.photos&&t.frontmatter.photos.length&&t.frontmatter.photos[0]?o.a.createElement("div",{className:"m-post-img",style:{backgroundImage:"url("+(t.frontmatter.photos&&t.frontmatter.photos.length&&t.frontmatter.photos[0])+")"}}):null,o.a.createElement("div",{className:"m-post-content"},o.a.createElement("h3",{className:"title"},a),o.a.createElement("div",{className:"content"},r.map((function(e){return o.a.createElement("div",{className:"item tag"},e)})),o.a.createElement("div",{className:"item"}),o.a.createElement("div",{className:"item process "+l},o.a.createElement("div",{className:"percent"},s,"%"),o.a.createElement("div",{className:"line-base"},o.a.createElement("div",{className:"line-highlight",style:{width:s+"%"}}))))))})),o.a.createElement("div",null))},t}(o.a.Component);t.default=i;var c="549990670"}}]);
//# sourceMappingURL=component---src-templates-reading-list-js-4d2d38a997cc14a7deb4.js.map