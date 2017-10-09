// Error.captureStackTrace 传人第二个参数用法
function MyError() {
    Error.captureStackTrace(this, MyError);
}

console.log(new MyError().stack);

// Error.captureStackTrace 只传一个参数用法
const aErr = {};
Error.captureStackTrace(aErr);
console.log(aErr.stack);