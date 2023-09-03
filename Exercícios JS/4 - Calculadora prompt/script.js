let firstValue, operation, secondValue, result;

while(true) {
    
    // Informa o primeiro valor
    firstValue = parseFloat(prompt("Insira o primeiro valor a ser calculado: "));

    // Informa a operação
    operation = prompt("Insira a operação desejada: ");

    // Informa o segundo valor
    secondValue = parseFloat(prompt("Insira o segundo valor a ser calculado: "));

    switch(operation) {
        case '+':
            result = Number(firstValue) + Number(secondValue);
            break;
        case '-':
            result = Number(firstValue) - Number(secondValue);
            break;
        case '*':
            result = Number(firstValue) * Number(secondValue);
            break;
        case '/':
            result = Number(firstValue) / Number(secondValue);
            break;
        default:
            alert('Insira uma operação com uma das opções: +, -, *, /');
            break;
    }

    alert(`Resultado: ${result}`);

    if (!confirm("Deseja realizar mais um cálculo?")) {
        break;
    }
}
