const boxes = document.querySelectorAll(".box");
const mole =document.querySelector(".mole");
const restart = document.getElementById("restart");
const timeCounter = document.getElementById("time");
const scoreCounter = document.getElementById("score");

let score = 0;
let currentBox = 0;
let isLocked =false;
let currenttime = 10;

function showMole(){
    boxes.forEach ((box) => {
        box.classList.remove("mole");
    });
    isLocked = false;
    let randomBox = boxes[Math.floor(Math.random() * 9)];
    randomBox.classList.add("mole");
    currentBox = randomBox.id;
}

function start(){
    score = 0;
    currenttime = 10;
    moleTimer = setInterval(showMole, 300);
    timeTimer = setInterval(counntTime, 1000);
}

start();

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(box.id == currentBox){
            if(isLocked) return;

            score++;
            scoreCounter.innerHTML = score;
            box.classList.remove("mole");
            isLocked = true;
        }
    });
});

function counntTime(){
    currenttime--;
    timeCounter.innerHTML = currenttime;

    if(currenttime == 0){
        clearInterval(timeTimer);
        clearInterval(moleTimer);
        alert('GAME OVER! \n Твой счет: ' + score);
    }
}

function restartGame(){
    clearInterval(timeTimer);
    clearInterval(moleTimer);
    start();
}

restart.addEventListener("click", restartGame);