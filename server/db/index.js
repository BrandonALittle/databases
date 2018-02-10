var mysql = require('mysql');

var con = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat'
});

con.connect(function(err) {
  if (err) { throw err; }
  console.log('Connected!');
});
// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

// if (sqlcmd) {
//   con.query(sqlcmd, function(err, result) {
//     if (err) throw err;
//     console.log(sqlcmd + ' complete')



module.exports = con;
