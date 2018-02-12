console.log('My first node app');

const fs = require('fs');
const path = require('path');
const http = require('http');

const server = http.createServer((req, res) => {

	fs.readFile(path.join(__dirname, '/public', req.url), (err, data) => {
		if (err) {
			res.writeHead(404);
			res.end();
			return;
		}
		res.writeHead(200, 'OK');
		res.write(data);
		res.end();
	});
});

server.listen(5000);
