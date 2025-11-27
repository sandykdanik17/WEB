document.getElementById('task3Btn').addEventListener('click', function() {
    const formCount = document.forms.length;
    const resultArea = document.getElementById('task3Result');
    resultArea.value = `Кількість форм на цій сторінці: ${formCount}.`;
});

const image = document.getElementById('interactive-image');
image.addEventListener('mouseover', function() {
    this.style.borderColor = 'var(--accent-coral)';
    this.style.transform = 'scale(1.05)';
});
image.addEventListener('mouseout', function() {
    this.style.borderColor = 'transparent';
    this.style.transform = 'scale(1)';
});
image.addEventListener('mousedown', function() {
    this.style.boxShadow = '0 0 15px rgba(0,0,0,0.3)';
});
image.addEventListener('mouseup', function() {
    this.style.boxShadow = 'none';
});

// Пошук слів за регулярним виразом

document.getElementById('task5Btn').addEventListener('click', function() {
    const text = document.getElementById('task5Input').value;

    //використовуємо конструкцію (?<!...) та (?!...), щоб вручну знайти межі слів.

    // 1. (?<![а-яіїєґА-ЯІЇЄҐ]) -> Перевіряємо, що ПЕРЕД словом немає іншої букви
    // 2. [ЕеЄє] -> Слово починається на Е або Є
    // 3. [а-яіїєґА-ЯІЇЄҐ']* -> Всередині можуть бути будь-які українські букви (і апостроф)
    // 4. [аяАЯ] -> Слово закінчується на А або Я
    // 5. (?![а-яіїєґА-ЯІЇЄҐ]) -> Перевіряємо, що після слова немає іншої букви

    const regex = /(?<![а-яіїєґА-ЯІЇЄҐ])[ЕеЄє][а-яіїєґА-ЯІЇЄҐ']*[аяАЯ](?![а-яіїєґА-ЯІЇЄҐ])/gi;

    const foundWords = text.match(regex);
    const resultArea = document.getElementById('task5Result');

    if (foundWords) {
        resultArea.value = `Знайдені слова: ${foundWords.join(', ')}. \nКількість: ${foundWords.length}.`;
    } else {
        resultArea.value = 'Слова не знайдено.';
    }
});

document.getElementById('task6Btn').addEventListener('click', function() {
    const arrayA = [10, -2, -15, 4, -8, 0];

    const negativeNumbers = arrayA.filter(num => num < 0);

    let resultText = `Вихідний масив: [${arrayA.join(', ')}]\n`;

    if (negativeNumbers.length > 0) {

        const maxNegative = Math.max(...negativeNumbers);

        const indexInA = arrayA.indexOf(maxNegative);

        resultText += `Максимальний серед від'ємних: ${maxNegative}\nЙого індекс у вихідному масиві: ${indexInA}`;
    } else {
        resultText += 'У масиві немає від\'ємних елементів.';
    }

    document.getElementById('task6Result').value = resultText;
});