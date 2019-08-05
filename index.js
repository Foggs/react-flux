const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const cookieSession = require("cookie-session")
const passport = require("passport");
const keys = require("./config/keys");

require("./models/User");
require("./services/passport");

mongoose.connect(keys.MLab_URI, { useNewUrlParser: true },
  (err,client) => {
    if (err) {
      console.log(err);
    }
    console.log(" db connect!!!");
});

const app = express();
app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  keys: [keys.cookieKey]
 }))
 app.use(passport.initialize());
 app.use(passport.session());

 
// pass the app into the routes Object to attach routes
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
// get environment variable PORT if available
app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});
