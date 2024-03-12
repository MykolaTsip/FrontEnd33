
let a = {}
let b = 1
let c = 'dd'
let d = true
let e = null
let f = undefined
let g = Symbol('11')
let h = BigInt(2222222222)


// 0, '' => null => undefined


// let a1 = 10;
// console.log(a1);

// let b1 = a1;
// console.log(b1);

// a1 += 5;
// console.log(a1);
// console.log(b1);



let c1 = {
    a: 10,
    b: true,
    c: 'ffff'
}
console.log(c1);


let d1 = c1;
console.log(d1);


c1.a = 9999;
d1.a = true
console.log(c1);
console.log(d1);


// c1.a = true
d1 = {
    f: 12
}


// let num = 1,1

let num = 1.1