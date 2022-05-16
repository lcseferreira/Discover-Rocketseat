/*
    Constructor function

        => new expression
        => create a new object
        => this keyword
*/

// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.walk = () => {
        console.log(`${this.name} está andando...`)
    }
}

// Creating a new object (instânciando um novo objeto)
const person = new Person("Lucas", 24);
console.log(person);
person.walk();