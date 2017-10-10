// SERVER-SIDE JAVASCRIPT
// run npm install to install all required packages before starting server

var express = require('express');
var app = express();


// MIDDLEWARE
app.use(express.static('public'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// Allow CORS:
// not necessary since we'll be making requests from a js file
  // that we are also serving (as static assets in public)
// app.use(function(request, response, next) {
//   response.header("Access-Control-Allow-Origin", "*");
//   response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// ROUTES
// Root Route
app.get('/', function (request, response) {
  response.sendFile('views/index.html' , { root : __dirname});
});

app.get('/pickanumber', function(req, res) {
  var answer = 33;
  var guess = parseInt(req.query.guess);
  // res.send("Your guess is: "+guess);
  if (guess === answer) {
    res.send("Nailed it!!");
  };
  if (guess < answer) {
    res.send("Your guess of "+guess+" is too low. Try again.")
  };
  if (guess > answer) {
    res.send("Your guess of "+guess+" is too high. Try again.")
  };
})

// example of multiply query search
// http://localhost:3000/multiply?x=3&y=2
// app.get('/multiply', function(req, res) {
//   var x = parseInt(req.query.x);
//   var y = parseInt(req.query.y);
//   res.send("Your result is: "+x*y);
// })



// Gallery View Route


// The Number Guessing Game


// Gallery


// SERVER START
var port = 3000;
app.listen(port, function(){
  console.log('Server Running at localhost:3000/');
});
