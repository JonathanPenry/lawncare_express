////////////
// MODELS //
////////////
// Models are made for each table on the database
// The data model is a Javascript module that connects to the database and 
// exports some functions that let us operate on the data.
// All models will need to be attached to routes (here it's admin.routes.js)
// CRUD (Create/Read/Update/Delete)


/////////////
// IMPORTS //
/////////////
const pool = require("../config/mysql.conf");
const bcrypt = require("bcrypt");


///////////////////////////
// LOGIN HELPER FUNCTION //
///////////////////////////
function isInvalid(val, min, max) {
    return !val || val.length < min || val > max;
}
/////////////////
// ADMIN LOGIN //
/////////////////
    // The login function belongs in admin.models.js file
    // When they go to post (send up) information at /admin to log-in
    //Login
async function login(res, username, password) {
    try {
        if (isInvalid(username, 8, 20) || isInvalid(password, 8, 20)) {
            throw "Invalid Data Provided";
        }
        // Check the database for the username provided, await the reponse before moving on
        let [users] = await pool.query("SELECT * FROM employees WHERE employees.username = ?", [username])
        // If no user exists send that response
        if (users.length === 0) {
            throw "Invalid username"    //should be "Invalid username or password"
        }
        // IF  it does match, check the password with bcrypt.
        // Grab the one user they provided [0] and check the plaintext password
        // Match returns a boolean true or false
        const match = await bcrypt.compare(password, users[0], password);
        //if they don't match, send them away
        if (!match) {
            throw "Invalid password"    //should be "Invalid username or password"
        }
        //if they do match, allow access
        res.send({ success: true, data: { username: users[0].username }, error: null });
    } catch (err) {
        return res.send({ success: false, data: null, error: err });
    }
}


//////////////////////////////////////
// ADMIN GET CUSTOMER DATABASE LIST //
//////////////////////////////////////
// Function to view all todos
// Just need to do a SELECT * from the database so no need to pass anthing else
async function all(res) {
    try {
        // Try to get all data from table customer_info on lanwcare_app database
        // Can get sample of SQL from MAMP server by clicking SQL
        // const [customers] is necessary because it's what we're actaully getting back in the return (data: customers)
        const [customers] = await pool.query("SELECT * FROM customer_info");
        // If successsful, send success message
        return res.send({ success: true, data: customers, error: null });
    } catch (err) {
        // Send error message if unsuccessful
        return res.send({ success: false, data: null, error: err });
    }
}


/////////////
// EXPORTS //
/////////////
module.exports.login = login;
module.exports.all = all;