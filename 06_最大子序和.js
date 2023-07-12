var maxSubArray = function (nums) {
  let pre = 0, maxAns = nums[0];
  nums.forEach((x) => {
    pre = Math.max(pre + x, x);
    // console.log("pre  " + pre);
    maxAns = Math.max(maxAns, pre);
    console.log("maxAns " + maxAns);

  });
  return maxAns;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

/**
 * 1. 定义两个变量pre和maxAns，pre用于记录当前元素之前的所有元素的和，
 *   maxAns用于记录最大的和
 * 2. 循环遍历数组，如果pre+x大于x，则将pre+x赋值给pre，否则将x赋值给pre
 * 3. 每次循环都将pre和maxAns进行比较，将较大的值赋值给maxAns
 * 4. 返回maxAns
 */