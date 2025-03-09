# Bookshelf

The Library App is a JavaScript-based project designed to manage a collection of books. It allows users to add, display, update, and remove books from their personal library using a simple interface. This project is an extension of the 'Book' example and demonstrates object-oriented programming principles, DOM manipulation, and event handling.

## Features

### Add New Books:
- Users can input book details (title, author, number of pages, and read status) through a form.
- A unique ID is generated for each book using crypto.randomUUID().

### Display Books:
- All books are displayed as cards with their details.
- Books are dynamically rendered from an array (myLibrary) for maintainability and scalability.

### Update Read Status:
- A button on each book toggles its read status.

### Remove Books:
- Users can delete books from their library using a remove button.

### Persistent Data Structure:
-  Books are stored in an array, separating data storage from UI logic.
