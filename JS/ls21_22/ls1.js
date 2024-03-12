// let arr1 = [1, 4, null, 'Hello', 555, 33, false, 67, true];
// console.log(arr1);


// function searchElement(arr, element) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === element) {
//             // return arr[i]
//             console.log('I found el:', element, 'on index ', i);
//             break
//         }    
//     }
// }

// searchElement(arr1, 555);

// // let foundEl = arr1.find(555)
//    let foundEl = arr1.find(function (el, i, arr) {
//     if (el === 555) {
//         return true
//     }
// });
// console.log(foundEl);


// let foundEl1 = arr1.find((el, i, arr) => {
//     if (el === 555) {
//         return true
//     }
// });
// console.log(foundEl1);


// (a) => {}
//  a => {}
//  a => || () => 


// let foundEl2 = arr1.find(el => el === 555);
// console.log(foundEl2);



// let arr2 = [1, 4, null, 'Hello', 555, 33, false, 67, true];
// console.log(arr2);


// let filterdArr = arr2.filter((el, i, arr) => {
//     if (typeof el === 'number') {
//         return true;
//     }
// })

// let filterdBool = arr2.filter((el, i, arr) => {
//     if (typeof el === 'boolean') {
//         return true;
//     }
// })

// console.log(filterdArr, filterdBool);



// let arr3 = [2, 5, 6, 1, 0, 1, 19, 10];

// let isSomeBiggerFive = arr3.some((el) => {
//     if (el > 5) {
//         return true;
//     }
// })
// console.log(isSomeBiggerFive);


// let isEveryBiggerFive = arr3.every((el) => {
//     if (el > 5) {
//         return true;
//     }
// })
// console.log(isEveryBiggerFive);



// let arr4 = [2, 5, 6, 1, 0, 1, 19, 10, 1, 100];


// let indexOfFive = arr4.indexOf(1);
// console.log(indexOfFive);

// let lastIndexOfFive = arr4.lastIndexOf(1);
// console.log(lastIndexOfFive);


let arr5 = [2, 5, 6, 1, 0, 1, 19, 10, 1, 100];
console.log(arr5);

// let sortArr = arr5.sort()
// console.log(sortArr);

// let sor = arr5.sort((a, b) => {
//     // console.log(a, b);
//     if (a > b) {
//         return 1
//     } else {
//         return -1
//     }
// })
// console.log(sor);


// let sor1 = arr5.sort((a, b) => {
//     // console.log(a, b);
//     if (a < b) {
//         return 1
//     } else {
//         return -1
//     }
// })
// console.log(sor1);


let sor2 = arr5.sort((a, b) => a - b );
console.log(sor2);


let sor3 = arr5.sort((a, b) => { return b - a });
console.log(sor3);