//createReadStream is used to read a file in chunks, which is more efficient memory management

const { createReadStream } = require('fs')

const stream = createReadStream(
    './lesson-7-streams/largeFile.txt', 
    'utf8'
)

//set the stream to listen for data event
stream.on('data', (chunk) => {
    console.log(chunk)
})

//this will close the stream w/o triggering the 'end' event listener 
stream.on('error', (err) => console.log("An error has occurred", err))

//set the stream to listen for end event
stream.on('end', () => console.log("Read till end of file"))