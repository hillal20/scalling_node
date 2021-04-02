const express = require('express')
const bodyParser = require('body-parser')
const server = express()
server.use(bodyParser.json())
const port = process.argv[2] || 4000



const options = [
    "option-1",
    "option-2",
    "option-3",
    "option-4",
    "option-5",
]

const radomIndex = Math.floor(Math.random() * options.length)
server.get('/api', (req, res)=> {
     console.log(` === requesting process: ${process.pid} =====`)
  
    res.json({
         data: options[radomIndex],
        port:port,
        process: process.pid,
      
    })
})

server.get('/kill', (req, res)=> {
    console.log(` === requesting process: ${process.pid} =====`)
    process.exit()
   
})






server.listen(port, ()=>{
    console.log(`== api is working on port ${port}, process: ${process.pid} ==`)
})