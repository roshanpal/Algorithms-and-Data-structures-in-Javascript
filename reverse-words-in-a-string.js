/*
    Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

    Example 1:
    Input: "The cat in the hat"
    Output: "ehT tac ni eht tah"
    Note: In the string, each word is separated by single space and there will not be any extra space in the string.
 */

const  str = 'The cat in the ha';

console.log(reverseWords(str));

function reverseWords(str) {
    const arr = str.split(' ');
    let output = '';

    for (let i = 0; i < arr.length; i++) {
        const curStr = arr[i];

        for (let j = curStr.length - 1; j >= 0; j--) {
            output += curStr[j];
        }
        output += ' ';
    }
    return output;
}