const firstNumber = +prompt('Enter first number')
const secondNumber = +prompt('Enter second number')
const thirdNumber = +prompt('Enter third number')

if (isNaN(firstNumber) || isNaN(secondNumber) || isNaN(thirdNumber) ) {
    alert(`Error! Please, enter a number`)
}
else {
    alert(`${(firstNumber + secondNumber + thirdNumber)/3}`);
}