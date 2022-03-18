// Function scope
let subject = "create video";

function createThink(subject) {
    subject = "study";
    return subject;
}

console.log(subject); // global scope
console.log(createThink(subject)); // function scope

subject = "create music";

function createThinkWithoutParameter() {
    subject = "create a new code";
    return subject;
}

console.log(subject); 
console.log(createThinkWithoutParameter(subject)); // modifying the variable
console.log(subject); 
