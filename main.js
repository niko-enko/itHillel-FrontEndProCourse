const img = document.querySelector("#image")
const container = document.querySelector(".container")

function getRandImg () {
    let randNum = Math.floor(Math.random() * 10 - 1)
    img.src = `./img/${randNum}.jpg`;
}

container.addEventListener("click", () => getRandImg())
