//when a number or operator is clicked, the input will display the value
const input = document.querySelector('input')
const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
    let value = button.value;
    
    button.addEventListener('click', () => {
        input.value += value;
        if (value === 'C') {
            input.value = ''
        } 
        if (value === '<') {
            input.value = input.value.substring(0, input.value.length - 1)
        } 
        if (value === '=') {
            input.value = evaluate(input.value)
            console.log(input.value)
        }
        
    })
})

const evaluate = expression => {
    const operators = ['+', '-', '*', '/'];
    const sanitizedExpression = expression.split('').filter(char => {
        return !isNaN(char) || operators.includes(char);
    }).join('');

    return Function('"use strict";return (' + sanitizedExpression + ')')();
}

