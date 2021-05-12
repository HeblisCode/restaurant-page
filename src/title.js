function createTitle() {
  const titleContainer = document.createElement("div");
  const h2title = document.createElement("h2");
  const par = document.createElement("p");

  titleContainer.id = "title";
  h2title.textContent = "Le porte di casa nostra sono aperte…";
  par.innerHTML =
    "Dopo 22 anni, il nostro obiettivo è sempre quello di farvi appassionare alla buona cucina <br /> abbinata al vino di qualità e ad un posto unico, dove serenità e accoglienza <br /> sono i tratti distintivi della nostra cascina <br /> immersa nel verde della Brianza.";

  titleContainer.appendChild(h2title);
  titleContainer.appendChild(par);

  return titleContainer;
}

export default createTitle;
