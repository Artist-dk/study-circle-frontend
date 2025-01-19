// messageModel.js
const mysql = require('mysql');

const db = require('../config/dbConfig');

class Settings {
  static theme(theme,userId,callback) {
    const sql = `UPDATE settings SET theme = ? WHERE id = 1`;
    
    db.query(sql, [theme, userId], (err, res) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, res);
    });
  }
}

module.exports = Settings;
