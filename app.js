console.log("hello world");
let mobileMenu = document.querySelector(".nav-mobile-menu");
let meinMenu = document.querySelector(".menu");

mobileMenu.addEventListener("click", function () {
    mobileMenu.classList.toggle("active-menu")
    if (mobileMenu.classList.contains("active-menu")) {
        meinMenu.classList.add("active-menu")
    } else {
        meinMenu.classList.remove("active-menu");
    }
        
});