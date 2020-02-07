document.addEventListener('keydown', OnPress)

function OnPress(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return;
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(audio)
    console.log(key)
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    key.addEventListener('transitionend', RemoveTransition);
}

function RemoveTransition(e) {
    console.log(e);
    this.classList.remove('playing');
}

