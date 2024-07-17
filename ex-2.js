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

function findBookIndex(books, searchBook) {
  let index = -1
  let left = 0
  let right = books.length-1
  while (left <= right) {
    let mid = Math.floor((left+right)/2)
    if (searchBook === books[mid].title) {
      return mid
    }
    else if (searchBook > books[mid].title) {
      left = mid + 1
    }
    else {
      right = mid - 1
    }
  }
  return index
  // for (let i = 0; i<books.length; i++ ) {
  //   if (books[i].title === searchBook) {
  //     index = i
  //   }
  // }
  // return index
}

console.log(findBookIndex(books, "Gone with the Wind"));
console.log(findBookIndex(books, "The Master Mind"));

//Binary search มี Big O = O(log n) เพราะเป็นการไล่เช็คข้อมูลทีละครึ่ง เพราะฉะนั้นในช่วงแรกจะมีข้อมูลที่ต้องเช็คเยอะ แต่ในรอบถัดๆไปข้อมูลที่เช็คจะลดลงทีละครึ่ง ทำให้จำนวนการเช็คข้อมูลจะสูงขึ้นในช่วงแรกและค่อยๆลดลงเข้าสู่ค่าคงที่