var isPalindrome = function (s) {

  s = s.toUpperCase().replace(/[^A-Za-z0-9]/g, "")
  return s == s.split("").reverse().join("") ? true : false
};

console.log(isPalindrome("0P"));
/**
 * 1. 将字符串转换成大写
 * 2. 将字符串中的非字母和数字替换为空字符串
 * 3. 将字符串转换成数组，反转数组，再转换成字符串，判断是否相等
 */