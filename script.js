//your JS code here. If required.
function playSound(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);

  if (!audio) return;

  audio.currentTime = 0; // Rewind to the start
  audio.play();
  key.classList.add('playing');
}

// Function to handle keydown event
function handleKeyDown(event) {
  const keyCode = event.keyCode;
  playSound(keyCode);
}

// Function to remove the 'playing' class
function removeTransition(event) {
  if (event.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

// Add event listeners
window.addEventListener('keydown', handleKeyDown);

const keys = document.querySelectorAll('.key');
keys.forEach((key) => {
  key.addEventListener('transitionend', removeTransition);
});
In this code, we have an HTML container with the class "keys", and each keystroke button has a class "key". The data-key attribute of each key represents the respective ASCII key code. The CSS styles the layout of the keys, and the JavaScript handles the keydown event, plays the corresponding sound, and adds/removes the 'playing' class for visual effect.

To make this code work, save the HTML code in an HTML file (e.g., "index.html"), the CSS code in a CSS file (e.g., "styles.css"), and the JavaScript code in a JS file (e.g., "script.js"). Place all the files in the same directory and open the HTML file in a web browser. Now, when you press the keys A, S, D, F, G, H, J, K, or L, you should hear a sound associated with each key press.

Note: To make this example work, you need to have sound files associated with each key. You can add an audio element with the respective sound files and adjust the code accordingly.






