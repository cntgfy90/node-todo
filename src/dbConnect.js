const mysql = require('mysql');

const getConnection = () => mysql.createConnection({
  host: 'localhost',
  user: 'todouser',
  password: '123456',
  database: 'todolist',
});

getConnection().connect((err) => {
  if (err) {
    throw err;
  }

  // eslint-disable-next-line no-console
  console.log('Connection to mysql server is established.');
});

module.exports = { getConnection };
