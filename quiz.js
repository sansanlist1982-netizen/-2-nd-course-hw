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

// Проходит викторину: спрашивает ответ на каждый вопрос и показывает счёт
function runQuiz() {
    let correctCount = 0;

    for (let i = 0; i < quiz.length; i++) {
        const item = quiz[i];
        const text = `Вопрос ${i + 1}. ${item.question}\n\n${item.options.join("\n")}\n\nВведите номер ответа:`;
        const answer = prompt(text);

        if (Number(answer) === item.correctAnswer) {
            correctCount++;
        }
    }

    alert(`Викторина завершена!\nПравильных ответов: ${correctCount} из ${quiz.length}`);
}
