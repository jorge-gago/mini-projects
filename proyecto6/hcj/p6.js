const boxes = document.querySelectorAll(".box")
const trigger = window.innerHeight * 0.7

const handleScroll = () => {
    boxes.forEach(box => {
        const Top = box.getBoundingClientRect().top
    
        if(Top < trigger) {
            box.classList.add('act')
        } else {
            box.classList.remove('act')
        }
    
    })
}

document.addEventListener("scroll", handleScroll)
handleScroll()



