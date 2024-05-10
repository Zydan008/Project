function patternCount(text, pattern) {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (text.substring(i, i + pattern.length) === pattern) {
      count++;
    }
  }
  return count;
}

// Test cases
console.log(patternCount("palindrom", "ind"));  // Output: 1
console.log(patternCount("abakadabra", "ab")); // Output: 2
console.log(patternCount("hello", ""));        // Output: 0
console.log(patternCount("ababab", "aba"));    // Output: 2
console.log(patternCount("aaaaaa", "aa"));     // Output: 5
console.log(patternCount("hell", "hello"));    // Output: 0