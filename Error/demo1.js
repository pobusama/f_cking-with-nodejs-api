// 指定了堆栈跟踪收集的栈帧数量
Error.stackTraceLimit = 20;

// 在 targetObject 上创建一个 .stack 属性，当访问时返回一个表示代码中调用 Error.captureStackTrace() 的位置的字符串。
let obj = {};
Error.captureStackTrace(obj);
console.log(obj.stack);

try {
    const x = 1;
    const z = x + y;
} catch (e) {
    console.log(e.toString());
    console.log(e.stack);
}