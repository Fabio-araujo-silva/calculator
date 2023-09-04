function calculadora() {
    let escolha;
    let operacao;
    let a;
    let b;
    let resultado;
    let op;
  
    escolha = prompt('Qual operação você quer fazer?\n1-Soma(+)\n2-Subtração(-)\n3-Multiplicação(*)\n4-Divisão real(/)\n5-Potenciação(**)\n6-Divisão inteira(%)');
  
    if (escolha > 0 && escolha < 7) {
      a = Number(prompt('Qual o primeiro número?'));
      b = Number(prompt('Qual o segundo número?'));
  
      if (!a || !b) {
        alert('Você é burro?');
        calculadora();
      } else {
        if (escolha === '1') {
          resultado = soma(a, b);
          operacao = '+';
        } else if (escolha === '2') {
          resultado = subtracao(a, b);
          operacao = '-';
        } else if (escolha === '3') {
          resultado = multiplicacao(a, b);
          operacao = '*';
        } else if (escolha === '4') {
          resultado = divisao1(a, b);
          operacao = '/';
        } else if (escolha === '5') {
          resultado = potenciacao(a, b);
          operacao = '^';
        } else if (escolha === '6') {
          resultado = divisao2(a, b);
          operacao = '%';
        }
  
        alert(`Resultado de ${a} ${operacao} ${b}= ${resultado}`);
        novaOperacao();

        }

        function novaOperacao(){
            op = Number(prompt("Deseja fazer uma nova operação?\n1-Sim\n2-Não"));
                
            if (op === 1){
                calculadora();
            }
            else if (op === 2){
                alert('tmj')
            }
            else{
                novaOperacao()
            }

      }
    } else {
      calculadora();
    }
  
    function soma(a, b) {
      return a + b;
    }
    
    function subtracao(a, b) {
      return a - b;
    }
    
    function multiplicacao(a, b) {
      return a * b;
    }
    
    function divisao1(a, b) {
      return a / b;
    }
    
    function potenciacao(a, b) {
      return a ** b;
    }
    
    function divisao2(a, b) {
      return a % b;
    }
  }
  
  calculadora();