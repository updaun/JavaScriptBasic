function isPalindrome(word) {
    // 여기에 코드를 입력해 주세요.
    return word == word.split('').reverse().join('');
  }
  
  // 테스트 코드
  console.log(isPalindrome("racecar"));
  console.log(isPalindrome("stars"));
  console.log(isPalindrome("기러기"));
  console.log(isPalindrome("123321"));
  console.log(isPalindrome("hello"));
  console.log(isPalindrome("kayak"));