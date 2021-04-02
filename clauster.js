const os = require('os')
const cpus = os.cpus()
const clauster = require('cluster')
//require("./fork")
//console.log("cpus ==> ", cpus)

if(clauster.isMaster) {
console.log(`=== master process is here :${process.pid}  ====`)

cpus.forEach( () => clauster.fork())

clauster.on('exit', (worker)=> {
    console.log(`
    ===\n 
    master process died  :${process.pid}, \n
     only ${ Object.keys(clauster.workers).length} left \n
     ====
     `)

     clauster.fork()
})



}else{
    console.log(`=== worker process is here :${process.pid}  ====`)
    require('./server.js')
}