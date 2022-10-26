/* function:
=========
name: min

parameter a: number

parameter b: number

return: number

pseudo code:

if a is smaller than b
	return a
else
	return b */

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
console.log(min(1, 2));

console.log(min(3,4), "expect - 3")
console.log(min(5,3), "expect - 3")
console.log(min(2, -3), "expect - -3")

