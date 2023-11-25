let gridRow = document.getElementsByTagName('tr');
let gridCircles = document.getElementsByTagName('td');
let turn = document.querySelector('#currplayer');
let dics = document.querySelectorAll('.disc');
//Storing player1 nickname and disc color.
let player1 = localStorage.getItem('nickName1');
let player1discColor = 'red';
//Storing player2 nickname and disc color.
let player2 = localStorage.getItem('nickName2');
let bonus = document.getElementById("Message");
let player2discColor = 'yellow';
//made an array for random messages to show when everytime you click to play the game.
messages = ["Stellar",
    "Apex",
    "Invincible",
    "Paramount",
    "Nebula",
    "Polaris",
    "Arcturus",
    "Aldebaran",
    "Deneb",
    "Altair",
    "Spica",
    "Capella",
    "Canopus",
    "Regulus"
]

//created a function to create random messages on screen.
function random() {
    let Element = document.getElementById('Message');
    let index = Math.floor(Math.random() * messages.length);
    Element.innerHTML = "";//created an empty string to store the message later.
    let text = document.createElement('p');
    text.innerText = messages[index];
    text.classList.add("pop");
    text.addEventListener("animationend", () => {
        text.remove();
    });//learnt from W3 schools how to end animation in javascript.
    Element.append(text);//store the message by appending.
}

let whoIsPlaying = 0;//to track the player
let winner;
turn.innerHTML = `${player1}'s turn!`
document.addEventListener("DOMContentLoaded", function () {//when page is loaded the audio will load.
    let clickSound = new Audio("./assets/audio_click.mp3");
    for (let i = 0; i < gridCircles.length; i++) {
        gridCircles[i].addEventListener('click', (e) => {
            clickSound.play();//evertime user clicks it will play the sound of click.
            random();//everytime user clicks it will create random messages.
        });
    };
});

//for background audio.
document.addEventListener('DOMContentLoaded', function () {
    let audio = new Audio("./assets/audio_bgMusic.mp3");
    audio.loop = true;
    audio.volume = 0.3;
    audio.play();
});

//to check if the color of circles are matching or not.
function checkIfMatch(first, second, third, fourth) {
    let colors = [first, second, third, fourth];
    return colors.every(color => color === first && color !== 'white' && color !== undefined);
}

//for vertical check.
function CheckIfVertical() {
    for (let j = 0; j < 7; j++) {
        for (let item = 0; item < 3; item++) {
            if (checkIfMatch(gridRow[item].children[j].style.backgroundColor,
                gridRow[item + 1].children[j].style.backgroundColor,
                gridRow[item + 2].children[j].style.backgroundColor,
                gridRow[item + 3].children[j].style.backgroundColor)) {
                return true;
            };
        }
    }
}
// for horizontal check
function CheckIfHorizontal() {
    for (let item = 0; item < gridRow.length; item++) {
        for (let j = 0; j < 4; j++) {
            if (checkIfMatch(gridRow[item].children[j].style.backgroundColor,
                gridRow[item].children[j + 1].style.backgroundColor,
                gridRow[item].children[j + 2].style.backgroundColor,
                gridRow[item].children[j + 3].style.backgroundColor)) {
                return true;
            }
        }
    }
}

// for diagonal starting from bottom right to the top left.
function CheckIfDiagonal1() {
    for (let j = 0; j < 4; j++) {
        for (let item = 0; item < 3; item++) {
            if (checkIfMatch(gridRow[item].children[j].style.backgroundColor,
                gridRow[item + 1].children[j + 1].style.backgroundColor,
                gridRow[item + 2].children[j + 2].style.backgroundColor,
                gridRow[item + 3].children[j + 3].style.backgroundColor)) {
                return true;
            }
        }
    }
}

// for diagonal starting from bottom left to the top right.
function CheckIfDiagonal2() {
    for (let j = 0; j < 4; j++) {
        for (let item = 5; item > 2; item--) {
            if (checkIfMatch(gridRow[item].children[j].style.backgroundColor,
                gridRow[item - 1].children[j + 1].style.backgroundColor,
                gridRow[item - 2].children[j + 2].style.backgroundColor,
                gridRow[item - 3].children[j + 3].style.backgroundColor)) {
                return true;
            }
        }
    }
}

// if the slot is full and no other check conditions works, then the condition holds draw condition.
function Draw() {
    let full = [];
    for (let i = 0; i < gridCircles.length; i++) {
        if (gridCircles[i].style.backgroundColor !== 'white') {
            full.push(gridCircles[i]);
        }
    }
    if (full.length === gridCircles.length) {
        return true;
    }
}

// variables to store the score.
let Player1Score, Player2Score;
let result;

//main function(changes the player image according to the background colour and store the score in local storage.)
function changePlayer(e) {
    //when u click any circle from the grid, it will store the column index which is cell index.
    let columnIndex = e.target.cellIndex;
    console.log(columnIndex);
    let item = [];//it will store the item with white background.

    for (let i = 5; i > -1; i--) {
        if (gridRow[i].children[columnIndex].style.backgroundColor == 'white') {
            item.push(gridRow[i].children[columnIndex]);//it will push the 'td' element in the array which has white background.
            console.log(item);
            if (whoIsPlaying == 0) {
                item[0].style.backgroundImage = `url('./assets/astronautcoin.png')`;
                item[0].style.backgroundColor = 'red';
                if (CheckIfHorizontal() || CheckIfVertical() || CheckIfDiagonal1() || CheckIfDiagonal2()) {
                    turn.textContent = `${player1} WINS!!`;
                    turn.style.color = player1discColor;
                    result = `${player1} WINS!!`;
                    Player1Score = `${player1}:100`;
                    Player2Score = `${player2}:0`;
                    localStorage.setItem("Player1Score", Player1Score);
                    localStorage.setItem("Player2Score", Player2Score);
                    localStorage.setItem('score', result);
                    window.location.href = "./gameover.html";
                } else if (Draw()) {
                    turn.textContent = 'DRAW!';
                    result = "Draw";
                    localStorage.setItem('score', result);
                    window.location.href = "./gameover.html";
                } else {
                    turn.textContent = `${player2}'s turn`
                    return whoIsPlaying = 1;
                }
            } else {
                item[0].style.backgroundImage = `url('./assets/ufo.png')`;
                item[0].style.backgroundColor = 'yellow';
                if (CheckIfHorizontal() || CheckIfVertical() || CheckIfDiagonal1() || CheckIfDiagonal2()) {
                    turn.textContent = `${player2} WINS!!`;
                    turn.style.color = player2discColor;
                    result = `${player2} WINS!!`;
                    Player2Score = `${player2}: 100`;
                    Player1Score = `${player1}: 0`;
                    localStorage.setItem("Player1Score", Player1Score);
                    localStorage.setItem("Player2Score", Player2Score);
                    localStorage.setItem('score', result);
                    window.location.href = "./gameover.html";
                } else if (Draw()) {
                    turn.textContent = 'DRAW!';
                    result = "Draw";
                    localStorage.setItem('score', result);
                } else {
                    turn.textContent = `${player1}'s turn`;
                    return whoIsPlaying = 0;
                }

            }
        }
    }
}

function changeOnClick() {
    Array.from(gridCircles).forEach(circle => {
        circle.addEventListener('click', changePlayer);//on clicking it will change the image.
        circle.style.backgroundColor = 'white';//it will change the background color to white again.
    });
}
changeOnClick();

