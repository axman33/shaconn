var http = require('http');
http.createServer(function(request, response) {
  response.write('ShaConn web app\n');
  response.write('Stay tuned');
  response.end();
}).listen(8888);
