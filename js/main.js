// Book Price
const bookPrice = 9.99;

//Book Stock
const bookStock = 45;

// Book discounts
const noDiscount = 1;
const firstDiscount = (1 - 0.10);
const secondDiscount = (1 - 0.25);
const thirdDiscount = (1 - 0.35);

// TAX
const tax = 1.21;

alert("Welcome to the Best online BookStore you have ever seen!");

let nameEntered = prompt("Please, write your name:");

alert(`Hi ${nameEntered}, nice to meet you!`);

alert(`The price of our books is $9.99 (max 45 copies)
  
Here are our discounts:

1 book = 0%
2 or 3 books = 10%
4, 5, or 6 books = 25%
7 or more books = 35%`);

let bookQuantity = parseInt(prompt("How many books do you want?"));

while (bookQuantity > bookStock) { 
  alert(`Our maximum stock is ${bookStock} books.`);
  bookQuantity = prompt("Please enter another number:");
}

// Function
function priceCalculator(bookQuantity, bookPrice, noDiscount, firstDiscount, secondDiscount, thirdDiscount, tax) {
  if (bookQuantity >= 0 && bookQuantity <= 1) {
    let finalPrice = (bookQuantity * bookPrice * noDiscount * tax)
    return finalPrice.toFixed(2);
  }
  else if (bookQuantity >= 2 && bookQuantity <= 3) {
    let finalPrice = (bookQuantity * bookPrice * firstDiscount * tax)
    return finalPrice.toFixed(2);
  }
  else if (bookQuantity >= 4 && bookQuantity <= 6) {
    let finalPrice = (bookQuantity * bookPrice * secondDiscount * tax)
    return finalPrice.toFixed(2);
  }
  else {
    let finalPrice = (bookQuantity * bookPrice * thirdDiscount * tax)
    return finalPrice.toFixed(2);
  }
}

alert("Your final price is: $" + priceCalculator(bookQuantity, bookPrice, noDiscount, firstDiscount, secondDiscount, thirdDiscount, tax));

alert("Thanks for your visit, we hope you come back soon!");
