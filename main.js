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
const serviceSelect = document.querySelector("#service"); 
const livingAreaInput = document.querySelector("#living-area");
const messageInput = document.querySelector("#message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  function ShowPopup(data, price) {
    const popup = document.createElement("div");
    popup.classList.add("popup");

    const textPopup = document.createElement("p");
    textPopup.textContent = "Tack för din bokning! Vi återkommer så snart som möjligt.";

    const dataPopup = document.createElement("div");
    if (data.message === "") {
     dataPopup.innerHTML = `
      <strong>Namn:</strong> ${data.name}<br>
      <strong>E-post:</strong> ${data.email}<br>
      <strong>Telefon:</strong> ${data.phone}<br>
      <strong>Datum:</strong> ${data.date}<br>
      <strong>Yta:</strong> ${data.livingArea}<br>
      <strong>Tjänst:</strong> ${data.service}<br>
    `;  
    }

    else {
        dataPopup.innerHTML = `
          <strong>Namn:</strong> ${data.name}<br>
          <strong>E-post:</strong> ${data.email}<br>
          <strong>Telefon:</strong> ${data.phone}<br>
          <strong>Datum:</strong> ${data.date}<br>
          <strong>Yta:</strong> ${data.livingArea}<br>
          <strong>Tjänst:</strong> ${data.service}<br>
          <strong>Meddelande:</strong> ${data.message}
        `;
    }

    const pricePopup = document.createElement("p");
    pricePopup.textContent = `Pris för vald tjänst: ${price} Kr`;

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "Stäng";
    closeBtn.classList.add("close-btn");
    closeBtn.addEventListener("click", () => {
      document.body.removeChild(popup);
    });

    popup.appendChild(textPopup);
    popup.appendChild(dataPopup);
    popup.appendChild(pricePopup);
    popup.appendChild(closeBtn);
    document.body.appendChild(popup);
  }

  const calculatePrice = (livingArea, service) => {
    let servicePrice = 0;

    if (service === "hemstädning") {
      servicePrice = 100;
    } else if (service === "flyttstädning") {
      servicePrice = 150;
    } else if (service === "företagsstädning") {
      servicePrice = 200;
    }

    return livingArea * servicePrice;
  };

  const data = {
    name: nameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    date: dateInput.value,
    livingArea: livingAreaInput.value + " m²",
    service: serviceSelect.value,
    message: messageInput.value,
  };

  let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  bookings.push(data);
  localStorage.setItem("bookings", JSON.stringify(bookings));

  const totalPrice = calculatePrice(parseFloat(livingAreaInput.value), serviceSelect.value);
  ShowPopup(data, totalPrice);
});
