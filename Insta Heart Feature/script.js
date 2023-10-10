let heart = document.querySelector(".ptPannel img");
document.querySelector(".ptPannel").addEventListener("dblclick",function (dets) {
    heart.style.scale=1;
    setTimeout(function () {
        heart.style.scale=.5;
    },100)
    setTimeout(function () {
        heart.style.scale=0;
    },1000)
})