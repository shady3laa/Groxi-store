let menuIcon = document.querySelector (".header__toggle-menu i");
let icons = document.querySelector (".nav__icons");

menuIcon.addEventListener("click" , () => {
    (icons.style.right == "-105%") ? icons.style.right = "0":icons.style.right = "-105%"
});

