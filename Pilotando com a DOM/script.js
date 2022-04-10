// Criando e adicionando elementos

// createElement
const div = document.createElement("div");
div.innerText = "Hello, I'm a div";

// append prepend
const header = document.querySelector("header");
// header.append(div);
// header.prepend(div);

// insertBefore
const body = document.querySelector("body");
const script = body.querySelector("script");
body.insertBefore(div, script);