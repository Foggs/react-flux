const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const authRoutes = require('./routes/authRoutes');

require('./services/passport');

const app = express();
// pass the app into the routes Object to attach routes 
authRoutes(app)

 

/* MIDDLEWARE */
app.use(bodyParser.json());
app.use(express.static('client/build'));


var opts = {
    server: {
        socketOptions: {keepAlive: 1}
    }
};

// mongoose.connect(keys.mongoURI, opts);
// var conn = mongoose.connection;

// conn.on('error', console.error.bind(console, 'connection error:'));  
 
// conn.once('open', function() {
//   // Wait for the database connection to establish, then start the app.                         
// });


/* ROUTE HANDLERS */
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve('client', 'build', 'index.html'));
// });



// app.get('/auth/google', (req, res) => {
//     res.sendFile(path.resolve('client', 'build', 'index.html'));
// });

const PORT = process.env.PORT || 5000;
// get environment variable PORT if available
app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});