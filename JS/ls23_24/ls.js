// let arr = [ 'Myhailo', 'Sofia', 'Yaroslav', 'Dmytro', 'Nadia', 'Tymofyi' ];


// console.log('dfsd' > 'dsfsd');

// let a = arr.sort();
// console.log(a);


// let a1 = arr.sort((a, b) => a - b);
// console.log(a1);


// let a2 = arr.sort((a, b) => b - a);
// console.log(a2);


// console.log(a.reverse());


// let arr1 = [1, 4, 5, [5, [0, [3, 5, [2, [0, [4, [3, [4]]]]]]]]];
 //        [1, 4, 5, 5, 0, 3, 5]


// let b = arr1.flat();
// console.log(b); 


// let b1 = arr1.flat(4);
// console.log(b1); 


// let b2 = arr1.flat(Infinity);
// console.log(b2); 


// console.log(Infinity, typeof Infinity);


// console.log(99999 > Infinity);
// console.log(999999999 < Infinity);

// console.log(typeof NaN);



// let foundN = 1;

// let isOne = arr1.some(val => val === foundN)


// arr1.forEach((val) => {
//     if (foundN === val) {
//         isOne = true
//     }
// })

// let foundEl = arr1.includes(foundN);
// console.log(foundEl);

// if (arr1.includes(foundN)) {
//     console.log('URAAA');
// }




// let arr2 = ['Hello', true, 10, 111, 'world'];
// console.log(arr2);

// let str = arr2.join('-')
// console.log(str);


// let arrstr = str.split('1')
// console.log(arrstr);


// let arr3 = [1, 2, 3, 4, 5, 6, 8, 7, 9]

// let arr4 = arr2 + arr3;
// console.log(arr4);

// let arr5 = arr2.concat(arr3);
// console.log(arr5);


// // arr2[3]

// let fInd = arr2.findIndex((val) => val === 10);
// console.log(fInd);



let arr4 = ['Myhailo', 'Sofia', 'Yaroslav', 'Dmytro', 'Nadia', 'Tymofyi' ];
// console.log(arr4);

let mappedArr = arr4.map((val, ind) => {


    return {
        id: ind,
        name: val,
        isKnowVerstka: true,
        isKnowJS: true
    }
})


// console.log(mappedArr);






let arr3 = [1, 2, 3, 4, 5, 6, 8, 7, 9];


let sum = arr3.reduce((previousValue, currentValue) => {

    return previousValue + currentValue;
}) 

console.log(sum);
console.log(mappedArr);


let sumInd = mappedArr.reduce((prev, curr) => {
    console.log(prev, curr);

    // return  {
    //     id: prev.id + curr.id
    // }


    return prev + curr.id
}, 0)

// console.log(1.id);
console.log(sumInd);


