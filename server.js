const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose');
    const jwt = require('jsonwebtoken');
    const config = require('./DB');
    const app = express();
    const userRoutes = require('./routes/user.route');
    const loginRoutes = require('./routes/login.route')
    mongoose.Promise = global.Promise;
    //connect database with backend
    mongoose.connect(config.DB, { useNewUrlParser: true }).then(
        () => {console.log('Database is connected') },
        err => { console.log('Can not connect to the database'+ err)}
      );
    
 
      app.use(bodyParser.json());
      app.use(cors());
      app.use('/user',userRoutes);
      app.use('/login',loginRoutes);

    let port = process.env.PORT || 4000;

    const server = app.listen(port,()=>{
        console.log('Listening on port ' + port);
    });