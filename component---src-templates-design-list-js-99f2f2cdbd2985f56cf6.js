(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{144:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return u});n(149);var a=n(7),r=n.n(a),o=n(0),s=n.n(o),l=(n(147),n(151)),i=n(152),c=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data,e=t.site.siteMetadata.title,n=t.allMarkdownRemark.edges,a=this.props.pageContext,r=a.currentPage;a.numPages,r-1==1||(r-1).toString(),(r+1).toString();return s.a.createElement(i.a,{location:this.props.location,title:e,extraClassname:"container-design"},s.a.createElement(l.a,{title:e,keywords:["blog","dwb","董文博","dwbbb","dwbbb.com","javascript","design"]}),n.map(function(t){var e=t.node,n=e.frontmatter.title||e.fields.slug;return s.a.createElement("article",{className:"m-post",key:e.fields.slug,onClick:function(){return window.open(e.fields.slug,"_self")}},e.frontmatter.photos&&e.frontmatter.photos.length&&e.frontmatter.photos[0]?s.a.createElement("div",{className:"m-post-img",style:{backgroundImage:"url("+(e.frontmatter.photos&&e.frontmatter.photos.length&&e.frontmatter.photos[0])+")"}}):null,s.a.createElement("div",{className:"m-post-content"},s.a.createElement("h3",{className:"title"},n),s.a.createElement("small",null,e.frontmatter.date),s.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.excerpt}})))}))},e}(s.a.Component);e.default=c;var u="360941497"},149:function(t,e,n){"use strict";n(150);var a=n(5),r=n(73),o=n(16),s=/./.toString,l=function(t){n(17)(RegExp.prototype,"toString",t,!0)};n(25)(function(){return"/a/b"!=s.call({source:"a",flags:"b"})})?l(function(){var t=a(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?r.call(t):void 0)}):"toString"!=s.name&&l(function(){return s.call(this)})},150:function(t,e,n){n(16)&&"g"!=/./g.flags&&n(24).f(RegExp.prototype,"flags",{configurable:!0,get:n(73)})}}]);
//# sourceMappingURL=component---src-templates-design-list-js-99f2f2cdbd2985f56cf6.js.map