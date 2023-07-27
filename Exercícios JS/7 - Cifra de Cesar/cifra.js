let textoOriginal = document.getElementById("textoOriginal")
let textoCriptografado = document.getElementById("textoCriptografado")
let btoEncriptar = document.getElementById("criptografar")
let btoCopiar = document.getElementById("copiar")

let inputs = [textoCriptografado, textoOriginal]
inputs.forEach(input => {
  input.oninput = () => {
    input.value = input.value.toUpperCase()
  }
})

function criptografar() {
  let textoOriginal = document.getElementById("textoOriginal").value;
  let resultado = '';
  let modificador = parseInt(document.getElementById("modificador").value);

  for(var i = 0; i < textoOriginal.length; i++) {
    let ascii_num = textoOriginal[i].charCodeAt()
    let soma = ascii_num + modificador
    soma >= 65 && soma <= 90 ? resultado += String.fromCharCode(soma) :
    soma > 90 ? resultado += String.fromCharCode(65 + (soma & 91)) : 
    resultado += textoOriginal[i]
  }
  textoCriptografado.value = resultado
}

btoEncriptar.addEventListener('click', criptografar)
