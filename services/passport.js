const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");
const User = mongoose.model("users");
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.GOOGLE_CLIENT_ID,
      clientSecret: keys.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log("accessToken:", accessToken);
      // search collection for profile.id, returns Promise
      const existingUser = await User.findOne({ googleId: project.id });
      // we have a record wit the ID
      if (existingUser) {
        return done(null, existingUser);
      }
      // no record found create new User
      const newUser = await new User({ googleId: profile.id }).save()
          done(null, user);
    }
  )
);
