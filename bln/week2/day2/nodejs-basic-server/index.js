require('dotenv').config();
const http = require('http');
const fs = require('fs');
const path = require('path');
const logger = require('./utils/logger');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  logger(req);

  let filePath = '';
  switch (req.url) {
    case '/':
      filePath = './routes/home.js';
      break;
    case '/about':
      filePath = './routes/about.js';
      break;
    case '/contact':
      filePath = './routes/contact.js';
      break;
    default:
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Page Not Found');
      return;
  }

  require(filePath)(req, res);
});

server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
