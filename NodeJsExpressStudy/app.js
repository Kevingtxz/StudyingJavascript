// Above the last study,below the studies before

/* 
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello World');
    res.end();
  }

  if (req.url === '/api/numbers') {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

// server.on('connection', (socket) => {
//   console.log('New connection...');
// });
server.listen(3000);

console.log('Listening a port on 3000...');
/*
const EventEmitter = require('events');
//const emitter = new EventEmitter();

const Logger = require('./logger');
const logger = new Logger();

// Register a listener
logger.on('messageLogged', (arg) => {
  console.log('Listener called', arg);
});

logger.log('message');

/*
var fs = require('fs');

const files = fs.readdirSync('./');

console.log(files);

// Asynchronous version
fs.readdir('./', function (err, files) {
  if (err) console.log('Error', err);
  else console.log('Result', files);
});

/ *
const os = require('os');

var totalMemory = os.totalmem;
var freeMemory = os.freemem();

console.log('Total Memory: ' + totalMemory);
console.log('Free Memory: ' + freeMemory);

// Template string ES6
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

/*
// import module = require
const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj);
/ *
var log = require('./logger');

log('message');
/ *
function start(name) {
  console.log('Hello' + name);
}

start('Kevin');

// There is no any window

console.log(global);
console.log(module);
console.log(module.log);
*/
