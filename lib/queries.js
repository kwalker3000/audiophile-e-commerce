const pgp = require('pg-promise')()
const cn = {
  host: 'hansken-01.db.elephantsql.com',
  port: 5432,
  database: 'llblthaj',
  user: 'llblthaj',
  password: `${process.env.ELEPHANT_PASS}`,
  max: 5,
}

const db = pgp(cn)

// db.any('SELECT ROUND(AVG( people.height), 2) AS "height", teams.name, batting.yearid
// FROM people
// INNER JOIN batting
//   ON people.playerid = batting.playerid
// INNER JOIN teams
//   ON batting.teamid = teams.teamid
// GROUP BY
//   teams.name,
//   batting.yearid
// ORDER BY
// 	"height"
// 	ASC
// 	LIMIT 5', [true]).then(data => {
// 	    console.log(data);
// 	}).catch(err => {
// 	    console.log(error);
// 	});

// const {QueryFile} = require('pg-promise');
// const {join: joinPath} = require('path');

// function sql(file) {
//     const fullPath = joinPath(__dirname, file);
//     console.log(__dirname);
//     return new QueryFile(fullPath, {minify: true});
// }

// let test = new pgp.QueryFile('/home/kwalker/stem/dev/projects/data-management/baseball-data/sol.sql');

// db.many(test, {})
//     .then(data => {
// 	console.log(data);
//     })
//     .catch(err => {
// 	console.log(err);
//     });

export const getCurrentCustomer = async () => {
  let info = await db.one('SELECT * FROM customer ORDER BY ID DESC')
  // await console.log(info);

  return info
}
