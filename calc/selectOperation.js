import {
  soma,
  subtracao,
  multiplicacao,
  divisao1,
  potenciacao,
  divisao2,
} from "./calc.js";

export function selectOperation() {
  let escolha = prompt(
    "Qual operação você quer fazer?\n1-Soma(+)\n2-Subtração(-)\n3-Multiplicação(*)\n4-Divisão real(/)\n5-Potenciação(**)\n6-Divisão inteira(%)"
  );
  
  if (escolha > 0 && escolha < 7) {
    let a = parseInt(prompt("Qual o primeiro número?"));
    let b = parseInt(prompt("Qual o segundo número?"));
    let operacao = "";
    let resultado = 0;

    if (!a || !b) {
      alert("Você é burro?");
      return true;
    } else {
      if (escolha === "1") {
        resultado = soma(a, b);
        operacao = "+";
      } else if (escolha === "2") {
        resultado = subtracao(a, b);
        operacao = "-";
      } else if (escolha === "3") {
        resultado = multiplicacao(a, b);
        operacao = "*";
      } else if (escolha === "4") {
        resultado = divisao1(a, b);
        operacao = "/";
      } else if (escolha === "5") {
        resultado = potenciacao(a, b);
        operacao = "^";
      } else if (escolha === "6") {
        resultado = divisao2(a, b);
        operacao = "%";
      }

      alert(`Resultado de ${a} ${operacao} ${b}= ${resultado}`);
      let op = parseInt(
        prompt("Deseja fazer uma nova operação?\n1-Sim\n2-Não")
      );
      if (op === 1) {
        return true;
      }
      return false;
    }
  }
  return false;
}
