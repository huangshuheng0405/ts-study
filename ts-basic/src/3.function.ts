// 函数类型

// function sum(a: string, b: string): string {
//   return a + b
// }

// let sum = (a: string, b: string): string => {
//   return a + b
// }

// type ISum = (x: string, y: string) => string
// let sum: ISum = (a, b) => {
//   return a + b
// }
// let r = sum('a', 'b')
// 会根据上下文推导赋值的类型

// void 表示不关心返回值的类型  不校验返回值
type ICallback = (a: string, b: number, c: boolean) => void
function fn(callback: ICallback) {}

fn((x, y, z) => {
  return 'abc'
})

// 可选参数  ？
let sum = (a: string, b?: string): string => {
  return a + b
}

sum('a')

let total = (...rest: number[]): number => {
  return rest.reduce((memo, current) => ((memo += current), memo))
}

let person = {
  name: 'hsh',
  age: 30
}

type IThis = typeof person
function getValue(this: IThis, key: keyof IThis) {
  return this[key]
}
// 第二个参数 只能传 name 或 age
let r = getValue.call(person, 'name')
console.log('🚀 ~ r:', r)

// 函数重载 只是类型的重载 一般是有限的操作
function toArray(value: string): string[]
function toArray(value: string): number[]
// let a = 1 后面不能跟代码
function toArray(value: number | string) {
  if (typeof value === 'string') {
    return value.split('')
  }
  return value.toString().split('').map(Number)
}
let arr = toArray('123')
console.log('🚀 ~ arr:', arr)
