let peso = 0;
let altura = 0;
peso = prompt("Digite seu peso:");
altura = prompt("Digite sua altura:");

function Imc(peso, altura) {
  let imc = 0;
  imc = peso / altura ** 2;
  if (imc >= 18.5 && imc <= 24.9) {
    console.log("Saudável");
  } else if (imc > 24.9) {
    console.log("Acima do peso");
  } else {
    console.log("Abaixo do peso");
  }
  console.log(imc.toFixed(2));
}

Imc(peso, altura);
