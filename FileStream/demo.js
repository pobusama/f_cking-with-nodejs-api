const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, './file.txt');
fs.stat(p, (err, stats) => {
    if (err) {
        throw err;
    }
    console.log(stats);
    // { 
    //     dev: 16777220,
    //     mode: 33188,
    //     nlink: 1,
    //     uid: 501,
    //     gid: 20,
    //     rdev: 0,
    //     blksize: 4096,
    //     ino: 60153312,
    //     size: 37,
    //     blocks: 8,
    //     atime: 2017-10-26T01:41:14.000Z, // "访问时间" - 文件数据最近被访问的时间。
    //     mtime: 2017-10-26T01:41:14.000Z, // "修改时间" - 文件数据最近被修改的时间。
    //     ctime: 2017-10-26T01:41:14.000Z, // "变化时间" - 文件状态最近更改的时间（修改索引节点数据） 
    //     birthtime: 2017-10-26T01:41:01.000Z  // "创建时间" - 文件创建的时间。 当文件被创建时设定一次。
    // }      
})