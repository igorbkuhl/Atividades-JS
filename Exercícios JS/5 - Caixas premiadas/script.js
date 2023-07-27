const boxes = [
    document.querySelector("#red"),
    document.querySelector("#green"),
    document.querySelector("#blue"),
    document.querySelector("#yellow"),
    document.querySelector("#pink")
];

const start = () => {
    document.querySelector("#startButton").addEventListener("click", start);

    // Oculta o botão de iniciar
    document.querySelector("#startButton").classList.remove("shown");
    document.querySelector("#startButton").classList.add("hidden");

    // Exibe as caixas
    document.querySelector("#boxArea").classList.remove("hidden");
    document.querySelector("#boxArea").classList.add("shown");

    // Exibe o botão de sortear
    document.querySelector("#shuffleButton").classList.remove("hidden");
    document.querySelector("#shuffleButton").classList.add("shown");
}

const shuffle = (randomIndex) => {
    document.querySelector("#shuffleButton").addEventListener("click", shuffle);

    randomIndex = Math.floor(Math.random() * boxes.length);
    boxes[randomIndex].style.backgroundColor = `#ba72e4`;    

    // Oculta o botão de sortear
    document.querySelector("#shuffleButton").classList.remove("shown");
    document.querySelector("#shuffleButton").classList.add("hidden");
    
}