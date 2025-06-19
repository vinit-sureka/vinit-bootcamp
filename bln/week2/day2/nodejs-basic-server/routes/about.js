module.exports = (req, res) => {
    console.log(undefinedVariable); // bug here
   // console.log('Debugging: Checking variable existence');

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('About Us Page');
};
