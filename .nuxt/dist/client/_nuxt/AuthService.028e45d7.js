import{A as t}from"./Axios.d324b291.js";const o="",a=s=>t.post(`${o}/auth/sign-in`,s),r=s=>t.post(`${o}/user/sign-up`,s),n=()=>t.get(`${o}/user/detail`),c=s=>t.put(`${o}/user/update-profile`,s),u=s=>t.post(`${o}/user/find-pw?email=${s}`),p=s=>t.get(`${o}/user/token?token=${s}`),i=(s,e)=>t.put(`${o}/user/forgot-pass/${e}`,s),g=s=>t.patch(`${o}/user/password`,s),d={login:a,register:r,account_detail:n,updateAccount:c,forgotPassword:u,submitforgotPass:i,forgotPassId:p,changePassword:g};export{d as a};
