// 书签（20170920) http://nodejs.cn/api/stream.html#stream_buffering

// 书签（20170925）http://nodejs.cn/api/stream.html#stream_event_error

const fs = require('fs');
const file = fs.createWriteStream('./file.txt');

for (let i = 0; i < 100; i++) {
    file.write(`hello, #${i}!\n`);
}

file.end('This is the end\n', 'utf8', () => {
    console.log('file write finished');
});