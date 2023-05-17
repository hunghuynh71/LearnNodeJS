import module from 'module'

let getHomePage = (req, res) => {
    //logic 

    return res.render('index.ejs');
}

export default getHomePage;

// module.exports = {
//     getHomePage
// }