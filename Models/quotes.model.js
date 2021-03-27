////////////
// MODELS //
////////////
// Models are made for each table on the database
// The data model is a Javascript module that connects to the database and 
// exports some functions that let us operate on the data.
// All models will need to be attached to routes (here it's quotes.routes.js)
// CRUD (Create/Read/Update/Delete)


/////////////
// IMPORTS //
/////////////
const pool = require("../config/mysql.conf")


////////////////////////////////////
// ADD QUOTE REQUESTS TO DATABASE //
////////////////////////////////////
// Function to add quotes to database
// Pass in the things that are needed for the action (response, todo)
async function add(res, quotes) {
    try {
        // Try to add the quote request using await and SQL command (await command automatically goes to error if unsuccessful)
        // Get SQL from MAMP database by going to the quotes db and clicking insert button and deleting thing not needed
        // ?'s are for sql to prevent sql injection attacks. 
        // The values inside the [ ] are substituted for the VALUES (?, ?, ...) 
        await pool.query
        ("INSERT INTO customer_info(firstName, lastName, businessName, contactName, address, city, state, zip, email, phone, mow, fertilize, aeration, overseed, mulch, cleanup, snow) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", 
        [quotes.firstName, quotes.lastName, quotes.businessName, quotes.contactName, quotes.address, quotes.city, quotes.state, quotes.zip, quotes.email, quotes.phone, quotes.mow, quotes.fertilize, quotes.aeration, quotes.overseed, quotes.mulch, quotes.cleanup, quotes.snow])
        // If successsful, send success message
        return res.send({ success: true, data: "Quote request successfully submitted.", error: null });
    } catch (err) {
        // Send error message if unsuccessful
        return res.send({ success: false, data: null, error: err });
    }
}


/////////////
// EXPORTS //
/////////////
module.exports.add = add;