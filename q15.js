setInterval(function () {
    var date = new Date();

    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    console.log(h + ":" + m + ":" + s);
}, 1000);