const btnAdd = document.querySelector(".submit");
const title = document.querySelector(".title");
const author = document.querySelector(".author");
const bookStore = document.querySelector(".books-collection");
const collection = [];

btnAdd.addEventListener("click", (e) => {
  e.preventDefault();
  if (title.value && author.value) {
    const book = {
      title: title.value,
      author: author.value,
      id: Date.now(),
    };
    collection.push(book);

    renderBooks();
    title.value = "";
    author.value = "";
  }
});

const renderBooks = () => {
  bookStore.innerHTML = "";
  collection.forEach((item) => {
    const singleBook = document.createElement("div");
    singleBook.classList.add("class-book");
    const p = document.createElement("p");
    p.textContent = `${item.title} By ${item.author}`;
    const bton = document.createElement("button");
    bton.textContent = `Remove`;
    bton.classList.add("remove");
    bton.setAttribute("id", item.id);
    singleBook.appendChild(p);
    singleBook.appendChild(bton);
    bookStore.appendChild(singleBook);
  });
};

//Use Event bubbling
bookStore.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove")) {
    const targetid = parseInt(e.target.getAttribute("id"));
    console.log("id", targetid);
    removeBook(targetid);
  }
});

function removeBook(targetId) {
  const newArr = collection.filter((item) => {
    console.log("dhd", item.id, targetId);
    return item.id !== targetId;
  });
  console.log(newArr);
  collection.length = 0;
  collection.push(...newArr);
  renderBooks();
}
