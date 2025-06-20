const express = require('express');
const app = express();
const PORT = 8080;

app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url} - ${new Date().toISOString()}`);
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('Welcome to Express!');
});

app.get('/about', (req, res) => {
  res.send('About this app');
});

app.get('/submit', (req, res) => {
  res.send(`
    <form action="/submit" method="POST">
      <input type="text" name="name" placeholder="Enter your name" required />
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post('/submit',(req, res) => {
  const { name } = req.body;
  res.send(`Thank you, ${name}!`);
});



// 404 handler
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
