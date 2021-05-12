import createTitle from "./title";
import createMenu from "./menu";

const NavControls = (function () {
  const _content = document.querySelector("#content");
  const _navTitle = document.querySelector("#restaurant-name");
  const _menuTab = document.querySelector("#tab1");
  const _tab2 = document.querySelector("#tab2");
  const _tab3 = document.querySelector("#tab3");

  function _appendToContent(node) {
    _content.innerHTML = ""; //clean the contend div
    _content.appendChild(node);
  }

  function _handleAnimationEnd(e) {
    if (e.target.id !== "content") return;
    _appendToContent(this);
    _content.removeEventListener("animationend", _handleAnimationEnd);
  }

  _navTitle.addEventListener("click", () => {
    _content.classList.remove("menu");
    _appendToContent(createTitle());
  });
  _menuTab.addEventListener("click", () => {
    _content.addEventListener(
      "animationend",
      _handleAnimationEnd.bind(createMenu())
    );
    _content.classList.add("menu");
  });

  //_appendToContent.bind(createTitle())(); //initialize the homepage
})();
