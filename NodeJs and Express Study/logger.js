// Making a module

const EventEmitter = require('events');

// const for good practices
const url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
  log(message) {
    // Send an HTTP request
    console.log(message);

    // Raise an event
    // pass a obj is a good practice
    this.emit('messageLogged', { id: 1, url: 'http://' });
  }
}

// public module
module.exports = Logger;
