const { getCart } = require("./getCartAch67");

exports.deleteItem = function(req,res){
    console.log("Received a DELETE request for removeItemAch67");
    res.header("Content-Type: application/json");

    
    let newItem = { sku: req.body.sku, name: req.body.name, quantity: req.body.quantity, 
                    price: req.body.price};
    setCart(newItem);
    res.send(inventory);
}