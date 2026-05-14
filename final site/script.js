const navBox = document.querySelector(".navBox");
const showNav = document.querySelector("#showNav");
const hideNav = document.querySelector("#hideNav");

showNav.addEventListener("click", () => {
    navBox.classList.add("active");
});

hideNav.addEventListener("click", () => {
    navBox.classList.remove("active");
});