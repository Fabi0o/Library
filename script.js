let myLibrary = [];
let library = document.querySelector(".library");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}
function displayBooks() {
  myLibrary.forEach((book) => {
    library.innerHTML += `<div class="book">
        <div class="title, bookItem">${book.title}</div>
        <div class="author, bookItem">${book.author}</div>
        <div class="pages, bookItem">${book.pages}</div>
        <button class="read, bookItem">${book.read}</button>
        <button class="remove, bookItem">Remove</button>
      </div>`;
  });
}
