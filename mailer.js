var express = require('express');
var router = express.Router();
var apikey = process.env.API || require('./config').apiKey;
var domain = 'sandboxa525892f89e848b9818b197cc08bd6e5.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: apikey, domain: domain});

router.post('/send', function(req, res, next){
  console.log(req.body);
  var email = {
    from: req.body.email,
    to: 'hernadezrigoberto@gmail.com',
    subject: req.body.name + 'PortfolioPageContact',
    text: req.body.text
  }

  mailgun.messages().send(email, function(error, body){
    console.log(error);
    next();
  });
})

module.exports = router;
