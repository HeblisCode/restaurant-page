import createTitle from "./title";
import createMenu from "./menu";

const NavControls = (function () {
  const _content = document.querySelector("#content");
  const _navTitle = document.querySelector("#restaurant-name");
  const _menuTab = document.querySelector("#menuTab");
  const _viniTab = document.querySelector("#viniTab");
  const _infoTab = document.querySelector("#infoTab");
  const _tabArray = [_menuTab, _viniTab, _infoTab];
  let _currentSelection = null;

  function _appendToContent(node) {
    _content.innerHTML = "";
    _content.appendChild(node);
  }

  function _removeAllSelected() {
    _tabArray.forEach((tab) => {
      tab.classList.remove("selected");
    });
  }

  function _handleTitleClick(e) {
    _currentSelection = e.target.id;
    _content.classList.remove("menu");
    _content.classList.add("title");
    _removeAllSelected();
    _appendToContent(createTitle());
  }

  function _handleMenuClick(e) {
    _currentSelection = e.target.id;
    _content.classList.remove("title");
    _content.classList.add("menu");
    _removeAllSelected();
    e.target.classList.add("selected");

    let node = null;
    switch (e.target.id) {
      case "menuTab":
        node = createMenu();
        break;
      case "viniTab":
        //node = createVini();
        break;
      case "infoTab":
        //node = createInfo();
        break;
    }

    _appendToContent(node);
  }

  _navTitle.addEventListener("click", _handleTitleClick);
  _tabArray.forEach((tab) => {
    tab.addEventListener("click", _handleMenuClick);
  });

  //_appendToContent.bind(createTitle())(); //initialize the homepage
})();
