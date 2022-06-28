const btnAdd = document.querySelector('.submit');
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const bookStore = document.querySelector('.books-collection');
const collection = JSON.parse(localStorage.getItem('form')) || [];
/* eslint-disable no-use-before-define */
// console.log('ten');

btnAdd.addEventListener('click', (e) => {
  e.preventDefault();
  if (title.value && author.value) {
    const book = {
      title: title.value,
      author: author.value,
      id: Date.now(),
    };
    collection.push(book);
    localStorage.setItem('form', JSON.stringify(collection));
    renderBooks();
    title.value = '';
    author.value = '';
  }
});

const renderBooks = () => {
  bookStore.innerHTML = '';
  collection.forEach((item) => {
    const singleBook = document.createElement('div');
    singleBook.classList.add('class-book');
    const p = document.createElement('p');
    p.textContent = `${item.title} By ${item.author}`;
    const bton = document.createElement('button');
    bton.textContent = 'Remove';
    bton.classList.add('remove');
    bton.setAttribute('id', item.id);
    singleBook.appendChild(p);
    singleBook.appendChild(bton);
    bookStore.appendChild(singleBook);
  });
};
renderBooks();
// Use Event bubbling
bookStore.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove')) {
    const targetid = parseInt(e.target.getAttribute('id'), 10);
    removeBook(targetid);
  }
});

function removeBook(targetId) {
  const newArr = collection.filter((item) => item.id !== targetId);
  collection.length = 0;
  collection.push(...newArr);
  localStorage.setItem('form', JSON.stringify(collection));
  renderBooks();
}
