const books = [
  { title: "A Tale of Two Cities", author: "Charles Dickens" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Catch-22", author: "Joseph Heller" },
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ender's Game", author: "Orson Scott Card" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
  { title: "Gone with the Wind", author: "Margaret Mitchell" },
  { title: "Harry Potter", author: "J.K. Rowling" },
];

function findBookIndex(books, searchTitle) {
  let index = -1
  for (let i = 0; i<books.length; i++ ) {
    if (books[i].title === searchTitle) {
      index = i
    }
  }
  return index
}

console.log(findBookIndex(books, "Gone with the Wind"));
console.log(findBookIndex(books, "The Master Mind"));

// Big O = O(n) จำนวนรอบในการเช็คแปรผันตามจำนวนข้อมูล