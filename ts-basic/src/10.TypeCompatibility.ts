type r1 = 'abc' extends string ? true : false
type r2 = 123 extends number ? true : false
type r3 = 'abc' extends boolean ? true : false

let r4: string = 'abc'
let r2: number = 123

type a1 = 'a' extends 'a' | 'b' | 'c' ? true : false
type a2 = 1 extends 1 | 2 | 3 ? true : false
type a3 = true extends true | false ? true : false

// 字面量类型可以赋予给基础类型
let a4: 'a' | 'b' | 'c' = 'a'

type b1 = string extends String ? true : false
type b2 = number extends Number ? true : false
type b3 = boolean extends Boolean ? true : false
type b4 = object extends Object ? true : false

// 针对 any 来说 永远返回的是 成功和失败的联合类型
type c1 = any extends 1 ? true : false // boolean

type c2 = unknown extends 'abc' ? true : false // false unknown 不能赋值给 string 类型

// 类型层面上看 低类型 可以赋予给高类型
type c3 = object extends {} ? true : false // true
type c4 = Object extends {} ? true : false // true

// ts 默认的 object Object 可以相互赋值
type c5 = Object extends object ? true : false // true
type c6 = object extends Object ? true : false // true

type c7 = String extends string ? true : false // false 高级别 不能赋值给 低级别

// let str:string = new String('abc') // 报错
