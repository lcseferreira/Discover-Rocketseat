/*
    Arrays
*/

// Iniciando array com construtor
let myArray = new Array(10);

// Contando elementos do array
console.log([
    "a",
    1,
    () => "Hello, Array!",
].length);

// Executando uma função dentro do array
console.log([
    "a",
    1,
    () => "Hello, Array!",
][2]());

// Transformando strings em array
let myName = "Lucas Eduardo";

console.log(Array.from(myName));

// Manipulando arrays
let techs = ["html", "css", "js"];

// Adicionar um item no fim
techs.push("csharp");

// Adicionar um item no começo
techs.unshift("oracle");

// Remover um item do final
techs.pop();

// Remover um item do começo
techs.shift();

// Pegar somente alguns elementos do array
console.log(techs.slice(1, techs.length));

// Remover algum elemento específico
techs.splice(1, 1);

// Encontrar a posição de um elemento no array
let index = techs.indexOf("html");

console.log(index);
console.log(techs[index]);


console.log(techs);