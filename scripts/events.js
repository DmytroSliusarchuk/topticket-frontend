import createEvent from "./event.js";

function addEventToHTML(evnt, parent) {
    parent.insertAdjacentHTML("beforeend", `<div class="col-md-6 mb-4">\n
                    <div class="card">\n
                        <img src="../static/images/${evnt.image}" class="card-img-top" alt="...">\n
                        <div class="card-body">\n
                            <h5 class="card-title">${evnt.name}</h5>\n
                            <p class="card-text">${evnt.description}</p>\n
                            <button class="buy_ticket buy${evnt.idevent}">
                            <a href="#" class="btn btn-primary buy">Buy Tickets</a>\n
                            </button>
                        </div>\n
                    </div>\n
                </div>`)
    document.querySelector(`.buy${evnt.idevent}`).addEventListener("click", function () {
        createEvent(evnt.idevent);
    });

}

async function getJSONEventsData() {
    const parent = document.querySelector(".events-list")
    const response = await fetch("http://127.0.0.1:8080/event", {
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json', "Access-Control-Allow-Headers": "*"
        }
    })
    const jsonData = await response.json()
    for (let evnt of jsonData) {
        addEventToHTML(evnt, parent)
    }
}

async function createEvents() {
    const root = document.querySelector("main")
    root.innerHTML = "";
    root.insertAdjacentHTML("afterbegin", `<h1 class="main-heading">Upcoming Events</h1>
    <div class="row events-list">
    </div>`)
    const css = document.querySelector(".my-style");
    css.href = "../styles/style_events.css"

    await getJSONEventsData()
}

export default createEvents;
