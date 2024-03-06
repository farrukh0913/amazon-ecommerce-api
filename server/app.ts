import express from "express";
import { routes } from './routes';
import { startServer, configureDatabase } from './config';

const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb',     extended:true  },));
app.use(bodyParser.json({limit: '50mb'}));

app.use(cors({
    origin: "*"
}
));

app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET,PUT, POST, PATCH, DELETE, OPTIONS");
    next();
});


routes(app);
configureDatabase();
startServer(app);