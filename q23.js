var images = ["img1.jpg", "img2.jpg", "img3.jpg"];
var index = 0;

function next() {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    console.log("Showing:", images[index]);
}

function previous() {
    index--;
    if (index < 0) {
        index = images.length - 1;
    }
    console.log("Showing:", images[index]);
}