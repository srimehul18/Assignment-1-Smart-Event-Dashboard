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


    const clear = document.querySelector('.clear')
    const sample = document.querySelector('.sample')
    if (clear) clear.addEventListener('click', clearEvents)
    if (sample) sample.addEventListener('click', addSampleEvent)

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
        <span class="text">${sampleEvent.ET}</span><br>
        <span class="date">${sampleEvent.ED}</span><br>
        <span class="cat">${sampleEvent.cat}</span><br>
        <span class="des">${sampleEvent.des}</span>
        <button class="delete">X</button>
    `
    ul.appendChild(li)
}
