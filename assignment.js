const r = document.querySelector('.ET')
const d = document.querySelector('.ED')
const c = document.querySelector('.cat')
const des = document.querySelector('.des')
const ul = document.querySelector('.ul')
const addBtn = document.querySelector('.add-btn')

addBtn.addEventListener('click', addEvent)

function addEvent() {
    if (r.value.trim() === '') {
        alert('Please enter a task')
        return
    }

    const li = document.createElement('li')
    li.className='li'

    li.innerHTML = `
        <span class="text">${r.value}</span><br>
        <span class="date">${d.value}</span><br>
        <span class="cat">${c.value}</span><br>
        <span class="des">${des.value}</span>
        <button class="delete">X</button>
    `

    ul.appendChild(li)


    li.querySelector('.delete').addEventListener('click', () => {
        li.remove()
    })

    r.value = ''
    d.value = ''
    des.value = ''
}
