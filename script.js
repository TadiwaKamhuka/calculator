function add(n1, n2) {
    return n1 + n2
}

function subtract(n1, n2){
    return n1 - n2
}

function multiply(n1, n2){
    return n1 * n2;
}

function divide(n1, n2){
    return n1 / n2;
}

let numberStored = ''
let operatorStored = ''

function operate(num1, op, num2) {
    switch (op) {
        case '+':
            return add(num1, num2)
        case '-':
            return subtract(num1, num2)
        case '*':
            return multiply(num1, num2)
        case '/':
            return divide(num1, num2)
            default:
                return null;
    }
}

const buttons = document.querySelectorAll('button')
const display = document.querySelector('.display')
let didEquals = false
let newInput = false

function storeValue(operator) {
    if (!numberStored) {
        numberStored = display.textContent
        display.textContent = ''
    } else {
        numberStored = operate(Number(numberStored), operatorStored, Number(display.textContent))
    }

    operatorStored = operator
    newInput = true
    didEquals = false
}

function addToDisplay(number) {
    let displayNum = display.textContent
    setDisplay(number)
    displayNum = displayNum + number
    setDisplay(displayNum)
}

function setDisplay(displayNum) {
    display.textContent = ''
    displayNum = displayNum.toString()
    display.textContent = displayNum
}


buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let input = e.target.value
        if (input >= 0 && input <= 9) {
            if (didEquals) {
                setDisplay(input)
                didEquals = false
            } else {
                addToDisplay(input)
            }
        } else if (input == 'ac') {
            display.textContent = ''
            numberStored = ''
            operatorStored = ''
        } else if (input == '=') {
            if (!numberStored || !operatorStored) {
                alert("No operation entered")
                display.textContent = ''
                numberStored = ''
                operatorStored = ''
            } else {
                numberStored = operate(Number(numberStored), operatorStored, Number(display.textContent))
                setDisplay(numberStored)
                operatorStored = ''
                numberStored = ''
                didEquals = true
            }
        } else {
            storeValue(input)
        }
    })
})