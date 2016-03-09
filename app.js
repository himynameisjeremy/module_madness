var http = require('http');
var weWantTheFunks = require('./weWantTheFunks.js');

http.createServer(function(req, res){
  res.writeHead(200);
  res.write(weWantTheFunks.balance + weWantTheFunks.propper );
  res.end();
}).listen(3000);
