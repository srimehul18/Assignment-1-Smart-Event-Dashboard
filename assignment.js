const r = document.querySelector('.ET')
const d = document.querySelector('.ED')
const c = document.querySelector('.cat')
const des = document.querySelector('.des')
const ul = document.querySelector('.ul')
const addBtn = document.querySelector('.add-btn')

addBtn.addEventListener('click', addEvent)

const sample = document.querySelector('.sample')

function addEvent() {
    if (r.value.trim() === '') {
        alert('Please enter a task')
        return
    }
    else if (d.value.trim() === '') {
        alert('Please enter a date')
        return
    }
    else if (c.value.trim() === '') {
        alert('Please select a category')
        return
    }

    const li = document.createElement('li')
    li.className='li'

    li.innerHTML = `
        <span class="text">${r.value}</span><br>
        <span class="date" id='date'>🗓️${d.value}</span><br>
        <span class="cat" id='cat'>${c.value}</span><br>
        <span class="des">${des.value}</span>
        <button class="delete">X</button>

        <button class="edit">✎</button>

    `

    ul.appendChild(li)


    li.querySelector('.delete').addEventListener('click', () => {
        li.remove()
    })


    const clear = document.querySelector('.clear')
    const sample = document.querySelector('.sample')
    const edit = document.querySelector('.edit')
    if (clear) clear.addEventListener('click', clearEvents)
    if (sample) sample.addEventListener('click', addSampleEvent)
    if (edit) edit.addEventListener('click', editEvent)

    r.value = ''
    d.value = ''
    des.value = ''
}

function clearEvents() {
    ul.innerHTML = ''
}

function addSampleEvent() {
    const sampleEvent = {
        ET: 'Sample Event',
        ED: '2026-02-09',
        cat: 'Workshop',
        des: 'This is a sample event description.'
    }

    const li = document.createElement('li')
    li.style.width = '250px'

    li.innerHTML = `
        <span class="text" id='st'>${sampleEvent.ET}</span><br>
        <span class="date" id='sd'>🗓️${sampleEvent.ED}</span><br>
        <span class="cat" id='sa'>${sampleEvent.cat}</span><br>
        <span class="des">${sampleEvent.des}</span>
        <button class="delete">X</button>
        <button class="edit">Edit</button>
    `
    ul.appendChild(li)
    li.querySelector('.delete').addEventListener('click', () => {
        li.remove()
    })
}

function editEvent() {
    const li = this.closest('li')
    const text = li.querySelector('.text')
    const date = li.querySelector('.date')
    const cat = li.querySelector('.cat')
    const des = li.querySelector('.des')
    const newText = prompt('Edit Task Name:', text.textContent)
    const newDate = prompt('Edit Date (YYYY-MM-DD):', date.textContent.replace('🗓️', ''))
    const newCat = prompt('Edit Category:', cat.textContent)
    const newDes = prompt('Edit Description:', des.textContent)
    if (newText) text.textContent = newText
    if (newDate) date.textContent = '🗓️ ' + newDate
    if (newCat) cat.textContent = newCat
    if (newDes) des.textContent = newDes
}
