module.exports = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Contact Page');
};
