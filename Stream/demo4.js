const fs = require('fs');
const path = require('path');

const file = fs.createReadStream(path.resolve(__dirname, './file.txt'));

file
    // .resume() // causes an explicitly paused Readable stream to resume emitting 'data' events, switching the stream into flowing mode
    .on('end', () => {
        console.log('Reached the end, but did not read anything.');
    })
    .on('data', chunk => {
        // 同样也会使流进入 flowing 状态
        console.log('data:', chunk);
    })
    .setEncoding('utf8');

