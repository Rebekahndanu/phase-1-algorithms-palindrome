function isPalindrome(word) {
  // Write your algorithm here
  let left = 0;
  let right = word.length - 1;

  while (left < right) {
    if (word[left] !== word[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true; 
}

/* 
  Add your pseudocode here
  1. Initialize two pointers, one starting from the beginning and the other from the end of the word.
  2. Iterate while the left pointer is less than the right pointer.
  3. Compare characters at the left and right pointers.
  4. If they are not equal, return false.
  5. If the loop completes without returning false, the word is a palindrome, so return true.
*/

/*
  Add written explanation of your solution here
  The function `isPalindrome` checks whether a given word is a palindrome or not. It does this by initializing two pointers, one at the beginning and one at the end of the word. It then iterates through the word, comparing characters at the corresponding pointers. If any pair of characters is not equal, the word is not a palindrome, and the function returns false. If the loop completes without returning false, the word is a palindrome, and the function returns true.

  The solution has a time complexity of O(n), where n is the length of the input word, making it an efficient solution for checking palindromes.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
