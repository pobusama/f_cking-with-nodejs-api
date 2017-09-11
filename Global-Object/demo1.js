const path = require('path');
const depenA = require('./dependenciesA');
const exportExam = require('./exportExample');

// __dirname 获取当前模块所在的文件夹名称，绝对路径
console.log(__dirname);
// /Users/reven/Other-Pro/f_cking-with-nodejs-api/Global-Object
console.log(path.dirname(__filename));
// /Users/reven/Other-Pro/f_cking-with-nodejs-api/Global-Object

// __filename 获取当前模块名称，绝对路径
console.log(__filename);
/**
 * 在 dependenciesA.js 中，无论直接打印 filename 还是导出打印 filename 的模块，
 * 都是输出 dependenciesA.js 模块名称，绝对路径
 */ 
depenA();

/**
 * 使用内部的 require() 机制查询模块的位置, 此操作只返回解析后的文件名，不会加载此模块。
 * 等价于通过 require 机制获取 dependenciesA.js 的 filename。
 */
console.log('resolve:', require.resolve('./dependenciesA'));

// module.children 被该模块引用的模块对象
console.log(module.children.map(v => v.filename));

/*
 * 测试 exports 和 module.exports 的区别
 */
console.log('exportExam\'s keys:', Object.keys(exportExam));

/**
 * module 上的一些属性
 */
const depenBInfo = require('./dependenciesB').getModuleInfo();
console.log('depenBInfo.filename:', depenBInfo.filename);
console.log('depenBInfo.id:', depenBInfo.id);
console.log('depenBInfo.loaded:', depenBInfo.loaded);
console.log('depenBInfo.parent:', depenBInfo.parent.filename);
console.log('depenBInfo.paths:', depenBInfo.paths);

const depenBInfo2 = depenBInfo.moduleSelf.require(depenBInfo.id);
console.log('depenBInfo2:', depenBInfo2);

/**
 * 判断是否直接被 node.js 运行（是否是主模块）
 */
console.log('is main:', require.main === module);