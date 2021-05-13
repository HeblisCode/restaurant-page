function createMap() {
  const mapContainer = document.createElement("div");
  const mapCanvas = document.createElement("div");
  const iframe = document.createElement("iframe");
  const linkOne = document.createElement("a");
  const linkTwo = document.createElement("a");

  mapContainer.classList.add("mapouter");
  mapCanvas.classList.add("gmap_canvas");

  iframe.setAttribute("width", "604");
  iframe.setAttribute("height", "434");
  iframe.setAttribute("id", "gmap_canvas");
  iframe.setAttribute(
    "src",
    "https://maps.google.com/maps?q=Camp%20di%20Cent%20Pertigh&t=&z=13&ie=UTF8&iwloc=&output=embed"
  );
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("scrolling", "0");
  iframe.setAttribute("marginheight", "0");
  iframe.setAttribute("marginwidth", "0");

  linkOne.setAttribute("href", "https://putlocker-is.org");
  linkTwo.setAttribute("href", "https://www.embedgooglemap.net");

  mapCanvas.appendChild(iframe);
  mapCanvas.appendChild(linkOne);
  mapCanvas.appendChild(linkTwo);

  mapContainer.appendChild(mapCanvas);

  return mapContainer;
}

export default createMap;
