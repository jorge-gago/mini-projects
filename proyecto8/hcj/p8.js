// import {keyEvent} from "templates"

const init = document.querySelector(".init")
const events = document.querySelector(".event")


const keyEvent = (e) => {
    console.log(e)
    return `
        <div class="sub-box center-flex col-flex">
            <span>Key</span>
            <div class="key val center-flex">${e.key}</div>
        </div>

        <div class="sub-box center-flex col-flex">
            <span>KeyCode</span>
            <div class="key val center-flex">${e.keyCode}</div>
        </div>

        <div class="sub-box center-flex col-flex">
            <span>Code</span>
            <div class="key val center-flex">${e.code}</div>
        </div>
       
    `
}

const handlePress = (e) => {
    events.innerHTML = keyEvent(e)
}


const eventos = (e, listener) => {
    // console.log(listener)
    // console.log(e)

    init.classList.add("hidden")
    events.classList.remove("hidden")

    handlePress(e)
}



// document.addEventListener("scroll", (e) => {eventos(e, "scroll")})

// document.addEventListener("click", (e) => {eventos(e, "click")} )

document.addEventListener("keypress", (e) => {eventos(e, "press")} )

// document.addEventListener("mousemove", (e) => {eventos(e, "move")} )

