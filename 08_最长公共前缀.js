var longestCommonPrefix = function (strs) {
  var re = strs[0] ? strs[0] : '';
  for (var i = 1; i < strs.length; i++) {
    var regex = new RegExp('^' + re);

    while (!regex.test(strs[i]) && re.length) {
      re = re.slice(0, re.length - 1);
      regex = new RegExp('^' + re);
    }
  }
  return re;
};
longestCommonPrefix(["flower", "flow", "flight"])

/**
 * 1. 定义一个变量re，用于存储最长公共前缀
 * 2. 循环遍历数组，将数组中的第一个元素赋值给re
 * 3. 定义一个正则表达式，用于判断re是否是strs[i]的前缀
 * 4. 如果re不是strs[i]的前缀，则将re的最后一个字符删除，然后重新判断
 * 5. 如果re是strs[i]的前缀，则继续循环
 * 6. 返回re
 */