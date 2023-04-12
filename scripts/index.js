import createEvents from "./events.js";
import createRegister from "./register.js";
import createIndexPage from "./index_page.js";

var index = document.querySelector(".index")
index.onclick = createIndexPage;

var events = document.querySelector(".events")
events.onclick = createEvents;

var register = document.querySelector(".register")
register.onclick = createRegister;
