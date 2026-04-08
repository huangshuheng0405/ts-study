(function () {
    'use strict';

    function createArray(len, val) {
        let res = [];
        for (let i = 0; i < len; i++) {
            res.push(val);
        }
        return res;
    }
    let r = createArray(3, 'abc');
    console.log('🚀 ~ r:', r);
    let swap = (tuple) => {
        return [tuple[1], tuple[0]];
    };
    let r2 = swap(['abc', 123]);
    console.log('🚀 ~ r2:', r2);
    // 获取最大值
    class MyArray {
        arr = [];
        set(val) {
            this.arr.push(val);
        }
        getMax() {
            const [maxValue, ...rest] = this.arr;
            if (maxValue === undefined) {
                // throw new Error('Array is empty')
                return 0;
            }
            let max = maxValue;
            for (const current of rest) {
                current > max ? (max = current) : void 0;
            }
            return max;
        }
    }
    let myArr = new MyArray();
    myArr.set(100);
    myArr.set(200);
    myArr.set(300);
    console.log(myArr.getMax());

})();
//# sourceMappingURL=bundle.js.map
