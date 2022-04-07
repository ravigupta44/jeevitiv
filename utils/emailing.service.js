const nodemailer = require('nodemailer');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
require('dotenv').config();

const oauth2Client = new OAuth2(
    process.env.GOOGLE_CLIENT_ID, // ClientID
    process.env.GOOGLE_CLIENT_SECRET, // Client Secret
    process.env.REDIRECT_URL // Redirect URL
);

oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN
});

const accessToken = oauth2Client.getAccessToken()
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: "OAuth2",
        user: "nodejsa@gmail.com",
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken
    },
    tls: {
        rejectUnauthorized: false
    }
});

const accountVerificationEmail = async (email, token, clientUrl) => {

const output = `<h2>Please click on below link to activate your account</h2>
                <p>${clientUrl}/activateUser/${token}</p>
                <p><b>NOTE: </b> The above activation link expires in 30 minutes.</p>`;

    const subject = 'Account Verification';
    return sendEmail(email, output, subject);
}

const resetPasswordEmail = async (email, token, clientUrl) => {
    const output = `<h2>Please click on below link to reset your account password</h2>
                            <p>${clientUrl}/forgot/${token}</p>
                            <p><b>NOTE: </b> The activation link expires in 30 minutes.</p>`;
    const subject = 'Account Password Reset: NodeJS Auth ✔';
    return sendEmail(email, output, subject)
}

const needHelpEmail = async (email, name, phone, message) => {
    const output = "Phone : " + phone + " \nMessage : " + message;
    const subject = "Message from " + name + " via NeedHelp"
    return sendEmail(email, output, subject)
}

const requestDemo = async (email, firstName, lastName, phone, person) => {
    const output = "First Name : "+ firstName +".\nLast Name : " + lastName + ".\nPhone : " + phone + ".\nEmail : " + email + ".\nPerson : " + person + ".";
    const subject = firstName + " Wants to Schedule a demo";
    return sendEmail(email, output, subject);
}

const sendEmail = async (email, output, subject) => {
    const mailOptions = {
        from: '"Auth Admin" <nodejsa@gmail.com>', // sender address
        to: email, // list of receivers
        subject, // Subject line
        html: output, // html body
    };

    return transporter.sendMail(mailOptions)
}

module.exports = {
    accountVerificationEmail,
    resetPasswordEmail,
    needHelpEmail,
    requestDemo
}
