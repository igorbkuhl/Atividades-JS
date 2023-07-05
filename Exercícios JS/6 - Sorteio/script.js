// 1. Solicitar os nomes com prompt
// 2. Solicitar mais um nome após o outro
// 3. Sortear um dos nomes inseridos e 
// informar que foi o vencedor do sorteio.
//////////////////////////////////////////


var participants = [];
var counter = 0;

while(true) {
    

  participants[counter] = new Array();
  participants[counter]['name'] = prompt('Insira o nome do ' + (counter + 1) + 'º participante.');

  function randomName() {
    const entries = [...participants['name'].values()].map((i) => i.value);
    const rand = Math.floor(Math.random() * entries.length);
    const name = entries[rand];

  }

  if(!confirm('Deseja adicionar mais um participante?')) {
  break;
  }
  counter++;
}