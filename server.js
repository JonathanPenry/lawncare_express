/////////////
// IMPORTS //   // Uncomment at deploy // app.get("*", (req, res) => {res.sendFile("/build/index.html", {root:__dirname + "/"})});
/////////////
// Dotenv must go first
require("dotenv").config();                                 // Tells express the database connection info
const express = require("express");                         // Use express module
// const session = require("express-session");
const bodyParser = require("body-parser");                  // Allows for the body of the req/res to be read
const app = express();                                      // Creates an object of the express module                                
const PORT = process.env.PORT || 3000;                      // Defines localhost port as 3000 or port in .env (8080)
// const quotesRoutes = require("/Routes/quotes.routes");   // Connects quotes routes
// const adminRoutes = require("/Routes/admin.routes");     // Connects admin routes

/////////////
// APP.USE //
/////////////
// app.use mostly sets up middleware (bodyparcer is technically middleware)
// app.use(express.static(__dirname + "/build"));           // Build (deployment) needs to be at the top before app.use
// app.use(session({ secret: process.env.SECRET_KEY }));    // For connection to the database
app.use(bodyParser.urlencoded({ extended: false }));
// app.use("/admin", adminRoutes);


/////////////////
// HELLO WORLD //   // Just to make sure something displays
/////////////////
app.get('/',function(req,res)
{
res.send('Hello World!?');
});


///////////////
// APP.GET() //     // No middleware so I don't think I need this...
///////////////
    // APP.GET() function - routes the HTTP GET Requests to the path which is being specified with the specified callback functions. 
    // Syntax: app.get( path, callback )
    // Basically is it intended for binding the middleware to your application.
    // Path: It is the path for which the middleware function is being called.
    // Callback: Can be a middleware function or series/array of middleware functions.
// app.get("*", (req, res) => {res.sendFile("/build/index.html", {root:__dirname + "/"})});


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));