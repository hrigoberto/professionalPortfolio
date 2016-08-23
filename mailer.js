var express = require('express');
var router = express.Router();
var apikey = process.env.API || require('./config').apiKey;
var domain = 'https://mailgun.com/app/domains/sandboxa525892f89e848b9818b197cc08bd6e5.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: apikey, domain: domain});

router.post('/send', function(req, res, next){
  var email = {
    from: req.body.email,
    to: 'hernadezrigoberto@gmail.com',
    subject: req.body.name,
    text: req.body.text
  }

  mailgun.messages().send(data, function(error, body){
    console.log(body);
    next();
  });
})

module.exports = router;
