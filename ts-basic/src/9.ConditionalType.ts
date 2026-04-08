// 条件类型
//

type ResStatusMessage<T extends number> = T extends 200 | 204 | 206
  ? 'success'
  : 'fail'

type R1 = ResStatusMessage<300>

type Conditional<T, U> = T extends U ? 'success' : 'fail'
type R2 = Conditional<'hsh', string>
type R3 = Conditional<'hsh', number>

interface Bird {
  name: 'bird'
}

interface Sky {
  name: 'sky'
}

interface Fish {
  name: 'fish'
}

interface Water {
  name: 'water'
}

type Conditional1<T> = T extends Bird ? Sky : Water

type R4 = Conditional1<Bird> // Sky
type R5 = Conditional1<Fish> // Water

// 泛型一般代表输入是不确定的 （无限的） 约束  函数重载 （有限的）

type FormatReturnType<T extends string | number> = T extends string
  ? string
  : T extends number
    ? number
    : never
function sum<T extends string | number>(a: T, b: T): FormatReturnType<T> {
  return a + (b as any) // 不允许 T + T
}

let res = sum('a', 'b') // string
let res2 = sum(1, 2) // number
