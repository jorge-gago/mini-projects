let num = 0
let blu = 1
const numbers = document.querySelector(".number")
const blurr = document.querySelector("img")

const timer = setInterval(
    () => {
        if (num === 100){
            clearInterval(timer)
            numbers.style.opacity = 0
            blurr.style.filter = `blur(0rem)`
            return 0
        }  
        num += 1
        setNum()
        setBlurr()
    }   
,10)

const setNum = () => {
    numbers.innerHTML = `${num}%`
    numbers.style.opacity = 1  - (0.007 * num)

}

const setBlurr = () => {
    blu -= 0.01 
    blurr.style.filter = `blur(${blu}rem)`
}

console.log(numbers, blurr)

