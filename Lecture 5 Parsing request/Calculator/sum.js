const sumRequestHandler = (req, res) =>{
   console.log("In sum request handler", req.url);
   const body = [];
   req.on('data',(chunk)=>{
       body.push(chunk);
   })
   req.on('end',()=>{
   const bodyStr =  Buffer.concat(body).toString();
   const params = new URLSearchParams(bodyStr);
   const bodyObj = Object.fromEntries(params);
   const result = Number(bodyObj.first) +Number(bodyObj.second);
   console.log(result);

res.setHeader('Content-Type','text/html');
   res.write('<html>');
   res.write('<head><title>Calculator MASTER</title></head>');
   res.write('<body>');
   res.write(`<h1>Your sum is ${result}</h1>`);
   res.write('</body>');
   res.write('</html>');
   return res.end();
   });

}

exports.sumRequestHandler = sumRequestHandler;