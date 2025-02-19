const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('peepee', (name, age) => 
    console.log(`${name}: peepee triggered at age ${age}`)
)

customEmitter.on('peepee', (name, age) => 
    console.log(`${name}: peepee triggered at age ${age}`)
)

//emit has to come after the on. You set customerEmitter to listen for a response first, THEN you can emit the response
//you can also pass in additional arguments you'd like to reflect in your listener callback
customEmitter.emit('peepee', 'shannon', 25)