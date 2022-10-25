var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: { type: String, require: true },
    age: { type: Number, minlength: 18, maxlength: 30 },
    email: { type: String, lowercase: true, trim: true, match: /@/ },
    password: { type: String, minlength: 5, maxlength: 15 }
}, {
    timestamps: true
});
module.exports = mongoose.model("User", userSchema);