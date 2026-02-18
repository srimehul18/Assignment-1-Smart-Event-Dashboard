const r = document.querySelector('.ET')
const d = document.querySelector('.ED')
const c = document.querySelector('.cat')
const des = document.querySelector('.des')
const ul = document.querySelector('.ul')
const addBtn = document.querySelector('.add-btn')

addBtn.addEventListener('click', function (e) {  
    addEvent()
})

const sample = document.querySelector('.sample')
if (sample) {
    sample.addEventListener('click', addSampleEvent)
}

function addEvent() {
    if (r.value === '') {
        alert('Please enter a task')
        return
    }
    else if (d.value === '') {
        alert('Please enter a date')
        return
    }
    else if (c.value === '') {
        alert('Please select a category')
        return
    }

    const li = document.createElement('li')
    li.className = 'li'

    li.innerHTML = `
    <span class="text">${r.value}</span><br>
    <span class="date">🗓️${d.value}</span><br>
    <span class="cat">${c.value}</span><br>
    <span class="des">${des.value}</span>

    <div class="actions">
        <button class="delete">
            <span class="icon">✗</span>
            <span class="text">Remove</span>
        </button>
        <button class="edit">
            <span class="icon">✎</span>
            <span class="text">Edit</span>
        <button class="star">
            <span class="icon">★</span>
            <span class="text">Star</span>
        </button>
    </div>
    
`
const starbtn = li.querySelector('.star')
    starbtn.addEventListener('click', () => {
        li.classList.toggle('starred')
    })
    

    ul.appendChild(li)
    li.style.transition = "all 0.3s ease"
    

    li.querySelector('.delete').addEventListener('click', () => {
        li.remove()
    })

    li.querySelector('.edit').addEventListener('click', editEvent) 

    const clear = document.querySelector('.clear')

    if (clear) clear.addEventListener('click', clearEvents)

    r.value = ''
    d.value = ''
    c.value = ''         
    des.value = ''
}

function clearEvents() {
    ul.innerHTML = ''
}

function addSampleEvent() {
    const sampleEvent = {
        ET: 'Sample Event',
        ED: '2026-02-09',
        cat: 'Sample Category',
        des: 'This is a sample event description.'
    }

    const li = document.createElement('li')
    li.style.width = '275px'

    li.innerHTML = `
    <span class="text">${sampleEvent.ET}</span><br>
    <span class="date">🗓️${sampleEvent.ED}</span><br>
    <span class="cat">${sampleEvent.cat}</span><br>
    <span class="des">${sampleEvent.des}</span>

    <div class="actions">
        <button class="delete">
            <span class="icon">✗</span>
            <span class="text">Remove</span>
        </button>
        <button class="edit">
            <span class="icon">✎</span>
            <span class="text">Edit</span>
        </button>
        <button class="star">
            <span class="icon">★</span>
            <span class="text">Star</span>
        </button>
    </div>
`

const starbtn = li.querySelector('.star')
    starbtn.addEventListener('click', () => {
        li.classList.toggle('starred')
    })



    ul.appendChild(li)
    li.style.transition = "all 0.3s ease"

    li.querySelector('.delete').addEventListener('click', () => {
        li.remove()
    })

    li.querySelector('.edit').addEventListener('click', editEvent)
}

function editEvent() {
    const li = this.closest('li')
    if (!li) return

    const text = li.querySelector('.text')
    const date = li.querySelector('.date')
    const cat = li.querySelector('.cat')
    const des = li.querySelector('.des')

    if (!text || !date || !cat || !des) return 

    const newText = prompt('Edit Task Name:', text.textContent)
    const newDate = prompt('Edit Date (YYYY-MM-DD):', date.textContent.replace('🗓️', ''))
    const newCat = prompt('Edit Category:', cat.textContent)
    const newDes = prompt('Edit Description:', des.textContent)

    if (newText) text.textContent = newText
    if (newDate) date.textContent = '🗓️ ' + newDate
    if (newCat) cat.textContent = newCat
    if (newDes) des.textContent = newDes
}
