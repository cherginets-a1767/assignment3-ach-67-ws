exports.addItem = function(req,res){
    console.log("Received a POST request for addItemAch67");
    res.header("Content-Type: application/json");

    
    let newItem = { sku: req.body.sku, name: req.body.name, quantity: req.body.quantity, 
                    price: req.body.price};
    setCart(newItem);
    res.send(inventory);
}