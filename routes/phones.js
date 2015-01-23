/**
 * Created by Tomoe on 20-01-2015.
 */
var express = require('express');
var router = express.Router();
var phone = require("../facade/facade")

/* GET users listing. */
router.get('/', function (req, res) {

    phone.getAll(function (err, result) {
            if (err) {
                res.status(err.status||500);
                res.send(err.msg||{message: "error in retrieving all"})
                return;
            }

            res.send(result);
        }
    )


});

router.post('/', function (req, res) {
    console.log(JSON.stringify(req.body))
    phone.addPhone(req.body, function (err, result) {
        if (err) {
            res.status(500);
            res.end({message: "error in posting"})
        }
        console.log("added " + result)
        res.send(JSON.stringify(result));



    });

});
router.delete('/:name', function (req, res) {


    var removingcontact = req.params.name;
    phone.removeContact(removingcontact, function (err, result) {
        if (err) {
            res.status(400);
            res.end(err.msg||JSON.stringify({message: "error"}));
            return
        }

        console.log("deleted " + result);
        res.send(JSON.stringify(result));


    });
});




module.exports = router;
