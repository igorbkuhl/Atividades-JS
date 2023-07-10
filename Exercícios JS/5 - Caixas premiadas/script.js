const boxes = ["red", "green", "blue", "yellow", "pink"];
let index = 0;

const start = () => {
    // Exibe as caixas
    document.getElementById("boxArea").classList.remove("hidden");
    document.getElementById("boxArea").classList.add("shown");

    // Oculta o botão de iniciar
    document.getElementById("startButton").classList.remove("shown");
    document.getElementById("startButton").classList.add("hidden");

    // Exibe o botão de sortear
    document.getElementById("raffleButton").classList.remove("hidden");
    document.getElementById("raffleButton").classList.add("shown");
}

const winner = (sortedValue) => {
    const boxElement = document.querySelector(sortedValue);
    boxElement.classList.add("winner");

    boxElement.style.backgroundColor = "slateblue";
  }

const raffle = () => {
    let randomIndex = Math.floor(Math.random() * boxes.length);
    let sortedValue = boxes[randomIndex];

    winner(sortedValue);

    console.log(`O vencedor é ${sortedValue}`);
}