// built in OS module provides many functions to help interact with OS and server
// built in path module provides many functions to help interact with files and file paths
// built in fs module provides many functions to assist with reading/writing files

const os = require('os')
console.log(os.hostname())

const path = require('path')

const pathToFile = ['/src', 'shannonsFolders', 'file.txt']
console.log(pathToFile.join(path.sep))

// readFile and writeFile are async functions in fs module
const { readFile, writeFile } = require('fs')

console.log("starting task")

readFile('./first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log("Could not read file ./first.txt: ", err)
        return
    } 
    let first = result
    
    readFile('./second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log( "Could not read file ./second.txt: ", err)
            return
        }

        let second = result

        writeFile('./result.txt', `Here is content of both files: ${first}, ${second}`, (err, result) => {
            if (err) {
                console.log("Could not write to file ./result.txt: ", err)
                return
            }
            console.log("Finished writing to file")
        })
    })

})

// program doesnt wait for readFile and writeFile to finish before moving to next block of code, readFile and writeFile finish in the background
console.log("starting next task")