exports.getInv = function(req,res){
    console.log("Received a GET request for getInventory");

    res.header("Content-Type: application/json");
    res.send(inventory);
}