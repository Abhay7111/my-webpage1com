var crsr = document.querySelector(".cursor")
var crsrblr = document.querySelector(".cursorblr")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
})

document.addEventListener("mousemove",function(dets){
    crsrblr.style.left = dets.x -100 +"px"
    crsrblr.style.top = dets.y -100 +"px"
})

gsap.to("header",{
    backgroundColor :"#fff",
    
    height:"70px",
    duration:0.5,
    scrollTrigger:{
        trigger:"header",
        scroller:"body",
        // markers:"true",
        start:"top -0px",
        end:"top -1px",
        scrub:1,
        top:"120px",
    },
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroll:".page1",
        // markers:"true",
        start:"top 10px",
        end:"top 100px",
        scrub:1,
    }
})

gsap.to(".footer",{
    backgroundColor:"transparent",
    scrollTrigger:{
        trigger:".footer",
        scroll:".footer",
        // markers:"true",
        start:"top 730px",
        end:"top 250px",
        scrub:0.1,
    }
})

gsap.to("footer",{
    backgroundColor:"transparent"
})

gsap.to(".page2",{
    backgroundColor :"transparent",
    top:"-90vh",
    duration:0.5,
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        // markers:"true",
        start:"top -50px",
        end:"top -1000px",
        scrub:1,
    },
})

gsap.to("#page3-main-box",{
    backgroundColor : "red",
    top:"20vh",
    scrollTrigger:{
        trigger:"#page3-main-box",
        scroller:"body",
        start:"top -50px",
        end:"top -50px",
        scrub:2.5,
    },
})


// this is for stars 

var starsdiv = document.querySelector("#stars-link1")
var stars = document.querySelector("#star1")
var stars1 = 0
stars.addEventListener("click",function(){
    if(stars1 ==0){
        starsdiv.style.color = "yellow"
        stars1 = 1
    }
})

var starsdiv2 = document.querySelector("#stars-link2")
var stars = document.querySelector("#star2")
var stars2 = 0
stars.addEventListener("click",function(){
    if(stars2 ==0){
        starsdiv2.style.color = "yellow"
    }
})

var starsdiv3 = document.querySelector("#stars-link3")
var stars = document.querySelector("#star3")
var stars3 = 0
stars.addEventListener("click",function(){
    if(stars3 ==0){
        starsdiv3.style.color = "yellow"
    }
})

var starsdiv4 = document.querySelector("#stars-link4")
var stars = document.querySelector("#star4")
var stars4 = 0
stars.addEventListener("click",function(){
    if(stars4 ==0){
        starsdiv4.style.color = "yellow"
    }
})

var starsdiv5 = document.querySelector("#stars-link5")
var stars = document.querySelector("#star5")
var stars5 = 0
stars.addEventListener("click",function(){
    if(stars5 ==0){
        starsdiv5.style.color = "yellow"
    }
})



var Subscribeicon = document.querySelector("#Subscribe1")

var change1 = document.querySelector("#a-span1")

var point1 = 0
Subscribeicon.addEventListener("click",function(){
    if(point1 ==0){
        change1.innerHTML = "Subscribed"
        change1.style.color = "red"
        point1 = 1
        Subscribeicon.style.color = "red"
    }
})
