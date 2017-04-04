// JavaScript File
function cycle(n) {
    var fibonacciCycle1 = 1,
        fibonacciCycle2 = 1;
    for (var i = 3; i <= n; i++) {
        var fibonacciCycle3 = fibonacciCycle1 + fibonacciCycle2;
        fibonacciCycle1 = fibonacciCycle2;
        fibonacciCycle2 = fibonacciCycle3;
    }
    return fibonacciCycle2;
}

function recursion(n) {
    var fibonacciRecursion;
    if (n >= 2) {
        fibonacciRecursion = recursion(n - 1) + recursion(n - 2);
    }
    else {
        fibonacciRecursion = n;
    }
    return fibonacciRecursion;
}
var argumentCycle = Number(prompt("Укажите порядковый номер члена ряда Фибоначчи (для цикла)"));
var argumentRecursion = Number(prompt("Укажите порядковый номер члена ряда Фибоначчи (для рекурсии).Осторожно, при больших значениях возможно зависание!"));
document.write(argumentRecursion + '-й ряда Фибоначчи равен ' + recursion(argumentRecursion) + '(Через рекурсию) <br>');
document.write(argumentCycle + '-й ряда Фибоначчи равен ' + cycle(argumentCycle) + '(Через цикл) <br>');
