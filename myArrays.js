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
}

let users = [
  { user: 'barney', active: false },
  { user: 'pebbles', active: true },
  { user: 'pebbles', active: false },
  { user: 'pebbles', active: false },
]

const arr = new myArrays()
console.log(arr.dropRightWhile(users, { active: false }))
