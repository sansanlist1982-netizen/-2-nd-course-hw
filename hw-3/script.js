// Задание 1: вывести в консоль 2 раза слово «Привет»
function runTask1() {
    console.log("Привет");
    console.log("Привет");

    alert("Готово! Слово «Привет» выведено в консоль 2 раза (F12 → Console).");
}

// Задание 2: вывести в консоль цифры от 1 до 5
function runTask2() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }

    alert("Готово! Числа от 1 до 5 выведены в консоль (F12 → Console).");
}

// Задание 3: вывести в консоль числа от 7 до 22
function runTask3() {
    for (let i = 7; i <= 22; i++) {
        console.log(i);
    }

    alert("Готово! Числа от 7 до 22 выведены в консоль (F12 → Console).");
}

// Задание 4: имена сотрудников и их зарплаты, перебор через for-in
function runTask4() {
    const obj = {
        "Коля": "200",
        "Вася": "300",
        "Петя": "400"
    };

    for (const name in obj) {
        console.log(`${name} — зарплата ${obj[name]} долларов`);
    }

    alert("Готово! Информация о каждом сотруднике выведена в консоль (F12 → Console).");
}

// Задание 5: делим 1000 на 2, пока результат не станет меньше 50
function runTask5() {
    const n = 1000;
    let result = n;
    let num = 0;

    while (result >= 50) {
        result = result / 2;
        num++;
    }

    console.log(`Результат деления: ${result}`);
    console.log(`Количество итераций (num): ${num}`);

    alert(`Результат деления: ${result}\nКоличество итераций: ${num}`);
}

// Задание 6: напоминание об отчёте на каждую пятницу месяца
function runTask6() {
    // Номер первой пятницы месяца: число от 1 до 7
    const firstFriday = 3;
    const daysInMonth = 31;

    for (let day = firstFriday; day <= daysInMonth; day += 7) {
        console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
    }

    alert("Готово! Напоминания о пятницах выведены в консоль (F12 → Console).");
}
