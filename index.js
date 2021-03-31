const {fork} = require('child_process')

const processes = [
fork('./server.js', ['5001']),
fork('./server.js', ['5002']),
fork('./server.js', ['5003']),
fork('./server.js', ['5004']),
fork('./server.js', ['5005']),
fork('./server.js', ['5006']),
]

console.log('process ==> ', process.pid)

module.exports = {processes}