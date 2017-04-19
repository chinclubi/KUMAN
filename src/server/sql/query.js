import Promise from 'bluebird'
import config from 'config'
import mysql from 'mysql'

export default (query) => new Promise((resolve, reject) => {
  const conn = mysql.createConnection({
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database
  })
  conn.connect()
  conn.query(query, (err, result) => err ? reject(err) : resolve(result))
  conn.end()
})
