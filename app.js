

const taskTitle = document.getElementById("task-title")

taskTitle.style.background =`#333`
taskTitle.style.color = `#fff`
taskTitle.style.padding = `15px`
taskTitle.style.display = `none`

taskTitle.textContent = `My tasks`
taskTitle.innerText = `My favourite tasks`
taskTitle.innerHTML = `<span style="color : red">My tasks</span>`

let li = document.querySelector(`li`)
li = document.querySelector(`li:last-child`)
li = document.querySelector(`li:nth-child(odd)`)
const oddLi = document.querySelectorAll(`li:nth-child(odd)`)
/*
for(let i = 0; i < 2; i++){
    oddLi[i]
        .style.background = `#ddd`
}
*/

oddLi.forEach((li) => {
    li.style.background = `#ddd`
})

console.log(oddLi)

const list = document.querySelector(`ul`)

console.log(list)



