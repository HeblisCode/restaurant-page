(()=>{"use strict";const e=function(){const e=document.createElement("div"),t=document.createElement("h2"),n=document.createElement("p");return e.id="title",t.textContent="Le porte di casa nostra sono aperte…",n.innerHTML="Dopo 22 anni, il nostro obiettivo è sempre quello di farvi appassionare alla buona cucina <br /> abbinata al vino di qualità e ad un posto unico, dove serenità e accoglienza <br /> sono i tratti distintivi della nostra cascina <br /> immersa nel verde della Brianza.",e.appendChild(t),e.appendChild(n),e};!function(){const t=document.querySelector("#content"),n=document.querySelector("#restaurant-name");function o(){console.log(this),t.innerHTML="",t.appendChild(this)}document.querySelector("#tab1"),document.querySelector("#tab2"),document.querySelector("#tab3"),n.addEventListener("click",o.bind(e())),o.bind(e())()}()})();