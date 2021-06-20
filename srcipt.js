function playSound(e){
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`)
    
    const key= document.querySelector(`div[data-key="${e.keyCode}"]`)
    key.classList.add('playing')
    audio.currentTime=0;
    audio.play();
}
function removeTransition(e){
    console.log(e)
if(e.propertyName!=='transform'){
    return
}
e.target.classList.remove('playing');
}
const keys=document.querySelectorAll('.keys')
keys.forEach((key =>{
    key.addEventListener('transitionend',removeTransition)
}))

window.addEventListener('keydown',playSound)
