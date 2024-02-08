let pavloName = 'Pavlo';
let pavloId = '12';
let pavloAge = 33;
let isPavloHasCar = true;

let Pavlo = {
    name: 'Pavlo',
    id: '12',
    age: 33,
    // isCar: true
    car: {
        name: 'bmw',
        model: 'x3',
        speed: 200,
        price: '20 000',
        previousOwner: {
            name: 'dfdfd',
            id: '22',
            car: {
                name: 'ddd',
                price: 2222
            }
        }
    }
}

let Vasyl = {
    name: 'Vasyl',
    id: '13',
    age: 43,
    // isCar: false
    car: null
}

console.log(pavloName, pavloId, pavloAge);

console.log(Vasyl);
console.log(Vasyl.name, Vasyl.id, Vasyl.age, Vasyl.car);

console.log(22222222);

console.log(Pavlo.car.name, Pavlo.car.speed);
console.log(Pavlo.car.previousOwner.name);

Vasyl.car = {
    name: 'audi',
    model: 'q65',
}

console.log(Vasyl.car);


// 


// let students = {
//     name1: 'Sophia',
//     name2: 'Mykyta'
// }

              //    0         1          2         3          4
let students = ['Myhailo', 'Mykyta', 'Natalia', 'Yaroslav', 'Vladyslav'];
        //   0    1     2    3    4     5
let array = [1, 'ddd', {}, null, true, false]

console.log(students);
console.log(students[2], students[0], students[4]);
console.log(array[2], array[0]);

let stItStep = [[], students, ['Andrii', 'Ivan', 'Ivan', ['Petro']], null]
console.log(stItStep);
console.log(stItStep[2][3][0]);



console.log(Pavlo['car']['previousOwner'].id);


console.log(typeof array);

