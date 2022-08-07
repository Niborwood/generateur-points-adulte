var B=Object.defineProperty;var L=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var j=(t,e,r)=>e in t?B(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,R=(t,e)=>{for(var r in e||(e={}))V.call(e,r)&&j(t,r,e[r]);if(L)for(var r of L(e))Z.call(e,r)&&j(t,r,e[r]);return t};import{c as Y,a as _,b as O,d as G,j as s,L as T,e as l,O as H,u as K,f as W,r as c,l as M,P as F,F as ee,M as te,R as se,g as re,h as ne,B as ae,i as ie,k as Q}from"./vendor.852c1de4.js";const oe=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}};oe();var x=Y("https://mdjurizfmrcgvpuwwhlq.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kanVyaXpmbXJjZ3ZwdXd3aGxxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTc5NzkxODksImV4cCI6MTk3MzU1NTE4OX0.ldt50DYMq99kf8D6IESZ_LhMll0EHXHk2DDMBjYjPh4");const q=_("quiz/fetchAllQuestions",async()=>{const{data:t,error:e}=await x.from("questions").select("*, answers (*)").order("_id").order("created_at",{foreignTable:"answers"});if(e)throw new Error(e.message);return t}),E=_("quiz/upsertQuestion",async({question:t,answers:e})=>{const{answersToUpsert:r,answersToInsert:a}=e.reduce((i,o)=>(o._id?i.answersToUpsert.push(o):i.answersToInsert.push(o),i),{answersToUpsert:[],answersToInsert:[]}),n=await Promise.all([x.from("questions").upsert(t,{onConflict:"_id"}),x.from("answers").insert(a),x.from("answers").upsert(r,{onConflict:"_id"})]);if(!n.every(i=>!i.error))throw new Error("Error while inserting/upserting");return{updatedQuestion:n[0].data,insertedAnswers:n[1].data,updatedAnswers:n[2].data}}),z=_("quiz/sendStats",async(t,e)=>{const{quiz:r}=e.getState(),{error:a}=await x.from("stats").insert({createdAt:r.createdAt,age:r.age,score:r.score,completedAt:new Date,name:r.name,answers:r.answers},{returning:"minimal"});if(a)throw new Error(a.message);return!0});var le=({answers:t,questions:e})=>({adultScore:.36,respScore:.36});const de={questions:[],answers:[],currentQuestionIndex:0,name:"",age:0,createdAt:null,hasSetName:!1,hasEndedQuiz:!1,kindOfQuestions:0,isLoading:!1,score:{adultScore:null,respScore:null},error:""},D=O({name:"quiz",initialState:de,reducers:{beginQuiz:(t,e)=>{t.name=e.payload.name,t.age=e.payload.age,t.hasSetName=!0,t.createdAt=new Date},endQuiz:t=>{t.hasEndedQuiz=!0},randomizeQuiz:t=>{t.answers=[];for(const e of t.questions){const r=Math.floor(Math.random()*e.answers.length),a=e.answers[r];a&&t.answers.push({questionId:e._id,answerId:a._id})}t.currentQuestionIndex=t.questions.length,t.hasEndedQuiz=!0,t.name="Random Test",t.age=-1,t.createdAt=new Date,t.hasSetName=!0},goToNextQuestion:(t,e)=>{t.currentQuestionIndex===0&&(e.payload.answerId===0||e.payload.answerId===1)&&(t.kindOfQuestions=e.payload.answerId),t.answers.push(e.payload),t.currentQuestionIndex++},getScore:t=>{const e=le({answers:t.answers,questions:t.questions});t.score=e},clearQuiz:t=>{}},extraReducers:t=>{t.addCase(q.fulfilled,(e,r)=>{e.questions.length||(e.questions=r.payload,e.isLoading=!1)}),t.addCase(q.pending,e=>{e.isLoading=!1}),t.addCase(E.pending,e=>{e.isLoading=!0}),t.addCase(E.fulfilled,(e,r)=>{e.isLoading=!1;const{updatedQuestion:a,updatedAnswers:n}=r.payload;if(a)for(const i of a){const o=e.questions.findIndex(u=>u._id===i._id);o!==-1?e.questions[o]=i:e.questions.push(i)}}),t.addCase(E.rejected,(e,r)=>{e.isLoading=!1,e.error=r.error.message||"Une erreur est survenue"}),t.addCase(z.pending,e=>{e.isLoading=!0}),t.addCase(z.fulfilled,e=>{e.isLoading=!1}),t.addCase(z.rejected,(e,r)=>{e.isLoading=!1,e.error=r.error.message||"Une erreur est survenue"})}}),{beginQuiz:ce,endQuiz:je,randomizeQuiz:ue,goToNextQuestion:me,getScore:pe}=D.actions;var fe=D.reducer;const A=_("user/signUp",async({email:t,password:e})=>{const{user:r,error:a}=await x.auth.signUp({email:t,password:e});if(a)throw new Error(a.message);return r}),k=_("user/logIn",async({email:t,password:e})=>{const{user:r,error:a}=await x.auth.signIn({email:t,password:e});if(a)throw new Error(a.message);return r}),he={email:"",isAuthenticated:!1},P=O({name:"user",initialState:he,reducers:{checkIfLoggedIn:(t,e)=>{var r;t.isAuthenticated=!!e.payload,t.email=((r=e.payload)==null?void 0:r.email)||""}},extraReducers:t=>{t.addCase(A.pending,e=>{e.isAuthenticated=!1}),t.addCase(A.fulfilled,e=>{e.isAuthenticated=!0}),t.addCase(A.rejected,e=>{e.isAuthenticated=!1}),t.addCase(k.pending,e=>{e.isAuthenticated=!1}),t.addCase(k.fulfilled,(e,r)=>{e.isAuthenticated=!0,e.email=r.payload.email||""}),t.addCase(k.rejected,e=>{e.isAuthenticated=!1})}}),{checkIfLoggedIn:xe}=P.actions;var ge=P.reducer;const we=G({reducer:{quiz:fe,user:ge}});function be(){return s("header",{className:"p-4 px-8 mb-8 bg-stone-100",children:s("div",{children:s("h2",{className:"text-2xl font-semibold uppercase text-fuchsia-700",children:s(T,{to:"/",children:"G\xE9n\xE9rateur de points d'adultes"})})})})}function ve(){return l("div",{className:"flex-col min-h-screen font-headings bg-gradient-to-bl from-purple-700 via-fuchsia-700 to-pink-700",children:[s(be,{}),s("div",{className:"p-12",children:s(H,{})})]})}const g=K,C=W,U=({children:t,large:e=!1})=>s("div",{className:`relative px-4 py-8 bg-stone-100 rounded-xl drop-shadow-xl $ ${e?"max-w-3xl":"max-w-lg"}`,children:t});function ye({currentQuestion:t}){const{kindOfQuestions:e}=C(r=>r.quiz);return l("div",{className:"px-6 mb-8",children:[l("h3",{className:"text-2xl font-bold",children:[t._id,"/ ",t[`title_${e}`]]}),t.helper&&s("h5",{className:"text-sm italic",children:t.helper})]})}function Ne({answer:t,checked:e}){return s("button",{className:`px-6 py-4 text-left font-medium border-4 rounded-xl border-stone-200 transition-all ease-in-out ${e&&"bg-emerald-600 text-stone-100 border-emerald-600"}`,children:s("p",{children:t})})}function Se({answers:t,selectedAnswer:e,setSelectedAnswer:r,color:a}){return l(c.exports.Fragment,{children:[a&&s("div",{style:{background:a},className:"w-full h-32 my-8 rounded-lg border-4"}),s(M,{className:"flex flex-row flex-wrap justify-start gap-4 px-4",value:e,onChange:r,children:t.map(n=>s(M.Option,{value:n,children:({checked:i})=>s(Ne,{checked:i,answer:n.answer})},n._id))})]})}const Ie=()=>{const t=g(),{answers:e,name:r,score:a}=C(n=>n.quiz);return c.exports.useEffect(()=>{t(pe()),t(z())},[e]),s("div",{children:l("div",{children:[l("p",{className:"mb-4 text-2xl font-bold",children:[r,", voici votre score : "]}),l("p",{children:[s("strong",{children:a.adultScore})," - Indice d'adulte"]}),l("p",{children:[s("strong",{children:a.respScore})," - Indice de responsabilit\xE9"]})]})})},N=({text:t,children:e,small:r=!1,style:a="primary",type:n="button",onClick:i=()=>{}})=>s("button",{type:n,className:`flex justify-center w-fit-content ${r?"px-3 py-2 text-sm shadow-sm rounded-md":"p-4 shadow-lg rounded-xl"} ${(()=>{switch(a){case"secondary":return"bg-gradient-to-tr from-purple-600 to-purple-700 hover:to-purple-800 shadow-purple-600/30";default:return"bg-gradient-to-tr from-pink-600 to-fuchsia-600 hover:to-fuchsia-700 shadow-fuchsia-600/30"}})()} mt-2 mb-2 font-bold text-white transition-all ease-in-out hover:shadow-md`,onClick:i,children:t||e}),p=c.exports.forwardRef(({type:t="text",name:e,error:r,label:a,defaultValue:n,small:i=!1,editable:o=!1,editableArea:u=!1,labelColor:w="pink-700"},b)=>t==="hidden"?s("input",{type:"hidden",name:e,defaultValue:n}):u?l("div",{className:"flex flex-row items-start justify-start gap-2",children:[s(F,{className:"relative w-5 text-white top-1"}),s("textarea",{name:e,id:e,className:"w-full font-bold bg-transparent outline-none resize-none text-slate-100 focus-visible:border-0 :focus-visible:ring-0 outline-0",defaultValue:n})]}):l("div",{className:o?"flex flex-row items-center gap-1":"mb-2",children:[a&&s("label",{className:`ml-2 text-sm font-semibold ${w}`,htmlFor:e,children:a}),o&&s(F,{className:"w-4 text-white"}),s("input",{type:t,name:e,id:e,className:o?"bg-transparent text-slate-100 w-full break-words fond-semibold outline-0":`w-full ${i?"p-2 text-center my-0":"p-4 my-1"} my-0 text-sm bg-fuchsia-200 text-pink-800 font-bold border-0 rounded-xl focus-visible:ring-transparent transition-all outline-0 ${r&&"bg-purple-200!important"}`,autoComplete:"on",ref:b,defaultValue:n}),r&&s("div",{className:"pl-2 mb-2 text-sm text-fuchsia-700",children:r})]})),$=({title:t,size:e="2xl",bold:r=!0})=>s("h3",{className:`text-${e} ${r&&"font-bold"} after:content-[''] after:w-full after:h-2 after:absolute relative after:bottom-0.5 after:bg-gradient-to-r after:from-pink-600/60 after:to-purple-800/40 inline-block after:left-1 after:-z-10`,children:t}),J=({children:t,className:e,onSubmit:r})=>{const a=c.exports.useRef(null);return s("form",{onSubmit:i=>{if(i.preventDefault(),!a.current)return;const o=Object.fromEntries(new FormData(a.current));r(o)},ref:a,className:e,children:t})},_e=()=>{const t=c.exports.useRef(null),[e,r]=c.exports.useState(""),a=g();return l("div",{children:[s("h3",{className:"text-2xl font-bold",children:"Avant de commencer"}),s("div",{className:"mt-8",children:l(J,{onSubmit:i=>{const{name:o,age:u}=i;if(!o||!o.toString().trim().length)return r("Merci d'entrer un nom.");if(!u)return r("Merci d'entrer votre \xE2ge");a(ce({name:o.toString(),age:+u}))},children:[s(p,{name:"name",ref:t,error:e,label:"Quel est votre pr\xE9nom ?"}),s(p,{type:"number",name:"age",label:"Et votre \xE2ge ?"}),s(N,{text:"Commencer",type:"submit"})]})})]})};function Ce(){const[t,e]=c.exports.useState(null),{questions:r,currentQuestionIndex:a,hasSetName:n}=C(b=>b.quiz),i=g();let o;const u=r[a],w=()=>{!t||i(me({questionId:u._id,answerId:t._id}))};return n?u?o=l(ee,{children:[s(ye,{currentQuestion:u}),s(Se,{answers:u.answers,selectedAnswer:t,setSelectedAnswer:e,color:u.color}),s("div",{className:"mt-16",children:s(N,{text:"Question suivante",onClick:w})})]}):o=s(Ie,{}):o=s(_e,{}),s(U,{children:o})}const Ee=()=>{const t=g();c.exports.useEffect(()=>{t(q())},[]);const e=()=>t(ue());return l(c.exports.Fragment,{children:[s(Ce,{}),l("div",{className:"space-x-4",children:[s("button",{className:"p-2 mt-8 text-sm text-center bg-white rounded-md",onClick:e,children:"\u{1F3B2} Randomize quiz"}),s("button",{className:"p-2 mt-8 text-sm text-center bg-white rounded-md",children:s(T,{to:"/gpa-admin",children:"\u{1F512} Admin"})})]})]})},ze=({answer:t,index:e,deleteAnswer:r})=>{var a,n,i;return l("div",{className:"pl-4 font-bold text-white shadow-sm shadow-purple-300 rounded-xl bg-gradient-to-tl from-purple-600 to-purple-900",children:[s(p,{type:"hidden",name:`asw_${e}__id`,defaultValue:(a=t._id)==null?void 0:a.toString()}),l("div",{className:"flex flex-row items-center justify-between gap-6",children:[s("div",{className:"flex-1 py-1",children:s(p,{type:"text",defaultValue:t.answer,name:`asw_${e}_answer`,editable:!0})}),l("div",{className:"flex flex-row gap-2",children:[s("div",{className:"w-14",children:s(p,{name:`asw_${e}_respScore`,type:"number",defaultValue:(n=t.respScore)==null?void 0:n.toString(),label:"Resp.",labelColor:"white",small:!0})}),s("div",{className:"w-14",children:s(p,{name:`asw_${e}_adultScore`,type:"number",defaultValue:(i=t.adultScore)==null?void 0:i.toString(),label:"Adulte",small:!0})})]}),s("button",{className:"flex items-center self-stretch px-3 bg-red-600/70 rounded-r-xl",onClick:()=>r(e),children:s(te,{className:"w-5 text-slate-100"})})]})]})},Ae=({question:t,index:e})=>{const r=g(),[a,n]=c.exports.useState(!1),[i,o]=c.exports.useState(t.answers),u=()=>n(d=>!d),w=()=>{o(d=>[...d,{answer:"Nouvelle r\xE9ponse",respScore:0,adultScore:0}])},b=d=>{o(m=>m.filter((I,v)=>v!==d))},S=d=>{const{title_0:m,title_1:I,question_id:v}=d,f=[];for(const h in d){if(!h.startsWith("asw_")||h.includes("_id")&&!d[h])continue;const y=h[4];if(!y)continue;const X=h.replace(`asw_${y}_`,"");f[+y]||(f[+y]={}),f[+y][X]=d[h].toString()||null,f[+y].question_id||(f[+y].question_id=v.toString())}r(E({question:{_id:+v,title_0:m.toString(),title_1:I.toString(),updated_at:new Date},answers:f}))};return l("div",{className:"transition-all border-2 border-pink-200 border-dashed rounded-xl",children:[l("div",{className:`flex justify-between items-center ${a&&"border-b-2 border-purple-200"}`,children:[l("div",{className:"flex flex-row items-center flex-1",children:[s("div",{className:`self-stretch justify-center p-6 font-bold text-pink-400 bg-pink-100 cursor-move ${a?"rounded-tl-xl":"rounded-l-xl"}`,children:e+1}),s("div",{className:"px-4 text-xl font-bold",children:t.title_0})]}),s("div",{className:"pr-2",children:s(N,{text:a?"Fermer":"Modifier",onClick:u})})]}),a&&l(J,{className:"p-6 space-y-8 bg-purple-100 rounded-b-xl",onSubmit:S,children:[s(p,{type:"hidden",name:"question_id",defaultValue:t._id.toString()}),l("div",{children:[s("div",{className:"mb-6 ml-4 text-purple-700/80",children:s($,{title:"Questions",size:"xl"})}),s("div",{className:"flex flex-col gap-8 mt-12 md:gap-4 md:flex-row",children:[t.title_0,t.title_1].map((d,m)=>s("div",{className:`relative flex-1 p-6 text-lg font-bold bg-gradient-to-tl from-purple-600 to-purple-900 text-slate-100 rounded-2xl before:content-['${m===1?"Tutoiement":"Vouvoiement"}'] before:text-sm before:absolute before:-top-6 before:text-purple-600 before:font-medium shadow-xl`,children:s(p,{name:`title_${m}`,type:"text",editableArea:!0,defaultValue:d})},m))})]}),l("div",{children:[s("div",{className:"mb-6 ml-4 text-purple-700/80",children:s($,{title:"R\xE9ponses",size:"xl"})}),s("div",{className:"space-y-2",children:i.length?i.map((d,m)=>s(ze,{answer:d,index:m,deleteAnswer:b},d.answer)):"Aucune r\xE9ponse associ\xE9e."}),l("div",{className:"flex flex-row justify-end gap-4 mt-4",children:[s(N,{text:"Ajouter une r\xE9ponse",style:"secondary",small:!0,onClick:w}),s(N,{text:"Enregister",style:"secondary",small:!0,type:"submit"})]})]})]})]})},ke=()=>{const{questions:t}=C(r=>r.quiz),e=g();return c.exports.useEffect(()=>{e(q())},[]),l("div",{className:"",children:[s($,{title:"Modifier les questions"}),s("div",{className:"my-16 space-y-4",children:t.map((r,a)=>s(Ae,{question:r,index:a},r._id))})]})},qe=()=>{const t=g(),e=c.exports.useRef(null),r=c.exports.useRef(null),a=c.exports.useRef(null),[n,i]=c.exports.useState({email:"",password:"",repeatPassword:""}),[o,u]=c.exports.useState("login"),w=b=>{var I,v,f;b.preventDefault();const S=((I=e.current)==null?void 0:I.value)||"",d=((v=r.current)==null?void 0:v.value)||"",m=((f=a.current)==null?void 0:f.value)||"";S.match(/^[^@]+@[^@]+\.[^@]+$/)?n.email="":n.email="Merci d'entrer une adresse email valide.",(d||0)<6?n.password="Le mot de passe doit faire a minima 6 caract\xE8res.":n.password="",o==="signup"&&m!==d?n.repeatPassword="Les mots de passe ne correspondent pas.":n.repeatPassword="",i(R({},n)),Object.values(n).every(h=>!h)&&(o==="login"&&t(k({email:S,password:d})),o==="signup"&&t(A({email:S,password:d})))};return l(c.exports.Fragment,{children:[l("div",{className:"flex gap-4 mx-4 text-2xl font-bold",children:[s("button",{className:`font-bold ${o==="login"?"text-pink-700":"text-pink-700/25"}`,onClick:()=>u("login"),children:"Log In"}),s("button",{className:`font-bold ${o==="signup"?"text-pink-700":"text-pink-700/25"}`,onClick:()=>u("signup"),children:"Sign Up"})]}),s("div",{className:"my-4",children:l("form",{onSubmit:w,children:[l("div",{className:"my-4 mt-8",children:[s(p,{name:"email",ref:e,error:n.email,label:"Email"}),s(p,{name:"password",type:"password",ref:r,error:n.password,label:"Mot de passe"}),o==="signup"&&s(p,{name:"repeat_password",type:"password",ref:a,error:n.repeatPassword,label:"Confirmer le mot de passe"})]}),s(N,{type:"submit",text:o==="login"?"Se connecter":"S'inscrire"})]})})]})},Qe=()=>{const t=g(),{isAuthenticated:e}=C(r=>r.user);return c.exports.useEffect(()=>{const r=x.auth.user();t(xe(r))},[]),s(U,{large:e,children:e?s(ke,{}):s(qe,{})})};se.render(s(re.StrictMode,{children:s(ne,{store:we,children:s(ae,{children:s(ie,{children:l(Q,{path:"/",element:s(ve,{}),children:[s(Q,{index:!0,element:s(Ee,{})}),s(Q,{path:"/gpa-admin",element:s(Qe,{})})]})})})})}),document.getElementById("root"));