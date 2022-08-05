const refs = {
    addBtn: document.querySelector('.add_button'),
    input: document.querySelector('input'),
    list: document.querySelector('.pairs_list'),
    clearBtn: document.querySelector('#clear_button'),
    sortByValueBtn: document.querySelector('.sort_value'),
    sortByNameBtn: document.querySelector('.sort_name')
}
 
let arrOfPairs = []
let arrForTrim = []

refs.addBtn.addEventListener('click', addPair)
refs.clearBtn.addEventListener('click', clearList)
refs.sortByValueBtn.addEventListener('click', sortByValue)
refs.sortByNameBtn.addEventListener('click', sortByName)


const createListItem = (text) => `<li class="pairs-list_item">${text}</li>`

const addLiToList = (markdown) => {
    refs.list.insertAdjacentHTML('beforeend', markdown)
}

function clearList(e) {
  refs.list.innerHTML = ''
  arrOfPairs = []
  console.log(arrOfPairs)
}
 
function addPair(e) {
    e.preventDefault() 
    const letters = /^[a-zA-Z0-9\s]*=(?=[\sa-zA-Z0-9]+[a-zA-Z0-9]$)/;
    if(!refs.input.value) {
        return
    }else if(refs.input.value.match(letters))
      {

        // delete all spaces between "=" and "Name/Value" pair
        const value = refs.input.value.trim()
        arrForTrim.push(value)
        const trimArr = arrForTrim.map(el => el.split(' ').join('').split('  '))
        const newArr = trimArr.flatMap(el => el)
        let trimmedName = newArr[0]
        
        // create list item and push it into list
        const liItem = createListItem(trimmedName)
        arrOfPairs.push(trimmedName)
        addLiToList(liItem)
        refs.input.value = ''
        arrForTrim = []
      }
    else
      {
      alert("Write 'Name=Value' pair. Names and Values can contain only alpha-numeric characters.");
      return false;
      }
       
}

// Leonit = Augtin
// Antony = Boris
// Boris =   Johnson
// Kilo = Mike
// Yankee = Victor
// Frank =  Antony
// Echo = Bravo
// Delta =  Charlie

/* 
 * Sorting list by Value. Reversing the array two times
*/


function sortByValue(e) {
    refs.list.innerHTML = ''
    if(arrOfPairs) {
      const sortedByValue = arrOfPairs.map(el => el.split('=').reverse().join('='))
       
      sortedByValue.sort((a, b) => a.localeCompare(b))
      const sortedBack =  sortedByValue.map(el => el.split('=').reverse().join('='))
      const markdown = sortedBack.reduce((acc, text) => acc + createListItem(text), '')
      addLiToList(markdown)
    }
    
   
}

/* 
 * Sorting list by Name 
*/


 function sortByName () {
    refs.list.innerHTML = ''
    if(arrOfPairs) {
      const sortedByName = arrOfPairs.sort((a, b) => a.localeCompare(b))  
      const markdown = sortedByName.reduce((acc, text) => acc + createListItem(text), '')
      addLiToList(markdown)
    }
     
}