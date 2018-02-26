// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
// 	const arr = str.split('');
// 	arr.reverse();
// 	return arr.join('');	
// }

/* function reverse(str){
	return str
	.split('')
	.reverse()
	.join('')
} */

/* function reverse(str) {
	let reversed = '';

	for(let char of str) {
		reversed = char + reversed;
	}

	return reversed;
} */

/* function reverse(str) {
	return str.split('').reduce((rev, char) => {
		return char + rev;
	}, '')
} */

function reverse(str) {
	return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;
