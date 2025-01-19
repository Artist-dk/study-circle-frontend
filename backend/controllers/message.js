const { query } = require('express');
const db = require('../config/dbConfig');
const model = require('../models/message');

const Message = {
  fetchUsers: (req, res) => {
    const sql = 'SELECT * FROM users WHERE id != ? ';
    db.query(sql,[req.session.user.id], (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Internal server error' });
      }
      res.status(200).json(result);
    });
  },
  
  fetchUser: async (req, res) => {
    try {
      const userId = req.body.userId
      const sql = 'SELECT * FROM users WHERE id = ?';
      
      await db.query(sql,[userId], (e,r) => {
        if(e) {
          res.status(400).json({ error: 'Internal server error' });
        }
        res.status(200).send(r)
      });
      // res.status(200).json(rows[0]); // Send only the first row (assuming single user per ID)
    } catch (err) {
      console.error('Error fetching user:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  
  saveMessage: (req, res) => {
    const { recipientId, messageContent, messageType } = req.body;
    const senderId = req.session.user.id
    const sql = "INSERT INTO messages (senderId, recipientId, messageType, messageContent, mediaSource) VALUES (?, ?, ?, ?, NULL)";
    db.query(sql, [senderId, recipientId, messageType, messageContent], (err, results) => {
      if (err) { 
        if(err.code == 'ER_DUP_ENTRY') {
          return res.send("duplicate entry")
        }
        return res.status(200).send("message saved")
      }
    });

  },
  fetchMessages: (req, res) => {
    const sql = "SELECT * FROM messages WHERE ( senderId = ? && recipientId = ?) OR ( senderId = ? && recipientId = ? ) ORDER BY sentAt";
    db.query(sql, [req.session.user.id, req.query.recipientId, req.query.recipientId, req.session.user.id], (err, results) => {
      if (err) { 
        if(err.code == 'ER_DUP_ENTRY') {
          return res.send("duplicate entry")
        }
      }
      return res.status(200).send(results)
    });
  },

  getReceiverId: (req, res) => {
    const receiverId = req.params.receiverId;
    model.getMessagesByReceiverId(receiverId, (err, messages) => {
      if (err) {
        return res.status(500).json({ error: 'Internal server error' });
      }
      res.status(200).json(messages);
    });
  }
}
module.exports = Message;