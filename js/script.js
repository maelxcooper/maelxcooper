// Function to toggle dark mode
function toggleDarkMode() {
  const isDarkMode = document.documentElement.classList.toggle('bgdark');
  // Save the current theme preference to local storage
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Check if there's a theme preference saved in local storage
const savedTheme = localStorage.getItem('theme');
console.log('Saved theme:', savedTheme);
if (savedTheme !== 'dark') {
  // Apply light mode if the saved theme is not 'dark'
  document.documentElement.classList.remove('bgdark');
}

// Dark Mode Toggle
const dark = document.querySelector('.input');
dark.onclick = function() {
  toggleDarkMode();
}

// Loader
function hideLoader() {
  document.getElementById('loader-holder').classList.add('hide-loader');
  requestAnimationFrame(function() {
      window.scrollTo(0, 0); 
  });
}

window.onload = function() {
  setTimeout(hideLoader, 1800);
}
