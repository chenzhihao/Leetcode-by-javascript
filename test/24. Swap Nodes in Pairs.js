import swapPairs from '../solve/24. Swap Nodes in Pairs';
import {NodeList} from '../utils';

import test from 'ava';

const node1 = new NodeList(1);
const node2 = new NodeList(2);
const node3 = new NodeList(3);
const node4 = new NodeList(4);
const node5 = new NodeList(5);

//List1: 1 -> 2 -> 3 -> 4 -> 5
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;


test('my passing test', t => {
  const swapped = swapPairs(node1);
  if (swapped.print() === '21435') {
    return t.pass();
  }
  t.fail();
});