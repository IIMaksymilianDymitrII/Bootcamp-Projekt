const subMenu = document.querySelector("#menu-btn");
const navUl = document.querySelector("nav ul");
const nav = document.querySelector("nav");

const subMenuBooking = document.querySelector("#menu-btn-booking");
const bookingNav = document.querySelector("#main-nav");
const bookingsNavUl = document.querySelector("#main-nav ul");

if (subMenu && nav && navUl) {
  subMenu.addEventListener("click", () => {
    nav.classList.toggle("show");
    navUl.classList.toggle("show");
  });
}

if (subMenuBooking && bookingNav && bookingsNavUl) {
  subMenuBooking.addEventListener("click", () => {
    bookingsNavUl.classList.toggle("show");
    bookingNav.classList.toggle("show");
  });
}

const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const dateInput = document.querySelector("#date");
const serivceSelect = document.querySelector("#service");
const livingAreaInput = document.querySelector("#living-area");
const messageInput = document.querySelector("#message");


form.addEventListener("submit", (e) => {
  function ShowPopup(data, price) {

    const popup = document.createElement("div");
    popup.classList.add("popup");
    
    const textPopup = document.createElement("p");
    textPopup.textContent =
      "Tack för din bokning! Vi återkommer så snart som möjligt.";

    const dataPopup = document.createElement("div");
    popupData.textContent = data;

    const pricePopup = document.createElement("p");
    pricePopup.textContent = `Pris för vald tjänst: ${price} Kr`;

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "Stäng";
    closeBtn.classList.add("close-btn");
    closeBtn.addEventListener("click", () => {
      document.body.removeChild(popup)
    });

    document.body.appendChild(popup);
    popup.appendChild(textPopup);
    popup.appendChild(dataPopup);
    popup.appendChild(pricePopup);
  }

  const calculatePrice = (livingArea, service) => {
    const servicePrice = 0;

    if (service === "hemstädning") {
      servicePrice = 100;
    } else if (service === "flyttstädning") {
      servicePrice = 150;
    } else if (service === "företagsstädning") {
      servicePrice = 200;
    }
    return livingArea * servicePrice;
  };

  e.preventDefault();

  const data = {
    name: nameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    date: dateInput.value,
    livingArea: livingAreaInput.value + "m²",
    service: serivceSelect.value,
    message: messageInput.value,
  };

  let bookingdata = JSON.parse(localStorage.getItem("bookings")) || [];
  booking.push(data);
  localStorage.setItem("bookings", JSON.stringify(bookingdata));

  ShowPopup(data, calculatePrice(livingAreaInput.value, serivceSelect.value));
});
