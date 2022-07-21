
export const finalizeOrder = async (userId) => {

    let isDment = process.env.NODE_ENV == 'development'
    let protocol = isDment ? 'http://' : 'https://'
    let domain = isDment ? 'localhost:3000' : 'audiophile-tan.vercel.app'

    let results = await fetch(`${protocol}${domain}/api/finalize-order`, {
	method: 'POST',
	headers: { 'Content-Type': 'application/json' },
	body: JSON.stringify({ userId })
    })
	
    let geoCord = await results.json()
    return geoCord;
    
}


