let textoOriginal = document.getElementById("textoOriginal");
let textoCriptografado = document.getElementById("textoCriptografado");
const btoEncriptar = document.getElementById("criptografar");
const btoCopiar = document.getElementById("copiar");

let inputs = [textoCriptografado, textoOriginal]
inputs.forEach(input => {
  input.oninput = () => {
    input.value = input.value.toUpperCase(); // Altera o texto para letras maiúsculas
  };
});

function criptografar() {
  let textoOriginal = document.getElementById("textoOriginal").value;
  let resultado = ''; // Limpa o conteúdo do resultado
  let modificador = parseInt(document.getElementById("modificador").value);

  for(var i = 0; i < textoOriginal.length; i++) {
    let ascii_num = textoOriginal[i].charCodeAt(); // Converte o texto para unicode
    let soma = ascii_num + modificador; // Adiciona o valor do modificador ao unicode
    // Se o unicode estiver entre 65 e 90, converte o texto e o adiciona na página
    soma >= 65 && soma <= 90 ? resultado += String.fromCharCode(soma) :
    // Se o unicode for > 90, o valor volta a contar a partir de 65
    soma > 90 ? resultado += String.fromCharCode(65 + (soma - 91)) : 
    resultado += textoOriginal[i]
  };
  textoCriptografado.value = resultado
};

function copiar() {
  textoCriptografado.select();
  textoCriptografado.setSelectionRange(0, 99999);
  // Copia o resultado para a área de transferência
  navigator.clipboard.writeText(textoCriptografado.value);
  alert(`Texto copiado: ${textoCriptografado.value}`);
  console.log(`Texto copiado: ${textoCriptografado.value}`);
};

btoEncriptar.addEventListener('click', criptografar);
btoCopiar.addEventListener('click', copiar);