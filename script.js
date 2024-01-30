const lightBulb1 = document.querySelector("#lightbulb1")
const lightBulb2 = document.querySelector("#lightbulb2")
const lightBulb3 = document.querySelector("#lightbulb3")
let subtitle = document.querySelector('.subtitle')
let count = 0

lightBulb1.addEventListener("mouseover", function(){
    count++
    this.classList.toggle('active')
    subtitle.innerHTML = `You've clicked the lightbulbs ${count} times`
})

lightBulb2.addEventListener("mouseover", function(){
    count++
    this.classList.toggle('active')
    subtitle.innerHTML = `You've clicked the lightbulbs ${count} times`
})

lightBulb3.addEventListener("mouseover", function(){
    count++
    subtitle.innerHTML = `You've clicked the lightbulbs ${count} times`
    this.classList.toggle('active')
    
})

