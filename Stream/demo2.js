const fs = require('fs');
const path = require('path');
const file = fs.createReadStream(path.resolve(__dirname, './file3.txt'));
const file2 = fs.createReadStream(path.resolve(__dirname, './file4.txt'));

file.on('data', chunk => {
    console.log('chunk:', chunk);
    file.pause();//停止触发 'data' 事件， 进而切出 flowing 模式。
});
file.on('end', () => {
    console.log('end');
});

file.on('error', err => {
    console.log(err.toString());
});
 
file2.on('readable', () => {
    console.log('readable: ', file2.read());
});

// 书签20171006 http://nodejs.cn/api/stream.html#stream_readable_pause