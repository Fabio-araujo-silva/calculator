function calculadora(){

let escolha
let operacao
let a
let b
let resultado
do {
        escolha = prompt('Qual operação você quer fazer?\n1-Soma(+)\n2-Subtração(-)\n3-Multiplicação(*)\n4-Divisão real(/)\n5-Potenciação(**)\n6-Divisão inteira(%)');
} while (escolha != 1 && escolha != 2 && escolha != 3 && escolha != 4 && escolha != 5 && escolha != 6);

a = Number(prompt('Qual o primeiro número?'));
b = Number(prompt('Qual o segundo número?'));

if (!a || !b){
    alert('você é burro?');
    calculadora();
}

else{
    switch (escolha) {
        case 1:
            resultado = soma(a, b);
            operacao = '+';
            break;
        case 2:
            resultado = subtracao(a, b);
            operacao = '-';
            break;
        case 3:
            resultado = multiplicacao(a, b);
            operacao = '*';
            break;
        case 4:
            resultado = divisao1(a, b);
            operacao = '/';
            break;
        case 5:
            resultado = potenciacao(a, b);
            operacao = '^';
            break;
        case 6:
            resultado = divisao2(a, b);
            operacao = '%';
            break;
            
    }
    
    alert(`Resultado de ${a} ${operacao} ${b}= ${resultado}`)
}
    

    function soma(a,b){
        return a+b;
    }
    function subtracao(a,b){
        return a-b;
    }
    function multiplicacao(a,b){
        return a*b;
    }
    function divisao1(a,b){
        return a/b;
    }
    function potenciacao(a,b){
        return a**b;
    }
    function divisao2(a,b){
        return a%b;
    }
}


calculadora();
