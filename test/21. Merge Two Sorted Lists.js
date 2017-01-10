import mergeTwoLists from '../solve/21. Merge Two Sorted Lists';
import {NodeList} from '../utils';

import test from 'ava';

const node1 = new NodeList(1);
const node2 = new NodeList(2);
const node3 = new NodeList(3);
const node4 = new NodeList(4);
const node5 = new NodeList(5);
const node6 = new NodeList(6);

//List1: 1 -> 3 -> 4 -> 6
node1.next = node3;
node3.next = node4;
node4.next = node6;

//List2: 2 -> 5
node2.next = node5;

test('my passing test', t => {
  const mergedListHead = mergeTwoLists(node2, node1);
  let pointer = mergedListHead;
  let res = [];
  while (pointer) {
    res.push(pointer.val);
    pointer = pointer.next;
  }

  if (res.join('') === '123456') {
    return t.pass();
  }
  t.fail();
});