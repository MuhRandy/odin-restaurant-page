import "./styles.css";
import kitty from "./img/kitty.png";

const menu = [
  {
    category: "Seafood Delights",
    items: [
      {
        name: "Purrfect Tuna Tartare",
        description:
          "Finely diced tuna mixed with a hint of catnip, served with a light drizzle of fish oil and crunchy fish flakes.",
        price: 12.99,
      },
      {
        name: "Whisker-Lickin' Salmon",
        description:
          "Grilled salmon filet topped with a creamy sardine sauce and a sprinkle of dried seaweed, cooked to perfection.",
        price: 14.99,
      },
      {
        name: "Shrimpy Delight",
        description:
          "Succulent shrimp served on a bed of steamed veggies, garnished with parsley and a touch of lobster bisque.",
        price: 13.49,
      },
      {
        name: "Feline Fancy Feast",
        description:
          "A gourmet platter of assorted seafood—shrimp, salmon, and tuna—paired with tender beef morsels.",
        price: 15.99,
      },
    ],
  },
  {
    category: "Meat & Poultry",
    items: [
      {
        name: "Kitty Chicken Bites",
        description:
          "Tender chicken pieces slow-cooked in a savory broth, garnished with parsley for a simple yet satisfying meal.",
        price: 10.99,
      },
      {
        name: "Meow Meatloaf",
        description:
          "Minced turkey and liver blended and baked, topped with a rich bone broth gravy and served with mashed sweet potatoes.",
        price: 11.49,
      },
      {
        name: "Pawsta with Meatballs",
        description:
          "Soft pasta noodles mixed with flavorful turkey meatballs, finished with a sprinkle of Parmesan.",
        price: 9.99,
      },
    ],
  },
  {
    category: "Vegetarian & Sides",
    items: [
      {
        name: "Catnip Caesar Salad",
        description:
          "Crisp greens tossed in catnip dressing, topped with crunchy kibble croutons and shredded cheese.",
        price: 8.99,
      },
    ],
  },
  {
    category: "Desserts & Drinks",
    items: [
      {
        name: "Mouser's Mousse",
        description:
          "A creamy mousse made from real liver and a hint of tuna, whipped to a light texture.",
        price: 7.99,
      },
      {
        name: "Creamy Dreamy Milkshake",
        description:
          "A smooth, frothy drink made with lactose-free milk, lightly flavored with vanilla and topped with whipped cream.",
        price: 6.49,
      },
    ],
  },
];

const menuContainer = document.querySelector("#menu .container");

menu.map((i) => {
  const img1 = document.createElement("img");
  const img2 = document.createElement("img");
  const subheading = document.createElement("div");
  const h2 = document.createElement("h2");

  img1.src = kitty;
  img2.src = kitty;
  subheading.className = "subheading";
  h2.textContent = i.category;

  subheading.appendChild(img1);
  subheading.appendChild(h2);
  subheading.appendChild(img2);

  menuContainer.appendChild(subheading);

  i.items.map((j) => {
    const content = document.createElement("div");
    const title = document.createElement("h3");
    const description = document.createElement("p");
    const price = document.createElement("div");

    content.className = "content";

    title.textContent = j.name;
    description.textContent = j.description;
    price.className = "price";
    price.textContent = `Price: $${j.price}`;

    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(price);

    menuContainer.appendChild(content);
  });
});
