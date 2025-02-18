// change the start script to match this filepath to run the shortcut run command

const { readFile } = require('fs')

readFile('./lesson-5-promises/readMe.txt', 'utf-8', (error, result) => {
    if (error) {
        console.log(error)
        return
    }
    console.log(result)
})