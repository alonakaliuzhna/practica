const phrases = [
  [
    "Что разум человека может постигнуть и во что он может поверить, того он способен достичь",
    "~Наполеон Хилл, журналист и писатель ",
  ],
  [
    "Стремитесь не к успеху, а к ценностям, которые он дает",
    "~Альберт Эйнштейн",
  ],
  [
    "Своим успехом я обязана тому, что никогда не оправдывалась и не принимала оправданий от других.",
    "~Флоренс Найтингейл",
  ],

  [
    "За свою карьеру я пропустил более 9000 бросков, проиграл почти 300 игр. 26 раз мне доверяли сделать финальный победный бросок, и я промахивался. Я терпел поражения снова, и снова, и снова. И именно поэтому я добился успеха.",
    "~Майкл Джордан",
  ],

  [
    "Сложнее всего начать действовать, все остальное зависит только от упорства.",
    "~Амелия Эрхарт",
  ],

  ["Надо любить жизнь больше, чем смысл жизни.", "~Федор Достоевский"],

  [
    "Жизнь - это то, что с тобой происходит, пока ты строишь планы.",
    "~Джон Леннон",
  ],

  [
    "Логика может привести Вас от пункта А к пункту Б, а воображение — куда угодно.",

    "~Альберт Эйнштейн",
  ],

  [
    "Через 20 лет вы будете больше разочарованы теми вещами, которые вы не делали, чем теми, которые вы сделали. Так отчальте от тихой пристани. Почувствуйте попутный ветер в вашем парусе. Двигайтесь вперед, действуйте, открывайте!",

    "~Марк Твен",
  ],

  [" Начинать всегда стоит с того, что сеет сомнения.", "~Борис Стругацкий"],

  ["Настоящая ответственность бывает только личной.", "~Фазиль Искандер"],

  ["Неосмысленная жизнь не стоит того, чтобы жить.", "~Сократ"],

  ["80% успеха - это появиться в нужном месте в нужное время.", "~Вуди Аллен"],

  ["Ваше время ограничено, не тратьте его, живя чужой жизнью", "~Стив Джобс"],

  [
    "Победа - это еще не все, все - это постоянное желание побеждать.",

    "~Винс Ломбарди",
  ],

  [
    "Наука — это организованные знания, мудрость — это организованная жизнь.",

    "~Иммануил Кант",
  ],

  ["В моем словаре нет слова «невозможно».", "~Наполеон Бонапарт"],

  [
    "Вы никогда не пересечете океан, если не наберетесь мужества потерять берег из виду.",

    "~Христофор Колумб",
  ],

  [
    "Свобода ничего не стоит, если она не включает в себя свободу ошибаться.",

    "~Махатма Ганди",
  ],

  [
    "~Либо вы управляете вашим днем, либо день управляет вами.",

    "~Джим Рон, оратор и бизнес-тренер",
  ],
];

document.querySelector(".button").addEventListener("click", randomPhrase);

function randomPhrase() {
  let phrase = phrases[Math.floor(Math.random() * phrases.length)];

  let quote = document.querySelector(".quote");
  let author = document.querySelector(".author");

  quote.innerHTML = phrase[0];
  author.innerHTML = phrase[1];
}
