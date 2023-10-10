let target = document.querySelector(".target");
let circle = document.querySelector(".outerCircle")
let minCir = document.querySelectorAll(".cir")

minCir.forEach((val,inx)=>{
    val.addEventListener("click",(dets)=>{
        if (dets.target.classList.contains("d1")) {
            circle.style.transform =`rotate(-40deg)`;

        }
        else if (dets.target.classList.contains("d2")) {
            circle.style.transform =`rotate(-20deg)`;
    
        }
        else if (dets.target.classList.contains("d3")) {
            circle.style.transform =`rotate(0deg)`;
    
        }
        else if (dets.target.classList.contains("d4")) {
            circle.style.transform =`rotate(20deg)`;
    
        }
        else if (dets.target.classList.contains("d5")) {
            circle.style.transform =`rotate(40deg)`;
        }
        
    })
})


