// 初始化的时候 module.exports === exports 为空对象 {}
console.log('cur exports: ', exports, module.exports, module.exports === exports);

// 此时改变 module.exports 指向，exports 仍然指向原来的对象地址，还是 {}
module.exports = {
    a: 'a',
    b: 'b'
}
console.log('cur exports: ', exports);

/**
 * 真正导出的还是 module.exports 对象
 * 如果直接修改 exports ／ module.exports 的指向，exports 对象将不能导出
 */
exports = {
    c: 'c',
    d: 'd'
}