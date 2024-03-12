// console.log(2222);



let num = 5.4;
console.log(num);


let num1 = Math.round(num);
console.log(num1);


let num2 = Math.floor(5.8)
console.log(num2);


let num3 = Math.ceil(5.1)
console.log(num3);


console.log(Math);

let PI = Math.PI;
console.log(PI);

console.log(Math.E);
console.log(Math.SQRT1_2);

console.log(Math.cos(0.75));
console.log(Math.sin(0.5))


let arr = [1, 4, 6, 1, 3, 5]

// console.log(Math.min(arr));

// console.log(Math.min(...arr));


console.log(Math.min(1, 4, 6, 1, 3, 5, 3, 444, 1));
console.log(Math.max(1, 4, 6, 1, 3, 5));



function min (...arguments) {
    let minN;

    for (let i = 0; i <= arguments.length - 1; i++) {
        if (!minN && minN !== 0) {
            minN = arguments[i]
        } else if (minN > arguments[i]) {
            minN = arguments[i]
        }
    }
    
    return minN;
}

console.log(min(1, 4, 6, 1, 3, 5, 3, 444, 1));


console.log(Math.random());


let num12 = 100 + Math.round(Math.random() * 900)
console.log(num12);


let q = Math.pow(5, 3);
console.log(q, 5**3);


console.log(Math.cbrt(600));



