let menuIcon = document.querySelector (".header__toggle-menu i");
let icons = document.querySelector (".nav__icons");

menuIcon.addEventListener("click" , () => {
    (icons.style.right == "-110%") ? icons.style.right = "0":icons.style.right = "-110%"
});

// filter 
let filterCards = document.querySelectorAll (".best-seller__nav li");
let card = document.querySelectorAll (".best-seller__content .box");

let arrOfCard = [];

filterCards.forEach(ele => {
    ele.addEventListener("click" , rActive)
    ele.addEventListener("click" , fCard)
})
function rActive() {
    filterCards.forEach(el => {
     el.classList.remove("active");
 
     this.classList.add("active");
    })
 }
 function fCard() {
    card.forEach(c => {
        c.style.display = "none"
    });
    document.querySelectorAll(this.dataset.product).forEach(ele => {
        ele.style.display = "flex"
    })
 }







