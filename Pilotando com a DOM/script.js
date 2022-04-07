// Pegando um elemento pelo ID
const element1 = document.getElementById("mytitle");
console.log(element1);

// Pegando elementos pelo nome da classe
const element2a = document.getElementsByClassName("myclass")[0];
console.log(element2a);

const element2b = document.getElementsByClassName("myclass")[1];
console.log(element2b);

// Pegando elementos pela tag
const element3 = document.getElementsByTagName("p")[0];
console.log(element3);

// Pegando um elementos pela query selector
const element4 = document.querySelector("p#queryslc");
console.log(element4);