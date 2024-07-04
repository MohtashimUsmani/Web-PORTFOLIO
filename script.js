const slider = document.querySelector("#slider");
const menu = document.querySelector("#menu");
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

