const db = require('../config/dbConfig');

const model = require('../models/settings');

const Settings = {
  theme: (req, res) => {  
    console.log(req.session.id)
    if(req.session.user) {
      const { theme } = req.body;
      model.theme(theme,req.session.user.id, (err, result) => {
        if(err) {
          return res.status(500).json({error:err})
        }
        res.status(201).json({message:"Theme changed"})
      })
    } else {
      res.send({message: "Please login to your account"})
    }
  },
};

module.exports = Settings;
