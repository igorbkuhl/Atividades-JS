function fatorial() {
    var n = document.getElementById("n").value;
    var checarValor = isNaN(n);

    if (!checarValor) {
        document.getElementById("valorInicial").innerHTML = n;
        var final = 1;

        while(n >= 1) {
            final = final * n;
            n--;
        }
        document.getElementById("resultado").innerHTML = final;
    }    
    if(n < 0) {
        window.alert("Insira um valor positivo.");
    }
}








// var readlineSync = require('readline-sync');

// function fatorial(n) {
//     var n = document.getElementById("n").value;    

//     if(n == 1) {
//         return 1;    
//     }
//     // console.log("Fatorial de " + n + " = " + n + " * !" + (n - 1));
//     return n * fatorial(n - 1);
// }

// document.getElementById("resultado").innerHTML = n;

// var numero = readlineSync.question('Qual o número? ');
// console.log(fatorial(numero));
