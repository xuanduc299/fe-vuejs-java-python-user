import{y as oe,q as T,P as Ie,x as j,a7 as $e,j as Q,N as ye,A as pt,g as mt,e as ht,t as gt,s as at,am as nt,h as $t,C as Ce,B as yt,z as xt,K as _t,a3 as St,J as Ct,f as Tt,H as wt}from"./entry.98dfd619.js";import{e as Xe,a as xe,m as L,i as ot,l as De}from"./index.42b56407.js";import{s as H,B as ke,d as ie,a as U,c as W,D as p,A as Pe,J as Re,w as se,p as Pt,i as Rt}from"./swiper-vue.a421f1cd.js";import{K as q}from"./KeyCode.6e31e5e1.js";import{u as It,E as Et,M as Bt,_ as Lt,D as At,i as Fe}from"./index.6d00dcf5.js";import{R as je}from"./index.f15daada.js";import{u as Ot}from"./useRefs.ffce2853.js";import{c as it,t as Dt,e as Mt,b as kt,h as Nt,f as Ht}from"./hasIn.fd17fd00.js";import{m as Wt,c as zt}from"./zoom.cba4073c.js";import{i as Kt}from"./isMobile.358fd6c2.js";import{u as Ve}from"./useMergedState.8fbbbf27.js";import{o as Gt}from"./collapseMotion.f1f8d61b.js";function Xt(e,t,a,i){if(!Xe(e))return e;t=it(t,e);for(var o=-1,l=t.length,n=l-1,d=e;d!=null&&++o<l;){var u=Dt(t[o]),v=a;if(u==="__proto__"||u==="constructor"||u==="prototype")return e;if(o!=n){var f=d[u];v=i?i(f,u,d):void 0,v===void 0&&(v=Xe(f)?f:Wt(t[o+1])?[]:{})}Mt(d,u,v),d=d[u]}return e}function Ft(e,t,a){for(var i=-1,o=t.length,l={};++i<o;){var n=t[i],d=kt(e,n);a(d,n)&&Xt(l,it(n,e),d)}return l}function jt(e,t){return Ft(e,t,function(a,i){return Nt(e,i)})}var Vt=Ht(function(e,t){return e==null?{}:jt(e,t)});const lt=Vt;function Yt(e){const t=H(),a=H(!1);function i(){for(var o=arguments.length,l=new Array(o),n=0;n<o;n++)l[n]=arguments[n];a.value||(xe.cancel(t.value),t.value=xe(()=>{e(...l)}))}return ke(()=>{a.value=!0,xe.cancel(t.value)}),i}function qt(e){const t=H([]),a=H(typeof e=="function"?e():e),i=Yt(()=>{let l=a.value;t.value.forEach(n=>{l=n(l)}),t.value=[],a.value=l});function o(l){t.value.push(l),i()}return[a,o]}const Ut=ie({compatConfig:{MODE:3},name:"TabNode",props:{id:{type:String},prefixCls:{type:String},tab:{type:Object},active:{type:Boolean},closable:{type:Boolean},editable:{type:Object},onClick:{type:Function},onResize:{type:Function},renderWrapper:{type:Function},removeAriaLabel:{type:String},onFocus:{type:Function}},emits:["click","resize","remove","focus"],setup(e,t){let{expose:a,attrs:i}=t;const o=U();function l(u){var v;!((v=e.tab)===null||v===void 0)&&v.disabled||e.onClick(u)}a({domRef:o});function n(u){var v;u.preventDefault(),u.stopPropagation(),e.editable.onEdit("remove",{key:(v=e.tab)===null||v===void 0?void 0:v.key,event:u})}const d=W(()=>{var u;return e.editable&&e.closable!==!1&&!(!((u=e.tab)===null||u===void 0)&&u.disabled)});return()=>{var u;const{prefixCls:v,id:f,active:_,tab:{key:m,tab:s,disabled:y,closeIcon:x},renderWrapper:w,removeAriaLabel:S,editable:O,onFocus:K}=e,D=`${v}-tab`,r=p("div",{key:m,ref:o,class:oe(D,{[`${D}-with-remove`]:d.value,[`${D}-active`]:_,[`${D}-disabled`]:y}),style:i.style,onClick:l},[p("div",{role:"tab","aria-selected":_,id:f&&`${f}-tab-${m}`,class:`${D}-btn`,"aria-controls":f&&`${f}-panel-${m}`,"aria-disabled":y,tabindex:y?null:0,onClick:g=>{g.stopPropagation(),l(g)},onKeydown:g=>{[q.SPACE,q.ENTER].includes(g.which)&&(g.preventDefault(),l(g))},onFocus:K},[typeof s=="function"?s():s]),d.value&&p("button",{type:"button","aria-label":S||"remove",tabindex:0,class:`${D}-remove`,onClick:g=>{g.stopPropagation(),n(g)}},[(x==null?void 0:x())||((u=O.removeIcon)===null||u===void 0?void 0:u.call(O))||"×"])]);return w?w(r):r}}}),Ye={width:0,height:0,left:0,top:0};function Jt(e,t){const a=U(new Map);return Pe(()=>{var i,o;const l=new Map,n=e.value,d=t.value.get((i=n[0])===null||i===void 0?void 0:i.key)||Ye,u=d.left+d.width;for(let v=0;v<n.length;v+=1){const{key:f}=n[v];let _=t.value.get(f);_||(_=t.value.get((o=n[v-1])===null||o===void 0?void 0:o.key)||Ye);const m=l.get(f)||T({},_);m.right=u-m.left-m.width,l.set(f,m)}a.value=new Map(l)}),a}const rt=ie({compatConfig:{MODE:3},name:"AddButton",inheritAttrs:!1,props:{prefixCls:String,editable:{type:Object},locale:{type:Object,default:void 0}},setup(e,t){let{expose:a,attrs:i}=t;const o=U();return a({domRef:o}),()=>{const{prefixCls:l,editable:n,locale:d}=e;return!n||n.showAdd===!1?null:p("button",{ref:o,type:"button",class:`${l}-nav-add`,style:i.style,"aria-label":(d==null?void 0:d.addAriaLabel)||"Add tab",onClick:u=>{n.onEdit("add",{event:u})}},[n.addIcon?n.addIcon():"+"])}}}),Zt={prefixCls:{type:String},id:{type:String},tabs:{type:Object},rtl:{type:Boolean},tabBarGutter:{type:Number},activeKey:{type:[String,Number]},mobile:{type:Boolean},moreIcon:Ie.any,moreTransitionName:{type:String},editable:{type:Object},locale:{type:Object,default:void 0},removeAriaLabel:String,onTabClick:{type:Function},popupClassName:String,getPopupContainer:j()},Qt=ie({compatConfig:{MODE:3},name:"OperationNode",inheritAttrs:!1,props:Zt,emits:["tabClick"],slots:Object,setup(e,t){let{attrs:a,slots:i}=t;const[o,l]=L(!1),[n,d]=L(null),u=s=>{const y=e.tabs.filter(S=>!S.disabled);let x=y.findIndex(S=>S.key===n.value)||0;const w=y.length;for(let S=0;S<w;S+=1){x=(x+s+w)%w;const O=y[x];if(!O.disabled){d(O.key);return}}},v=s=>{const{which:y}=s;if(!o.value){[q.DOWN,q.SPACE,q.ENTER].includes(y)&&(l(!0),s.preventDefault());return}switch(y){case q.UP:u(-1),s.preventDefault();break;case q.DOWN:u(1),s.preventDefault();break;case q.ESC:l(!1);break;case q.SPACE:case q.ENTER:n.value!==null&&e.onTabClick(n.value,s);break}},f=W(()=>`${e.id}-more-popup`),_=W(()=>n.value!==null?`${f.value}-${n.value}`:null),m=(s,y)=>{s.preventDefault(),s.stopPropagation(),e.editable.onEdit("remove",{key:y,event:s})};return Re(()=>{se(n,()=>{const s=document.getElementById(_.value);s&&s.scrollIntoView&&s.scrollIntoView(!1)},{flush:"post",immediate:!0})}),se(o,()=>{o.value||d(null)}),It({}),()=>{var s;const{prefixCls:y,id:x,tabs:w,locale:S,mobile:O,moreIcon:K=((s=i.moreIcon)===null||s===void 0?void 0:s.call(i))||p(Et,null,null),moreTransitionName:D,editable:r,tabBarGutter:g,rtl:c,onTabClick:$,popupClassName:E}=e;if(!w.length)return null;const P=`${y}-dropdown`,G=S==null?void 0:S.dropdownAriaLabel,le={[c?"marginRight":"marginLeft"]:g};w.length||(le.visibility="hidden",le.order=1);const ce=oe({[`${P}-rtl`]:c,[`${E}`]:!0}),fe=O?null:p(At,{prefixCls:P,trigger:["hover"],visible:o.value,transitionName:D,onVisibleChange:l,overlayClassName:ce,mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:e.getPopupContainer},{overlay:()=>p(Bt,{onClick:R=>{let{key:J,domEvent:M}=R;$(J,M),l(!1)},id:f.value,tabindex:-1,role:"listbox","aria-activedescendant":_.value,selectedKeys:[n.value],"aria-label":G!==void 0?G:"expanded dropdown"},{default:()=>[w.map(R=>{var J,M;const V=r&&R.closable!==!1&&!R.disabled;return p(Lt,{key:R.key,id:`${f.value}-${R.key}`,role:"option","aria-controls":x&&`${x}-panel-${R.key}`,disabled:R.disabled},{default:()=>[p("span",null,[typeof R.tab=="function"?R.tab():R.tab]),V&&p("button",{type:"button","aria-label":e.removeAriaLabel||"remove",tabindex:0,class:`${P}-menu-item-remove`,onClick:Y=>{Y.stopPropagation(),m(Y,R.key)}},[((J=R.closeIcon)===null||J===void 0?void 0:J.call(R))||((M=r.removeIcon)===null||M===void 0?void 0:M.call(r))||"×"])]})})]}),default:()=>p("button",{type:"button",class:`${y}-nav-more`,style:le,tabindex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":f.value,id:`${x}-more`,"aria-expanded":o.value,onKeydown:v},[K])});return p("div",{class:oe(`${y}-nav-operations`,a.class),style:a.style},[fe,p(rt,{prefixCls:y,locale:S,editable:r},null)])}}}),st=Symbol("tabsContextKey"),ea=e=>{Pt(st,e)},ct=()=>Rt(st,{tabs:U([]),prefixCls:U()}),ta=.1,qe=.01,Te=20,Ue=Math.pow(.995,Te);function aa(e,t){const[a,i]=L(),[o,l]=L(0),[n,d]=L(0),[u,v]=L(),f=U();function _(r){const{screenX:g,screenY:c}=r.touches[0];i({x:g,y:c}),clearInterval(f.value)}function m(r){if(!a.value)return;r.preventDefault();const{screenX:g,screenY:c}=r.touches[0],$=g-a.value.x,E=c-a.value.y;t($,E),i({x:g,y:c});const P=Date.now();d(P-o.value),l(P),v({x:$,y:E})}function s(){if(!a.value)return;const r=u.value;if(i(null),v(null),r){const g=r.x/n.value,c=r.y/n.value,$=Math.abs(g),E=Math.abs(c);if(Math.max($,E)<ta)return;let P=g,G=c;f.value=setInterval(()=>{if(Math.abs(P)<qe&&Math.abs(G)<qe){clearInterval(f.value);return}P*=Ue,G*=Ue,t(P*Te,G*Te)},Te)}}const y=U();function x(r){const{deltaX:g,deltaY:c}=r;let $=0;const E=Math.abs(g),P=Math.abs(c);E===P?$=y.value==="x"?g:c:E>P?($=g,y.value="x"):($=c,y.value="y"),t(-$,-$)&&r.preventDefault()}const w=U({onTouchStart:_,onTouchMove:m,onTouchEnd:s,onWheel:x});function S(r){w.value.onTouchStart(r)}function O(r){w.value.onTouchMove(r)}function K(r){w.value.onTouchEnd(r)}function D(r){w.value.onWheel(r)}Re(()=>{var r,g;document.addEventListener("touchmove",O,{passive:!1}),document.addEventListener("touchend",K,{passive:!1}),(r=e.value)===null||r===void 0||r.addEventListener("touchstart",S,{passive:!1}),(g=e.value)===null||g===void 0||g.addEventListener("wheel",D,{passive:!1})}),ke(()=>{document.removeEventListener("touchmove",O),document.removeEventListener("touchend",K)})}function Je(e,t){const a=U(e);function i(o){const l=typeof o=="function"?o(a.value):o;l!==a.value&&t(l,a.value),a.value=l}return[a,i]}const Ze={width:0,height:0,left:0,top:0,right:0},na=()=>({id:{type:String},tabPosition:{type:String},activeKey:{type:[String,Number]},rtl:{type:Boolean},animated:ye(),editable:ye(),moreIcon:Ie.any,moreTransitionName:{type:String},mobile:{type:Boolean},tabBarGutter:{type:Number},renderTabBar:{type:Function},locale:ye(),popupClassName:String,getPopupContainer:j(),onTabClick:{type:Function},onTabScroll:{type:Function}}),Qe=ie({compatConfig:{MODE:3},name:"TabNavList",inheritAttrs:!1,props:na(),slots:Object,emits:["tabClick","tabScroll"],setup(e,t){let{attrs:a,slots:i}=t;const{tabs:o,prefixCls:l}=ct(),n=H(),d=H(),u=H(),v=H(),[f,_]=Ot(),m=W(()=>e.tabPosition==="top"||e.tabPosition==="bottom"),[s,y]=Je(0,(h,b)=>{m.value&&e.onTabScroll&&e.onTabScroll({direction:h>b?"left":"right"})}),[x,w]=Je(0,(h,b)=>{!m.value&&e.onTabScroll&&e.onTabScroll({direction:h>b?"top":"bottom"})}),[S,O]=L(0),[K,D]=L(0),[r,g]=L(null),[c,$]=L(null),[E,P]=L(0),[G,le]=L(0),[ce,fe]=qt(new Map),R=Jt(o,ce),J=W(()=>`${l.value}-nav-operations-hidden`),M=H(0),V=H(0);Pe(()=>{m.value?e.rtl?(M.value=0,V.value=Math.max(0,S.value-r.value)):(M.value=Math.min(0,r.value-S.value),V.value=0):(M.value=Math.min(0,c.value-K.value),V.value=0)});const Y=h=>h<M.value?M.value:h>V.value?V.value:h,be=H(),[z,pe]=L(),me=()=>{pe(Date.now())},he=()=>{clearTimeout(be.value)},_e=(h,b)=>{h(C=>Y(C+b))};aa(n,(h,b)=>{if(m.value){if(r.value>=S.value)return!1;_e(y,h)}else{if(c.value>=K.value)return!1;_e(w,b)}return he(),me(),!0}),se(z,()=>{he(),z.value&&(be.value=setTimeout(()=>{pe(0)},100))});const de=function(){let h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activeKey;const b=R.value.get(h)||{width:0,height:0,left:0,right:0,top:0};if(m.value){let C=s.value;e.rtl?b.right<s.value?C=b.right:b.right+b.width>s.value+r.value&&(C=b.right+b.width-r.value):b.left<-s.value?C=-b.left:b.left+b.width>-s.value+r.value&&(C=-(b.left+b.width-r.value)),w(0),y(Y(C))}else{let C=x.value;b.top<-x.value?C=-b.top:b.top+b.height>-x.value+c.value&&(C=-(b.top+b.height-c.value)),y(0),w(Y(C))}},Ee=H(0),Be=H(0);Pe(()=>{let h,b,C,I,k,N;const re=R.value;["top","bottom"].includes(e.tabPosition)?(h="width",I=r.value,k=S.value,N=E.value,b=e.rtl?"right":"left",C=Math.abs(s.value)):(h="height",I=c.value,k=S.value,N=G.value,b="top",C=-x.value);let X=I;k+N>I&&k<I&&(X=I-N);const Z=o.value;if(!Z.length)return[Ee.value,Be.value]=[0,0];const te=Z.length;let ue=te;for(let A=0;A<te;A+=1){const F=re.get(Z[A].key)||Ze;if(F[b]+F[h]>C+X){ue=A-1;break}}let B=0;for(let A=te-1;A>=0;A-=1)if((re.get(Z[A].key)||Ze)[b]<C){B=A+1;break}return[Ee.value,Be.value]=[B,ue]});const Le=()=>{var h,b,C,I,k;const N=((h=n.value)===null||h===void 0?void 0:h.offsetWidth)||0,re=((b=n.value)===null||b===void 0?void 0:b.offsetHeight)||0,X=((C=v.value)===null||C===void 0?void 0:C.$el)||{},Z=X.offsetWidth||0,te=X.offsetHeight||0;g(N),$(re),P(Z),le(te);const ue=(((I=d.value)===null||I===void 0?void 0:I.offsetWidth)||0)-Z,B=(((k=d.value)===null||k===void 0?void 0:k.offsetHeight)||0)-te;O(ue),D(B),fe(()=>{const A=new Map;return o.value.forEach(F=>{let{key:ve}=F;const ae=_.value.get(ve),ne=(ae==null?void 0:ae.$el)||ae;ne&&A.set(ve,{width:ne.offsetWidth,height:ne.offsetHeight,left:ne.offsetLeft,top:ne.offsetTop})}),A})},He=W(()=>[...o.value.slice(0,Ee.value),...o.value.slice(Be.value+1)]),[ut,vt]=L(),ee=W(()=>R.value.get(e.activeKey)),We=H(),ze=()=>{xe.cancel(We.value)};se([ee,m,()=>e.rtl],()=>{const h={};ee.value&&(m.value?(e.rtl?h.right=$e(ee.value.right):h.left=$e(ee.value.left),h.width=$e(ee.value.width)):(h.top=$e(ee.value.top),h.height=$e(ee.value.height))),ze(),We.value=xe(()=>{vt(h)})}),se([()=>e.activeKey,ee,R,m],()=>{de()},{flush:"post"}),se([()=>e.rtl,()=>e.tabBarGutter,()=>e.activeKey,()=>o.value],()=>{Le()},{flush:"post"});const Ae=h=>{let{position:b,prefixCls:C,extra:I}=h;if(!I)return null;const k=I==null?void 0:I({position:b});return k?p("div",{class:`${C}-extra-content`},[k]):null};return ke(()=>{he(),ze()}),()=>{const{id:h,animated:b,activeKey:C,rtl:I,editable:k,locale:N,tabPosition:re,tabBarGutter:X,onTabClick:Z}=e,{class:te,style:ue}=a,B=l.value,A=!!He.value.length,F=`${B}-nav-wrap`;let ve,ae,ne,Ke;m.value?I?(ae=s.value>0,ve=s.value+r.value<S.value):(ve=s.value<0,ae=-s.value+r.value<S.value):(ne=x.value<0,Ke=-x.value+c.value<K.value);const Se={};re==="top"||re==="bottom"?Se[I?"marginRight":"marginLeft"]=typeof X=="number"?`${X}px`:X:Se.marginTop=typeof X=="number"?`${X}px`:X;const Ge=o.value.map((Oe,ft)=>{const{key:ge}=Oe;return p(Ut,{id:h,prefixCls:B,key:ge,tab:Oe,style:ft===0?void 0:Se,closable:Oe.closable,editable:k,active:ge===C,removeAriaLabel:N==null?void 0:N.removeAriaLabel,ref:f(ge),onClick:bt=>{Z(ge,bt)},onFocus:()=>{de(ge),me(),n.value&&(I||(n.value.scrollLeft=0),n.value.scrollTop=0)}},i)});return p("div",{role:"tablist",class:oe(`${B}-nav`,te),style:ue,onKeydown:()=>{me()}},[p(Ae,{position:"left",prefixCls:B,extra:i.leftExtra},null),p(je,{onResize:Le},{default:()=>[p("div",{class:oe(F,{[`${F}-ping-left`]:ve,[`${F}-ping-right`]:ae,[`${F}-ping-top`]:ne,[`${F}-ping-bottom`]:Ke}),ref:n},[p(je,{onResize:Le},{default:()=>[p("div",{ref:d,class:`${B}-nav-list`,style:{transform:`translate(${s.value}px, ${x.value}px)`,transition:z.value?"none":void 0}},[Ge,p(rt,{ref:v,prefixCls:B,locale:N,editable:k,style:T(T({},Ge.length===0?void 0:Se),{visibility:A?"hidden":null})},null),p("div",{class:oe(`${B}-ink-bar`,{[`${B}-ink-bar-animated`]:b.inkBar}),style:ut.value},null)])]})])]}),p(Qt,Q(Q({},e),{},{removeAriaLabel:N==null?void 0:N.removeAriaLabel,ref:u,prefixCls:B,tabs:He.value,class:!A&&J.value}),lt(i,["moreIcon"])),p(Ae,{position:"right",prefixCls:B,extra:i.rightExtra},null),p(Ae,{position:"right",prefixCls:B,extra:i.tabBarExtraContent},null)])}}}),oa=ie({compatConfig:{MODE:3},name:"TabPanelList",inheritAttrs:!1,props:{activeKey:{type:[String,Number]},id:{type:String},rtl:{type:Boolean},animated:{type:Object,default:void 0},tabPosition:{type:String},destroyInactiveTabPane:{type:Boolean}},setup(e){const{tabs:t,prefixCls:a}=ct();return()=>{const{id:i,activeKey:o,animated:l,tabPosition:n,rtl:d,destroyInactiveTabPane:u}=e,v=l.tabPane,f=a.value,_=t.value.findIndex(m=>m.key===o);return p("div",{class:`${f}-content-holder`},[p("div",{class:[`${f}-content`,`${f}-content-${n}`,{[`${f}-content-animated`]:v}],style:_&&v?{[d?"marginRight":"marginLeft"]:`-${_}00%`}:null},[t.value.map(m=>zt(m.node,{key:m.key,prefixCls:f,tabKey:m.key,id:i,animated:v,active:m.key===o,destroyInactiveTabPane:u}))])])}}});var ia={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};const la=ia;function et(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?Object(arguments[t]):{},i=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(a).filter(function(o){return Object.getOwnPropertyDescriptor(a,o).enumerable}))),i.forEach(function(o){ra(e,o,a[o])})}return e}function ra(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var Ne=function(t,a){var i=et({},t,a.attrs);return p(pt,et({},i,{icon:la}),null)};Ne.displayName="PlusOutlined";Ne.inheritAttrs=!1;const sa=Ne,ca=e=>{const{componentCls:t,motionDurationSlow:a}=e;return[{[t]:{[`${t}-switch`]:{"&-appear, &-enter":{transition:"none","&-start":{opacity:0},"&-active":{opacity:1,transition:`opacity ${a}`}},"&-leave":{position:"absolute",transition:"none",inset:0,"&-start":{opacity:1},"&-active":{opacity:0,transition:`opacity ${a}`}}}}},[Fe(e,"slide-up"),Fe(e,"slide-down")]]},da=ca,ua=e=>{const{componentCls:t,tabsCardHorizontalPadding:a,tabsCardHeadBackground:i,tabsCardGutter:o,colorSplit:l}=e;return{[`${t}-card`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{margin:0,padding:a,background:i,border:`${e.lineWidth}px ${e.lineType} ${l}`,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`},[`${t}-tab-active`]:{color:e.colorPrimary,background:e.colorBgContainer},[`${t}-ink-bar`]:{visibility:"hidden"}},[`&${t}-top, &${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginLeft:{_skip_check_:!0,value:`${o}px`}}}},[`&${t}-top`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`},[`${t}-tab-active`]:{borderBottomColor:e.colorBgContainer}}},[`&${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`},[`${t}-tab-active`]:{borderTopColor:e.colorBgContainer}}},[`&${t}-left, &${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginTop:`${o}px`}}},[`&${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${e.borderRadiusLG}px 0 0 ${e.borderRadiusLG}px`}},[`${t}-tab-active`]:{borderRightColor:{_skip_check_:!0,value:e.colorBgContainer}}}},[`&${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px 0`}},[`${t}-tab-active`]:{borderLeftColor:{_skip_check_:!0,value:e.colorBgContainer}}}}}}},va=e=>{const{componentCls:t,tabsHoverColor:a,dropdownEdgeChildVerticalPadding:i}=e;return{[`${t}-dropdown`]:T(T({},at(e)),{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:e.zIndexPopup,display:"block","&-hidden":{display:"none"},[`${t}-dropdown-menu`]:{maxHeight:e.tabsDropdownHeight,margin:0,padding:`${i}px 0`,overflowX:"hidden",overflowY:"auto",textAlign:{_skip_check_:!0,value:"left"},listStyleType:"none",backgroundColor:e.colorBgContainer,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary,"&-item":T(T({},gt),{display:"flex",alignItems:"center",minWidth:e.tabsDropdownWidth,margin:0,padding:`${e.paddingXXS}px ${e.paddingSM}px`,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"> span":{flex:1,whiteSpace:"nowrap"},"&-remove":{flex:"none",marginLeft:{_skip_check_:!0,value:e.marginSM},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:0,cursor:"pointer","&:hover":{color:a}},"&:hover":{background:e.controlItemBgHover},"&-disabled":{"&, &:hover":{color:e.colorTextDisabled,background:"transparent",cursor:"not-allowed"}}})}})}},fa=e=>{const{componentCls:t,margin:a,colorSplit:i}=e;return{[`${t}-top, ${t}-bottom`]:{flexDirection:"column",[`> ${t}-nav, > div > ${t}-nav`]:{margin:`0 0 ${a}px 0`,"&::before":{position:"absolute",right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},borderBottom:`${e.lineWidth}px ${e.lineType} ${i}`,content:"''"},[`${t}-ink-bar`]:{height:e.lineWidthBold,"&-animated":{transition:`width ${e.motionDurationSlow}, left ${e.motionDurationSlow},
            right ${e.motionDurationSlow}`}},[`${t}-nav-wrap`]:{"&::before, &::after":{top:0,bottom:0,width:e.controlHeight},"&::before":{left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowLeft},"&::after":{right:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowRight},[`&${t}-nav-wrap-ping-left::before`]:{opacity:1},[`&${t}-nav-wrap-ping-right::after`]:{opacity:1}}}},[`${t}-top`]:{[`> ${t}-nav,
        > div > ${t}-nav`]:{"&::before":{bottom:0},[`${t}-ink-bar`]:{bottom:0}}},[`${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,marginTop:`${a}px`,marginBottom:0,"&::before":{top:0},[`${t}-ink-bar`]:{top:0}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0}},[`${t}-left, ${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{flexDirection:"column",minWidth:e.controlHeight*1.25,[`${t}-tab`]:{padding:`${e.paddingXS}px ${e.paddingLG}px`,textAlign:"center"},[`${t}-tab + ${t}-tab`]:{margin:`${e.margin}px 0 0 0`},[`${t}-nav-wrap`]:{flexDirection:"column","&::before, &::after":{right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},height:e.controlHeight},"&::before":{top:0,boxShadow:e.boxShadowTabsOverflowTop},"&::after":{bottom:0,boxShadow:e.boxShadowTabsOverflowBottom},[`&${t}-nav-wrap-ping-top::before`]:{opacity:1},[`&${t}-nav-wrap-ping-bottom::after`]:{opacity:1}},[`${t}-ink-bar`]:{width:e.lineWidthBold,"&-animated":{transition:`height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`}},[`${t}-nav-list, ${t}-nav-operations`]:{flex:"1 0 auto",flexDirection:"column"}}},[`${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-ink-bar`]:{right:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{marginLeft:{_skip_check_:!0,value:`-${e.lineWidth}px`},borderLeft:{_skip_check_:!0,value:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingLeft:{_skip_check_:!0,value:e.paddingLG}}}},[`${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,[`${t}-ink-bar`]:{left:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0,marginRight:{_skip_check_:!0,value:-e.lineWidth},borderRight:{_skip_check_:!0,value:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingRight:{_skip_check_:!0,value:e.paddingLG}}}}}},ba=e=>{const{componentCls:t,padding:a}=e;return{[t]:{"&-small":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:`${e.paddingXS}px 0`,fontSize:e.fontSize}}},"&-large":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:`${a}px 0`,fontSize:e.fontSizeLG}}}},[`${t}-card`]:{[`&${t}-small`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:`${e.paddingXXS*1.5}px ${a}px`}},[`&${t}-bottom`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`0 0 ${e.borderRadius}px ${e.borderRadius}px`}},[`&${t}-top`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`${e.borderRadius}px ${e.borderRadius}px 0 0`}},[`&${t}-right`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${e.borderRadius}px ${e.borderRadius}px 0`}}},[`&${t}-left`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${e.borderRadius}px 0 0 ${e.borderRadius}px`}}}},[`&${t}-large`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:`${e.paddingXS}px ${a}px ${e.paddingXXS*1.5}px`}}}}}},pa=e=>{const{componentCls:t,tabsActiveColor:a,tabsHoverColor:i,iconCls:o,tabsHorizontalGutter:l}=e,n=`${t}-tab`;return{[n]:{position:"relative",display:"inline-flex",alignItems:"center",padding:`${e.paddingSM}px 0`,fontSize:`${e.fontSize}px`,background:"transparent",border:0,outline:"none",cursor:"pointer","&-btn, &-remove":T({"&:focus:not(:focus-visible), &:active":{color:a}},nt(e)),"&-btn":{outline:"none",transition:"all 0.3s"},"&-remove":{flex:"none",marginRight:{_skip_check_:!0,value:-e.marginXXS},marginLeft:{_skip_check_:!0,value:e.marginXS},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:"none",outline:"none",cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"&:hover":{color:e.colorTextHeading}},"&:hover":{color:i},[`&${n}-active ${n}-btn`]:{color:e.colorPrimary,textShadow:e.tabsActiveTextShadow},[`&${n}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed"},[`&${n}-disabled ${n}-btn, &${n}-disabled ${t}-remove`]:{"&:focus, &:active":{color:e.colorTextDisabled}},[`& ${n}-remove ${o}`]:{margin:0},[o]:{marginRight:{_skip_check_:!0,value:e.marginSM}}},[`${n} + ${n}`]:{margin:{_skip_check_:!0,value:`0 0 0 ${l}px`}}}},ma=e=>{const{componentCls:t,tabsHorizontalGutter:a,iconCls:i,tabsCardGutter:o}=e;return{[`${t}-rtl`]:{direction:"rtl",[`${t}-nav`]:{[`${t}-tab`]:{margin:{_skip_check_:!0,value:`0 0 0 ${a}px`},[`${t}-tab:last-of-type`]:{marginLeft:{_skip_check_:!0,value:0}},[i]:{marginRight:{_skip_check_:!0,value:0},marginLeft:{_skip_check_:!0,value:`${e.marginSM}px`}},[`${t}-tab-remove`]:{marginRight:{_skip_check_:!0,value:`${e.marginXS}px`},marginLeft:{_skip_check_:!0,value:`-${e.marginXXS}px`},[i]:{margin:0}}}},[`&${t}-left`]:{[`> ${t}-nav`]:{order:1},[`> ${t}-content-holder`]:{order:0}},[`&${t}-right`]:{[`> ${t}-nav`]:{order:0},[`> ${t}-content-holder`]:{order:1}},[`&${t}-card${t}-top, &${t}-card${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginRight:{_skip_check_:!0,value:`${o}px`},marginLeft:{_skip_check_:!0,value:0}}}}},[`${t}-dropdown-rtl`]:{direction:"rtl"},[`${t}-menu-item`]:{[`${t}-dropdown-rtl`]:{textAlign:{_skip_check_:!0,value:"right"}}}}},ha=e=>{const{componentCls:t,tabsCardHorizontalPadding:a,tabsCardHeight:i,tabsCardGutter:o,tabsHoverColor:l,tabsActiveColor:n,colorSplit:d}=e;return{[t]:T(T(T(T({},at(e)),{display:"flex",[`> ${t}-nav, > div > ${t}-nav`]:{position:"relative",display:"flex",flex:"none",alignItems:"center",[`${t}-nav-wrap`]:{position:"relative",display:"flex",flex:"auto",alignSelf:"stretch",overflow:"hidden",whiteSpace:"nowrap",transform:"translate(0)","&::before, &::after":{position:"absolute",zIndex:1,opacity:0,transition:`opacity ${e.motionDurationSlow}`,content:"''",pointerEvents:"none"}},[`${t}-nav-list`]:{position:"relative",display:"flex",transition:`opacity ${e.motionDurationSlow}`},[`${t}-nav-operations`]:{display:"flex",alignSelf:"stretch"},[`${t}-nav-operations-hidden`]:{position:"absolute",visibility:"hidden",pointerEvents:"none"},[`${t}-nav-more`]:{position:"relative",padding:a,background:"transparent",border:0,"&::after":{position:"absolute",right:{_skip_check_:!0,value:0},bottom:0,left:{_skip_check_:!0,value:0},height:e.controlHeightLG/8,transform:"translateY(100%)",content:"''"}},[`${t}-nav-add`]:T({minWidth:`${i}px`,marginLeft:{_skip_check_:!0,value:`${o}px`},padding:`0 ${e.paddingXS}px`,background:"transparent",border:`${e.lineWidth}px ${e.lineType} ${d}`,borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,outline:"none",cursor:"pointer",color:e.colorText,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`,"&:hover":{color:l},"&:active, &:focus:not(:focus-visible)":{color:n}},nt(e))},[`${t}-extra-content`]:{flex:"none"},[`${t}-ink-bar`]:{position:"absolute",background:e.colorPrimary,pointerEvents:"none"}}),pa(e)),{[`${t}-content`]:{position:"relative",display:"flex",width:"100%","&-animated":{transition:"margin 0.3s"}},[`${t}-content-holder`]:{flex:"auto",minWidth:0,minHeight:0},[`${t}-tabpane`]:{outline:"none",flex:"none",width:"100%"}}),[`${t}-centered`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-nav-wrap`]:{[`&:not([class*='${t}-nav-wrap-ping'])`]:{justifyContent:"center"}}}}}},ga=mt("Tabs",e=>{const t=e.controlHeightLG,a=ht(e,{tabsHoverColor:e.colorPrimaryHover,tabsActiveColor:e.colorPrimaryActive,tabsCardHorizontalPadding:`${(t-Math.round(e.fontSize*e.lineHeight))/2-e.lineWidth}px ${e.padding}px`,tabsCardHeight:t,tabsCardGutter:e.marginXXS/2,tabsHorizontalGutter:32,tabsCardHeadBackground:e.colorFillAlter,dropdownEdgeChildVerticalPadding:e.paddingXXS,tabsActiveTextShadow:"0 0 0.25px currentcolor",tabsDropdownHeight:200,tabsDropdownWidth:120});return[ba(a),ma(a),fa(a),va(a),ua(a),ha(a),da(a)]},e=>({zIndexPopup:e.zIndexPopupBase+50}));let tt=0;const dt=()=>({prefixCls:{type:String},id:{type:String},popupClassName:String,getPopupContainer:j(),activeKey:{type:[String,Number]},defaultActiveKey:{type:[String,Number]},direction:Ce(),animated:yt([Boolean,Object]),renderTabBar:j(),tabBarGutter:{type:Number},tabBarStyle:ye(),tabPosition:Ce(),destroyInactiveTabPane:xt(),hideAdd:Boolean,type:Ce(),size:Ce(),centered:Boolean,onEdit:j(),onChange:j(),onTabClick:j(),onTabScroll:j(),"onUpdate:activeKey":j(),locale:ye(),onPrevClick:j(),onNextClick:j(),tabBarExtraContent:Ie.any});function $a(e){return e.map(t=>{if(_t(t)){const a=T({},t.props||{});for(const[m,s]of Object.entries(a))delete a[m],a[St(m)]=s;const i=t.children||{},o=t.key!==void 0?t.key:void 0,{tab:l=i.tab,disabled:n,forceRender:d,closable:u,animated:v,active:f,destroyInactiveTabPane:_}=a;return T(T({key:o},a),{node:t,closeIcon:i.closeIcon,tab:l,disabled:n===""||n,forceRender:d===""||d,closable:u===""||u,animated:v===""||v,active:f===""||f,destroyInactiveTabPane:_===""||_})}return null}).filter(t=>t)}const ya=ie({compatConfig:{MODE:3},name:"InternalTabs",inheritAttrs:!1,props:T(T({},ot(dt(),{tabPosition:"top",animated:{inkBar:!0,tabPane:!1}})),{tabs:Ct()}),slots:Object,setup(e,t){let{attrs:a,slots:i}=t;De(e.onPrevClick===void 0&&e.onNextClick===void 0,"Tabs","`onPrevClick / @prevClick` and `onNextClick / @nextClick` has been removed. Please use `onTabScroll / @tabScroll` instead."),De(e.tabBarExtraContent===void 0,"Tabs","`tabBarExtraContent` prop has been removed. Please use `rightExtra` slot instead."),De(i.tabBarExtraContent===void 0,"Tabs","`tabBarExtraContent` slot is deprecated. Please use `rightExtra` slot instead.");const{prefixCls:o,direction:l,size:n,rootPrefixCls:d,getPopupContainer:u}=Tt("tabs",e),[v,f]=ga(o),_=W(()=>l.value==="rtl"),m=W(()=>{const{animated:c,tabPosition:$}=e;return c===!1||["left","right"].includes($)?{inkBar:!1,tabPane:!1}:c===!0?{inkBar:!0,tabPane:!0}:T({inkBar:!0,tabPane:!1},typeof c=="object"?c:{})}),[s,y]=L(!1);Re(()=>{y(Kt())});const[x,w]=Ve(()=>{var c;return(c=e.tabs[0])===null||c===void 0?void 0:c.key},{value:W(()=>e.activeKey),defaultValue:e.defaultActiveKey}),[S,O]=L(()=>e.tabs.findIndex(c=>c.key===x.value));Pe(()=>{var c;let $=e.tabs.findIndex(E=>E.key===x.value);$===-1&&($=Math.max(0,Math.min(S.value,e.tabs.length-1)),w((c=e.tabs[$])===null||c===void 0?void 0:c.key)),O($)});const[K,D]=Ve(null,{value:W(()=>e.id)}),r=W(()=>s.value&&!["left","right"].includes(e.tabPosition)?"top":e.tabPosition);Re(()=>{e.id||(D(`rc-tabs-${tt}`),tt+=1)});const g=(c,$)=>{var E,P;(E=e.onTabClick)===null||E===void 0||E.call(e,c,$);const G=c!==x.value;w(c),G&&((P=e.onChange)===null||P===void 0||P.call(e,c))};return ea({tabs:W(()=>e.tabs),prefixCls:o}),()=>{const{id:c,type:$,tabBarGutter:E,tabBarStyle:P,locale:G,destroyInactiveTabPane:le,renderTabBar:ce=i.renderTabBar,onTabScroll:fe,hideAdd:R,centered:J}=e,M={id:K.value,activeKey:x.value,animated:m.value,tabPosition:r.value,rtl:_.value,mobile:s.value};let V;$==="editable-card"&&(V={onEdit:(pe,me)=>{let{key:he,event:_e}=me;var de;(de=e.onEdit)===null||de===void 0||de.call(e,pe==="add"?_e:he,pe)},removeIcon:()=>p(wt,null,null),addIcon:i.addIcon?i.addIcon:()=>p(sa,null,null),showAdd:R!==!0});let Y;const be=T(T({},M),{moreTransitionName:`${d.value}-slide-up`,editable:V,locale:G,tabBarGutter:E,onTabClick:g,onTabScroll:fe,style:P,getPopupContainer:u.value,popupClassName:oe(e.popupClassName,f.value)});ce?Y=ce(T(T({},be),{DefaultTabBar:Qe})):Y=p(Qe,be,lt(i,["moreIcon","leftExtra","rightExtra","tabBarExtraContent"]));const z=o.value;return v(p("div",Q(Q({},a),{},{id:c,class:oe(z,`${z}-${r.value}`,{[f.value]:!0,[`${z}-${n.value}`]:n.value,[`${z}-card`]:["card","editable-card"].includes($),[`${z}-editable-card`]:$==="editable-card",[`${z}-centered`]:J,[`${z}-mobile`]:s.value,[`${z}-editable`]:$==="editable-card",[`${z}-rtl`]:_.value},a.class)}),[Y,p(oa,Q(Q({destroyInactiveTabPane:le},M),{},{animated:m.value}),null)]))}}}),we=ie({compatConfig:{MODE:3},name:"ATabs",inheritAttrs:!1,props:ot(dt(),{tabPosition:"top",animated:{inkBar:!0,tabPane:!1}}),slots:Object,setup(e,t){let{attrs:a,slots:i,emit:o}=t;const l=n=>{o("update:activeKey",n),o("change",n)};return()=>{var n;const d=$a($t((n=i.default)===null||n===void 0?void 0:n.call(i)));return p(ya,Q(Q(Q({},Gt(e,["onUpdate:activeKey"])),a),{},{onChange:l,tabs:d}),i)}}}),xa=()=>({tab:Ie.any,disabled:{type:Boolean},forceRender:{type:Boolean},closable:{type:Boolean},animated:{type:Boolean},active:{type:Boolean},destroyInactiveTabPane:{type:Boolean},prefixCls:{type:String},tabKey:{type:[String,Number]},id:{type:String}}),Me=ie({compatConfig:{MODE:3},name:"ATabPane",inheritAttrs:!1,__ANT_TAB_PANE:!0,props:xa(),slots:Object,setup(e,t){let{attrs:a,slots:i}=t;const o=U(e.forceRender);se([()=>e.active,()=>e.destroyInactiveTabPane],()=>{e.active?o.value=!0:e.destroyInactiveTabPane&&(o.value=!1)},{immediate:!0});const l=W(()=>e.active?{}:e.animated?{visibility:"hidden",height:0,overflowY:"hidden"}:{display:"none"});return()=>{var n;const{prefixCls:d,forceRender:u,id:v,active:f,tabKey:_}=e;return p("div",{id:v&&`${v}-panel-${_}`,role:"tabpanel",tabindex:f?0:-1,"aria-labelledby":v&&`${v}-tab-${_}`,"aria-hidden":!f,style:[l.value,a.style],class:[`${d}-tabpane`,f&&`${d}-tabpane-active`,a.class]},[(f||o.value||u)&&((n=i.default)===null||n===void 0?void 0:n.call(i))])}}});we.TabPane=Me;we.install=function(e){return e.component(we.name,we),e.component(Me.name,Me),e};export{we as T,Me as _};
