const students1 = [
  "Andrew",
  "Bobby",
  "Diana",
  "George",
  "Hannah",
  "Isaac",
  "Jasmine",
  "John",
];

const students2 = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona"];

function findStudentIndex(students, searchStudent) {
  let index = -1;
  for (let i = 0; i < students.length; i++) {
    if (students[i] === searchStudent) {
      index = i;
    }
  }
  return index;
}
console.log(findStudentIndex(students1, "John"));
console.log(findStudentIndex(students2, "Andrew"));

//โจทย์ข้างบน Big O = O(n) เพราะจำนวนรอบที่ต้องเช็คแปรผันตามจำนวนข้อมูล

// ตอบคำถามตรงนี้จ้า
//Binary search มี Big O = O(log n) เพราะเป็นการไล่เช็คข้อมูลทีละครึ่ง เพราะฉะนั้นในช่วงแรกจะมีข้อมูลที่ต้องเช็คเยอะ แต่ในรอบถัดๆไปข้อมูลที่เช็คจะลดลงทีละครึ่ง ทำให้จำนวนการเช็คข้อมูลจะสูงขึ้นในช่วงแรกและค่อยๆลดลงเข้าสู่ค่าคงที่