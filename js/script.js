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
