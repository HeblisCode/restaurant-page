import createMenuCard from "./menuCard";

function createDessert() {
  const cards = [
    {
      imgURL: "img/tiramisu.jpg",
      title: "Tiramisù sù...",
      paragraph: "Caffè, cacao, crema mascarpone, crumble salato. ",
    },
    {
      imgURL: "img/moussebianca.jpeg",
      title: "Bianco latte",
      paragraph:
        "Mousse allo yogurt, brodetto ai frutti rossi speziati, cialdina al sesamo.",
    },
    {
      imgURL: "img/cremecaramel.jpg",
      title: "Dolci ricordi, il crème caramel",
      paragraph: "Latte, uova e tanta panna.",
    },
  ];

  const dessertContainer = document.createElement("div");
  const dessertTitle = document.createElement("h2");

  dessertContainer.id = "menu";
  dessertTitle.innerText = "Dessert";

  const card1 = createMenuCard(cards[0]);
  const card2 = createMenuCard(cards[1]);
  const card3 = createMenuCard(cards[2]);

  dessertContainer.appendChild(dessertTitle);
  dessertContainer.appendChild(card1);
  dessertContainer.appendChild(card2);
  dessertContainer.appendChild(card3);

  return dessertContainer;
}

export default createDessert;
