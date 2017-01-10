/*
 https://leetcode.com/problems/longest-substring-without-repeating-characters/

 3. Longest Substring Without Repeating Characters
 Given a string, find the length of the longest substring without repeating characters.

 Examples:

 Given "abcabcbb", the answer is "abc", which the length is 3.

 Given "bbbbb", the answer is "b", with the length of 1.

 Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

 */

/**
 * @param {string} s
 * @return {string} res
 */
var longestSubstring = function(s) {
  let longestSubstring = '';
  let longestSubStringLength = 0;
  let hashMap = {};
  let startPointerPos = 0;

  for (let i = 0; i< s.length; i++) {
    if (hashMap[s[i]] !== undefined) {
      // the max check is important, without this the startPointer cursor may go backward,
      // for example abcdbfga
      // when we meet the second b, the cursor move to after first b , but when meet second a,
      // we should not allow it go backward to after first a.

      startPointerPos = Math.max(startPointerPos, hashMap[s[i]] + 1);
    }

    hashMap[s[i]] = i;
    if (i-startPointerPos + 1 > longestSubStringLength) {
      longestSubstring = s.slice(startPointerPos, i+1);
    }

    longestSubStringLength = Math.max(i-startPointerPos + 1, longestSubStringLength);
  }

  return longestSubstring;
};

export default longestSubstring;