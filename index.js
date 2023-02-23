function isPalindrome(word) {
  // Write your algorithm here
  //I need to reverse the word
  let wordReverse = word.split('').reverse().join('')
  //I need an if/else statement to say if the reversed word is the same as the original, return true. Else return false
  if (wordReverse===word){
    result = true
  }else {
    result = false
  }
  return result
}

/* 
  Add your pseudocode here
//I need to write a code that returns 'true' if the variable is a Palindrome. 
//To start I think I'll want to set up a code that returns the inverse of the string. Then I'd set up an If/else to say that if the two are the same, return true, else, return false.

/*
  Add written explanation of your solution here
*/
// In line 3, I split the word into an array, reversed it, and then joined it back together to get the reversed word. I then set up if, else statements to determine is the reversed word was the same as the original. 
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("testing"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("boob"));
}

module.exports = isPalindrome;
