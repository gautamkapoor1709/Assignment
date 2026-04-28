function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    var pivot = arr[0];
    var left = [];
    var right = [];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat(pivot, quickSort(right));
}

var list = [5, 2, 9, 1, 3];
console.log("Quick Sort:", quickSort(list));