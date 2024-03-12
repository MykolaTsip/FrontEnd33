

// let user = {
//     id: 12,
//     f_name: 'dfdsfsd',
//     l_name: ' dsfsd ',
//     age: 44,
//     cars: ['bmw', 'lanos', 'audi'],
//     // keys: 44
// }

// console.log(user);

// user.skills = ['HTML', 'CSS', 'JS']
// user.age = 45;
// delete user.cars;

// console.log(user);


// let keysObj = user.keys();
// console.log(user.keys);
// console.log(keysObj);

//
// Number('44');
// String(5354);
// Boolean(null)

// console.log(user["f_name"]);



// let keysObj = Object.keys(user);
// console.log(keysObj);


// let val = Object.values(user);
// console.log(val);

// let keyVal = Object.entries(user);
// console.log(keyVal);

// let arrToObj = [[1, true], ['hello', null], [false, true]];
// console.log(arrToObj);
// console.log(Object.fromEntries(arrToObj));


// let newObj = Object.create({
//     a: 111,
//     b: true,
//     c: null
// });

// let newObj1 = Object.create({}, {
//     a: {value: 111},
//     b: {value: true},
//     c: {value: null}
// });

// console.log(newObj1);


// user3A = {
//     skills: ['HTML', 'CSS', 'JS']
// }

// let user1 = {
//     id: 12,
//     f_name: 'dfdsfsd',
//     l_name: ' dsfsd ',
//     age: 44,
//     cars: ['bmw', 'lanos', 'audi'],
// }

// let user2 = user1;

// // let user3 = Object.assign(user3A, user1);
// let user3 = Object.assign({}, user1)


// user1.id = null;
// user2.age = null
// user3.cars = null;

// console.log(user1);
// console.log(user2);
// console.log(user3);



let user = {
    id: 12,
    f_name: 'dfdsfsd',
    l_name: ' dsfsd ',
    age: 44,
    cars: ['bmw', 'lanos', 'audi'],
};


let fr = Object.freeze(user);
// fr.id = false 
// delete fr.age
// fr.skills = ['HTML', 'CSS', 'JS']

// console.log(fr);




let sl = Object.seal(user);
sl.id = false 
delete sl.age
sl.skills = ['HTML', 'CSS', 'JS']

console.log(sl);

let u = {
    a: 1111
}

console.log(Object.isSealed(sl));
console.log(Object.isFrozen(fr));

// console.log(Object.getOwnPropertyNames(u));
// console.log(Object.getOwnPropertySymbols(u));

console.log(u.hasOwnProperty('a'));





