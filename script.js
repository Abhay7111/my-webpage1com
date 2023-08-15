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
        markers:"true",
        start:"top -5%",
        end:"top -10%",
        scrub:2,
        top:"120px",
    },
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroll:".page1",
        markers:"true",
        start:"top 10%",
        end:"top -20%",
        scrub:2,
    }
})

gsap.to(".page2",{
    backgroundColor :"#000",
    height:"100vh",
    duration:0.5,
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        markers:"true",
        start:"top -5%",
        end:"top -4vh",
        scrub:4,
        top:"120px",
    },
})