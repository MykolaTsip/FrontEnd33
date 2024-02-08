
let lessonName = prompt('Enter name'); // Admin


switch (lessonName) { // ===
    case 'Andriy': console.log('welcome ', lessonName); //  Andriy === Admin => !
    break;
    case 'Admin': console.log('hello ', lessonName);    // Admin   === Admin => true
    break;
    case 'Teacher': console.log('hello ', lessonName);
    break;
    case 'Studend': console.log('hello ', lessonName);
    break;
    default: console.log('hello unknkon');
}


// 

// 444
// lessonName == 'Andriy' ? console.log('welcome Andriy') : console.log('who i am');

// lessonName == 'Andriy'
//     ? console.log('welcome Andriy')
//     : lessonName == 'Admin'
//         ? console.log('hello ', lessonName)
//         : console.log('who i am');



// if (name =='Teacher') {
//     console.log('you teacher');
// } else if (name == 'Mykola') {
//     console.log('you Mykola');
// } else if (name == 'Student') {
//     console.log('you student');
// } else {
//     console.log('who i am');
// }

// if (lessonName == 'Teacher') {
//      console.log('you teacher');
// } else {
//     if (lessonName === 'Mykola') {
//         console.log('you Mykola');
//     } else {
//         if (lessonName == 'Student') {
//             console.log('you student');
//         } else {
//             if (lessonName = 'Admin') {
//                 console.log('hello ', lessonName);
//             }
//             console.log('who i am');
//         }
//     }
// }

