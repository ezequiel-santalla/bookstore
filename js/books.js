const books = [
  
  // Classics
  {id: 1, name: "A Study in Scarlet", price: 9.99, author: "Arthur Conan Doyle", image: "aStudyInScarlet.png", category: "Classics"},
  {id: 2, name: "The Adventures of Sherlock Holmes", price: 9.99, author: "Arthur Conan Doyle", image: "theAdventuresOfSherlockHolmes.png", category: "Classics"},
  {id: 3, name: "The Hound of the Beaskervilles", price: 9.99, author: "Arthur Conan Doyle", image: "theHoundOfTheBaskervilles.png", category: "Classics"},
  {id: 4, name: "The Memoirs of Sherlock Holmes", price: 9.99, author: "Arthur Conan Doyle", image: "theMemoirsOfSherlockHolmes.png", category: "Classics"},
  {id: 5, name: "The Return of Sherlock Holmes", price: 9.99, author: "Arthur Conan Doyle", image: "theReturnOfSherlockHolmes.png", category: "Classics"},
  {id: 6, name: "The Picture of Dorian Gray", price: 9.99, author: "Oscar Wilde", image: "thePictureOfDorianGray.png", category: "Classics"},
  {id: 7, name: "Hamlet", price: 9.99, author: "William Shakespeare", image: "hamlet.png", category: "Classics"},
  {id: 8, name: "Julius Caesar", price: 9.99, author: "William Shakespeare", image: "juliusCaesar.png", category: "Classics"},
  {id: 9, name: "Romeo and Juliet", price: 9.99, author: "William Shakespeare", image: "romeoAndJuliet.png", category: "Classics"},

  // Fantasy
  {id: 10, name: "Harry Potter 1", price: 10.99, author: "J.K Rowling", image: "hp1.png", category: "Fantasy"},
  {id: 11, name: "Harry Potter 2", price: 10.99, author: "J.K Rowling", image: "hp2.png", category: "Fantasy"},
  {id: 12, name: "Harry Potter 3", price: 10.99, author: "J.K Rowling", image: "hp3.png", category: "Fantasy"},
  {id: 13, name: "Harry Potter 4", price: 10.99, author: "J.K Rowling", image: "hp4.png", category: "Fantasy"},
  {id: 14, name: "Harry Potter 5", price: 10.99, author: "J.K Rowling", image: "hp5.png", category: "Fantasy"},
  {id: 15, name: "Harry Potter 6", price: 10.99, author: "J.K Rowling", image: "hp6.png", category: "Fantasy"},
  {id: 16, name: "Harry Potter 7", price: 10.99, author: "J.K Rowling", image: "hp7.png", category: "Fantasy"},
  {id: 17, name: "The Lord of the Rings 1", price: 10.99, author: "J.R.R Tolkien", image: "lotr1.png", category: "Fantasy"},
  {id: 18, name: "The Lord of the Rings 2", price: 10.99, author: "J.R.R Tolkien", image: "lotr2.png", category: "Fantasy"},
  {id: 19, name: "The Lord of the Rings 3", price: 10.99, author: "J.R.R Tolkien", image: "lotr3.png", category: "Fantasy"},

  // Horror
  {id: 20, name: "The Black Cat", price: 11.99, author: "Edgar Allan Poe", image: "theBlackCat.png", category: "Horror"},
  {id: 21, name: "The Cask of Amontillado", price: 11.99, author: "Edgar Allan Poe", image: "theCaskOfAmontillado.png", category: "Horror"},
  {id: 22, name: "The Fall of the House of Usher", price: 11.99, author: "Edgar Allan Poe", image: "theFallOfTheHouseOfUsher.png", category: "Horror"},
  {id: 23, name: "The Masque of the Red Death", price: 11.99, author: "Edgar Allan Poe", image: "theMasqueOfTheRedDeath.png", category: "Horror"},
  {id: 24, name: "The Raver", price: 11.99, author: "Edgar Allan Poe", image: "theRaven.png", category: "Horror"},
  {id: 25, name: "The Tell-Tale Heart", price: 11.99, author: "Edgar Allan Poe", image: "theTellTalleHeart.png", category: "Horror"},
  {id: 26, name: "Carrie", price: 11.99, author: "Stephen King", image: "carrie.png", category: "Horror"},
  {id: 27, name: "The Shining", price: 11.99, author: "Stephen King", image: "theShining.png", category: "Horror"},

  // Romantic
  {id: 28, name: "Emma", price: 12.99, author: "Jane Austen", image: "emma.png", category: "Romantic"},
  {id: 29, name: "Persuasion", price: 12.99, author: "Jane Austen", image: "persuasion.png", category: "Romantic"},
  {id: 30, name: "Pride & Prejudice", price: 12.99, author: "Jane Austen", image: "prideAndPrejudice.png", category: "Romantic"},
  {id: 31, name: "Sense & Sensibility", price: 12.99, author: "Jane Austen", image: "senseAndSensibility.png", category: "Romantic"},
  {id: 32, name: "A Walk to Remember", price: 12.99, author: "Nicholas Sparks", image: "aWalkToRemember.png", category: "Romantic"},
  {id: 33, name: "Dreamland", price: 12.99, author: "Nicholas Sparks", image: "dreamland.png", category: "Romantic"},
  {id: 34, name: "The Longest Ride", price: 12.99, author: "Nicholas Sparks", image: "theLongestRide.png", category: "Romantic"},
  {id: 35, name: "The Notebook", price: 12.99, author: "Nicholas Sparks", image: "theNotebook.png", category: "Romantic"},

  // Science Fiction
  {id: 36, name: "Dune", price: 13.99, author: "Frank Herbert", image: "dune.png", category: "Science Fiction"},
  {id: 37, name: "1984", price: 13.99, author: "George Orwell", image: "ninteenEighty-Four.png", category: "Science Fiction"},
  {id: 38, name: "I, Robot", price: 13.99, author: "Isaac Asimov", image: "iRobot.png", category: "Science Fiction"},
  {id: 39, name: "Around the World in Eigthy Days", price: 13.99, author: "Jules Verne", image: "aroundTheWorldInEigthyDays.png", category: "Science Fiction"},
  {id: 40, name: "Journey to the Center of the Earth", price: 13.99, author: "Jules Verne", image: "journeyToTheCenterOfTheEarth.png", category: "Science Fiction"},
  {id: 41, name: "The Mysterious Island", price: 13.99, author: "Jules Verne", image: "theMysteriousIsland.png", category: "Science Fiction"},
  {id: 42, name: "The Hunger Games 1", price: 13.99, author: "Suzanne Collins", image: "theHungerGames1.png", category: "Science Fiction"},
  {id: 43, name: "The Hunger Games 2", price: 13.99, author: "Suzanne Collins", image: "theHungerGames2.png", category: "Science Fiction"},
  {id: 44, name: "The Hunger Games 3", price: 13.99, author: "Suzanne Collins", image: "theHungerGames3.png", category: "Science Fiction"},
  {id: 45, name: "The Hunger Games 4", price: 13.99, author: "Suzanne Collins", image: "theHungerGames4.png", category: "Science Fiction"},
];

const storeBooksLS = (books) => {
  localStorage.setItem("books", JSON.stringify(books));
}

const loadBooksLS = () => {
  return JSON.parse(localStorage.getItem("books")) || [];
}

storeBooksLS(books);
