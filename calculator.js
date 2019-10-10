var a = Number(prompt(' Pick a number please'))
var math = prompt(' Pick your choice: + - * /')
var b = Number(prompt(' Pick the other number'))
var total;

function add () {
    total = a + b
}

function subtract() {
    total = a - b
}

function mutiply() {
    total = a * b
}

function divide () {
    total = b / a
}

if (math === '+') {
    add();
    document.write(a + '+' + b + '=' + total)
}

if (math === '-') {
    subtract();
    document.write(a + '-' + b + '=' + total)
}

if (math === '*') {
    mutiply();
    document.write(a + '*' + b + '=' + total)
}

if (math === '/') {
    divide();
    document.write(a + '/' + b + '=' + total)
}