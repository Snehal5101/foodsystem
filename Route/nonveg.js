const Route = require("express").Router();

let nonveg=[{dishname:"Chicken Tikka Masala",price:"290"},{dishname:"Butter Chicken",price:"450"},{dishname:"Hydeabadi dum Biryani",price:"410"},{dishname:"Surmai Fry",price:"500"},{dishname:"Mutton Sp. Masala",price:"390"}]



Route.get('/', function (req, res) {
    res.send("Food is ready for you. Non-Vegeterian Food is available here ")
});

Route.get('/menu', function (req, res) {
    res.send(nonveg)
});


Route.get('/menu/:food', function (req, res) {
   let food = req.params.food;
   const Menu= nonveg.findIndex(function(nonveg,index){
    return nonveg.dishname === food });
   res.json(nonveg[Menu]);
})

Route.post('/menu/insert', function(req,res){
    let insert = req.body;
    const newmenu=nonveg.push(insert);
    res.json(newmenu)
})


module.exports = Route;