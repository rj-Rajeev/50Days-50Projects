let navicon = document.querySelector(".navicon");
let navbar = document.querySelector(".navbar");
let links = document.querySelector(".navbar .links");


navicon.addEventListener("click",()=>{
    
    navicon.classList.toggle("active");
    navbar.classList.toggle("active");
    links.classList.toggle("active");

})