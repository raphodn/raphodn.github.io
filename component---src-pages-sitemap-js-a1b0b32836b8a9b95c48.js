(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{cgQx:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),m=a("vrFN"),o=a("Bl7J");t.default=function(e){var t=e.data,a=t.allMarkdownRemark.edges,n=t.sitemapJson;return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,null),l.a.createElement(o.a,null,l.a.createElement("h1",null,"Sitemap"),n.sitemapGroups.map((function(e,t){return l.a.createElement("section",{key:t},l.a.createElement("h2",null,e.name),l.a.createElement("ul",{className:"margin-top-0"},e.links.map((function(e,t){return l.a.createElement("li",{key:t},l.a.createElement(r.Link,{to:e.url},e.name))})),"Projects"!==e.name?null:a.filter((function(e){return e.node.frontmatter.path.startsWith("/project")})).map((function(e){var t=e.node;return l.a.createElement("li",{key:t.frontmatter.path},l.a.createElement(r.Link,{to:t.frontmatter.path},t.frontmatter.title))}))))})),l.a.createElement("h2",null,"Blog Posts"),l.a.createElement("ul",{className:"margin-top-0"},l.a.createElement("li",null,l.a.createElement(r.Link,{to:"/blog"},"Blog Home")),l.a.createElement("li",null,l.a.createElement(r.Link,{to:"/blog/tags"},"Blog Tags")),a.filter((function(e){return e.node.frontmatter.path.startsWith("/blog")})).map((function(e){var t=e.node;return l.a.createElement("li",{key:t.frontmatter.path},l.a.createElement(r.Link,{to:t.frontmatter.path},t.frontmatter.date,": ",t.frontmatter.title))}))),l.a.createElement("h2",null,"Other"),l.a.createElement("ul",{className:"margin-top-0"},l.a.createElement("li",null,l.a.createElement(r.Link,{to:"/404"},"404"))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("i",null,"Last updated: ",n.updated_at)))}}}]);
//# sourceMappingURL=component---src-pages-sitemap-js-a1b0b32836b8a9b95c48.js.map