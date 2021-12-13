let express = require('express');
let app = express();
let veg = require('./Route/veg');
let nonveg = require('./Route/nonveg');


app.use('/veg',veg);

app.use('/nonveg',nonveg);







app.listen(4000);