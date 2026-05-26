const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');      // views/index.ejs
});
app.get('/about', (req, res) => {
  res.render('about');      // views/about.ejs
});
app.get('/contact', (req, res) => {
  res.render('contact');    // views/contact.ejs
});
app.get('/episodes', (req, res) => {
  res.render('episodes');   // views/episodes.ejs
});

app.listen(3000, () => {
  console.log('http://localhost:3000/');
});