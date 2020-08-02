let scissors = document.getElementById("scissors");

let rock = document.getElementById("rock");

let paper = document.getElementById("paper");

let enemy = document.querySelector(".enemy");

let result = document.querySelector(".result");

const tie = "비김 ;;"
const win = "이김 ㅎㅎ"
const lose = "짐 ㅠㅠ"

let gameResult = {
    '✌': {
        '✌': tie,
        '✊': lose,
        '✋': win
    },
    '✊': {
        '✌': win,
        '✊': tie,
        '✋': lose
    },
    '✋': {
        '✌': lose,
        '✊': win,
        '✋': tie
    }
}

let candidate = ['✌', '✊', '✋'];

let enemyResult;

let select;

let array = [scissors, rock, paper]
array.forEach((e) => {
    e.addEventListener("click",  () => {
        select = e.textContent;
        enemyResult = candidate[Math.floor(Math.random() * 3)];
        enemy.textContent = enemyResult;
        result.textContent = gameResult[select][enemyResult];
    })
})