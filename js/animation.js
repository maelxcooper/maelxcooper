gsap.registerPlugin(ScrollTrigger);

let animationsInitialized = false;

function initializeAnimations() {
    // Your GSAP animation code here
    gsap.from('.logo h2', {
        opacity: 0,
        delay: 3,
        y: -20
    });
    gsap.from('.container', {
        opacity: 0,
        rotation: 400,
        delay: 3,
        y: -20
    });
    gsap.from('.box', {
        opacity: 0,
        delay: 3.5,
        x: -20
    });
    gsap.from('.box2', {
        opacity: 0,
        delay: 3.5,
        x: 20
    });
    gsap.from('.sidebar-socials', {
        opacity: 0,
        delay: 3,
        y: 20
    });

    const name_letters = $('.hero-nm');
    gsap.from(name_letters.children(), {
        opacity: 0,
        x: 0,
        duration: 1,
        delay: 4.5,
        stagger: {
            amount: 1
        }
    });

    gsap.from('.hero_body .sml-nm', {
        opacity: 0,
        delay: 4,
        y: 20
    });
    gsap.from('.hero_body h2', {
        opacity: 0,
        delay: 4,
        y: 20
    });

    gsap.from('.hero_body p', {
        opacity: 0,
        delay: 4,
        x: 20
    });

    gsap.from('.btn_con', {
        opacity: 0,
        delay: 3.5,
        y: 20
    });

    gsap.utils.toArray('li').forEach(li => {
        gsap.fromTo(li, {
            opacity: 0,
            x: 150,
            skewX: 30
        }, {
            opacity: 1,
            x: 0,
            skewX: 0,
            duration: 1,
            delay: 0.5,
            scrollTrigger: li
        });
    });

    gsap.from(".abt_sec", {
        scrollTrigger: ".skilled-list",
        opacity: 0,
        y: 20,
        duration: 1.5,
    });

    gsap.from('.if_pic', {
        scrollTrigger: '.abt_sec',
        opacity: 0,
        scale: 0.5,
        duration: 1,
        delay: 1
    });

    gsap.from(".exp_sec", {
        scrollTrigger: ".prwvr",
        opacity: 0,
        y: 20,
        duration: 1.5,
    });

    gsap.from(".work_sec", {
        scrollTrigger: ".project_content",
        opacity: 0,
        y: 20,
        duration: 1.5,
    });

    gsap.from(".contact", {
        scrollTrigger: ".con_title",
        opacity: 0,
        y: 20,
        duration: 2,
    });

    gsap.from('.project_img', {
        scrollTrigger: '.wrk-if',
        opacity: 0,
        scale: 0.5,
        duration: 1,
        delay: 1
    });
}

initializeAnimations();

// function handleResize() {
//     if ($(window).width() >= 1000 && !animationsInitialized) {
//         initializeAnimations();
//         animationsInitialized = true;
//     } else if ($(window).width() <= 1000 && animationsInitialized) {
//         // Remove all ScrollTrigger animations when window width is 1000px or below
//         ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//         animationsInitialized = false;
//     }
// }

// // Call handleResize initially
// handleResize();

// // Add event listener for window resize
// $(window).on('resize', handleResize);
