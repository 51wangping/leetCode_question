var isValid = function (s) {
  var a = s.length / 2;
  for (var i = 0; i < a; i++) {
    s = s.replaceAll("()", "").replaceAll("{}", "").replaceAll("[]", "");
  }
  return s.length == 0;
};


console.log(isValid("{[()]}"));

/**
 * 1. 循环遍历字符串，如果字符串中包含()、{}、[]，则将其替换为空字符串
 * 2. 如果字符串长度为0，则返回true，否则返回false
 */
