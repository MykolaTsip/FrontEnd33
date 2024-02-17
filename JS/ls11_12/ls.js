
//  Лінійний пошук

let a = [true, 111, 0, false, 'dfdg', null, true, 'dsgsdgsd', 'dfsdfsd', 3333];


let wantFound = null;


for (let i = 0; i <= a.length -1; i++) {
    console.log(i);

    if (wantFound === a[i]) {
        console.log('I found VALUe!!!');
        console.log(a[i], i);
        break;
    }
}


// Бінарний пошук
let conter = 0;
let b = [0, 2, 4, 6, 7, 9, 10, 20, 50, 60, 70, 100, 110, 140, 160, 190, 200, 555, 1000, 1111, 2000, 3000];

let found = 140;

//
let start = 0;
let end = b.length - 1;


// let isFound = false;

let mid = 0;

while (start < end ) {
    conter++;
    mid = Math.round((start + end) / 2);

    if (b[mid] === found) {
        console.log('I found it!', b[mid]);
        console.log(conter);
        break;
        // isFound = !isFound;
    } else if (b[mid] > found) {
        end = mid;
    } else if (b[mid] < found) {
        start = mid
    }
}



// Сортування бульбашкою

let c = [0, 100, 10, 1, 5, 4, 11, 12, 3];

let sortCount = 0
//  По зростанню
for (let j = 0; j <= c.length -1; j++) {
    for (let i = 0; i <= c.length - 1; i++) {
        sortCount++;
        if (c[i] > c[i +1]) {
            let temp = c[i+1]
            c[i+1] = c[i];
            c[i] = temp
        }
    }
}

console.log(c);
console.log(sortCount);


// По спаданню
for (let j = 0; j <= c.length -1; j++) {
    for (let i = 0; i <= c.length - 1; i++) {
        if (c[i] < c[i +1]) {
            let temp = c[i+1]
            c[i+1] = c[i];
            c[i] = temp
        }
    }
}

console.log(c);
