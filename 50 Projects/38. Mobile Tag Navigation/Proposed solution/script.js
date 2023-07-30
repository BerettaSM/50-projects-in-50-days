const phone = document.querySelector('.phone')
const contents = phone.querySelectorAll('.content')
const nav = document.querySelector('nav')
const list = nav.querySelector('ul')
const listItems = list.querySelectorAll('li');

nav.addEventListener('click', selectTab)

function selectTab(event) {
    const clickedListItem = event.target.closest('li')
    if(!clickedListItem) return
    
    const listItemIndex = Array.prototype.indexOf.call(listItems, clickedListItem)

    showListItem(clickedListItem)
    showNthContent(listItemIndex)
}

function showListItem(listitem) {
    unselectListItems()
    listitem.classList.add('active')
}

function showNthContent(nth) {
    hideAllContents()
    contents[nth].classList.add('show')
}

function hideAllContents() {
    contents.forEach(content => content.classList.remove('show'))
}

function unselectListItems() {
    listItems.forEach(listItem => listItem.classList.remove('active'))
}