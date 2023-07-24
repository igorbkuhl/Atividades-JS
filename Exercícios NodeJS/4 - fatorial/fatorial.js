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