require('dotenv').config();
const sgMail = require('@sendgrid/mail');

process.env.EMAIL_USER = '_dmarc.gmail.com';
process.env.EMAIL_TO = 'aravindkaspe1991@gmail.com';

const sendGridApiKey = process.env.SENDGRID_API_KEY;

if (!sendGridApiKey || !sendGridApiKey.startsWith('SG.')) {
    throw new Error('SENDGRID_API_KEY is not defined or does not start with "SG." in the environment variables');
}

sgMail.setApiKey(sendGridApiKey);

const msg = {
    to: process.env.EMAIL_TO,
    from: process.env.EMAIL_USER,
    subject: 'Test Email',
    text: 'This is a test email from SendGrid.',
};

sgMail
    .send(msg)
    .then(() => {
        console.log('Test email sent successfully');
    })
    .catch((error) => {
        console.error('Error sending test email:', error.response ? error.response.body : error.message);
    });