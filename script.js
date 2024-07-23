//select the input tag for displaying the calculations
const input = document.querySelector('input')

//select all the buttons
const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
    //initialize the value for each button
    let operators = /[*/+\-]/g
    let value = button.value;
    
    //have each button listen for a click event
    button.addEventListener('click', () => {
        //when a button is clicked, display the value in the input
        input.value += value;
        //if the value is C, delete everything
        if (value === 'C') {
            input.value = ''
        } 
        //if the value is <, delete the last number or operator
        if (value === '<') {
            input.value = input.value.substring(0, input.value.length - 1)
        } 

        //if value is =, return the result
        if (value === '=') {
            input.value = evaluate(input.value)
            console.log(input.value)
        }

        //I also need a way to replace an operator when it already exists. 
        if (input.value.match(operators) && input.value[input.value.length - 1].match(operators)) {
            console.log('this ran')
            if(value.match(operators)) {
                console.log('this ran too')
                input.value = input.value.replace(value.includes(operators), value)
                console.log(input.value)
            }
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

