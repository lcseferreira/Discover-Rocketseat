/*
    .split()
*/


let phrase = "Hello, my name is Lucas and I'm 24";

let myArray = phrase.split(" ");
console.log(myArray);

myArray.forEach(element => {
    console.log(element);
});