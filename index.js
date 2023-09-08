function isPalindrome(word) {
  const arrWord = word.split("")
  const newArr = [...arrWord].reverse()
  const newWord = newArr.join("")
  return word == newWord
}





/* 
  Add your pseudocode here
  1) We need to split() the input string into individual letters and put then inside an array.
  2) We need to use the reverse() method to reverse the order of these letters of the new array. We'll use a function that includes this and the previous step.
  3) We need to use an if statement or a ternary one with the previous function inside, to determine whether the string is a palindrome or not.
*/

/*
  Add written explanation of your solution here
I use the split("") method to separate the string into a new array, then used reverse() to flip their order, then join("") to turn them into a string again.
I used the if statement first, but turned it into ternary operator, which only works with an unmutated array, hence why I used the spread operator to make a new array, even though we don't really need it.

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
