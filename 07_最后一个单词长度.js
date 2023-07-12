var lengthOfLastWord = function(s) {
  s = s.trim()
  if(s.length == 0) return 0
  var arr = s.split(" ")
  return arr[arr.length-1].length
};

console.log(lengthOfLastWord(" "));

/**
 * 1. 将字符串去除首尾空格
 * 2. 如果字符串长度为0，则返回0
 * 3. 将字符串以空格分割成数组，返回数组最后一个元素的长度
 */