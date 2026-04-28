var str = "this is a test and this test is simple";
var word = "test";
var indexes = [];

for (var i = 0; i < str.length; i++) {
    if (str.substring(i, i + word.length) == word) {
        indexes.push(i);
    }
}

console.log("Indexes of word:", indexes);