// Cria uma array e um contador
var participants = [];
var counter = 0;

// Declara a função do sorteio
function raffle(winner) {
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
    var randomIndex = Math.floor(Math.random() * participants.length);
    var sortedValue = participants[randomIndex].name;

    console.log(`O vencedor do sorteio é ${sortedValue}!`);
    winner = `O vencedor do sorteio é ${sortedValue}!`;
  } else {
    alert("Informe no mínimo dois participantes.");
  }
}

raffle();