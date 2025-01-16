function firstNonRepeatedChar(str) {
  const charCount = {};

  // Count the frequency of each character in the string
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find and return the first character with a frequency of 1
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  // Return null if no non-repeated character is found
  return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
