// change the start script to match this filepath to run the shortcut run command

const http = require('http')

// set up out server first  
//req is incoming request from client, res is what we're sending back
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Welcome to our home page")
    } else if (req.url === "/about") {
        res.end("Welcome to our about page")
    } else {
        res.end("<h1>Uh oh! Page not found!</h1>")
    }
})

//defines the port our server is listening on
server.listen(8080)