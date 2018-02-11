var db = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {
      db.Message.findAll({include: [db.User]})
        .then(function(messages) {
          res.json(messages);
        });
    },
    post: function (req, res) {
      db.User.findOrCreate({where: {username: req.body.username}})
        // findOrCreate returns multiple resutls in an array
        // use spread to assign the array to function arguments
        .spread(function(user, created) {
          db.Message.create({
            userid: user.get('id'),
            text: req.body.message,
            roomname: req.body.roomname
          }).then(function(message) {
            res.sendStatus(201);
          });
        });
    }
  },

  users: {
    get: function (req, res) {
      db.User.findAll()
        .then(function(users) {
          res.json(users);
        });
    },
    post: function (req, res) {
      db.User.findOrCreate({where: {username: req.body.username}})
        // findOrCreate returns multiple resutls in an array
        // use spread to assign the array to function arguments
        .spread(function(user, created) {
          res.sendStatus(created ? 201 : 200);
        });
    }
  }
};




//var models = require('../models');

// module.exports = {
//   messages: {
//     get: function (req, res) {
//       models.messages.get(function(err, results) {
//         if (err) {
//           console.log('hit error in cont, msg, get: ', err);
//         } else {
//           res.json(results);
//           res.end(results);
//         }
//       });

//     },
//     post: function (req, res) {
//       console.log('CONTROLLERS/index.js MESSAGES POST logs: ', req.body);
//       models.messages.post(req.body, function(err, results) {
//         if (err) {
//           console.log('hit error in cont, mes, post: ', err);
//         } else {
//           res.end();
//         }
//       });
//       res.end();
//     }
//   },

//   users: {
//     // Ditto as above
//     get: function (req, res) {
//       models.users.get(function(err, results) {
//         if (err) {
//           console.log('hit error in cont, users, get: ', err);
//         } else {
//           res.json(results);
//           res.end(results);
//         }
//       });
//     },
//     post: function (req, res) {
//       models.users.post(req.body, function(err, results) {
//         if (err) {
//           console.log('hit error in cont, users, post: ', err);
//         } else {
//           console.log('success post -> results : ', results);
//           res.end();
//         }
//       });
//     }
//   }
// };

