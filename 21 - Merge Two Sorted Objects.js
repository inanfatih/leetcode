/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4

 */
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

function ListNode(val, next) {
  val = val === undefined ? 0 : val;
  next = next === undefined ? null : next;

  if (val === 0) {
    return;
  } else
    return {
      [val]: next,
    };
}

var mergeTwoLists = function (l1, l2) {
  if (l1 === null) {
    return l2;
  } else if (l2 === null) {
    return l1;
  }

  let result = ListNode();
  let key2;
  let key1;

  while (Object.keys(l1).length !== 0 || Object.keys(l2).length !== 0) {
    if (Object.keys(l1).length !== 0 && Object.keys(l2).length !== 0) {
      key2 = Number(Object.keys(l2)[0]);
      key1 = Number(Object.keys(l1)[0]);

      if (key1 < key2) {
        result = ListNode(key1, result);

        l1 = l1[key1];
      } else {
        result = ListNode(key2, result);

        l2 = l2[key2];
      }
    } else if (Object.keys(l2).length !== 0) {
      key2 = Number(Object.keys(l2)[0]);

      result = ListNode(key2, result);

      l2 = l2[key2];
    } else if (Object.keys(l1).length !== 0) {
      key1 = Number(Object.keys(l1)[0]);
      result = ListNode(key1, result);

      l1 = l1[key1];
    }
  }
  console.log(result);
  let reversedResult = ListNode();

  while (result !== null) {
    reversedResult = ListNode(Number(Object.keys(result)[0]), reversedResult);
    result = result[Number(Object.keys(result)[0])];
  }

  return reversedResult;
};

let list1 = { 1: { 2: { 4: {} } } };
let list2 = { 1: { 3: { 4: {} } } };

console.log(mergeTwoLists(list1, list2));
