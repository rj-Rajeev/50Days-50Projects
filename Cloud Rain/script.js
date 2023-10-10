let randomText = ()=>{
    var text = ("@#!$%&*+^.");
    letters = text[Math.floor(Math.random()*text.length)]
    return letters;
}

let rain=()=> {
    let cloud = document.querySelector(".container");
    let div = document.createElement("div");
    div.classList.add("rain");
    cloud.appendChild(div);
    let left = (Math.random() *250)+510;
    console.log(left);
    div.innerHTML=`<h3>${randomText()}</h3>`
    div.style.left= left + 'px';
    // div.style.width="250px"
    setTimeout(() => {
        cloud.removeChild(div);
    }, 2000);
}
setInterval(()=>{
    rain();
},25)