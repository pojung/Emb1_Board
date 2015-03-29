var http = require('http');
var fs = require('fs');

//var redis = require('redis');
//var redis_client = redis.createClient();

var get_request_handler = function (req, res) {
  
  console.log('Got HTTP GET Request');	
  res.writeHead(200, { 'Content-Type': 'text/html'});
  res.write(fs.readFileSync('client.html'));
  res.end();
};

var server = http.createServer( function (req, res) {
  if (req.method === 'GET') {
    get_request_handler(req, res);
  }
  else if (req.method === 'POST') {
   }
});

server.listen(1234, '127.0.0.1');
console.log('Server waiting for connection at http://127.0.0.1:1234/');
