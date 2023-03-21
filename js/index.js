// элементы в DOM можно получить при помощи функции querySelector
const fruitsList = document.querySelector(".fruits__list"); // список карточек
const shuffleButton = document.querySelector(".shuffle__btn"); // кнопка перемешивания
const filterButton = document.querySelector(".filter__btn"); // кнопка фильтрации
const sortKindLabel = document.querySelector(".sort__kind"); // поле с названием сортировки
const sortTimeLabel = document.querySelector(".sort__time"); // поле с временем сортировки
const sortChangeButton = document.querySelector(".sort__change__btn"); // кнопка смены сортировки
const sortActionButton = document.querySelector(".sort__action__btn"); // кнопка сортировки
const kindInput = document.querySelector(".kind__input"); // поле с названием вида
const colorInput = document.querySelector(".color__input"); // поле с названием цвета
const weightInput = document.querySelector(".weight__input"); // поле с весом
const addActionButton = document.querySelector(".add__action__btn"); // кнопка добавления
const minWeightInput = document.querySelector(".minweight_input"); // данные из поля minweight__input
const maxWeightInput = document.querySelector(".maxweight_input"); // данные из поля maxweight__input
const sortTimeOutput = document.querySelector(".sort__time"); // время сортировки sort__time

// для добавления, сортировки создаем переменные с цветами
const colorViolet = "фиолетовый";
const colorGreen = "зеленый";
const colorCarmazin = "розово-красный";
const colorYellow = "желтый";
const colorLightbrown = "светло-коричневый";
 // для сравнения вводимого цвета с допустимым создаем массив из значений цветов
const colorFruit = [colorViolet, colorGreen, colorCarmazin, colorYellow, colorLightbrown];
// console.log(colorFruit);

// console.log(maxWeightInput.value);
// console.log(isNaN('sdfs'));
// console.log(maxweightInput.value);
//console.log("----------------fruitsList-----------------");
//console.log(fruitsList);

// список фруктов в JSON формате
let fruitsJSON = `[
  {"kind":"Мангустин","color":"фиолетовый","weight":13},
  {"kind":"Дуриан","color":"зеленый","weight":35},
  {"kind":"Личи","color":"розово-красный","weight":17},
  {"kind":"Карамбола","color":"желтый","weight":28},
  {"kind":"Тамаринд","color":"светло-коричневый","weight":22}
]`;

// преобразование JSON в объект JavaScript
let fruits = JSON.parse(fruitsJSON);

console.log(fruits);

// function fruitsListFun() {
//   for (let i = 0; i < fruits.length; i++){
//     console.log('---------fruits[i]-------------------');
//     console.log(fruits[i]);
//     return fruits[i];
//   }
// }
// fruitsListFun();

// Преобразуем объект  fruits в массивы из вложенных свойств объекта

// let fruits0 = Object.values(fruits[0]);
// let fruits1 = Object.values(fruits[1]);
// let fruits2 = Object.values(fruits[2]);
// let fruits3 = Object.values(fruits[3]);
// let fruits4 = Object.values(fruits[4]);

//console.log("------------fruits---------------");
//console.log(fruits);

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
    let fuitsIndex = i;
    //console.log("---------fruits[i]--------------");
    //console.log(fuitsIndex);
    //console.log("---------fruits[i].color--------------");
    //console.log(fruits[i].color); // проверяем что выводит fruits[i].color
    let colorFruitCSS =
      fruits[i].color === "фиолетовый" ?
      "fruit_violet" :
      fruits[i].color === "зеленый" ?
      "fruit_green" :
      fruits[i].color === "розово-красный" ?
      "fruit_carmazin" :
      fruits[i].color === "желтый" ?
      "fruit_yellow" :
      "fruit_lightbrown";

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

    // console.log("---------colorFruitCSS---------");
    // console.log(colorFruitCSS);

    let fruitsLi = document.createElement("li");
    fruitsLi.classList.add("fruit__item", colorFruitCSS);
    fruitsLi.innerHTML = `<div class="fruit__info">
<div>index: ${fuitsIndex}</div>
<div>kind: ${fruits[i].kind}</div>
<div>color: ${fruits[i].color}</div>
<div>weight (кг): ${fruits[i].weight}</div>`;
    fruitsList.appendChild(fruitsLi);

    //console.log(fruitsLi);
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

    //   Получаем рандомное число из диапозона длинны объекта fruits
    let fruitsRandom = getRandomInt(0, fruits.length - 1);
    // console.log('-----------------randomFruit------------------');
    // console.log(fruitsRandom);

    // Удаляем из объекта 1 свойтво с индексом  fruitsRandom
    let fruitsRandomArr = fruits.splice(fruitsRandom, 1);
    // помещаем в новый массив значение с индексом fruitsRandom
    result = [...result, ...fruitsRandomArr];
  }

  // console.log("-----------------result------------------");
  // console.log(result);
  //     console.log('-----------------result.toString()------------------');
  // console.log(JSON.stringify(result));
  // console.log('-----------------fruitsJSON------------------');
  // console.log(fruitsJSON);
  // Сравниваем перемешались ли карточки относительно начального значение преобразуя массив в строку
  if (fruitsJSON === JSON.stringify(result)) {
    alert("перемешивание не получилось, попробуйте ещё раз!");
  } else {
    fruits = result;
  }


};

shuffleButton.addEventListener("click", () => {
  shuffleFruits();
  display();
});

/*** ФИЛЬТРАЦИЯ ***/

// фильтрация массива
const filterFruits = () => {
  // возвращаем fruits начальное значение
  fruits = JSON.parse(fruitsJSON);
  //console.log(maxWeightInput.value);
  // Приводим значения полей min weight и max weight к типу Number для валидации формы
  let minW = Number(minWeightInput.value);
  let maxW = Number(maxWeightInput.value);
  // console.log('тип maxWeightInput.value ' + typeof maxWeightInput.value);
  // console.log('тип minWeightInput.value ' + typeof(minWeightInput.value));
  // console.log('тип maxW ' + typeof maxW + ' ' + maxW);
  // console.log('тип minW ' + typeof(minW)+ ' ' + minW);
  // console.log(!Number.isFinite(minW));
  // console.log(!Number.isFinite(maxW));
  // console.log(minW > maxW);
  //fruits.filter((item) => {
  // TODO: допишите функцию
  // Проверяем на валидность данные из фомы ФИЛЬТРОВАТЬ
  if (minW > maxW || !Number.isFinite(minW) || !Number.isFinite(maxW) /*|| !Number.isInteger(maxWeightInput.value) || !Number.isInteger(minWeightInput.value)*/ ) {
    alert("Введите корректно минимальное и максимальное значение");
  } else {
    let fruitsFilter = fruits.filter((item) => {

      return item.weight >= minW && item.weight <= maxW;

    });
    // console.log('---------------fruitsFilter-----------');
    // console.log(fruitsFilter);
    fruits = fruitsFilter;
  }
};

filterButton.addEventListener("click", () => {
  filterFruits();
  // console.log('-------------filterFruits------------------');
  // console.log(filterFruits);

  display();
});

/*** СОРТИРОВКА ***/

// начальное значение let sortKind = "bubbleSort"; // инициализация состояния вида сортировки
// -----------поменял на быструю сортировку - проверяем quckSort -------------------
let sortKind = "bubbleSort";
console.log('sortKind начальное ', sortKind);
let sortTime = "-"; // инициализация состояния времени сортировки

const comparationColor = (a, b) => {
  // TODO: допишите функцию сравнения двух элементов по цвету (хороший тон отдельно описать функцию сравнения при сортировке)
  return a.color > b.color ? true : false;
};

const sortAPI = {
  bubbleSort(arr, comparation) {
    // TODO: допишите функцию сортировки пузырьком
    const n = arr.length;
// -----------------------------------------------
    for (let i = 0; i < n-1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        if (comparation(arr[j], arr[j+1])) {
          let temp = arr[j+1];
          arr[j+1] = arr[j];
          arr[j] = temp;
        }
      }
    }

// ---------------------------------
  },

  quickSort(arr, comparation) {
    // TODO: допишите функцию быстрой сортировки
    const n = arr.length;
    if (n < 2) {
      return arr;
      }
  const key = arr[n - 1];
  const leftArr = [];
  const rightArr = [];
  for (let i = 0; i < n - 1; i++) {
      if ((comparation(arr[i], key)) ) {
          leftArr.push(arr[i]);
      }
      else {
          rightArr.push(arr[i]);
      }
  }
  return [...quickSort(leftArr), key, ...quickSort(rightArr)];

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
sortKindLabel.textContent = sortKind; // выводит в HTML метод сортировки
sortTimeLabel.textContent = sortTime;// выводит в HTML время сортировки

sortChangeButton.addEventListener("click", () => {
  // TODO: переключать значение sortKind между 'bubbleSort' / 'quickSort'
// if (sortKind = "bubbleSort") {
//   console.log('sortKind ', sortKind);
//   sortKind = "quickSort";
//   console.log('sortKind смена ', sortKind);
// }
//   else {
//   sortKind = "bubbleSort";
//   }
// return sortKind;

});

sortActionButton.addEventListener("click", () => {
  // TODO: вывести в sortTimeLabel значение 'sorting...'
  const sort = sortAPI[sortKind];
  // console.log('sort ', sort);
  sortAPI.startSort(sort, fruits, comparationColor);
  // console.log('sortTime ', sortTime);
  
  display();
  // TODO: вывести в sortTimeLabel значение sortTime
  sortTimeOutput.innerHTML = sortTime;
});

/*** ДОБАВИТЬ ФРУКТ ***/

addActionButton.addEventListener("click", () => {
  // TODO: создание и добавление нового фрукта в массив fruits
  // необходимые значения берем из kindInput, colorInput, weightInput
  let fruitInput = {};
  let kindInputValue = kindInput.value;
  let colorInputValue = colorInput.value;
  let weightInputValue = weightInput.value;

  // цвета вынес в глобальные переменные

  console.log('Значение indexOf при сравнении с вводимым цветом ', colorFruit.indexOf(colorInputValue));
  
  // проверяем поле weight (вес) на целочисленное значение больше нуля
  if ( Number.isInteger(weightInputValue) || weightInputValue <= 0) {
    console.log('weightInputValue до алерт', weightInputValue);
    alert ('Введите целое положительное число в поле weight(вес)');
    // проверяем правильность ввода в поле цвет
  } if (colorFruit.indexOf(colorInputValue) == -1) {
    alert ('Введите цвет фрукта из возможно допустимых: фиолетовый, зеленый, розово-красный, желтый, светло-коричневый');
  } if (!kindInputValue) {
    alert ('Введите название фрукта');
  }
   else {
    // console.log('kindInput.value ', kindInput.value);
    // console.log('colorInput.value ', colorInput.value);
    // console.log('weightInputValue ', weightInputValue);
    fruitInput = {kind : kindInputValue, color : colorInputValue, weight: +weightInputValue};
    //добавляем в объект fruits новый фрукт
    fruits.push(fruitInput);
    // console.log('fruits.push ', fruits);
    display();
   
  }
});