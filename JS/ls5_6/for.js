
console.log('hello', 1);
console.log('hello', 2);
console.log('hello', 3);
console.log('hello', 4);
console.log('hello', 5);


// for (let stepper = 0;  stepper <= 10; stepper++) { // stepper = stepper + 1
//     console.log('Lorem ', stepper);
// }


// for (let stepper = 10;  stepper >= 0; stepper--) { // stepper = stepper - 1
//     console.log('Lorem ', stepper);
// }

// for (let stepper = 0;  stepper <= 20; stepper = stepper + 3) { // stepper = stepper + 3
//     console.log('Lorem ', stepper);
// }




//                  0         1         2           3           4         5      6     7     8    9    10  11
let students = ['Myhailo', 'Mykyta', 'Natalia', 'Yaroslav', 'Vladyslav', true, null, 'ddg', 333, 555, 66, 64];


// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);


    console.log(students);
    console.log(students.length);

for (let index = 0; index <= students.length - 1; index++) { // index < students.length; index <= students.length - 1;
    // console.log(222);
    console.log(students[index]);
}


console.log(students[12]);


students[66] = 34;

console.log(students, students[65], students[105]);


