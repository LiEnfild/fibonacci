// JavaScript File
function cycle(n) {
    var fibFor1 = 1,
        fibFor2 = 1;
    for (var i = 3; i <= n; i++) {
        var fibFor3 = fibFor1 + fibFor2;
        fibFor1 = fibFor2;
        fibFor2 = fibFor3;
    }
    return fibFor2;
}

function recursion(n) {
    var fibonacciRec;
    if (n >= 2) {
        fibonacciRec = recursion(n - 1) + recursion(n - 2);
    }
    else {
        fibonacciRec = n;
    }
    return fibonacciRec;
}
var argument = Number(prompt("Укажите порядковый номер члена ряда Фибоначчи(до 200)"));
document.write(argument + '-й ряда Фибоначчи равен ' + recursion(argument) + '(Через рекурсию) <br>');
document.write(argument + '-й ряда Фибоначчи равен ' + cycle(argument) + '(Через цикл) <br>');
