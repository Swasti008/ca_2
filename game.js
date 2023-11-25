//playButton
let playButton = document.getElementById("play");
playButton.addEventListener("click",function(){
    window.location.href="./instruction.html";
})
//audio
document.addEventListener('DOMContentLoaded', function() {
    var audio = new Audio("./assets/audio_bgMusic.mp3");
    audio.loop = true;
    audio.play();
});

