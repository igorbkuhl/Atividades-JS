let a = 800;
let b = 300;
let c = 700;
let d = 500;
let e = 400;
let x = 60;
let y = 40;
const total = a + b + c + d + e + x + y;


function calcularPorcentagem(x, y) {
    return ((x / y) * 100).toFixed(1);
}


document.getElementById("regisDaCosta").innerHTML = (calcularPorcentagem(a, total) + "%");
document.getElementById("pauloMachado").innerHTML = (calcularPorcentagem(b, total) + "%");
document.getElementById("mariaPinho").innerHTML = (calcularPorcentagem(c, total) + "%");
document.getElementById("angelaMartins").innerHTML = (calcularPorcentagem(d, total) + "%");
document.getElementById("mateusSilvério").innerHTML = (calcularPorcentagem(e, total) + "%");

document.getElementById("votosBrancos").innerHTML = (calcularPorcentagem(x, total) + "%");
document.getElementById("votosNulos").innerHTML = (calcularPorcentagem(y, total) + "%");