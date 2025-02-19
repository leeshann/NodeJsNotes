//this file is used to provide an example of how readFile isn't always the most optimal way to get text from a file, especially when the file content is exceptionally large and may not be able to fit inside the variable that readFile is assigned to as shown in the example below.

const { writeFile, readFile } = require('fs')
const { get } = require('http')
const util = require('util')

// const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)


const performFileActions = async() => {
    try {
        //create an extremely large text file
        for (let i = 0; i < 10000000; i++) {
            await writeFilePromise(
                './lesson-7-streams/largeFile.txt', 
                `Writing to file line ${i}\n`, 
                {flag: 'a'})
        }

        console.log('finished writing to file')

        //this file is too large to be read efficiently so the code kind of breaks below and the second console.log is never executed
        // const getTextFromFile = await readFilePromise('./lesson-7-streams/largeFile.txt', 'utf-8') 
        // console.log('finished reading from file')
    } catch (error) {
        console.log("An error has occurred")
    }
}

performFileActions()