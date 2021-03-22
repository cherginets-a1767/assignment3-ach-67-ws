// import { useState, useEffect } from "react";

//Constants
const express = require('express');
const bodyParser = require('body-parser');
// const { v4: uuidv4 } = require('uuid');
const cors = require('cors');

const app = express();
const port = 8000;

// const [cart, setCart] = useState([]);
// const [inventory, setInventory] = useState([]);

//Allow pre-flight checks
const corsOptions = {
    origin: '*'
}

//Use cors
app.use(cors());

//Use body-parser
app.use(bodyParser.json())


const cart = [];
//Sproutmustard?
const inventory = [
       {sku: "59779-642", name: "Napkin - Beverege 1 Ply", quantity: 15, price: 37.99},
       {sku: "76237-199", name: "Sproutsmustard Cress", quantity: 15, price: 35.99},
       {sku: "0519-6399", name: "Wine - White, Mosel Gold", quantity: 15, price: 11.99},
       {sku: "37808-450", name: "Octopus - Baby, Cleared", quantity: 15, price: 2.99},
       {sku: "29860-217", name: "Cake - Mini Cheesecake", quantity: 15, price: 2.99},
       {sku: "63481-553", name: "Coffee Guatemala Dark", quantity: 15, price: 48.99},
       {sku: "57881-334", name: "Sugar - Crumb", quantity: 15, price: 34.99},
       {sku: "67938-0993", name: "Fish - Halibut, Cold Smoked", quantity: 15, price: 17.99},
       {sku: "52125-038", name: "Muffin Batt - Ban Dream Zero", quantity: 15, price: 2.99},
       {sku: "65862-290", name: "Juice - Propel Sport", quantity: 15, price: 5.99},

];

//Route
const cartRouter = require('./routes/cartAch67');
const inventoryRouter = require('./routes/inventoryAch67');

app.use('/cartAch67', cartRouter);
app.use('/inventoryAch67', inventoryRouter);


app.listen(port, () => {
    console.log(`Web Service Listening on port ${port}`)
})