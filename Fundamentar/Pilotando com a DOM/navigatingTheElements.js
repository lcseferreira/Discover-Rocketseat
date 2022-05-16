// Navegando pelos elementos
// parentNode parentElement
const h1 = document.querySelector("h1");

console.log(h1.parentNode);
console.log(h1.parentElement);

// childNodes children
const header = document.querySelector("header");
console.log(header.childNodes);
console.log(header.children);
console.log(header.children[0]);
console.log(header.children[1]);
console.log(header.firstChild);
console.log(header.firstElementChild);
console.log(header.lastChild);
console.log(header.lastElementChild);

// nextSibling nextElementSibling
console.log(header.nextSibling);
console.log(header.nextElementSibling);
console.log(header.previousSibling);
console.log(header.previousElementSibling);