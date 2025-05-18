// Play sound
function playSound() {
  document.getElementById("bgSound").play();
}

// Stop sound
function stopSound() {
  const bgSound = document.getElementById("bgSound");
  bgSound.pause();
  bgSound.currentTime = 0;
}
function googleTranslateElementInit() {
        new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,id,es,fr',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
      }, 'google_translate_element');
    }
    