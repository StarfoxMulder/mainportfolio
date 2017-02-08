$(document).ready(function () {

    const nodemailer = require('nodemailer');

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'prestia.herokuapp@gmail.com',
            pass: 'PlzDontBeADick1234'
        }
    });

    let mailOptions = {
        from: '"Charles Jude Prestia" <prestia.herokuapp@gmail.com>',
        to: '',
        cc: 'CJPrestia@gmail.com',
        replyTo: 'CJPrestia@gmail.com',
        subject: 'Thanks for your message!',
        text: ''
    };


    $('#contactModal').on('shown.bs.modal', function () {
      $('#myInput').focus();
    });


    $('#sendEmail').click( function(event){
        event.preventDefault();

        // Either make a dedicated template to display their message as a sort of jumbotron at the top of the email body or do some simple css styling to make their message stand out --
        // Remember, them hitting the send button will capture the info they put in and send their message to BOTH CJPrestia@gmail.com AND their email address FROM prestia.herokuapp@gmail.com --
        // This form effectively initializes an email dialog between the user and myself.

        var userEmail = $("#contactModal #sender-name").val().trim();
        var message = $("#contactModal #message-text").val().trim();

        console.log("Sender: "+userEmail+"\nMessage: "+message+"\n");

        mailOptions.to = userEmail;
        mailOptions.text = message;
        console.log(mailOptions);

        transporter.sendMail(mailOptions, (error, info) {
            if (error) {
                return console.log(error);
            } else {
            console.log("Message %s sent: %s", info.messageId, info.response);
            }
        });
    });

});
