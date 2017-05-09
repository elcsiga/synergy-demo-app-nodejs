const passportLocalMongooseEmail = require('passport-local-mongoose');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    jwtClaims: {},
    params: {}
});
UserSchema.plugin(passportLocalMongooseEmail, {
    usernameField: 'email'
});

module.exports = mongoose.model('User', UserSchema);
