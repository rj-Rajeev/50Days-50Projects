let follow = document.querySelector("#follow");
let followers = document.querySelector(".followers .follower");
let badge = document.querySelector(".followers .badge img");
flag = 0;
follow.addEventListener("click",(dets)=>{
    if (flag==0) {
        followers.innerHTML = Number(followers.innerHTML)+1;
        badge.style.scale=".6";
        follow.innerHTML="Unfollow"
        flag=1;
    } else {
        followers.innerHTML = Number(followers.innerHTML)-1;
        badge.style.scale="0";
        follow.innerHTML="Follow"
        flag=0;
    }})