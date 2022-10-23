var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userSchema = new Schema({
    name: string,
    age: Number
});