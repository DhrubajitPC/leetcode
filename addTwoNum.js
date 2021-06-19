// https://leetcode.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  const head = new ListNode();
  let temp = head;

  while (l1 || l2) {
    const sum = carry + (l1 ? l1.val : 0) + (l2 ? l2.val : 0);

    if (sum >= 10) {
      carry = Math.floor(sum / 10);
      temp.val = sum % 10;
    } else {
      carry = 0;
      temp.val = sum;
    }

    l1 = l1 && l1.next;
    l2 = l2 && l2.next;

    if (l1 || l2) {
      temp.next = new ListNode();
      temp = temp.next;
    }
  }

  if (carry > 0) {
    temp.next = new ListNode(carry);
  }

  return head;
};
