(this.webpackJsonpshowcase=this.webpackJsonpshowcase||[]).push([[0],{23:function(e,n,t){e.exports=t(35)},28:function(e,n,t){},35:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(16),i=t.n(o),c=t(1),l=t(8);t(28),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=t(5),s="/",m="/designSystem",d={extraTiny:"0.6.25rem",tiny:"0.75rem",small:"0.875rem",medium:"1rem",large:"1.125rem",extraLarge:"1.25rem",extraExtraLarge:"1.5rem",extraExtraExtraLarge:"3rem"},p={white:"#F3F7F0",lightGrey:"#d4d4d4",darkGrey:"#343434",blue:"#1B4965",pink:"#A93F55",yellow:"#FFC857"},f={fontSizes:d,breakpoints:{large:"1400px"},globalPadding:"10vw",spacing:{tiny:"0.5rem",small:"1rem",medium:"1.5rem",large:"3rem",extraLarge:"4rem",extraExtraLarge:"8rem"},colors:p},g=function(e){return"\n    font-family: 'Quicksand', sans-serif;\n    color: ".concat(e.color?p["".concat(e.color)]:p.darkGrey,";\n    textAlign = ").concat(e.textAlign?e.textAlign:"left",";\n    font-size: ").concat(e.fontSize?d["".concat(e.fontSize)]:d.medium,";\n    line-height: 1.5em;\n")},h=c.b.span.withConfig({displayName:"Typography__Span",componentId:"sc-9ri6ey-0"})(["",""],(function(e){return g(e)})),b=c.b.p.withConfig({displayName:"Typography__Paragraph",componentId:"sc-9ri6ey-1"})([""," max-width:600px;"],(function(e){return g(e)})),x=c.b.h1.withConfig({displayName:"Typography__H1",componentId:"sc-9ri6ey-2"})([""," text-transform:uppercase;font-weight:700;font-size:",";"],(function(e){return g(e)}),(function(e){var n=e.fontSize,t=e.theme.fontSizes.extraExtraExtraLarge;return n||t})),w=c.b.h2.withConfig({displayName:"Typography__H2",componentId:"sc-9ri6ey-3"})([""," text-transform:uppercase;font-weight:500;font-size:",";"],(function(e){return g(e)}),(function(e){var n=e.fontSize,t=e.theme.fontSizes.extraExtraLarge;return n||t})),v=c.b.h3.withConfig({displayName:"Typography__H3",componentId:"sc-9ri6ey-4"})([""," text-transform:uppercase;font-weight:500;font-size:",";"],(function(e){return g(e)}),(function(e){var n=e.fontSize,t=e.theme.fontSizes.extraLarge;return n||t})),E=c.b.div.withConfig({displayName:"styles__PageWrapper",componentId:"sc-7hc2t2-0"})(["min-height:100vh;width:100%;background-color:",";"],(function(e){return e.theme.colors.lightGrey})),y=c.b.div.withConfig({displayName:"styles__PageContent",componentId:"sc-7hc2t2-1"})(["width:100%;height:100%;max-width:",";margin:0 auto;"],(function(e){return e.theme.breakpoints.large})),j=t(9),k=c.b.div.withConfig({displayName:"Layout__Block",componentId:"sc-12apbgw-0"})(["background-color:",";"],(function(e){var n=e.color,t=e.theme,r=t.colors,a=t.colors.white;return n?r["".concat(n)]:a})),O=function(e){var n=e.color,t=e.padding,r=void 0===t||t,o=e.children;return a.a.createElement(k,{color:n||"white"},r&&a.a.createElement(C,{size:"extraLarge"}),o,r&&a.a.createElement(C,{size:"extraExtraLarge"}))},_=c.b.div.withConfig({displayName:"Layout__ContentWrapper",componentId:"sc-12apbgw-1"})(["padding:",";"],(function(e){var n=e.theme.globalPadding;return"0 ".concat(n)})),C=c.b.div.withConfig({displayName:"Layout__VerticalSpacer",componentId:"sc-12apbgw-2"})(["height:",";"],(function(e){var n=e.size,t=e.theme,r=t.spacing,a=t.spacing.medium;return n?r["".concat(n)]:a})),z="undefined"!==typeof window;function I(e){var n=e.element,t=e.useWindow;if(!z)return{x:0,y:0};var r=n?n.current:document.body,a=r?r.getBoundingClientRect():{top:0,left:0};return t?{x:window.scrollX,y:window.scrollY}:{x:a.left,y:a.top}}function S(e,n,t,a,o){var i=Object(r.useRef)(I({useWindow:a,element:t})),c=null,l=function(){var n=I({element:t,useWindow:a});e({prevPos:i.current,currPos:n}),i.current=n,c=null};Object(r.useLayoutEffect)((function(){var e=function(){o?null===c&&(c=setTimeout(l,o)):l()};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),n)}var N=Object(c.b)(_).withConfig({displayName:"AnitmatedContentWrapper__ContentWrapperStyled",componentId:"zix2jr-0"})(["transition:opacity ease 0.5s,transform ease 0.4s;opacity:",";transform:",";"],(function(e){return e.visible?1:0}),(function(e){return e.visible?"scaleY(1)":"scaleY(0.85)"})),L=function(e){var n=e.children,t=Object(r.useState)(!0),o=Object(j.a)(t,2),i=o[0],c=o[1],l=Object(r.useRef)(null),u="undefined"!==typeof window;return S((function(e){e.prevPos;var n=e.currPos,t=!!u&&n.y<window.innerHeight;t!==i&&c(t)}),[i],l,!1,300),a.a.createElement(N,{ref:l,visible:i},n)},H=t(2);function W(){var e=Object(H.a)(["\n    left: auto;\n    right: 20px;\n"]);return W=function(){return e},e}function P(){var e=Object(H.a)(["\n    position: absolute;\n    height: 20px;\n    width: 20px;\n    top: 20px;\n    left: 20px;\n    border-radius: 50%;\n    background-color: #777;\n    background: radial-gradient(#333, #111);\n    border-radius: 10px;\n    animation: "," 4s linear 0s infinite;\n"]);return P=function(){return e},e}function T(){var e=Object(H.a)(["\n    position: relative;\n    height: 100%;\n    width: 100%;\n"]);return T=function(){return e},e}function F(){var e=Object(H.a)(["\n    position: absolute;\n    height: 65px;\n    width: 100px;\n    top: 50px;\n    left: 50px;\n    border-radius: 50%;\n    background-color: #777;\n    background: radial-gradient(#888, #555);\n    border-radius: 10px;\n    animation: "," 0.4s linear 0s infinite;\n"]);return F=function(){return e},e}function R(){var e=Object(H.a)(["\n    position: absolute;\n    right: 5px;\n    bottom: 0px;\n    height: 30px;\n    width: 60px;\n    border-radius: 50%;\n    background-color: #333;\n    border-radius: 10px;\n"]);return R=function(){return e},e}function A(){var e=Object(H.a)(["\n    position: absolute;\n    text-align: center;\n    left: 5px;\n    top: 0px;\n    height: 100px;\n    width: 30px;\n    background-color: #444;\n    border-radius: 10px;\n    box-shadow: 7px 10px 22px 0px rgba(0, 0, 0, 0.75);\n"]);return A=function(){return e},e}function D(){var e=Object(H.a)(["\n    position: relative;\n    text-align: center;\n    width: 40px;\n    height: 100px;\n    margin-left: 80px;\n    margin-top: 150px;\n    transform-origin: top;\n    animation: "," 0.8s linear 0s infinite;\n"]);return D=function(){return e},e}function G(){var e=Object(H.a)(["\n    position: absolute;\n    width: 20px;\n    height: 0;\n    border-left: 80px solid transparent;\n    border-right: 80px solid transparent;\n    border-bottom: 70px solid #666;\n    border-radius: 50px;\n    left: 10px;\n    bottom: 20px;\n    animation: "," 1s ease-in-out 0s infinite;\n"]);return G=function(){return e},e}function B(){var e=Object(H.a)(["\n    position: absolute;\n    width: 40px;\n    height: 36px;\n    background-color: #222;\n    border-radius: 50%;\n    right: 40px;\n    bottom: 0px;\n    animation: "," 0.8s linear 0s infinite;\n"]);return B=function(){return e},e}function Y(){var e=Object(H.a)(["\n    position: absolute;\n    width: 36px;\n    height: 40px;\n    background-color: #222;\n    border-radius: 50%;\n    left: 40px;\n    bottom: 0px;\n    animation: "," 0.8s linear 0s infinite;\n"]);return Y=function(){return e},e}function J(){var e=Object(H.a)(["\n    position: absolute;\n    width: 140px;\n    height: 150px;\n    background: radial-gradient(#555, #888);\n    border-radius: 6%;\n    left: calc(50% - 140px / 2);\n    bottom: 24px;\n    animation: "," 1s ease-in-out 0s infinite;\n"]);return J=function(){return e},e}function $(){var e=Object(H.a)(["\n    position: absolute;\n    width: 30px;\n    height: 30px;\n    background-color: #555;\n    background: radial-gradient(transparent, #888);\n    border-radius: 50%;\n    left: calc(50% - 15px);\n    top: 0;\n    animation: "," 2s ease 0s infinite;\n"]);return $=function(){return e},e}function M(){var e=Object(H.a)(["\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    background-color: #555;\n    background: radial-gradient(#555, #888);\n    border-radius: 50%;\n    left: calc(50% - 5px);\n    top: 0;\n    animation: "," 0.4s ease-in-out 0s infinite;\n"]);return M=function(){return e},e}function Q(){var e=Object(H.a)(["\n    position: absolute;\n    width: 4px;\n    height: 30px;\n    background-color: #555;\n    border-radius: 6%;\n    left: calc(50% - 2px);\n    top: 20px;\n    animation: "," 0.4s ease-in-out 0s infinite;\n"]);return Q=function(){return e},e}function U(){var e=Object(H.a)(["\n    position: absolute;\n    width: 20px;\n    height: 40px;\n    background-color: #555;\n    border-radius: 6%;\n    left: calc(50% - 10px);\n    top: 100px;\n"]);return U=function(){return e},e}function V(){var e=Object(H.a)(["\n    position: absolute;\n    width: 200px;\n    height: 300px;\n    left: calc(50% - 200px / 2);\n    bottom: 0;\n    animation: "," 10s linear 0s infinite;\n"]);return V=function(){return e},e}function X(){var e=Object(H.a)(["\n    position: relative;\n    height: 400px;\n    width: 100%;\n    overflow: hidden;\n    z-index: 0;\n"]);return X=function(){return e},e}function Z(){var e=Object(H.a)(["\n    0%{\n        /* transform: translate(0, 400px) */\n        transform: translate(0, 200%) scale(1) rotate(0deg)\n    }\n    7%{\n        /* transform: translate(0, 400px) */\n        transform: translate(0, 50%) scale(1.5) rotate(-30deg)\n    }\n    14%{\n        /* transform: translate(0, 100px) */\n        transform:  translate(0, 50%) scale(1.5) rotate(-30deg)\n    }\n    18%{\n        /* transform: translate(0, 100px) */\n        transform:  translate(0, 200%) \n    }\n    19%{\n        /* transform: translate(0, 100px) */\n        transform:  translate(150%, 200%) scale(1)\n    }\n    20%{\n        /* transform: translate(0, 100px) */\n        transform:  translate(1000px, 0) rotate(-20deg)\n    }\n\n    99%{\n        /* transform: translate(0, 0) */\n        transform: translate(-1000px, 0) \n    }\n\n    100%{\n        /* transform: translate(0, 0) */\n        transform: translate(-1000px, 200%) rotate(0deg)\n    }\n"]);return Z=function(){return e},e}function q(){var e=Object(H.a)(["\n    0% {\n        height: 20px;\n    }\n    10% {\n        height: 20px;\n    }\n    12% {\n        height: 0px;\n    }\n    15% {\n        height: 20px\n    }\n\n    80% {\n        transform scale(1);\n    }\n    82% {\n        transform scale(1.3);\n    }\n    87% {transform scale(1);\n    }\n    100% {\n        height: 20px;\n    }\n"]);return q=function(){return e},e}function K(){var e=Object(H.a)(["\n    0% {\n        opacity: 1;\n        transform: scale(1);\n    }\n    90% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 0;\n        transform: scale(8);\n    }\n"]);return K=function(){return e},e}function ee(){var e=Object(H.a)(["\n    0% {\n        transform: translate(0, 0)\n    }\n    50% {\n        transform: translate(0, -2px)\n    }\n    100% {\n        transform: translate(0, 0)\n    }\n"]);return ee=function(){return e},e}function ne(){var e=Object(H.a)(["\n    0% {\n        transform rotate(0deg)\n    }\n    50% {\n        transform rotate(30deg)\n    }\n    100% {\n        transform rotate(0deg)\n    }\n"]);return ne=function(){return e},e}function te(){var e=Object(H.a)(["\n    0% {\n        transform skew(0deg, 0deg)\n    }\n    25% {\n        transform skew(1deg, 0deg)\n    }\n    50% {\n        transform skew(0deg, 0deg)\n    }\n    100% {\n        transform skew(-1deg, 0deg)\n    }\n"]);return te=function(){return e},e}function re(){var e=Object(H.a)(["\n    0% {\n        transform rotate(0deg)\n    }\n    50% {\n        transform rotate(180deg)\n    }\n    100% {\n        transform rotate(360deg)\n    }\n"]);return re=function(){return e},e}var ae=Object(c.c)(re()),oe=Object(c.c)(te()),ie=Object(c.c)(ne()),ce=Object(c.c)(ee()),le=Object(c.c)(K()),ue=Object(c.c)(q()),se=Object(c.c)(Z()),me=c.b.div(X()),de=c.b.div(V(),se),pe=c.b.div(U()),fe=c.b.div(Q(),ce),ge=c.b.div(M(),ce),he=c.b.div($(),le),be=c.b.div(J(),oe),xe=c.b.div(Y(),ae),we=c.b.div(B(),ae),ve=c.b.div(G(),oe),Ee=c.b.div(D(),ie),ye=c.b.div(A()),je=c.b.div(R()),ke=c.b.div(F(),ce),Oe=c.b.div(T()),_e=c.b.div(P(),ue),Ce=Object(c.b)(_e)(W()),ze=function(){return a.a.createElement(me,null,a.a.createElement(de,null,a.a.createElement(pe,null),a.a.createElement(be,null),a.a.createElement(xe,null),a.a.createElement(we,null),a.a.createElement(ve,null),a.a.createElement(Ee,null,a.a.createElement(je,null),a.a.createElement(ye,null)),a.a.createElement(he,null),a.a.createElement(fe,null,a.a.createElement(ge,null)),a.a.createElement(ke,null,a.a.createElement(Oe,null,a.a.createElement(_e,null),a.a.createElement(Ce,null)))),a.a.createElement(_,null,a.a.createElement(C,{size:"extraLarge"}),a.a.createElement(w,{color:"white"},"A Robot")))},Ie=function(){return a.a.createElement(E,null,a.a.createElement(y,null,a.a.createElement(O,null,a.a.createElement(_,null,a.a.createElement(C,{size:"extraExtraLarge"}),a.a.createElement(x,null," welcome"),a.a.createElement(C,{size:"large"}),a.a.createElement(b,null,"Welcome to my front-end showcase. I originally created this site to try out TypeScript instead of using Flow. This was also an exersise to see if I could make a website usinging pure functional components and hooks withouut using classes and their lifecycle functions."))),a.a.createElement(O,{color:"blue",padding:!1},a.a.createElement(ze,null)),a.a.createElement(O,{color:"darkGrey"},a.a.createElement(L,null,a.a.createElement(w,{color:"white"}," under the hood"),a.a.createElement(C,{size:"medium"}),a.a.createElement(b,{color:"white"},"React",a.a.createElement("br",null),"React Router",a.a.createElement("br",null),"Typescript",a.a.createElement("br",null),"Styled components",a.a.createElement("br",null),"Prettier",a.a.createElement("br",null))))))},Se=Object.keys(p),Ne=c.b.div.withConfig({displayName:"DesignSystem__TilesWrapper",componentId:"u218ue-0"})(["width:100%;"]),Le=c.b.div.withConfig({displayName:"DesignSystem__FlexWrapRow",componentId:"u218ue-1"})(["display:flex;flex-direction:row;justify-content:flex-start;flex-wrap:wrap;margin:",";"],(function(e){var n=e.theme.spacing.small;return"-".concat(n)})),He=c.b.div.withConfig({displayName:"DesignSystem__ColorTileWrapper",componentId:"u218ue-2"})(["padding:",";"],(function(e){return e.theme.spacing.small})),We=c.b.div.withConfig({displayName:"DesignSystem__ColorTile",componentId:"u218ue-3"})(["box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px;padding:",";background-color:",";width:170px;"],(function(e){var n=e.theme.spacing,t=n.small,r=n.extraLarge;return"".concat(r," ").concat(t," ").concat(t," ").concat(t)}),(function(e){return e.color})),Pe=c.b.div.withConfig({displayName:"DesignSystem__ColorLabelWrapper",componentId:"u218ue-4"})(["background-color:",";padding:",";"],(function(e){return e.theme.colors.white}),(function(e){return e.theme.spacing.tiny})),Te=function(){return a.a.createElement(E,null,a.a.createElement(y,null,a.a.createElement(O,null,a.a.createElement(C,{size:"extraExtraLarge"}),a.a.createElement(_,null,a.a.createElement(x,null,"Design System"),a.a.createElement(C,{size:"large"}),a.a.createElement(w,null,"Colours"),a.a.createElement(C,{size:"large"}),a.a.createElement(Ne,null,a.a.createElement(Le,null,Se.map((function(e){return a.a.createElement(He,{key:e},a.a.createElement(We,{color:p["".concat(e)]},a.a.createElement(Pe,null,a.a.createElement(h,null,function(e){var n=e.replace(/([A-Z])/g," $1");return n.charAt(0).toUpperCase()+n.slice(1)}(e),": ",p["".concat(e)]))))})))))),a.a.createElement(O,{color:"pink"},a.a.createElement(C,{size:"medium"}),a.a.createElement(_,null,a.a.createElement(w,{color:"white"},"Typography"),a.a.createElement(C,{size:"large"}),a.a.createElement(x,{color:"white"},"H1 Example text"),a.a.createElement(C,{size:"large"}),a.a.createElement(w,{color:"white"},"H2 Example text"),a.a.createElement(C,{size:"large"}),a.a.createElement(v,{color:"white"},"H3 Example text"),a.a.createElement(C,{size:"large"}),a.a.createElement(b,{color:"white"},"Paragraph example text")))))},Fe=function(){return a.a.createElement(u.c,null,a.a.createElement(u.a,{path:m,component:Te}),a.a.createElement(u.a,{path:s,component:Ie}))},Re=c.b.header.withConfig({displayName:"Header__HeaderWrapper",componentId:"sc-502vjm-0"})(["position:fixed;top:0;left:0;right:0;margin:0 auto;width:100vw;max-width:",";transition:margin ease 0.2s,opacity ease 0.3s;margin-top:",";opacity:",";z-index:10;"],(function(e){return e.theme.breakpoints.large}),(function(e){return e.visible?"0":"-100px"}),(function(e){return e.visible?"1":"0"})),Ae=c.b.div.withConfig({displayName:"Header__HeaderInner",componentId:"sc-502vjm-1"})(["margin:0 auto;background-color:",";padding:",";"],(function(e){return e.theme.colors.darkGrey}),(function(e){var n=e.theme,t=n.spacing.small,r=n.globalPadding;return"".concat(t," ").concat(r)})),De=c.b.ul.withConfig({displayName:"Header__Links",componentId:"sc-502vjm-2"})(["padding:0;max-width:",";display:flex;flex-direction:row;list-style-type:none;justify-content:flex-start;li{padding:0;margin:",";}"],(function(e){return e.theme.breakpoints.large}),(function(e){var n=e.theme.spacing.small;return"0 ".concat(n," 0 0")})),Ge=c.b.div.withConfig({displayName:"Header__HoverInidcator",componentId:"sc-502vjm-3"})(["height:3px;background-color:",";margin-top:",";width:100%;max-width:0;transition:max-width ease 0.3s;"],(function(e){return e.theme.colors.yellow}),(function(e){return e.theme.spacing.tiny})),Be=c.b.div.withConfig({displayName:"Header__RowCenter",componentId:"sc-502vjm-4"})(["display:flex;flex-direction:row;justify-content:center;"]),Ye=Object(c.b)(l.b).withConfig({displayName:"Header__NavLinkStyled",componentId:"sc-502vjm-5"})(["text-decoration:none;display:flex;flex-direction:column;justify-content:center;","{transition:color ease 0.3s;font-weight:600;}&.selected{","{max-width:150px;}}&:hover,&:focus{outline:none;","{color:",";}}"],b,Ge,b,(function(e){return e.theme.colors.yellow})),Je=Object(u.f)((function(){var e=Object(r.useState)(!0),n=Object(j.a)(e,2),t=n[0],o=n[1];return S((function(e){var n=e.prevPos,r=e.currPos.y>=n.y;r!==t&&o(r)}),[t],null,!1,300),Object(r.useMemo)((function(){return a.a.createElement(Re,{visible:t},a.a.createElement(Ae,null,a.a.createElement(w,{color:"white"},"Showcase"),a.a.createElement(C,{size:"medium"}),a.a.createElement("nav",null,a.a.createElement(De,null,a.a.createElement("li",null,a.a.createElement(Ye,{exact:!0,to:s,activeClassName:"selected"},a.a.createElement(b,{color:"white"},"Home"),a.a.createElement(Be,null,a.a.createElement(Ge,null)))),a.a.createElement("li",null,a.a.createElement(Ye,{to:m,activeClassName:"selected"},a.a.createElement(b,{color:"white"},"Design System"),a.a.createElement(Be,null,a.a.createElement(Ge,null))))))))}),[t])})),$e=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(Je,null),a.a.createElement(Fe,null))};i.a.render(a.a.createElement(c.a,{theme:f},a.a.createElement(l.a,null,a.a.createElement($e,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.f972dee1.chunk.js.map