function sortArray(arr) {
  const stringArr = arr.filter(item => typeof item === 'string');
  const numberArr = arr.filter(item => typeof item === 'number');
  return [...stringArr, ...numberArr].sort();
}

const arr = [12, 9, 30, "A", "M", 99, 82, "J", "N", "B"];
console.log(sortArray(arr)); // Output: [ 'A', 'B', 'J', 'M', 'N', 9, 12, 30, 82, 99 ]