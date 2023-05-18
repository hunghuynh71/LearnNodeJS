import module from 'module'
import connection from '../configs/connectDB.js'


let getHomePage = (req, res) => {
    //logic 
    // simple query
    let data = [];
    connection.query(
        'SELECT * FROM `users`',
        function (err, results, fields) {
            console.log('>>>>> Check mysql');
            data = results.map((row) => { return row });
            console.log(data);

            //return res.render('index.ejs', { dataUsers: JSON.stringify(data) });
        })

    return res.render('index.ejs', { dataUsers: JSON.stringify(data) });
}

//dau '{}' giup nodejs hieu n la function
export default { getHomePage };

// module.exports = {
//     getHomePage
// }