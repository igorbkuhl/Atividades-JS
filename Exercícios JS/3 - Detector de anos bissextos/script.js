function bissexto(ano) {
    let num = document.querySelector('input#num');
    let resultado = document.querySelector('p#resultado');
    ano = num.value;

    /* Se ano ano for divisível por 4 e 400 mas não divisível por 100,
       informa que o ano é bissexto */
    if (typeof ano === 'string') {
        alert('Insira um número.')
    }

    if (num.value == null || num.value == undefined) {
        resultado.innerHTML = `Para calcular, insira um ano.`;
    } else if ((ano % 4 == 0) && (ano % 100 != 0) || (ano % 400 == 0)) {
        resultado.innerHTML = `O ano ${ano} é bissexto!`;
    } else {
        resultado.innerHTML = `O ano ${ano} não é bissexto.`;
    }
}

// Ativa a função ao clicar no botão de verificar
document.querySelector('#enviar').addEventListener('click', bissexto);