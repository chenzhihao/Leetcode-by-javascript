export class NodeList {
  constructor (val) {
    this.val = val;
    this.next = null;
  }

  print () {
    let pointer = this;
    let res = [];
    while (pointer) {
      res.push(pointer.val);
      pointer = pointer.next;
    }
    return res.join('');
  }
}