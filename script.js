let myLibrary = [
  {
    title: "Hobbit",
    author: "J.R.R. Tolkien",
    pages: 256,
    read: "Read",
  },
];
const library = document.querySelector(".library");

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
        <div class="title, bookItem">"${book.title}"</div>
        <div class="author, bookItem">${book.author}</div>
        <div class="pages, bookItem">${book.pages}</div>
        <button class="read, bookItem">${book.read}</button>
        <button class="remove, bookItem">Remove</button>
      </div>`;
  });
}
displayBooks();

const form = document.querySelector("form");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function (e) {
  const title = document.querySelector(".title").value;
  const author = document.querySelector(".author").value;
  const pages = document.querySelector(".pages").value;
  const isRead = document.querySelector(".isRead").value;
  if (title != "" && author != "" && pages != 0) {
    let newBook = new Book(title, author, pages, isRead);
    library.innerHTML = "";
    addBookToLibrary(newBook);
    displayBooks();
  } else alert("Every form input have to be filled!");
});
