console.log('main 开始');
const a = require('./a.js');
const b = require('./b.js');
console.log('在 main 中，a.done=%j，b.done=%j', a.done, b.done);

/**
 * a require b 
 * b 执行到 require a 这一句时，** 直接返回 a require b 语句之前的 module.exports（不再按顺序执行 a 的代码）**
 * b 顺序执行完毕，正常输出 module.exports
 * a 获得 b 的 module.exports
 * a 继续执行完毕
 */