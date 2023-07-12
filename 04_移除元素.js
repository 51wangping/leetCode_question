var removeElement = function (nums, val) {
  let len = 0
  for (let i = 0; i < nums.length; i++) {
    if(nums[i] !== val) nums[len++] = nums[i]
  }
  return len
};

// [0,1,4,0,3]
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2],2));

/**
 * 1. 定义一个变量len，用于记录不等于val的元素的个数
 * 2. 循环遍历数组，如果当前元素不等于val，则将当前元素赋值给nums[len]，
 *   然后len+1
 * 3. 返回len
 */