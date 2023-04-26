// const { EventEmitter } = require('events')
// const eventEmitter = new EventEmitter()

// eventEmitter.on('lunch', () => {
//     console.log('yum')
// })

// eventEmitter.emit('lunch')

// const { readFile, readFileSync } = require('fs')


// readFile('./hello.txt', 'utf8', (err, txt) => {
//     console.log(txt)
// })



// console.log('DO this ASAP')

const { readFile } = require('fs').promises

// const file = await readFile('./hello.txt' ,'utf8')

// const myModule = require('./my-module')

// console.log(myModule)

const express = require('express')
const { request } = require('http')

const app = express()

app.get('/', async (request, response) => {

    // readFile('./home.html', 'utf8', (err, html) => {

    //     if (err) {
    //         response.status(500).send('sorry, out of order')
    //     }
    //     response.send(html)
    // })

    response.send(await readFile('./hello.txt' ,'utf8'))
})


app.listen(process.env.PORT || 3000, () => console.log('App avaiable on http://localhost:3000'))

