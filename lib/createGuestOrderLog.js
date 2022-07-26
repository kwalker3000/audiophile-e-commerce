
export const createGuestOrderLog = async (guest) => {

  let res = await fetch('/api/create-guest-order-log', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ guest }),
  })

    if (res.ok) {
	let data = await res.json();
	return data
    }
    else {
	throw new Error(res.status)
    }

}
