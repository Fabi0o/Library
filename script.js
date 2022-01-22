//Stores all books
let myLibrary = [
  {
    title: "Hobbit",
    author: "J.R.R. Tolkien",
    pages: 256,
    read: "Read",
  },
];
const library = document.querySelector(".library");
//creates books
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
//Adds book object to the myLibrary array and display every book on page
function addBookToLibrary(book) {
  myLibrary.push(book);
}
function displayBooks() {
  myLibrary.forEach((book) => {
    library.innerHTML += `<div class="book" data-index-number = ${myLibrary.indexOf(
      book
    )}>
        <div class="title bookItem">"${book.title}"</div>
        <div class="author bookItem">${book.author}</div>
        <div class="pages bookItem">${book.pages}</div>
        <button class="read bookItem">${book.read}</button>
        <button class="remove bookItem">Remove</button>
      </div>`;
  });
  readButtonFunctionality();
  ramoveButtonFunctionality();
}
displayBooks();
//takes value from the form and creates books accordingly
const form = document.querySelector("form");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function (e) {
  const title = document.querySelector(".title").value;
  const author = document.querySelector(".author").value;
  const pages = document.querySelector(".pages").value;
  const isRead = document.querySelector(".isRead").checked;
  let read = "Read";
  if (title != "" && author != "" && pages != 0) {
    if (!isRead) {
      read = "Not read";
    }
    let newBook = new Book(title, author, pages, read);
    library.innerHTML = "";
    addBookToLibrary(newBook);
    displayBooks();
  } else alert("Every form input have to be filled!");
});
//makes read button to work
function readButtonFunctionality() {
  const buttons = document.querySelectorAll(".read");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.textContent == "Read") {
        button.textContent = "Not read";
        let parent = button.parentElement;
        let arrayItem = myLibrary[parent.dataset.indexNumber];
        arrayItem.read = "Not read";
      } else if (button.textContent == "Not read") {
        button.textContent = "Read";
        let parent = button.parentElement;
        let arrayItem = myLibrary[parent.dataset.indexNumber];
        arrayItem.read = "Read";
      }
    });
  });
}
//makes remove button to work
function ramoveButtonFunctionality() {
  const buttons = document.querySelectorAll(".remove");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let parent = button.parentElement;
      myLibrary.splice(parent.dataset.indexNumber, 1);
      library.innerHTML = "";
      displayBooks();
    });
  });
}
