const fs = require('fs');
fs.writeFile("output.txt","Writing on file",(err)=>{
    if (err){
        console.log("Error Occured");
    }
    console.log("Data written on file");
});

 fs.readFile('./output.txt','utf-8',(err,data)=>{
    if(err){
        console.log("Error ocuured while reading");
    }else{
        console.log(data);
    }
});

// console.log("Hello World");
