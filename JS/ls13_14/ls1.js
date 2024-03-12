
//  return
function addFunk() {
    let a = 17
    let b = 22

    let c = a + b;

    // console.log('ddddddddd');
    return 222

    // console.log();
}

console.log(addFunk());

let result = addFunk()
// let data = prompt('Enter name')


// console.log(
//     function addFunk() {
//         let a = 17
//         let b = 22
    
//         let c = a + b;
//     }
// );

// console.log(c);


// arguments

// let num1 = +prompt('n1') // 4
// let num2 = +prompt('n1') // 3




// let num1 = 4;
// let num2 = 3;


// function plusator(a, b) {
// //    let c = num1 + num2
//     let c = a + b;
      
//    return c
// }

// let a1 = plusator(num1, num2);

// let a2 = plusator(2, 3);


// // /// 


// console.log(a1);
// console.log(a2);



// if (action === '+') {
//     return a + b
// } else 

let num1 = +prompt('n1')
let num2 = +prompt('n2')
let act = prompt('Action: +, -, /, *, ^')

function calc(a, b, action) {
    switch (action) {
        case '+': return a + b;
        case '-': return a - b;
        case '/': return a / b;
        case '*': return a * b;
        case '^': return a**b;
        default: return 0;
    }
}


let resultCalc = calc(num1, num2, act);
console.log(resultCalc);



let newResult = calc(10, 20, '*');
console.log(newResult);

