setInterval(() => {
    let t = new Date();
    let secnidlle = document.querySelector("#second")
    let minnidlle = document.querySelector("#minute")
    let hournidlle = document.querySelector("#hour")

    secnidlle.style.transform = `rotate(${t.getSeconds()*6}deg)`;
    minnidlle.style.transform = `rotate(${t.getMinutes()*6}deg)`;
    hournidlle.style.transform = `rotate(${t.getHours()*30}deg)`;
});