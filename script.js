window.addEventListener('keydown', playSound);

    function playSound(e) {
      const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
      if (!key) return; // Exit if no corresponding key found
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      if (!audio) return; // Exit if no corresponding audio found

      key.classList.add('playing');
      audio.currentTime = 0;
      audio.play();
    }

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));

    function removeTransition(e) {
      if (e.propertyName !== 'transform') return; // Skip if it's not a transform transition
      this.classList.remove('playing');
    }