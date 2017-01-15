import isValid from '../solve/20. Valid Parentheses';

import test from 'ava';


test(t => {
  t.is(isValid('{}[]'), true);
  t.is(isValid('{{}[({[]{}})]}'), true);
  t.is(isValid('{}[)'), false);
  t.is(isValid(''), true);
});