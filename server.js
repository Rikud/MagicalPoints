console.log('My first node app');


const PORT = process.env.PORT || 8080
const http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(PORT, () => console.log(`Listening on ${ PORT }`));