const contact = document.querySelector('.contact');
const list = document.querySelector('.class-book');
const addBook = document.querySelector('.add-book');

list.addEventListener('click', () => {
  contact.classList.add('display-none');
})