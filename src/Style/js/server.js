const mysql = require('mysql2');
const db = mysql.createConnection({
  host: 'localhost',  
  user: 'root',       
  password: '',       
  database: 'my_database' 
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to the database');
});
