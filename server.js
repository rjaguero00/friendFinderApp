// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Customers (DATA)
// =============================================================
var tables = [
    {
        "customerName": "Penis",
        "phoneNumber": "520-123-4567",
        "customerEmail": "penis@pubes.com",
        "customerID": "Penis"
    },
    {
        "customerName": "Balls",
        "phoneNumber": "602-301-5251",
        "customerEmail": "balls@nuts.com",
        "customerID": "Balls"
    }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

// Displays all tables
app.get("/api/tables", function (req, res) {
    return res.json(tables);
});

// // Displays a single character, or returns false
// app.get("/api/characters/:character", function(req, res) {
//   var chosen = req.params.character;

//   console.log(chosen);

//   for (var i = 0; i < characters.length; i++) {
//     if (chosen === characters[i].routeName) {
//       return res.json(characters[i]);
//     }
//   }

//   return res.json(false);
// });

// Create New Table Reservations - takes in JSON input
app.post("/api/tables", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newTable = req.body;

    // Using a RegEx Pattern to remove spaces from newtable
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    //newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();

    console.log(newTable);


    tables.push(newTable);
    console.log(tables);

    res.json(newTable);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});