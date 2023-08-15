gsap.to("header",{
    backgroundColor :"#fff",
    height:"70px",
    duration:0.5,
    scrollTrigger:{
        trigger:"header",
        scroller:"body",
        // markers:"true",
        start:"top -10%",
        end:"top -11%",
        scrub:1.3,
    },
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroll:"#main",
        markers:true,
        start:"top 10%",
        end:"top -70%",
        scrub:2,
    }
})