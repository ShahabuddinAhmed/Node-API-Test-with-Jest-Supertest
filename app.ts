import express from 'express';
const app = express();
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';

const userRoutes = require('./api/route/user');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.use('/user', userRoutes);

app.use(express.static('public'));

app.use((req, res, next) => {
    const error: any = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
     res.json({
         error: {
             message: error.message
         }
     });
});

module.exports = app;