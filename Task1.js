const array = [1, 2, 0, 4, 5, 0, 9, 6, 0, 0, 3, 8, 0,10];

 function moveZerosToLeft(arr) {
    let zeroCount = 0;

    // Counting number of zeros
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroCount++;
        }
    }



    let writePointer = arr.length - 1;
    
    // Moving non-zero elements to the right side of the array
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] !== 0) {
            arr[writePointer--] = arr[i];
        }
    }


    // Filling start of the array with zeros
    for (let i = 0; i < zeroCount; i++) {
        arr[i] = 0;
    }

    return arr;
}

console.log(moveZerosToLeft(array)); 
