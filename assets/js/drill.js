
document.querySelectorAll(".drill-toggle").forEach(btn=>{
btn.addEventListener("click",()=>{
const ans=btn.nextElementSibling;
const open=ans.style.display==="block";
ans.style.display=open?"none":"block";
btn.textContent=open?"Show Answer":"Hide Answer";
});
});
