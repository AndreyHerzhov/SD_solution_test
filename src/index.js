const refs = {
    addBtn: document.querySelector('.add_button'),
    input: document.querySelector('input'),
    list: document.querySelector('.pairs_list')
}

const arrOfPairs = []

refs.addBtn.addEventListener('click', addPair)

const createListItem = (text) => `<li class="pairs-list_item">${text}</li>`

const addLiToList = (markdown) => {
    refs.list.insertAdjacentHTML('beforeend', markdown)
}

function addPair(e) {
    e.preventDefault()
    if(!refs.input.value) {
        return
    }
   
    const value = refs.input.value
    const liItem = createListItem(value)
    arrOfPairs.push(value)
    console.log(arrOfPairs)
    addLiToList(liItem)
    refs.input.value = ''
}