// ========== ЗАДАНИЯ НА РАБОТУ С МАССИВАМИ ==========

// Вспомогательное сообщение для заданий, результат которых выводится в консоль
function showConsoleHint() {
    alert('Готово! Результат выведен в консоль (F12 → Console).');
}

// Задание 1: вывести элементы массива до числа 10 включительно
function runTask1() {
    const arr = [1, 5, 4, 10, 0, 3];

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        if (arr[i] === 10) {
            break;
        }
    }

    showConsoleHint();
}

// Задание 2: найти индекс значения 4
function runTask2() {
    const arr = [1, 5, 4, 10, 0, 3];
    const index = arr.indexOf(4);

    console.log('Индекс значения 4:', index);
    showConsoleHint();
}

// Задание 3: вывести элементы массива через пробел с помощью join
function runTask3() {
    const arr = [1, 3, 5, 10, 20];

    console.log(arr.join(' '));
    showConsoleHint();
}

// Задание 4: многомерный массив [[1, 1, 1], [1, 1, 1], [1, 1, 1]] вложенными циклами
function runTask4() {
    const matrix = [];

    for (let i = 0; i < 3; i++) {
        const row = [];
        for (let j = 0; j < 3; j++) {
            row.push(1);
        }
        matrix.push(row);
    }

    console.log(matrix);
    showConsoleHint();
}

// Задание 5: добавить в конец массива значения 2, 2, 2
function runTask5() {
    const arr = [1, 1, 1];

    arr.push(2, 2, 2);

    console.log(arr);
    showConsoleHint();
}

// Задание 6: отсортировать массив и удалить букву 'a'
function runTask6() {
    const arr = [9, 8, 7, 'a', 6, 5];

    arr.splice(arr.indexOf('a'), 1);
    arr.sort((a, b) => a - b);

    console.log(arr);
    showConsoleHint();
}

// Задание 7: угадать число из массива
function runTask7() {
    const arr = [9, 8, 7, 6, 5];
    const guess = Number(prompt('Угадайте число от 1 до 10:'));

    if (arr.includes(guess)) {
        alert('Угадал');
    } else {
        alert('Не угадал');
    }
}

// Задание 8: вывести строку 'abcdef' в обратном порядке
function runTask8() {
    let str = 'abcdef';

    str = str.split('').reverse().join('');

    console.log(str);
    showConsoleHint();
}

// Задание 9: превратить [[1, 2, 3], [4, 5, 6]] в [1, 2, 3, 4, 5, 6]
function runTask9() {
    const arr = [[1, 2, 3], [4, 5, 6]];
    const flat = arr.flat();

    console.log(flat);
    showConsoleHint();
}

// Задание 10: суммы текущего и следующего элементов массива
function runTask10() {
    const arr = [];

    for (let i = 0; i < 5; i++) {
        arr.push(Math.floor(Math.random() * 10) + 1);
    }

    console.log('Массив:', arr);

    for (let i = 0; i < arr.length - 1; i++) {
        console.log(`${arr[i]} + ${arr[i + 1]} = ${arr[i] + arr[i + 1]}`);
    }

    showConsoleHint();
}

// Задание 11: массив квадратов чисел
function getSquares(numbers) {
    return numbers.map((number) => number * number);
}

function runTask11() {
    console.log(getSquares([1, 2, 3, 4, 5]));
    showConsoleHint();
}

// Задание 12: массив длин слов
function getLengths(words) {
    return words.map((word) => word.length);
}

function runTask12() {
    console.log(getLengths(['яблоко', 'груша', 'слива', 'ананас']));
    showConsoleHint();
}

// Задание 13: только отрицательные значения
function getNegative(numbers) {
    return numbers.filter((number) => number < 0);
}

function runTask13() {
    console.log(getNegative([5, -2, 0, -7, 3, -1]));
    showConsoleHint();
}

// Задание 14: 10 случайных чисел от 0 до 10 и только чётные из них
function runTask14() {
    const numbers = [];

    for (let i = 0; i < 10; i++) {
        numbers.push(Math.floor(Math.random() * 11));
    }

    const evenNumbers = numbers.filter((number) => number % 2 === 0);

    console.log('Исходный массив:', numbers);
    console.log('Чётные значения:', evenNumbers);
    showConsoleHint();
}

// Задание 15: среднее арифметическое 6 случайных чисел от 1 до 10
function runTask15() {
    const numbers = [];

    for (let i = 0; i < 6; i++) {
        numbers.push(Math.floor(Math.random() * 10) + 1);
    }

    const sum = numbers.reduce((total, number) => total + number, 0);
    const average = sum / numbers.length;

    console.log('Массив:', numbers);
    console.log('Среднее арифметическое:', average);
    showConsoleHint();
}
