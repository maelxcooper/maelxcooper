// Navbar Toggle
// let menu = document.querySelector('#toggle_menu');
// let navbar = document.querySelector('.navbar');
// let navToggle = document.querySelector('.toggle-right-nav');

// menu.onclick = function()  {
//         menu.classList.toggle('bx-x');
//         navbar.classList.toggle('open');
//         navToggle.classList.toggle('toggle-nav');
//         navToggle.style.display = 'block';
        
// }


// Window Resize
// window.onresize = function() {
//     if (window.innerWidth > 1000) {
//         menu.classList.remove('bx-x');
//         navbar.classList.remove('open');
//         navToggle.classList.remove('toggle-nav')
//     }
// }

// For Loading Screen
// function hideLoader() {
//     document.getElementById('loader-holder').classList.add('hide-loader')
// }
// window.onload = function(){
//     setTimeout(hideLoader, 2000);
// }



// Dark Mode Toggle
const dark = document.querySelector('.input');
dark.onclick = function() {
    document.documentElement.classList.toggle('bgdark')
}



// Cursor
// const cursorOutline = document.querySelector('.cursor-outline');

// window.addEventListener('mousemove', function (e) {

//     const posX = e.clientX;
//     const posY = e.clientY;

//     cursorOutline.style.left = `${posX}px`;
//     cursorOutline.style.top = `${posY}px`;

//     cursorOutline.animate({
//         left: `${posX}px`,
//         top: `${posY}px`
//     }, { 
//         duration: 600, fill: 'forwards'
//     });

//     document.addEventListener('click', function(){
//         cursorOutline.classList.add("cursor-expand");

//         setTimeout(function(){
//             cursorOutline.classList.remove("cursor-expand");
//         }, 500)
//     })

// });



