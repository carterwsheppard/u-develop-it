Command Line Setup: 

mysql -u root -p

mysql> CREATE DATABASE election;

USE election;

CREATE TABLE candidates (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  industry_connected BOOLEAN NOT NULL
);

DESCRIBE candidates;

INSERT INTO candidates (first_name, last_name, industry_connected)
VALUES
  ('Ronald', 'Firbank', 1),
  ('Virginia', 'Woolf', 1),
  ('Piers', 'Gaveston', 0),
  ('Charles', 'LeRoi', 1),
  ('Katherine', 'Mansfield', 1),
  ('Dora', 'Carrington', 0),
  ('Edward', 'Bellamy', 0),
  ('Montague', 'Summers', 1),
  ('Octavia', 'Butler', 1),
  ('Unica', 'Zurn', 1);

  DROP DATABASE election;

  mysql> source db/db.sql;
  mysql> source db/schema.sql;


  C -> INSERT
  R -> SELECT
  U -> UPDATE
  D -> DELETE FROM

  UPDATE candidates
  SET industry_connected = 1
  WHERE id = 3

  DELETE FROM candidates
  WHERE first_name="Montague";

  SHOW DATABASES

  **Initialize the Node.js**

  npm init --y

**install needed packages**
  npm install express mysql2
  npm install jest --save-dev

  **change test script to jest in package.json**
  "scripts": {
      "test":"jest"
      "start": "node server.js"
},

**create server file**
touch server.js