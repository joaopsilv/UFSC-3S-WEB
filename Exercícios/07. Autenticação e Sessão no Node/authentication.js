const passport = require('passport');
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

const GOOGLE_CLIENT_ID = "696800127949-0ju6ii1n7tl6nft6imv5us67vpj8dpcf.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(new GoogleStrategy({ 
    clientID: GOOGLE_CLIENT_ID, 
    clientSecret: GOOGLE_CLIENT_SECRET, 
    callbackURL: "http://localhost:5000/google/callback", 
    passReqToCallback : true 
    }, 
    function(request, accessToken, refreshToken, profile, done){
        return done(null, profile);
    }
));

passport.serializeUser(function(user, done) {
    done(null, user)
})

passport.deserializeUser(function(user, done) {
    done(null, user)
})