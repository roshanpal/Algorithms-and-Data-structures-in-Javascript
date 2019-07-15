/*
    Validate balanced parantheses
    Imagine you are building a compiler. Before running any code, the compiler must check that the parentheses in the program are balanced. Every opening bracket must have a corresponding closing bracket. We can approximate this using strings. 

    Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. 
    An input string is valid if:
    - Open brackets are closed by the same type of brackets.
    - Open brackets are closed in the correct order.
    - Note that an empty string is also considered valid.

    Example:
    Input: "((()))"
    Output: True

    Input: "[()]{}"
    Output: True

    Input: "({[)]"
    Output: False
 */


const input = '[()as]{y}';

function validateParantheses(text) {
    const parantheses = '(){}[]'; // pairs of brackets which we'll use to indentify if the input is valid.
    const stack = [];

    for (let i = 0; i < text.length; i++) {
        const position = parantheses.indexOf(text[i]);

        // if position is -1, it means the character is not in parantheses, so we skip this iteration.
        if (!~position) {
            continue;
        }

        // if position is an even number then it means the character is an opening bracket.
        if (position % 2 === 0) {
            // we push the closing bracket of the pair to stack
            stack.push(parantheses[position + 1]);
        } else {
            // if it is a closing backet, then we compare it against the last bracket in the stack.
            // if both don't match then there is an error in the input, we return false and terminate the execution.
            const lastItem = stack.pop();
            if (lastItem !== text[i]) {
                return false;
            }
        }
    }

    // finally after the loop is finished, we should have an empty stack. Which means all the pairs were present in the input.
    return stack.length === 0;
}

console.log(validateParantheses(input));