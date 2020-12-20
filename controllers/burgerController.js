var express = require("express");

var router = express.Router();

var burger = require("../models/burgers.js");

//create routes
router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devour], function(result) {
        res.json({ id: result.insertId });
    });
});

module.exports = router;