
// let userNum = Number(prompt('Enter number'));

//     // if ()
//     for (let num = 0; num <= userNum; num++) {
//         if (num > 50000) {
//             console.log('limit number of system');
//             break;
//         }

//         if (num % 2 !== 0) {
//             continue;
//         }
        
//         console.log(num);

//         // 
//         // ...

//     }

let arr = [null, null, 'ssss', true, false, 'dsfds', 'dfsdfsdfsd'];

    for (let a of arr) {
        if ('ssss' === a) {
            // continue;
            break;
        }

        console.log(a);
    }


    for (let a in arr) {
        if ('ssss' === arr[a]) {
            continue;
            // break;
        }

        console.log(a);
    }


// // // // 

// console.log(b);
// console.log(c);
// console.log(a);

var a = 1
let b = 1

const c = 1;
// c = 11;
console.log(c);

a = 2;
b = 2

console.log(a, b);

for (var cc = 0; cc < 10; cc++) {}
console.log(cc);
for (let bb = 0; bb < 10; bb++) {}
console.log(bb);

// if (2<4) {
//     let good = true;
//     var neGood = 'dsfsd'
//     console.log(good);
// }
// console.log(neGood);
// // console.log(good);


// {
//     let n = 1000;
//     var x = 'hello var'
//     console.log(n);
// }

// console.log(x);
// console.log(n);