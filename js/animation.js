gsap.registerPlugin(ScrollTrigger);

// Gsap Scrolltrigger
gsap.from('.logo h2', {
    opacity: 0,
    delay: 1.5,
    y:-20
})
gsap.from('.container', {
    opacity: 0,
    rotation: 400,
    delay: 1.5,
    y:-20
})

gsap.from('.box', {
    opacity: 0,
    delay: 2,
    x:-20
})

gsap.from('.box2', {
    opacity: 0,
    delay: 2,
    x:20
})

gsap.from('.sidebar-socials', {
    opacity: 0,
    delay: 1.5,
    y:20
})


const name_letters = document.querySelector('.hero-nm')
gsap.from(name_letters.children ,{
    opacity: 0,
    x: 0,
    duration: 1,
    delay: 2.2,
    stagger: {
        amount: 1
    }
})

gsap.from('.hero_body .sml-nm', {
    opacity: 0,
    delay: 1.5,
    y:20
})
gsap.from('.hero_body h2', {
    opacity: 0,
    delay: 2,
    y:20
})

gsap.from('.hero_body p', {
    opacity: 0,
    delay: 2.5,
    x:20
})

gsap.from('.btn_con', {
    opacity: 0,
    delay: 2.5,
    y:20
    
})




gsap.from(".abt_sec", {
    scrollTrigger: ".if_txt", // start the animation when ".box" enters the viewport (once)
    opacity: 0,
    x: -400,
    duration: 2,
})







