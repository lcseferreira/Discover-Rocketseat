// variable declaration
var myName;

// variable assignment 
myName = "Lucas";

// type of data
console.log(typeof myName);

// declarations group
let age, isHuman;

age = 24;
isHuman = true;

// template literals or template strings
console.log(`Nome: ${myName}
Idade: ${age}
É humano? ${isHuman}`);

// object
const person = {
    name: "John",
    age: 33,
    isAdmin: true
};

console.log(person.name);
console.log(person.age);
console.log(person.isAdmin);

// arrays

const animals = [
    "Lion",
    "Monkey",
    "Cat"
]

console.log(animals.length);
console.log(animals[0]);
console.log(animals[1]);
console.log(animals[2]);

const test = [
    "testing",
    {
        testing: "testing"
    }
]

console.log(test[1].testing)