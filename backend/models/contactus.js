const db = require('../config/dbConfig');

class Conatactus {
  static sendMessage(messageData, callback) {
    const { firstname, lastname, phoneno, emailid, message } = messageData
    console.log(messageData)
    const sql =  `INSERT INTO contactUs (firstName, lastName, phoneNo, email, message)
    VALUES (?, ?, ?, ?, ?)`
    db.query(sql, [ firstname, lastname, phoneno, emailid, message ], (err, results) => {
      if (err) { return callback(err, null); }
      callback(null, results);
    });
  } 
}

module.exports = Conatactus;