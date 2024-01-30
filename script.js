const lightBulb1 = document.querySelector("#lightbulb1")
const lightBulb2 = document.querySelector("#lightbulb2")
const lightBulb3 = document.querySelector("#lightbulb3")
let subtitle = document.querySelector('.subtitle')
let count = 0

lightBulb1.addEventListener("click", function(){
    count++
    lightBulb1.classList.toggle('active')
    subtitle.innerHTML = `You've clicked the lightbulbs ${count} times`
})

lightBulb2.addEventListener("click", function(){
    count++
    lightBulb2.classList.toggle('active')
    subtitle.innerHTML = `You've clicked the lightbulbs ${count} times`
})

lightBulb3.addEventListener("click", function(){
    count++
    subtitle.innerHTML = `You've clicked the lightbulbs ${count} times`
    lightBulb3.classList.toggle('active')
    
})

