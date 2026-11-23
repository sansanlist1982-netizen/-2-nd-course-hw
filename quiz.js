// Массив вопросов и правильных ответов
const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2 // номер правильного ответа
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

// Переносит строку по словам, чтобы окно prompt/alert не выходило за пределы экрана
function wrapText(text, limit) {
    const lines = [];
    let line = "";

    for (const word of text.split(" ")) {
        const candidate = line ? line + " " + word : word;
        if (line && candidate.length > limit) {
            lines.push(line);
            line = word;
        } else {
            line = candidate;
        }
    }

    lines.push(line);
    return lines.join("\n");
}

// Проходит викторину: спрашивает ответ на каждый вопрос и показывает счёт
function runQuiz() {
    let correctCount = 0;

    for (let i = 0; i < quiz.length; i++) {
        const item = quiz[i];
        const text = `Вопрос ${i + 1}.\n${wrapText(item.question, 22)}\n\n${item.options.join("\n")}\n\nВведите номер:`;
        let answer;

        while (answer === undefined) {
            const input = prompt(text);

            if (input === null) {
                alert('Викторина остановлена.');
                return;
            }

            const number = Number(input.trim());
            if (Number.isInteger(number) && number >= 1 && number <= item.options.length) {
                answer = number;
            } else {
                alert(`Некорректный ответ. Введите номер варианта от 1 до ${item.options.length}.`);
            }
        }

        if (answer === item.correctAnswer) {
            correctCount++;
        }
    }

    alert(`Викторина завершена!\nПравильных ответов: ${correctCount} из ${quiz.length}`);
}
