var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, results) {
        if (err) {
          console.log('hit error in cont, msg, get: ', err);
        } else {
          res.json(results);
          res.end(results);
        }
      });

    },
    post: function (req, res) {
      console.log('CONTROLLERS/index.js MESSAGES POST logs: ', req.body);
      models.messages.post(req.body, function(err, results) {
        if (err) {
          console.log('hit error in cont, mes, post: ', err);
        } else {
          res.end();
        }
      });
      res.end();
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err, results) {
        if (err) {
          console.log('hit error in cont, users, get: ', err);
        } else {
          res.json(results);
          res.end(results);
        }
      });
    },
    post: function (req, res) {
      models.users.post(req.body, function(err, results) {
        if (err) {
          console.log('hit error in cont, users, post: ', err);
        } else {
          console.log('success post -> results : ', results);
          res.end();
        }
      });
    }
  }
};

