// Dom styles

const allH1 = document.getElementsByTagName("h1");
const sections = document.getElementsByClassName("my-section");

for (const h1 of allH1) {
  h1.style.color = "yellow";
  h1.style.backgroundColor = "violet";
  h1.style.border = "2px solid blue";
  //   h1.innerHTML = "My name is Rayhan";
  h1.style.padding = "15px";
  h1.style.borderRadius = "10px";
}

for (const section of sections) {
  section.style.color = "red";
  section.style.backgroundColor = "lightgrey";
  section.style.margin = "10px";
  section.style.borderRadius = "10px";
  section.style.border = "2px solid grey";
  section.style.padding = "15px";
}

const allLi = document.querySelectorAll("li");

for (const li of allLi) {
  li.classList.add("css-class");
}
