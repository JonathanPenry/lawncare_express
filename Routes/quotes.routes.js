///////////
// ROUTE //
///////////
// ROUTE is a section of Express code that associates: an HTTP verb ( GET , POST , PUT , DELETE , etc.), 
// A URL path/pattern, and a function that is called to handle that pattern.


/////////////
// IMPORTS //
/////////////
const express = require("express");
const router = express.Router();
// Importing functions from quotes.model.js
const quotesFunctions = require("../Models/quotes.model");


//////////////////////////////////////////
// POST QUOTE FORM CONTENTS TO DATABASE //
//////////////////////////////////////////
router.post("/add", (req, res) => {
    console.log("Quotes Routes Add")
    return quotesFunctions.add(res, req.body);
});


router.get("/add", (req, res) => {
    res.send("hello");
})


/////////////
// EXPORTS //
/////////////
module.exports = router;