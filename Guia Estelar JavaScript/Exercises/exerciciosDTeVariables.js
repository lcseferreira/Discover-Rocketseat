let weight;
console.log(typeof weight);

let yourName, age, stars, isSubscribed;

yourName = "Lucas";
age = 24;
stars = 5;
isSubscribed = true;

console.log(`${yourName}
${age}
${stars}
${isSubscribed}`);

let student = {}; // object
console.log(typeof student);

student = {
    yourName: "Eduardo",
    age: 47,
    stars: 5.0,
    isSubscribed: false
};

console.log(`${student.yourName}
${student.age}
${student.stars}
${student.isSubscribed}`);

let students = [];

students = [student];

console.log(students[0]);

const newStudent = // object
    {
        yourName: "Lara",
        age: 18,
        stars: 5.0,
        isSubscribed: true
    };

students[1] = newStudent;

for (let i = 0; i < students.length; i++) console.log(students[i]);