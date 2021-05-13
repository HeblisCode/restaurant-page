function createMenuCard({ imgURL, title, paragraph }) {
  const cardContainer = document.createElement("div");
  const image = document.createElement("img");
  const h3title = document.createElement("h3");
  const par = document.createElement("p");

  image.setAttribute("src", imgURL);
  image.setAttribute("heght", "800px");
  image.setAttribute("width", "800px");
  h3title.innerText = title;
  par.innerText = paragraph;

  cardContainer.appendChild(image);
  cardContainer.appendChild(h3title);
  cardContainer.appendChild(par);

  cardContainer.classList.add("menuCard");
  return cardContainer;
}
export default createMenuCard;
