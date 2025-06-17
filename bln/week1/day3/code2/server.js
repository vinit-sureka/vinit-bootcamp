const http = require('http')
const fs= require('fs')

const server =http.createServer((req,res) => {
    const url = req.url;
    const method =req.method;

 res.setHeader('Content-Type','text/html');

 if(url === '/'){
    res.write('<html>')
    res.write('<head><title>this is my page</title></head>')
    res.write('<body><form action ="/home" method = "POST"><input type = "text"><button type = "submit">send</button></from>')
    res.write('</body>')
    return res.end();
        
    }

    if(url === '/home' && method === 'POST'){
        fs.writeFileSync('message.txt' , 'DUMMY');
        res.statusCode = 302;
        res.setHeader('Location' , '/')
        return res.end();

    }



   
    res.write('<html>')
    res.write('<head><title>this is my page</title></head>')
    res.write('<body><h1>welcome to vinit city!!!</h1>')
    res.write('</body>')
    res.write('</html>')
    res.end();
   
   
    
   

});
server.listen(3000);