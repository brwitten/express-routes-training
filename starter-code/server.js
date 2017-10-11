// SERVER-SIDE JAVASCRIPT
// run npm install to install all required packages before starting server

var express = require('express');
var app = express();

var artwork = [
  {
    title:"Campbell's Soup Cans",
    artist:"Andy Warhol",
    description:"32 Campbell's Soup Cans"
  },
  {
    title:"The Scream",
    artist:"Edvard Munch",
    description:"The works show a figure with an agonized expression against a landscape with a tumultuous orange sky."
  },
  {
    title:"The Persistence Of Memory",
    artist:"Salvador Dali",
    description:"This work of art is known to make people ponder on their way of life and the way they spend their time."
  },
  {
    title:"Girl With A Pearl Earring",
    artist:"Johannes Vermeer",
    description:"This beautiful painting by the Dutch artist Johannes Vermeer features, well… a girl with a pearl earring."
  }
];


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

app.get('/artwork', function(req,res) {
  res.json(artwork);
})

app.post('/artwork', function(req,res) {
  var newTitle = req.body.title;
  var newDesc = req.body.description;
  var newArtist = req.body.artist;
  var newArtwork = {title: newTitle, artist: newArtist, description:newDesc};
  artwork.push(newArtwork);
  res.json(artwork);
  console.log("success adding item");
})


// Gallery View Route


// The Number Guessing Game


// Gallery


// SERVER START
var port = 3000;
app.listen(port, function(){
  console.log('Server Running at localhost:3000/');
});
