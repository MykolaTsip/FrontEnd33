
// 1
let str = 'Hello world';
document.write(str);

// 2
let str1 = 'Hello';
let str2 = ' world';

let c = str1 + str2;

// console.log(str1, str2, 222, true);
document.write('<hr>')
// document.write(str1, str2)
document.write(c)


// 3
let name = 'Mykola';
document.write('<hr>')
document.write('Hello, ' + name + ' !');


// 4
let age = 24;
document.write('<hr>');
document.write('I have ' + age + ' years!')

// 5
// let name1 = prompt('Enter name');
// let yourName = 'Your name ' + name1;
// alert(yourName);

// 6
// let num = Number(prompt('Enter number'));

// // let sq = num * num;
// let sq = num**2;

// alert(sq);


// 7
let myStr = 'abcde';
console.log(myStr[0], myStr[2], myStr[myStr.length - 1]);

for (let i = 0; i < myStr.length; i++) {
    if (myStr[i] === 'a' || myStr[i] === 'c' || myStr[i] === 'e') {
        console.log(myStr[i]);
    } 
}

// 8
// let a1 = Number(prompt('Enter num'));
// let isTrue = a1 === 0 ? true : false;
// console.log(isTrue);


// 9
// let a2 = Number(prompt('Enter num'));
// let isTrue1 = a2 > 0 ? true : false;
// console.log(isTrue1);


// 10
// let a3 = Number(prompt('Enter num'));
// let isTrue2 = a3 < 0 ? true : false;
// console.log(isTrue2);


// 11
// let test = prompt('ddd');

// if (test === 'true') {
//     console.log(test);
// } else {
//     console.log('ne true');
// }

// 12
// let test1 = prompt('ddd');

// if (test1 !== 'true') {
//     console.log(true);
// } else {
//     console.log('ne true (but yes)');
// }

// 13
// let num3 = Number(prompt('Enter number'));

// let isTrue3 = num3 > 0 && num3 < 5
//  ? console.log(true)
//  : console.log(false)


// 14
// let num3 = Number(prompt('Enter number'));

// if (num3 === 0 || num3 === 2) {
//     num3 += 7;
// } else {
//     num3 /= 10;
// }

// console.log(num3);


// 15
// let aa = Number(prompt('Enter number'));
// let bb = Number(prompt('Enter number'));


// if (aa <= 1 && bb >= 3) {
//     console.log(aa + bb);
// } else {
//     console.log(aa - bb);
// }


// 16
// let a5 = Number(prompt('Enter number'));
// let result;

// switch (a5) {
//     case 1:
//         result = 'spring';
//         break;
//     case 2: 
//         result = 'summer';
//         break;
//     case 3:
//         result = 'autumn';
//         break;
//     case 4:
//         result = 'winter';
//         break;
//     default: result = 'Error';
//         break;
// }

// console.log(result);

// 17
// let a6 = Number(prompt('Enter number'));

// switch (a6) {
//     case 1: console.log(1);
//     break;
//     case 2: console.log(1);
//     break;
//     case 3: console.log(2);
//     break;
//     case 4: console.log(2);
//     break;
//     case 5: console.log(3);
//     break;
//     case 6: console.log(3);
//     break;
//     default: console.log('Err');
//     break;
// }


// 18
// let a7 = Number(prompt('Enter number'));

// switch (a7) {
//     case 1: console.log('spring');
//     break;
//     case 2: console.log('spring');
//     break;
//     case 3: console.log('spring');
//     break;
//     case 4: console.log('summer');
//     break;
//     case 5: console.log('summer');
//     break;
//     case 6: console.log('summer');
//     break;
//     case 7: console.log('autumn');
//     break;
//     case 8: console.log('autumn');
//     break;
//     case 9: console.log('autumn');
//     break;
//     case 10: console.log('winter');
//     break;
//     case 11: console.log('winter');
//     break;
//     case 12: console.log('winter');
//     break;
//     default: console.log('Not month');
//     break;
// }


// 19
// let i1 = 1;

// while (i1 <= 100) {
//     console.log(i1); 
//     i1++;
// }

// for (let i = 1; i <= 100; i++) {
//     console.log(i);
// }


//  20
// let i2 = 11;
// while (i2 <= 33) {
//     console.log(i2);
//     i2++
// }

// for (let i = 11; i <= 33; i++) {
//     console.log(i);
// }

// 21
// let i3 = 0;

// while (i3 <= 100) {
//     console.log(i3);
//     i3 += 2; // i3 = i3 + 2
// }

// for (let i = 0; i <= 100; i += 2) {
//     console.log(i);
// }


//  22

// let i4 = 1;
// let sum = 0;

// while (i4 <= 100) {
//     sum += i4;
//     i4++;
// }

// console.log(sum);


// let sum1 = 0;

// for (let i = 1; i <= 100; i++) {
//     sum1 += i;
// }

// console.log(sum1);


// 23
// let arr1 =  [1, 2, 3, 4, 5, 4, 56, 657];

// for (let item of arr1) {
//     document.write(item);
//     document.write('<hr>')
// }


// 24
// let arr2 = [1, 2, 3, 4, 5];
// let summ = 0;

// for (let item of arr2) {
//     summ += item;
// }

// console.log(summ);


// 25
// let obj = {green: 'зелений', red: 'червоний', blue: 'блакитний'}

// for (let key in obj) {
//     console.log(key, obj[key]);
// }

// 26
// let users = {
//     Myk: '200',
//     Vas: '300',
//     Petro: '400'
// }

// for (let user in users) {
//     console.log(user + ' - salary ' + users[user] + ' $');
// }

// 27
let arr3 = [2, 5, 9, 15, 0, 4];

for (let itemArr in arr3) {
    if (arr3[itemArr] > 3 && arr3[itemArr] < 10) {
        console.log(itemArr, arr3[itemArr]);
    }
}

