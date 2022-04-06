/* 

    Operator precedence (precedência de operadores) 
    
    -> grouping
    -> negação e incremento ou decremento
    -> multiplicação e divisão
    -> adição e subtração
    -> relacional
    -> igualdade
    -> AND
    -> OR
    -> condicional 
    -> assigment

*/

console.log(2 + 5 * 10);
console.log((2 + 5) * 10);

console.log(3 > 2 > 1);     // true > false
console.log(3 > 2 > 0);
console.log(3 > 2 && 7 > 1);