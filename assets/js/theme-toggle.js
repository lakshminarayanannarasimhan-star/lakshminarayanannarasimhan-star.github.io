
document.addEventListener("DOMContentLoaded",()=>{
const root=document.documentElement;
const btn=document.getElementById("theme-toggle");
btn.onclick=()=>{
const cur=root.getAttribute("data-theme");
const next=cur==="midnight"?"indigo":"midnight";
root.setAttribute("data-theme",next);
localStorage.setItem("theme",next);
};
const saved=localStorage.getItem("theme");
if(saved) root.setAttribute("data-theme",saved);
});
