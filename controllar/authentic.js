let knex1 = require("../model/connection")
const path = require('path');
let jwt = require('jsonwebtoken');
let config = require("../config/config")
const router = require('express').Router();
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({
    extended: false
});


router.get('/create_user_account', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/user_account.html'));
});

router.get("/login_account", function (req, res) {
    res.sendFile(path.join(__dirname + "/view/introduction.html"))
})


router.post("/user_account", urlencodedParser, (req, res) => {
    let mail = req.body.email
    let resp = knex1.check_mail(mail)
    resp.then((result) => {
        let value = result[0]
        if (value.cnt > 0) {
            res.send("Your Email is already exist. try other Email")
        } else {
            let psd = req.body.password
            let rep_pwd = req.body.rpw
            let n = psd.localeCompare(rep_pwd);
            if (n == 1) {
                res.send({
                    "password": "you enter repeat password is wrong"
                })
            } else if (n == 0) {
                let userDetails = {
                    name: req.body.name,
                    email: mail,
                    password: psd,
                    confirm_psw: rep_pwd,
                    user_id: req.body.user_id,
                    stage: req.body.stage
                }
                let response = knex1.insert_token(userDetails)
                response.then((data) => {
                    res.redirect("/login_account")
                }).catch((err) => {
                    console.log(err)
                    res.send(err)
                })
            }
        }
    }).catch((err) => {
        console.log(err)
        res.send(err)
    })
})


router.post("/login", urlencodedParser, function (req, res) {
    let emails = req.body.email;
    let passwords = req.body.password;
    let stages = req.body.browser
    let uid = req.body.user_id
    let response = knex1.select(emails, passwords)
    response.then((results) => {
        if (results.length == 0) {
            res.send("your email is incorrect...")
        } else {
            var data = JSON.stringify(results);
            let expiresIn = 3600
            config.payload.data = data
            jwt.sign(config.payload, config.secret, {
                algorithm: 'HS256',
                expiresIn: expiresIn
            }, function (err, token) {
                if (err) {
                    console.log('Error occurred while generating token');
                    console.log(err);
                    return false;
                } else {
                    if (token != false) {
                        jwt.verify(token, config.secret, (err, rsult) => {
                            if (err) {
                                res.sendStatus(403);
                            } else {
                                if (results[0]["user_id"] == uid && stages == "student") {
                                    res.redirect("/login_account")
                                } else if ("instrouctore" == stages) {
                                    res.redirect("/instractor_page")
                                } else {
                                    res.send("you are not a instructor")
                                }
                            }
                        })
                    } else {
                        res.send("Could not create token");
                        res.end();
                    }
                }
            })
        }
    }).catch((err) => {
        res.send(err)
    })
})

module.exports = router;