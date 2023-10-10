let arr = [
{userName:"Rajeev",dp:"/img/Rajeev.jpg",story:"https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwZm9vZHxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"},
{userName:"Rohan",dp:"https://plus.unsplash.com/premium_photo-1682092660676-c68b30dce510?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwbWFufGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",story:"https://images.unsplash.com/photo-1606471191009-63994c53433b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwZm9vZHxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"},
{userName:"Ramesh",dp:"https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5kaWFuJTIwbWFufGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",story:"https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMGZvb2R8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=600&q=60"},
{userName:"Aditya",dp:"https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMG1hbnxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",story:"https://images.unsplash.com/photo-1631788012442-633d4f91ad31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGluZGlhbiUyMGZvb2R8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=600&q=60"},
{userName:"Avnish",dp:"https://images.unsplash.com/photo-1552642986-ccb41e7059e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluZGlhbiUyMG1hbnxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",story:"https://media.istockphoto.com/id/996699224/photo/assorted-indian-food-for-lunch-or-dinner-rice-lentils-paneer-dal-makhani-naan-chutney-spices.webp?b=1&s=170667a&w=0&k=20&c=tWER_gMCey68We6-Mmvu7nHYWXL6GhL4sNsmS9WBgW4="},
{userName:"Ashwin",dp:"https://plus.unsplash.com/premium_photo-1691032055358-74e1a0128a8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGluZGlhbiUyMG1hbnxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",story:"https://media.istockphoto.com/id/922783734/photo/assorted-indian-recipes-food-various.webp?b=1&s=170667a&w=0&k=20&c=5ILrVMh-eEmeUi-Qk8KU9vAC3PXbSX6nFTIcs-Sc56s="}
]




    let story = document.querySelector(".stPannel");
    let clutter =""
    arr.forEach((dets,indx)=>{
        clutter+=`<div class="story"><img id ="${indx}" src="${dets.dp}" alt=""></div>`
    })
    story.innerHTML=clutter 

    story.addEventListener("click",function(dets){
        document.querySelector(".fullStory").style.display = "block"
        setTimeout(()=>{
            document.querySelector(".fullStory").style.display = "none"
        },3000)
        document.querySelector(".fullStory").style.backgroundImage = `url("${arr[dets.target.id].story}")`
        
        
    })
   
    // ----------------------- Like feature --------------------//

    let heart = document.querySelector(".post img");
    document.querySelector(".post").addEventListener("dblclick",function (dets) {
    heart.style.scale=1;
    setTimeout(function () {
        heart.style.scale=.6;
    },100)
    setTimeout(function () {
        heart.style.scale=0;
    },1000)
})