const { MongoClient } = require('mongodb');
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

process.env.MONGODB_URI = 'mongodb+srv://kaspearavindkumar1999:Knu5ndit%407@cluster0.jioycta.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
process.env.SENDGRID_API_KEY = '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';
process.env.EMAIL_USER = 'kaspearavindkumar1999@gmail.com';
process.env.EMAIL_TO = 'aravindkaspe1991@gmail.com';

console.log('MONGODB_URI:', process.env.MONGODB_URI);
console.log('SENDGRID_API_KEY:', process.env.SENDGRID_API_KEY);
console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_TO:', process.env.EMAIL_TO);


sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const uri = process.env.MONGODB_URI;

async function sendEmail(change) {
    const msg = {
        to: process.env.EMAIL_TO,
        from: process.env.EMAIL_USER,
        subject: 'MongoDB Collection Update Notification',
        text: `A document was updated in the collection: ${JSON.stringify(change)}`,
    };

    try {
        await sgMail.send(msg);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

async function watchChanges() {
    const client = new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const database = client.db('WebData');
        const collection = database.collection('3D-data');

        const changeStream = collection.watch();

        changeStream.on('change', (change) => {
            console.log('Change detected:', change);
            sendEmail(change);
        });

        console.log('Watching for changes...');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

watchChanges();

// // Function to send email
// async function sendEmail(change) {
//     const mailOptions = {
//         from: 'kaspearavindkumar1999@gmail.com',
//         to: 'aravindkaspe1991@gmail.com',
//         subject: 'MongoDB Collection Update Notification',
//         text: `A document was updated in the collection: ${JSON.stringify(change)}`
//     };

//     try {
//         await transporter.sendMail(mailOptions);
//         console.log('Email sent successfully');
//     } catch (error) {
//         console.error('Error sending email:', error);
//     }
// }

// // Function to watch for changes in the collection
// async function watchChanges() {
//     const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//     try {
//         await client.connect();
//         const database = client.db('WebData');
//         const collection = database.collection('3D-data');

//         const changeStream = collection.watch();

//         changeStream.on('change', (change) => {
//             console.log('Change detected:', change);
//             sendEmail(change);
//         });

//         console.log('Watching for changes...');
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//     }
// }

// watchChanges();
