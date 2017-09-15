const EventEmitter = require('events');
var eventEmitter = new EventEmitter();

eventEmitter.on('event/1', (a, b) => {
    console.log('event1 emitted', `a:${a}`, `b:${b}`);
});
eventEmitter.once('event/1', () => {
    console.log('只监听一次');
})

eventEmitter.emit('event/1', 'arg1', 'arg2');
eventEmitter.emit('event/1', 'arg1', 'arg2');

/**
 * 如果 EventEmitter 没有为 'error' 事件注册至少一个监听器，
 * 则当 'error' 事件触发时，会抛出错误、打印堆栈跟踪、且退出 Node.js 进程。
 */
// eventEmitter.emit('error');


eventEmitter.once('newListener', (event, listener) => {
    console.log('为新事件注册监听器');
    if (event === 'event/2') {
        // 在开头插入一个新的监听器
        eventEmitter.on(event, () => {
            console.log('event/2', '附加 listener');
        });
    }
});
const event2Listener2 = () => {
    console.log('event/2');
};
eventEmitter.on('event/2', event2Listener2);
eventEmitter.emit('event/2');

//返回名为 event/2 的事件的监听器的映射数组。
const [event2Lis1, event2Lis2] = eventEmitter.listeners('event/2');
console.log('获取的 listener 指向原来的 listener 地址:',event2Lis2 === event2Listener2);

// 书签（20170915）:http://nodejs.cn/api/events.html#events_emitter_listeners_eventname