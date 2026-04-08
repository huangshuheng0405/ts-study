// unknown 是 any 的安全类型 没有赋值的时候 就是 unknown

let val: unknown = true

function processInput(val: unknown) {
  if (typeof val === 'string') {
    val.toUpperCase()
  } else if (typeof val === 'number') {
    val.toFixed()
  }
}

let name: unknown = 'hsh'
;(name as string).toUpperCase()
console.log('🚀 ~ name:', name)

type UnionUnknown = unknown | string | number | undefined // unknown 和任何类型做 联合 都是 unknown

type InterUnknown = unknown & string // string

// 区分 unknown 和 any 可以采用交叉类型

type IKeyof = keyof unknown // never 不能用 keyof 来取 unknown 的类型
type IkeyofAny = keyof any // string number symbol 可以充当 key
