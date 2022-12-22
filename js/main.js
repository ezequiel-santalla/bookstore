// Array of catalog books
const books = [
  {id: 1, name: "Classic", price: 9.99, stock: 9},
  {id: 2, name: "Fantasy", price: 10.99, stock: 10},
  {id: 3, name: "Horror", price: 11.99, stock: 8},
  {id: 4, name: "Romantic", price: 12.99, stock: 8},
  {id: 5, name: "Science Fiction", price: 13.99, stock: 10},
]; 

// Array of cart books
const books_cart = []; 

// Define book class
class Book {
  constructor (id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.tax = 1.21;
  }

  applyTax () {
    this.price = this.price * this.tax;
  }
}

// Declare search boook function
function searchBook(id) {
  return (books.find(item => item.id === id) || null);
}

// Declare add book to the cart function
function addBook(book) {
  books_cart.push(book);
}

// Declare delete book to the cart function
function deleteBook(id) {
  let position = books_cart.findIndex(item => item.id === id);

  if (position >= 0) {
    books_cart.splice(position, 1);
  } 
}

// Tour book catalog function
function tourBook() {
  let book_content = "";

  for (let book of books) {
    book_content += book.id + " - " + book.name + " $" + book.price + "\n"; 
  }

  return book_content;
}

// Tour book cart function
function tourBookCart() {
  let book_content = "";

  for (let book of books_cart) {
    book_content += book.id + " - " + book.name + " $" + book.price + "\n"; 
  }

  return book_content;
}

alert("Welcome to the Best online BookStore you have ever seen!");

let nameEntered = prompt("Please, write your name:");

alert(`Hi ${nameEntered}, nice to meet you!`);

// Load the books from the catalog
let loadBook = true;

// Load the books from the cart
loadBook = true;

while (loadBook) {
  let book_content = tourBook();

  // Book ID
  let book_ID = parseInt(prompt(`Select the product to add to the cart:\n\n${book_content}`));

  // Search Book
  let book = searchBook(book_ID);

  // Verify if the selected product is valid
  if (book != null) {
    addBook(book);
  }
  else {
    alert(`The book with the entered ID: ${book_ID} does not exist!`)
  }

  // Ask if the buyer wants to add more books to the cart
  loadBook = confirm("Do you want to add another book to the cart?");
}

// Delete the books from the cart
loadBook = true;

while (loadBook) {
  let book_content = tourBookCart();

  // Book ID
  let book_ID = parseInt(prompt(`Select the product to delete from the cart: ("0" to exit)\n\n${book_content}`));

  if (book_ID > 0) {
    deleteBook(book_ID);
  }
  else {
    alert(`The book with the entered ID: ${book_ID} does not exist!`)
  }

  // Ask if the buyer wants to add more books to the cart
  loadBook = confirm("Do you want to delete another book to the cart?");
}

let totalToPay = 0;
let book_content = "";

for (let bk of books_cart) {
  let book = new Book(bk.id, bk.name, bk.price, bk.stock);
  book.applyTax();
  book_content += book.id + " - " + book.name + " $" + book.price + "\n";
  totalToPay += book.price;
}

// Total to pay 
alert(`Books selected:\n\n${book_content} \n\nTotal to pay: $${totalToPay.toFixed(2)}`);
