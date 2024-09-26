import{_ as E}from"./AccountSidebar.vue.9d22ce90.js";import{a as b}from"./AuthService.028e45d7.js";import{F as R}from"./index.03c13174.js";import{R as T,_ as U}from"./index.4c10a40d.js";import"./index.3fdac0c6.js";import{I as w}from"./Password.0211d37f.js";import{B as A}from"./index.42b56407.js";import{d as N,i as P,a as V,r as B,a0 as D,D as n,U as c,R as s,P as $,a2 as x,u as z}from"./swiper-vue.a421f1cd.js";import{m as k,n as v}from"./entry.98dfd619.js";import{_ as I}from"./FormItem.aab759e1.js";import"./nuxt-link.0ea93ab3.js";import"./Axios.d324b291.js";import"./zoom.cba4073c.js";import"./hasIn.fd17fd00.js";import"./isSymbol.28713955.js";import"./collapseMotion.f1f8d61b.js";import"./debounce.ff103b05.js";import"./styleChecker.29229325.js";import"./EyeOutlined.deffa0c0.js";import"./SearchOutlined.4ca08eb4.js";import"./index.f15daada.js";import"./ResizeObserver.es.0f9f8adb.js";import"./useFlexGapSupport.d9dc3cd0.js";function Z(u){const i=u+"=",t=decodeURIComponent(document.cookie).split("; ");let l;return t.forEach(_=>{_.indexOf(i)===0&&(l=_.substring(i.length))}),l}function j(u,i,d){const t=new Date;t.setTime(t.getTime()+d*1e3);let l="expires="+t.toUTCString();document.cookie=u+"="+i+"; "+l+"; path=/"}const F={getCookie:Z,setCookie:j},H={class:"max-w-[1200px] mx-auto grid px-20 grid-cols-4 mt-10"},O={class:"col-span-3 border border-solid border-gray-300 rounded-lg"},q=c("h2",{class:"text-lg font-medium mb-4"},"Thông tin",-1),L={class:"mb-4"},G={class:"mb-4"},J={class:"mb-4"},K={class:"mb-4"},ve=N({__name:"thong-tin",setup(u){const i=P("removeSpecialChars",o=>o);F.getCookie("username");const d=V(null),t=B({name:"",email:"",phone:"",sex:1,role:"ROLE_USER"}),l=(o,e)=>e&&!/((09|03|07|08|05)+([0-9]{8})\b)/g.test(e)?Promise.reject("Số điện thoại không đúng!"):Promise.resolve(),_=(o,e)=>e&&!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g.test(e)?Promise.reject("Email không hợp lệ!"):Promise.resolve(),C=()=>{b.account_detail().then(o=>{console.log("res",o.data.content),t.name=o.data.content.name,t.email=o.data.content.email,t.phone=o.data.content.phone},o=>{console.log("error",o)})},S=()=>{var o;(o=d.value)==null||o.validate().then(()=>{b.updateAccount(t).then(e=>{console.log("res",e.data),k.success("Cập nhật thành công")},e=>{var h,p,f,m,r,g;console.log("error",e),((p=(h=e==null?void 0:e.response)==null?void 0:h.data)==null?void 0:p.code)==21?v.error({message:"Tài khoản này đã được đăng ký."}):((m=(f=e==null?void 0:e.response)==null?void 0:f.data)==null?void 0:m.code)==22?v.error({message:"Email này đã được đăng ký."}):((g=(r=e==null?void 0:e.response)==null?void 0:r.data)==null?void 0:g.code)==23?v.error({message:"Số điện thoại này đã được đăng ký."}):k.error("Cập nhật thất bại")})}).catch(e=>{v.warning({message:"Vui lòng điền thông tin còn thiếu."})})};return C(),(o,e)=>{const h=E,p=T,f=U,m=w,r=I,g=A,y=R;return $(),D("div",H,[n(h),c("div",O,[n(y,{ref_key:"formRef",ref:d,class:"w-full p-4 relative",model:t,name:"basic",layout:"vertical"},{default:s(()=>[q,c("div",L,[n(f,{value:t.sex,"onUpdate:value":e[0]||(e[0]=a=>t.sex=a)},{default:s(()=>[n(p,{value:1},{default:s(()=>[x("Nam")]),_:1}),n(p,{value:2},{default:s(()=>[x("Nữ")]),_:1})]),_:1},8,["value"])]),c("div",G,[n(r,{label:"Họ và tên",name:"fullName"},{default:s(()=>[n(m,{class:"h-10 text-base",value:t.name,"onUpdate:value":e[1]||(e[1]=a=>t.name=a),onChange:e[2]||(e[2]=a=>t.name=z(i)(t.name)),placeholder:"Họ và tên ..."},null,8,["value"])]),_:1})]),c("div",J,[n(r,{label:"Email",name:"email",rules:[{validator:_}]},{default:s(()=>[n(m,{value:t.email,"onUpdate:value":e[3]||(e[3]=a=>t.email=a),onChange:e[4]||(e[4]=a=>t.email=t.email.replace(/[^a-zA-Z0-9.@]/g,"")),class:"h-10 text-base",placeholder:"Email..."},null,8,["value"])]),_:1},8,["rules"])]),c("div",K,[n(r,{label:"Số điện thoại",name:"phone",rules:[{validator:l},{required:!0,message:"Số điện thoại không được để trống!"}]},{default:s(()=>[n(m,{value:t.phone,"onUpdate:value":e[5]||(e[5]=a=>t.phone=a),maxlength:10,onChange:e[6]||(e[6]=a=>t.phone=t.phone.replace(/[^0-9@]/g,"")),class:"h-10 text-base",placeholder:"Số điện thoại"},null,8,["value"])]),_:1},8,["rules"])]),n(g,{onClick:S,class:"h-10 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"primary","html-type":"submit"},{default:s(()=>[x(" Cập nhật ")]),_:1})]),_:1},8,["model"])])])}}});export{ve as default};
