/* 

    FALSY 
    
    -> Quando um valor é considerado false em contextos onde um booleano é obrigatório

*/

console.log(false ? "true" : "false");
console.log(0 ? "true" : "false");
console.log(-0 ? "true" : "false");
console.log("" ? "true" : "false");
console.log(null ? "true" : "false");
console.log(undefined ? "true" : "false");
console.log(NaN ? "true" : "false");

/* 

    TRUTHY
    
    -> Quando um valor é considerado true em contextos onde um booleano é obrigatório

*/

console.log(true ? "true" : "false");
console.log({} ? "true" : "false");
console.log([] ? "true" : "false");
console.log(1 ? "true" : "false");
console.log(99.99 ? "true" : "false");
console.log(-1 ? "true" : "false");
console.log(Infinity ? "true" : "false");
console.log(-Infinity ? "true" : "false");