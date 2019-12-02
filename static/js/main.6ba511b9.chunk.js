(this.webpackJsonpshowcase=this.webpackJsonpshowcase||[]).push([[0],{39:function(e,t,n){e.exports=n(67)},44:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(28),i=n.n(o);n(44),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=n(1),c=n(10),s={extraTiny:"0.6.25rem",tiny:"0.75rem",small:"0.875rem",medium:"1rem",large:"1.125rem",extraLarge:"1.25rem",extraExtraLarge:"1.5rem",extraExtraExtraLarge:"3rem"},u={white:"#F3F7F0",lightGrey:"#d4d4d4",darkGrey:"#343434",blue:"#1B4965",pink:"#A93F55",yellow:"#FFC857"},m={fontSizes:s,breakpoints:{large:"1400px"},globalPadding:"10vw",spacing:{tiny:"0.5rem",small:"1rem",medium:"1.5rem",large:"3rem",extraLarge:"4rem",extraExtraLarge:"8rem"},colors:u},d=n(7),p="/showcase/",f="/showcase/designSystem",h="/showcase/usingAPIs",g=function(e){return"\n    font-family: 'Quicksand', sans-serif;\n    color: ".concat(e.color?u["".concat(e.color)]:u.darkGrey,";\n    text-align: ").concat(e.textAlign?e.textAlign:"left",";\n    font-size: ").concat(e.fontSize?s["".concat(e.fontSize)]:s.medium,";\n    line-height: 1.5em;\n    font-weight: ").concat(e.bold?700:400,";\n    overflow: ").concat(e.ellipsis?"hidden":"visible","\n    text-overflow: ").concat(e.ellipsis?"ellipsis":"unset","\n")},b=l.b.span.withConfig({displayName:"Typography__Span",componentId:"sc-9ri6ey-0"})(["",""],(function(e){return g(e)})),E=l.b.p.withConfig({displayName:"Typography__Paragraph",componentId:"sc-9ri6ey-1"})([""," max-width:600px;"],(function(e){return g(e)})),y=l.b.h1.withConfig({displayName:"Typography__H1",componentId:"sc-9ri6ey-2"})([""," text-transform:uppercase;font-weight:700;font-size:",";"],(function(e){return g(e)}),(function(e){var t=e.fontSize,n=e.theme.fontSizes.extraExtraExtraLarge;return t||n})),x=l.b.h2.withConfig({displayName:"Typography__H2",componentId:"sc-9ri6ey-3"})([""," text-transform:uppercase;font-weight:700;letter-spacing:-0.03rem;font-size:",";"],(function(e){return g(e)}),(function(e){var t=e.fontSize,n=e.theme.fontSizes.extraExtraLarge;return t||n})),w=l.b.h3.withConfig({displayName:"Typography__H3",componentId:"sc-9ri6ey-4"})([""," text-transform:uppercase;font-weight:700;letter-spacing:-0.03rem;font-size:",";"],(function(e){return g(e)}),(function(e){var t=e.fontSize,n=e.theme.fontSizes.extraLarge;return t||n})),v=l.b.div.withConfig({displayName:"Layout__Block",componentId:"sc-12apbgw-0"})(["background-color:",";"],(function(e){var t=e.color,n=e.theme,r=n.colors,a=n.colors.white;return t?r["".concat(t)]:a})),k=function(e){var t=e.color,n=e.padding,r=void 0===n||n,o=e.children;return a.a.createElement(v,{color:t||"white"},r&&a.a.createElement(O,{size:"extraLarge"}),o,r&&a.a.createElement(O,{size:"extraExtraLarge"}))},z=l.b.div.withConfig({displayName:"Layout__PageWrapper",componentId:"sc-12apbgw-1"})(["min-height:100vh;width:100%;background-color:",";"],(function(e){return e.theme.colors.lightGrey})),_=l.b.div.withConfig({displayName:"Layout__PageContent",componentId:"sc-12apbgw-2"})(["width:100%;height:100%;max-width:",";margin:0 auto;"],(function(e){return e.theme.breakpoints.large})),C=(l.b.div.withConfig({displayName:"Layout__Row",componentId:"sc-12apbgw-3"})(["display:flex;flex-direction:row;justify-content:flex-start;"]),l.b.div.withConfig({displayName:"Layout__RowCenter",componentId:"sc-12apbgw-4"})(["display:flex;flex-direction:row;justify-content:center;"])),j=(l.b.div.withConfig({displayName:"Layout__Column",componentId:"sc-12apbgw-5"})(["display:flex;flex-direction:column;justify-content:flex-start;"]),l.b.div.withConfig({displayName:"Layout__ColumnCenter",componentId:"sc-12apbgw-6"})(["display:flex;flex-direction:column;justify-content:center;"]),l.b.div.withConfig({displayName:"Layout__ContentWrapper",componentId:"sc-12apbgw-7"})(["padding:",";"],(function(e){var t=e.theme.globalPadding;return"0 ".concat(t)}))),O=l.b.div.withConfig({displayName:"Layout__VerticalSpacer",componentId:"sc-12apbgw-8"})(["height:",";"],(function(e){var t=e.size,n=e.theme,r=n.spacing,a=n.spacing.medium;return t?r["".concat(t)]:a})),I=n(4),S="undefined"!==typeof window;function N(e){var t=e.element,n=e.useWindow;if(!S)return{x:0,y:0};var r=t?t.current:document.body,a=r?r.getBoundingClientRect():{top:0,left:0};return n?{x:window.scrollX,y:window.scrollY}:{x:a.left,y:a.top}}function L(e,t,n,a,o){var i=Object(r.useRef)(N({useWindow:a,element:n})),l=null,c=function(){var t=N({element:n,useWindow:a});e({prevPos:i.current,currPos:t}),i.current=t,l=null};Object(r.useLayoutEffect)((function(){var e=function(){o?null===l&&(l=setTimeout(c,o)):c()};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),t)}var G=Object(l.b)(j).withConfig({displayName:"styles__ContentWrapperStyled",componentId:"sc-16ej8h8-0"})(["transition:opacity ease 0.5s,transform ease 0.4s;opacity:",";transform:",";"],(function(e){return e.visible?1:0}),(function(e){return e.visible?"scaleY(1)":"scaleY(0.85)"})),P=function(e){var t=e.children,n=Object(r.useState)(!0),o=Object(I.a)(n,2),i=o[0],l=o[1],c=Object(r.useRef)(null),s="undefined"!==typeof window;return L((function(e){e.prevPos;var t=e.currPos,n=!!s&&t.y<window.innerHeight;n!==i&&l(n)}),[i],c,!1,300),a.a.createElement(G,{ref:c,visible:i},t)},T=n(2);function W(){var e=Object(T.a)(["\n    left: auto;\n    right: 20px;\n"]);return W=function(){return e},e}function B(){var e=Object(T.a)(["\n    position: absolute;\n    height: 20px;\n    width: 20px;\n    top: 20px;\n    left: 20px;\n    border-radius: 50%;\n    background-color: #777;\n    background: radial-gradient(#333, #111);\n    border-radius: 10px;\n    animation: "," 4s linear 0s infinite;\n"]);return B=function(){return e},e}function R(){var e=Object(T.a)(["\n    position: relative;\n    height: 100%;\n    width: 100%;\n"]);return R=function(){return e},e}function A(){var e=Object(T.a)(["\n    position: absolute;\n    height: 65px;\n    width: 100px;\n    top: 50px;\n    left: 50px;\n    border-radius: 50%;\n    background-color: #777;\n    background: radial-gradient(#888, #555);\n    border-radius: 10px;\n    animation: "," 0.4s linear 0s infinite;\n"]);return A=function(){return e},e}function H(){var e=Object(T.a)(["\n    position: absolute;\n    right: 5px;\n    bottom: 0px;\n    height: 30px;\n    width: 60px;\n    border-radius: 50%;\n    background-color: #333;\n    border-radius: 10px;\n"]);return H=function(){return e},e}function D(){var e=Object(T.a)(["\n    position: absolute;\n    text-align: center;\n    left: 5px;\n    top: 0px;\n    height: 100px;\n    width: 30px;\n    background-color: #444;\n    border-radius: 10px;\n    box-shadow: 7px 10px 22px 0px rgba(0, 0, 0, 0.75);\n"]);return D=function(){return e},e}function F(){var e=Object(T.a)(["\n    position: relative;\n    text-align: center;\n    width: 40px;\n    height: 100px;\n    margin-left: 80px;\n    margin-top: 150px;\n    transform-origin: top;\n    animation: "," 0.8s linear 0s infinite;\n"]);return F=function(){return e},e}function U(){var e=Object(T.a)(["\n    position: absolute;\n    width: 20px;\n    height: 0;\n    border-left: 80px solid transparent;\n    border-right: 80px solid transparent;\n    border-bottom: 70px solid #666;\n    border-radius: 50px;\n    left: 10px;\n    bottom: 20px;\n    animation: "," 1s ease-in-out 0s infinite;\n"]);return U=function(){return e},e}function M(){var e=Object(T.a)(["\n    position: absolute;\n    width: 40px;\n    height: 36px;\n    background-color: #222;\n    border-radius: 50%;\n    right: 40px;\n    bottom: 0px;\n    animation: "," 0.8s linear 0s infinite;\n"]);return M=function(){return e},e}function Y(){var e=Object(T.a)(["\n    position: absolute;\n    width: 36px;\n    height: 40px;\n    background-color: #222;\n    border-radius: 50%;\n    left: 40px;\n    bottom: 0px;\n    animation: "," 0.8s linear 0s infinite;\n"]);return Y=function(){return e},e}function J(){var e=Object(T.a)(["\n    position: absolute;\n    width: 140px;\n    height: 150px;\n    background: radial-gradient(#555, #888);\n    border-radius: 6%;\n    left: calc(50% - 140px / 2);\n    bottom: 24px;\n    animation: "," 1s ease-in-out 0s infinite;\n"]);return J=function(){return e},e}function q(){var e=Object(T.a)(["\n    position: absolute;\n    width: 30px;\n    height: 30px;\n    background-color: #555;\n    background: radial-gradient(transparent, #888);\n    border-radius: 50%;\n    left: calc(50% - 15px);\n    top: 0;\n    animation: "," 2s ease 0s infinite;\n"]);return q=function(){return e},e}function $(){var e=Object(T.a)(["\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    background-color: #555;\n    background: radial-gradient(#555, #888);\n    border-radius: 50%;\n    left: calc(50% - 5px);\n    top: 0;\n    animation: "," 0.4s ease-in-out 0s infinite;\n"]);return $=function(){return e},e}function Q(){var e=Object(T.a)(["\n    position: absolute;\n    width: 4px;\n    height: 30px;\n    background-color: #555;\n    border-radius: 6%;\n    left: calc(50% - 2px);\n    top: 20px;\n    animation: "," 0.4s ease-in-out 0s infinite;\n"]);return Q=function(){return e},e}function V(){var e=Object(T.a)(["\n    position: absolute;\n    width: 20px;\n    height: 40px;\n    background-color: #555;\n    border-radius: 6%;\n    left: calc(50% - 10px);\n    top: 100px;\n"]);return V=function(){return e},e}function X(){var e=Object(T.a)(["\n    position: absolute;\n    width: 200px;\n    height: 300px;\n    left: calc(50% - 200px / 2);\n    bottom: 0;\n    animation: "," 10s linear 0s infinite;\n    z-index: 1;\n"]);return X=function(){return e},e}function Z(){var e=Object(T.a)(["\n    position: relative;\n    height: 600px;\n    width: 100%;\n    overflow: hidden;\n    z-index: 0;\n"]);return Z=function(){return e},e}function K(){var e=Object(T.a)(["\n    position: absolute;\n    z-index: 2;\n    background: ",";\n"]);return K=function(){return e},e}function ee(){var e=Object(T.a)(["\n    0%{\n        /* transform: translate(0, 400px) */\n        transform: translate(0, 200%) scale(1) rotate(0deg)\n    }\n    7%{\n        /* transform: translate(0, 400px) */\n        transform: translate(0, 50%) scale(1.5) rotate(-30deg)\n    }\n    14%{\n        /* transform: translate(0, 100px) */\n        transform:  translate(0, 50%) scale(1.5) rotate(-30deg)\n    }\n    18%{\n        /* transform: translate(0, 100px) */\n        transform:  translate(0, 200%) \n    }\n    19%{\n        /* transform: translate(0, 100px) */\n        transform:  translate(150%, 200%) scale(1)\n    }\n    20%{\n        /* transform: translate(0, 100px) */\n        transform:  translate(1000px, 0) rotate(-20deg)\n    }\n\n    99%{\n        /* transform: translate(0, 0) */\n        transform: translate(-1000px, 0) \n    }\n\n    100%{\n        /* transform: translate(0, 0) */\n        transform: translate(-1000px, 200%) rotate(0deg)\n    }\n"]);return ee=function(){return e},e}function te(){var e=Object(T.a)(["\n    0% {\n        height: 20px;\n    }\n    10% {\n        height: 20px;\n    }\n    12% {\n        height: 0px;\n    }\n    15% {\n        height: 20px\n    }\n\n    80% {\n        transform scale(1);\n    }\n    82% {\n        transform scale(1.3);\n    }\n    87% {transform scale(1);\n    }\n    100% {\n        height: 20px;\n    }\n"]);return te=function(){return e},e}function ne(){var e=Object(T.a)(["\n    0% {\n        opacity: 1;\n        transform: scale(1);\n    }\n    90% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 0;\n        transform: scale(8);\n    }\n"]);return ne=function(){return e},e}function re(){var e=Object(T.a)(["\n    0% {\n        transform: translate(0, 0)\n    }\n    50% {\n        transform: translate(0, -2px)\n    }\n    100% {\n        transform: translate(0, 0)\n    }\n"]);return re=function(){return e},e}function ae(){var e=Object(T.a)(["\n    0% {\n        transform rotate(0deg)\n    }\n    50% {\n        transform rotate(30deg)\n    }\n    100% {\n        transform rotate(0deg)\n    }\n"]);return ae=function(){return e},e}function oe(){var e=Object(T.a)(["\n    0% {\n        transform skew(0deg, 0deg)\n    }\n    25% {\n        transform skew(1deg, 0deg)\n    }\n    50% {\n        transform skew(0deg, 0deg)\n    }\n    100% {\n        transform skew(-1deg, 0deg)\n    }\n"]);return oe=function(){return e},e}function ie(){var e=Object(T.a)(["\n    0% {\n        transform rotate(0deg)\n    }\n    50% {\n        transform rotate(180deg)\n    }\n    100% {\n        transform rotate(360deg)\n    }\n"]);return ie=function(){return e},e}var le=Object(l.c)(ie()),ce=Object(l.c)(oe()),se=Object(l.c)(ae()),ue=Object(l.c)(re()),me=Object(l.c)(ne()),de=Object(l.c)(te()),pe=Object(l.c)(ee()),fe=Object(l.b)(j)(K(),(function(e){var t=e.theme.colors.blue;return"linear-gradient(to bottom, ".concat(t," 85%, rgba(0,0,0,0)) 15%")})),he=l.b.div(Z()),ge=l.b.div(X(),pe),be=l.b.div(V()),Ee=l.b.div(Q(),ue),ye=l.b.div($(),ue),xe=l.b.div(q(),me),we=l.b.div(J(),ce),ve=l.b.div(Y(),le),ke=l.b.div(M(),le),ze=l.b.div(U(),ce),_e=l.b.div(F(),se),Ce=l.b.div(D()),je=l.b.div(H()),Oe=l.b.div(A(),ue),Ie=l.b.div(R()),Se=l.b.div(B(),de),Ne=Object(l.b)(Se)(W()),Le=function(){return a.a.createElement(he,null,a.a.createElement(ge,null,a.a.createElement(be,null),a.a.createElement(we,null),a.a.createElement(ve,null),a.a.createElement(ke,null),a.a.createElement(ze,null),a.a.createElement(_e,null,a.a.createElement(je,null),a.a.createElement(Ce,null)),a.a.createElement(xe,null),a.a.createElement(Ee,null,a.a.createElement(ye,null)),a.a.createElement(Oe,null,a.a.createElement(Ie,null,a.a.createElement(Se,null),a.a.createElement(Ne,null)))),a.a.createElement(fe,null,a.a.createElement(O,{size:"extraLarge"}),a.a.createElement(x,{color:"white"},"A Robot"),a.a.createElement(O,{size:"medium"}),a.a.createElement(E,{color:"white"},"It turns out that finding a decent animation libray that will play ball with TypeScript and React hooks is actaully a big ask. Those that do interesting tweens seem to rely on DOM events. All the others don't seem to do anything that CSS3 animations can't do out of the box. So I made this animation in plain old CSS."),a.a.createElement(O,{size:"small"})))},Ge=function(){return a.a.createElement(z,null,a.a.createElement(_,null,a.a.createElement(k,null,a.a.createElement(j,null,a.a.createElement(O,{size:"extraExtraLarge"}),a.a.createElement(y,null," welcome"),a.a.createElement(O,{size:"large"}),a.a.createElement(E,null,"Welcome to my front-end showcase. I originally created this site to try out TypeScript instead of using Flow. This was also an exersice to see if I could make a website using pure functional components and hooks without using classes and their lifecycle functions."))),a.a.createElement(k,{color:"blue",padding:!1},a.a.createElement(Le,null)),a.a.createElement(k,{color:"darkGrey"},a.a.createElement(P,null,a.a.createElement(x,{color:"white"}," under the hood"),a.a.createElement(O,{size:"medium"}),a.a.createElement(E,{color:"white"},"React",a.a.createElement("br",null),"React Router",a.a.createElement("br",null),"Typescript",a.a.createElement("br",null),"Styled components",a.a.createElement("br",null),"Prettier",a.a.createElement("br",null),"Jest + Enzyme snapshot regression testing")))))};function Pe(){var e=Object(T.a)(["\n    font-size: ",";\n    padding: ",";\n    font-weight: 500;\n    text-transform: uppercase;\n    transition: color 0.3s ease, background-color 0.3s ease;\n    background-color: ",";\n    border-width: 0.12rem;\n    border-style: solid;\n    border-radius: 1.5rem;\n    border-color: ",";\n    color: ",";\n\n    &:hover,\n    &:focus {\n        background-color: ",";\n        color: ",";\n    }\n"]);return Pe=function(){return e},e}var Te=l.b.button(Pe(),(function(e){return e.theme.fontSizes.medium}),(function(e){var t=e.theme.spacing,n=t.tiny,r=t.medium;return"".concat(n," ").concat(r)}),(function(e){var t=e.color,n=e.theme,r=n.colors,a=n.colors.blue;return t?r["".concat(t)]:a}),(function(e){var t=e.color,n=e.theme,r=n.colors,a=n.colors.blue;return t?r["".concat(t)]:a}),(function(e){var t=e.color,n=e.theme.colors,r=n.white,a=n.darkGrey;switch(t){case"white":case"yellow":return a;case"blue":case"pink":case"darkGrey":case void 0:default:return r}}),(function(e){var t=e.color,n=e.theme.colors.white;switch(t){case"white":case"yellow":return"rgba(0, 0, 0, 0.4)";case"blue":case"pink":case"darkGrey":case void 0:default:return n}}),(function(e){var t=e.color,n=e.theme,r=n.colors,a=n.colors.blue;return t?r["".concat(t)]:a})),We=function(e){var t=e.color,n=void 0===t?"blue":t,r=e.onClick,o=void 0===r?function(){return null}:r,i=e.children;return a.a.createElement(Te,{onClick:o,color:n},i)},Be=l.b.div.withConfig({displayName:"styles__TextInputWrapper",componentId:"sc-995004-0"})(["padding-top:2rem;position:relative;overflow:hidden;"]),Re=l.b.label.withConfig({displayName:"styles__LabelStyled",componentId:"sc-995004-1"})(["position:absolute;font-size:",";font-weight:700;bottom:0.5rem;left:0;transition:bottom 0.2s,font-size 0.2s;opacity:0.6;"],(function(e){return e.theme.fontSizes.medium})),Ae=l.b.input.withConfig({displayName:"styles__InputStyled",componentId:"sc-995004-2"})(["width:100%;border:none;border-bottom:",";background:none;position:relative;top:0;left:0;z-index:1;padding:",";font-size:",";outline:0;transition:border-color 0.3s ease;&:focus{border-color:",";}&:focus + ",",&:not(:placeholder-shown) + ","{z-index:2;bottom:calc(100% - 1.5rem);font-size:",";}"],(function(e){var t=e.theme.colors.lightGrey;return"0.12rem solid ".concat(t)}),(function(e){var t=e.theme.spacing.tiny;return"".concat(t," 0")}),(function(e){return e.theme.fontSizes.medium}),(function(e){return e.theme.colors.darkGrey}),Re,Re,(function(e){return e.theme.fontSizes.tiny})),He=function(e){var t=e.name,n=e.labelText,r=e.required,o=void 0!==r&&r;return a.a.createElement(Be,null,a.a.createElement(Ae,{placeholder:" ",type:"text",required:o,name:t}),a.a.createElement(Re,null,n))},De=l.b.div.withConfig({displayName:"styles__UserCardWrapper",componentId:"sc-1o33n2o-0"})(["overflow:hidden;"]),Fe=l.b.div.withConfig({displayName:"styles__CoverColor",componentId:"sc-1o33n2o-1"})(["background-color:",";width:100%;height:150px;position:relative;"],(function(e){return e.color})),Ue=l.b.div.withConfig({displayName:"styles__BottomHalf",componentId:"sc-1o33n2o-2"})(["background-color:",";padding:",";"],(function(e){return e.theme.colors.white}),(function(e){var t=e.theme,n=t.globalPadding,r=t.spacing.large;return"".concat(r," ").concat(n," ").concat(r," ").concat(n)})),Me=l.b.div.withConfig({displayName:"styles__ImageWrapper",componentId:"sc-1o33n2o-3"})(["height:128px;width:128px;border-radius:6px;overflow:hidden;border:",";position:absolute;bottom:-40px;"],(function(e){var t=e.theme.colors.lightGrey;return"solid 1px ".concat(t)})),Ye=l.b.img.withConfig({displayName:"styles__ImageContainer",componentId:"sc-1o33n2o-4"})(["height:128px;width:128px;"]),Je=function(e){var t=e.user,n=t.name,r=n.first,o=n.last,i=t.picture,l=t.email,c=t.location,s=c.street,u=c.city,m=c.state,d=c.postcode,p=e.color;return a.a.createElement(De,null,a.a.createElement(C,null,a.a.createElement(Fe,{color:p},a.a.createElement(C,null,a.a.createElement(Me,null,a.a.createElement(Ye,{src:i.large}))))),a.a.createElement(Ue,null,a.a.createElement(O,{size:"small"}),a.a.createElement(w,null,r," ",o),a.a.createElement(O,{size:"small"}),a.a.createElement(E,{ellipsis:!0},a.a.createElement(b,{bold:!0},"Email: ")," ",l),a.a.createElement(E,{ellipsis:!0},a.a.createElement(b,{bold:!0},"Street: ")," ",a.a.createElement(b,null,s.number," ",s.name)),a.a.createElement(E,{ellipsis:!0},a.a.createElement(b,{bold:!0},"City: ")," ",u),a.a.createElement(E,{ellipsis:!0},a.a.createElement(b,{bold:!0},"State: ")," ",m),a.a.createElement(E,{ellipsis:!0},a.a.createElement(b,{bold:!0},"Postcode: ")," ",d)))},qe=n(31),$e=n.n(qe),Qe=l.b.div.withConfig({displayName:"styles__CarouselWrapper",componentId:"sc-177mrkn-0"})(["width:100%;overflow-y:hidden;"]),Ve=l.b.div.withConfig({displayName:"styles__CarouselScrollArea",componentId:"sc-177mrkn-1"})(["overflow-x:scroll;-webkit-overflow-scrolling:touch;scroll-snap-type:x mandatory;white-space:nowrap;padding-bottom:20px;margin-bottom:-20px;height:100%;"]),Xe=l.b.div.withConfig({displayName:"styles__CarouselCard",componentId:"sc-177mrkn-2"})(["scroll-snap-align:center;display:inline-block;width:100%;"]),Ze=l.b.div.withConfig({displayName:"styles__CarouselCardInner",componentId:"sc-177mrkn-3"})(["transition:transform 0.2s linear;transform:",";"],(function(e){return e.isSelected?"scale(1)":"scale(0.85)"})),Ke=l.b.div.withConfig({displayName:"styles__DotContainer",componentId:"sc-177mrkn-4"})(["display:flex;flex-direction:row;justify-content:center;"]),et=l.b.button.withConfig({displayName:"styles__Dot",componentId:"sc-177mrkn-5"})(["border:none;padding:0;margin:",";width:16px;height:16px;border-radius:50%;color:",";transition:opacity 0.3s ease,transform 0.3s ease;opacity:",";&:hover{transform:scale(1.5);}"],(function(e){return e.theme.spacing.tiny}),(function(e){return e.theme.colors.white}),(function(e){return e.selected?1:.6})),tt=n(36),nt=function(e){var t=e.count,n=e.currentPosition,r=e.scrollToPosition;return a.a.createElement(Ke,null,Object(tt.a)(Array(t)).map((function(e,t){var o=t===n;return a.a.createElement(et,{key:t,selected:o,onClick:function(){r(t)}})})))},rt=function(e){var t=e.children,n=Object(r.useState)(0),o=Object(I.a)(n,2),i=o[0],l=o[1],c=Object(r.useRef)(null),s=a.a.Children.toArray(t).filter(Boolean),u=$e.a.throttle((function(){if(!c||!c.current)return null;var e=c.current.getBoundingClientRect().width,t=(c.current&&c.current.scrollTop,c.current?c.current.scrollLeft:void 0);if(t){var n=Math.round(t/e);l(n)}}),100);return a.a.createElement(a.a.Fragment,null,a.a.createElement(Qe,null,a.a.createElement(Ve,{ref:c,onScroll:u},s.map((function(e,t){var n=t===i;return a.a.createElement(Xe,{key:t},a.a.createElement(Ze,{isSelected:n},e))})))),a.a.createElement(O,{size:"small"}),a.a.createElement(nt,{count:s.length,currentPosition:i,scrollToPosition:function(e){if(!c||!c.current)return null;var t=c.current.getBoundingClientRect().width,n=Math.round(t*e);c.current.scrollTo(n,0),l(e)}}))},at=l.b.div.withConfig({displayName:"styles__TilesWrapper",componentId:"sc-93af04-0"})(["width:100%;"]),ot=l.b.div.withConfig({displayName:"styles__FlexWrapRow",componentId:"sc-93af04-1"})(["display:flex;flex-direction:row;justify-content:flex-start;flex-wrap:wrap;margin:",";"],(function(e){var t=e.theme.spacing.small;return"-".concat(t)})),it=l.b.div.withConfig({displayName:"styles__ColorTileWrapper",componentId:"sc-93af04-2"})(["padding:",";"],(function(e){return e.theme.spacing.small})),lt=l.b.div.withConfig({displayName:"styles__ColorTile",componentId:"sc-93af04-3"})(["box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px;padding:",";background-color:",";width:170px;"],(function(e){var t=e.theme.spacing,n=t.small,r=t.extraLarge;return"".concat(r," ").concat(n," ").concat(n," ").concat(n)}),(function(e){return e.color})),ct=l.b.div.withConfig({displayName:"styles__ColorLabelWrapper",componentId:"sc-93af04-4"})(["display:flex;flex-direction:row;justify-content:space-around;background-color:",";padding:",";"],(function(e){return e.theme.colors.white}),(function(e){return e.theme.spacing.tiny})),st=Object.keys(u),ut={email:"angela.castro@example.com",location:{street:{number:"8267",name:"Grove Road"},city:"Stevenage",state:"Durham",postcode:"BD18 8JD",coordinates:{latitude:61.2773,longitude:45.9598}},login:{uuid:"1255d3c5-a9c8-414e-8eb5-127478a19f62"},name:{first:"Angela",last:"Castro"},picture:{large:"https://randomuser.me/api/portraits/women/45.jpg"}},mt=function(){return a.a.createElement(z,null,a.a.createElement(_,null,a.a.createElement(k,null,a.a.createElement(O,{size:"extraExtraLarge"}),a.a.createElement(j,null,a.a.createElement(y,null,"Design System"),a.a.createElement(O,{size:"large"}),a.a.createElement(x,null,"Colours"),a.a.createElement(O,{size:"large"}),a.a.createElement(at,null,a.a.createElement(ot,null,st.map((function(e){return a.a.createElement(it,{key:e},a.a.createElement(lt,{color:u["".concat(e)]},a.a.createElement(ct,null,a.a.createElement(b,null,function(e){var t=e.replace(/([A-Z])/g," $1").trim();return t.charAt(0).toUpperCase()+t.slice(1)}(e),":"),a.a.createElement(b,null,u["".concat(e)]))))})))))),a.a.createElement(k,{color:"yellow"},a.a.createElement(O,{size:"medium"}),a.a.createElement(j,null,a.a.createElement(x,{color:"darkGrey"},"Colour Sections"),a.a.createElement(O,{size:"large"}),a.a.createElement(w,{color:"darkGrey"},"Yellow"),a.a.createElement(O,{size:"large"}),a.a.createElement(E,{color:"darkGrey"},"Example section text"))),a.a.createElement(k,{color:"blue"},a.a.createElement(O,{size:"medium"}),a.a.createElement(j,null,a.a.createElement(w,{color:"white"},"Blue"),a.a.createElement(O,{size:"large"}),a.a.createElement(E,{color:"white"},"Example section text"))),a.a.createElement(k,{color:"white"},a.a.createElement(O,{size:"medium"}),a.a.createElement(j,null,a.a.createElement(w,{color:"darkGrey"},"White"),a.a.createElement(O,{size:"large"}),a.a.createElement(E,{color:"darkGrey"},"Example section text"))),a.a.createElement(k,{color:"pink"},a.a.createElement(O,{size:"medium"}),a.a.createElement(j,null,a.a.createElement(w,{color:"white"},"Pink"),a.a.createElement(O,{size:"large"}),a.a.createElement(E,{color:"white"},"Example section text"))),a.a.createElement(k,{color:"darkGrey"},a.a.createElement(O,{size:"medium"}),a.a.createElement(j,null,a.a.createElement(w,{color:"white"},"Dark Grey"),a.a.createElement(O,{size:"large"}),a.a.createElement(E,{color:"white"},"Example section text"))),a.a.createElement(k,{color:"blue"},a.a.createElement(O,{size:"medium"}),a.a.createElement(j,null,a.a.createElement(x,{color:"white"},"Typography"),a.a.createElement(O,{size:"large"}),a.a.createElement(y,{color:"white"},"H1 Example text"),a.a.createElement(O,{size:"large"}),a.a.createElement(x,{color:"white"},"H2 Example text"),a.a.createElement(O,{size:"large"}),a.a.createElement(w,{color:"white"},"H3 Example text"),a.a.createElement(O,{size:"large"}),a.a.createElement(E,{color:"white"},"Paragraph example text"))),a.a.createElement(k,{color:"white",padding:!1},a.a.createElement(O,{size:"extraLarge"}),a.a.createElement(j,null,a.a.createElement(O,{size:"medium"}),a.a.createElement(x,{color:"darkGrey"},"Controls"),a.a.createElement(O,{size:"large"}),a.a.createElement(w,{color:"darkGrey"},"Buttons"),a.a.createElement(O,{size:"large"}),a.a.createElement(We,null,"Blue button (default)"),a.a.createElement(O,{size:"small"}),a.a.createElement(We,{color:"pink"},"Pink Button"),a.a.createElement(O,{size:"small"}),a.a.createElement(We,{color:"darkGrey"},"Dark Grey Button"),a.a.createElement(O,{size:"tiny"}))),a.a.createElement(k,{color:"pink",padding:!1},a.a.createElement(O,{size:"tiny"}),a.a.createElement(j,null,a.a.createElement(We,{color:"yellow"},"Yellow Button"),a.a.createElement(O,{size:"small"}),a.a.createElement(We,{color:"white"},"white Button"),a.a.createElement(O,{size:"tiny"}))),a.a.createElement(k,{color:"white",padding:!1},a.a.createElement(O,{size:"tiny"}),a.a.createElement(j,null,a.a.createElement(O,{size:"large"}),a.a.createElement(w,{color:"darkGrey"},"Form inputs"),a.a.createElement(O,{size:"medium"}),a.a.createElement(He,{name:"textfield",labelText:"Enter some text here:"})),a.a.createElement(O,{size:"extraExtraLarge"})),a.a.createElement(k,{color:"blue",padding:!1},a.a.createElement(O,{size:"extraLarge"}),a.a.createElement(j,null,a.a.createElement(O,{size:"medium"}),a.a.createElement(x,{color:"white"},"Components"),a.a.createElement(O,{size:"large"}),a.a.createElement(w,{color:"white"},"User card"),a.a.createElement(O,{size:"medium"}),a.a.createElement(Je,{color:u.pink,user:ut}),a.a.createElement(O,{size:"large"}),a.a.createElement(w,{color:"white"},"Carousel (scrollable mobile friendly)"),a.a.createElement(O,{size:"medium"}),a.a.createElement(rt,null,a.a.createElement(Je,{color:u.yellow,user:ut}),a.a.createElement(Je,{color:u.blue,user:ut}),a.a.createElement(Je,{color:u.pink,user:ut}),a.a.createElement(Je,{color:u.darkGrey,user:ut}))),a.a.createElement(O,{size:"extraExtraLarge"}))))},dt=n(14),pt=n.n(dt),ft=n(32),ht=n(33),gt=n.n(ht),bt=function(e,t){var n=Object(r.useState)(e),a=Object(I.a)(n,2),o=a[0],i=a[1],l=Object(r.useState)(t),c=Object(I.a)(l,2),s=c[0],u=c[1],m=Object(r.useState)(!1),d=Object(I.a)(m,2),p=d[0],f=d[1],h=Object(r.useState)(!1),g=Object(I.a)(h,2),b=g[0],E=g[1];return Object(r.useEffect)((function(){(function(){var e=Object(ft.a)(pt.a.mark((function e(){var t;return pt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!1),f(!0),e.prev=2,e.next=5,gt()(o);case 5:t=e.sent,u(t.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),E(!0);case 12:f(!1);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}})()()}),[o]),[s,p,b,i]},Et=function(){return[u.pink,u.yellow,u.darkGrey][(e=3,Math.floor(Math.random()*Math.floor(e)))];var e},yt=l.b.div.withConfig({displayName:"Users__UsersWrapper",componentId:"gtg70b-0"})([""]),xt=function(){var e="https://randomuser.me/api/?nat=gb&results=5&inc=name,email,login,location,picture&noinfo",t=bt(e,{results:[]}),n=Object(I.a)(t,4),o=n[0],i=n[1],l=n[2],c=n[3];return Object(r.useEffect)((function(){c(e)}),[c]),a.a.createElement(yt,null,l?a.a.createElement(E,null,"Error retrieving user data"):i?a.a.createElement(E,null,"Loading"):a.a.createElement(rt,null,o.results.map((function(e){return a.a.createElement(Je,{key:e.login.uuid,user:e,color:Et()})}))))},wt=function(){return a.a.createElement(z,null,a.a.createElement(_,null,a.a.createElement(k,{color:"blue"},a.a.createElement(j,null,a.a.createElement(O,{size:"extraExtraLarge"}),a.a.createElement(y,{color:"white"},"Using APIs"),a.a.createElement(O,{size:"large"}),a.a.createElement(x,{color:"white"},"Random User Data"),a.a.createElement(O,{size:"medium"}),a.a.createElement(xt,null)))))},vt=function(){return a.a.createElement(d.d,null,a.a.createElement(d.b,{path:f,component:mt}),a.a.createElement(d.b,{path:h,component:wt}),a.a.createElement(d.b,{exact:!0,path:p,component:Ge}),a.a.createElement(d.a,{from:"/",to:p}))},kt=l.b.header.withConfig({displayName:"styles__HeaderWrapper",componentId:"osp2u8-0"})(["position:fixed;top:0;left:0;right:0;margin:0 auto;width:100vw;max-width:",";transition:margin ease 0.2s,opacity ease 0.3s;margin-top:",";opacity:",";z-index:10;"],(function(e){return e.theme.breakpoints.large}),(function(e){return e.visible?"0":"-100px"}),(function(e){return e.visible?"1":"0"})),zt=l.b.div.withConfig({displayName:"styles__HeaderInner",componentId:"osp2u8-1"})(["margin:0 auto;background-color:",";padding:",";"],(function(e){return e.theme.colors.darkGrey}),(function(e){var t=e.theme,n=t.spacing.small,r=t.globalPadding;return"".concat(n," ").concat(r)})),_t=l.b.ul.withConfig({displayName:"styles__Links",componentId:"osp2u8-2"})(["padding:0;max-width:",";display:flex;flex-direction:row;list-style-type:none;justify-content:flex-start;"],(function(e){return e.theme.breakpoints.large})),Ct=l.b.li.withConfig({displayName:"styles__HeaderLinkItem",componentId:"sc-1r5zy5u-0"})(["padding:0;margin:",";"],(function(e){var t=e.theme.spacing.small;return"0 ".concat(t," 0 0")})),jt=l.b.div.withConfig({displayName:"styles__HoverInidcator",componentId:"sc-1r5zy5u-1"})(["height:3px;background-color:",";margin-top:",";width:100%;max-width:0;transition:max-width ease 0.3s;"],(function(e){return e.theme.colors.yellow}),(function(e){return e.theme.spacing.tiny})),Ot=(l.b.div.withConfig({displayName:"styles__RowCenter",componentId:"sc-1r5zy5u-2"})(["display:flex;flex-direction:row;justify-content:center;"]),Object(l.b)(c.b).withConfig({displayName:"styles__NavLinkStyled",componentId:"sc-1r5zy5u-3"})(["text-decoration:none;display:flex;flex-direction:column;justify-content:center;","{transition:color ease 0.3s;font-weight:600;}&.selected{","{max-width:150px;}}&:hover,&:focus{outline:none;","{color:",";}}"],E,jt,E,(function(e){return e.theme.colors.yellow}))),It=function(e){var t=e.to,n=e.title,r=e.exact,o=void 0!==r&&r;return a.a.createElement(Ct,null,a.a.createElement(Ot,{exact:o,to:t,activeClassName:"selected"},a.a.createElement(E,{color:"white"},n),a.a.createElement(C,null,a.a.createElement(jt,null))))},St=function(e){var t=e.visible;return a.a.createElement(kt,{visible:t},a.a.createElement(zt,null,a.a.createElement(x,{color:"white"},"Showcase"),a.a.createElement(O,{size:"medium"}),a.a.createElement("nav",null,a.a.createElement(_t,null,a.a.createElement(It,{to:p,title:"Home",exact:!0}),a.a.createElement(It,{to:f,title:"Design System"}),a.a.createElement(It,{to:h,title:"Using APIs"})))))},Nt=function(){var e=Object(r.useState)(!0),t=Object(I.a)(e,2),n=t[0],o=t[1];return L((function(e){var t=e.prevPos,r=e.currPos.y>=t.y;r!==n&&o(r)}),[n],null,!1,300),Object(r.useMemo)((function(){return a.a.createElement(St,{visible:n})}),[n])},Lt=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(l.a,{theme:m},a.a.createElement(c.a,null,a.a.createElement(Nt,null),a.a.createElement(vt,null))))};i.a.render(a.a.createElement(Lt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[39,1,2]]]);
//# sourceMappingURL=main.6ba511b9.chunk.js.map