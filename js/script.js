// Dark Mode Toggle
const dark = document.querySelector(".input");
dark.onclick = function () {
  document.documentElement.classList.toggle("bgdark");
};

// Loader
// function hideLoader() {
//   document.getElementById("loader-holder").classList.add("hide-loader");
//   requestAnimationFrame(function () {
//     window.scrollTo(0, 0);
//   });
// }


// const hideLoader = document.getElementById('#loader-holder');

// window.onload = function () {
//   setTimeout(hideLoader, 1800);
// };

const hideLoader = document.getElementById('loader-holder');

window.onload = () => {
  setTimeout(() => {
    hideLoader.style.display = 'none';

    if (window.getComputedStyle(hideLoader).display === 'none')
      {
        document.documentElement.classList.add('al');
      }
  }, 1800)
}


// Swapping
function performSwapping() {
  const windowWidth = window.innerWidth;
  const socMed = document.querySelector(".sidebar-socials");
  const secCon = document.querySelector(".contact");
  const box = document.querySelector(".box");

  if (windowWidth <= 768) {
    secCon.insertAdjacentElement("afterend", socMed);
  } else {
    box.insertAdjacentElement("beforebegin", socMed);
  }
}

document.addEventListener("DOMContentLoaded", performSwapping);
window.addEventListener("resize", performSwapping);

// Bouncing Letters
const bounceLetter = document.querySelectorAll(".hero-nm span");

bounceLetter.forEach((span) => {
  span.addEventListener("mouseover", function () {
    this.classList.add("bounce");
    setTimeout(
      function () {
        this.classList.remove("bounce");
      }.bind(this),
      1000
    );
  });
});
