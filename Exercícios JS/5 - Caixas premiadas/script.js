const boxes = [
    document.querySelector("#red"),
    document.querySelector("#green"),
    document.querySelector("#blue"),
    document.querySelector("#yellow"),
    document.querySelector("#pink")
];

let items = {
    startButton: document.querySelector("button#startButton"),
    boxArea:document.querySelector('div#boxArea'),
    shuffleButton: document.querySelector('button#shuffleButton'),
    restartButton: document.querySelector('button#restartButton')
}

const start = () => {
    // Redefine as cores das caixas
    boxes[0].style.backgroundColor = '#f35954';
    boxes[1].style.backgroundColor = '#5edd69';
    boxes[2].style.backgroundColor = '#3178fc';
    boxes[3].style.backgroundColor = '#e9f540';
    boxes[4].style.backgroundColor = '#ee7593';

    // Oculta o botão de iniciar
    items.startButton.classList.replace("shown", 'hidden');

    // Exibe as caixas
    items.boxArea.classList.replace("hidden", 'shown');

    // Exibe o botão de sortear
    items.shuffleButton.classList.replace("hidden", 'shown');
}
items.startButton.addEventListener('click', start);

const shuffle = (randomIndex) => {
    randomIndex = Math.floor(Math.random() * boxes.length);
    boxes[randomIndex].style.backgroundColor = `#ba72e4`;    

    // Oculta o botão de sortear
    items.shuffleButton.classList.replace("shown", 'hidden');

    // Exibe o botão de reiniciar
    items.restartButton.classList.replace('hidden', 'shown');
}
items.shuffleButton.addEventListener('click', shuffle);

const restart = () => {
    items.startButton.classList.replace('hidden', 'shown');
    items.boxArea.classList.replace('shown', 'hidden');
    items.restartButton.classList.replace('shown', 'hidden');
}
items.restartButton.addEventListener('click', restart);