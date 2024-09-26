import{f as P,ac as O,j as b,P as B,N as E,G as N,g as w,e as X,q as $,am as z,s as H,h as D,v as L}from"./entry.98dfd619.js";import{D as F,a as U}from"./dropdown.3b7ba1b5.js";import{d as I,D as i,al as V}from"./swiper-vue.a421f1cd.js";import{M as q}from"./index.6d00dcf5.js";var G=globalThis&&globalThis.__rest||function(r,t){var a={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&t.indexOf(e)<0&&(a[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(r);o<e.length;o++)t.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(r,e[o])&&(a[e[o]]=r[e[o]]);return a};const K=()=>({prefixCls:String,href:String,separator:B.any,dropdownProps:E(),overlay:B.any,onClick:N()}),T=I({compatConfig:{MODE:3},name:"ABreadcrumbItem",inheritAttrs:!1,__ANT_BREADCRUMB_ITEM:!0,props:K(),slots:Object,setup(r,t){let{slots:a,attrs:e,emit:o}=t;const{prefixCls:s}=P("breadcrumb",r),y=(u,d)=>{const p=O(a,r,"overlay");return p?i(U,b(b({},r.dropdownProps),{},{overlay:p,placement:"bottom"}),{default:()=>[i("span",{class:`${d}-overlay-link`},[u,i(F,null,null)])]}):u},S=u=>{o("click",u)};return()=>{var u;const d=(u=O(a,r,"separator"))!==null&&u!==void 0?u:"/",p=O(a,r),{class:l,style:c}=e,n=G(e,["class","style"]);let m;return r.href!==void 0?m=i("a",b({class:`${s.value}-link`,onClick:S},n),[p]):m=i("span",b({class:`${s.value}-link`,onClick:S},n),[p]),m=y(m,s.value),p!=null?i("li",{class:l,style:c},[m,d&&i("span",{class:`${s.value}-separator`},[d])]):null}}}),W=r=>{const{componentCls:t,iconCls:a}=r;return{[t]:$($({},H(r)),{color:r.breadcrumbBaseColor,fontSize:r.breadcrumbFontSize,[a]:{fontSize:r.breadcrumbIconFontSize},ol:{display:"flex",flexWrap:"wrap",margin:0,padding:0,listStyle:"none"},a:$({color:r.breadcrumbLinkColor,transition:`color ${r.motionDurationMid}`,padding:`0 ${r.paddingXXS}px`,borderRadius:r.borderRadiusSM,height:r.lineHeight*r.fontSize,display:"inline-block",marginInline:-r.marginXXS,"&:hover":{color:r.breadcrumbLinkColorHover,backgroundColor:r.colorBgTextHover}},z(r)),"li:last-child":{color:r.breadcrumbLastItemColor,[`& > ${t}-separator`]:{display:"none"}},[`${t}-separator`]:{marginInline:r.breadcrumbSeparatorMargin,color:r.breadcrumbSeparatorColor},[`${t}-link`]:{[`
          > ${a} + span,
          > ${a} + a
        `]:{marginInlineStart:r.marginXXS}},[`${t}-overlay-link`]:{borderRadius:r.borderRadiusSM,height:r.lineHeight*r.fontSize,display:"inline-block",padding:`0 ${r.paddingXXS}px`,marginInline:-r.marginXXS,[`> ${a}`]:{marginInlineStart:r.marginXXS,fontSize:r.fontSizeIcon},"&:hover":{color:r.breadcrumbLinkColorHover,backgroundColor:r.colorBgTextHover,a:{color:r.breadcrumbLinkColorHover}},a:{"&:hover":{backgroundColor:"transparent"}}},[`&${r.componentCls}-rtl`]:{direction:"rtl"}})}},J=w("Breadcrumb",r=>{const t=X(r,{breadcrumbBaseColor:r.colorTextDescription,breadcrumbFontSize:r.fontSize,breadcrumbIconFontSize:r.fontSize,breadcrumbLinkColor:r.colorTextDescription,breadcrumbLinkColorHover:r.colorText,breadcrumbLastItemColor:r.colorText,breadcrumbSeparatorMargin:r.marginXS,breadcrumbSeparatorColor:r.colorTextDescription});return[W(t)]}),Q=()=>({prefixCls:String,routes:{type:Array},params:B.any,separator:B.any,itemRender:{type:Function}});function Y(r,t){if(!r.breadcrumbName)return null;const a=Object.keys(t).join("|");return r.breadcrumbName.replace(new RegExp(`:(${a})`,"g"),(o,s)=>t[s]||o)}function M(r){const{route:t,params:a,routes:e,paths:o}=r,s=e.indexOf(t)===e.length-1,y=Y(t,a);return s?i("span",null,[y]):i("a",{href:`#/${o.join("/")}`},[y])}const x=I({compatConfig:{MODE:3},name:"ABreadcrumb",inheritAttrs:!1,props:Q(),slots:Object,setup(r,t){let{slots:a,attrs:e}=t;const{prefixCls:o,direction:s}=P("breadcrumb",r),[y,S]=J(o),u=(l,c)=>(l=(l||"").replace(/^\//,""),Object.keys(c).forEach(n=>{l=l.replace(`:${n}`,c[n])}),l),d=(l,c,n)=>{const m=[...l],f=u(c||"",n);return f&&m.push(f),m},p=l=>{let{routes:c=[],params:n={},separator:m,itemRender:f=M}=l;const v=[];return c.map(g=>{const C=u(g.path,n);C&&v.push(C);const h=[...v];let _=null;g.children&&g.children.length&&(_=i(q,{items:g.children.map(R=>({key:R.path||R.breadcrumbName,label:f({route:R,params:n,routes:c,paths:d(h,R.path,n)})}))},null));const j={separator:m};return _&&(j.overlay=_),i(T,b(b({},j),{},{key:C||g.breadcrumbName}),{default:()=>[f({route:g,params:n,routes:c,paths:h})]})})};return()=>{var l;let c;const{routes:n,params:m={}}=r,f=D(O(a,r)),v=(l=O(a,r,"separator"))!==null&&l!==void 0?l:"/",g=r.itemRender||a.itemRender||M;n&&n.length>0?c=p({routes:n,params:m,separator:v,itemRender:g}):f.length&&(c=f.map((h,_)=>(L(typeof h.type=="object"&&(h.type.__ANT_BREADCRUMB_ITEM||h.type.__ANT_BREADCRUMB_SEPARATOR)),V(h,{separator:v,key:_}))));const C={[o.value]:!0,[`${o.value}-rtl`]:s.value==="rtl",[`${e.class}`]:!!e.class,[S.value]:!0};return y(i("nav",b(b({},e),{},{class:C}),[i("ol",null,[c])]))}}});var Z=globalThis&&globalThis.__rest||function(r,t){var a={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&t.indexOf(e)<0&&(a[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(r);o<e.length;o++)t.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(r,e[o])&&(a[e[o]]=r[e[o]]);return a};const k=()=>({prefixCls:String}),A=I({compatConfig:{MODE:3},name:"ABreadcrumbSeparator",__ANT_BREADCRUMB_SEPARATOR:!0,inheritAttrs:!1,props:k(),setup(r,t){let{slots:a,attrs:e}=t;const{prefixCls:o}=P("breadcrumb",r);return()=>{var s;const{separator:y,class:S}=e,u=Z(e,["separator","class"]),d=D((s=a.default)===null||s===void 0?void 0:s.call(a));return i("span",b({class:[`${o.value}-separator`,S]},u),[d.length>0?d:"/"])}}});x.Item=T;x.Separator=A;x.install=function(r){return r.component(x.name,x),r.component(T.name,T),r.component(A.name,A),r};export{x as B,T as _};
