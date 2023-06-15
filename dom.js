// append a child

const section2 = document.createElement("section");
section2.classList.add("my-section");
const h12 = document.createElement("h1");
h12.innerHTML = "I am DOM created H1";
const ul = document.createElement("ul");
const li2 = document.createElement("li");
li2.innerHTML = "I am DOM created li1";
const li3 = document.createElement("li");
li3.innerHTML = "I am DOM created li2";
const li4 = document.createElement("li");
li4.innerHTML = "I am DOM created li3";

const body = document.getElementById("body");
body.appendChild(section2);
section2.appendChild(h12);
section2.appendChild(ul);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
