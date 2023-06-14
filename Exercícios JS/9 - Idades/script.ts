var tabela: any = document.getElementById("areaDasDatas")
console.log(tabela.innerHTML)

// Exibe dados que foram coletados
var listaDeDatas = []
listaDeDatas.forEach(function(data, index) {
    console.log(data)

    // Calcular a idade
    var milisegundos: any = /*new Date() -*/ new Date("2004-11-07")
    var segundos: number = milisegundos / 1000
    var minutos: number = segundos / 60
    var horas: number = minutos / 60
    var dias: number = horas / 24
    var semanas: number = dias / 4
    var meses: number = dias / 30
    var anos: number = meses / 12
    var idade: number = dias / 365
    console.log(idade.toFixed(1))
})