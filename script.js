//when a number or operator is clicked, the input will display the value
const input = document.querySelector('input')

const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
    let value = button.value;
    if (value === 'X' || value === '/' || value === '+' || value === '-') {
        value = button.value;
    } 
   
    button.addEventListener('click', () => {
        if (value === 'C') {
            input.value = ''
        } else {
            input.value += value
        }
        
    })
})

