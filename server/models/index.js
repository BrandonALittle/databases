var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.query('select * from messages', function (err, results) {
        if (err) { throw err; }
        // console.log('MODELS/index.js GET MESSAGES logs: results = ', results);
        callback(null, results);
      });
    }, // a function which produces all the messages
    post: function (message, callback) {
      let creationStamp = new Date();
      db.query(`INSERT INTO messages (username, msg_text, roomname, createdAt) VALUES (${message.username}, ${message.msg_txt}, ${message.roomname}, ${creationStamp})`, function(err, result) {
        if (err) { throw err; }
        // console.log('mesage insserted at msg post yo');
        callback();
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query('select name from users', function(err, results) {
        if (err) { throw err; }
        // console.log('MODELS/index.js GET USERS logs: results= ', results);;
        callback(null, results);
      });
    },
    post: function (user, callback) {
      db.query(`INSERT INTO users (name) VALUES (${user.username})`, function(err, result) {
        if (err) { throw err; }
        console.log('username inserted at users post in models, results : ', result);
        callback(null, results);
      });

    }
  }
};

