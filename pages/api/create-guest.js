
// const { db } = require('../../lib/database');

// export default async function handler(req, res) {

//     let result;
//     try {
// 	result = await db.one('INSERT INTO users (name, username) VALUES ($1, $2) RETURNING id', ['guest', 'guest'])
//     }
//     catch (err) {
// 	console.log(err);
// 	return;
//     }
//     let guestId = await result

//     if (!guestId) {

// 	res.status(400).send()
//     }
//     res.status(200).send(guestId)
// }