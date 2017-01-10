import longestSubstring from '../solve/3. Longest Substring Without Repeating Characters';

import test from 'ava';


test(t => {
  t.is(longestSubstring('abcabcbb'), 'abc');
  t.is(longestSubstring('pwwkew'), 'wke');
});