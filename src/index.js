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
// "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
// 
function addPair(e) {
    e.preventDefault() 
    const letters = /^[a-zA-Z]+[a-zA-Z]*=(?=[a-zA-Z])/;
    if(!refs.input.value) {
        return
    }else if(refs.input.value.match(letters))
      {
        const value = refs.input.value
        const liItem = createListItem(value)
        arrOfPairs.push(value)
        console.log(arrOfPairs)
        addLiToList(liItem)
        refs.input.value = ''
      }
    else
      {
      alert("message");
      return false;
      }
   
   
      
}

const sortByValueBtn = document.querySelector('.sort_value')
const sortByNameBtn = document.querySelector('.sort_name')
 
sortByValueBtn.addEventListener('click', sortByValue)
sortByNameBtn.addEventListener('click', sortByName)

function sortByValue(e) {
    refs.list.innerHTML = ''
    
    const sortedByValue = arrOfPairs.map(el => el.split('=').reverse().join('='))
    sortedByValue.sort((a, b) => a.localeCompare(b))
    const sortedBack =  sortedByValue.map(el => el.split('=').reverse().join('='))
    const markdown = sortedBack.reduce((acc, text) => acc + createListItem(text), '')
    addLiToList(markdown)
    console.log(sortedBack)
   
}

 function sortByName (e) {
    refs.list.innerHTML = ''
    console.log(arrOfPairs)
    const sortedByName = arrOfPairs.sort((a, b) => a.localeCompare(b))  
    const markdown = sortedByName.reduce((acc, text) => acc + createListItem(text), '')
    addLiToList(markdown)
    console.log(sortedByName)
}