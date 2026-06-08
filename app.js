const $=id=>document.getElementById(id);
const get=(k,d=[])=>JSON.parse(localStorage.getItem(k)||JSON.stringify(d));
const set=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
function user(){return JSON.parse(localStorage.getItem('currentUser')||'null')}
function requireLogin(){if(!user()) location.href='login.html'}
function logout(){localStorage.removeItem('currentUser');location.href='login.html'}
function initTheme(){if(localStorage.theme==='dark')document.body.classList.add('dark'); const b=$('themeBtn'); if(b)b.onclick=()=>{document.body.classList.toggle('dark');localStorage.theme=document.body.classList.contains('dark')?'dark':'light'}}
initTheme();
(function seed(){if(!localStorage.posts){set('posts',[{id:Date.now(),title:'Welcome to BlogVerse',category:'Tech',image:'',content:'This is a demo blog platform with login, posts, comments, likes, search and profile features.',author:'Admin',email:'admin@blog.com',likes:3,created:new Date().toLocaleString()}]);set('comments',[])}})();
