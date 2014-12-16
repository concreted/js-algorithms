/*
1.8

Given a method isSubstring and two strings s1 and s2, use a single call of
isSubstring to check whether string s2 is a rotation of s1.

*/

module.exports = isRotation;

function isSubstring(substring, string) {
  return string.indexOf(substring) >= 0;
}

function isRotation(s1, s2) {
  // Generate all rotations of s1 and concatenate together
  var rotations = s1;
  for (var i = 0; i < s1.length-1; i++) {
    s1 = s1.slice(1) + s1[0];
    rotations += s1;
  }
  return isSubstring(s2, rotations);
}
