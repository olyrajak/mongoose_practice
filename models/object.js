var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userSchema = new Schema({
    name: string,
    age: Number,
    isAdmin: boolean,
    currentDate: Date,

}, { timestamps: true });

var objSchema = new Schema({
    title: { name: string, lowercase: true }
})