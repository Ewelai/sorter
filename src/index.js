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
    const newArr = [];
    const sortInd = indices.sort((left, right) => left - right);

    for(let i = 0, len = indices.length; i < len; i++) {
      newArr.push(this.arrSort[sortInd[i]]);
    }

    newArr.sort(this.comparator);

    for (let a = 0, len = indices.length; a < len; a++) {
      this.arrSort[sortInd[a]] = newArr[a];
    }
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;
