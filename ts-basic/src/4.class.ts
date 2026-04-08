// 类本身就可以充当类型

class Circle {
  // 必须先声明再使用
  public x
  public y
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
}

class Animal {
  #hsh = 'hsh' // js 语法 新增的 别人访问不到
  constructor(
    // readonly 只有在构造函数里赋值  后续不能修改
    private readonly name: string,
    public age: number
  ) {
    this.name = 'hhh'
    this.age = age
  }
}

class Cat extends Animal {
  constructor(name: string, age: number = 13) {
    super(name, age)
    // this.age = age
  }
}

const animal = new Animal('dog', 10)
console.log('🚀 ~ animal:', animal)
const tom = new Cat('Tom', 18)
console.log('🚀 ~ tom:', tom)
console.log(tom['name']) // 此方法可以访问私有属性
// console.log(tom.name) // 这样不行

class Animal1 {
  static habitat = 'the earth'
  static getHabitat() {
    return this.habitat
  }
  private _sound: string = ''
  constructor(
    public name: string,
    public age: number
  ) {}

  get sound() {
    return this._sound
  }

  set sound(value: string) {
    this._sound = value
  }

  eat(food: string) {
    console.log('eating: ', food)
  }
}

class Cat1 extends Animal1 {
  constructor(name: string, age: number) {
    super(name, age)
  }

  static getHabitat() {
    console.log('in Cat1')
    return super.getHabitat() // super 指向父类
  }
  eat(food: string): void {}
}

let tom1 = new Cat1('ani', 100)
tom1.sound = 'maomao' // 私有属性可以通过 成员函数访问
console.log('🚀 ~ tom1.sound:', tom1.sound)
tom1.eat('miaoliang')
console.log('🚀 ~ Cat1.getHabitat():', Cat1.getHabitat())

/**
 * 单例模式
 */
class Singleton {
  private static instance = new Singleton()
  private constructor() {}

  static getInstance() {
    return this.instance
  }
}

let ins1 = Singleton.getInstance()
let ins2 = Singleton.getInstance()

console.log(ins1 === ins2) // true

// 抽象类
// 1. 不能 new
// 2. 抽象类中可以创建 抽象属性和方法 但是不能创建 静态方法、属性
// 3. 抽象类中可以有具体实现
abstract class Animal2 {
  static habitat = 'the earth'
  abstract eat(): void // 没有具体实现
  abstract play: () => void

  drink(): void {
    console.log('drink water')
  }
}

class Cat2 extends Animal2 {
  public play: () => void = () => {}
  eat(): void {
    throw new Error('')
  }
}

let cat2 = new Cat2()
console.log('🚀 ~ cat2:', cat2)
