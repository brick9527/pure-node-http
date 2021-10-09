const http = require('http');

const parseUrl = require('./libs/parse_url');

const PORT = 3000;

const server = http.createServer((req, res) => {

  const { base, query } = parseUrl(req.url);
  req.base = base;
  req.query = query;

  // GET /
  if (req.method === 'GET' && req.base === '/') {
    res.end('hello world');
  }

  // GET /test
  if (req.method === 'GET' && req.base === '/test') {
    res.end('hello test');
  }

});

server.listen(PORT, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`server is running at port ${PORT}`);
})