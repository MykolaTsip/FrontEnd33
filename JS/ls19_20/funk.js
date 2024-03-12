

// // Expression
// let exRandom = function (num) {
//     if (num > 0) {
//         return Math.round(Math.random() * num);
//     }
// }


// // Declaration
// function deRandom(num) {
//     if (num > 0) {
//         return Math.round(Math.random() * num)
//     }
// }


// let n1 = exRandom(5);
// console.log(n1);

// let n2 = deRandom(10);
// console.log(n2);








function generatorRange(n1, n2) {
    let endNum;

    if (n2 > n1) {
        endNum = n2 - n1;
    } else if (n1 > n2) {
        endNum = n1 - n2
    } else {
        console.log('Erooor');
        return
    }
            //         2                        //  8
    const randomNum = n1 + Math.round(Math.random() * endNum); // 2 + 0-8 = 8 + 2 = 10
    return randomNum;                                          // 2 + 0-6 = 6 + 2 = 8
    // generatorArray(randomNum);
};


function generatorArray(num = 0) {
    let arr = [];
    let i = 0;

    while (i <= num) {
        arr.push(i)
        i++;
    }

    // iterArray(arr)
    return arr;
}


function iterArray(arr = []) {
    arr.forEach(function (value, index, array) {
        console.log('I generate ' + value + ' with index: ' + index);
    });

    console.log(arr);
}



let randomNumber = generatorRange(5, 15);
let randomArray = generatorArray(randomNumber);
iterArray(randomArray);