// typing animation
const text="Software Developer | Java | Python | C | C++";
let i=0;

function typing(){
if(i<text.length){
document.querySelector(".typing").innerHTML+=text.charAt(i);
i++;
setTimeout(typing,50);
}
}
typing();


// skill bar animation
window.onload=()=>{
document.querySelectorAll(".bar div").forEach(bar=>{
bar.style.width=bar.dataset.width;
});
};


// Google Sheet projects fetch
const sheetURL="https://script.google.com/macros/s/AKfycbxvyABgJyZzgHnQ5ZSMVt6kTHU3M7Y6uEc-88iVfYOXVMEP6RFvOgJAbjiVI8hL0mOPew/exec";

fetch(sheetURL)
.then(res => res.json())
.then(data => {

let container = document.getElementById("projects");

if (!container) {
  console.error("projects container not found");
  return;
}

data.forEach(project => {
container.innerHTML += `
<div class="project">
<h3>${project.name}</h3>
<p>${project.description}</p>
<a href="${project.link}" target="_blank">View Project</a>
</div>
`;
});

})
.catch(err => console.log(err));