
let arrNum = [4, 2, 1, 0, 13, 1, 19, 100, 49, 33, 44, 300, 1];

function bubleSort(arr = [], isSortUp = true) {
    for (let j = 0; j <= arr.length - 1; j++) { // undefined.length
        for (let i = 0; i <= arr.length - 1; i++) {
            if (isSortUp) {
                if (arr[i] > arr[i+1]) {
                    let currentItem = arr[i]
        
                    arr[i] = arr[i+1];
                    arr[i+1] = currentItem;
                }
            } else {
                if (arr[i] < arr[i+1]) {
                    let currentItem = arr[i]
        
                    arr[i] = arr[i+1];
                    arr[i+1] = currentItem;
                }
            }
        }
    }

    return arr
}

            //    [4, 2, 1, 0, 13, 1, 19, 100, 49, 33, 44, 300, 1]
let sortedArray = bubleSort(arrNum, 1); // [0, 1, 1, 1, 2, 4, 13, 19, 33, 44, 49, 100, 300]
console.log(sortedArray);

console.log(bubleSort(arrNum, 0));

// console.log(bubleSort(arrNum));


// let a;

// console.log(a);


// console.log(undefined.length);
console.log(bubleSort());


console.log(bubleSort(arrNum));
console.log(bubleSort(arrNum, false));
console.log(bubleSort(arrNum, true));


let a = prompt('Enter yyyyyyyyyyy');
console.log(a);
document.write(a)




let aar = bubleSort([1, 4, 1, 3, 55, 1])
console.log(arr);

