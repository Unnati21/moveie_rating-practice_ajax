const pgp = require('pg-promise')()

const {DB_USER,
  DB_PASS,
  DB_HOST,
  DB_PORT,
  DB_DATABASE} = process.env

const connectionString = `postgres://postgres:123456@localhost:5432/movie_comments`

const db = pgp(connectionString)

module.exports = db