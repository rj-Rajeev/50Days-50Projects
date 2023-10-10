let img = document.querySelector(".img");
let color = document.querySelector(".color");

color.addEventListener("click",(event)=>{
    if(event.target.classList.contains('white')){
        img.innerHTML=`<img src="/assets/Puma White.jpg" alt="">`
    }
    if(event.target.classList.contains('white-surf')){
        img.innerHTML=`<img src="/assets/WhiteSurf.jpg" alt="">`
    }
    if(event.target.classList.contains('black')){
        img.innerHTML=`<img src="/assets/Puma Black.jpg" alt="">`
    }
    if(event.target.classList.contains('red')){
        img.innerHTML=`<img src="/assets/Puma Red.jpg" alt="">`
    }
});

