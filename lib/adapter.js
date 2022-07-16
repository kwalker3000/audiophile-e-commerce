
export default function PostgresAdapter(client, options = {}) {
    return {
	async createUser(user) {
	    console.log('createUser', user)
	    try {
		const sql = 'INSERT INTO users (name, email, email_verified, image, username) VALUES($1, $2, $3, $4, $1) RETURNING id, name, email, email_verified, image';
		let result = await client.one(sql, [user.name, user.email, user.emailVerified, user.image])
		await console.log('createUser', result)
		return result;  //result.rows[0]
	    }
	    catch (err) {
		console.log(err);
		return;
	    }
	},
	async getUser(id) {
	    console.log('getUser', id)
	    try {
		const sql = 'SELECT * FROM users WHERE id = $1';
		let result = await client.one(sql, [id]);
		return result; 
	    }
	    catch (err) {
		console.log(err);
		return;
	    }
	},
	async getUserByEmail(email) {
	    console.log('getUserByEmail', email)
	    try {
		const sql = 'SELECT * FROM users WHERE email = $1';
		let result = await client.one(sql, [email]);
		return result;
	    }
	    catch (err) {
		console.log(err);
		return;
	    }
	},
	async getUserByAccount({ providerAccountId, provider }) {
	    console.log('getUserByAccount', providerAccountId, provider)
	    try {
		const sql = 'SELECT u.* FROM users u JOIN accounts a ON u.id = a.user_id WHERE a.provider_id = $1 AND a.provider_account_id = $2';
		const result = await client.oneOrNone(sql, [provider, providerAccountId]);
		return result;
	    }
	    catch (err) {
		console.log(err);
		return;
	    }
	},
	async updateUser(user) {
	    try {
	    }
	    catch (err) {
		console.log(err);
		return;
	    }
	},
	async linkAccount(account) {
	    console.log('linkAccount', account)
	    try {
		const sql = 'INSERT INTO accounts ( user_id, provider_id, provider_type, provider_account_id, access_token, access_token_expires ) VALUES ($1, $2, $3, $4, $5, to_timestamp($6))';
		const params = [
		    account.userId,
		    account.provider,
		    account.type,
		    account.providerAccountId,
		    account.access_token,
		    account.expires_at
		];

		await client.none(sql, params);
		return account;
	    }
	    catch (err) {
		console.log(err);
		return;
	    }
	},
	async createSession( {sessionToken, userId, expires }) {
	    try {
		const sql = 'INSERT INTO sessions (user_id, expires, session_token) VALUES ($1, $2, $3)';
		await client.none(sql, [userId, expires, sessionToken]);
		await console.log('no way KEVIN')
		return { sessionToken, userId, expires };
	    }
	    catch (err) {
		console.log(err);
		return;
	    }
	},
	async getSessionAndUser(sessionToken) {
	    console.log('getSessionAndUser', sessionToken)
	    try {
		let result;
		let sql = 'SELECT * FROM sessions WHERE session_token = $1';
		result = await client.one(sql, [sessionToken]);
		let session = result;

		sql = 'SELECT * FROM users WHERE id = $1';
		result = await client.one(sql, [session.user_id]);
		let user = result;

		return {
		    session,
		    user,
		};
	    }
	    catch (err) {
		console.log(err);
		return;
	    }
	},
	async updateSession({ sessionToken }) {
	    console.log('updateSession', sessionToken);
	    return;
	},
	async deleteSession(sessionToken) {
	    console.log('deleteSession', sessionToken);
	    try {
		const sql = 'DELETE FROM sessions WHERE session_token = $1';
		await client.result(sql, [sessionToken]);
		return;
	    }
	    catch (err) {
		console.log(err);
		return;
	    }
	}
    }
}


//https://www.jakobmaier.at/posts/next-auth-postgres-adapter/

