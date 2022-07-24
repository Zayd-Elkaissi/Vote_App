const express = require("express");
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_vote"
});

app.post("/create", (req, res) => {
   console.log(req.body)
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    if (name && email && password !== "") {
        db.query("INSERT INTO admin( `nameAdmin` , `emailAdmin`, `modPa`) VALUES ( ? , ? , ?)",
            [ name, email, password]
        );
    }
});

// db.query("INSERT INTO superadmin( `nameSup` , `emailSup`, `modPa`) VALUES ( ? , ?, ?)",
// ["Mohammad", "mohammad.mnare@gmail.com", "Moha"]
// );

// const useRoutes = require("./routes/user");
// app.use("/login", useRoutes);

app.post("/:login", (req, res) => {
    // res.send("hello");
    const namelog = req.body.name;
    const passwordlog = req.body.password;
    db.query("SELECT * FROM admin WHERE emailAdmin = ? AND modPa = ?",
        [namelog, passwordlog],
        (err, result) => {
            if (err) {
                res.send(err);
            } else {
                if (result.length > 0) {
                    res.send(result);
                }
                else {
                    res.send({message:"Wrong name or password"});
                }
            }
        })
});

app.post('/:logout', (req, res) => {
    req.logOut()
     return res.redirect('/login');
  });

  app.get('/:get', (req, res) => {
    db.query(" SELECT * FROM admin",   (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
    
  });

app.listen(3023);