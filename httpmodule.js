const http = require('http')
const fs = require('fs')

const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
    
    res.setHeader('Content-Type', 'text/html')
    console.log(req.url)
    
    if(req.url == "/"){
        res.statusCode = 200;
        res.end('<h1> Empty Page</h1> <p> Nothing to see here :)</p>')
    }else if(req.url == "/vishal"){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html')
        res.end(data.toString())
    }else{
        res.statusCode = 404;
        res.end('<h1> Not Found !</h1> <p>Error is in this page</p>')
    }
})

server.listen(port, ()=>{
    console.log(`This is server on port ${port}`)
})