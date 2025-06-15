const http = require('http')





const server =http.createServer((req,res) => {
    const url = req.url;

 res.setHeader('Content-Type','text/html');

 if(url === '/'){
    res.write('<html>')
    res.write('<head><title>this is my page</title></head>')
    res.write('<body><form action ="/vinit" method = "POST"><input type = "text"><button type = "submit">send</button></from>')
    res.write('</body>')
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