const {sumRequestHandler} = require('./sum');

const requestHandler = (req, res) =>{
    console.log(req.url, req.method);
    if(req.url === '/'){
   res.setHeader('Content-Type','text/html');
   res.write('<html>');
   res.write('<head><title>Calculator MASTER</title></head>');
   res.write('<body>');
   res.write('<h1>Welcome to Calculator</h1>');
   res.write('<a href="/calculator">Go to Calculator</a>')
   res.write('</body>');
   res.write('</html>');
   return res.end();
}else if(req.url.toLowerCase() === '/calculator'){
   res.setHeader('Content-Type', 'text/html');
res.write(`
  <html>
    <head>
      <title>Calculator MASTER</title>
    </head>
    <body>
      <h1>Hamro Calculator</h1>
      <form action="/calculate-result" method="POST">
       <input type="text" placeholder="First Num" name="first"/><br>
       <input type="text" placeholder="Second Num" name="second"/><br>
       <input type="submit" value="Submit"/>
       </form>
    </body>
  </html>
`);
return res.end();

}else if(req.url.toLowerCase() === '/calculate-result' && req.method === 'POST'){
  return sumRequestHandler(req,res);
   
}
 res.setHeader('Content-Type','text/html');
   res.write('<html>');
   res.write('<head><title>Calculator MASTER</title></head>');
   res.write('<body>');
   res.write('<h1>404 page not found</h1>');
   res.write('<a href="/">Go to Calculator</a>')
   res.write('</body>');
   res.write('</html>');
   return res.end();
}
exports.requestHandler = requestHandler;