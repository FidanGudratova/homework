//1
// let num = +prompt('eded daxil edin');
// function isEven(number) {
//     let isEven = number % 2 === 0 ? 'true' : 'false';
//     console.log(isEven);
// }
// isEven(num);
//2
// let num = +prompt('eded');
// function fourth(num) {
//     let fourth = num **4 ;
//     console.log(fourth);
// }
// fourth(num);
//3
// let phoneNumber = prompt('entered number');
// function isvalidnumber(item) {
//     if(item.length === 13 && (item[0] + item[1]) === "+7" ) {
//     console.log(true);
// } else {
//     console.log (false);
//  }
// }
// isvalidnumber(phoneNumber);
//3 alternative
// let phoneNumber = prompt('entered number');
// function isvalidnumber(item) {
//     let isvalidnumber = item.length === 13 && (item[0] + item[1]) == "+7" ? console.log(true) : console.log(false) ;
// }
// isvalidnumber(phoneNumber);
//4
// let value = prompt('eded daxil edin');
// function numberToWord(number){
//     let x, y;
//     if(number < 10){
//         y = lower10(number[0]);
//         x = '';
//     } else{
//         y = lower10(number[1]);
//         switch(number[0]){
//             case '1':
//                 x='On'
//                 break;
//             case '2':
//                 x='Iyirmi'
//             break;
//             case '3':
//                 x='Otuz'
//             break;
//             case '4':
//                 x='Qirx'
//             break;
//             case '5':
//                 x='Elli'
//             break;
//             case '6':
//                 x='Altmis'
//             break;
//             case '7':
//                 x='Yetmis'
//             break;
//             case '8':
//                 x='Seksen'
//             break;
//             case '9':
//                 x='Dogsan'
//             break;

//         }
//     }
//     console.log(`${x} ${y}`) ;
// }
// function lower10(y){
//     switch(y){
//         case '0':
//             y = ''
//         break;
//         case '1':
//             y = 'Bir'
//         break;
//         case '2':
//             y = 'Iki'
//         break;
//         case '3':
//             y = 'Uc'
//         break;
//         case '4':
//             y = 'Dord'
//         break;
//         case '5':
//         y = 'Bes'
//         break;
//         case '6':
//             y = 'Alti'
//         break;
//         case '7':
//             y = 'Yeddi'
//         break;
//         case '8':
//             y = 'Sekkiz'
//         break;
//         case '9':
//             y = 'Doqquz'
//         break;
//     }
//     return y;
// }
// numberToWord(value);
//5
// let num = prompt('metn daxil edin');
// function numCounter(number) {
//     let numCounter = number.length;
//     console.log (numCounter);
// }
// numCounter(num);
//6 ??????????????????????????????????????????????????????????????????
// let num = +prompt('n ?');
// function prime(number) {
//    if (number === 2) {console.log(number);}
//   else if (number <2) {console.log(false); }
//     for (let i = 2; i < number; i++) {
//         if ( number % i === 0 ) {
//         console.log (false);
//         return false;
//     }
// }
//    console.log(number);
// }
// prime(num);
//7 parametrli dovr tapsiriq 1 10!
//   let start = 1;
//   for (let i = 1; i <= 10; i++) {
//     start *= i;
//   }
//   console.log (start);
//8 tapsiriq 2 metni ters cevirmek
//  let text = prompt('entered text');
//  function reverseText(inputText) {
//   const characters = inputText.split('');
//   const reversedCharacters = characters.reverse();
//   const reversedText = reversedCharacters.join('');
//   console.log (reversedText);
// }
// reverseText(text);
//9 tapsiriq 3 index tapilmasi
// const text = 'hello world. hello';
// for (let i = 0; i < text.length; i++) {
//     if (text[i] === '.') {
//         console.log(i);
//         break;
//   }
// }
//10 2reqemli ededi 7 7 artirmaq
// let num = +prompt('2reqemli eded daxil edin');
// while (num<100) {
//     num+=7;
// } console.log(num);
// Array Massivlər 30.04
// tapshiriq 1
// let array = ['new hope' , 'empire' , 'return of jdi'];
// array[1] = 'classified';
// console.log(array);
// tapsiriq 2
// let array = ['new hope' , 'empire' , 'return of jdi'];
// for (let i = 0; i<array.length; i++) {
//     console.log(`episode ${i+4} + ${array[i]}`);
// }
// tapsiriq 3
// let array = ['fidan' , 'gudratova' , 'sumaya'];
// array.push('mohammadi');
// array.shift();
// console.log(array);
// tapsiriq 4
// console.log('32, 33, 34, 35, 36,'.split(',').join(';'));
// tapsiriq 5
// let arr = ['1', '2', '3', '4', '5', '6', '7'];
// let arrMax = Math.max('1', '2', '3', '4', '5', '6', '7');
// console.log(arrMax);
// console.log(...arr);
// tapsiriq 6
// let arrMain = [1, 2, 3, 4, 5];
// let arrAdd =[...arrMain];
// arrAdd[0] *= 2;
// arrAdd[1] *= 2;
// arrAdd[2] *= 2;
// arrAdd[3] *= 2;
// arrAdd[4] *= 2;
// console.log(arrAdd);
// console.log(arrMain);
// end
// 05.05 tapsiriq 1 
// let stockItem = {
//     id: '0002',
//     place: 'left',
//     weight: '200 kg'
//     };
// let stockItemClone = {...stockItem};
// let shopItem = stockItemClone;
// shopItem.price = '100$';
// delete shopItem.place; 
// console.log(shopItem);
// tapsiriq 2
// let array = ['Nicola Tesla, 1856', 'Alan Turing, 1912', 'Ada Lovelace, 1815']
// function sortByBirth(arr) {
//     arr.sort((a, b) => {
//         let yearFirst = a.split(', ')[1];
//         let yearSecond = b.split(', ')[1];
//         if (yearFirst < yearSecond) {
//             return -1;
//         };
//         if (yearFirst > yearSecond) {
//             return 1;
//         };
//         return 0;
//     });
//     return arr;
// };
// console.log(sortByBirth([
//     'Nicola Tesla, 1856',
//     'Alan Turing, 1912',
//     'Ada Lovelace, 1815'
// ]));
// sortByBirth(array);
// 05/05
//   let obj = { 
//     name: 'fidan', 
//     age: 23,
//     retirement: 0,
//     setAge(newAge) {
//         this.age = newAge;
//     } ,
//     getYearsBeforeRetir() { 
//         this.retirement = 60 - this.age;
//     }
// }; 
// obj.setAge(50);
// obj.getYearsBeforeRetir();
// console.log(obj);
// 05.05

 
// 01/05
// tapsiriq 2
// let arr = [2, 3, -2, 0];
// let a = (item) => {
//     if (item>0){
//         console.log(item);
//  } }
// arr.forEach(a);
// tapsiriq 3
// let arr = [1, 2, 3, 0, -1, -2, -3];
// let newArr = arr.map((item) => {
//     if(item < 0) {
//         return item *= -1;
//     } else {
//         return item *= 2;
//     }
// });
// console.log(newArr);
// tapsiriq 4
// let arr = ['red', 'green', 'blue'];
// let new = arr.find((item) => {
//     return item.length == 3;
// });
//  console.log(new);
// let names = ['Adam', 'nick', 'ilkin', 'Anna'];
// let resultA = names.filter((item) => {
//     return item[0]==='A';
//   });
// console.log(resultA); 
// end
  







