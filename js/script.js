const button = document.getElementById('reveal-btn');
const hiddenText = document.getElementById('hidden-text');

button.addEventListener('click', () => {
  if (hiddenText.style.display === 'none' || hiddenText.style.display === '') {
    hiddenText.style.display = 'block';
    button.textContent = 'Hide Secret';
  } else {
    hiddenText.style.display = 'none';
    button.textContent = 'Show Secret';
  }
});
