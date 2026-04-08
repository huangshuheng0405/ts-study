interface Person1 {
  handsome: string
}

interface Person2 {
  high: string
}

type Person3 = Person1 & Person2
let p3: Person3 = {
  handsome: 'handsome',
  high: 'high'
}

function mixin<T, K>(o1: T, o2: K) {
  return { ...o1, ...o2 }
}
let res = mixin({ a: '123' }, { a: 123 })

type IMinix = typeof res
type IVal = IMinix['a'] // 交叉类型 出现 never
