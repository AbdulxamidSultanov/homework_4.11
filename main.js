// All function
const arrRandomNumber = (arr) => {
  let array = new Array(arr);

  for (let i = 0; i < arr; i++) {
    array[i] = Math.trunc(Math.random() * 200 - 100);
  }
  return array;
};

// ============
// 1-masala:
// Massiv ichida 5 ga karrali bo‘lgan birinchi elementni toping.
const arr = arrRandomNumber(10);
let res = arr.find((element) => {
  return element % 5 == 0;
});

// ============
// 2-masala:
//  Massiv ichida 20 dan kichik bo‘lgan birinchi toq sonning indeksini toping.
const arr1 = arrRandomNumber(10);

let res1 = arr1.find((element) => {
  if (element % 2 != 0) {
    return element < 20;
  }
});

// ============
// 3-masala:
//  Massiv ichida 0 bilan tugaydigan birinchi elementni toping.
const arr2 = arrRandomNumber(10);

let res2 = arr2.find((element) => {
  return element % 10 == 0;
});

// ============
// 4-masala:
//  Massivda 50 ga teng yoki undan katta elementlar bor-yo‘qligini aniqlang.
const arr3 = arrRandomNumber(10);

let res3 = arr3.some((element) => {
  return element >= 50;
});

// ============
// 5-masala:
//  Massivda manfiy sonlar bor-yo‘qligini aniqlang.
const arr4 = arrRandomNumber(10);

let res4 = arr4.some((element) => {
  return element < 0;
});

// ============
// 6-masala:
//  Massivda 3 ga karrali bo‘lgan sonlar bor-yo‘qligini tekshiring.
const arr5 = arrRandomNumber(10);

let res5 = arr5.some((element) => {
  return element % 3 == 0;
});

// ============
// 7-masala:
//Massivdagi barcha sonlar musbat ekanligini tekshiring.
const arr6 = arrRandomNumber(10);

let res6 = arr6.every((element) => {
  return element > 0;
});

// ============
// 8-masala:
//Massivdagi barcha sonlar 10 dan katta ekanligini tekshiring.
const arr7 = arrRandomNumber(10);

let res7 = arr7.every((element) => {
  return element > 10;
});

// ============
// 9-masala:
//Massivdagi barcha sonlar toq ekanligini aniqlang.
const arr8 = arrRandomNumber(10);

let res8 = arr8.every((element) => {
  return element % 2 != 0;
});

// ============
// 10-masala:
//Berilgan matnning uchinchi belgisi nima ekanligini aniqlang.
const str = ["Salom dunyo!"];
const res9 = str.charAt(2);
console.log(res9);
// ============
// 11-masala:
//Matnning oxiridan ikkinchi belgisini toping.
const str1 = "Salom dunyo!";
const arr11 = str1.split("");
let lastIndex = arr11.length;
let res10 = lastIndex - 2;
console.log(str1.charAt(res10));
// ============
// 12-masala:
//Berilgan matnning birinchi belgisi uchun Unicode qiymatini aniqlang.
const str2 = "Salom dunyo!";
let res12 = str2.charCodeAt(0);
console.log(res)
// ============
// 13-masala:
//Matnning beshinchi belgisining Unicode qiymatini toping.
const str3 = "Salom dunyo!"
let res13 = str3.charCodeAt(4)
// ============
// 14-masala:
//Berilgan matndan birinchi 5 ta belgini ajratib oling.
const str4 = "Salom dunyo!"
let res14 = str4.slice(0, 5)
console.log(res14)
// ============
// 15-masala:
//Matnning oxirgi 3 ta belgisini ajratib oling.
const str5 = "Salom dunyo!"
const arr15 = str5.split("")
let lastThreeIndex = arr15.length - 3
let res15 = str5.slice(lastThreeIndex, arr15.length)
console.log(res15)
// ============
// 16-masala:
//Matnning 2-pozitsiyadan boshlab 6-pozitsiyagacha bo‘lgan qismini ajrating.

// ============
// 17-masala:
//Matnning oxirgi uchta belgisini substring yordamida oling.

// ============
// 18-masala:
//Matnning 4-pozitsiyadan boshlab 5 ta belgisini oling.

// ============
// 19-masala:
//Berilgan matnning boshidan 7 ta belgisini substr yordamida ajrating.

// ============
// 20-masala:
//Berilgan matnni faqat katta harflar bilan yozing.

// ============
// 21-masala:
//Matnning birinchi yarmidan kichik harflar, ikkinchi yarmidan katta harflar yarating.

// ============
// 22-masala:
//Berilgan ikkita matnni birlashtiring.

// ============
// 23-masala:
//Matnga qo‘shimcha qilib "!" belgisi qo‘shing va yangi matn yarating.

// ============
// 24-masala:
//Matnning boshidagi va oxiridagi bo‘sh joylarni olib tashlang.

// ============
// 25-masala:
//Matnning faqat boshidagi bo‘sh joylarni olib tashlang.

// ============
// 26-masala:
//Berilgan matnni boshidan 10 belgiga to‘ldiring, “*” belgisi bilan.

// ============
// 27-masala:
//Matnni oxiridan 15 belgiga “#” bilan to‘ldiring.

// ============
// 28-masala:
//Matnni 3 marta takrorlab yangi matn yarating.

// ============
// 29-masala:
//Belgini 5 marta takrorlab, string yaratib oling.

// ============
// 30-masala:
//Matnning ichidagi birinchi "a" harfini "o" harfiga almashtiring.

// ============
// 31-masala:
//Matnning barcha “ ” (bo‘sh joy) belgilarini “_” belgilariga almashtiring.

// ============
// 32-masala:
//Matnni har bir so‘zdan ajratib massivga aylantiring.

// ============
// 33-masala:
//Matnni har bir belgidan ajratib massiv yarating.

// ============
// 34-masala:
//Matndagi "a" harfi birinchi marta qayerda uchrayotganini aniqlang.

// ============
// 35-masala:
//Matndagi "e" harfi oxirgi marta qayerda uchrayotganini toping.

// ============
// 36-masala:
//Matn ichida "hello" so‘zi bor-yo‘qligini tekshiring.

// ============
// 37-masala:
//Matn ichida "!" belgisi mavjudligini aniqlang.

// ============
// 38-masala:
//Matn ichida birinchi "good" so‘zi qayerda joylashganini aniqlang.

// ============
// 39-masala:
//Matnda raqam uchraydigan joyni aniqlang.

// ============
// 40-masala:
//Matn "Hello" so‘zi bilan boshlanadimi yoki yo‘qmi, tekshiring.

// ============
// 41-masala:
//Matn oxirida "bye" so‘zi borligini aniqlang.
// ============

// 42-masala:
//users massivida age qiymati 25 dan katta bo‘lgan foydalanuvchilarni toping.
let users = [
  { id: 1, name: "Ali", age: 25, isActive: true },
  { id: 2, name: "Bobur", age: 30, isActive: false },
  { id: 3, name: "Zara", age: 22, isActive: true },
];

// ============
// 43-masala:
//products massivida price qiymati 500 dan kichik bo‘lgan mahsulotlarni aniqlang.
let products = [
  { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
  { id: 102, name: "Phone", price: 500, rating: 4.2 },
  { id: 103, name: "Tablet", price: 300, rating: 4.8 },
];

// ============
// 44-masala:
//tasks massivida status qiymati "pending" bo‘lgan vazifalarni boshqa massivga ajrating.
let tasks = [
  { id: 1, title: "Do homework", status: "completed" },
  { id: 2, title: "Clean room", status: "pending" },
  { id: 3, title: "Go shopping", status: "pending" },
];

// ============
// 45-masala:
//users massivida isActive qiymati true bo‘lgan foydalanuvchilar sonini hisoblang.
let users1 = [
  { id: 1, name: "Ali", age: 25, isActive: true },
  { id: 2, name: "Bobur", age: 30, isActive: false },
  { id: 3, name: "Zara", age: 22, isActive: true },
];

// ============
// 46-masala:
//products massivida rating qiymati eng yuqori bo‘lgan mahsulotni toping.
let products1 = [
  { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
  { id: 102, name: "Phone", price: 500, rating: 4.2 },
  { id: 103, name: "Tablet", price: 300, rating: 4.8 },
];

// ============
// 47-masala:
//users massividagi har bir foydalanuvchining faqat name va age qiymatlarini ajratib oling.
let users2 = [
  { id: 1, name: "Ali", age: 25, isActive: true },
  { id: 2, name: "Bobur", age: 30, isActive: false },
  { id: 3, name: "Zara", age: 22, isActive: true },
];

// ============
// 48-masala:
//products massivida price qiymati eng kichik bo‘lgan mahsulotni aniqlang.
let products2 = [
  { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
  { id: 102, name: "Phone", price: 500, rating: 4.2 },
  { id: 103, name: "Tablet", price: 300, rating: 4.8 },
];

// ============
// 49-masala:
//tasks massivida title qiymati "Clean room" bo‘lgan vazifaning indeksini aniqlang.
let tasks1 = [
  { id: 1, title: "Do homework", status: "completed" },
  { id: 2, title: "Clean room", status: "pending" },
  { id: 3, title: "Go shopping", status: "pending" },
];

// ============
// 50-masala:
//users massivida barcha foydalanuvchilarning age qiymatlari yig‘indisini hisoblang.
let users3 = [
  { id: 1, name: "Ali", age: 25, isActive: true },
  { id: 2, name: "Bobur", age: 30, isActive: false },
  { id: 3, name: "Zara", age: 22, isActive: true },
];

// ============
// 51-masala:
//products massividagi har bir mahsulotning price qiymatini 10% ga kamaytirib yangi massiv yarating.
let products3 = [
  { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
  { id: 102, name: "Phone", price: 500, rating: 4.2 },
  { id: 103, name: "Tablet", price: 300, rating: 4.8 },
];

// ============
// 52-masala:
//users massivida name qiymati "Ali" bo‘lgan foydalanuvchini toping.
let users4 = [
  { id: 1, name: "Ali", age: 25, isActive: true },
  { id: 2, name: "Bobur", age: 30, isActive: false },
  { id: 3, name: "Zara", age: 22, isActive: true },
];

// ============
// 53-masala:
//tasks massivida barcha status qiymatlari "completed" ekanligini tekshiring.
let tasks2 = [
  { id: 1, title: "Do homework", status: "completed" },
  { id: 2, title: "Clean room", status: "completed" },
  { id: 3, title: "Go shopping", status: "completed" },
];

// ============
// 54-masala:
//products massivida rating qiymati 4 dan katta bo‘lgan mahsulotlar sonini hisoblang.
let products4 = [
  { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
  { id: 102, name: "Phone", price: 500, rating: 3.9 },
  { id: 103, name: "Tablet", price: 300, rating: 4.8 },
];

// ============
// 55-masala:
//users massivida age qiymati eng katta bo‘lgan foydalanuvchini aniqlang.
let users5 = [
  { id: 1, name: "Ali", age: 25, isActive: true },
  { id: 2, name: "Bobur", age: 30, isActive: false },
  { id: 3, name: "Zara", age: 22, isActive: true },
];

// ============
// 56-masala:
//tasks massivida har bir title qiymatini bosh harfini katta qilib yangi massiv yarating.
let tasks3 = [
  { id: 1, title: "do homework", status: "completed" },
  { id: 2, title: "clean room", status: "pending" },
  { id: 3, title: "go shopping", status: "pending" },
];
