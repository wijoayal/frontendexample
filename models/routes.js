const mongoose = require('mongoose')

const uri = "mongodb+srv://root:root@cluster0.6b2ol.mongodb.net/router_db?retryWrites=true&w=majority";

mongoose.connect(process.env.uri || 'mongodb://localhost:27017/router_db', {
    useNewUrlParser: true,
},
(err) => {
    if (!err) {
        console.log('Connection suceeded');
    } else {
        console.log('Error in connection' + err);
    }
});

require('./routes.model');