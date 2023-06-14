var firstValue;
var operation = /([\053\055\052\057])\W\S/g;
var secondValue;
var result;


while(true) {

    firstValue = parseFloat(prompt("Insira o primeiro valor a ser calculado:"));
    operation = prompt("Insira a operação desejada:");
    secondValue = parseFloat(prompt("Insira o segundo valor a ser calculado:"));
    result = (firstValue + operation + secondValue) + " = " ;

    if(operation = "+") {
        result = Number(firstValue) + Number(secondValue);
    } else if (operation = "-") {
        result = Number(firstValue) - Number(secondValue);
    } else if (operation = "*") {
        result = Number(firstValue) * Number(secondValue);
    } else if (operation = "/") {
        result = Number(firstValue) / Number(secondValue);
    }



    window.alert("Resultado: " + result);

    if (!confirm("Deseja realizar mais um cálculo?")) {
        break;
    }
}