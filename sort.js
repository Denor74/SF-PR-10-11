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
    if (n <= 1) {
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
if (sortKind = "bubbleSort") {
  console.log('sortKind ', sortKind);
  sortKind = "quickSort";
  console.log('sortKind смена ', sortKind);
}
  else {
  sortKind = "bubbleSort";
  }
return sortKind;

});

sortActionButton.addEventListener("click", () => {
  // TODO: вывести в sortTimeLabel значение 'sorting...'
  const sort = sortAPI[sortKind];
  console.log('sort ', sort);
  sortAPI.startSort(sort, fruits, comparationColor);
  console.log('sortTime ', sortTime);
  
  display();
  // TODO: вывести в sortTimeLabel значение sortTime
  sortTimeOutput.innerHTML = sortTime;
});