// Import express
let express = require('express');
// Import Mongoose
let mongoose = require('mongoose');
// Initialise the app
let app = express();

// Import routes
// Configure bodyparser to handle post requests

// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/', { useNewUrlParser: true});
var db = mongoose.connection;

// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

// Setup server port
var port = process.env.PORT || 5050;

// Send message for default URL
app.get('/', (req, res) => res.send('capaio MEAN'));


// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});

