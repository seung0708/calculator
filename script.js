//when a number or operator is clicked, the input will display the value
const input = document.querySelector('input')

const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
    let value = button.value;
    if (value === 'X' || value === '/' || value === 'C' || value === '=' || value === '+' || value === '-') {
        value = button.value
        console.log(value)
    }
    if (value.includes('.')) {
        value = parseFloat(button.value)
    }

    if (typeof parseInt(value) === 'number') { 
        value = parseInt(value);
    }

    button.addEventListener('click', () => {
        input.value += value
        console.log(input.value)       
    })
})
