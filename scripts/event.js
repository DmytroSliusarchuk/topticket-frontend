import getJSONTicketsData from "./tickets.js";

function addEventToHTML(evnt, parent) {
    parent.insertAdjacentHTML("afterbegin", `<div class="col-md-6">
                <img src="../static/images/${evnt.image}" alt="Event Image" class="img-fluid">
            </div>
            <div class="col-md-6">
                <h2>${evnt.name}</h2>
                <p>Date: ${evnt.date}</p>
                <p>City: ${evnt.city}</p>
                <p>Address: ${evnt.address}</p>
                <p>${evnt.description}</p>
                <form>
                    <div class="form-group">
                        <label for="seat">Select Seat Number:</label>
                        <select class="form-control seats" id="seat">
                        </select>
                    </div>
                    <button type="button" class="btn btn-primary">Buy Ticket</button>
                    <button type="button" class="btn btn-primary book">Book Ticket</button>
                </form>
            </div>`)
}

async function getJSONEventData(id) {
    const parent = document.querySelector(".event")
    const response = await fetch(`http://127.0.0.1:8080/event/${id}`, {
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json', "Access-Control-Allow-Headers": "*"
        }
    })
    const jsonData = await response.json()
    addEventToHTML(jsonData, parent)
    await getJSONTicketsData(id)

}

async function createEvent(id) {
    const root = document.querySelector("main")
    root.innerHTML = "";
    root.insertAdjacentHTML("afterbegin", `<div class="row event"></div>`)
    const css = document.querySelector(".my-style");
    css.href = "../styles/style_event.css"
    await getJSONEventData(id)

}

export default createEvent;