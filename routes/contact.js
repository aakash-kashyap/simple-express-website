var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});


router.post('/send', function(req, res, next){
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'something@gmail.com',
            pass: 'something'
        }

    });

    var mailOptions = {
        from: 'Name:' + req.body.name + ' Email: '+ req.body.email,
        to: 'something@gmail.com',
        subject: 'Website Submission',
        text: 'Message: ' + req.body.message
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.redirect('/');
        }else{
            console.log('Message Sent:'+ info.response);
            res.redirect('/');
        }
    });
});

module.exports = router;
