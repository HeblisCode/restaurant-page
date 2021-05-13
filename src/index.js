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

  function _appendToContent() {
    _content.innerHTML = "";
    _content.appendChild(this);
  }

  function _removeAllSelected() {
    _tabArray.forEach((tab) => {
      tab.classList.remove("selected");
    });
  }

  function _fadeOutAndReplace(newNode) {
    const contentChild = document.querySelector("#content > div");
    if (contentChild === null) {
      _appendToContent.bind(newNode)();
      return;
    }
    contentChild.addEventListener(
      "animationend",
      _appendToContent.bind(newNode)
    );
    contentChild.style.cssText = "animation-name: fadeOut";
  }

  function _handleTitleClick(e) {
    _currentSelection = e.target.id;
    _content.classList.remove("menu");
    _content.classList.add("title");
    _removeAllSelected();
    _fadeOutAndReplace(createTitle());
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

    _fadeOutAndReplace(node);
  }

  _navTitle.addEventListener("click", _handleTitleClick);
  _tabArray.forEach((tab) => {
    tab.addEventListener("click", _handleMenuClick);
  });

  //_appendToContent.bind(createTitle())(); //initialize the homepage
})();
