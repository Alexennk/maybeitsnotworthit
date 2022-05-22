let phrases = [
    { text: 'Николай Яковлевич, сколько мне за контрольную?', image: 'Images\\imposter\\Radyno.jpg' },
    { text: 'Жми на "Еще вариант"', image: 'Images\\imposter\\Kushats.jpg' },
    { text: 'Escroquerie', image: 'Images\\imposter\\Imposter-2.jpg' },
    { text: 'Такое ощущение, что это уже было (это и правда уже было)', image: 'Images\\Уверенность.jpg' },
    { text: 'Слабонервным (не) читать', image: 'Images\\Шутка.jpg' },
    { text: 'Ну сколько уже можно', image: 'Images\\ДМиМЛ.jpg' },
    { text: 'Нет и точка', image: 'Images\\imposter\\No.jpg' },
    { text: 'Все-таки цветок, хотя это хобби и вообще у меня бизнес в Могилеве', image: 'Images\\Цветочный.jpg' },
    { text: 'Да да да да да да', image: 'Images\\imposter\\Back_c.jpg' },
    { text: 'Его не стоит винить. Как-никак, это его работа', image: 'Images\\Водитель.jpg' },
    { text: 'Мотивация - это очень важно', image: 'Images\\imposter\\Yes_cat.jpg' },
    { text: 'Мотивация - это и правда важно', image: 'Images\\imposter\\Motivate_2.jpg' },
    { text: 'Цитата на века...', image: 'Images\\Оригинал.jpg' },
    { text: 'Если сильно постараться, можно стать таким, как он', image: 'Images\\imposter\\Good_progggggger.jpg' },
    { text: '(и правда позитивные)', image: 'Images\\imposter\\Motivate_3.jpg' },
    { text: 'Escroquerie', image: 'Images\\imposter\\Imposter-4.jpg' },
    { text: 'Такое ощущение, что это уже было (этого ещё не было)', image: 'Images\\Уверенность(для нее).jpg' },
    { text: 'Иногда хочется и погрустеть', image: 'Images\\imposter\\Oh.jpg' },
    { text: 'Если собрать все уважение в мире, то хватит только на его салфеточку', image: 'Images\\imposter\\Respect.jpg' },
    { text: 'Escroquerie', image: 'Images\\imposter\\Imposter-5.jpg' },
    { text: 'Классный шрифт все-таки, вкусный такой', image: 'Images\\Аксод.jpg' },
    { text: 'Escroquerie', image: 'Images\\imposter\\Imposter-3.jpg' },
    { text: 'Там где-то недалеко дневничок такой лежал, как насчет... его заполнить?', image: 'Images\\Гороскопы.jpg' },
    { text: 'Escroquerie', image: 'Images\\imposter\\Imposter-1.jpg' },
    { text: 'Да да да да да', image: 'Images\\imposter\\Back_sun.jpg' },
    { text: 'Нужно беречь себя', image: 'Images\\imposter\\Motivate_1.jpg' },
    { text: 'Иногда не стоит торопиться и гнаться за новыми технологиями сломя голову', image: 'Images\\Beautiful\\dont_hurry.jpg' },
    { text: 'Саратов смог - и ты сможешь', image: 'Images\\Beautiful\\and_you_can.jpg' },
    { text: 'Не забывай носить бэйджик, чтобы тебя правильно поняли', image: 'Images\\Beautiful\\badge.jpg' },
    { text: 'Если хочешь обрести свободу, нужно быть самостоятельным', image: 'Images\\Beautiful\\by_yourself.jpg' },
    { text: 'Иногда стоит подумать не только о внешнем виде, но и об удобстве', image: 'Images\\Beautiful\\convenience.jpg' },
    { text: 'Порой правильным решением будет не выставлять свои способности напоказ', image: 'Images\\Beautiful\\dangerous.jpg' },
    { text: 'Следи за стилем, он повысит твой статус', image: 'Images\\Beautiful\\fashion.jpg' },
    { text: 'Создавай впечатление культурного, грамотного человека', image: 'Images\\Beautiful\\gramm.jpg' },
    { text: 'Пользуйся хотя бы элементарными правилами логики', image: 'Images\\Beautiful\\logic.jpg' },
    { text: 'Будь естественным (естественной)', image: 'Images\\Beautiful\\natural.jpg' },
    { text: 'Не забывай о том, насколько прекрасен окружающий нас мир', image: 'Images\\Beautiful\\nature.jpg' },
    { text: 'Несмешно кстати', image: 'Images\\Beautiful\\not_funny.jpg' },
    { text: 'Вы правы как никогда', image: 'Images\\Beautiful\\feelings_dali.jpg' },
    { text: 'Не бойся говорить о том, что у тебя какие-либо проблемы', image: 'Images\\Beautiful\\problems.jpg' },
    { text: 'Не занижай самооценку и никогда не недооценивай себя', image: 'Images\\Beautiful\\self-esteem.jpg' },
    { text: 'Это будет самым правильным решением в твоей жизни', image: 'Images\\Beautiful\\sleeping.jpg' },
    { text: 'Есть мнение, что стоит сначала думать, а затем говорить', image: 'Images\\Beautiful\\think.jpg' },
    { text: 'Знай, что ты лучше', image: 'Images\\Beautiful\\you_are_better.jpg' },
    { text: 'О, мем, прикольно)0)))0', image: 'Images\\Жизнь.jpg' }
];

let indexes = [0, 1];
function isInIndexes(number) {
    for (let i = 0; i < indexes.length; i++) {
        if (indexes[i] == number) return true;
    }
    return false;
}
function getRandomElement(arr) {
    if (indexes.length == 45) {
        indexes.length = 0;
    }
    let randIndex = Math.floor(Math.random() * arr.length);
    while (isInIndexes(randIndex)) {
        randIndex = Math.floor(Math.random() * arr.length);
    }
    indexes.push(randIndex);
    return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
    let randomElement = getRandomElement(phrases);
    smoothly(phrase, 'textContent', randomElement.text);
    smoothly(image, 'src', randomElement.image);

    if (randomElement.text.length > 40) {
        advice.style.fontSize = '28px';
    } else {
        advice.style.fontSize = '37px';
    }
});

for (let i = 0; i <= 1; i += 1) {
    smoothly(phrase, 'textContent', phrases[i].text);
    smoothly(image, 'src', phrases[i].image)
}
