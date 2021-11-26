const  nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
    service: '163', 
    port: 465, 
    secureConnection: true,
    auth: {
        user: '15279163025@163.com',
        pass: 'IQYMDWBLUYLYVWLN',
    }
});

module.exports = transporter;