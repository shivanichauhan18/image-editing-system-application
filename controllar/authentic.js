let knex1 = require("../model/connection")
const path = require('path');
let jwt = require('jsonwebtoken');
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
        let value=result[0]
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

    console.log(emails, passwords, stages, uid)


    let response = knex1.select(emails, passwords)
    response.then((data) => {
        // console.log(data)
        if (data.length == 0) {
            res.send("your email is incorrect...")
        } else if (data[0]["password"] === passwords) {
            console.log("aaya")
            let token = jwt.sign({
                "user": data[0]
            }, "secret_key")
            jwt.verify(token, "secret_key", (err, rsult) => {
                if (data[0]["user_id"] == uid && stages == "student") {
                    console.log("succesfully login")
                    res.redirect("/login_account")
                    // res.sendFile(path.join(__dirname+"/view/introduction.html"))

                } else if ("instrouctore" == stages) {
                    console.log("nhi aaya")
                    res.redirect("/instractor_page")
                } else {
                    console.log("bhai majburi")
                    res.send("you are not a instructor")

                }
            })
        }
    }).catch((err) => {
        res.send(err)
    })
})

module.exports = router;