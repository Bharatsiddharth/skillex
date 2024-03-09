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




function page1animation(){
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

}

page1animation();






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




function page2animation(){
  
let tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:".page2 ",
    scroller:".main",
    // markers:true,
    start:"30% 90%",
    end:"30% 30%",
    scrub:5
  }
});


tl2.from(".page2 h1", {
  opacity:0,
  y:100,
  stragger:true,
  // duration:2
  
})


tl2.from(".navbar-page2 h4", {
  opacity:0,
  y:50,
  stagger:1,
  // duration:2
  scrub:3
})

tl2.from(".categories .img-1", {
  opacity:0,
  y:50,
  stagger:1,
  // duration:2
  scrub:3,
  
})

tl2.from(".categories .img-2", {
  opacity:0,
  y:50,
  stagger:1,
  // duration:2
  scrub:3
})

tl2.from(".categories .img-3", {
  opacity:0,
  y:50,
  stagger:1,
  // duration:2
  scrub:3
})

tl2.from(".categories .img-4", {
  opacity:0,
  y:50,
  stagger:1,
  // duration:2
  scrub:3
})

tl2.from(".categories h4", {
  opacity:0,
  y:50,
  // stagger:1,
  // duration:2
  scrub:3
})
}

page2animation(); 



function page3animation(){
  let tl3 = gsap.timeline({
    scrollTrigger:{
      trigger:".page3 ",
      scroller:".main",
      // markers:true,
      start:"10% 50%",
      end:"10% 20%",
      scrub:5
    }
  });
  
  tl3.from(".top-page3 h1", {
    opacity:0,
    x:-100,
  })
  
  tl3.from(".top-page3 h3", {
    opacity:0,
    x:100,
  })
  
  
  tl3.from(".left-page3 .elem1", {
    opacity:0,
    x:-100,
    // duration:5,
    stagger:1,
  })
  
  
  tl3.from(".right-page3 .box", {
    opacity:0,
    y: 100,
    // duration:5,
    stagger:1,
  })
}

page3animation();



function page4animation(){
  let tl4 = gsap.timeline({
    scrollTrigger:{
      trigger:".page4 ",
      scroller:".main",
      // markers:true,
      start:"10% 50%",
      end:"10% 20%",
      scrub:5
    }
  });
  
  tl4.from(".page4  h1", {
    opacity:0,
    y: 100,
    // duration:5,
    stagger:1,
  })
  
  tl4.from(".page4  .swiper", {
    opacity:0,
    x: 400,
    // duration:5,
    stagger:1,
  })
}

page4animation();


function footeranimation(){
  let tl5 = gsap.timeline({
    scrollTrigger:{
      trigger:"footer ",
      scroller:".main",
      // markers:true,
      start:"-40% 50%",
      end:"-40% 40%",
      scrub:5
    }
  });
  
  
  tl5.from(".upper-content-footer h1", {
    opacity:0,
    y: 100,
    duration:5,
    stagger:5,
  })
  
  tl5.from(".upper-content-footer h4", {
    opacity:0,
    y: 100,
    duration:5,
    stagger:5,
  })
  
  tl5.from(".join h2", {
    opacity:0,
    y: 100,
    duration:5,
    stagger:5,
  })
  
  
  tl5.from(".join .enter", {
    opacity:0,
    y: 100,
    duration:5,
    stagger:5,
  })
  
  
  tl5.from("footer .line", {
    opacity:0,
    // y: 100,
    duration:5,
    stagger:5,
  })
  
  tl5.from("footer .bottom", {
    opacity:0,
    // y: 100,
    duration:5,
    stagger:5,
  })
}

footeranimation();