
exports.getCart = function(req,res){
    console.log("Received a GET request for getCartAch67");
    res.header("Content-Type: application/json");
    
    
    res.send(cart);
}