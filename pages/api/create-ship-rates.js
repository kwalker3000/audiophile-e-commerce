const axios = require('axios')
const { db } = require('../../lib/database')

export default async function handler(req, res) {
  let api = `${process.env.SHIP_KEY}`
  let { geo, address, cart } = req.body
  let stores

  try {
    stores = await db.many({
      name: 'get-stores',
      text: 'SELECT * FROM stores',
    })
  } catch (err) {
    console.log(err)
    return
  }

    let nearest;
  let updatedStoresArr = stores.filter((store) => {

    let breadth = distance(store.lat, geo.lat, store.lon, geo.lon)

      if (nearest && (breadth < nearest)) {
      return store
    } else if (nearest == undefined) {
        nearest = breadth
      return store
    }
  })

  let from = updatedStoresArr[updatedStoresArr.length - 1]

  let getWeight = (cart) => {
    let total = 0
    cart.forEach((item) => (total += item.weight * item.quantity))
    return total
  }

  let weight = getWeight(cart)

  const UPS_ID = 'se-2503954'
  const USPS_ID = 'se-2503953'
  let carriers = address.country == 'US' ? [UPS_ID, USPS_ID] : [UPS_ID]

  let data = JSON.stringify({
    carrier_ids: carriers,
    from_country_code: from.country_code,
    from_postal_code: from.postal_code,
    to_country_code: address.country,
    to_postal_code: address.zip,
    weight: {
      value: weight,
      unit: 'gram',
    },
  })

  let config = {
    method: 'post',
    url: 'https://api.shipengine.com/v1/rates/estimate',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': api,
    },
    data: data,
  }

  let result = await axios(config)
    .then((response) => {
      if (weight < 120 && from.country_code == 'US') {
        return [
          response.data.find(
            (rate) =>
              rate.package_type == 'package' &&
              rate.service_code == 'usps_priority_mail'
          ),
        ]
      } else if (from.country_code == 'US') {
        return response.data.filter(
          (rate) =>
            rate.service_code == 'ups_ground' ||
            rate.service_code == 'ups_2nd_day_air'
        )
      } else {
        return response.data.filter(
          (rate) =>
            rate.service_code == 'ups_standard' ||
            rate.service_code == 'ups_express'
        )
      }
    })
    .catch(function (error) {
      console.log(error)
    })
    result === undefined ? result = [] : result = result 

  res.send({ result, from })
}

const distance = (lat1, lat2, lon1, lon2) => {
  // The math module contains a function
  // named toRadians which converts from
  // degrees to radians.
  lon1 = (lon1 * Math.PI) / 180
  lon2 = (lon2 * Math.PI) / 180
  lat1 = (lat1 * Math.PI) / 180
  lat2 = (lat2 * Math.PI) / 180

  // Haversine formula
  let dlon = lon2 - lon1
  let dlat = lat2 - lat1
  let a =
    Math.pow(Math.sin(dlat / 2), 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2)

  let c = 2 * Math.asin(Math.sqrt(a))

  // Radius of earth in kilometers. Use 3956
  // for miles
  let r = 6371

  // calculate the result
  return c * r
}
