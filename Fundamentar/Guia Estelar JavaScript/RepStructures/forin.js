/*

    for ... in

*/

let person = {
    name: "Lucas",
    age: 24,
    weight: 80.5
}

for (let property in person) {
    console.log(property);
    console.log(person[property]);
}