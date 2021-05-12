import createTitle from "./title";

const NavControls = (function () {
  const _content = document.querySelector("#content");
  const _navTitle = document.querySelector("#restaurant-name");
  const _tab1 = document.querySelector("#tab1");
  const _tab2 = document.querySelector("#tab2");
  const _tab3 = document.querySelector("#tab3");

  function _appendToContent() {
    _content.innerHTML = ""; //clean the contend div
    _content.appendChild(this);
  }

  _navTitle.addEventListener("click", _appendToContent.bind(createTitle()));

  _appendToContent.bind(createTitle())(); //initialize the homepage
})();
