// Cria uma array e um contador
let participants = [];
let counter = 0;

// Declara a função do sorteio
const shuffle = (winner) => {
  // Inicia o loop de solicitações
  while(true) {

    // Cria uma array com o contador
    participants[counter] = {};
    participants[counter].name = prompt('Insira o nome do ' + (counter + 1) + 'º participante.');
    // Encerrando o loop de solicitações
    if(!confirm('Deseja adicionar mais um participante?')) {
      break;
    }

    counter++;
  }

  // Informa o vencedor do sorteio
  if (participants.length >= 2) {
    let randomIndex = Math.floor(Math.random() * participants.length);
    let sortedValue = participants[randomIndex].name;

    console.log(`O vencedor do sorteio é... ${sortedValue}!`);
    winner = `O vencedor do sorteio é...<br/>${sortedValue}!`;
    document.querySelector('p#winnerText').innerHTML = winner;
  } else {
    alert("Informe no mínimo dois participantes.");
  }
}

shuffle();