function LinkedList() {
    this.head = null;
}

LinkedList.prototype.isEmpty = function () {
    if (this.head === null) {
        return true;
    } else {
        return false;
    }
};

var list = new LinkedList();
console.log("Is list empty:", list.isEmpty());