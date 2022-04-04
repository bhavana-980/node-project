// run `node index.js` in the terminal
const http = require('http');
console.log('hello yaar');
http
  .createServer((req, res) => {
    res.statusCode = 200;
    res.end('hello bhavana');
  })
  .listen(3000);
