
const pgp = require('pg-promise')()
const cn = {
  host: 'hansken-01.db.elephantsql.com',
  port: 5432,
  database: 'llblthaj',
  user: 'llblthaj',
  password: `${process.env.ELEPHANT_PASS}`,
  max: 5,
}

export const db = pgp(cn)
