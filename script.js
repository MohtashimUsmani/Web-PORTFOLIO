const slider = document.querySelector("#slider");
const menu = document.querySelector("#menu");
const moon = document.querySelector("#moon")
const html = document.querySelector("html")
const hlinks = document.querySelectorAll("#hlink");

slider.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  slider.classList.toggle("bg-white");
});

hlinks.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    slider.classList.toggle("bg-white");
  });
});

moon.addEventListener("click", ()=>{
  html.classList.toggle("dark")
})
