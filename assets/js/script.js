console.log("dee");
const menu = document.getElementById("menu");
const ul = document.getElementById("ul");
const bar = document.getElementById("bar");
menu.addEventListener("click", () => {
  if (ul.classList.contains("active")) {
    ul.classList.remove("active");
    bar.classList.replace("fa-x", "fa-bars");
  } else {
    ul.classList.add("active");
    bar.classList.replace("fa-bars", "fa-x");
  }
});
