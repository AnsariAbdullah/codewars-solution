function isPalindrome(x) {
	let input = x.toLowerCase();
	let palindrome = x.split('').reverse().join('');
	return palindrome.toLowerCase() == input
}