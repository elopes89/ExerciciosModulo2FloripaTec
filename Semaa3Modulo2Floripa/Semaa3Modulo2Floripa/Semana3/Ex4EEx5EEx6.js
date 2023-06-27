const listaImc = [];
function Imc() {
  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value;
  let imc = peso / altura ** 2;
  if (imc >= 18.5 && imc <= 24.9) {
    document.getElementById("condicao").innerHTML = "Saudável";
  } else if (imc > 24.9 && imc < 30) {
    document.getElementById("condicao").innerHTML = "Sobrepeso";
  } else if (imc >= 30 && imc < 34.9) {
    document.getElementById("condicao").innerHTML = "Obesidade 1";
  } else if (imc >= 35) {
    document.getElementById("condicao").innerHTML =
      "Você tem sérios problemas! Procure Jesus!!!";
  } else if (imc < 18.5) {
    document.getElementById("condicao").innerHTML = "Abaixo do peso";
  }
  document.getElementById("resultado").innerHTML = "Resultado do imc = " + imc.toFixed(2);
  listaImc.push(imc.toFixed(2));
  Salvar()
}

function Salvar() {
  // localStorage.setItem("itens", JSON.stringify(listaImc));
  const itensNoLocal = JSON.parse(localStorage.getItem("itens"));
  localStorage.setItem("itens", JSON.stringify([...itensNoLocal, listaImc]));
  const itens = JSON.parse(localStorage.getItem("itens"));
  document.getElem.entById("teste").innerHTML = itens;
}

window.onload = function(){
  const itens = JSON.parse(localStorage.getItem("itens"));
  document.getElementById("teste").innerHTML = "Histórico " + itens;
}

