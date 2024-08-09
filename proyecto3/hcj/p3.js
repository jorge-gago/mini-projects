const corner =  document.querySelector(".corner")
// const menu = document.querySelector(".menu")
const footer = document.querySelector("footer")
const container = document.querySelector(".move-container")
const unrotate = document.querySelectorAll(".org-tp-rg")

const handleClick = (e) => {
    toggleClass({
        elements: [ container, footer],
        className: "rotate"
    })

    toggleClass({
        elements: [...unrotate],
        className: "unrotate"
    })

    toggleClass({
        elements: [corner],
        className: "on-menu"
    })
}

const toggleClass = ({ elements = [], className = "rotate"}) => {
    elements.map( x => {
        x.classList.toggle(`${className}`)
    } )
}

corner.addEventListener("click", handleClick)