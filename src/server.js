//const express = require('express')
import express from 'express';
//import path from 'path';
//import configViewEngine from './configs/viewEngine';

const app = express();
const port = 3000;
//const __dirname = path.resolve(path.dirname(''));

//configViewEngine(app);

app.get('/', (req, res) => {
    //res.sendFile('/src/views/index.html', { root: __dirname })

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})