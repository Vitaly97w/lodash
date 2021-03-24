class myArrays {
  array = []
  write() {
    console.log(this.array)
  }
  //Разбивает массив на подмассивы заданной длины
  chunk(array, size = 1) {
    const arr = []
    const len = array.length / size
    for (let i = 0; i < len; i++) {
      arr.push(array.slice(0, size))
    }
    return arr
  }
  //Удаляет все ложные элементы(false, null, NaN, "", undefined, 0)
  compact(array) {
    const arr = []

    for (let val of array) {
      if (
        val !== undefined &&
        isNaN(val) === false &&
        val !== '' &&
        val !== null &&
        val != false &&
        val !== 0
      ) {
        arr.push(val)
      }
    }
    return arr
  }
  //ВЫтаскивает значения из вложенных массивов и возвращет массив с этими значениями
  concat(...arr) {
    let valArr
    for (let index in arr) {
      if (Array.isArray(arr[index])) {
        valArr = arr[index]
        arr.splice(0, index)
        this.array.push(valArr[0])
      } else {
        this.array.push(arr[index])
      }
    }
    return this.array
  }
  //удаляет n данных из начала массива и возващает новый массив
  drop(array, n = 1) {
    for (let i = 0; i < n; i++) {
      array.shift()
    }
    return array
  }
  //удаляет n данных из конца массива и возващает новый массив
  dropRight(array, n = 1) {
    for (let i = 0; i < n; i++) {
      array.pop()
    }
    return array
  }
  //не работает
  dropRightWhile(arr, pred) {
    const objR = []
    for (let i = 0; i < arr.length; i++) {
      for (let key in arr[i]) {
        if (arr[i][key] === pred[key]) {
          arr.pop()
        }
      }
    }
    return arr
  }
  //Заменяет в массиве данные на нужные
  fiil(array, value, ...index) {
    if (index.length == 0) {
      for (let i in array) {
        array[i] = value
      }
      return array
    }
    for (let val of index) {
      array[val] = value
    }
    return array
  }
  //голова массива
  head(arr) {
    return arr[0]
  }
  //выравнивает массив на один уровень в глубину
  flatten(arr) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > 0) {
        for (let j = 0; j < arr[i].length; j++) {
          newArr.push(arr[i][j])
        }
      } else {
        newArr.push(arr[i])
      }
    }
    return newArr
  }
  //сглаживает массив до одного уровня вложиности
  flattenDeep(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > 0) {
        arr = this.flatten(arr)
      }
    }
    return arr
  }
  //сглаживает массив до n глубины
  flattenDepth(arr, n) {
    for (let i = 0; i < n; i++) {
      arr = this.flatten(arr)
    }
    return arr
  }
}

let users = [
  { user: 'barney', active: false },
  { user: 'pebbles', active: true },
  { user: 'pebbles', active: false },
  { user: 'pebbles', active: false },
]

const arr = [
  1,
  [4],
  [[5, 4]],
  [
    [8, 2],
    [3, [1, [2]], 7],
  ],
]
const myArr = new myArrays()
console.log(myArr.flattenDepth(arr, 0))
