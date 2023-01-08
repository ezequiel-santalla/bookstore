const renderBooks = () => {
  const books = loadBooksLS();
  let output = "";

  for (let book of books) {
    output += `<div class="col-md-2 mb-5 mt-2">
                <div class"card">
                  <img src="img/books/${book.image}" class="card-img-top card-picture" alt="${book.name}">
                  <div class="card-body text-center mt-3">
                    <h5 class="card-title mb-2">${book.name}</h5>
                    <p>$${book.price}</p>
                    <a href="#" class="btn btn-info" onClick="addToCart(${book.id});">Add to Cart</a>
                  </div>
                </div>
              </div>`;
  }
  document.getElementById("books").innerHTML = output;
}

renderBooks();
renderCartButton();