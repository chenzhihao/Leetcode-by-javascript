/*

 Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

 The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let mapping = {
    '(': ')',
    '{': '}',
    '[': ']',
  }

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
    let length = stack.length;
    if (length > 1 && mapping[stack[length - 2]] === stack[length - 1]) {
      stack.splice(length - 2, 2);
    }
  }

  return stack.length === 0;
};

export default isValid;
