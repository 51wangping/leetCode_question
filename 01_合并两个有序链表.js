var l1 = [1, 2, 4], l2 = [1, 3, 4]

var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};


console.log(mergeTwoLists(l1, l2));

/**
 *  1. 判断链表是否为空，为空直接返回另一个链表
 *  2. 判断两个链表的头节点，将较小的节点作为头节点，
 *     然后递归调用函数，将较小节点的next指向递归调用的结果
 * 
 */