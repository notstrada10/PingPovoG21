"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const api_1 = __importDefault(require("./api"));
let app;
let port;
app = (0, express_1.default)();
app.use(express_1.default.json());
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
(0, api_1.default)(app);
port = process.env.PORT || 9999;
app.get('/', (req, res) => {
    res.send('G21 Ingegneria del Software - Backend');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
