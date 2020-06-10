const icon = document.querySelector("#icon");
const navbar = document.querySelector(".nav");

icon.addEventListener("click", () => {
  navbar.style.display === "flex"
    ? (navbar.style.display = "none")
    : (navbar.style.display = "flex");
});
