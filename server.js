const express = require('express');
const logger = require('morgan');
var User = require('./models/validator');

const mongoose = require('mongoose')

mongoose.connect(
    "mongodb://localhost:27017/sample", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected to MongoDB");
        }
    }
);

const app = express();
app.use(express.json());
app.post('/userdetails', (req, res) => {
    // console.log(req.body);
    User.create(req.body, (err, product) => {
        // console.log(err, product);
        console.log(err);
        res.json(product);
    });
});


app.get('/userdetails', (req, res) => {
    User.find({ "_id": "63583d95d31585d12e6e0c2f" }, (err, products) => {
        console.log(err, products);
        res.json({ products: products });
    })
})
app.get('/userdetails/:id', (req, res) => {
        var id = req.params.id;
        User.findById(id, (err, products) => {
            console.log(err);
            res.json({ products: products });
        })
    })
    // Id fiels update use findIdAndUpdate

app.put('/userdetails/:id', (req, res) => {
        var id = req.params.id;
        User.findByIdAndUpdate(id, req.body, { new: true }, (err, Updateproducts) => {
            console.log(err);
            res.json({ products: Updateproducts });
        });
    })
    // any fiels update use findOneAndUpdate
app.put('/userdetailsdd/:id', (req, res) => {
    var id = req.params.id;
    User.findOneAndUpdate(id, req.body, { new: true }, (err, Updateproducts) => {
        console.log(err);
        res.json({ products: Updateproducts });
    });
})
app.use(logger)



app.listen(3000, () => {
    console.log("Server running on port 3000")
})