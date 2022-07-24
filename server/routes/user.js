// var express = require("express");
// var router = express.Router();
// var User require("../")


// router.post("/login", async (req, res) => {
//     // res.send("hello");
//     const namelog = req.body.name;
//     const passwordlog = req.body.password;
//     db.query("SELECT * FROM login WHERE name = ? AND password = ?",
//         [namelog, passwordlog],
//         (err, result) => {
//             if (err) {
//                 res.send(err);
//             } else {
//                 if (result.length > 0) {
//                     res.send(result);
//                 }
//                 else {
//                     res.send({message:"Wrong name And password"});
//                 }
//             }
//         })
        // req.login(user, function(err) {
        //     if (err) { return next(err); }
        //     return res.redirect('/users/' + req.user.username);
        //   });
// });


// // routes.exports = router;
// module.exports = router;