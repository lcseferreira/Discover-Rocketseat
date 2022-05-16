// Função anônima (function expression, function anonymous)
const sum = function (number1, number2) { // parâmetros (parameters)
    let total = number1 + number2;
    return total;
}

let n1 = 10;
let n2 = 20;

// Passando argumentos (arguments) para a função
console.log(`Função soma: ${n1} + ${n2} = ${sum(n1, n2)}`);