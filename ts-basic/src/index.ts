class Animal {
  constructor(
    public name: string,
    public age: number
  ) {}
}

class Person {
  constructor(
    public name: string,
    public age: number
  ) {}
}

// type IClass = new (name: string, age: number) => any
interface IClass<T> {
  new (name: string, age: number): T // 写法不同
}
function createInstance<T>(target: IClass<T>, name: string, age: number) {
  return new target(name, age)
}

const animal = createInstance(Animal, 'Cat', 10)

function createArray<T>(len: number, val: T) {
  let res = []
  for (let i = 0; i < len; i++) {
    res.push(val)
  }
  return res
}

let r = createArray(3, 'abc')
console.log('🚀 ~ r:', r)

// type ISwap = <T, K>(tuple: [T, K]) => [K, T]

interface ISwap {
  <T, K>(tuple: [T, K]): [K, T]
}

let swap: ISwap = (tuple) => {
  return [tuple[1], tuple[0]]
}

let r2 = swap(['abc', 123])
console.log('🚀 ~ r2:', r2)

// 泛型使用的时候传递类型 可以直接推导 但是内部调用的时候没有确定类型
type ICallback<T> = (item: T, index: number) => void
type IforEach = <T>(arr: T[], callback: ICallback<T>) => void
const forEach: IforEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    // @ts-ignore
    callback(arr[i], i)
  }
}

forEach([1, 2, 3, 'a', 'b', 'c'], function (item, index) {}) // 如果 <T> 写成 type ICallback = <T>(item: T, index: number) => void item就是 T[]
// 写在前面 就是表示使用类型的时候传参  写到函数的前面 表示调用函数的时候传递参数

// 泛型是有默认值的
// 在使用一些联合

type Union<T = boolean> = T | string | number
let un: Union = true

// 泛型约束 要求传递的参数必须符合要求 A extends B 要求 A 是 B 的子类型或同类型

function handle<T extends string | number>(val: T) {}

let r3 = handle('abc')

interface IWithLen {
  length: number
}

function handle2<T extends IWithLen>(val: T) {
  return val.length
}

handle2({ a: 1, b: 2, length: 10 }) // 只要泛型中有length即可

function getVal<T>(obj: T, key: keyof T) {
  return obj[key]
}

getVal({ name: 'hsh', age: 10 }, 'name')

interface IResponse<T> {
  code: number
  message?: string
  data: T
}

interface ILoginData {
  token: string
  roles: number[]
}

function toLogin(): IResponse<ILoginData> {
  return {
    code: 200,
    data: {
      token: 'token',
      roles: [1, 2, 3]
    }
  }
}

// 获取最大值

class MyArray<T extends number | string> {
  private arr: T[] = []
  set(val: T) {
    this.arr.push(val)
  }

  getMax(): T {
    const [maxValue, ...rest] = this.arr
    if (maxValue === undefined) {
      // throw new Error('Array is empty')
      return <T>0
    }

    let max = maxValue
    for (const current of rest) {
      current > max ? (max = current) : void 0
    }
    return max
  }
}

let myArr = new MyArray<number>()
myArr.set(100)
myArr.set(200)
myArr.set(300)
console.log(myArr.getMax())
