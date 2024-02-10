let number = 10;

let students = ['Nadia', 'Myhailo', 'Mykyta', 'Natalia', 'Vladyslav'];

let Ivan = {
    name: 'Ivan',
    id: 12233,
    isCar: true,
    isWife: true,
    age: 40
    //  fieldIvan
}

// for //
for (number; number <= 40; number += 2) { //  number = number + 2 => number += 2
    console.log(number);
}

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}


// for (let a = 0; )
// console.log(Ivan.length);


console.log('-------');

// for of //
for (let XstutendX of students) {
    console.log(XstutendX);
}

// for (let fieldIvan of Ivan) {
//     console.log(fieldIvan);
// }


console.log('------');

// for in //
for (let fieldIvan in Ivan) {
    console.log(fieldIvan, Ivan[fieldIvan]);
    // Ivan.fieldIvan
}

for (let st in students) {
    console.log(st);
}

console.log('-------');


//  while //
let number1 = 5;
while (number1 <= 35) {
    // number1++
    console.log(number1);
    // number1++

    if (number1 > 10) {
        number1 += 5
    } else {
        number1++
    }
}

// do while //
let number2 = 0;
do {
    console.log(number2);
    number2 += 10;
} while (number2 <= 100)

