const renderBook = () => {
  const book = loadBook();
  let output = `<div class="col-4">
                  <img src="img/books/${book.image}" alt="${book.name}" class="img-fluid ps-3">
                </div>
                <div class="col-8">
                  <h2>${book.name}</h2>
                  <h4 class="pt-1 pb-1">${book.author}</h4>
                  <h5 class="pt-1 pb-1">${book.category}</h5>
                  <p class="pt-1 pb-1">${book.description}</p>
                  <p><b>US$${book.price}</b></p>
                  <p><a href="#" class="btn btn-info" onClick="addToCart(${book.id});">Add (+)</a></b></p>
                </div>`;
  
  document.getElementById("book").innerHTML = output;
}

renderBook();
renderCartButton();