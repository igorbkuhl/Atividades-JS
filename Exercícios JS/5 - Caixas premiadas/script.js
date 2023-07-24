const boxes = [
    red = document.querySelector("#red"),
    green = document.querySelector("#green"),
    blue = document.querySelector("#blue"),
    yellow = document.querySelector("#yellow"),
    pink = document.querySelector("#pink")
];

const start = () => {
    // Oculta o botão de iniciar
    document.getElementById("startButton").classList.remove("shown");
    document.getElementById("startButton").classList.add("hidden");

    // Exibe as caixas
    document.getElementById("boxArea").classList.remove("hidden");
    document.getElementById("boxArea").classList.add("shown");

    // Exibe o botão de sortear
    document.getElementById("raffleButton").classList.remove("hidden");
    document.getElementById("raffleButton").classList.add("shown");
}

const shuffle = (randomIndex) => {
    randomIndex = Math.floor(Math.random() * boxes.length);
    boxes[randomIndex].style.backgroundColor = `#ba72e4`;

    // console.log(`O vencedor é ${boxes[randomIndex]}`);
    
}