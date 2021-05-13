import createMenuCard from "./menuCard";

function createMenu() {
  const cards = [
    {
      imgURL: "img/salumi.jpg",
      title: "Sua Maestà il maiale",
      paragraph:
        "I salumi del Camp, il caprino lavorato, la nostra giardiniera di ortaggi.",
    },
    {
      imgURL: "img/risotto.jpg",
      title: "Risotto giallo",
      paragraph: "Risotto giallo con luganega in cialda di grana",
    },
    {
      imgURL: "img/formaggi.jpg",
      title: "Formaggi del Territorio",
      paragraph:
        "La Brianza, duro, morbido, forte, delicato… e le nostre confetture",
    },
  ];

  const menuContainer = document.createElement("div");
  const menuTitle = document.createElement("h2");

  menuContainer.id = "menu";
  menuTitle.innerText = "Menù";

  const card1 = createMenuCard(cards[0]);
  const card2 = createMenuCard(cards[1]);
  const card3 = createMenuCard(cards[2]);

  menuContainer.appendChild(menuTitle);
  menuContainer.appendChild(card1);
  menuContainer.appendChild(card2);
  menuContainer.appendChild(card3);

  return menuContainer;
}

export default createMenu;
