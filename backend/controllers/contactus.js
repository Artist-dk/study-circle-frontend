const model = require('../models/contactus');
const emailService = require('../services/email');

const Contactus = {
  saveMessage: async (req, res) => {
    const { firstname, lastname, phoneno, emailid, message } = req.body;
    console.log(firstname, lastname, phoneno, emailid, message);

    // Save message to the database
    model.sendMessage(req.body, (err, results) => {
      if (err) {
        console.error('Error saving message:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }
      console.log('Message saved to database:', results);
    });

    // Send email
    const emailOptions = {
      from: emailid,
      to: 'digambarckumbhar299@gmail.com',
      subject: 'New Contact Form Submission',
      text: `Name: ${firstname} ${lastname}\nPhone no.: ${phoneno}\nEmail: ${emailid}\n\nMessage: ${message}`
    };

    try {
      const result = await emailService.sendEmail(emailOptions);
      console.log('Email sent:', result);
      res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending email' });
    }
  }
};

module.exports = Contactus;
