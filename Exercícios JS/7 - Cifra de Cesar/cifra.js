/* modificador = document.getElementById("modificador").value

function caesarCipher(str, num) {
  num = num % 26;
  var lowerCaseStr = str.toLowerCase();
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var newStr = '';

  for(var i = 0; i < lowerCaseStr.length; i++) {
    var currentLetter = lowerCaseStr[i];
    if(currentLetter === ' ') {
      newStr += currentLetter;
      continue;
    }
    var currentIndex = alphabet.indexOf(currentLetter);
    var newIndex = currentIndex + num;
    if(newIndex > 25) newIndex = newIndex - 26;
    if(newIndex < 0) newIndex = newIndex + 26;
    if(str[i] === str[i].toUpperCase()) {
      newStr += alphabet[newIndex].toUpperCase();
    }
    else newStr += alphabet[newIndex];
  }
  return newStr;
}

console.log(caesarCipher('Rfyr uyq dsl zsr Gk rpwgl em cyr qmkc ZZO afgaicl', 2))

 */

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

function copiarTexto() {
  textoCriptografado.select()
  textoCriptografado.Input.setSelectionRange(0.99999)
  document.execCommand('copy')
  alert(`Copied to clipboard: ${textoCriptografado.value}`)
}
btoCopiar.addEventListener('click', copiarTexto)
btoEncriptar.addEventListener('click', criptografar)
