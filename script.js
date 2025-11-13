// Кількість форм на сторінці

document.getElementById('task3Btn').addEventListener('click', function() {
    const formCount = document.forms.length;
    const resultArea = document.getElementById('task3Result');
    resultArea.value = `Кількість форм на цій сторінці: ${formCount}.`;
});

// Обробка подій для малюнків
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
    // Регулярний вираз:
    // \b - межа слова 
    // [еє] - "е" або "є" 
    // \w* - будь-яка кількість літер/цифр/підкреслень у середині слова
    // [ая] - "а" або "я" 
    // /gi - прапорці: g (глобальний пошук) та i (без урахування регістру)
    const regex = /\b[еє]\w*[ая]\b/gi;
    const foundWords = text.match(regex);
    const resultArea = document.getElementById('task5Result');

    if (foundWords) {
        resultArea.value = `Знайдені слова: ${foundWords.join(', ')}. \nКількість: ${foundWords.length}.`;
    } else {
        resultArea.value = 'Слова не знайдено.';
    }
});

// Робота з масивами 

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