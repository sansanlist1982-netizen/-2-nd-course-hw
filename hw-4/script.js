// Задание 1: возвращает меньшее из двух чисел
function getMin(a, b) {
    if (a < b) {
        return a;
    }
    return b;
}

function runTask1() {
    console.log("getMin(8, 4) =", getMin(8, 4));
    console.log("getMin(6, 6) =", getMin(6, 6));

    alert(
        "Меньшее из 8 и 4: " + getMin(8, 4) +
        "\nМеньшее из 6 и 6: " + getMin(6, 6) +
        "\n\nРезультаты также выведены в консоль (F12 → Console)."
    );
}

// Задание 2: проверяет чётность числа
function checkEven(n) {
    if (n % 2 === 0) {
        return "Число четное";
    }
    return "Число нечетное";
}

function runTask2() {
    console.log("4 —", checkEven(4));
    console.log("7 —", checkEven(7));
    console.log("0 —", checkEven(0));
    console.log("-3 —", checkEven(-3));

    alert(
        "4 — " + checkEven(4) +
        "\n7 — " + checkEven(7) +
        "\n0 — " + checkEven(0) +
        "\n-3 — " + checkEven(-3) +
        "\n\nРезультаты также выведены в консоль (F12 → Console)."
    );
}

// Задание 3: одна функция выводит квадрат в консоль, другая возвращает его
function printSquare(n) {
    console.log("Квадрат числа " + n + " равен " + n * n);
}

function getSquare(n) {
    return n * n;
}

function runTask3() {
    printSquare(5);

    const squared = getSquare(7);
    console.log("getSquare(7) вернула значение:", squared);
    console.log("Используем возвращённое значение: " + squared + " + 1 = " + (squared + 1));

    alert(
        "Квадрат 5 выведен в консоль: " + 5 * 5 +
        "\ngetSquare(7) вернула значение: " + squared +
        "\n\nРезультаты также выведены в консоль (F12 → Console)."
    );
}

// Задание 4: спрашивает возраст и возвращает сообщение
function correctAge() {
    const age = Number(prompt("Сколько вам лет?"));

    if (isNaN(age) || age < 0) {
        return "Вы ввели неправильное значение";
    }
    if (age >= 0 && age <= 12) {
        return "Привет, друг!";
    }
    return "Добро пожаловать!";
}

function runTask4() {
    const message = correctAge();
    console.log(message);
    alert(message);
}

// Задание 5: возвращает произведение чисел или сообщение об ошибке
function multiply(a, b) {
    const first = Number(a);
    const second = Number(b);

    if (isNaN(first) || isNaN(second)) {
        return "Одно или оба значения не являются числом";
    }
    return first * second;
}

function runTask5() {
    console.log("multiply(4, 5) =", multiply(4, 5));
    console.log("multiply('3', '7') =", multiply("3", "7"));
    console.log("multiply('abc', 5) =", multiply("abc", 5));

    alert(
        "multiply(4, 5) = " + multiply(4, 5) +
        "\nmultiply('3', '7') = " + multiply("3", "7") +
        "\nmultiply('abc', 5) = " + multiply("abc", 5) +
        "\n\nРезультаты также выведены в консоль (F12 → Console)."
    );
}

// Задание 6: запрашивает число и возвращает строку с кубом числа
function cubeText(n) {
    const number = Number(n);

    if (isNaN(number)) {
        return "Переданный параметр не является числом";
    }
    return number + " в кубе равняется " + number * number * number;
}

function getCube() {
    const value = prompt("Введите число:");
    return cubeText(value);
}

function runTask6() {
    const result = getCube();
    console.log(result);
    alert(result);

    console.log("Проверка чисел от 0 до 10:");
    for (let i = 0; i <= 10; i++) {
        console.log(cubeText(i));
    }
}

// Задание 7: два объекта круга с методами площади и периметра
const circle1 = {
    radius: 5,
    getArea() {
        return Math.PI * this.radius * this.radius;
    },
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
};

const circle2 = {
    radius: 10,
    getArea() {
        return Math.PI * this.radius * this.radius;
    },
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
};

function runTask7() {
    const area1 = circle1.getArea();
    const perimeter1 = circle1.getPerimeter();
    const area2 = circle2.getArea();
    const perimeter2 = circle2.getPerimeter();

    console.log("circle1 (radius = " + circle1.radius + ")");
    console.log("  площадь:", area1);
    console.log("  периметр:", perimeter1);
    console.log("circle2 (radius = " + circle2.radius + ")");
    console.log("  площадь:", area2);
    console.log("  периметр:", perimeter2);

    alert(
        "circle1 (radius = " + circle1.radius + ")" +
        "\nПлощадь: " + area1.toFixed(2) +
        "\nПериметр: " + perimeter1.toFixed(2) +
        "\n\ncircle2 (radius = " + circle2.radius + ")" +
        "\nПлощадь: " + area2.toFixed(2) +
        "\nПериметр: " + perimeter2.toFixed(2) +
        "\n\nРезультаты также выведены в консоль (F12 → Console)."
    );
}
