class Sorter {
  constructor() {
    this.arrSort = [];
    this.comparator = function (left, right) {
      return left - right;
    }
  }

  add(element) {
    this.arrSort.push(element);
  }

  at(index) {
    return this.arrSort[index];
  }

  get length() {
    return this.arrSort.length;
  }

  toArray() {
    return this.arrSort;
  }

  sort(indices) {
    let newArr = [];

    for(var i = 0; i < indices.length; i++) {
      newArr.push(this.arrSort[indices[i]]);
    }
    newArr.sort(this.comparator);
    Array.prototype.sort.call(indices);

    for (var a = 0; a < indices.length; a++) {
      this.arrSort[indices[a]] = newArr[a];
    }
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;