class Sorter {
  constructor() {
    // your implementation
      this.array = [];
      this.comparator = (a, b) => (a-b);
  }

  add(element) {
    // your implementation
      this.array.push(element);
  }

  at(index) {
    // your implementation
    return this.array[index];  
  }

  get length() {
    // your implementation
      return this.array.length;
  }

  toArray() {
    // your implementation
      return this.array;
  }

  sort(indices) {
    // your implementation
      let subArray = [];
      const sortedIndices = indices.sort(this.comparator);
      
      if (!Array.isArray(indices)) {
          return this.array;
      }
      
      sortedIndices.forEach(value => subArray.push(this.array[value]));
      
      subArray = subArray.sort(this.customComparator || this.comparator);
    
      sortedIndices.forEach((value, index) => this.array[value] = subArray[index] );
  }

  setComparator(compareFunction) {
    this.customComparator = compareFunction;
  }
}

module.exports = Sorter;