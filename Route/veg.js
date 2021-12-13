const Route = require("express").Router();

let veg=[{dishname:"Mix veg",price:"265"},{dishname:"Paneer Masala",price:"310"},{dishname:"Mushroon kadai",price:"310"},{dishname:"Baigan Bharta",price:"240"},{dishname:"Malai Kofta",price:"340"}]

Route.get('/', function (req, res) {
    res.send("Food is ready for you. Vegeterian Food is available here ")
});

Route.get('/menu', function (req, res) {
    res.send(veg)
});

Route.get('/menu/:food', function (req, res) {
    let food = req.params.food;
    const Menu= veg.findIndex(function(veg,index){
     return veg.dishname === food });
    res.json(veg[Menu]);
 })


 Route.post('/menu/insert', function(req,res){
     let insert = req.body;
     const newmenu=veg.push(insert);
     res.json(newmenu)
 })


module.exports = Route;