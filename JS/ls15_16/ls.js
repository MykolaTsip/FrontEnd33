// Declaration Vs Expression


// let funk1 = function () {
//     // /// /// 
// }

// function funk2 () {
//     // // //
// }

// // Arrow function
// let funk3 = () => {
//     console.log(222, 'Hello world');
// }

// funk3()




function funk4 (...arguments) {
    // console.log(arguments);
    // console.log(a + b + c + d);

    // let sum = 0
    // for (let el of arguments) {
    //     sum += el;
    // }
    // console.log(sum);

    // console.log(arguments[1]);

    // console.log(a + b + c + d + sum)
}


funk4(1, 2, 3, 4);

funk4(1, 2, 3, 4, 5, 6, 7, 8, 9);



// // // function in function


let calculator = (a, b, act) => {
    function add () { return a + b}
    function min () { return a - b}
    function mul () { return a * b}

    if (act === '+') {
        console.log(add());
    } else if (act === '-') {
        console.log(min());
    } else if (act === '*') {
        console.log(mul());
    } else {
        console.log('Errror');
    }
}



calculator(1, 4, '+');
calculator(8, 4, '*');
calculator(10, 1, '-');

//  // //

function add (n1, n2) { return n1 + n2}
function min (n1, n2) { return n1 - n2}
function mul (n1, n2) { return n1 * n2}

let calculator1 = (a, b, act) => {

    if (act === '+') {
        console.log(add(a, b));
    } else if (act === '-') {
        console.log(min(a, b));
    } else if (act === '*') {
        console.log(mul(a, b));
    } else {
        console.log('Errror');
    }
}


calculator1(1, 2, '+')
calculator1(2, 3, '*')





//  // // // // 


let a = function () {
    console.log(1);
}

let b = () => {

}


// console.log(typeof b);
// console.log(typeof null);



// (function () {
//     console.log(2222);
// })

// (function () {
//     console.log(2222);
// })()


// (() => {
//     console.log(2222);
// })()



console.log('-----');


