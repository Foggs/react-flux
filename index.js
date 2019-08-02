const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

passport.use(new GoogleStrategy({
    clientID: keys.GOOGLE_CLIENT_ID,
    clientSecret: keys.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  }, 
  (accessToken, refreshToken, profile, done) => {
    console.log('profile', profile);
    console.log('accessToken', accessToken);
    console.log('refreshToken', refreshToken);
  }
));
 

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

app.get('/auth/google', 
    passport.authenticate('google', {
    scope: ['profile', 'email']
}));

app.get('/auth/google/callback', 
    passport.authenticate('google'));

// app.get('/auth/google', (req, res) => {
//     res.sendFile(path.resolve('client', 'build', 'index.html'));
// });

const PORT = process.env.PORT || 5000;
// get environment variable PORT if available
app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});