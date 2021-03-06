// Pegando um elemento pelo ID
const element1 = document.getElementById("mytitle");
console.log(element1);

// Pegando elementos pelo nome da classe
const element2a = document.getElementsByClassName("myclass")[0];
console.log(element2a);

const element2b = document.getElementsByClassName("myclass")[1];
console.log(element2b);

// Pegando elementos pela tag
const element3 = document.getElementsByTagName("p")[0];
console.log(element3);

// Pegando um elemento pela query selector
const element4 = document.querySelector("p#queryslc");
console.log(element4);

// NodeList
const elements = document.querySelectorAll("#queryslc");

elements.forEach(el => console.log(el));

// text content
document.querySelector("p#textcontent").textContent = "Modificando através do textContent";

// innerText e innerHTML
document.querySelector("p#innertxt").innerText = "Modificando através do innertxt";

document.querySelector("p#innerhtml").innerHTML = "Modificando através do <strong>innerhtml<strong>";

// value
console.log(document.querySelector("input").value);
document.querySelector("input").value = "Hello!";

// settando atributos
const header = document.querySelector("header");
header.setAttribute("id", "headerID");

// getting atributos
const headerID = document.querySelector("header#headerID");
console.log(headerID);
console.log(headerID.getAttribute("id"));

// removendo atributos
header.removeAttribute("class");
console.log(header.getAttributeNames());

// trabalhando com styles
const testStyle = document.querySelector("body");

testStyle.style.backgroundColor = "#203460";

testStyle.classList.add("active");
console.log(testStyle.classList);

testStyle.classList.remove("active");
console.log(testStyle.classList);

// Se a classe existir, ele remove, se não, cria
testStyle.classList.toggle("active");
console.log(testStyle.classList);
