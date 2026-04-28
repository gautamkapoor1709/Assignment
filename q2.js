var arr = [10, 20, 30, 40, 50];
var element = 30;
var position = -1;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] == element) {
        position = i;
        break;
    }
}

console.log("Element found at index:", position);