const subMenu = document.querySelector("#menu-btn");
const navUl = document.querySelector("nav ul");
const nav = document.querySelector("nav");

const subMenuBooking = document.querySelector("#menu-btn-booking");
const bookingNav = document.querySelector("#main-nav");
const bookingsNavUl = document.querySelector("#main-nav ul");

if (subMenu && nav && navUl)  {    
    subMenu.addEventListener("click", () => {
        nav.classList.toggle("show");
        navUl.classList.toggle("show");
    });
}
    
if (subMenuBooking && bookingNav && bookingsNavUl){
    subMenuBooking.addEventListener("click", () => {
        bookingsNavUl.classList.toggle("show");
        bookingNav.classList.toggle("show");
    });
}
