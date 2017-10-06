// 书签（20170920) http://nodejs.cn/api/stream.html#stream_buffering

// 书签（20170925）http://nodejs.cn/api/stream.html#stream_event_error

const fs = require('fs');
const path = require('path');
const file = fs.createWriteStream(path.resolve(__dirname, './file.txt'));

//file 是一个 wirtable 流
for (let i = 0; i < 100; i++) {
    file.write(`hello, #${i}!\n`);
}

file.end('This is the end\n', () => {
    console.log('file write finished');
});


// const file2 = fs.createWriteStream(path.resolve(__dirname, './file2.txt'));
// file2.cork();
// file2.write('some ');
// file2.cork();
// file2.write('data ');
// process.nextTick(() => {
//     file2.uncork();
//     file2.uncork();
// });

//书签（20170927) http://nodejs.cn/api/stream.html#stream_writable_write_chunk_encoding_callback

//书签（20170929) http://nodejs.cn/api/stream.html#stream_two_modes


