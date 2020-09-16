const knex1 = require("../model/connection")
let fs = require("fs");
// const multer = require('multer');
let ejs = require("ejs");

const express = require('express');
const path = require('path');
let pdf = require("html-pdf");
var bodyParser = require("body-parser");
const parser = bodyParser.urlencoded({
    extended: false
})
let router = express.Router()

var fileUpload = require('express-fileupload');
router.use(fileUpload());



router.get('/introduction', function (req, res) {
    res.sendFile(path.join(__dirname + '/shivani.txt'));
});

// con a = require("./view/shivi.json")

router.get("/editing_task", function (req, res) {
    res.sendFile(path.join(__dirname + "/view/student_task.html"))
})

router.get("/submission", function (req, res) {
    res.sendFile(path.join(__dirname + "/view/submit_task.html"))
})

router.get("/bigneer_task", function (req, res) {
    res.sendFile(path.join(__dirname + "/view/bigner.html"))
})

router.get("/intermediate", (req, res) => {
    res.sendFile(path.join(__dirname + "/view/mediun_student.html"))

})

router.get("/shivani", (req, res) => {
    res.render("end", {
        data: {
            id: 30
        }
    })
})

router.get("/advanced_student", (req, res) => {
    res.sendFile(path.join(__dirname + "/view/advanced_student.html"))

})

router.get("/confirming_detail", (req, res) => {
    res.sendFile(path.join(__dirname + "/view/end.html"))

})

router.get("/instractor_page", (req, res) => {
    res.sendFile(path.join(__dirname + "/view/instractor_page.html"))
})


router.post("/student_task", parser, (req, res) => {
    var students_task = req.body.browser
    if (students_task === "Beginner") {
        res.redirect("/bigneer_task")
    } else if (students_task === "Intermediate") {
        res.redirect("/intermediate")
    } else if (students_task = "Advanced") {
        res.redirect("/advanced_student")
    } else {
        res.send("You didn't choose you level")
    }
})



router.post("/generateReport", (req, res) => {
    var foo = require('./view/shivi.json');
    ejs.renderFile(path.join(__dirname, './views/', "report-template.ejs"), {
        students: foo
    }, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            let options = {
                "height": "11.25in",
                "width": "8.5in",
                "header": {
                    "height": "20mm"
                },
                "footer": {
                    "height": "20mm",
                },
            };
            pdf.create(data, options).toStream(function (err, stream2) {
                console.log(err);
                stream2.pipe(res);
                stream2.on('end', function () {
                    try {
                        fs.unlink(mergeFileRes)
                    } catch (err) {
                        console.log(3090, "Did not delete file");
                    }
                })
            })
        }
    });
})

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, path.join(__dirname + "/images/"));
//     },
//     // By default, multer removes file extensions so let's add them back
//     filename: function (req, file, cb) {
//         console.log(req.file)
//         cb(null, file.fieldname + '-' + Date.now() + ".jpg");
//     }
// });

// var upload = multer({
//     storage: storage
// }).single('myfile');

router.post("/upload_multiple_images", parser, (req, res) => {
    try {
        let file = req.files.myfile
        // .team_image;
        console.log(file)
        if (file == undefined) {
            return res.send(`You must select a file.`);
        }

        if (file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/gif") {
            let file_name = file.name;
            console.log(file_name)
            file.mv('images/' + file_name, function (err) {
                if (err) {
                    if (err) throw err;
                }
                var studentDetails = {
                    email: req.body.email,
                    task: file_name
                }
                let response = knex1.student_task(studentDetails)
                response.then((results) => {

                    if (Array.isArray(results) && results.length) {
                        let ids = results[0]
                        let id = {
                            id: ids
                        }
                        res.render("end.ejs", {
                            data: id
                        });
                    } else {
                        res.send("You have error in your image upload please check it.")
                    }
                })
            })
        } else {
            message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
            res.render('index.ejs', {
                message: message
            });
        }

    } catch (err) {
        console.log(err);
    }
});

router.post("/upload_multiple_imagess", parser, function (req, res) {
    try {
        if (req.file == undefined) {
            return res.send(`You must select a file.`);
        }
        const file = req.file
        console.log(file)
        if (file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/gif") {
            var studentDetails = {
                email: req.body.email,
                task: file.path
            }
            let response = knex1.student_task(studentDetails)
            response.then((results) => {

                if (Array.isArray(results) && results.length) {
                    let ids = results[0]
                    let id = {
                        id: ids
                    }
                    res.render("end.ejs", {
                        data: id
                    });
                } else {
                    res.send("You have error in your image upload please check it.")
                }
            })
        } else {
            message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
            res.render('index.ejs', {
                message: message
            });
        }
        upload(req, res, function (err) {
            if (err) {
                return res.send("Something went wrong!");
            }
        });
    } catch (err) {
        console.log(err);
    }
});


router.post("/submit_once_data", parser, function (req, res) {
    try {
        var studentDetails = {
            name: req.body.name,
            image_id: req.body.user_id,
        }
        let cluase = req.body.user_id
        let response = knex1.updateData(studentDetails, cluase)
        response.then((data) => {
            res.send(
                "Your image successfully added instrocture will check your image. Thank You"
            )
        })
    } catch (err) {
        res.send(err)
    }
});


router.get("/student_details", (req, res) => {
    let response = knex1.select_submit_data()
    response.then((data) => {
        res.render('student_details', {
            title: 'User List',
            userData: data
        })
    }).catch((err) => {
        console.log(err)
    })
})

router.get('/getimage', function (req, res) {
    let resp = knex1.selectTask()
    resp.then((data) => {
        console.log(data)
        obj = JSON.parse(JSON.stringify(data));
        console.log(obj)

        res.render('view', {
            obj: obj
        });
        // Send the image to the browser.
    });
});

router.get("/user_list", (req, res) => {
    let response = knex1.select_submit_data()
    response.then((data) => {
        if (data.length > 0) {
            console.log(data)
            res.render('user_list', {
                title: 'User List',
                userData: data
            })
        } else {
            res.send("You checked all student assignment. there is nothing.")
        }

    }).catch((err) => {
        console.log(err)
    })
})

router.post("/add_grade", parser, (req, res) => {
    try {
        var grad = req.body.stu_grade
        var ids = req.body.stu_id
        const quries = knex1.updatGrade(ids, grad)
        quries.then((data) => {
            console.log(data)
            res.send("You give grade to all")
        }).catch((err) => {
            console.log(err)
            res.send(err)
        })
    } catch (er) {
        console.log(er)
        res.send(er)
    }


})

// .post("/submission_data",(req,res)=>{
//     if (req.url == '/fileupload') {
//         var form = new formidable.IncomingForm();
//         form.parse(req, function (err, fields, files) {
//           res.write('File uploaded');
//           res.send();
//         });
//       } else {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//         res.write('<input type="file" name="filetoupload"><br>');
//         res.write('<input type="submit">');
//         res.write('</form>');
//         return res.send();
//       }
// })



// // app.listen(3500, () => {
// //     console.log("server started on port 3500")
// // })

// // router.post("/student_grade", function (req, res) {
// //     var student = {
// //         name: req.body.name,
// //         email: req.body.email,
// //         student_grade: req.body.student_grade
// //     }
// //     if (student.student_grade <= 5 && student.student_grade >= 1) {
// //         let response = knex1.grade(student)
// //         response.then((data) => {
// //             res.send(data)
// //             res.redirect("/my_grade")
// //             console.log(data)
// //         })
//             .catch((err) => {
//                 console.log(err)
//             })

//     }

// })
// app.get("/my_grade", function (req, res) {
//     res.sendFile(path.join(__dirname + "/view/student_grade.html"))


// })
module.exports = router