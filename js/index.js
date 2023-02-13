// элементы в DOM можно получить при помощи функции querySelector
const fruitsList = document.querySelector('.fruits__list'); // список карточек
const shuffleButton = document.querySelector('.shuffle__btn'); // кнопка перемешивания
const filterButton = document.querySelector('.filter__btn'); // кнопка фильтрации
const sortKindLabel = document.querySelector('.sort__kind'); // поле с названием сортировки
const sortTimeLabel = document.querySelector('.sort__time'); // поле с временем сортировки
const sortChangeButton = document.querySelector('.sort__change__btn'); // кнопка смены сортировки
const sortActionButton = document.querySelector('.sort__action__btn'); // кнопка сортировки
const kindInput = document.querySelector('.kind__input'); // поле с названием вида
const colorInput = document.querySelector('.color__input'); // поле с названием цвета
const weightInput = document.querySelector('.weight__input'); // поле с весом
const addActionButton = document.querySelector('.add__action__btn'); // кнопка добавления

console.log('----------------fruitsList-----------------');
console.log(fruitsList);

// список фруктов в JSON формате
let fruitsJSON = `[
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35},
  {"kind": "Личи", "color": "розово-красный", "weight": 17},
  {"kind": "Карамбола", "color": "желтый", "weight": 28},
  {"kind": "Тамаринд", "color": "светло-коричневый", "weight": 22}
]`;



// преобразование JSON в объект JavaScript
let fruits = JSON.parse(fruitsJSON);

// function fruitsListFun() {
//   for (let i = 0; i < fruits.length; i++){
//     console.log('---------fruits[i]-------------------');
//     console.log(fruits[i]);
//     return fruits[i];
//   }
// }
// fruitsListFun();


// Преобразуем объект  fruits в массивы из вложенных свойств объекта 

let fruits0 = Object.values(fruits[0]);
let fruits1 = Object.values(fruits[1]);
let fruits2 = Object.values(fruits[2]);
let fruits3 = Object.values(fruits[3]);
let fruits4 = Object.values(fruits[4]);


console.log('------------fruits---------------');
console.log(fruits);
console.log('------------fruits0---------------');
console.log(fruits0);

/*** ОТОБРАЖЕНИЕ ***/

// отрисовка карточек
const display = () => {
  // TODO (Задача): очищаем fruitsList от вложенных элементов,
  // чтобы заполнить актуальными данными из fruits

  fruitsList.replaceChildren(); // Очищаем все вложенные элементы .fruits__list (список карточек)

  for (let i = 0; i < fruits.length; i++) {
    // TODO: формируем новый элемент <li> при помощи document.createElement,
    // и добавляем в конец списка fruitsList при помощи document.appendChild

    // Назначаем переменную в зависимости от цвета фрукта (назначаем переменной название соответсвующего стиля css)
    console.log('---------fruits[i].color--------------')
    console.log(fruits[i].color); // проверяем что выводит fruits[i].color
    let colorFruitCSS = fruits[i].color === 'фиолетовый' ? 'fruit_violet' :
      fruits[i].color === 'зеленый' ? 'fruit_green' :
      fruits[i].color === 'розово-красный' ? 'fruit_carmazin' :
      fruits[i].color === 'желтый' ? 'fruit_yellow' : 'fruit_lightbrown';

    // if (fruits[i].color === 'фиолетовый') {
    //   let colorFruitCSS = 'fruit_viole'
    // } else if (fruits[i].color === 'зеленый') {
    //   let colorFruitCSS = 'fruit_green'
    // } else if (fruits[i].color === 'розово-красный') {
    //   let colorFruitCSS = 'fruit_carmazin'
    // } else if (fruits[i].color === 'желтый') {
    //   let colorFruitCSS = 'fruit_carmazin'
    // } else {
    //   let colorFruitCSS = 'fruit_lightbrown'
    // }

    console.log('---------colorFruitCSS---------');
    console.log(colorFruitCSS);


let fruitsLi = document.createElement('li');
fruitsLi.classList.add('fruit__item', colorFruitCSS);
console.log(fruitsLi);

  }
};

// первая отрисовка карточек
display();

/*** ПЕРЕМЕШИВАНИЕ ***/

// генерация случайного числа в заданном диапазоне
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// перемешивание массива
const shuffleFruits = () => {
  let result = [];

  // ATTENTION: сейчас при клике вы запустите бесконечный цикл и браузер зависнет
  while (fruits.length > 0) {
    // TODO: допишите функцию перемешивания массива
    //
    // Подсказка: находим случайный элемент из fruits, используя getRandomInt
    // вырезаем его из fruits и вставляем в result.
    // ex.: [1, 2, 3], [] => [1, 3], [2] => [3], [2, 1] => [], [2, 1, 3]
    // (массив fruits будет уменьшатся, а result заполняться)
  }

  fruits = result;
};

shuffleButton.addEventListener('click', () => {
  shuffleFruits();
  display();
});

/*** ФИЛЬТРАЦИЯ ***/

// фильтрация массива
const filterFruits = () => {
  fruits.filter((item) => {
    // TODO: допишите функцию
  });
};

filterButton.addEventListener('click', () => {
  filterFruits();
  display();
});

/*** СОРТИРОВКА ***/

let sortKind = 'bubbleSort'; // инициализация состояния вида сортировки
let sortTime = '-'; // инициализация состояния времени сортировки

const comparationColor = (a, b) => {
  // TODO: допишите функцию сравнения двух элементов по цвету
};

const sortAPI = {
  bubbleSort(arr, comparation) {
    // TODO: допишите функцию сортировки пузырьком
  },

  quickSort(arr, comparation) {
    // TODO: допишите функцию быстрой сортировки
  },

  // выполняет сортировку и производит замер времени
  startSort(sort, arr, comparation) {
    const start = new Date().getTime();
    sort(arr, comparation);
    const end = new Date().getTime();
    sortTime = `${end - start} ms`;
  },
};

// инициализация полей
sortKindLabel.textContent = sortKind;
sortTimeLabel.textContent = sortTime;

sortChangeButton.addEventListener('click', () => {
  // TODO: переключать значение sortKind между 'bubbleSort' / 'quickSort'
});

sortActionButton.addEventListener('click', () => {
  // TODO: вывести в sortTimeLabel значение 'sorting...'
  const sort = sortAPI[sortKind];
  sortAPI.startSort(sort, fruits, comparationColor);
  display();
  // TODO: вывести в sortTimeLabel значение sortTime
});

/*** ДОБАВИТЬ ФРУКТ ***/

addActionButton.addEventListener('click', () => {
  // TODO: создание и добавление нового фрукта в массив fruits
  // необходимые значения берем из kindInput, colorInput, weightInput
  display();
});