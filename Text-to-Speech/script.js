if ('speechSynthesis' in window) {
    //Broswer supports speech synthesis 🎉
   }else{
     // Speech Synthesis Not Supported 😣
     alert("Sorry, your browser doesn't support text to speech!");
   }

   const msg = new SpeechSynthesisUtterance();
   let voices = [];
   const voicesMenu = document.querySelector('[name="voice"]');
   const options = document.querySelectorAll('[name="text"]');
   const speakButton = document.querySelector('button');

   msg.text = document.querySelector('[name="text"]').value;

   function populateVoices(){
     voices = this.getVoices();
     voicesMenu.innerHTML = voices
      .filter(voice => voice.lang.includes('en'))
      .map(voice=> `<option value = "${voice.name}"> ${voice.name} (${voice.lang})</option>`)
      .join('');
   }

   function setVoice(){
     msg.voice = voices.find(voice => voice.name === this.value);
     toggle();
   }

   function toggle(startOver = true) {
    speechSynthesis.cancel();
    if (startOver) {
      speechSynthesis.speak(msg);
    }
  }

  function setOption() {
    msg[this.name] = this.value;
    toggle();
  }


   speechSynthesis.addEventListener('voiceschanged', populateVoices);
   voicesMenu.addEventListener('change', setVoice);
   options.forEach(option => option.addEventListener('change', setOption));
   speakButton.addEventListener('click', toggle);
