// https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (!l1) {return l2;}
  if (!l2) {return l1;}

  let smallHeadList, bigHeadList;
  if (l1.val < l2.val) {
    smallHeadList = l1;
    bigHeadList = l2;
  } else {
    smallHeadList = l2;
    bigHeadList = l1;
  }

  // The smallHeadList is the reference of the node which is bigger in l1 and l2 head position.
  if (!smallHeadList.next) {
    smallHeadList.next = bigHeadList;
    return smallHeadList;
  }

  /*
   compare small.next to big
   @param {ListNode}  small: small one
   @param {ListNode}  big: big one
   @return void     Will change the 'next' of 'small' ListNode

FROM:
   mergeTwoNodeList(smallNode, bigNode)
   smallNode ------------> A

                bigNode--------------> B

BECOME:


   smallNode ----           A
                |
                ->bigNode-------------->B

THEN:
   mergeTwoNodeList(bigNode, A)

   */
  function mergeTwoNodeList(smallNode, bigNode) {
    if (!smallNode || !bigNode) {
      return;
    }

    if (!smallNode.next) {
      smallNode.next = bigNode;
      return smallHeadList;
    }

    if (smallNode.next.val < bigNode.val) {
      mergeTwoNodeList(smallNode.next, bigNode);
    } else {
      const oldNext = smallNode.next;
      smallNode.next = bigNode;
      mergeTwoNodeList(bigNode, oldNext);
    }
  }

  mergeTwoNodeList(smallHeadList, bigHeadList);
  return smallHeadList;
};

export default mergeTwoLists;