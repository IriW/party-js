(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(7),a=(n(0),n(93)),i={title:"Custom Effects"},c={unversionedId:"custom-effects",id:"custom-effects",isDocsHomePage:!1,title:"Custom Effects",description:"Introduction",source:"@site/docs/05-custom-effects.md",sourceDirName:".",slug:"/custom-effects",permalink:"/docs/custom-effects",editUrl:"https://github.com/yiliansource/party-js/edit/main/docs/docs/05-custom-effects.md",version:"current",sidebarPosition:5,frontMatter:{title:"Custom Effects"},sidebar:"sidebar",previous:{title:"Shapes",permalink:"/docs/shapes"},next:{title:"Particle Modules",permalink:"/docs/particle-modules"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Example",id:"example",children:[{value:"Breakdown",id:"breakdown",children:[]}]}],l={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"introduction"},"Introduction"),Object(a.b)("p",null,"As we've seen before, ",Object(a.b)("a",{parentName:"p",href:"/docs/templates"},"templates")," are powerful tools, but sometimes you might want more control over the effects you create than what the library offers pre-made. This chapter will break down how a template is built, and how you can use that knowledge to create your own effects using emitters, variations and modules."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("p",null,"To understand how custom effects work, let's break down the ",Object(a.b)("a",{parentName:"p",href:"/docs/templates#confetti"},"confetti")," template we saw before. Note that some parts are omitted for the sake of brevity."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"function confetti(\n    source: Source,\n    options?: Partial<ConfettiConfiguration>\n): Emitter {\n    const config = party.util.overrideDefaults(\n        {\n            /* ... */\n        },\n        options\n    );\n    const rect = party.util.sourceToRect(source);\n    const emitter = party.scene.createEmitter({\n        emitterOptions: {\n            // ...\n            initialSpeed: config.speed,\n            initialLifetime: party.variation.range(6, 8),\n        },\n        emissionOptions: {\n            rate: 0,\n            bursts: [{ time: 0, count: config.count }],\n        },\n        shapeOptions: {\n            angle: party.variation.skew(\n                -90,\n                party.variation.evaluateVariation(config.spread)\n            ),\n            source: rect,\n        },\n        rendererOptions: {\n            shapeFactory: config.shapes,\n        },\n    });\n\n    const rotationModule = emitter.addModule(party.modules.RotationModifier);\n    rotationModule.rotation = config.rotationOverLifetime;\n\n    // ...\n\n    return emitter;\n}\n")),Object(a.b)("h3",{id:"breakdown"},"Breakdown"),Object(a.b)("p",null,"Let's break down the effect bit by bit. First, we provide fill in values that the user potentially omitted, to ensure that all the configuration we need has a proper value."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"const config = party.util.overrideDefaults(\n    {\n        /* ... */\n    },\n    options\n);\n")),Object(a.b)("p",null,"Next up, we determine the actual area that the particles will be emitted from. This is done by converting the ",Object(a.b)("inlineCode",{parentName:"p"},"Source")," parameter to a ",Object(a.b)("inlineCode",{parentName:"p"},"Rect")," using a utility method."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"const rect = party.util.sourceToRect(source);\n")),Object(a.b)("p",null,"After we've prepared all the objects we need, it's time to finally create the ",Object(a.b)("inlineCode",{parentName:"p"},"Emitter")," object. This is the instance that will ultimately be responsible for spawning our confetti-particles."),Object(a.b)("p",null,"We use the fact that we can pass every configuration option that we need directly into the method that creates a new emitter in the scene."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"const emitter = party.scene.createEmitter({\n    emitterOptions: {\n        // ...\n        initialSpeed: config.speed,\n        initialLifetime: party.variation.range(6, 8),\n    },\n    emissionOptions: {\n        rate: 0,\n        bursts: [{ time: 0, count: config.count }],\n    },\n    shapeOptions: {\n        angle: party.variation.skew(\n            -90,\n            party.variation.evaluateVariation(config.spread)\n        ),\n        source: rect,\n    },\n    rendererOptions: {\n        shapeFactory: config.shapes,\n    },\n});\n")),Object(a.b)("p",null,"Note that we're passing ",Object(a.b)("a",{parentName:"p",href:"/docs/variations"},"variations")," to some of the options. This is to - as the name might suggest - allow variety in the way that particles are emitted. You can learn more about variations on their documentation page."),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"emitter options")," control what properties the emitted particle are given after they are spawned, things like colour, velocity or rotation."),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"emission options")," control the speed at which particles are emitted. The ",Object(a.b)("inlineCode",{parentName:"p"},"rate")," option specifies how many particles should be emitted per second, while the ",Object(a.b)("inlineCode",{parentName:"p"},"bursts")," option can be used to specify points in time at which groups of particles should be spawned. For the confetti effect, we only want particles to be emitted all at once, so this is fitting."),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"shape options")," specify the area that particles are emitted from, and the direction that they are emitted in. The source is defined by a rectangle."),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"renderer options")," define the way that particles appear on the screen, and how certain properties of them are applied to their looks, for example the lighting and transform."),Object(a.b)("p",null,"Finally, we want to give some variation over time to the particles. In this case, we will use a ",Object(a.b)("inlineCode",{parentName:"p"},"RotationModifier")," to rotate the particles over time. We use an instance method of the emitter to add the module by it's type, and then configure it."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"const rotationModule = emitter.addModule(party.modules.RotationModifier);\nrotationModule.rotation = config.rotationOverLifetime;\n")),Object(a.b)("p",null,"Note that we ",Object(a.b)("em",{parentName:"p"},"could")," also add the module manually, but the above method is shorter."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"const rotationModule = new party.modules.RotationModifier();\nrotationModule.rotation = config.rotationOverLifetime;\nemitter.modules.push(rotationModule);\n")),Object(a.b)("p",null,"At the end we simply return the created emitter object, but this is obviously optional."),Object(a.b)("hr",null),Object(a.b)("p",null,"That's all there is to it! If you want to learn more about how to create custom effects, check out the subsequent chapters for more details on individual aspects."))}p.isMDXComponent=!0},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return n?r.a.createElement(b,c(c({ref:t},l),{},{components:n})):r.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);