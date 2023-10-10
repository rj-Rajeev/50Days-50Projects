let a = document.getElementsByTagName("a")

a[0].addEventListener("click",()=>{
    a[0].firstElementChild.classList.toggle("active");
    a[1].firstElementChild.classList.remove("active");
    a[2].firstElementChild.classList.remove("active");
    a[3].firstElementChild.classList.remove("active");
})
a[1].addEventListener("click",()=>{
    a[1].firstElementChild.classList.toggle("active");
    a[0].firstElementChild.classList.remove("active");
    a[2].firstElementChild.classList.remove("active");
    a[3].firstElementChild.classList.remove("active");
})
a[2].addEventListener("click",()=>{
    a[2].firstElementChild.classList.toggle("active");
    a[1].firstElementChild.classList.remove("active");
    a[0].firstElementChild.classList.remove("active");
    a[3].firstElementChild.classList.remove("active");
})
a[3].addEventListener("click",()=>{
    a[3].firstElementChild.classList.toggle("active");
    a[1].firstElementChild.classList.remove("active");
    a[2].firstElementChild.classList.remove("active");
    a[0].firstElementChild.classList.remove("active");
})