
fetch('/search.json').then(r=>r.json()).then(data=>{
const input=document.getElementById("search-input");
const out=document.getElementById("search-results");
input.addEventListener("input",e=>{
const q=e.target.value.toLowerCase();
out.innerHTML=data.filter(p=>p.title.toLowerCase().includes(q))
.map(r=>`<div><a href="${r.url}">${r.title}</a></div>`).join("");
});
});
