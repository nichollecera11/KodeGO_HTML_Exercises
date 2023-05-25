// // function factorial(number) {
// //     if (number === 0) {
// //         return 1;
// //     }
// //     else {
// //         return number * factorial(number -1);
// //     }
// //     }
// // console.log('factorial', factorial(4));

// const arrayData = [1, 2, 3, 4, 5, 6, 7, 8];
// const targetData = 7


// console.log(arrayData.indexOf(targetData));

// // Binary Search 
// console.log(arrayData.sort(compareFunction));
// function compareFunction(a, b) {
//     return a - b;
// }


const arrayData = [5, 10, 4, 2, 12, 35, 1, 100, 90]

function bbSort() {
    for (let i = 0; i < arrayData.length - 1; i++) {
        for (let j = 0; j < arrayData.length - i - 1; j++) {
            // console.log('arrayData[j]:', arrayData[j]);
            // console.log('arrayData[j + 1]:', arrayData[j + 1]);
            // console.log('--------------------------------------------------------')
            if (arrayData[j] > arrayData[j + 1]) {
                const temp = arrayData[j];
                arrayData[j] = arrayData[j + 1];
                arrayData[j + 1] = temp;
            }
            
        }
    }
}
bbSort();
console.log(arrayData);