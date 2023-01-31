const renderBooks = () => {
  const books = loadBooksLS();
  let output = "";

  for (let book of books) {
    output += `<div class="col-md-2 mb-4 mt-2" id="${book.id}">
                <a href="#" onClick="seeBook(${book.id});" class="text-decoration-none text-dark">
                  <div class"card">
                    <img src="img/books/${book.image}" alt="${book.name}" class="card-img-top">
                    <div class="card-body text-center mt-3">
                      <h5 class="card-title mb-2">${book.name}</h5>
                      <p>US$${book.price}</p>
                    </div>
                  </div>
                </a>
              </div>`;
  }
  document.getElementById("books").innerHTML = output;
}

renderBooks();
renderCartButton();
