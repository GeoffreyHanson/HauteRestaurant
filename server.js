var express = require("express");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
 res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
 res.sendFile(path.join(__dirname, "tables.html"));
});


app.get("/api/reservations", function(req, res) {
   res.sendFile(path.join(__dirname, "reserve.html"));
   return res.json(reservations);
});

// Displays a single character, or returns false
//app.get("/api/characters/:character", function(req, res) {
//  var chosen = req.params.character;

// console.log(chosen);

 //for (var i = 0; i < characters.length; i++) {
   if (chosen === reservations[i].routeName) {
     return res.json(reservations[i]);
   }
 { 
     return res.json(false);
 }

app.post("/api/reservatiosn", function(req, res) {

 var newRes = req.body;


 newRes.routeName = newRes.name.replace(/\s+/g, "").toLowerCase();

 console.log(newRes);

characters.push(newRes);

res.json(newRes);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
 console.log("App listening on PORT " + PORT);
});