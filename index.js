const http = require('http');
const { createProxy } = require('proxy');
const server = createProxy(http.createServer());
server.listen(8133,'0.0.0.0', () => {
  var port = server.address().port;
  console.log('HTTP(s) proxy server listening on port %d', port);
});