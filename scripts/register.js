async function registerUser(event) {
    const data = new FormData(document.querySelector("form"));
    const dataJson = {};
    data.forEach((value, key) => dataJson[key] = value);
    const res_json = JSON.stringify(dataJson);
    const response = await fetch(`http://127.0.0.1:8080/user/register`, {
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json', "Access-Control-Allow-Headers": "*",
        }, method: "post", body: res_json
    })
    const jsonData = await response.json()
    document.cookie = `userid=${jsonData.id}; path=/; SameSite=None`

}


async function createRegister() {

    const root = document.querySelector("main")
    root.innerHTML = "";
    root.insertAdjacentHTML("afterbegin", `<div class="form-center">
        <h1 class="main-heading">Registration</h1>
        <form class="form-register">
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" class="form-control" id="username" name="username" required>
            </div>
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" id="name" name="name" required>
            </div>
            <div class="form-group">
                <label for="surname">Surname:</label>
                <input type="text" class="form-control" id="surname" name="surname" required>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" class="form-control" id="email" name="email" required>
            </div>
            <div class="form-group">
                <label for="phone">Phone:</label>
                <input type="tel" class="form-control" id="phone" name="phone" required>
            </div>
            <div class="form-group">
                <label for="city">City:</label>
                <input type="text" class="form-control" id="city"  name="city" required>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" class="form-control" id="password" name="password" required>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary">Register</button>
            </div>
        </form>
    </div>`)

    document.querySelector("form").addEventListener("submit", registerUser)

    const css = document.querySelector(".my-style");
    css.href = "../styles/style_registration.css"
}

export default createRegister;