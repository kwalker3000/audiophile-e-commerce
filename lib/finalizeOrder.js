
export const finalizeOrder = async (userId) => {

    let results = await fetch('http://localhost:3000/api/finalize-order', {
	method: 'POST',
	headers: { 'Content-Type': 'application/json' },
	body: JSON.stringify({ userId })
    })
	
    let geoCord = await results.json()
    return geoCord;
    
}


