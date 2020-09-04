// // Write code under this line
// const getUserNames = (array) => array.map(({ name }) => name);

// console.log(getUserNames(users));

// [
//   "Moore Hensley",
//   "Sharlene Bush",
//   "Ross Vazquez",
//   "Elma Head",
//   "Carey Barr",
//   "Blackburn Dotson",
//   "Sheree Anthony",
// ];

// task 2

// Write code under this line
// Write code under this line
// const getUsersWithEyeColor = (array, color) => array.filter(({ eyeColor }) => eyeColor === color);

// console.log(getUsersWithEyeColor(users, 'blue'));
/* [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  }
] */

// task 3

// Write code under this line
// const getUsersWithGender = (array, gend) => array.filter(({ gender }) => gender === gend)
//     .map(({ name }) => name);

// console.log(getUsersWithGender(users, 'male'));

/* [
  "Moore Hensley",
  "Ross Vazquez",
  "Carey Barr",
  "Blackburn Dotson"
] */

// task 4

// Write code under this line
// const getInactiveUsers = array => array.filter(({ isActive }) => !isActive);

// console.log(getInactiveUsers(users));

/* [
  {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  }
]; */

// task 5

// Write code under this line
// const getUserWithEmail = (array, mail) => array.find(({ email }) => email === mail);

// console.log(getUserWithEmail(users, 'rossvazquez@xinware.com'));

/* {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
} */

// console.log(getUserWithEmail(users, 'blackburndotson@furnigeer.com'));

/* {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
} */

// task 6

// Write code under this line
// const getUsersWithAge = (array, min, max) => array
//     .filter(({ age }) => age > min && age < max)
//     .map(({ name, email }) => ({ name, email }));

// console.log(getUsersWithAge(users, 20, 30));
/* [
    { name: 'Ross Vazquez', email: 'rossvazquez@xinware.com' },
    { name: 'Elma Head', email: 'elmahead@omatom.com' },
    { name: 'Carey Barr', email: 'careybarr@nurali.com' }
] */

// console.log(getUsersWithAge(users, 30, 40));
/* [
    { name: 'Moore Hensley', email: 'moorehensley@indexia.com' },
    { name: 'Sharlene Bush', email: 'sharlenebush@tubesys.com' },
    { name: 'Blackburn Dotson', email: 'blackburndotson@furnigeer.com' },
    { name: 'Sheree Anthony', email: 'shereeanthony@kog.com' }
] */

// task 7

// Write code under this line
// const calculateTotalBalance = array => array.reduce((totalBalance, { balance } = balance) => totalBalance + balance, 0);

// console.log(calculateTotalBalance(users));
// 20916

// task 8

// Write code under this line
// const getUsersWithFriend = (array, friendName) => array.filter(({ friends }) => friends.includes(friendName))
//     .map(({ name }) => name);

// console.log(getUsersWithFriend(users, 'Briana Decker'));
// [ 'Sharlene Bush', 'Sheree Anthony' ]

// console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// [ 'Elma Head', 'Sheree Anthony' ]

// task 9

// Write code under this line
// const getNamesSortedByFriendsCount = (array) => ([...array]).sort((a, b) => a.friends.length - b.friends.length)
//     .map(({ name }) => name);

// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// task 10

// Write code under this line
// const getSortedUniqueSkills = (array) =>
//   array
//     .reduce(
//       (acc, { skills }) => [...acc, ...skills],

//       []
//     )
//     .filter((value, index, array) => array.indexOf(value) === index)
//     .sort();

// console.log(getSortedUniqueSkills(users));
/* [ 'adipisicing', 'amet',
 'anim', 'commodo',
 'culpa', 'elit',
 'ex', 'ipsum',
 'irure', 'laborum',
 'lorem', 'mollit',
 'non', 'nostrud',
 'nulla', 'proident',
 'tempor', 'velit',
 'veniam' ]; */

// codevar

// const points = (games) => {
//   let total = 0;
//   for (let game of games) {
//     let [x, , y] = [...game];

//     x = Number(x);
//     y = Number(y);
//     let point = 0;
//     if (x > y) {
//       point = 3;
//     } else if (x < y) {
//       point = 0;
//     } else point = 1;

//     total = point + total;
//   }
//   return total;
// };

// points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]);

// const abbrevName = (name) => {
//   const abb = [];
//   const names = name.split(" ");
//   for (const name of names) {
//     console.log(name[0]);

//     abb.push(name[0].toUpperCase());
//   }
//   return abb.join(".");
// };

// abbrevName("sam Harris");

// const arrayPlusArray = (arr1, arr2) =>
//   [...arr1, ...arr2].reduce((acc, value) => acc + value, 0);
// console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));

// // arrayPlusArray([1, 2, 3], [4, 5, 6]);

// const toAlternatingCase = (str) => {
//   const arr = str
//     .split("")
//     .map((el) =>
//       el === el.toLowerCase() ? el.toUpperCase() : el.toLoweCase()
//     );
//   // const arr1 = arr.map((el) =>
//   //   el === el.toLowerCase() ? el.toUpperCase() : el.toLoweCase()
//   // );
//   return console.log(arr.join(""));
// };

// toAlternatingCase("hello world");

// const isUpperCase = (str) => str === str.toUpperCase();

// console.log(isUpperCase("HELLO I AM DONALD"));

// const arrayMadness = (a, b) => {
//   let aPow = a.reduce((acc, value) => acc + value ** 2, 0);
//   let bPow = b.reduce((acc, value) => acc + value ** 3, 0);

//   return aPow > bPow;
// };
// console.log(arrayMadness([4, 5, 6], [1, 2, 3]));

// const arrayMadness = (a, b) =>
//   a.reduce((acc, value) => acc + Math.pow(value, 2), 0)
//   > b.reduce((acc, value) => acc + Math.pow(value, 3), 0);

// function correctPolishLetters(string) {
//   const arr = string.split("");
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] === "ą") {
//       arr[i] = "a";
//     } else if (arr[i] === "ę") {
//       arr[i] = "e";
//     } else if (arr[i] === "ć") {
//       arr[i] = "c";
//     } else if (arr[i] === "ł") {
//       arr[i] = "l";
//     } else if (arr[i] === "ń") {
//       arr[i] = "n";
//     } else if (arr[i] === "ó") {
//       arr[i] = "o";
//     } else if (arr[i] === "ś") {
//       arr[i] = "s";
//     } else if (arr[i] === "ź") {
//       arr[i] = "z";
//     } else if (arr[i] === "ż") {
//       arr[i] = "z";
//     }
//   }
//   return console.log(arr.join(""));
// }
// correctPolishLetters("Jędrzej Błądziński");

// function strCount(str, letter) {
//   const arrs = str.split("");
//   let quantity = 0;
//   for (const arr of arrs) {
//     if (arr === letter) {
//       quantity += 1;
//     }
//   }
//   return quantity;
// }

// console.log(strCount("Hello", "o"));

// function strCount(str, letter) {
//   return str.split('').filter(c => c == letter).length;
// }

// function differenceInAges(ages) {
//   let min = Math.min(...ages);
//   let max = Math.max(...ages);
//   let diff = max - min;
//   return [min, max, diff];
// }
// console.log(differenceInAges([82, 15, 6, 38, 35]));

// const removeEveryOther = (arr) => arr.filter((el, index) => index % 2 === 0);

// console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// const number = (arr) => arr.map((el, index) => `${index + 1}: ${el}`);

// console.log(number(["a", "b", "c"]));
