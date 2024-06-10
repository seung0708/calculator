const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = document.querySelector('.calculator__display');

//1. listen for all keypresses
keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.actoin;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType
        //if the key does not have a data-action, it must be a number key
        if (!action) {
            if(displayedNum === '0' || previousKeyType === 'operator') {
                display.textContent = keyContent
            } else {
                //if the calculator shows a non-zero number, we want to append the clicked key to the displayed number
                display.textContent = displayedNum + keyContent;
            }
            calculator.dataset.previousKeyType = 'number'
        }

        if (action === 'decimal') {
            if (!displayedNum.includes('.')) {
                display.textContent = displayedNum + '.'
            } else if (previousKeyType === 'operator') {
                display.textContent = '0.';
            }
            calculator.dataset.previousKeyType = 'decimal'; 
        }

        if (action === 'clear') {
            calculator.dataset.previousKeyType = 'clear'
        }

        if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
            key.classList.add('is-depressed');

            calculator.dataset.previousKeyType = 'operator';
            calculator.dataset.operator = action;
        }

        Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'));
        
        if (action === 'calculate') {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;

            display.textContent = calculate(firstValue, operator, secondValue);
        }
    }
})


const calculate = (n1, operator, n2) => {
    let result = '';
    if(operator === 'add') {
        result = parseInt(n1) + parseInt(n2)
    } else if (operator === 'subtract') {
        parseInt(n1) - parseInt(n2)
    } else if (operator === 'multiply') {
        parseInt(n1) * parseInt(n2)
    } else if (operator === 'divide') {
        parseInt(n1) / parseInt(n2)
    }
    return result;
}