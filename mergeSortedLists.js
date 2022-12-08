/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var mergeTwoLists = function(list1, list2) {
  // account for one list not existing
  if (!list1) {
    return list2;
  } else if (!list2) {
    return list1;
  } else if (!list1 && !list2) {
    return null;
  }
  // Create a new list with the head being the lowest first element of the lists becoming the merged lists head
  let mergedHead = null;
  if (list1.val <= list2.val) {
    mergedHead = list1;
    list1 = list1.next;
  } else {
    mergedHead = list2;
    list2 = list2.next;
  }
  // Create a new pointer for the tail of the merged list
  let mergedTail = mergedHead
  // while both input lists have elements left, take the lowest and add to merged list updating the tail pointer
  while (list1 && list2) {
    let temp;
    if (list1.val <= list2.val) {
      temp = list1
      list1 = list1.next
    } else {
      temp = list2;
      list2 = list2.next
    }
    mergedTail.next = temp
    mergedTail = temp
  }
  // after one list is empty add other list to tail of merged list
  if (list1) {
    mergedTail.next = list1;
  } else {
    mergedTail.next = list2;
  }
  // return head of merged list
  return mergedHead
};