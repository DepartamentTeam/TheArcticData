(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{4490:function(e,s,r){Promise.resolve().then(r.bind(r,1132))},1132:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return o}});var n=r(3779);let t=e=>{let{label:s,error:r,id:t,register:i,isRequired:a,icon:l,placeholder:o,type:c}=e;return(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"input-field",children:[(0,n.jsx)("span",{className:"input__icon",children:l}),(0,n.jsxs)("label",{className:"small-1",children:[s,(0,n.jsx)("input",{type:c,placeholder:o,...i("".concat(t),{required:a}),required:a})]})]}),r&&(0,n.jsx)("div",{className:"",children:"error.message"})]})};var i=r(5632),a=r(1895),l=r(5800),o=()=>{var e,s;let{register:r,formState:{errors:o},handleSubmit:c}=(0,l.cI)(),[d,u]=(0,a.useState)(!1);async function m(e){let s=await i.ZP.post("/login",{headers:{Accept:"application/json","Content-Type":"application/json"},body:e});200!==s.status&&(u(!0),console.error(s.status,s.body))}return(0,n.jsx)("div",{className:"login-form",children:(0,n.jsxs)("form",{className:"form",action:"/login",method:"post",onSubmit:c(m),children:[(0,n.jsx)("h3",{className:"form-title",children:"Войти в систему"}),(0,n.jsx)(t,{placeholder:"",label:"Логин",register:r,isRequired:!0,id:"username",error:null===(e=o.username)||void 0===e?void 0:e.message}),(0,n.jsx)(t,{type:"password",placeholder:"",label:"Пароль",register:r,isRequired:!0,id:"password",error:null===(s=o.password)||void 0===s?void 0:s.message}),(0,n.jsxs)("div",{className:"form-buttons",children:[!d&&(0,n.jsx)("button",{type:"submit",className:"btn btn--primary",children:"Войти"}),d&&(0,n.jsx)("button",{type:"submit",className:"btn btn--primary btn--error",children:"Не удалось войти"})]})]})})}}},function(e){e.O(0,[256,800,580,502,744],function(){return e(e.s=4490)}),_N_E=e.O()}]);