// Function to toggle dark mode
function toggleDarkMode() {
  const isDarkMode = document.documentElement.classList.toggle('bgdark');
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Check if there's a theme preference saved in local storage
const savedTheme = localStorage.getItem('theme');
console.log('Saved theme:', savedTheme);
if (savedTheme === 'dark') {
  // Apply dark mode if the saved theme is 'dark'
  document.documentElement.classList.add('bgdark');
} else if (savedTheme === 'light') {
  // Apply light mode if the saved theme is 'light'
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
  // Scroll to top when the page loads
  requestAnimationFrame(function() {
      window.scrollTo(0, 0); 
  });
}

window.onload = function() {
  setTimeout(hideLoader, 1800);
}
