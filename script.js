// Get references to elements
const toggleButton = document.getElementById('toggle-btn');
const leftSec = document.getElementById('leftsec');
const sidebar = document.getElementById('sidebar');

// Add event listener to toggle button
toggleButton.addEventListener('click', () => {
  // Toggle the visibility of the sidebar
  sidebar.classList.toggle('visible');
  
  // Adjust the width of the left section dynamically
  if (sidebar.classList.contains('visible')) {
    leftSec.style.width = '25%';
  } else {
    leftSec.style.width = '10%';
  }
});
