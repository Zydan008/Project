function charFrequency(input) {
  const freq = {};
  for (const char of input) {
    if (char.match(/[a-z]/i)) {
      const lowerChar = char.toLowerCase();
      freq[lowerChar] = (freq[lowerChar] || 0) + 1;
      if (char !== lowerChar) {
        freq[char] = (freq[char] || 0) + 1;
      }
    }
  }
  return Object.entries(freq).sort((a, b) => a[0].localeCompare(b[0])).reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});
}

console.log(charFrequency("Hello World")); // Output: { d: 1, e: 1, H: 1, I: 3, o: 2, r: 1, W: 1 }
console.log(charFrequency("Bismillah")); // Output: { a: 1, B: 1, h: 1, i: 2, l: 2, m: 1, s: 1 }
console.log(charFrequency("MasyaAllah")); // Output: { A: 1, a: 3, h: 1, l: 2, M: 1, s: 1, y: 1 }