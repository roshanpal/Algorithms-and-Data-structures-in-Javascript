/*
    You are given a string of parenthesis. Return the minimum number of parenthesis that would need to be removed in order to make the string valid.

    Example:

    "()())()"

    The following input should return 1.

    ")("
 */

const str = '()())()';

console.log(countInvalidParenthesis(str));

function countInvalidParenthesis(input) {
    const parenthesis = '(){}[]';
    const stack = [];
    let invalid = 0;

    for (let i = 0; i < input.length; i++) {
        const parenthesisPos = parenthesis.indexOf(input[i]);
        if (parenthesisPos % 2 === 0) {
            stack.push(input[i + 1]);
        } else {
            const lastItem = stack.pop();
            if (lastItem !== input[i]) {
                invalid++;
            }
        }
    }

    return invalid;
}