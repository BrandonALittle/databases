// var db = require('../db');

// module.exports = {
//   messages: {
//     get: function (callback) {
//       var queryStr = 'select messages.id, messages.text, messages.roomname, users.username \
//         from messages left outer join users on (messages.userid = users.id) \
//         order by messages.id desc';
//       db.query(queryStr, function (err, results) {
//         if (err) { throw err; }
//         callback(null, results);
//       });
//     },
//     post: function (params, callback) {
//       var queryStr = 'insert into messages(test, userid, roomname) \
//         value (?, (select id from users where username = ? limit 1), ?)';
//       db.query(queryStr, params, function(err, result) {
//         if (err) { throw err; }
//         callback(null, results);
//       });
//     }
//   },

//   users: {
//     get: function (callback) {
//       var queryStr = 'select * from users';
//       db.query(queryStr, function(err, results) {
//         if (err) { throw err; }
//         callback(null, results);
//       });
//     },
//     post: function (params, callback) {
//       var queryStr = 'insert into users(username) values (?)'
//       db.query(queryStr, params, function(err, result) {
//         if (err) { throw err; }
//         callback(null, results);
//       });

//     }
//   }
// };

