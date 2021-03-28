///////////
// ROUTE //
///////////
// ROUTE is a section of Express code that associates: an HTTP verb ( GET , POST , PUT , DELETE , etc.), 
// a URL path/pattern, and a function that is called to handle that pattern.


const express = require("express");
const router = express.Router();
    // import functions from the admin.model 
const loginFunctions = require("../Models/admin.model");
const customers = require("../Models/admin.model");


/////////////////
// ADMIN LOGIN //
/////////////////
router.post("/login", (req, res) => {
    loginFunctions.login(res, req.body.username, req.body.password);
    console.log("Admin Routes Post Login")
});


//////////////////////////////////////
// ADMIN GET CUSTOMER DATABASE LIST //
//////////////////////////////////////
router.get("/all", (req, res) => {
    console.log("Admin Routes Get All")
    return customers.all(res);
})


/////////////
// EXPORTS //
/////////////
module.exports = router;