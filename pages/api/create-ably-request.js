import Ably from 'ably/promises'

export default async function handler(req, res) {
  const client = new Ably.Realtime(process.env.ABLY_API_KEY)
  const tokenRequestData = await client.auth.createTokenRequest({
    clientId: 'ably-nextjs-demo',
  })
  res.status(200).json(tokenRequestData)
}

// order# / name / address / store id / date / amount

// order# / productID / quantity

// customer# / email / address / order#

// email / password / customer#
