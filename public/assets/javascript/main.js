$(document).ready(function () {
    var portfolioCookie = getCookie('CJPcookie');

    $('a.project').hover(function() {
        $("#projectTitle").text("");
        $("#projectInfo").text("");
        var title = $(this).attr('data-title');
        var body = $(this).attr('data-info');
        $('#projectTitle').html("<h3>"+title+"</h3>");
        $('#projectInfo').text(body);
    });

    if(portfolioCookie != 'DoNotShow'){
        var popupHtml = '<div id="myModal" class="modal"> <div class="modal-content"> <div class="modal-close"> <img id="closeIcon" src="/assets/images/closeIcon.png" /> </div> <div class="modal-body"> <h3>Hi! Thanks for your interest in my work!</h3> <p>I am in the process of building a new portfolio.</p> <p>The current design and content of this site does not accurately reflect how incredible I am.</p> <p>Please keep this in mind during your visit.</p> <h3>- Charles Jude Prestia</h3> </div> <div class="modal-footer"> <button id="DoNotShowAgain">Got it! No need to show me this message again.</button> </div> </div></div>';
        $('body').append(popupHtml);
    }

    $('#DoNotShowAgain').click(function(){
        document.cookie = "CJPcookie=DoNotShow";
        $('#myModal').css('display', 'none');
    });
    $('#closeIcon').click(function() {
        $('#myModal').css('display', 'none');
    });

    function getCookie(cookiename){
        var cookiestring=RegExp(""+cookiename+"[^;]+").exec(document.cookie);
        return decodeURIComponent(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./,"") : "");
    }


    // const nodemailer = require('nodemailer');

    // let transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //         user: 'prestia.herokuapp@gmail.com',
    //         pass: 'PlzDontBeADick1234'
    //     }
    // });

    // let mailOptions = {
    //     from: '"Charles Jude Prestia" <prestia.herokuapp@gmail.com>',
    //     to: '',
    //     cc: 'CJPrestia@gmail.com',
    //     replyTo: 'CJPrestia@gmail.com',
    //     subject: 'Thanks for your message!',
    //     text: ''
    // };


    // $('#contactModal').on('shown.bs.modal', function () {
    //   $('#myInput').focus();
    // });


    // $('#sendEmail').click( function(event){
    //     event.preventDefault();

    //     // Either make a dedicated template to display their message as a sort of jumbotron at the top of the email body or do some simple css styling to make their message stand out --
    //     // Remember, them hitting the send button will capture the info they put in and send their message to BOTH CJPrestia@gmail.com AND their email address FROM prestia.herokuapp@gmail.com --
    //     // This form effectively initializes an email dialog between the user and myself.

    //     var userEmail = $("#contactModal #sender-name").val().trim();
    //     var message = $("#contactModal #message-text").val().trim();

    //     console.log("Sender: "+userEmail+"\nMessage: "+message+"\n");

    //     mailOptions.to = userEmail;
    //     mailOptions.text = message;
    //     console.log(mailOptions);

    //     transporter.sendMail(mailOptions, (error, info) {
    //         if (error) {
    //             return console.log(error);
    //         } else {
    //         console.log("Message %s sent: %s", info.messageId, info.response);
    //         }
    //     })
    // });

});

