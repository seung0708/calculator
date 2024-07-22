//when a number or operator is clicked, the input will display the value
const input = document.querySelector('input')

const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
    let value = button.value;
    
    button.addEventListener('click', () => {
        
        if (value === 'C') {
            input.value = ''
        } else if (value === '<') {
            input.value = input.value.substring(0, input.value.length - 1)
        }
        else {
            input.value += value
        }
        console.log(input.value)
    })
})

