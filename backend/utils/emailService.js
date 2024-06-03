const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();



const sendWelcomeEmail = async(to, username) => {

    const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Use your email service provider
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to:to,
        subject: 'Welcome to MelodyVerse!',
        text: `Hi ${username},\n\nWelcome to MelodyVerse! We're excited to have you on board.\n\nBest Regards,\nMelodyVerse Team`,
    };

     try {
    await transporter.sendMail(mailOptions);
    console.log('Welcome email sent successfully');
  } catch (error) {
    console.error('Error sending welcome email:', error);
  }
};

module.exports = { sendWelcomeEmail };
