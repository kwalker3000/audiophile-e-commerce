export const getShipRates = async (coordinates, address, cart) => {
  let rates = await fetch('/api/create-ship-rates', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ geo: coordinates, address, cart }),
  })

  let data = await rates.json()
  return data
}
