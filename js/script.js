// Dark Mode Toggle
const dark = document.querySelector('.input');
dark.onclick = function() {
  document.documentElement.classList.toggle('bgdark');
}

// Loader
function hideLoader() {
  document.getElementById('loader-holder').classList.add('hide-loader');
  // Scroll to top when the page loads
  requestAnimationFrame(function() {
      window.scrollTo(0, 0); 
  });
}

window.onload = function() {
  setTimeout(hideLoader, 1800);
}


// Swapping
const windowWidth = window.innerWidth;
const socMed = document.querySelector('.sidebar-socials');
const secCon = document.querySelector('.contact');
const box = document.querySelector('.box');

if (windowWidth <= 768) {
  secCon.insertAdjacentElement('afterend', socMed);
} else {
  box.insertAdjacentElement('beforebegin', socMed);
}
