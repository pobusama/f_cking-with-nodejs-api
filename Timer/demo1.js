/**
 * Immediate 类
 */
let imd1 = setImmediate(arr => {
    arr.forEach(v => console.log(v));
    console.log('我是事件循环1');
}, ['1', '2', '3']);

console.log('imd1:', imd1);

let imd2 = setImmediate(() => {
    console.log('我是事件循环1');
    setImmediate(() => console.log('我是事件循环2'));
});

console.log('我是当前事件循环');

// 改写 imd1 （Node 8+） 
// const util = require('util');
// const setImmediatePromise = util.promisify(setImmediate);
// let imd3 = setImmediatePromise(['1', '2', '3']).then(arr => {
//     arr.forEach(v => console.log(v));
//     console.log('我是事件循环1（imd3）');
// });

let tmo = setTimeout(() => {
    console.log('我是当前事件循环內创建的 timeout');
}, 14);