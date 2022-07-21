export const initiateOrder = async (storeId, userId, geoloc) => {
  let rates = await fetch('/api/initiate-order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ storeId, userId, geoloc }),
  })

    return
}
