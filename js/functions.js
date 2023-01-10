const storeBooksCart = (books) => {
  localStorage.setItem("cart", JSON.stringify(books));
}

const loadBooksCart = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

const seeBook = (id) => {
  const book = searchBook(id);
  localStorage.setItem("book", JSON.stringify(book));
  location.href = "book-description.html";
}

const loadBook = () => {
  return JSON.parse(localStorage.getItem("book"));
}

const bookInCart = (id) => {
  const cart_books = loadBooksCart();

  return cart_books.some(item => item.id === id); 
}

const addToCart = (id) => {
  const books = loadBooksLS();
  const cart_books = loadBooksCart();

  if (bookInCart(id)) {
    let position = cart_books.findIndex(item => item.id === id);
    cart_books[position].quantity += 1;
  }
  else {
    const book = books.find(item => item.id === id);
    book.quantity = 1;
    cart_books.push(book);
  }

  storeBooksCart(cart_books);
  renderCartButton();
}

const deleteItemCart = (id) => {
  const cart_books = loadBooksCart();
  const books = cart_books.filter(item => item.id !== id);
  storeBooksCart(books);
  renderBooksCart();
  renderCartButton();
}

const emptyCart = () => {
  localStorage.removeItem("cart");
  renderBooksCart();
  renderCartButton();
}

const totalCart = () => {
  const cart_books = loadBooksCart();

  return cart_books.reduce((total, item) => total += item.quantity, 0);
}

const subtotal = () => {
  const cart_books = loadBooksCart();

  return cart_books.reduce((total, item) => total += item.quantity * item.price, 0);
}

const tax = () => {
  const cart_books = loadBooksCart();
  
  return cart_books.reduce((total, item) => total += item.quantity * item.price * 0.085, 0);
}

const sumCart = () => {
  const cart_books = loadBooksCart();

  return cart_books.reduce((total, item) => total += item.quantity * item.price + item.quantity * item.price * 0.085, 0);
}

const renderCartButton = () => {
  let output = `<button type="button" class="btn btn-cart position-relative">
                  <img src="img/logo/logoCart.png" alt="Cart">
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${totalCart()}</span>
                </button>`;
  document.getElementById("cart_button").innerHTML = output;
}

const addBookItem = (id) => {
  const cart_books = loadBooksCart();
  let position = cart_books.findIndex(item => item.id === id);
  cart_books[position].quantity += 1;
  storeBooksCart(cart_books);
  renderBooksCart();
  renderCartButton();
}

const deleteBookItem = (id) => {
  const cart_books = loadBooksCart();
  let position = cart_books.findIndex(item => item.id === id);
  cart_books[position].quantity -= 1;

  if (cart_books[position].quantity == 0) {
    deleteItemCart(id);
  }
  else {
    storeBooksCart(cart_books);
    renderBooksCart();
    renderCartButton();
  }
}

const searchBook = (id) => {
  const books = loadBooksLS();

  return books.find(item => item.id === id);
}
