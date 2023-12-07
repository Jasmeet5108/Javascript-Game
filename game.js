// Snake, Water, Gun game

let game = document.getElementById("game");
let player = prompt("Enter S, W or G");
let cpui = Math.floor(Math.random() * 3);
let arr = ["S", "W", "G"];
let cpu = arr[cpui];

const match = (cpu, player) => {
    if (cpu === player) {
        return "Match Tied";
    }
    else if (cpu === "S" && player === "W") {
        return "CPU";
    }
    else if (cpu === "S" && player === "G") {
        return "PLAYER";
    }
    else if (cpu === "G" && player === "W") {
        return "PLAYER";
    }
    else if (cpu === "G" && player === "S") {
        return "CPU";
    }
    else if (cpu === "W" && player === "S") {
        return "PLAYER";
    }
    else if (cpu === "W" && player === "G") {
        return "CPU";
    }
}

let result = match(cpu, player);
// game.innerHTML = `CPU: ${cpu} <br> player: ${player} <br> The winner is: ${result.toUpperCase()}`;
game.innerHTML = `<p>Player: ${player}</p> <p>Computer: ${cpu}</p> <p>The winner is: ${result.toUpperCase()}</p>`;