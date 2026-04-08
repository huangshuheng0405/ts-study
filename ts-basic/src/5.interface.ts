// 1. 接口不能有具体的实现
// 2.

// type IFullname = {
//   firstname: string
//   lastname: string
// }
interface IFullname {
  firstname: string
  lastname: string
}
type Ifn = (obj: IFullname) => string
const fullname: Ifn = ({ firstname, lastname }: IFullname): string => {
  return firstname + lastname
}

let name = fullname({ firstname: 'huang', lastname: 'shuheng' })
console.log('🚀 ~ name:', name)
console.log('🚀 ~ fullname:', fullname)

// type 和 interface 的区别
// 1. 如果只是描述结构 -> interface
// 2. 如果涉及到联合类型 -> type
// 3. type 不能被扩展 interface 可以被扩展
// 4. type 不能重名 interface 可以重名 合并
// 5. type 可以使用循环和条件 interface 不行

// 接口可以声明混合类型
interface IFn2 {
  (): number // 函数
  count: number // 属性
}

// 为了防止click函数被 重新赋值 let 是可以修改的 const 就行
const click: IFn2 = () => {
  return click.count++
}

click.count = 0

// 接口中实现的都是抽象的 而且必须要实现
interface IVeg {
  readonly color: string
  size: number
  // 可选属性
  taste?: 'sweet' | 'sour'
}

const tomato: IVeg = {
  color: 'red',
  size: 20,
  taste: 'sour'
}

// tomato.color = 'green' // 只读 不能修改

interface IVeg2 {
  readonly color: string
  size: number
  // 可选属性
  taste?: 'sweet' | 'sour'
  [key: string]: any
}

// interface IV extends IVeg2 {
//   a?: number
// }

const tomato2: IVeg2 = {
  color: 'red',
  size: 20,
  a: 1 // 如何解决多的属性
}
// as IVeg2
/**
 * 1. 可以使用断言 as
 * 2. 可以扩展 基于接口的特性  写一个同名的接口
 * 3. 产生一个新类型 继承 原有的接口
 * 4. 类型兼容
 * // TODO
 */

interface Person {
  name: string
  [key: string]: any
  company: {
    n: 100
  }
}

let p: Person = {
  name: 'hsh',
  age: 30,
  company: {
    n: 100
  }
}

// 数字索引
interface IArr {
  [key: number]: any
}

let arr1: IArr = {
  0: 1,
  1: 2,
  2: 3
}

let arr2: IArr = [1, 2, 3]

// 通过索引访问符 可以取 值的类型
type PersonNameType = Person['name'] // string
type PersonAnyType = Person[string] // any
type PersonNType = Person['company']['n'] // 100

interface ICar {
  color: string
  a: 1
  b: 2
}

// keyof 取一个对象中 key 的集合
type ValueOf = ICar[keyof ICar] // string | 1 | 2

interface ChineseSpeakable {
  speakChinese(): void
}

interface EnglishSpeakable {
  speakEnglish(): void
}

class Speak implements ChineseSpeakable, EnglishSpeakable {
  speakEnglish(): void {
    throw new Error('Method not implemented.')
  }
  speakChinese(): void {}
}
// 可以被类实现多个接口 描述类中的原型方法 和 实例属性
