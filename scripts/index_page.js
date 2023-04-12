
async function createIndexPage() {
    const root = document.querySelector("main")
    root.innerHTML = "";
    root.insertAdjacentHTML("afterbegin", `    <h1 class="main-heading">Top Events</h1>
    <div class="row">
        <div class="col-md-4">
            <div class="card">
                <img src="../static/images/test1.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Event 1</h5>
                    <p class="card-text">Some text</p>
                    <a href="" class="btn btn-primary">Buy Tickets</a>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <img src="../static/images/test2.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Event 2</h5>
                    <p class="card-text">Some text</p>
                    <a href="" class="btn btn-primary">Buy Tickets</a>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <img src="../static/images/test3.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Event 3</h5>
                    <p class="card-text">Some text</p>
                    <a href="" class="btn btn-primary">Buy Tickets</a>
                </div>
            </div>
        </div>
    </div>`)

    const css = document.querySelector(".my-style");
    css.href = "../styles/style_index.css"



}

export default createIndexPage;
