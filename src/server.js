import express from 'express';
import configViewEngine from './configs/viewEngine.js';
import * as dotenv from 'dotenv';
dotenv.config();
import initWebRoute from './route/web.js';

const app = express();
const port = process.env.PORT;

//setup view engine
configViewEngine(app);

//init web route
initWebRoute(app);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})