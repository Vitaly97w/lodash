class myArrays {
  constructor(...arr) {
    this.array = arr
  }

  write() {
    console.log(this.array)
  }
  //Разбивает массив на подмассивы заданной длины
  chunk(size = 1) {
    const arr = []
    const len = this.array.length / size
    for (let i = 0; i < len; i++) {
      arr.push(this.array.slice(0, size))
      this.array.splice(0, size)
    }
    return arr
  }
  //Удаляет все ложные элементы(false, null, NaN, "", undefined, 0)

  compact() {
    const arr = []

    for (let val of this.array) {
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
}

const arr = new myArrays(false, 1, 0, 4, NaN, undefined, null, 3, '')
console.log(arr.compact())
