// 创建一个长度为 10、且用 0 填充的 Buffer。
const buf1 = Buffer.alloc(10);
console.log('buf1:',buf1);

// 创建一个长度为 10、且用 0x1 填充的 Buffer。 
const buf2 = Buffer.alloc(10, 22);
console.log('buf2:',buf2);

// 创建一个长度为 10、且未初始化的 Buffer。
// 这个方法比调用 Buffer.alloc() 更快，
// 但返回的 Buffer 实例可能包含旧数据，
// 因此需要使用 fill() 或 write() 重写。
const buf3 = Buffer.allocUnsafe(10);
console.log('buf3:',buf3); // 几次打印的值不同

// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
const buf4 = Buffer.from([1, 2, 3]); // 类似数组的创建
console.log('buf4:',buf4);

// 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
const buf5 = Buffer.from('tést');
console.log('buf5:',buf5); //t、é、s、t 的 UTF-8 码
console.log('buf5 string:',buf5.toString('hex'));
console.log('buf5 string:',buf5.toString('base64'));

// 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
const buf6 = Buffer.from('tést', 'latin1');
console.log('buf6:',buf6); //t、é、s、t 的 Latin-1 码

// 返回一个新建的包含所提供的 Buffer 的内容的副本的 Buffer
const buf7 = Buffer.from(buf6, 1, 2);
console.log('buf7:',buf7);

// 返回一个新建的与给定的 ArrayBuffer 共享同一内存的 Buffer。
// 该方法将创建一个 ArrayBuffer 的视图，而不会复制底层内存。
const ab1 = new ArrayBuffer(10)
const buf8 = Buffer.from(ab1, 0, 9);
console.log('buf8:',buf8);


// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
const buf9 = Buffer.from([1, 2, 3]); 
for (let b of buf9) {
    console.log('b:',b);
}
for (let b of buf9.values()) {
    console.log('bvalues:',b);
}
// Buffer 对象的 keys 类似数组的 keys 
for (let b of buf9.keys()) {
    console.log('bkeys:',b);
}
// 检查是否支持字符编码
console.log('isEncoding:', Buffer.isEncoding('ascii'));

// buffer 属性指向创建该 Buffer 的底层的 ArrayBuffer 对象
const arryBuf10 = new ArrayBuffer(10);
const buf11 = Buffer.from(arryBuf10);
console.log('buf11.buffer === arryBuf10:', buf11.buffer === arryBuf10);


// 书签（20170906）： http://nodejs.cn/api/buffer.html#buffer_buf_equals_otherbuffer

//equals

const buf12 = Buffer.from([1,1,1]);
const buf13 = Buffer.alloc(3, 1);
console.log('buf12 equals buf13:', buf12.equals(buf13));

// 书签（20170912）：http://nodejs.cn/api/buffer.html#buffer_class_method_buffer_allocunsafe_size