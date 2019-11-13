const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

var books = [

];

app.get('/', function (req, res){

});



// the GET "books" API endpoint
app.get('/api/books', function(req, res){
  res.send(books);
});

// POST endpoint for creating a new book
app.post('/api/book', function (req, res) {
  // calculate the next ID
  let id = 1;
  if (books.length > 0) {
      let maximum = Math.max.apply(Math, books.map(function (f) { return b.id; }));
      id = maximum + 1;
  }
  let new_book = {"id": id, "title": req.body.name};
  books.push(new_book);
  res.send(new_book);
});



//HTTP listner
app.listen(port, () => console.log(`App listening on port ${port}!`));
module.exports = app;
