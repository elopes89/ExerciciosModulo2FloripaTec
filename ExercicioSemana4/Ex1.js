let result = document.getElementById("resultado").innerHTML;

function Tamanho() {
  let numero = document.getElementById("numero").value;
  if (numero > 10) {
    document.getElementById("resultado").innerHTML = "Número maior que 10";
  } else if (numero < 10) {
    document.getElementById("resultado").innerHTML = "Número menor que 10";
  } else {
    document.getElementById("resultado").innerHTML = "Número igual a  10";
  }
}
