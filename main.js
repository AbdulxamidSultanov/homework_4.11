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
console.log(res);
// ============
// 13-masala:
//Matnning beshinchi belgisining Unicode qiymatini toping.
const str3 = "Salom dunyo!";
let res13 = str3.charCodeAt(4);
// ============
// 14-masala:
//Berilgan matndan birinchi 5 ta belgini ajratib oling.
const str4 = "Salom dunyo!";
let res14 = str4.slice(0, 5);
console.log(res14);
// ============
// 15-masala:
//Matnning oxirgi 3 ta belgisini ajratib oling.
const str5 = "Salom dunyo!";
const arr15 = str5.split("");
let lastThreeIndex = arr15.length - 3;
let res15 = str5.slice(lastThreeIndex, arr15.length);
console.log(res15);
// ============
// 16-masala:
//Matnning 2-pozitsiyadan boshlab 6-pozitsiyagacha bo‘lgan qismini ajrating.
const str6 = "Salom dunyo!";
console.log(str6.substring(1, 6));
// ============
// 17-masala:
//Matnning oxirgi uchta belgisini substring yordamida oling.
const str7 = "Salom dunyo!";
const arr17 = str7.split("");
let lastIndex17 = arr17.length - 3;
console.log(str7.substring(arr17.length, lastIndex17));
// ============
// 18-masala:
//Matnning 4-pozitsiyadan boshlab 5 ta belgisini oling.
const str8 = "Salom dunyo!";
console.log(str8.substr(4, 5));
// ============
// 19-masala:
//Berilgan matnning boshidan 7 ta belgisini substr yordamida ajrating.
const str9 = "Matn berilgan shuni boshidan yetitasini ajratish";
console.log(str9.substr(0, 7));
// ============
// 20-masala:
//Berilgan matnni faqat katta harflar bilan yozing.
const str10 = "Matn berilgan shuni boshidan yetitasini ajratish";
let res20 = str10.toUpperCase();
// ============
// 21-masala:
//Matnning birinchi yarmidan kichik harflar, ikkinchi yarmidan katta harflar yarating.
const str11 = "salom dunyo!";
const arr21 = str11.split("");
let indexArr = Math.trunc(arr21.length / 2);
let res21 =
  str11.slice(0, indexArr) + " " + str11.slice(indexArr).toUpperCase();
// ============
// 22-masala:
//Berilgan ikkita matnni birlashtiring.
const str12 = "Salom";
const newStr12 = " dunyo!";
let res22 = str12.concat(newStr12);
// ============
// 23-masala:
//Matnga qo‘shimcha qilib "!" belgisi qo‘shing va yangi matn yarating.
const str13 = "Salom dunyo";
let res23 = str13.concat("!");
// ============
// 24-masala:
//Matnning boshidagi va oxiridagi bo‘sh joylarni olib tashlang.
const str14 = "   Salom Dunyo!   ";
let res24 = str14.trim();
// ============
// 25-masala:
//Matnning faqat boshidagi bo‘sh joylarni olib tashlang.
const str15 = "   Salom Dunyo!   ";
let res25 = str14.trimStart();
// ============
// 26-masala:
//Berilgan matnni boshidan 10 belgiga to‘ldiring, “*” belgisi bilan.
const str16 = "Salom dunyo!";
const arr26 = str16.split("");
let arrLength = arr26.length + 10;
let res26 = str16.padStart(arrLength, "*");
// ============
// 27-masala:
//Matnni oxiridan 15 belgiga “#” bilan to‘ldiring.
const str17 = "Salom dunyo!";
const arr27 = str17.split("");
let lengthArr = arr27.length + 15;
let res27 = str17.padEnd(lengthArr, "*");
// ============
// 28-masala:
//Matnni 3 marta takrorlab yangi matn yarating.
const str18 = "Salom dunyo!";
let repeatStr = str18.repeat(3);
// ============
// 29-masala:
//Belgini 5 marta takrorlab, string yaratib oling.
const str19 = "*";
let reapetZnak = str19.repeat(5);
// ============
// 30-masala:
//Matnning ichidagi birinchi "a" harfini "o" harfiga almashtiring.
const str20 = "Salom Dunyo!";
let changeLetters = str20.replace("a", "o");
// ============
// 31-masala:
//Matnning barcha “ ” (bo‘sh joy) belgilarini “_” belgilariga almashtiring.
const str21 = "Matining barcha bosh joyalrini _ chiziqga alishtirish";
let changeWhiteSpace = str21.replaceAll(" ", "_");
// ============
// 32-masala:
//Matnni har bir so‘zdan ajratib massivga aylantiring.
const str22 = "Matnni har bir so`zdan ajratib massivga aylantiring.";
let res32 = str22.split(" ");
console.log(res32);
// ============
// 33-masala:
//Matnni har bir belgidan ajratib massiv yarating.
const str23 = "Matnni har bir belgidan ajratib massiv yarating.";
let res33 = str23.split("");
// ============
// 34-masala:
//Matndagi "a" harfi birinchi marta qayerda uchrayotganini aniqlang.
const str24 = "Salom dunyo!";
let res34 = str24.indexOf(a);
console.log(res34);
// ============
// 35-masala:
//Matndagi "e" harfi oxirgi marta qayerda uchrayotganini toping.
const str25 = "Matndagi e harfi oxirgi marta qayerda uchrayotganini toping.";
let res35 = str25.lastIndexOf("e");
// ============
// 36-masala:
//Matn ichida "hello" so‘zi bor-yo‘qligini tekshiring.
const str26 = "Hello, world!";
let res36 = str26.includes("hello"); // false chiqadi chunki hello tepada kotta harifda kelgan
// ============
// 37-masala:
//Matn ichida "!" belgisi mavjudligini aniqlang.
const str27 = "Hello, world!";
let res37 = str27.includes("!");
// ============
// 38-masala:
//Matn ichida birinchi "good" so‘zi qayerda joylashganini aniqlang.
const str28 = "Hello, I`m good. And you?";
let res38 = str28.search("good");
// ============
// 39-masala:
//Matnda raqam uchraydigan joyni aniqlang.
const str29 = "Hello, My name is Rovshan, I`m 99 years old";
const arr39 = str29.split(" ");
for (let i = 0; i < arr.length; i++) {
  if (!isNaN(arr[i])) {
    console.log(arr.indexOf(arr[i]));
  }
}
// ============
// 40-masala:
//Matn "Hello" so‘zi bilan boshlanadimi yoki yo‘qmi, tekshiring.
const str30 = "Hello, world!";
let res40 = str30.startsWith("Hello");
// ============
// 41-masala:
//Matn oxirida "bye" so‘zi borligini aniqlang.
// ============
const str31 = "Hello, My name is Rovshan, I`m 99 years old, It`s all, bye";
let res41 = str31.endsWith("bye");
// 42-masala:
//users massivida age qiymati 25 dan katta bo‘lgan foydalanuvchilarni toping.
let users = [
  { id: 1, name: "Ali", age: 25, isActive: true },
  { id: 2, name: "Bobur", age: 30, isActive: false },
  { id: 3, name: "Zara", age: 26, isActive: true },
];
const result = users.filter((user) => {
  return user.age > 25;
});
// ============
// 43-masala:
//products massivida price qiymati 500 dan kichik bo‘lgan mahsulotlarni aniqlang.
let products = [
  { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
  { id: 102, name: "Phone", price: 500, rating: 4.2 },
  { id: 103, name: "Tablet", price: 300, rating: 4.8 },
];
const result1 = products.filter((product) => {
  return product < 500;
});
// ============
// 44-masala:
//tasks massivida status qiymati "pending" bo‘lgan vazifalarni boshqa massivga ajrating.
let tasks = [
  { id: 1, title: "Do homework", status: "completed" },
  { id: 2, title: "Clean room", status: "pending" },
  { id: 3, title: "Go shopping", status: "pending" },
];
const result2 = tasks.filter((task) => {
  return task.status == "pending";
});
// ============
// 45-masala:
//users massivida isActive qiymati true bo‘lgan foydalanuvchilar sonini hisoblang.
let users1 = [
  { id: 1, name: "Ali", age: 25, isActive: true },
  { id: 2, name: "Bobur", age: 30, isActive: false },
  { id: 3, name: "Zara", age: 22, isActive: true },
];
let counter = 0;
users1.forEach((user) => {
  if (user.isActive) {
    counter++;
  }
});
// ============
// 46-masala:
//products massivida rating qiymati eng yuqori bo‘lgan mahsulotni toping.
let products1 = [
  { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
  { id: 102, name: "Phone", price: 500, rating: 4.2 },
  { id: 103, name: "Tablet", price: 300, rating: 4.8 },
];
let maxRating = products1[0].rating;
let maxProduct = products1[0];

products1.forEach((product) => {
  if (maxRating < product.rating) {
    maxRating = product.rating;
    maxProduct = product;
  }
});
console.log(maxProduct);
// ============
// 47-masala:
//users massividagi har bir foydalanuvchining faqat name va age qiymatlarini ajratib oling.
let users2 = [
  { id: 1, name: "Ali", age: 25, isActive: true },
  { id: 2, name: "Bobur", age: 30, isActive: false },
  { id: 3, name: "Zara", age: 22, isActive: true },
];
const result4 = users2.map((user) => {
  delete user.id;
  delete user.isActive;
  return user;
});
// ============
// 48-masala:
//products massivida price qiymati eng kichik bo‘lgan mahsulotni aniqlang.
let products2 = [
  { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
  { id: 102, name: "Phone", price: 500, rating: 4.2 },
  { id: 103, name: "Tablet", price: 300, rating: 4.8 },
];
let minPrice = products2[0].price;
let minProduct = products2[0];

products2.forEach((product) => {
  if (minPrice > product.price) {
    minPrice = product.price;
    minProduct = product;
  }
});
console.log(minProduct);
// ============
// 49-masala:
//tasks massivida title qiymati "Clean room" bo‘lgan vazifaning indeksini aniqlang.
let tasks1 = [
  { id: 1, title: "Do homework", status: "completed" },
  { id: 2, title: "Clean room", status: "pending" },
  { id: 3, title: "Go shopping", status: "pending" },
];
const result5 = tasks1.find((task) => {
  if (task.title == "Clean room") {
    return tasks1.indexOf(task);
  }
});
// ============
// 50-masala:
//users massivida barcha foydalanuvchilarning age qiymatlari yig‘indisini hisoblang.
let users3 = [
  { id: 1, name: "Ali", age: 25, isActive: true },
  { id: 2, name: "Bobur", age: 30, isActive: false },
  { id: 3, name: "Zara", age: 22, isActive: true },
];
let sum = 0;
users3.forEach((user) => {
  sum += user.age;
});

// ============
// 51-masala:
//products massividagi har bir mahsulotning price qiymatini 10% ga kamaytirib yangi massiv yarating.
let products3 = [
  { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
  { id: 102, name: "Phone", price: 500, rating: 4.2 },
  { id: 103, name: "Tablet", price: 300, rating: 4.8 },
];
const result6 = products3.map((product) => {
  product.price *= 0.9;
  return product;
});

// ============
// 52-masala:
//users massivida name qiymati "Ali" bo‘lgan foydalanuvchini toping.
let users4 = [
  { id: 1, name: "Ali", age: 25, isActive: true },
  { id: 2, name: "Bobur", age: 30, isActive: false },
  { id: 3, name: "Zara", age: 22, isActive: true },
];
const result7 = users4.find((user) => {
  return user.name == "Ali";
});
// ============
// 53-masala:
//tasks massivida barcha status qiymatlari "completed" ekanligini tekshiring.
let tasks2 = [
  { id: 1, title: "Do homework", status: "completed" },
  { id: 2, title: "Clean room", status: "completed" },
  { id: 3, title: "Go shopping", status: "completed" },
];
let result8 = tasks2.every((task) => {
  return task.status == "completed";
});
// ============
// 54-masala:
//products massivida rating qiymati 4 dan katta bo‘lgan mahsulotlar sonini hisoblang.
let products4 = [
  { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
  { id: 102, name: "Phone", price: 500, rating: 3.9 },
  { id: 103, name: "Tablet", price: 300, rating: 4.8 },
];
let counter1 = 0;
products4.forEach((product) => {
  if (product.rating > 4) {
    counter++;
  }
});

console.log(counter);
// ============
// 55-masala:
//users massivida age qiymati eng katta bo‘lgan foydalanuvchini aniqlang.
let users5 = [
  { id: 1, name: "Ali", age: 25, isActive: true },
  { id: 2, name: "Bobur", age: 30, isActive: false },
  { id: 3, name: "Zara", age: 22, isActive: true },
];

let maxAge = users5[0].age;
let maxUser = users5[0];

users5.forEach((user) => {
  if (maxAge < user.age) {
    maxAge = user.age;
    maxUser = user;
  }
});

console.log(maxUser);
// ============
// 56-masala:
//tasks massivida har bir title qiymatini bosh harfini katta qilib yangi massiv yarating.
let tasks3 = [
  { id: 1, title: "do homework", status: "completed" },
  { id: 2, title: "clean room", status: "pending" },
  { id: 3, title: "go shopping", status: "pending" },
];
const result9 = tasks3.map((task) => {
  return task.title[0].toUpperCase(1) + task.title.slice(1);
});
console.log(result9);
