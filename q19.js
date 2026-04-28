function timeConvert(minutes) {
    var hours = Math.floor(minutes / 60);
    var mins = minutes % 60;

    return minutes + " minutes = " + hours + " hour(s) and " + mins + " minute(s).";
}

console.log(timeConvert(200));