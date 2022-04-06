/* 

    Operadores lógicos (logical operators)

*/

let bread = true;
let cheese = true;
let eggs = false;

// AND &&
if (bread && cheese && eggs) console.log("OK");
else console.log("Not OK");

// OR ||
if (bread && cheese || eggs) console.log("OK");
else console.log("Not OK");

// NOT ||
if (bread && cheese && !eggs) console.log("OK");
else console.log("Not OK");