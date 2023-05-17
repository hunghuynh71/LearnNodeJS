import module from 'module'
// get the client
//const mysql = require('mysql2');
import sql from 'mysql2'
const mysql = sql;

let getHomePage = (req, res) => {
    //logic 
    // create the connection to database
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'learn_nodejs'
    });

    // simple query
    connection.query(
        'SELECT * FROM `users`',
        function (err, results, fields) {
            console.log(results); // results contains rows returned by server
            //console.log(fields); // fields contains extra meta data about results, if available
        }
    );

    return res.render('index.ejs');
}

//dau '{}' giup nodejs hieu n la function
export default { getHomePage };

// module.exports = {
//     getHomePage
// }