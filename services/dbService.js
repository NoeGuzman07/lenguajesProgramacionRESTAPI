const mysql = require('mysql2/promise')
const config = require('../config/dbconfig')

async function query(sql) {
  const connection = await mysql.createConnection(config.db);
  const [results,] = await connection.execute(sql);

  if(!results) {
    return [];
  }
  return results;
}

module.exports= {
  query
}