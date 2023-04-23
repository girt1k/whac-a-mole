const boxes = document.querySelectorAll(".box");
const mole = document.querySelector(".mole");
const restart = document.getElementById("restart");
const timeCounter = document.getElementById("time");
const scoreCounter = document.getElementById("score");
const Text = document.querySelector("#intro");
const radio = document.getElementsByName("difficulty");


let score = 0;
let currentBox = 0;
let isLocked = false;
let currentTime = 10;

let mTimer = 700;

radio.forEach((radio) => {
    radio.addEventListener("click", () => {
        if (radio.value == "1") {
            mTimer = 1000;
            return;
        } else if (radio.value == "2") {
            mTimer = 300;
            return;
        } else if (radio.value == "3") {
            mTimer = 100;
            return;
        }
    })
})

function showMole() {
    boxes.forEach((box) => {
        box.classList.remove("mole");
    });
    isLocked = false;
    let randomBox = boxes[Math.floor(Math.random() * 9)];

    randomBox.classList.add("mole");

    currentBox = randomBox.id;
}

function start() {
    score = 0;
    currentTime = 10;
    moleTimer = setInterval(showMole, mTimer);
    timeTimer = setInterval(countTime, 1000);

    Text.innerHTML = "Let's play!";
    timeCounter.innerHTML = currentTime;
    scoreCounter.innerHTML = score;

    restart.innerHTML = "Restart!";
}



boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.id == currentBox) {
            if (isLocked) return;

            score++;
            scoreCounter.innerHTML = score;
            box.classList.remove("mole");
            isLocked = true;
        }
    });
});

function countTime() {
    currentTime--;
    timeCounter.innerHTML = currentTime;

    if (currentTime == 0) {
        clearInterval(timeTimer);
        clearInterval(moleTimer);
        Text.innerHTML = `Your score: ${score}!`;
        restart.innerHTML = "Restart!";
    }
}

function restartGame() {
    clearInterval(timeTimer);
    clearInterval(moleTimer);
    start();
}

restart.addEventListener("click", () => {
    if (restart.textContent === "Restart!") {
        restartGame();
    } else if (restart.textContent === "Start!") {
        start();
    }
})