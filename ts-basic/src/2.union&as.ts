// 用 const 字面量类型
const age = 30

let name: string | number

name = 'huangshuheng'
// 默认没有赋值的时候 联合类型可以调用公共的方法 to safe
name.toUpperCase()

console.log(name)

// 赋值后会推到类型
name = 30
name.toFixed()

console.log(name)

// 字面量类型
type Direction = 'up' | 'down' | 'right' | 'left' // ts 语法

let dir: Direction = 'left'
console.log(dir)

type women =
  | {
      wealthy: true
      waste: string
    }
  | {
      wealthy: true
      norality: string
    }

let richwomen: women = {
  wealthy: true,
  waste: 's' // 第一个值是 true 就不会走下面那个对象 此时使用 norality 会报错
}
// 可以利用联合类型做到 属性之间的互斥 （可辨识联合类型）

// 断言 非空断言
let ele = document.getElementById('app')
ele!.style.background = 'red' // ts

// as 强制把某个类型断言成已经存在的某个类型
let ele2: HTMLElement | null = document.getElementById('app') as HTMLElement
ele2.style.background = 'red'

ele?.style.background // js 可选量操作

let s3: string | number

s3! as any as boolean

// false ?? 1 // 空值合并操作符 除了 null  undefined 都会返回左边的值

export {}
