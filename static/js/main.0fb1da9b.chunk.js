(this["webpackJsonpcreate-react-app"]=this["webpackJsonpcreate-react-app"]||[]).push([[0],{58:function(t,e,a){},77:function(t,e,a){t.exports=a(86)},86:function(t,e,a){"use strict";a.r(e);var o=a(0),l=a.n(o),n=a(10),s=a.n(n),i=a(129),r=a(128),c=a(64),h=a(65),g=a(33),d=a(34),m=a(46),u=a(45),f=a(114),v=a(116),S=a(118),b=a(134),L=a(88),x=a(120),p=a(121),D=Object(f.a)((function(t){return{toolBarRoot:{padding:t.spacing(1),width:"100%"},button:{margin:t.spacing(1)},toolBarButtonGroup:{marginRight:t.spacing(1)},selected:{background:"#0f0 !important"}}}));function w(t){var e=D();return l.a.createElement(v.a,{className:e.toolBarRoot},l.a.createElement(S.a,{variant:"outlined",color:"default",className:e.toolBarButtonGroup},l.a.createElement(b.a,{title:"Go Dark","aria-label":"Go Dark",placement:"top"},l.a.createElement(L.a,{onClick:function(){return t.toDark(!0)},className:!0===t.darkMode?e.selected:""},l.a.createElement(x.a,null))),l.a.createElement(b.a,{title:"Light Up","aria-label":"Light Up",placement:"top"},l.a.createElement(L.a,{onClick:function(){return t.toDark(!1)},className:!1===t.darkMode?e.selected:""},l.a.createElement(p.a,null)))))}var E=a(44),C=a.n(E),G=a(130),y=a(122),k=a(123),I=a(124),O=(a(58),function(t){Object(m.a)(a,t);var e=Object(u.a)(a);function a(t){var o;return Object(g.a)(this,a),(o=e.call(this,t)).handleDarkMode=function(t){o.setState({darkMode:t})},o.state={scale:.6,name:"City Name",darkMode:!1},o}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var t=this;C.a.load({google:{families:["Roboto:400","Product Sans","Product Sans:400"]},fontactive:function(e,a){t.bwImage(),t.colorImage()}})}},{key:"render",value:function(){var t=this;return l.a.createElement("div",{className:"main"},l.a.createElement(w,{toDark:this.handleDarkMode,darkMode:this.state.darkMode,id:"GDGToolbar"}),l.a.createElement("div",{style:T},this.state.darkMode?l.a.createElement("img",{ref:function(e){t.GDGLogo=e},onLoad:function(){t.bwImage()},src:"assets/gdg/bw.svg",alt:"GDG Icon"}):l.a.createElement("img",{ref:function(e){t.GDGLogo=e},onLoad:function(){t.colorImage()},src:"assets/gdg/color.svg",alt:"GDG Icon"})),l.a.createElement(G.a,{label:"City Name",margin:"normal",variant:"outlined",style:{width:"100%"},onChange:function(e){t.setState({name:e.target.value},(function(){t.bwImage(),t.colorImage()}))}}),l.a.createElement("br",null),l.a.createElement("canvas",{style:T,ref:function(e){t.logoCanvas=e}}),this.state.darkMode?l.a.createElement(v.a,{style:{width:"100%"}},l.a.createElement(y.a,{style:{background:"#000"}},l.a.createElement(k.a,null,l.a.createElement("img",{ref:function(e){t.fullLogoImg=e},alt:"GDG ".concat(this.state.name," Logo"),src:this.state.bwImageUrl,style:{maxWidth:"100%"}}))),l.a.createElement(I.a,null,l.a.createElement(L.a,{variant:"contained",color:"primary",href:this.state.bwImageUrl,style:{margin:"5px"},download:"GDG ".concat(this.state.name," Dark X-Logo x").concat(this.state.scale,".png")},"DOWNLOAD"))):l.a.createElement(v.a,{style:{width:"100%"}},l.a.createElement(y.a,null,l.a.createElement(k.a,null,l.a.createElement("img",{ref:function(e){t.fullLogoImg=e},alt:"GDG ".concat(this.state.name," Logo"),src:this.state.colorImageUrl,style:{maxWidth:"100%"}}))),l.a.createElement(I.a,null,l.a.createElement(L.a,{variant:"contained",color:"primary",href:this.state.colorImageUrl,style:{margin:"5px"},download:"GDG ".concat(this.state.name," Dark X-Logo x").concat(this.state.scale,".png")},"DOWNLOAD"))))}},{key:"bwImage",value:function(){var t=this.state.name,e=this.state.scale,a=this.logoCanvas.getContext("2d");a.font='400 96px "Product Sans"',this.logoScale=1.35;var o=a.measureText("GDG").width+a.measureText(this.state.name).width+this.GDGLogo.width*this.logoScale+80,l=this.GDGLogo.height+80;this.logoCanvas.setAttribute("width",o*e),this.logoCanvas.setAttribute("height",l*e),a.scale(e,e),a.font='400 96px "Product Sans"',a.fillStyle="#fff",a.drawImage(this.GDGLogo,20,0,this.GDGLogo.width*this.logoScale,this.GDGLogo.height*this.logoScale),a.fillText("GDG",this.GDGLogo.width*this.logoScale+50,137),a.font='400 96px "Product Sans"',a.fillText(t,this.GDGLogo.width*this.logoScale+a.measureText("GDG").width+70,137),this.setState({bwImageUrl:this.logoCanvas.toDataURL()})}},{key:"colorImage",value:function(){var t=this.state.name,e=this.state.scale,a=this.logoCanvas.getContext("2d");a.font='400 96px "Product Sans"',this.logoScale=1.35;var o=a.measureText("GDG").width+a.measureText(this.state.name).width+this.GDGLogo.width*this.logoScale+80,l=this.GDGLogo.height+80;this.logoCanvas.setAttribute("width",o*e),this.logoCanvas.setAttribute("height",l*e),a.scale(e,e),a.font='400 96px "Product Sans"',a.fillStyle="rgba(0, 0, 0, 0.6)",a.drawImage(this.GDGLogo,20,0,this.GDGLogo.width*this.logoScale,this.GDGLogo.height*this.logoScale),a.fillText("GDG",this.GDGLogo.width*this.logoScale+50,137),a.font='400 96px "Product Sans"',a.fillText(t,this.GDGLogo.width*this.logoScale+a.measureText("GDG").width+70,137),this.setState({colorImageUrl:this.logoCanvas.toDataURL()})}}]),a}(o.Component)),T={display:"none"},U=O,P=function(t){Object(m.a)(a,t);var e=Object(u.a)(a);function a(t){var o;return Object(g.a)(this,a),(o=e.call(this,t)).handleDarkMode=function(t){o.setState({darkMode:t})},o.state={scale:.5,name:"School Name",darkMode:!1},o}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var t=this;C.a.load({google:{families:["Roboto:400","Product Sans","Product Sans:400"]},fontactive:function(e,a){t.bwImageHorizontal(),t.colorImage(),t.colorImageVertical(),t.bwImageVertical()}})}},{key:"render",value:function(){var t=this;return l.a.createElement("div",{className:"main"},l.a.createElement(w,{toDark:this.handleDarkMode,darkMode:this.state.darkMode,id:"DSCToolbar"}),l.a.createElement("div",{style:M},this.state.darkMode?l.a.createElement("img",{ref:function(e){t.dscLogo=e},onLoad:function(){t.bwImageHorizontal(),t.bwImageVertical()},src:"assets/dsc/bw.svg",alt:"DSC Icon"}):l.a.createElement("img",{ref:function(e){t.dscLogo=e},onLoad:function(){t.colorImage(),t.colorImageVertical()},src:"assets/dsc/color.svg",alt:"DSC Icon"})),l.a.createElement(G.a,{label:"School Name",margin:"normal",variant:"outlined",style:{width:"100%"},onChange:function(e){t.setState({name:e.target.value},(function(){t.bwImageHorizontal(),t.colorImage(),t.bwImageVertical(),t.colorImageVertical()}))}}),l.a.createElement("br",null),l.a.createElement("canvas",{style:M,ref:function(e){t.logoCanvas=e}}),this.state.darkMode?l.a.createElement(l.a.Fragment,null,l.a.createElement(v.a,{style:{width:"100%"}},l.a.createElement(y.a,{style:{background:"#000"}},l.a.createElement(k.a,null,l.a.createElement("img",{ref:function(e){t.fullLogoImg=e},alt:"DSC ".concat(this.state.name," Logo"),src:this.state.fullLogoUrl,style:{maxWidth:"100%"}}))),l.a.createElement(I.a,null,l.a.createElement(L.a,{variant:"contained",color:"primary",href:this.state.fullLogoUrl,style:{margin:"5px"},download:"DSC ".concat(this.state.name," Dark X-Logo x").concat(this.state.scale,".png")},"DOWNLOAD"))),l.a.createElement(v.a,{style:{width:"100%",marginTop:"1rem"}},l.a.createElement(y.a,{style:{background:"#000"}},l.a.createElement(k.a,null,l.a.createElement("img",{ref:function(e){t.fullLogoImg=e},alt:"DSC ".concat(this.state.name," Logo"),src:this.state.fullLogoUrlVertical,style:{maxWidth:"100%"}}))),l.a.createElement(I.a,null,l.a.createElement(L.a,{variant:"contained",color:"primary",href:this.state.fullLogoUrlVertical,style:{margin:"5px"},download:"DSC ".concat(this.state.name," Dark X-Logo x").concat(this.state.scale,".png")},"DOWNLOAD")))):l.a.createElement(l.a.Fragment,null,l.a.createElement(v.a,{style:{width:"100%"}},l.a.createElement(y.a,null,l.a.createElement(k.a,null,l.a.createElement("img",{ref:function(e){t.fullLogoImg=e},alt:"DSC ".concat(this.state.name," Logo"),src:this.state.fullLogoUrlOld,style:{maxWidth:"100%"}}))),l.a.createElement(I.a,null,l.a.createElement(L.a,{variant:"contained",color:"primary",href:this.state.fullLogoUrlOld,style:{margin:"5px"},download:"DSC ".concat(this.state.name," Dark X-Logo x").concat(this.state.scale,".png")},"DOWNLOAD"))),l.a.createElement(v.a,{style:{width:"100%",marginTop:"1rem"}},l.a.createElement(y.a,null,l.a.createElement(k.a,null,l.a.createElement("img",{ref:function(e){t.fullLogoImg=e},alt:"DSC ".concat(this.state.name," Logo"),src:this.state.fullLogoUrlVerticalOld,style:{maxWidth:"100%"}}))),l.a.createElement(I.a,null,l.a.createElement(L.a,{variant:"contained",color:"primary",href:this.state.fullLogoUrlVerticalOld,style:{margin:"5px"},download:"DSC ".concat(this.state.name," Dark X-Logo x").concat(this.state.scale,".png")},"DOWNLOAD")))))}},{key:"bwImageHorizontal",value:function(){var t=this.state.name,e=this.state.scale,a=this.logoCanvas.getContext("2d");a.font='400 96px "Product Sans"',this.logoScale=1.36;var o=Math.max(a.measureText("Developer Student Clubs").width,a.measureText(this.state.name).width)+this.dscLogo.width*this.logoScale+600,l=this.dscLogo.height+150;this.logoCanvas.setAttribute("width",o*e),this.logoCanvas.setAttribute("height",l*e),a.scale(e,e),a.font='400 96px "Product Sans"',a.fillStyle="#fff",a.drawImage(this.dscLogo,20,0,this.dscLogo.width*this.logoScale,this.dscLogo.height*this.logoScale),a.fillText("Developer Student Clubs",this.dscLogo.width+112,132),a.font='400 66px "Product Sans"',a.fillText(t,this.dscLogo.width+112,243),this.setState({fullLogoUrl:this.logoCanvas.toDataURL()})}},{key:"bwImageVertical",value:function(){var t=this.state.name,e=this.state.scale,a=this.logoCanvas.getContext("2d"),o=this.logoCanvas.getContext("2d");a.font='400 91px "Product Sans"',o.font='400 62px "Product Sans"',this.logoScale=2.35;var l=Math.max(a.measureText("Developer Student Clubs").width,o.measureText(t).width)+1200,n=this.dscLogo.height*this.logoScale+150;this.logoCanvas.setAttribute("width",l*e),this.logoCanvas.setAttribute("height",n*e),a.scale(e,e),a.font='400 94px "Product Sans"',a.fillStyle="#fff",a.drawImage(this.dscLogo,l/2-this.dscLogo.width*this.logoScale/2,-.25*this.dscLogo.height*this.logoScale,this.dscLogo.width*this.logoScale,this.dscLogo.height*this.logoScale),a.textBaseline="bottom",a.fillText("Developer Student Clubs",l/2-a.measureText("Developer Student Clubs").width/2,this.dscLogo.height*this.logoScale+10),a.font='400 62px "Product Sans"',a.textBaseline="bottom",a.fillText(t,l/2-a.measureText(t).width/2,this.dscLogo.height*this.logoScale+100),this.setState({fullLogoUrlVertical:this.logoCanvas.toDataURL()})}},{key:"colorImage",value:function(){var t=this.state.name,e=this.state.scale,a=this.logoCanvas.getContext("2d"),o=this.logoCanvas.getContext("2d");a.font='400 96px "Product Sans"',o.font='400 66px "Product Sans"',this.logoScale=1.36;var l=Math.max(a.measureText("Developer Student Clubs").width,a.measureText(this.state.name).width)+this.dscLogo.width*this.logoScale+600,n=this.dscLogo.height+150;this.logoCanvas.setAttribute("width",l*e),this.logoCanvas.setAttribute("height",n*e),a.scale(e,e),a.font='400 96px "Product Sans"',a.fillStyle="rgba(0, 0, 0, 0.54)",a.drawImage(this.dscLogo,20,0,this.dscLogo.width*this.logoScale,this.dscLogo.height*this.logoScale),a.fillText("Developer Student Clubs",this.dscLogo.width+112,132),a.font='400 66px "Product Sans"',a.fillText(t,this.dscLogo.width+112,243),this.setState({fullLogoUrlOld:this.logoCanvas.toDataURL()})}},{key:"colorImageVertical",value:function(){var t=this.state.name,e=this.state.scale,a=this.logoCanvas.getContext("2d"),o=this.logoCanvas.getContext("2d");a.font='400 91px "Product Sans"',o.font='400 62px "Product Sans"',this.logoScale=2.35;var l=Math.max(a.measureText("Developer Student Clubs").width,o.measureText(t).width)+1200,n=this.dscLogo.height*this.logoScale+150;this.logoCanvas.setAttribute("width",l*e),this.logoCanvas.setAttribute("height",n*e),a.scale(e,e),a.font='400 91px "Product Sans"',a.fillStyle="rgba(0, 0, 0, 0.54)",a.drawImage(this.dscLogo,l/2-this.dscLogo.width*this.logoScale/2,-.25*this.dscLogo.height*this.logoScale,this.dscLogo.width*this.logoScale,this.dscLogo.height*this.logoScale),a.textBaseline="bottom",a.fillText("Developer Student Clubs",l/2-a.measureText("Developer Student Clubs").width/2,this.dscLogo.height*this.logoScale+10),a.font='400 62px "Product Sans"',a.textBaseline="bottom",a.fillText(t,l/2-a.measureText(t).width/2,this.dscLogo.height*this.logoScale+100),this.setState({fullLogoUrlVerticalOld:this.logoCanvas.toDataURL()})}}]),a}(o.Component),M={display:"none"},A=P,N=a(131),j=a(125),V=a(126),W=a(132),R=a(127);function B(t){var e=t.children,a=t.value,o=t.index,n=Object(h.a)(t,["children","value","index"]);return l.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==o,id:"scrollable-auto-tabpanel-".concat(o),"aria-labelledby":"scrollable-auto-tab-".concat(o)},n),a===o&&l.a.createElement(N.a,{p:3},l.a.createElement(j.a,{maxWidth:"md"},e)))}function X(t){return{id:"scrollable-auto-tab-".concat(t),"aria-controls":"scrollable-auto-tabpanel-".concat(t)}}var z=Object(f.a)((function(t){return{root:{flexGrow:1,width:"100%",backgroundColor:t.palette.background.paper}}}));function H(){var t=z(),e=l.a.useState(0),a=Object(c.a)(e,2),o=a[0],n=a[1];return l.a.createElement("div",{className:t.root},l.a.createElement(V.a,{position:"static",color:"default"},l.a.createElement(W.a,{value:o,onChange:function(t,e){n(e)},indicatorColor:"primary",textColor:"primary",variant:"scrollable"},l.a.createElement(R.a,Object.assign({label:"GDG"},X(0))),l.a.createElement(R.a,Object.assign({label:"DSC"},X(1))))),l.a.createElement(B,{value:o,index:0},l.a.createElement(U,null)),l.a.createElement(B,{value:o,index:1},l.a.createElement(A,null)))}var F=a(47),J=a(63),q=Object(J.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:F.a.A400},background:{default:"#fff"}}});s.a.render(l.a.createElement(r.a,{theme:q},l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,null),l.a.createElement(H,null))),document.querySelector("#root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.0fb1da9b.chunk.js.map