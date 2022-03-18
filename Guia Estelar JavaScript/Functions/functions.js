// Function hoisting
sayMyName();

function sayMyName() {
    console.log("Lucas");
}

testHoisting();

var testHoisting = function () { // Error: o JS entende o testHoisting como uma variável, e não função
    console.log("Testing...");
}