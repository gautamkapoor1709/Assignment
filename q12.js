function isRegExp(value) {
    if (value instanceof RegExp) {
        return true;
    } else {
        return false;
    }
}

console.log(isRegExp(/abc/));
console.log(isRegExp("abc"));