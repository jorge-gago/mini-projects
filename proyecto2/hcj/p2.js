const dots = document.querySelectorAll(".dot")
const line = document.querySelector(".in-line")
const prev = document.querySelector("#prev")
const next = document.querySelector("#next")
const totalSteps = dots.length - 1
const lineSeg =Math.ceil(100/(totalSteps ))
let step = 0

const handleNext = (e) => {
    if (!isActive(e)) {
        return 0
    }
    step += 1
    btnState()
    lineState()
    dotState({})
}

const handlePrev = (e) => {
    if (!isActive(e)) {
        return 0
    }
    step -= 1
    btnState()
    lineState()
    dotState({ add: false })
}

const isActive = (e) => {
    return e.target.classList.contains("act")
}

const btnState = () => {
    console.log("step: ", step)
    if (step == 0) {
        prev.classList.remove("act")
    }
    if (step == 1) {
        prev.classList.add("act")
    }
    if(step == totalSteps){
        next.classList.remove("act")
    }
    if(step == totalSteps - 1){
        next.classList.add("act")
    }
}

const dotState = ({ add = true }) => {
    if( !add ) {
        // let pos = step + 1
        dots[step + 1].classList.remove("load")
        return 0
    }
    dots[step].classList.add("load")
    console.log(dots)
}

const lineState = () => {
    line.style.width = lineSeg * step + "%"
} 

prev.addEventListener("click", handlePrev)
next.addEventListener("click", handleNext)

