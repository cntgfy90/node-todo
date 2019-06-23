const { getConnection } = require('../dbConnect');

const fetch = () => new Promise((resolve, reject) => {
  const sql = 'SELECT * FROM todos';
  getConnection().query(sql, (err, rows) => {
    if (err) {
      reject(err);
    }
    resolve(rows);
  });
});

const create = (name, description) => new Promise((resolve, reject) => {
  const sql = 'INSERT INTO todos SET ?';
  getConnection().query(sql, { name, description }, (err) => {
    if (err) {
      reject(err);
    }
    resolve();
  });
});

const remove = id => new Promise((resolve, reject) => {
  const sql = 'DELETE FROM todos WHERE id = ?';
  getConnection().query(sql, [id], (err) => {
    if (err) {
      reject(err);
    }
    resolve();
  });
});

module.exports = { fetch, create, remove };
