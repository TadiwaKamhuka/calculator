function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let firstNumber;
let operator;
let secondNumber;

function operate(num1, operator, num2) {
    if (operator == "+"){
        return add(num1, num2);
    } else if (operator == "-"){
        return subtract(num1, num2);
    } else if (operator == "*"){
        return multiply(num1, num2);
    } else if (operator == "/"){
        return divide(num1, num2);
    } else {
        return "Invalid inputs";
    }
}

let output = document.querySelector(".output");
let buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        if (parseInt(e.target.value) <= 9 || parseInt(e.target.value) >= 0){
            output.textContent += e.target.value;
            console.log(output.textContent);
        } else if (e.target.value == "+" || e.target.value == "-" || e.target.value == "*" || e.target.value == "/"){
            firstNumber = output.textContent;
            output.textContent = e.target.value
            operator = e.target.value;
        }
    })
})



