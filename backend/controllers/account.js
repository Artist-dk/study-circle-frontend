
const db = require('../config/dbConfig');

function generateToken(length = 32) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';
  for (let i = 0; i < length; i++) {
      token += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return token;
}

const Account = {
  login: (req, res) => {
    if(req.body.username) {
      try {
        db.query(`SELECT * FROM users WHERE username = ?`, [req.body.username], (error, result) => {
          if(error) {
            return res.status(400).send("Server error")
          }
          if(!result[0]) {
            return res.status(200).send("data not found")
          }
          if(req.body.password !== result[0].password) {
            return res.status(200).send("Invalid credentials")
          }
          req.session.visited = true;
          req.session.user = result[0]
          res.status(201).cookie("spy", req.session.id, {maxAge: 1000 * 60 * 10 }).send(req.session.id);
        })
      } catch(err) {
        res.status(400).send("Server error");
      }
    } else {
      res.send("Invalid credentials").status("200");
    }
  },

  logout: (req, res) => {
    if(req.session && req.session.id) {
      req.session.destroy();
    }
    res.status(200).clearCookie("spy").send("Loged out");
  },

  createNew: (req, res) => {

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const userName = req.body.userName;
    const phoneNo = req.body.phoneNo;
    const email = req.body.email;
    const password = req.body.password;
    const description = req.body.description;
    const confirmPassword = req.body.confirmPassword;
    
    console.log(firstName, lastName, userName, phoneNo, email, password, description)

    if(!firstName) return res.send("first name is required")
    if(!lastName) return res.send("lastName name is required")
    if(!userName) return res.send("userName name is required")
    // if(!phoneNo) return res.send("phoneNo name is required")
    if(!email) return res.send("email name is required")
    if(!password) return res.send("password name is required")
    if(!description) return res.send("description name is required")
    
    if (password !== confirmPassword) {
      return res.send("Password and confirm password don't match")
    }


    const sql = `INSERT INTO users (firstName, lastName, userName, phoneNo, email, password, description)
    VALUES (?, ?, ?, ?, ?, ?, ?)`

    db.query(sql, [firstName, lastName, userName, phoneNo, email, password, description], (err, results) => {
      if (err) { 
        if(err.code == 'ER_DUP_ENTRY') {
          return res.send("duplicate entry")
        }
        return res.send("Database error")
      }
      res.send("Account created successfully")
    });
  }
}




module.exports  = Account;