// Init an empty array to store book objects
const myLibrary = [];

// Constructor
function Book(title, author, pages, read) {
  // Unique id for each book
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Prototype function to toggle a book's read status
Book.prototype.toggleReadStatus = function () {
  this.read = !this.read;
};

// Function to add a new book to the library
function addBookToLibrary(title, author, pages, read) {
  // Create a new book object with provided arguments
  const newBook = new Book(title, author, pages, read);

  // Add the new book to the library array
  myLibrary.push(newBook);

  // Display the updated library
  displayLibrary();
}

// When form is submitted
function handleSubmit(e) {
  e.preventDefault();

  // Get form data
  const title = document.getElementById("inputTitle").value;
  const author = document.getElementById("authorInput").value;
  const pagesNum = document.getElementById("pagesInput").value;
  const readOrNot = document.getElementById("haveYouRead").checked;

  // Add book to the library
  addBookToLibrary(title, author, pagesNum, readOrNot);

  // Clear the form
  document.getElementById("new-book-form").reset();
}

// Function to remove a book from the library
function removeBookFromLibrary(id) {
  // Find the index of the book to be removed
  const index = myLibrary.findIndex((book) => book.id === id);

  // Remove the book from the library array
  if (index !== -1) {
    myLibrary.splice(index, 1);
  }

  // Display the updated library
  displayLibrary();
}

// Function to show the library
// Function to show the library
function displayLibrary() {
  // Element for library
  const libraryContainer = document.getElementById("library-container");

  // Clear the library container
  libraryContainer.innerHTML = "";

  // Check if the library is empty
  if (myLibrary.length === 0) {
    // Create a Bootstrap-styled centered message
    const emptyMessage = document.createElement("div");
    emptyMessage.textContent = "No books in your library.";
    emptyMessage.classList.add(
      "text-center",
      "text-muted",
      "mt-5",
      "fs-4",
      "mx-auto"
    );
    libraryContainer.classList.add("text-center", "mx-auto");
    libraryContainer.appendChild(emptyMessage);
    return; // Exit the function early
  }

  // Loop through each book in the library
  myLibrary.forEach((book) => {
    // Creating a card element for the book
    const bookCard = document.createElement("div");
    bookCard.classList.add(
      "book-card",
      "border",
      "border-3",
      "rounded",
      "rounded-3",
      "p-3",
      "m-3"
    );
    bookCard.setAttribute("data-id", book.id);

    // Create elements for the book's details
    const titleElement = document.createElement("h5");
    titleElement.textContent = book.title;
    titleElement.classList.add("text-wrap");

    const authorElement = document.createElement("p");
    authorElement.textContent = `Author: ${book.author}`;
    authorElement.classList.add("p-0", "m-0");

    const pagesElement = document.createElement("p");
    pagesElement.textContent = `Pages: ${book.pages}`;
    pagesElement.classList.add("p-0", "m-0");

    const readStatusElement = document.createElement("p");
    readStatusElement.textContent = `Read: ${book.read ? "Yes" : "No"}`;

    // Toggle read status button
    const toggleReadButton = document.createElement("button");
    toggleReadButton.textContent = "Toggle Read";
    toggleReadButton.classList.add("btn", "btn-warning", "m-2");
    toggleReadButton.addEventListener("click", () => {
      book.toggleReadStatus();
      displayLibrary();
    });

    // Remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("btn", "btn-danger", "m-2");
    removeButton.addEventListener("click", () => {
      removeBookFromLibrary(book.id);
    });

    // Append elements to the book card
    bookCard.appendChild(titleElement);
    bookCard.appendChild(authorElement);
    bookCard.appendChild(pagesElement);
    bookCard.appendChild(readStatusElement);
    bookCard.appendChild(toggleReadButton);
    bookCard.appendChild(removeButton);

    // Append the book card to the library container
    libraryContainer.prepend(bookCard);
  });
}

// Add event listener to the form
document
  .getElementById("new-book-form")
  .addEventListener("submit", handleSubmit);

// Manually add some books to the library
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, true);
addBookToLibrary("1984", "George Orwell", 328, false);

// Display the library
displayLibrary();
