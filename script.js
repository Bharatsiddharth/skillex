function loco(){
    
  gsap.registerPlugin(ScrollTrigger);
  
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });
  
  
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  }


  
  
  loco();








let tl = gsap.timeline()

tl.from(".page1 .nav1",{
    y:-100,
    duration:0.5,
})
tl.from(".page1 .nav2",{
    y:-100,
    duration:0.5,
})
tl.from(".page1 .nav3",{
    y:-100,
    duration:0.5,
})


tl.from(".card1 h1", {
    opacity:0,
    x:-100,
    stragger:true
})

tl.from(".card1 .enter", {
  opacity:0,
  x:-100,
  stragger:true,
})

tl.from(".gallery", {
  opacity:0,
  y:100,
  stragger:true
})









let img1 = document.querySelector(".img1");
function img1dec(){
    img1.style.width = "22%";
}
// img1dec()

function img1incr(){
    img1.style.width = "46%";
}

function images(){
    let img2 = document.querySelector(".img2");
    
    img2.addEventListener("mouseenter",function(){
        
        img2.style.width = "46%";
        img1dec();
    })

    img2.addEventListener("mouseleave",function(){
        
        img2.style.width = "22%";
        img1incr();
    })

    let img3 = document.querySelector(".img3");

    img3.addEventListener("mouseenter",function(){
        
        img3.style.width = "46%";
        img1dec();
    })

    img3.addEventListener("mouseleave",function(){
        
        img3.style.width = "22%";
        img1incr();
    })
}
images();

