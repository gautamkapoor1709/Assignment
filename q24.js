var str = "{ name: 'John' }"; // invalid JSON

try {
    var obj = JSON.parse(str);
    console.log(obj);
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log("Invalid JSON format");
    }
}