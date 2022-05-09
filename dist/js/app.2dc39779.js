(function(){"use strict";var n={2537:function(n,e,r){var o=r(9242),a=r(3396);function t(n,e,r,o,t,i){const u=(0,a.up)("HeaderApp"),l=(0,a.up)("PrimeiroComponente"),s=(0,a.up)("InfoPessoa");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(u,{esta_logado:!1}),(0,a.Wm)(l),(0,a.Wm)(s)],64)}var i=r(7139);const u=n=>((0,a.dD)("data-v-645f99a2"),n=n(),(0,a.Cn)(),n),l={href:""},s={key:0},c=u((()=>(0,a._)("a",{href:""},"Meu perfil",-1))),m=[c];function p(n,e,r,o,t,u){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("ul",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.lista,((n,e)=>((0,a.wg)(),(0,a.iD)("li",{key:e},[(0,a._)("a",l,(0,i.zw)(n.nome),1)])))),128)),r.esta_logado?((0,a.wg)(),(0,a.iD)("li",s,m)):(0,a.kq)("",!0)])])}var d={name:"HeaderApp",data(){return{lista:[{nome:"Home"},{nome:"Projetos"},{nome:"Serviços"},{nome:"Contato"}]}},props:["esta_logado"]},f=r(89);const v=(0,f.Z)(d,[["render",p],["__scopeId","data-v-645f99a2"]]);var g=v;const w=(0,a._)("h1",null,"Hello Vue!!!",-1),h={key:0},I={key:1},b={key:0};function _(n,e,r,o,t,u){const l=(0,a.up)("PicAvatar");return(0,a.wg)(),(0,a.iD)(a.HY,null,[w,(0,a.Wm)(l),(0,a._)("button",{onClick:e[0]||(e[0]=n=>t.exibirInformacoes=!t.exibirInformacoes)},[t.exibirInformacoes?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("span",h,"Exibir Informações")),t.exibirInformacoes?((0,a.wg)(),(0,a.iD)("span",I,"Ocultar Informações")):(0,a.kq)("",!0)]),t.exibirInformacoes?((0,a.wg)(),(0,a.iD)("p",b,(0,i.zw)(t.moreInformations),1)):(0,a.kq)("",!0)],64)}const P=["src"];function k(n,e,r,o,t,i){const u=(0,a.up)("MudarImagem");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("img",{src:t.avatar,alt:""},null,8,P),(0,a.Wm)(u,{onMudarImagem:i.TrocarImagem},null,8,["onMudarImagem"])])}function D(n,e,r,o,t,i){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("button",{onClick:e[0]||(e[0]=e=>n.$emit("MudarImagem"))},"Trocar imagem de perfil")])}var y={name:"MudarImagem",emits:["MudarImagem"]};const x=(0,f.Z)(y,[["render",D]]);var C=x,O={name:"PicAvatar",components:{MudarImagem:C},data(){return{avatar:"/img/avatar.png"}},methods:{TrocarImagem(){this.avatar="./img/avatar2.png"}}};const T=(0,f.Z)(O,[["render",k]]);var E=T,M={name:"PrimeiroComponente",components:{PicAvatar:E},data(){return{exibirInformacoes:!1,moreInformations:"Meu nome é Gabriel"}}};const Z=(0,f.Z)(M,[["render",_]]);var H=Z;const W=(0,a._)("h2",null,"Nós informe mais sobre vc",-1);function j(n,e,r,o,t,i){const u=(0,a.up)("TecPessoa"),l=(0,a.up)("FormCadastro");return(0,a.wg)(),(0,a.iD)("div",null,[W,(0,a.Wm)(u,{compEmail:"bielrique@email.com"}),(0,a.Wm)(l)])}const A=(0,a._)("h4",null,"Tecnologias que utilizo",-1);function q(n,e,r,o,t,u){return(0,a.wg)(),(0,a.iD)("div",null,[A,(0,a._)("p",null,"Email de contato: "+(0,i.zw)(t.email)+" - "+(0,i.zw)(r.compEmail),1),(0,a._)("ul",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.linguagens,((n,e)=>((0,a.wg)(),(0,a.iD)("li",{key:e},(0,i.zw)(n.nome),1)))),128))])])}var z={name:"TecPessoa",props:{compEmail:String},data(){return{linguagens:[{nome:"PHP"},{nome:"Python"},{nome:"JavaScript"},{nome:"Java"}],email:"gabrielghc@email.com"}}};const F=(0,f.Z)(z,[["render",q]]);var Y=F;const B=(0,a._)("h3",null,"Meu formulário",-1),K=(0,a.Uk)(),S=(0,a._)("br",null,null,-1);function J(n,e,r,o,t,i){const u=(0,a.up)("InputText"),l=(0,a.up)("InputPassword"),s=(0,a.up)("ButtonEnviar");return(0,a.wg)(),(0,a.iD)("div",null,[B,(0,a.Wm)(u),K,S,(0,a.Wm)(l),(0,a.Wm)(s)])}const G=["placeholder"];function N(n,e,r,o,t,i){return(0,a.wg)(),(0,a.iD)("input",{onKeyup:e[0]||(e[0]=n=>i.letras(n)),type:"text",placeholder:t.name},null,40,G)}var U={name:"InputText",data(){return{name:"Informe seu nome"}},methods:{letras(n){console.log(n.key)}}};const V=(0,f.Z)(U,[["render",N]]);var $=V;const L=["placeholder"];function Q(n,e,r,o,t,i){return(0,a.wg)(),(0,a.iD)("input",{type:"password",placeholder:t.placeholder},null,8,L)}var R={name:"InputPassword",data(){return{placeholder:"Informe sua senha"}}};const X=(0,f.Z)(R,[["render",Q]]);var nn=X;function en(n,e,r,o,t,i){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("button",{onClick:e[0]||(e[0]=n=>i.enviar())},"Enviar")])}var rn={name:"ButtonEnviar",data(){return{msg:"Enviado"}},methods:{enviar(){console.log(this.msg)}}};const on=(0,f.Z)(rn,[["render",en]]);var an=on,tn={name:"FormCadastro",components:{InputText:$,InputPassword:nn,ButtonEnviar:an}};const un=(0,f.Z)(tn,[["render",J]]);var ln=un,sn={name:"InfoPessoa",components:{TecPessoa:Y,FormCadastro:ln}};const cn=(0,f.Z)(sn,[["render",j]]);var mn=cn,pn={name:"App",components:{HeaderApp:g,PrimeiroComponente:H,InfoPessoa:mn}};const dn=(0,f.Z)(pn,[["render",t]]);var fn=dn;(0,o.ri)(fn).mount("#app")}},e={};function r(o){var a=e[o];if(void 0!==a)return a.exports;var t=e[o]={exports:{}};return n[o](t,t.exports,r),t.exports}r.m=n,function(){var n=[];r.O=function(e,o,a,t){if(!o){var i=1/0;for(c=0;c<n.length;c++){o=n[c][0],a=n[c][1],t=n[c][2];for(var u=!0,l=0;l<o.length;l++)(!1&t||i>=t)&&Object.keys(r.O).every((function(n){return r.O[n](o[l])}))?o.splice(l--,1):(u=!1,t<i&&(i=t));if(u){n.splice(c--,1);var s=a();void 0!==s&&(e=s)}}return e}t=t||0;for(var c=n.length;c>0&&n[c-1][2]>t;c--)n[c]=n[c-1];n[c]=[o,a,t]}}(),function(){r.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return r.d(e,{a:e}),e}}(),function(){r.d=function(n,e){for(var o in e)r.o(e,o)&&!r.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={143:0};r.O.j=function(e){return 0===n[e]};var e=function(e,o){var a,t,i=o[0],u=o[1],l=o[2],s=0;if(i.some((function(e){return 0!==n[e]}))){for(a in u)r.o(u,a)&&(r.m[a]=u[a]);if(l)var c=l(r)}for(e&&e(o);s<i.length;s++)t=i[s],r.o(n,t)&&n[t]&&n[t][0](),n[t]=0;return r.O(c)},o=self["webpackChunkprojeto_vue_padrao"]=self["webpackChunkprojeto_vue_padrao"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=r.O(void 0,[998],(function(){return r(2537)}));o=r.O(o)})();
//# sourceMappingURL=app.2dc39779.js.map