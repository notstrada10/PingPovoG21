require('dotenv').config()
import express, { Application, Request, Response } from 'express';
import initAPI from './api';

let app: express.Application;
let port: any;

app = express();
app.use(express.json());

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

initAPI(app);

port = process.env.PORT || 9999;


app.get('/', (req: Request, res: Response) => {
    res.send('G21 Ingegneria del Software - Backend')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})