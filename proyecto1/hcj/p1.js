let all = document.querySelector("main")
let act = document.querySelector(".act")

const handleClick = (e) => {    
    let element = e.target.closest("section") 
    if(!element) {
        return 0
    }
    act.classList.remove("act")
    element.classList.add("act")
    act = element
}

all.addEventListener("click", handleClick)