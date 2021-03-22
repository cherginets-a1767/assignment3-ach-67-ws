import { useState, useEffect } from "react";

//Constants
const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');

const app = express();
const port = 8000;

const [cart, setCart] = useState([]);
const [inventory, setInventory] = useState([]);

//Allow pre-flight checks
const corsOptions = {
    origin: '*'
}

//Use cors
app.use(cors());

//Use body-parser
app.use(bodyParser.json())