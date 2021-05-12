function createMenu() {
  const menuContainer = document.createElement("div");
  const menuTitle = document.createElement("h2");

  menuContainer.id = "menu";
  menuTitle.innerHTML = "Menù";

  const card1URL = "img/salumi.jpg";
  const card1Title = "Sua Maestà il maiale";
  const card1Par =
    "I salumi del Camp, il caprino lavorato, la nostra giardiniera di ortaggi.";
  const card1 = createMenuCard(card1URL, card1Title, card1Par);

  const card2URL = "img/risotto.jpg";
  const card2Title = "Risotto giallo";
  const card2Par = "Risotto giallo con luganega in cialda di grana";
  const card2 = createMenuCard(card2URL, card2Title, card2Par);

  const card3URL = "img/formaggi.jpg";
  const card3Title = "Formaggi del Territorio";
  const card3Par =
    "La Brianza, duro, morbido, forte, delicato… e le nostre confetture";
  const card3 = createMenuCard(card3URL, card3Title, card3Par);

  menuContainer.appendChild(menuTitle);
  menuContainer.appendChild(card1);
  menuContainer.appendChild(card2);
  menuContainer.appendChild(card3);

  return menuContainer;
}

function createMenuCard(imgURL, title, paragraph) {
  const cardContainer = document.createElement("div");
  const image = document.createElement("img");
  const h3title = document.createElement("h3");
  const par = document.createElement("p");

  image.setAttribute("src", imgURL);
  h3title.innerText = title;
  par.innerText = paragraph;

  cardContainer.appendChild(image);
  cardContainer.appendChild(h3title);
  cardContainer.appendChild(par);

  cardContainer.classList.add("menuCard");
  return cardContainer;
}

export default createMenu;
