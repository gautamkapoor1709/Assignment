function parseURL(url) {
    var a = document.createElement("a");
    a.href = url;

    console.log("Protocol:", a.protocol);
    console.log("Host:", a.host);
    console.log("Path:", a.pathname);
}

parseURL("https://www.example.com/page");