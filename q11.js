function isNumber(value) {
    if (typeof value === "number") {
        return true;
    } else {
        return false;
    }
}

console.log(isNumber(10));
console.log(isNumber("10"));