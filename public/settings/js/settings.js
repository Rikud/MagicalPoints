const soundIcon = document.getElementsByClassName('sound-icon')[0];
const musicIcon = document.getElementsByClassName('music-icon')[0];

let soundOn = true;
let musicOn = true;

const soundInput = document.getElementsByClassName('sound-input')[0];
const musicInpit = document.getElementsByClassName('music-input')[0];

soundIcon.addEventListener('click', () => {
  if (soundOn) {
    soundIcon.url = '../icons/audioOff.png';
  }
  else {
    soundIcon.url = '../icons/audioOn.png';
  }
});