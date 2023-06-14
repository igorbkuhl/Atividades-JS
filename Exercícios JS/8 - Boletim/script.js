var tabela = document.getElementById("area-dos-alunos");
console.log(tabela.innerHTML);

// Exibe dados que foram coletados
listaDeAlunos.forEach(function(aluno, index) {
    console.log(aluno);

    // Calcular a média final do aluno
    var media = (parseFloat(aluno['n1']) + parseFloat(aluno['n2'])) / 2;

    // Validando a nota do aluno
    if(media >= 7 && parseFloat(aluno['freq']) > 7) {
        // Inserindo nova linha verde na tabela
        var dados = "<tr class='aprovado'>";
    } else {
        // Inserindo nova linha vermelha na tabela
        var dados = "<tr class='reprovado'>";
    }

    
    dados += "<td>" + (index + 1) + "</td>";
    dados += "<td>" + aluno['nome'] + "</td>";
    dados += "<td>" + parseFloat(aluno['n1']).toFixed(1) + "</td>";
    dados += "<td>" + parseFloat(aluno['n2']).toFixed(1) + "</td>";
    dados += "<td>" + media.toFixed(1) + "</td>";
    dados += "<td>" + aluno['freq'].toFixed(1) + "%</td>";
    // Fechando a nova linha
    dados += "</tr>";
    // Inserindo efetivamente no HTML
    tabela.innerHTML += dados;
});