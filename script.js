const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

var tl = gsap.timeline();
const loadingAnimation = () =>{
    tl.from("#center-text .reveal",{
        opacity:0,
        x:"30%",
        duration:0.5,
        stagger:0.6
    });
    tl.to("#top-text .reveal",{
        opacity:0,
        y:"-150%",
        duration:1,
    },'a');
    tl.to("#center-text .reveal",{
        opacity:0,
        y:"-110%",
        duration:1,
    },'a');
    tl.to("#circle",{
        opacity:0,
        y:"-110%",
        duration:1,
    },'a');
    tl.to("#loader",{
        y:"-100%",
        duration:1,
        ease:Power4.easeInOut
    },'b');
    tl.to("#green",{
        height:"100%",
        duration:1,
        ease:Power4.easeInOut
    },'b');
    tl.to("#green",{
        y:"-100%",
        duration:1,
        delay:0.3,
        ease:Power4.easeInOut
    },'b');
    tl.from(".row h1",{
        y:"100%",
        duration:1,
        delay:0.5,
        ease:Power4.ease
    },'b')
    tl.from(".row img,#right-text",{
        opacity:0,
        duration:2,
        ease:Power4
    })
}
loadingAnimation();
const animateSvg = () =>{
    document.querySelectorAll("#Visual>g").forEach(function(e){
        var char = e.childNodes[0].childNodes[0];
        char.style.strokeDasharray = char.getTotalLength() + 'px';
        char.style.strokeDashoffset = char.getTotalLength() + 'px';
    })
    tl.to("#Visual>g>g>path, #Visual>g>g>polyline",{
        strokeDashoffset:0,
        duration:1,
        delay:2,
        ease:Expo.easeInOut
    },'b')
}
animateSvg();


