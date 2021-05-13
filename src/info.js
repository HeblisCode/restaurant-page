import createMap from "./map";

function createInfo() {
  const infoContainer = document.createElement("div");
  const infoTitle = document.createElement("h2");
  const mapWrapper = document.createElement("div");
  const map = createMap();
  const par = document.createElement("p");

  infoContainer.id = "info";
  infoTitle.innerText = "Contatti";
  par.innerText = "Contattaci al numero 123456789";
  mapWrapper.id = "mapInfo";

  mapWrapper.appendChild(map);
  mapWrapper.appendChild(par);

  infoContainer.appendChild(infoTitle);
  infoContainer.appendChild(mapWrapper);

  return infoContainer;
}

export default createInfo;
