
export const updateOrder = async (userId, order) => {

  let rates = await fetch('/api/update-order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, order }),
  })

    return
}
