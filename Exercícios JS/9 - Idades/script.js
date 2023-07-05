// Exibe dados que foram coletados
var listaDeDatas = [];
var contadeiro = 0;


// Ciclo de prompts
while(true) {
    listaDeDatas[contadeiro] = new Array();
    listaDeDatas[contadeiro]['nome'] = prompt("Insira o nome da " + (contadeiro + 1) + "º pessoa:")

    // Pergunta a data de nascimento
    var nascimentoInput = prompt("Insira a data de nascimento: ");

    // Seleciona partes da data informada
    var diaDeNascimento = nascimentoInput.slice(0, 2);
    var mesDeNascimento = nascimentoInput.slice(3, 5);
    var anoDeNascimento = nascimentoInput.slice(6, 10);
    var nascimento = diaDeNascimento + "/" + mesDeNascimento + "/" + anoDeNascimento;
    
    listaDeDatas[contadeiro]['nascimento'] = nascimento;

    // Unidades de tempo
    var milisegundos = new Date() - new Date(nascimento);
    var segundos = milisegundos / 1000;
    var minutos = segundos / 60;
    var horas = minutos / 60;
    var dias = horas / 24;
    var semanas = dias / 4;
    var meses = dias / 30;
    var anos = meses / 12;
    var idade = dias / 365;
    console.log("Idade: " + Math.trunc(idade));

    
    // Subtrai a data atual pela data de nascimento
    listaDeDatas[contadeiro]['idade'] = idade;


    if (!confirm("Deseja adicionar mais uma pessoa?")) {
        break;
    }

    contadeiro++;
}


    var tabela = document.getElementById("areaDasDatas")

    listaDeDatas.forEach(function(data, index) {

        // Adicionando uma linha
        var linha = "<tr class='linha'>";
        // Inserindo as informações
        linha += "<td>" + (index + 1) + "</td>";
        linha += "<td>" + data['nome'] + "</td>";
        linha += "<td>" + data['nascimento'] + "</td>";
        linha += "<td>" + Math.trunc(data['idade']) + "</td>";
        // Fechando a linha
        linha += "</tr>";
        // Inserindo os dados no HTML
        tabela.innerHTML += linha;
    });

    console.log("Dados informados: ");
    console.log(listaDeDatas[contadeiro]);