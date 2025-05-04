const fs = require('fs');

const content = `This file was created on: ${new Date().toLocaleString()}\n`;

fs.appendFile('log.txt', content, err => {
  if (err) throw err;
  console.log('Log saved!');
});
