// Define a área das caixas e cria um seletor de números automáticos
const boxes = ["red", "green", "blue", "yellow", "pink"];
var index = 0;

// Inicia uma função usando o número aleatório
const raffle = () => {
// Re-define o valor aleatório
    const nextIndex = index + randomValue <= boxes.length;
// Seleciona os index das caixas  
    const unchosenBox = document.querySelector(`[data-index="${index}"]`),
        chosenBox = document.querySelector(`[data-index="${nextIndex}"]`);
  
// Define status de selecionado e não selecionado
    unchosenBox.dataset.status = "unchosen";
    chosenBox.dataset.status = "chosen";
          
    index = nextIndex;
  
  
    const BOXES = [...boxes["boxes[]"].values()].map((i) => i.value);
    var randomValue = Math.floor(Math.random() * 5);
    const name = BOXES[nertIndex];
    name.classList.add("show");

    console.log(nextIndex);
}