

// Dark Mode Toggle
const dark = document.querySelector('.input');
dark.onclick = function() {
    document.documentElement.classList.toggle('bgdark')
}


// Loader
function hideLoader () {
    document.getElementById('loader-holder').classList.add('hide-loader')
  }

  window.onload = function(){
    setTimeout(hideLoader, 1900)
  }