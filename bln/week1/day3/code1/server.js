const http = require('http');


function rqListener(req,res)
{
console.log("----------",req.url,"----------",req.method,"----------",req.headers);


  res.setHeader('Content-type' , 'text/html');
  res.write('<html>');
  res.write('<head><title>my frist page</title><head>');
  res.write('<body>');
    console.log(req?.url);
  if(req.url == '/'){
    console.log(req?.url);
    res.write('<h1>welcome</h1>' );
  }else{
    res.write(`<h1>Hello ${req?.url.split("/")[1]}</h1>`)
  }
  res.write('</body>');
  res.write('</html>');

  
res.end();


}
 const server = http.createServer(rqListener);

 server.listen(3000);

