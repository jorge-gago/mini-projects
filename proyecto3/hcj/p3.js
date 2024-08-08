const menu =  document.querySelector(".menu")
const footer = document.querySelector("footer")
const container = document.querySelector(".move-container")
const unrotate = document.querySelectorAll(".org-tp-rg")

const handleClick = (e) => {
    // console.log("click menu")
    // container.classList.toggle("rotate")
    // footer.classList.toggle("rotate")
    // unrotate.classList.toggle("unrotate")

    toggleClass({
        elements: [ container, footer],
        className: "rotate"
    })

    toggleClass({
        elements: [...unrotate],
        className: "unrotate"
    })

    // console.log(unrotate)
}

const toggleClass = ({ elements = [], className = " rotate"}) => {
    elements.map( x => {
        x.classList.toggle(`${className}`)
    } )
}

menu.addEventListener("click", handleClick)

console.log(unrotate)

