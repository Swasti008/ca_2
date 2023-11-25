//next arrow
let next = document.getElementById("nextButton");
next.addEventListener("click",function(){
    window.location.href="./enter.html";
})
//for adding background music
document.addEventListener('DOMContentLoaded', function() {
    var audio = new Audio("./assets/audio_bgMusic.mp3");
    audio.loop = true;
    audio.play();
});
