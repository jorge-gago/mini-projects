const bar = document.querySelector("input")
const btn = document.querySelector(".btn")
const cont = document.querySelector(".container")

const handleClick = () => {
    cont.classList.toggle("hidden")
    bar.focus()
    console.log( bar, btn)
}


btn.addEventListener("click", handleClick)