const http =  require('http');
// const https = require('https');
const router = require('./router');
const config = require('./config.json');
const port = config.port;
const ws = http.createServer(router);
ws.listen(port);
