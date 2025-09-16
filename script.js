const textarea = document.getElementById('text-input');
const charCount = document.getElementById('char-count');
const maxChars = 50;

textarea.addEventListener('input', () => {
  let text = textarea.value;

  if (text.length > maxChars) {
    text = text.substring(0, maxChars);
    textarea.value = text;
  }

  charCount.textContent = `Character Count: ${text.length}/50`;

  if (text.length === maxChars) {
    charCount.classList.add('maxed');
  } else {
    charCount.classList.remove('maxed');
  }
});
    