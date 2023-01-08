const storeBooksCart = (books) => {
  localStorage.setItem("cart", JSON.stringify(books));
}

const loadBooksCart = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

const addToCart = (id) => {
  const books = loadBooksLS();
  const cart_books = loadBooksCart();
  const book = books.find(item => item.id === id);
  cart_books.push(book);
  storeBooksCart(cart_books);
  renderCartButton();
}

const deleteFromCart = () => {
  localStorage.removeItem("cart");
}

const totalCart = () => {
  const cart_books = loadBooksCart();

  return cart_books.length;
}

const sumCart = () => {
  const cart_books = loadBooksCart();

  return cart_books.reduce((total, item) => total += item.price, 0);
}

const renderCartButton = () => {
  let output = `<button type="button" class="btn btn-cart position-relative">
                  <img src="img/logo/logoCart.png" alt="Cart">
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${totalCart()}</span>
                </button>`;
  document.getElementById("cart_button").innerHTML = output;
}