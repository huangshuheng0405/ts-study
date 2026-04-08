// import { version } from '../package.json' with { type: 'json' }
let s: string = 'hello world'
// 断点
// debugger
console.log(s)

// console.log(version)
let name: string = 'hsh'
console.log(name)

export { name }

let arr: number[] = [1, 2, 3]
console.log(arr)

let arr2: string[] = ['a', 'b', 'c']
console.log(arr2)

let arr3: (string | number)[] = ['a', 1, 'c']
console.log(arr3)

let arr4: Array<number | string> = ['a', 3, 'c']
console.log(arr4)

let tuple1: [string, number, boolean] = ['hsh', 30, true]
console.log(tuple1)

tuple1.push('a')
// console.log(tuple1[3])  为了安全，不能访问超出范围的索引

// 枚举类型
enum USER_ROLE {
  user,
  admin,
  manager
}

console.log(USER_ROLE[1], USER_ROLE.manager)

// null 和 undefined 是任何类型的子类型 可以付给任何类型
// let str: string = null

function fn(): void {
  return undefined
}

// never 类型  也是任何类型的子类型
function fn1(): never {
  //   throw new Error('error')
  while (true) {
    console.log('hello world')
  }
}

// let a: string = fn1()

function validate(val: never) {}
function getResult(type: string | number | boolean) {
  // typeof 有收窄的功能
  if (typeof type === 'string') {
    console.log('type is string', type)
    return type
    // 类型收窄为 string 类型
  }
  if (typeof type === 'number') {
    console.log('type is number', type)
    return type
    // 类型收窄为 number 类型
  }
  if (typeof type === 'boolean') {
    console.log('type is boolean', type)
    return type
    // 类型收窄为 boolean 类型
  }

  // 代码跑不到这 所以不会报错
  validate(type)
}

let union: string | number | never | boolean

// 任何类型都能赋值给 Object
// let obj: Object = true
let obj: Object = {}

let s2: symbol = Symbol('1')
let s3: symbol = Symbol('1')

console.log(s2 === s3)

let b1: bigint = BigInt(Number.MAX_SAFE_INTEGER)
console.log(b1)

// any 这个值可以被赋予任何类型
let a: any = true
// 不给类型 就默认是 any
let b
