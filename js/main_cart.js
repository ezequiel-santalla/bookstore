const renderBooksCart = () => {
  const cart_books = loadBooksCart();
  let output = ""

  if (totalCart() > 0) {
    output = `<table class="table">
                <tbody>
                  <tr>
                    <td colspan="5" class="text-end"><a href="#" class="btn btn-info" onClick="emptyCart()">Delete Cart<img src="img/trash.png" alt="Delete Cart" width="24"></a></td>
                  </tr>`;

    for (let book of cart_books) {
      output +=   `<tr>
                    <td class="pt-3 pb-3"><img src="img/books/${book.image}" alt="${book.name}" width="96"></td>
                    <td class="align-middle fs-6"><b>Title:</b> ${book.name}<br><b>Author:</b> ${book.author}<br><b>Category:</b> ${book.category}</td>
                    <td class="align-middle fs-6 pt-3"><button class="btn btn-dark rounded" title="Delete Item" onClick="deleteBookItem(${book.id})">-</button> ${book.quantity} x US$${book.price} <button class="btn btn-dark rounded" title="Add Item" onClick="addBookItem(${book.id})">+</button></td>
                    <td class="align-middle text-start pt-3 fs-6">US$${(book.quantity * book.price).toFixed(2)}</td>
                    <td class="align-middle text-end"><a href="#" title="Delete Book"><img src="img/trash.png" alt="Delete Book" onClick="deleteItemCart(${book.id});" width="32"></a></td>
                  </tr>`;
    }

    output +=     `<tr>
                    <td colspan="3" class="fs-6 text-start">Subtotal</td>
                    <td class="fs-6 text-start">US$${subtotal().toFixed(2)}</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="fs-6 text-start">Estimated Tax</td>
                    <td class="fs-6 text-start">US$${tax().toFixed(2)}</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="fs-3 text-start"><b>Total</b></td>
                    <td class="fs-3 text-start"><b>US$${sumCart().toFixed(2)}</b></td>
                    <td>&nbsp;</td>
                  </tr>
                </tbody>
              </table>`;
  }
  else {
    output = `<div class="alert alert-danger text-center" role="alert">You have no books added to the cart yet!</div>`
  }

  document.getElementById("books_selected").innerHTML = output;
}

renderBooksCart();
renderCartButton();
