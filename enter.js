let startButton = document.getElementById("start");
let nickname1 = document.getElementById("Nname1")
let nickname2 = document.getElementById("Nname2")
// store name in local storage
function storeName() {
    let nickname1 = document.getElementById("Nname1").value
    let nickname2 = document.getElementById("Nname2").value
   
    if (nickname1.trim() !== ''&& nickname2.trim() !== '') {
        localStorage.setItem('nickName1', nickname1);
        localStorage.setItem('nickName2', nickname2);
        //start button
        startButton.addEventListener("click",function(){
            window.location.href="./main.html";
        })
    } //if not entered nick name.
    else {
        alert('Please enter a nick name.');
    }
}
//audio
document.addEventListener('DOMContentLoaded', function() {
    var audio = new Audio("./assets/audio_bgMusic.mp3");
    audio.loop = true;
    audio.play();
});