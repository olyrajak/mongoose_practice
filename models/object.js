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

var object = new Schema({
    name: string,
    age: Number,
    isAdmin: boolean,
    marks: [number],
    family: {
        father: string,
        mother: string
    },
    author: schema.Types.ObjectId


}, { timestamps: true })