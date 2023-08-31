let eleitos = [
    regisDaCosta = 800,
    pauloMachado = 300,
    mariaPinho = 700,
    angelaMartins = 500,
    mateusSilverio = 400,
    votosBrancos = 60,
    votosNulos = 40
]

const total = eleitos[0] + eleitos[1] + eleitos[2] + eleitos[3] + eleitos[4] + eleitos[5] + eleitos[6];

function calcularPorcentagem(x, y) {
    return ((x / y) * 100).toFixed(1);
}

document.getElementById("regisDaCosta").innerHTML = (calcularPorcentagem(eleitos[0], total) + "%");
document.getElementById("pauloMachado").innerHTML = (calcularPorcentagem(eleitos[1], total) + "%");
document.getElementById("mariaPinho").innerHTML = (calcularPorcentagem(eleitos[2], total) + "%");
document.getElementById("angelaMartins").innerHTML = (calcularPorcentagem(eleitos[3], total) + "%");
document.getElementById("mateusSilvério").innerHTML = (calcularPorcentagem(eleitos[4], total) + "%");

document.getElementById("votosBrancos").innerHTML = (calcularPorcentagem(eleitos[5], total) + "%");
document.getElementById("votosNulos").innerHTML = (calcularPorcentagem(eleitos[6], total) + "%");