(this.webpackJsonphome=this.webpackJsonphome||[]).push([[8],{295:function(e,r,a){"use strict";a.r(r),a.d(r,"default",(function(){return v}));var t=a(87),n=a.n(t),s=a(88),i=a(2),o=a(287),u=a(289),l=a(292),c=a(294),d=a(296),m=a(302),h=a(293),f=a(145),p=a(146),b=a(85),w=a(5),j=p.a({email:p.b("Enter your email").email("Enter a valid email").required("Email is required"),password:p.b("Enter your password").min(8,"Password should be of minimum 8 characters length").required("Password is required")}),g=Object(o.a)((function(e){return{formControl:{margin:"20vh 0px"},TextField:{margin:"10px 0px"}}}));function v(){var e=g(),r=Object(f.a)({initialValues:{email:"",password:""},validationSchema:j,onSubmit:function(){var e=Object(s.a)(n.a.mark((function e(r){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b.b(r);case 1:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()});return Object(i.useEffect)((function(){})),Object(w.jsxs)("div",{children:[Object(w.jsx)(u.a,{position:"static",children:Object(w.jsx)(l.a,{children:Object(w.jsx)(c.a,{variant:"h6",className:e.title,children:"Login Page"})})}),Object(w.jsx)(d.a,{maxWidth:"sm",children:Object(w.jsxs)("form",{className:e.formControl,onSubmit:r.handleSubmit,children:[Object(w.jsx)(m.a,{className:e.TextField,fullWidth:!0,id:"email",name:"email",label:"Email",value:r.values.email,onChange:r.handleChange,error:r.touched.email&&Boolean(r.errors.email),helperText:r.touched.email&&r.errors.email,variant:"outlined",size:"small"}),Object(w.jsx)(m.a,{className:e.TextField,fullWidth:!0,id:"password",name:"password",label:"Password",type:"password",value:r.values.password,onChange:r.handleChange,error:r.touched.password&&Boolean(r.errors.password),helperText:r.touched.password&&r.errors.password,variant:"outlined",size:"small"}),Object(w.jsx)(h.a,{color:"primary",size:"large",variant:"contained",fullWidth:!0,type:"submit",children:"Submit"})]})})]})}},85:function(e,r,a){"use strict";a.d(r,"b",(function(){return o})),a.d(r,"c",(function(){return u})),a.d(r,"a",(function(){return l}));var t=a(87),n=a.n(t),s=a(88),i=a(36),o=function(){var e=Object(s.a)(n.a.mark((function e(r){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i.a.signInWithEmailAndPassword(r.email,r.password).then((function(e){return console.log(e.user),e.user.emailVerified?(localStorage.setItem("token",e.user.refreshToken),{data:e.user,status:"success"}):(e.user.sendEmailVerification(),i.a.signOut(),{status:"unverified"})})).catch((function(e){return console.log(e),{error:e,status:"error"}}));case 1:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),u=function(e){i.a.createUserWithEmailAndPassword(e.email,e.password).then((function(e){return console.log(e),e.user.sendEmailVerification(),i.a.signOut(),{status:"sent_email"}})).catch((function(e){return console.log(e),{status:"error"}}))},l=function(){i.a.signOut().then((function(){return localStorage.clear(),!0}))}}}]);
//# sourceMappingURL=8.cbdf1577.chunk.js.map