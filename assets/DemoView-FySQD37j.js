import{R,b as M,c as F,_ as E,d as B,a as Z,e as k}from"./LangMenu-BXNxnK-K.js";import{B as T,y as C,z as Q,w as Y,o as d,c as g,a as l,k as A,x as N,m,n as j,t as h,C as L,D as O,j as W,F as w,v as U,p as z,E as H,q as b,_ as f,d as c,b as I,u as J}from"./index-DMRZz0Bt.js";var K=function(n){var t=n.dt;return`
.p-togglebutton {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: `.concat(t("togglebutton.color"),`;
    background: `).concat(t("togglebutton.background"),`;
    border: 1px solid `).concat(t("togglebutton.border.color"),`;
    padding: `).concat(t("togglebutton.padding"),`;
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background `).concat(t("togglebutton.transition.duration"),", color ").concat(t("togglebutton.transition.duration"),", border-color ").concat(t("togglebutton.transition.duration"),`,
        outline-color `).concat(t("togglebutton.transition.duration"),", box-shadow ").concat(t("togglebutton.transition.duration"),`;
    border-radius: `).concat(t("togglebutton.border.radius"),`;
    outline-color: transparent;
    font-weight: `).concat(t("togglebutton.font.weight"),`;
}

.p-togglebutton-content {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: `).concat(t("togglebutton.gap"),`;
}

.p-togglebutton-label,
.p-togglebutton-icon {
    position: relative;
    transition: none;
}

.p-togglebutton::before {
    content: "";
    background: transparent;
    transition: background `).concat(t("togglebutton.transition.duration"),", color ").concat(t("togglebutton.transition.duration"),", border-color ").concat(t("togglebutton.transition.duration"),`,
            outline-color `).concat(t("togglebutton.transition.duration"),", box-shadow ").concat(t("togglebutton.transition.duration"),`;
    position: absolute;
    left: `).concat(t("togglebutton.content.left"),`;
    top: `).concat(t("togglebutton.content.top"),`;
    width: calc(100% - calc(2 *  `).concat(t("togglebutton.content.left"),`));
    height: calc(100% - calc(2 *  `).concat(t("togglebutton.content.top"),`));
    border-radius: `).concat(t("togglebutton.border.radius"),`;
}

.p-togglebutton.p-togglebutton-checked::before {
    background: `).concat(t("togglebutton.content.checked.background"),`;
    box-shadow: `).concat(t("togglebutton.content.checked.shadow"),`;
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
    background: `).concat(t("togglebutton.hover.background"),`;
    color: `).concat(t("togglebutton.hover.color"),`;
}

.p-togglebutton.p-togglebutton-checked {
    background: `).concat(t("togglebutton.checked.background"),`;
    border-color: `).concat(t("togglebutton.checked.border.color"),`;
    color: `).concat(t("togglebutton.checked.color"),`;
}

.p-togglebutton:focus-visible {
    box-shadow: `).concat(t("togglebutton.focus.ring.shadow"),`;
    outline: `).concat(t("togglebutton.focus.ring.width")," ").concat(t("togglebutton.focus.ring.style")," ").concat(t("togglebutton.focus.ring.color"),`;
    outline-offset: `).concat(t("togglebutton.focus.ring.offset"),`;
}

.p-togglebutton.p-invalid {
    border-color: `).concat(t("togglebutton.invalid.border.color"),`;
}

.p-togglebutton:disabled {
    opacity: 1;
    cursor: default;
    background: `).concat(t("togglebutton.disabled.background"),`;
    border-color: `).concat(t("togglebutton.disabled.border.color"),`;
    color: `).concat(t("togglebutton.disabled.color"),`;
}

.p-togglebutton-icon {
    color: `).concat(t("togglebutton.icon.color"),`;
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
    color: `).concat(t("togglebutton.icon.hover.color"),`;
}

.p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
    color: `).concat(t("togglebutton.icon.checked.color"),`;
}

.p-togglebutton:disabled .p-togglebutton-icon {
    color: `).concat(t("togglebutton.icon.disabled.color"),`;
}
`)},$={root:function(n){var t=n.instance,u=n.props;return["p-togglebutton p-component",{"p-togglebutton-checked":t.active,"p-invalid":u.invalid}]},content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},q=T.extend({name:"togglebutton",theme:K,classes:$}),ee={name:"BaseToggleButton",extends:M,props:{modelValue:Boolean,onIcon:String,offIcon:String,onLabel:{type:String,default:"Yes"},offLabel:{type:String,default:"No"},iconPos:{type:String,default:"left"},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:q,provide:function(){return{$pcToggleButton:this,$parentInstance:this}}},G={name:"ToggleButton",extends:ee,inheritAttrs:!1,emits:["update:modelValue","change"],methods:{getPTOptions:function(n){var t=n==="root"?this.ptmi:this.ptm;return t(n,{context:{active:this.active,disabled:this.disabled}})},onChange:function(n){!this.disabled&&!this.readonly&&(this.$emit("update:modelValue",!this.modelValue),this.$emit("change",n))}},computed:{active:function(){return this.modelValue===!0},hasLabel:function(){return C(this.onLabel)&&C(this.offLabel)},label:function(){return this.hasLabel?this.modelValue?this.onLabel:this.offLabel:"&nbsp;"}},directives:{ripple:R}},te=["tabindex","disabled","aria-pressed","data-p-checked","data-p-disabled"];function ne(e,n,t,u,a,o){var r=Q("ripple");return Y((d(),g("button",m({type:"button",class:e.cx("root"),tabindex:e.tabindex,disabled:e.disabled,"aria-pressed":e.modelValue,onClick:n[0]||(n[0]=function(){return o.onChange&&o.onChange.apply(o,arguments)})},o.getPTOptions("root"),{"data-p-checked":o.active,"data-p-disabled":e.disabled}),[l("span",m({class:e.cx("content")},o.getPTOptions("content")),[A(e.$slots,"default",{},function(){return[A(e.$slots,"icon",{value:e.modelValue,class:N(e.cx("icon"))},function(){return[e.onIcon||e.offIcon?(d(),g("span",m({key:0,class:[e.cx("icon"),e.modelValue?e.onIcon:e.offIcon]},o.getPTOptions("icon")),null,16)):j("",!0)]}),l("span",m({class:e.cx("label")},o.getPTOptions("label")),h(o.label),17)]})],16)],16,te)),[[r]])}G.render=ne;var oe=function(n){var t=n.dt;return`
.p-selectbutton {
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    outline-color: transparent;
    border-radius: `.concat(t("selectbutton.border.radius"),`;
}

.p-selectbutton .p-togglebutton {
    border-radius: 0;
    border-width: 1px 1px 1px 0;
}

.p-selectbutton .p-togglebutton:focus-visible {
    position: relative;
    z-index: 1;
}

.p-selectbutton .p-togglebutton:first-child {
    border-left-width: 1px;
    border-top-left-radius: `).concat(t("selectbutton.border.radius"),`;
    border-bottom-left-radius: `).concat(t("selectbutton.border.radius"),`;
}

.p-selectbutton .p-togglebutton:last-child {
    border-top-right-radius: `).concat(t("selectbutton.border.radius"),`;
    border-bottom-right-radius: `).concat(t("selectbutton.border.radius"),`;
}

.p-selectbutton.p-invalid {
    outline: 1px solid `).concat(t("selectbutton.invalid.border.color"),`;
    outline-offset: 0;
}
`)},ae={root:function(n){var t=n.props;return["p-selectbutton p-component",{"p-invalid":t.invalid}]}},le=T.extend({name:"selectbutton",theme:oe,classes:ae}),ie={name:"BaseSelectButton",extends:M,props:{modelValue:null,options:Array,optionLabel:null,optionValue:null,optionDisabled:null,multiple:Boolean,allowEmpty:{type:Boolean,default:!0},invalid:{type:Boolean,default:!1},disabled:Boolean,dataKey:null,ariaLabelledby:{type:String,default:null}},style:le,provide:function(){return{$pcSelectButton:this,$parentInstance:this}}};function re(e,n){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=x(e))||n){t&&(e=t);var u=0,a=function(){};return{s:a,n:function(){return u>=e.length?{done:!0}:{done:!1,value:e[u++]}},e:function(p){throw p},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,r=!0,i=!1;return{s:function(){t=t.call(e)},n:function(){var p=t.next();return r=p.done,p},e:function(p){i=!0,o=p},f:function(){try{r||t.return==null||t.return()}finally{if(i)throw o}}}}function se(e){return de(e)||ue(e)||x(e)||ce()}function ce(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x(e,n){if(e){if(typeof e=="string")return S(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?S(e,n):void 0}}function ue(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function de(e){if(Array.isArray(e))return S(e)}function S(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,u=Array(n);t<n;t++)u[t]=e[t];return u}var V={name:"SelectButton",extends:ie,inheritAttrs:!1,emits:["update:modelValue","change"],methods:{getOptionLabel:function(n){return this.optionLabel?L(n,this.optionLabel):n},getOptionValue:function(n){return this.optionValue?L(n,this.optionValue):n},getOptionRenderKey:function(n){return this.dataKey?L(n,this.dataKey):this.getOptionLabel(n)},getPTOptions:function(n,t){return this.ptm(t,{context:{active:this.isSelected(n),disabled:this.isOptionDisabled(n),option:n}})},isOptionDisabled:function(n){return this.optionDisabled?L(n,this.optionDisabled):!1},onOptionSelect:function(n,t,u){var a=this;if(!(this.disabled||this.isOptionDisabled(t))){var o=this.isSelected(t);if(!(o&&!this.allowEmpty)){var r=this.getOptionValue(t),i;this.multiple?o?i=this.modelValue.filter(function(s){return!O(s,r,a.equalityKey)}):i=this.modelValue?[].concat(se(this.modelValue),[r]):[r]:i=o?null:r,this.focusedIndex=u,this.$emit("update:modelValue",i),this.$emit("change",{event:n,value:i})}}},isSelected:function(n){var t=!1,u=this.getOptionValue(n);if(this.multiple){if(this.modelValue){var a=re(this.modelValue),o;try{for(a.s();!(o=a.n()).done;){var r=o.value;if(O(r,u,this.equalityKey)){t=!0;break}}}catch(i){a.e(i)}finally{a.f()}}}else t=O(this.modelValue,u,this.equalityKey);return t}},computed:{equalityKey:function(){return this.optionValue?null:this.dataKey}},directives:{ripple:R},components:{ToggleButton:G}},pe=["aria-labelledby"];function ge(e,n,t,u,a,o){var r=W("ToggleButton");return d(),g("div",m({class:e.cx("root"),role:"group","aria-labelledby":e.ariaLabelledby},e.ptmi("root")),[(d(!0),g(w,null,U(e.options,function(i,s){return d(),z(r,{key:o.getOptionRenderKey(i),modelValue:o.isSelected(i),onLabel:o.getOptionLabel(i),offLabel:o.getOptionLabel(i),disabled:e.disabled||o.isOptionDisabled(i),unstyled:e.unstyled,onChange:function(y){return o.onOptionSelect(y,i,s)},pt:e.ptm("pcButton")},H({_:2},[e.$slots.option?{name:"default",fn:b(function(){return[A(e.$slots,"option",{option:i,index:s},function(){return[l("span",m({ref_for:!0},e.ptm("pcButton").label),h(o.getOptionLabel(i)),17)]})]}),key:"0"}:void 0]),1032,["modelValue","onLabel","offLabel","disabled","unstyled","onChange","pt"])}),128))],16,pe)}V.render=ge;const be={data(){return{value:0,options:[{icon:"pi pi-th-large",value:0},{icon:"pi pi-table",value:1}]}}},me={class:"flex items-center gap-4 mb-7"},he={class:"text-2xl bold"},ve={class:"games-container"};function fe(e,n,t,u,a,o){const r=V,i=F;return d(),g(w,null,[l("div",me,[c(r,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=s=>a.value=s),options:a.options,optionLabel:"value",dataKey:"value",optionValue:"value","aria-labelledby":"custom"},{option:b(s=>[l("i",{class:N(s.option.icon)},null,2)]),_:1},8,["modelValue","options"]),l("span",he,h(e.$t("Live")),1)]),l("div",ve,[c(i,{"is-landscape":a.value},null,8,["is-landscape"])])],64)}const ye=f(be,[["render",fe]]),Ae="/redgold-demo/assets/girls-BIHFLWuA.png",we={},Le={class:"demo-banner mt-32 mb-7"},Ie={class:"banner-title-wrapper"},Me={class:"mb-3"},Te=l("br",null,null,-1),Ne=l("img",{src:Ae},null,-1);function Oe(e,n,t,u,a,o){return d(),g("div",Le,[l("div",Ie,[l("h1",Me,[I(h(e.$t("Play live with our hot")),1),Te,I(h(e.$t("dealers today!")),1)]),l("span",null,h(e.$t("Experience the thrill of live gaming with our top-notch dealers.")),1)]),Ne])}const Se=f(we,[["render",Oe]]);var Re={root:"p-avatar-group p-component"},Ve=T.extend({name:"avatargroup",classes:Re}),Ce={name:"BaseAvatarGroup",extends:M,style:Ve,provide:function(){return{$pcAvatarGroup:this,$parentInstance:this}}},D={name:"AvatarGroup",extends:Ce,inheritAttrs:!1};function Be(e,n,t,u,a,o){return d(),g("div",m({class:e.cx("root")},e.ptmi("root")),[A(e.$slots,"default")],16)}D.render=Be;var Ze=function(n){var t=n.dt;return`
.p-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: `.concat(t("avatar.width"),`;
    height: `).concat(t("avatar.height"),`;
    font-size: `).concat(t("avatar.font.size"),`;
    background: `).concat(t("avatar.background"),`;
    border-radius: `).concat(t("avatar.border.radius"),`;
}

.p-avatar-image {
    background: transparent;
}

.p-avatar-circle {
    border-radius: 50%;
}

.p-avatar-circle img {
    border-radius: 50%;
}

.p-avatar-icon {
    font-size: `).concat(t("avatar.font.size"),`;
}

.p-avatar img {
    width: 100%;
    height: 100%;
}

.p-avatar-lg {
    width: `).concat(t("avatar.lg.width"),`;
    height: `).concat(t("avatar.lg.width"),`;
    font-size: `).concat(t("avatar.lg.font.size"),`;
}

.p-avatar-lg .p-avatar-icon {
    font-size: `).concat(t("avatar.lg.font.size"),`;
}

.p-avatar-xl {
    width: `).concat(t("avatar.xl.width"),`;
    height: `).concat(t("avatar.xl.width"),`;
    font-size: `).concat(t("avatar.xl.font.size"),`;
}

.p-avatar-xl .p-avatar-icon {
    font-size: `).concat(t("avatar.xl.font.size"),`;
}

.p-avatar-group {
    display: flex;
    align-items: center;
}

.p-avatar-group .p-avatar + .p-avatar {
    margin-left: `).concat(t("avatar.group.offset"),`;
}

.p-avatar-group .p-avatar {
    border: 2px solid `).concat(t("avatar.group.border.color"),`;
}
`)},ke={root:function(n){var t=n.props;return["p-avatar p-component",{"p-avatar-image":t.image!=null,"p-avatar-circle":t.shape==="circle","p-avatar-lg":t.size==="large","p-avatar-xl":t.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},Ye=T.extend({name:"avatar",theme:Ze,classes:ke}),je={name:"BaseAvatar",extends:M,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Ye,provide:function(){return{$pcAvatar:this,$parentInstance:this}}},X={name:"Avatar",extends:je,inheritAttrs:!1,emits:["error"],methods:{onError:function(n){this.$emit("error",n)}}},We=["aria-labelledby","aria-label"],ze=["src","alt"];function Ge(e,n,t,u,a,o){return d(),g("div",m({class:e.cx("root"),"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel},e.ptmi("root")),[A(e.$slots,"default",{},function(){return[e.label?(d(),g("span",m({key:0,class:e.cx("label")},e.ptm("label")),h(e.label),17)):e.$slots.icon?(d(),z(J(e.$slots.icon),{key:1,class:N(e.cx("icon"))},null,8,["class"])):e.icon?(d(),g("span",m({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):e.image?(d(),g("img",m({key:3,src:e.image,alt:e.ariaLabel,onError:n[0]||(n[0]=function(){return o.onError&&o.onError.apply(o,arguments)})},e.ptm("image")),null,16,ze)):j("",!0)]})],16,We)}X.render=Ge;const xe="/redgold-demo/assets/user-bDaGFdT-.png",_="/redgold-demo/assets/user2-d8mMX2Ud.png",De="/redgold-demo/assets/user3-BHIQlnau.png",Xe={data(){return{Avatar:xe,Avatar2:_,Avatar3:De,newsText:"Experience the thrill of winning at our premier online casino, where Baccarat enthusiasts can enjoy an authentic and exhilarating gaming experience right from the comfort of their own home!",items:[{label:"Mia Taylor",icon:"pi pi-user",command:()=>{console.log("tesst")}},{label:this.$t("Sign Out"),icon:"pi pi-sign-out",command:()=>{this.$router.push("/")}}],hasScrolled:!1}},mounted(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll)},methods:{toggle(e){this.$refs.op.toggle(e)},handleScroll(){const e=window.scrollY,n=30;this.hasScrolled=e>=n},handleModalToggle(e){this.isModalOpen=e}}},_e={class:"right-side"},Pe={class:"flex items-center gap-2 mr-5 whitespace-nowrap"},Fe=l("span",{class:"text-slate-400"},"Online Users",-1),Ee=l("span",null,"20,000",-1),Qe={class:"news-wrapper flex items-center gap-2"},Ue=l("span",{class:"pi pi-megaphone"},null,-1),He={class:"announcement-slide"},Je={class:"left-side"},Ke=l("div",{class:"money"},[l("div",null,"100,000"),l("i",{class:"fa-solid fa-arrows-rotate cursor-pointer"})],-1),$e={class:"news-wrapper-2 mobile items-center gap-2 mt-2"},qe={class:"flex items-center"};function et(e,n,t,u,a,o){const r=X,i=D,s=W("marquee"),p=E,y=B;return d(),g(w,null,[l("div",{class:N({active:a.hasScrolled,"demo-header mb-7":!0})},[l("div",_e,[l("div",Pe,[c(i,null,{default:b(()=>[c(r,{image:a.Avatar,shape:"circle"},null,8,["image"]),c(r,{image:a.Avatar2,shape:"circle"},null,8,["image"]),c(r,{image:a.Avatar3,shape:"circle"},null,8,["image"])]),_:1}),Fe,Ee]),l("div",Qe,[Ue,l("div",He,[c(s,{scrollamount:"3"},{default:b(()=>[I(h(e.$t(a.newsText)),1)]),_:1})])])]),l("div",Je,[c(p),Ke,c(r,{onClick:o.toggle,image:a.Avatar,class:"mr-2 cursor-pointer desktop",size:"large",shape:"circle"},null,8,["onClick","image"])]),l("div",$e,[l("div",qe,[c(s,{scrollamount:"3"},{default:b(()=>[I(h(e.$t(a.newsText)),1)]),_:1})])])],2),c(y,{model:a.items,class:"lang-menu",popup:"",ref:"op"},null,8,["model"])],64)}const tt=f(Xe,[["render",et]]),nt={},ot={id:"demo-content"};function at(e,n,t,u,a,o){const r=tt,i=Se,s=ye;return d(),g("section",ot,[c(r),c(i),c(s)])}const lt=f(nt,[["render",at]]),it="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAABjCAIAAABYCnieAAAACXBIWXMAABYlAAAWJQFJUiTwAAAFDmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDAgNzkuMTcxYzI3ZmFiLCAyMDIyLzA4LzE2LTIyOjM1OjQxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHRpZmY6T3JpZW50YXRpb249IjEiIHhtcDpDcmVhdGVEYXRlPSIyMDI0LTA4LTAxVDEwOjQzKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wOC0wMVQxMTowNzoxNiswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNC0wOC0wMVQxMTowNzoxNiswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NGZmZTM3NjctM2YwNy00ZGU5LThmMTUtNGM2NjVhN2RlMjdiIiB4bXBN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",rt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAABjCAIAAABYCnieAAAACXBIWXMAABYlAAAWJQFJUiTwAAAE9GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDAgNzkuMTcxYzI3ZmFiLCAyMDIyLzA4LzE2LTIyOjM1OjQxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjQuMCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjQtMDgtMDFUMTA6NDI6NDErMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDI0LTA4LTAxVDExOjA2OjU4KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI0LTA4LTAxVDExOjA2OjU4KzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMTBmNThkZi04Mjc3LTQ5MDMtOWQyMy0zZTgxZTNjOWVhOTAiIHhtcE1NOkRvY3VtZW50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",st={data(){return{isModalOpen:!1,value:0,options:[{img:it,label:"Light",value:0},{img:rt,label:"Dark",value:1}]}},computed:{layoutStore(){return this.$layoutStore()}},mounted(){this.value=this.layoutStore.cardTheme},methods:{handleModalToggle(e){this.isModalOpen=e},handleSetTheme(){this.layoutStore.setCardTheme(this.value)}}},ct={class:"flex justify-between items-center w-full"},ut={class:"title"},dt={key:0,class:"text-green-600 fa-solid fa-circle-check"},pt={key:1,class:"fa-regular fa-circle-check"},gt=["src"];function bt(e,n,t,u,a,o){const r=Z,i=V,s=k;return d(),g(w,null,[l("div",null,[c(r,{onClick:n[0]||(n[0]=p=>o.handleModalToggle(!0)),icon:"pi pi-cog",text:"",rounded:"",severity:"secondary",class:"text-white lang-btn","aria-label":"Filter"})]),c(s,{visible:a.isModalOpen,"onUpdate:visible":n[2]||(n[2]=p=>a.isModalOpen=p),modal:"",header:e.$t("Choose board theme"),breakpoints:{"2000px":"30vw","1500px":"70vw","800px":"90vw","500px":"90vw"},class:"board-theme-modal"},{default:b(()=>[c(i,{modelValue:a.value,"onUpdate:modelValue":n[1]||(n[1]=p=>a.value=p),onChange:o.handleSetTheme,optionValue:"value",class:"board-theme-select",options:a.options,optionLabel:"label",dataKey:"value","aria-labelledby":"custom"},{option:b(p=>[l("div",ct,[l("span",ut,h(e.$t(p.option.label)),1),p.option.value==a.value?(d(),g("i",dt)):(d(),g("i",pt))]),l("img",{src:p.option.img},null,8,gt)]),_:1},8,["modelValue","onChange","options"])]),_:1},8,["visible","header"])],64)}const mt=f(st,[["render",bt]]),ht="data:image/svg+xml,%3csvg%20width='34'%20height='34'%20viewBox='0%200%2034%2034'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M33.5%2017C33.5%2026.12%2026.12%2033.5%2017%2033.5C7.88%2033.5%200.5%2026.12%200.5%2017C0.5%207.88%207.88%200.5%2017%200.5C26.12%200.5%2033.5%207.88%2033.5%2017ZM18.5%205.09C21.695%205.495%2024.605%207.175%2026.555%209.74L29.165%208.24C27.9324%206.50213%2026.3438%205.04678%2024.5049%203.97083C22.6659%202.89488%2020.6189%202.22302%2018.5%202V5.09ZM4.835%208.24L7.445%209.74C8.41182%208.46911%209.62199%207.40342%2011.0049%206.60507C12.3879%205.80672%2013.9159%205.29168%2015.5%205.09V2C13.3811%202.22302%2011.3341%202.89488%209.49513%203.97083C7.65619%205.04678%206.06755%206.50213%204.835%208.24ZM3.335%2023.15L5.93%2021.65C5.31364%2020.1772%204.99623%2018.5966%204.99623%2017C4.99623%2015.4034%205.31364%2013.8228%205.93%2012.35L3.335%2010.85C2.45248%2012.7802%201.99571%2014.8777%201.99571%2017C1.99571%2019.1223%202.45248%2021.2198%203.335%2023.15ZM15.5%2028.91C13.9159%2028.7083%2012.3879%2028.1933%2011.0049%2027.3949C9.62199%2026.5966%208.41182%2025.5309%207.445%2024.26L4.835%2025.76C6.06755%2027.4979%207.65619%2028.9532%209.49513%2030.0292C11.3341%2031.1051%2013.3811%2031.777%2015.5%2032V28.91ZM29.165%2025.76L26.555%2024.26C25.5882%2025.5309%2024.378%2026.5966%2022.9951%2027.3949C21.6121%2028.1933%2020.0841%2028.7083%2018.5%2028.91V31.91C22.775%2031.475%2026.66%2029.24%2029.165%2025.76ZM30.665%2023.15C32.45%2019.25%2032.45%2014.75%2030.665%2010.85L28.07%2012.35C28.6864%2013.8228%2029.0038%2015.4034%2029.0038%2017C29.0038%2018.5966%2028.6864%2020.1772%2028.07%2021.65L30.665%2023.15ZM21.5%2017L17%209.5L12.5%2017L17%2024.5L21.5%2017Z'%20fill='url(%23paint0_linear_8_43)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_8_43'%20x1='17'%20y1='0.5'%20x2='17'%20y2='33.5'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='%23969696'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",vt="data:image/svg+xml,%3csvg%20width='38'%20height='38'%20viewBox='0%200%2038%2038'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M30.8747%2019C30.8747%2018.6358%2030.8589%2018.2875%2030.8272%2017.9233L33.7722%2015.6908C34.4055%2015.2158%2034.5797%2014.3292%2034.1839%2013.6325L31.223%208.51832C31.0332%208.18295%2030.7261%207.92955%2030.3608%207.8068C29.9955%207.68406%2029.5977%207.70063%2029.2439%207.85332L25.8397%209.29416C25.2539%208.88249%2024.6364%208.51832%2023.9872%208.21749L23.528%204.55999C23.433%203.76832%2022.7522%203.16666%2021.9605%203.16666H16.0547C15.2472%203.16666%2014.5664%203.76832%2014.4714%204.55999L14.0122%208.21749C13.363%208.51832%2012.7455%208.88249%2012.1597%209.29416L8.75555%207.85332C8.02721%207.53666%207.17221%207.82166%206.77638%208.51832L3.81555%2013.6483C3.41971%2014.345%203.59388%2015.2158%204.22721%2015.7067L7.17221%2017.9392C7.10619%2018.6501%207.10619%2019.3657%207.17221%2020.0767L4.22721%2022.3092C3.59388%2022.7842%203.41971%2023.6708%203.81555%2024.3675L6.77638%2029.4817C7.17221%2030.1783%208.02721%2030.4633%208.75555%2030.1467L12.1597%2028.7058C12.7455%2029.1175%2013.363%2029.4817%2014.0122%2029.7825L14.4714%2033.44C14.5664%2034.2317%2015.2472%2034.8333%2016.0389%2034.8333H21.9447C22.7364%2034.8333%2023.4172%2034.2317%2023.5122%2033.44L23.9714%2029.7825C24.6205%2029.4817%2025.238%2029.1175%2025.8239%2028.7058L29.228%2030.1467C29.9564%2030.4633%2030.8114%2030.1783%2031.2072%2029.4817L34.168%2024.3675C34.5639%2023.6708%2034.3897%2022.8%2033.7564%2022.3092L30.8114%2020.0767C30.8589%2019.7125%2030.8747%2019.3642%2030.8747%2019ZM19.063%2024.5417C16.0072%2024.5417%2013.5214%2022.0558%2013.5214%2019C13.5214%2015.9442%2016.0072%2013.4583%2019.063%2013.4583C22.1189%2013.4583%2024.6047%2015.9442%2024.6047%2019C24.6047%2022.0558%2022.1189%2024.5417%2019.063%2024.5417Z'%20fill='url(%23paint0_linear_96_568)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_96_568'%20x1='18.9997'%20y1='3.16666'%20x2='18.9997'%20y2='34.8333'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='%23969696'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",ft="/redgold-demo/assets/logo-icon-BO6-mR5q.png",yt={data(){return{LogoIcon:ft,profileItems:[{label:"Mia Taylor",icon:"pi pi-user",command:()=>{console.log("tesst")}},{label:"Sign Out",icon:"pi pi-sign-out",command:()=>{this.$router.push("/")}}],items:[{items:[{icon:ht,label:"Live"},{icon:_,label:"Profile",command:()=>{this.handleModalToggle(!0)}},{icon:vt,label:"Settings",command:()=>{this.$refs.boardSettingsRef.handleModalToggle(!0)}}]}],isModalOpen:!1}},methods:{redirectToMobile(){this.$router.push("/")},handleModalToggle(e){this.isModalOpen=e}}},At=["src"],wt={class:"text-primary font-bold"},Lt={class:"item-icon"},It=["src"],Mt={class:"label"},Tt={class:"flex items-center gap-4 p-4 pt-0"};function Nt(e,n,t,u,a,o){const r=mt,i=B,s=Z,p=k,y=R;return d(),g(w,null,[c(i,{model:a.items,class:"side-bar"},{start:b(()=>[l("div",{onClick:n[0]||(n[0]=(...v)=>o.redirectToMobile&&o.redirectToMobile(...v)),class:"cursor-pointer"},[l("img",{src:a.LogoIcon,alt:""},null,8,At)])]),submenulabel:b(({item:v})=>[l("span",wt,h(v.label),1)]),item:b(({item:v,props:P})=>[Y((d(),g("a",m({class:"menu-item active"},P.action),[l("div",Lt,[l("img",{src:v.icon,alt:""},null,8,It)]),l("span",Mt,h(e.$t(v.label)),1)],16)),[[y]])]),end:b(()=>[l("div",null,[c(r,{ref:"boardSettingsRef"},null,512)])]),_:1},8,["model"]),c(p,{visible:a.isModalOpen,"onUpdate:visible":n[1]||(n[1]=v=>a.isModalOpen=v),modal:"",breakpoints:{"800px":"90vw","500px":"90vw"}},{container:b(({closeCallback:v})=>[c(i,{model:a.profileItems,class:"lang-menu"},null,8,["model"]),l("div",Tt,[c(s,{severity:"danger",label:"Ok",onClick:v,class:"w-full"},null,8,["onClick"])])]),_:1},8,["visible"])],64)}const Ot=f(yt,[["render",Nt]]),St={},Rt={class:"demo-wrapper"};function Vt(e,n,t,u,a,o){const r=Ot,i=lt;return d(),g("div",Rt,[c(r),c(i)])}const Zt=f(St,[["render",Vt]]);export{Zt as default};
