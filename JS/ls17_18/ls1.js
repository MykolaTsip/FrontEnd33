// console.log(222);



let mass = [23, 66, 'df dfd', null, true, 44, 1, 0]
console.log(mass);


// mass[8] = 'Hello'
// console.log(mass);


// mass[1] = 2
// console.log(mass);


// mass[12] = true;
// console.log(mass, mass[10]);


// let newm = [];

// for(let i = 0; i <= 10; i++) {
//     newm[i] = i
// }

// console.log(newm);


// delete mass[1];
// console.log(mass, mass[1]);


// let obj = {
//     hello: '222',
//     a: 11,
//     age: 44
// }
// console.log(obj);

// delete obj.hello;
// console.log(obj);



// mass[mass.length] = 1000;
// mass[mass.length] = 9999
// mass[mass.length] = null
// console.log(mass);


// console.log(mass.length);


mass.push(1000);
mass.push(9999, null, true);

console.log(mass);


mass.unshift('fdfd');
console.log(mass);


mass.pop();
console.log(mass);


mass.shift();
mass.shift();
console.log(mass);


// mass.splice(2, 6);
mass.splice(2, 6, 'Hello ', 'world', true);
console.log(mass);


let newArr = mass.slice(2, 5);
console.log(mass, newArr);

let newArr2 = mass.slice();
console.log(newArr2);

let newArr3 = mass

newArr3[0] = 1;
newArr2[1] = null;
console.log(mass);
console.log(newArr2);
console.log(newArr3);


console.log('---------');
// mass.forEach((data) => {});
mass.forEach(function (el, index, arr) {
    console.log(el, index, arr);
});



















