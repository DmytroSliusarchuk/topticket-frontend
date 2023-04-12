function addTicketsToHTML(ticket, parent) {
    parent.insertAdjacentHTML("beforeend", `<option>Seat: ${ticket.seat_number} Price: ${ticket.price}</option>`)
}

async function getJSONTicketsData(id) {
    const parent = document.querySelector(".seats")
    const response = await fetch(`http://127.0.0.1:8080/tickets/event/${id}`, {
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json', "Access-Control-Allow-Headers": "*"
        }
    })
    const jsonData = await response.json()
    console.log(jsonData)

    for (let ticket of jsonData) {
        addTicketsToHTML(ticket, parent)
    }

}

export default getJSONTicketsData;