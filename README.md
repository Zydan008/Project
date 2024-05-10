SOAL LOGIC DEVELOPMENT PROGRAMMING
 DESCRIPSI
 SOAL LOGIC DEVELOPMENT PROGRAMMING. repository ini berisi kode dan soal yang diberikan. saya menggunakan bahasa pemograman java dan java scripts

 1.  soal mengenai urutan array
    mengurutkan angka dan huruf abjad

dengan soal :
[12,9,30,"A","M",99,82,"J","N","B"]  =>  ["A", "B", "J", "M", "N", 9, 12, 30, 82, 99]

code :
function sortArray(arr) {
  return arr.sort((a, b) => {
    if (typeof a !== 'number' && typeof b === 'number') {
      return -1;
    } else if (typeof a === 'number' && typeof b !== 'number') {
      return 1;
    } else {
      return a.localeCompare(b);
    }
  });
}

const array = [12, 9, 30, "A", "M", 99, 82, "J", "N", "B"];
const sortedArray = sortArray(array);
console.log(sortedArray);

2. pattern count
   yaitu membuat fungsi dengan bisa menerima dua string atau array.

Contoh:
Input: "palindrom", "ind" Output: 1
Input: "abakadabra", "ab" Output: 2
Input: "hello", "" Output: 0
Input: "ababab", "aba" Output: 2
Input: "aaaaaa", "aa" Output: 5
Input: "hell", "hello" Output: 0

code: 
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
console.log(patternCount("hell", "hello"));    // Output: 0;

3. count characters
    membuat fungsi yang menghitung jumlah karakter yang dimasukan oleh pengguna dalam 1x inputan dan urutan hasil akhir sesuai huruf abjad

   contoh :
   Input: "Hello World" Output: ["d": 1, "e": 1, "H": 1, "I": 3, "o": 2, "r": 1, "W": 1]
   Input: "Bismillah" Output: ["a": 1, "B": 1, "h": 1, "i": 2, "l": 2, "m": 1, "s": 1]
   Input: "MasyaAllah" Output: ["A": 1, "a": 3, "h": 1, "l": 2, "M": 1, "s": 1, "y": 1]

   excample code :
   function letterFrequency(input) {
  const freq = {};
  for (const char of input) {
    if (freq[char]) {
      freq[char]++;
    } else {
      freq[char] = 1;
    }
  }
  return freq;
}

const text = "Hello World";
const frequency = letterFrequency(text);
console.log(frequency);

License
MIT

Contact
AFIVAH YUNITA


