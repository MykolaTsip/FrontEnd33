


let arrUsers = [];

for (let i = 0; i < 3; i++) {
    let name = prompt('Enter name for user ');
    let age = prompt('Enter age for user ')
    let num = prompt('Enter num for user ')


    // let user = {
    //     name: name,
    //     age: age,
    //     number: num
    // }

    // arrUsers[i] = user;


    arrUsers[i] = {
        name: name,
        age: age,
        number: num
    }
}

console.log(arrUsers);