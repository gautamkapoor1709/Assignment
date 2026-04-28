var arr = [1, 2, 3, 4, 5];
var isSorted = true;

for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
        isSorted = false;
        break;
    }
}

console.log("Array is sorted:", isSorted);