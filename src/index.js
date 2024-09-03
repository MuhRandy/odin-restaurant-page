import "./styles.css";
import kitty from "./img/kitty.png";
import { restaurantData } from "./restaurantData.js";

const menuContainer = document.querySelector("#menu .container");
const contactsContainer = document.querySelector("#contacts .container");

restaurantData.menu.map((m) => {
  const img1 = document.createElement("img");
  const img2 = document.createElement("img");
  const subheading = document.createElement("div");
  const h2 = document.createElement("h2");

  img1.src = kitty;
  img2.src = kitty;
  subheading.className = "subheading";
  h2.textContent = m.category;

  subheading.appendChild(img1);
  subheading.appendChild(h2);
  subheading.appendChild(img2);

  menuContainer.appendChild(subheading);

  m.items.map((item) => {
    const content = document.createElement("div");
    const title = document.createElement("h3");
    const description = document.createElement("p");
    const price = document.createElement("div");

    content.className = "content";

    title.textContent = item.name;
    description.textContent = item.description;
    price.className = "price";
    price.textContent = `Price: $${item.price}`;

    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(price);

    menuContainer.appendChild(content);
  });
});

restaurantData.contacts.map((contact) => {
  const content = document.createElement("div");
  const name = document.createElement("h2");
  const ul = document.createElement("ul");
  const position = document.createElement("li");
  const phone = document.createElement("li");
  const mail = document.createElement("li");

  content.className = "content";

  name.textContent = contact.name;
  position.textContent = contact.position;
  phone.textContent = contact.phone;
  mail.textContent = contact.email;

  ul.appendChild(position);
  ul.appendChild(phone);
  ul.appendChild(mail);

  content.appendChild(name);
  content.appendChild(ul);

  contactsContainer.appendChild(content);
});

const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const contacts = document.querySelector("#contacts");

const homeNav = document.querySelector("#home-nav");
const menuNav = document.querySelector("#menu-nav");
const contactsNav = document.querySelector("#contacts-nav");

const homeNavHandlerClick = () => {
  homeNav.classList.add("active");
  menuNav.classList.remove("active");
  contactsNav.classList.remove("active");

  home.classList.remove("hidden");
  menu.classList.add("hidden");
  contacts.classList.add("hidden");
};

const menuNavHandlerClick = () => {
  homeNav.classList.remove("active");
  menuNav.classList.add("active");
  contactsNav.classList.remove("active");

  home.classList.add("hidden");
  menu.classList.remove("hidden");
  contacts.classList.add("hidden");
};

const contactsNavHandlerClick = () => {
  homeNav.classList.remove("active");
  menuNav.classList.remove("active");
  contactsNav.classList.add("active");

  home.classList.add("hidden");
  menu.classList.add("hidden");
  contacts.classList.remove("hidden");
};

homeNav.addEventListener("click", homeNavHandlerClick);
menuNav.addEventListener("click", menuNavHandlerClick);
contactsNav.addEventListener("click", contactsNavHandlerClick);

homeNavHandlerClick();
