// Gsap Scrolltrigger
gsap.registerPlugin(ScrollTrigger);

gsap.from('.logo h2', {
    opacity: 0,
    delay: 4,
    y:-20
})
gsap.from('.container', {
    opacity: 0,
    rotation: 400,
    delay: 4,
    y:-20
})

gsap.from('.box', {
    opacity: 0,
    delay: 4.5,
    x:-20
})

gsap.from('.box2', {
    opacity: 0,
    delay: 4.5,
    x:20
})

gsap.from('.sidebar-socials', {
    opacity: 0,
    delay: 4,
    y:20
})


const name_letters = document.querySelector('.hero-nm')
gsap.from(name_letters.children ,{
    opacity: 0,
    x: 0,
    duration: 1,
    delay: 4,
    stagger: {
        amount: 1
    }
})

gsap.from('.hero_body .sml-nm', {
    opacity: 0,
    delay: 3.5,
    y:20
})
gsap.from('.hero_body h2', {
    opacity: 0,
    delay: 3.5,
    y:20
})

gsap.from('.hero_body p', {
    opacity: 0,
    delay: 3.5,
    x:20
})

gsap.from('.btn_con', {
    opacity: 0,
    delay: 3.5,
    y:20
})

gsap.utils.toArray('li').forEach(li=>{
    gsap.fromTo(li,{
        opacity: 0,
        x: 150,
        skewX: 30
    },{
        opacity: 1,
        x: 0,
        skewX: 0,
        duration: 1,
        delay: .5,
        scrollTrigger: li
    })
})


gsap.from(".abt_sec", {
    scrollTrigger: ".if_txt", // start the animation when ".box" enters the viewport (once)
    opacity: 0,
    x: -400,
    duration: 2,
})


gsap.from('.project_img' ,{
    scrollTrigger: '.wrk-if',
    opacity: 0,
    scale: .5,
    duration: 1,
    delay: 1
})






