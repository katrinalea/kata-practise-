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

function min (a, b){
    if(a < b){
        return a
    } else {
        return b
    }
}
console.log(min(1, 2))