const fs = require('fs');
const path = require('path');

// 将 file3 中的内容写入到 file4
const file = fs.createReadStream(path.resolve(__dirname, './file3.txt'));
const file2 = fs.createWriteStream(path.resolve(__dirname, './file4.txt'));

file.pipe(file2);