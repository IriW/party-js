(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return y})),n.d(t,"metadata",(function(){return O})),n.d(t,"toc",(function(){return j})),n.d(t,"default",(function(){return v}));var i,a=n(3),r=n(7),o=n(0),l=n.n(o),c=n(93),s=n(4);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=function(e){var t=e.title,n=e.titleId,a=m(e,["title","titleId"]);return o.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 407.437 407.437","aria-labelledby":n},a),t?o.createElement("title",{id:n},t):null,i||(i=o.createElement("path",{d:"M386.258 91.567l-182.54 181.945L21.179 91.567 0 112.815 203.718 315.87l203.719-203.055z"})))},u=function(e){var t=e.direction,n=void 0===t?"right":t;return l.a.createElement("span",{className:"chevron "+n},l.a.createElement(d,null))},f=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={expanded:!1,height:0},n.content=Object(o.createRef)(),n}Object(s.a)(t,e);var n=t.prototype;return n.render=function(){return l.a.createElement("div",{className:"accordion "+(this.state.expanded?"active":"")},l.a.createElement("div",{className:"header",onClick:this.toggleExpanded.bind(this)},this.props.icon?l.a.createElement("img",{className:"icon",src:this.props.icon}):null,l.a.createElement("span",{className:"title"},this.props.title),l.a.createElement(u,{direction:this.state.expanded?"down":"right"})),l.a.createElement("div",{ref:this.content,className:"content",style:{maxHeight:this.state.height+"px"}},l.a.createElement("div",{className:"wrapper"},this.props.children)))},n.toggleExpanded=function(){console.log(this.content.current),this.setState({expanded:!this.state.expanded,height:this.state.expanded?0:this.content.current.scrollHeight})},t}(l.a.Component),b=function(e){var t=e.children;return l.a.createElement("div",null,t)},h=function(e){var t=e.name,n=e.type,i=e.defaultValue,a=e.description;return l.a.createElement("div",null,l.a.createElement("h3",null,l.a.createElement("code",null,t)),l.a.createElement("ul",null,n&&l.a.createElement("li",null,"Type: ",l.a.createElement("code",null,n)),i&&l.a.createElement("li",null,"Default: ",l.a.createElement("code",null,i))),a&&l.a.createElement("p",null,a))},y={title:"Templates"},O={unversionedId:"templates",id:"templates",isDocsHomePage:!1,title:"Templates",description:"Introduction",source:"@site/docs/02-templates.mdx",sourceDirName:".",slug:"/templates",permalink:"/docs/templates",editUrl:"https://github.com/yiliansource/party-js/edit/main/docs/docs/02-templates.mdx",version:"current",sidebarPosition:2,frontMatter:{title:"Templates"},sidebar:"sidebar",previous:{title:"Quick Start",permalink:"/docs/"},next:{title:"Variations",permalink:"/docs/variations"}},j=[{value:"Introduction",id:"introduction",children:[]},{value:"Confetti",id:"confetti",children:[]},{value:"Sparkles",id:"sparkles",children:[]}],g={toc:j};function v(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},g,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"introduction"},"Introduction"),Object(c.b)("p",null,'In order to simplify the learning curve, party.js provides templates to avoid needing to dive deep into emitters, modules and the like. Since they are the most "common" way of using the library, they are exported directly into the global ',Object(c.b)("inlineCode",{parentName:"p"},"party")," object, not into a sub-object."),Object(c.b)("p",null,"Before we list the templates, a quick note: Most templates support ",Object(c.b)("inlineCode",{parentName:"p"},"Source"),"s, which denote the area where particles are emitted from. A source can be:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A point object ( ",Object(c.b)("inlineCode",{parentName:"li"},"{ x, y }")," )."),Object(c.b)("li",{parentName:"ul"},"An ",Object(c.b)("inlineCode",{parentName:"li"},"HTMLElement"),"."),Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("inlineCode",{parentName:"li"},"MouseEvent"),".")),Object(c.b)("p",null,"Here you can find a list of all templates that are currently implemented, together with their configurations. If you have a suggestion for a template, feel free to ",Object(c.b)("a",{parentName:"p",href:"https://github.com/yiliansource/party-js/issues/new"},"open an issue")," for it!"),Object(c.b)("h2",{id:"confetti"},"Confetti"),Object(c.b)("p",null,"The library's signature effect. Allows you to let confetti pop from any element or point in the document! This effect supports ",Object(c.b)("em",{parentName:"p"},"sources"),". You can find an example of the effect in the ",Object(c.b)("a",{parentName:"p",href:"/docs/examples/simple#confetti"},"examples"),"."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'const element = document.querySelector(".confetti-sample");\nconst options = {\n    // ...\n};\nparty.confetti(element, options);\n')),Object(c.b)(f,{icon:"/img/settings.svg",title:"Configuration",expanded:!0,mdxType:"Accordion"},Object(c.b)(b,{mdxType:"FieldList"},Object(c.b)(h,{name:"count",type:"Variation<number>",defaultValue:"range(20, 40)",description:"The amount of confetti particles that should be emitted.",mdxType:"FieldItem"}),Object(c.b)(h,{name:"spread",type:"Variation<number>",defaultValue:"40",description:"The amount of spread that is applied to the emission angle. Note that the default angle points upwards.",mdxType:"FieldItem"}),Object(c.b)(h,{name:"speed",type:"Variation<number>",defaultValue:"range(300, 600)",description:"The initial speed that the confetti particles are emitted with.",mdxType:"FieldItem"}),Object(c.b)(h,{name:"size",type:"Variation<number>",defaultValue:"skew(1, 0.2)",description:"The initial size that the confetti particles are emitted with.",mdxType:"FieldItem"}),Object(c.b)(h,{name:"rotation",type:"Variation<Vector>",defaultValue:"() => random.randomUnitVector().scale(180)",description:"The initial rotation that the confetti particles are emitted with.",mdxType:"FieldItem"}),Object(c.b)(h,{name:"colour",type:"Variation<Colour>",defaultValue:"() => Colour.fromHsl(random.randomRange(0, 360), 100, 70)",description:"The initial colour that particles are emitted with.",mdxType:"FieldItem"}),Object(c.b)(h,{name:"rotationOverLifetime",type:"ParticleModifier<Vector>",defaultValue:"(p) => Math.min(1, (p.initialLifetime - p.lifetime) * 3)",description:"The rotation that is applied to the confetti particles over their lifetime.",mdxType:"FieldItem"}),Object(c.b)(h,{name:"sizeOverLifetime",type:"ParticleModifier<number>",defaultValue:"(p) => new Vector(140, 200, 260).scale(p.initialLifetime - p.lifetime)",description:"The size that is applied to the confetti particles over their lifetime.",mdxType:"FieldItem"}),Object(c.b)(h,{name:"shapes",type:"Variation<string | HTMLElement>",defaultValue:'["square", "circle"]',description:"The confetti shapes that should be emitted.",mdxType:"FieldItem"}))),Object(c.b)("h2",{id:"sparkles"},"Sparkles"),Object(c.b)("p",null,"Allows you to emit sparkling sparks from any element or point in the document. This effect supports ",Object(c.b)("em",{parentName:"p"},"sources"),". You can find an example of the effect in the ",Object(c.b)("a",{parentName:"p",href:"/docs/examples/simple#sparkles"},"examples"),"."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'const element = document.querySelector(".sparkles-sample");\nconst options = {\n    // ...\n};\nparty.sparkles(element, options);\n')),Object(c.b)(f,{icon:"/img/settings.svg",title:"Configuration",expanded:!0,mdxType:"Accordion"},Object(c.b)(b,{mdxType:"FieldList"},Object(c.b)(h,{name:"count",type:"Variation<number>",defaultValue:"range(10, 20)",description:"The amount of sparkles that should be emitted.",mdxType:"FieldItem"}),Object(c.b)(h,{name:"speed",type:"Variation<number>",defaultValue:"range(100, 200)",description:"The speed at which the sparkles should be emitted at (in every direction).",mdxType:"FieldItem"}),Object(c.b)(h,{name:"size",type:"Variation<number>",defaultValue:"range(0.5, 1.5)",description:"The initial size that emitted sparkles should have.",mdxType:"FieldItem"}),Object(c.b)(h,{name:"rotation",type:"Variation<Vector>",defaultValue:"() => new Vector(0, 0, random.randomRange(0, 360))",description:"The initial rotation that sparkles should be emitted with. Note that the default only affects the z-axis.",mdxType:"FieldItem"}),Object(c.b)(h,{name:"colour",type:"Variation<Colour>",defaultValue:"Colour.fromHsl(50, 100, random.randomRange(55, 85))",description:"The initial colour that sparkles should be emitted with. By default a gold-ish colour.",mdxType:"FieldItem"}),Object(c.b)(h,{name:"rotationOverLifetime",type:"ParticleModifier<Vector>",defaultValue:"(p) => new Vector(0, 0, 200).scale(p.initialLifetime - p.lifetime)",description:"The rotation that is applied to the sparkles over their lifetime.",mdxType:"FieldItem"}),Object(c.b)(h,{name:"sizeOverLifetime",type:"ParticleModifier<number>",defaultValue:"new NumericSpline({ time: 0, value: 0 }, { time: 0.3, value: 1 }, { time: 0.7, value: 1 }, { time: 1, value: 0 })",description:"The size that is applied to the sparkles over their lifetime.",mdxType:"FieldItem"}))))}v.isMDXComponent=!0},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return f}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,f=m["".concat(o,".").concat(u)]||m[u]||d[u]||r;return n?a.a.createElement(f,l(l({ref:t},s),{},{components:n})):a.a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);