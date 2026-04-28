var library = [
    {
        author: "Bill Gates",
        title: "The Road Ahead",
        readingStatus: true
    },
    {
        author: "Steve Jobs",
        title: "Walter Isaacson",
        readingStatus: true
    },
    {
        author: "Suzanne Collins",
        title: "Mockingjay",
        readingStatus: false
    }
];

for (var i = 0; i < library.length; i++) {
    console.log("Book:", library[i].title);
    console.log("Author:", library[i].author);
    console.log("Reading Status:", library[i].readingStatus);
    console.log("--------------------");
}