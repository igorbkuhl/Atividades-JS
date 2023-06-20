// Exibe dados que foram coletados
var listaDeDatas = []
var contadeiro = 0;


// Ciclo de prompts
while(true) {
    listaDeDatas[contadeiro] = new Array();
    listaDeDatas[contadeiro]['nome'] = prompt("Insira o nome da " + (contadeiro + 1) + "º pessoa:")

    // Pergunta a data de nascimento
    var diaDoNascimento = prompt("Insira o dia do nascimento: ");
    var mesDoNascimento = prompt("Insira o mês do nascimento: ");
    var anoDoNascimento = prompt("Insira o ano do nascimento: ");

    nascimento = diaDoNascimento + "/" + mesDoNascimento + "/" + anoDoNascimento;
    listaDeDatas[contadeiro]['nascimento'] = nascimento;
    // Subtrai a data atual pela data de nascimento
    idade = anos - nascimento;
    listaDeDatas[contadeiro]['idade'] = idade;

    console.log("Dados informados: ");
    console.log(listaDeDatas[contadeiro]);

    if (!confirm("Deseja adicionar mais uma pessoa?")) {
        break;
    }

    contadeiro++;
}

//////////////////////////////

var tabela = document.getElementById("areaDasDatas")

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
    console.log(Math.trunc(idade));


listaDeDatas.forEach(function(data, index) {

    // Adicionando uma linha
    var linha = "<tr class='linha'>";
    // Inserindo as informações
    linha += "<td>" + (index + 1) + "</td>";
    linha += "<td>" + data['nome'] + "</td>";
    linha += "<td>" + nascimento + "</td>";
    linha += "<td>" + Math.trunc(idade) + "</td>";
    // Fechando a linha
    linha += "</tr>";
    // Inserindo os dados no HTML
    tabela.innerHTML += linha;
});