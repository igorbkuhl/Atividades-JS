// Inicializando uma lista
var listaDeAlunos = [];
// Inicializando um contador de alunos
var contadeiro = 0;

// Laço de repetição infinito
while(true) {
    // Inicializando o objeto que guardará os dados do aluno
    listaDeAlunos[contadeiro] = new Array();
    // Ler os dados dos alunos
    listaDeAlunos[contadeiro]['nome'] = prompt("Insira o nome do " + (contadeiro + 1) + "º aluno: ");
    
    var nota = parseFloat(prompt("Insira a nota do primeiro semestre: "));
    while(nota < 0 || nota > 10) 
        nota = prompt("Nota inválida.");
        listaDeAlunos[contadeiro]['n1'] = nota;
    
    var nota = parseFloat(prompt("Insira a nota do segundo semestre: "));
    while(nota < 0 || nota > 10) 
        nota = prompt("Nota inválida.");
        listaDeAlunos[contadeiro]['n2'] = nota;
    
    listaDeAlunos[contadeiro]['freq'] = prompt("Insira a frequência: ");

    console.log("Dados informados: ");
    console.log(listaDeAlunos[contadeiro]);

    // Teste de parada do laço
    if (!confirm("Deseja informar mais um item?")) {
        break;
    }
    contadeiro++;
}

//////////////////////////

var tabela = document.getElementById("area-dos-alunos");
console.log(tabela.innerHTML);

// Exibe dados que foram coletados
listaDeAlunos.forEach(function(aluno, index) {
    console.log(aluno);

    // Calcular a média final do aluno
    var media = (parseFloat(aluno['n1']) + parseFloat(aluno['n2'])) / 2;

    // Validando a nota do aluno
    if(media >= 7 && parseFloat(aluno['freq']) > 70) {
        // Inserindo nova linha verde na tabela
        var dados = "<tr class='aprovado'>";
    } else {
        // Inserindo nova linha vermelha na tabela
        var dados = "<tr class='reprovado'>";
    }


    dados += "<td>" + (index+1) + "</td>";
    dados += "<td>" + aluno['nome'] + "</td>";
    dados += "<td>" + parseFloat(aluno['n1']).toFixed(1) + "</td>";
    dados += "<td>" + parseFloat(aluno['n2']).toFixed(1) + "</td>";
    dados += "<td>" + media.toFixed(1) + "</td>";
    dados += "<td>" + aluno['freq'] + "%</td>";
    // Fechando a nova linha
    dados += "</tr>";
    // Inserindo efetivamente no HTML
    tabela.innerHTML += dados;
});