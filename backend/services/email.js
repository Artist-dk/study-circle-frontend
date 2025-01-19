const nodemailer = require('nodemailer');

exports.sendEmail = async (emailOptions) => {
    try {
        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'digambarckumbhar299@gmail.com',
                pass: 'cvlb jxff noeq opyt'
            }
        });

        let info = await transporter.sendMail(emailOptions);
        console.log('Email sent:', info.response);
        return { success: true, message: 'Email sent successfully' };
    } catch (error) {
        console.error('Error sending email:', error);
        return { success: false, error: 'Error sending email' };
    }
};
