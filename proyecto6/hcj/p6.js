// const zone = document.querySelector(".tets")
// zone.elementFromPoint(50, 50)

const boxes = document.querySelectorAll(".box")

// const isVisible = (e) => {
//     boxes.forEach(box => {
//         box.classList.toggle("act", box.isIntersecting)
//     })
    
// }

const addObserver = (objs) => {
    objs.forEach(element => {
        observer.observe(element)
    });
}

// const observer = new IntersectionObserver(isVisible, {rootMargin: "10%"})
const observer = new IntersectionObserver(elements => {
    elements.forEach(box => {
        box.target.classList.toggle("act", box.isIntersecting)
        console.info(box)
    })
},
{
    threshold: "0.5",
    // rootMargin: "-200px",
})
addObserver(boxes)




// const trigger = window.innerHeight * 0.9


// const handleEvent = (e) => {
//     // console.log("scroll")

//     // const trigger = window.innerHeight * 0.9
//     console.log(trigger)


// }

// document.addEventListener("scroll", handleEvent)


console.log("on")

// const trigger = window.innerHeight * 0.9
// contents.forEach(box => {
//     const Top = box.getBoundingClientRect().top

//     if(Top < trigger) {
//         box.classList.add('show')
//     } else {
//         box.classList.remove('show')
//     }
// })