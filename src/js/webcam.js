import '../css/style.css';

const button = document.getElementById('continue-button');

// Needs JSON.parse to convert the string back to an object, otherwise we get e.g. "\"test\""
const subjID = JSON.parse(localStorage.getItem('subjID')) || 'test';

// Use the German/Leipzig default settings
const webcam = 'true';

const handleContinueClick = (event) => {
  event.preventDefault();
  window.location.href = `https://devpsy.web.leuphana.de/orev-pwa/orev.html?subjID=${subjID}&webcam=${webcam}`;
};

button.addEventListener('click', handleContinueClick, { capture: false });
