const express = require('express');
const mysql = require('mysql2');

//set PORT destination and app variable
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: '561retac',
      database: 'election'
    },
    console.log('Connected to the election database.')
  );


//ROUTES SECTION:
app.get('/', (req, res) => {
    res.json({
      message: 'Hello World'
    });
  });





// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });

// tell the server to listen for all the routes above this
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });