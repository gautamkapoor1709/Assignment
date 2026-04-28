var stack = [];

stack.push(10);
stack.push(20);
stack.push(30);

var element = 20;
var found = false;

for (var i = 0; i < stack.length; i++) {
    if (stack[i] === element) {
        found = true;
        break;
    }
}

console.log("Element found in stack:", found);