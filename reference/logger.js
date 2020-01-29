const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
    log(msg) {
        this.emit('message', { id: uuid.v4(), msg });
    }
}

const logger = new Logger();
logger.on('message', data => { console.log('Called Listener:', data); });

logger.log('THIS IS MY FIRST MESSAGE');
logger.log('THIS IS MY SECOND MESSAGE');
logger.log('THIS IS MY THIRD MESSAGE');