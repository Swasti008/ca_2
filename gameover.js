let abouts = document.getElementById("about");
let madeByUser = document.getElementById("madeBy");
let scoreBoard = document.getElementById("score");
let resultBoard1 = document.getElementById("result1");
let resultBoard2 = document.getElementById("result2");
var scores = localStorage.getItem("score");
var result1 =localStorage.getItem("Player1Score");
var result2 = localStorage.getItem("Player2Score");
scoreBoard.innerHTML = scores;
resultBoard1.innerHTML = result1;
resultBoard2.innerHTML = result2;
//replay button
let replayButton = document.getElementById("playAgain");
replayButton.addEventListener("click",function(){
    window.location.href="./main.html";
})
//home
let home = document.getElementById("home");
home.addEventListener("click",function(){
    window.location.href="./game.html";
})
// popup about
let click=0;
let aboutIcons = document.getElementById("aboutIcon");
aboutIcons.addEventListener("click",function(){
   if(click%2==0){
    abouts.style.visibility="visible";
    click++;
   }
   else{
    abouts.style.visibility="hidden";
    click++;
   }
   
})
// for profile (made by icon)
let profileIcon = document.getElementById("user");
profileIcon.addEventListener("click",function(){
   if(click%2==0){
    madeByUser.style.visibility="visible";
    click++;
   }
   else{
    madeByUser.style.visibility="hidden";
    click++;
   }
   
})
//for random message on winning
items=[
    "Bravo!",
    "Exemplary!",
    "Superb!",
    "Outstanding!",
    "Masterful!",
    "Incredible!",
    "Unbeatable!",
    "Marvelous!",
    "Epic win!",
    "First place!",
    "Impressive!",
    "Kudos!",
    "Stellar!",
    "Majestic!"
]
function randomMessage() {
    const index = Math.floor(Math.random()*items.length);
    const Element = document.getElementById("Message");
    Element.textContent=items[index];
}
randomMessage();
//audio
document.addEventListener('DOMContentLoaded', function() {
    var audio = new Audio("./assets/audio_wonGame.mp3");
    audio.volume = 0.2;
    audio.play();
    setTimeout(function() {
        // after 10 sec it will stop
        audio.pause();
    }, 10000);
});