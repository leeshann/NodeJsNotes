// change the start script to match this filepath to run the shortcut run command

const { readFile, writeFile } = require('fs')
const util = require('util')

//promisify() works on any function that uses the error-first callback pattern—whether it's part of a built-in module, a third-party module, or your custom code
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)


//handle multiple processes that are dependent on eachother besides nesting them within the promise. Prevents callback hell
const start = async() => {
    try {
        const firstTask = await readFilePromise('./lesson-5-promises/readMe.txt', 'utf-8')
        console.log("First task completed")

        await writeFilePromise('./lesson-5-promises/result.txt', 'mind boom!!!!!!')
        console.log("Finished second task")
    } catch (error) {
        console.log("An error has occurred")
    }
}

start()

// const getText = (filepath) => {
//     return new Promise((resolve, reject) => {
//         readFile(filepath, 'utf-8', (error, result) => {
//             if (error) {
//                 reject(error)
//             }
//             resolve(result)
//         })
//     })
// }

// const writeToFile = (filepath) => {
//     return new Promise((resolve, reject) => {
//         writeFile(filepath, 'Write this to the file', (err, result) => {
//             if (err) {
//                 reject(err)
//             }
//             resolve(result)
//         })
//     })
// }

// resolve() returns whatever value is passed to it, and that value will be available to handle later once the Promise is fulfilled. In this case, result is whatever was read from the file

// getText('./lesson-5-promises/readMe.txt')
//     .then(data => console.log(data))
//     .catch(console.log("Cannot read from file"))