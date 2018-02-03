/*
-= Problem Statement =-

Implement an algorithm to print all valid (i.e. properly opened and closed)
combinations of n pairs of braces.

Example:
Input : 3

Output : 

{{{}}} 
{{}{}}
{{}}{} 
{}{{}}
{}{}{}

Input: 4
*/

const bracketCombo = n => {
  const _inner = (open, closed, str) => {
    if (open === 0 && closed === 0) {
      console.log(str);
    }

    if (open > closed) {
      return;
    }

    if (open > 0) {
      _inner(open - 1, closed, str + '{');
    }

    if (closed > 0) {
      _inner(open, closed - 1, str + '}');
    }
  }

  return _inner(n, n, '')
}

console.log(bracketCombo(3));
