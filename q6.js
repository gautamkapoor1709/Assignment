var arr = [9, 5, 1, 4, 3];

for (var i = 1; i < arr.length; i++) {
    var key = arr[i];
    var j = i - 1;

    while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
    }

    arr[j + 1] = key;
}

console.log("Insertion Sort:", arr);