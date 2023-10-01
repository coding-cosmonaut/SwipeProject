let hamButn = document.querySelector(".hamburger-button");
let mobileNav = document.querySelector(".mobile-nav");
let hamBar1 = document.querySelector('#line1');
let hamBar2 = document.querySelector('#line2');
let hamBar3 = document.querySelector('#line3');

hamButn.addEventListener('click', () => {
    if (!hamButn.classList.contains("hamburger-button-clicked")) {
        hamButn.classList.add("hamburger-button-clicked");
    } else {
        hamButn.classList.remove("hamburger-button-clicked");
    }
    mobileNav.classList.toggle("mobile-toggle");
    hamBar1.classList.toggle('hamburger-top-flip');
    hamBar2.classList.toggle('hamburger-middle');
    hamBar3.classList.toggle('hamburger-bottom-flip');
})