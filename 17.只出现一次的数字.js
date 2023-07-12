var singleNumber = function (nums) {
  return nums.reduce((a, b) => {

    return a ^ b
  })
};

// 异或方法 1 ^ 1 = 0   2 ^ 2 = 0  0 ^ 4 = 4
console.log(singleNumber([4, 1, 2, 1, 2]));

/**
 * 1. 使用异或运算符，将数组中的所有元素进行异或运算
 * 2. 返回结果
 */