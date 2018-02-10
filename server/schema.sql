CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
/*uniq id for each message, messageText, username, roomname, createaAt */
  id INT NOT NULL,
  name VARCHAR(20),
  PRIMARY KEY(id)
);

CREATE TABLE messages (
/*uniq id for each message, messageText, username, roomname, createaAt */
  id INT,
  username INT,
  msg_text VARCHAR(140),
  roomname VARCHAR(20),
  createdAt DATE,
  PRIMARY KEY(id),
  FOREIGN KEY (username) REFERENCES users(id)
);
/*CONSTRAINT (username) foreign key users_id REFERENCES users(id)

 --ON DELETE CASCADE
--
*/
/*table for users and friends */
/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

-- CREATE TABLE <table-name> (
--   <name-of-column-1> <data-type-of-column> [ADDITIONAL-INFO-ABOUT-THIS-COLUMN],
--   <name-of-column-2> <data-type-of-column> [ADDITIONAL-INFO-ABOUT-THIS-COLUMN],
--                               ...
--   <name-of-column-n> <data-type-of-column> [ADDITIONAL-INFO-ABOUT-THIS-COLUMN],
--   [OTHER-SCHEMA-DEFINITION-COMMANDS]
-- );