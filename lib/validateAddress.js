export const validateAddress = async (address) => {
  let geoLoc = await fetch('/api/create-geo-location', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ address }),
  })

  try {
    let data = await geoLoc.json()
    return data
  } catch (err) {
    console.error(err)
    return
  }
}
