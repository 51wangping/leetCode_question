const arr = [3,5,7,9,10]

var searchInsert = function (nums, target) {
  let index = nums.indexOf(target)
  if(index> -1){
    return index
  }else {
    nums.push(target)
    nums.sort((x,y)=>x-y)
    console.log(nums);
    return nums.indexOf(target)
  }
};
console.log(searchInsert(arr, 8));

/**
 * 1. 判断数组中是否存在目标值，如果存在则返回索引
 * 2. 如果不存在，则将目标值push到数组中，然后排序，返回索引
 */
