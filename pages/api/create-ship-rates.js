
const axios = require('axios');

export default async function(req, res) {

    let api = `${process.env.SHIP_KEY}`;
    let { geo, address, cart } = req.body

    let loc1 = {
	country: "DE",
	zip: "80331",
	city: "Munich",
	lat: 48.1345,
	lon: 11.571
    };

    let loc2 = {
	country: "US",
	zip: "10024",
	city: "New York",
	lat: 40.7864,
	lon: -73.9764
	
    };

    let distanceA = distance(loc1.lat, geo.lat, loc1.lon, geo.lon)
    let distanceB = distance(loc2.lat, geo.lat, loc2.lon, geo.lon)
    let from = Math.min(distanceA, distanceB) == distanceA ? loc1 : loc2

    let getWeight = (cart) => {
        let total = 0;
        cart.forEach(item => total += (item.weight * item.quantity));
        return total
    }

    let weight = getWeight(cart);

    const UPS_ID = "se-2503954"
    const USPS_ID = "se-2503953"
    let carriers = address.country == 'US' ? [UPS_ID, USPS_ID] : [UPS_ID];

    let data = JSON.stringify({
    "carrier_ids": carriers,
    "from_country_code": from.country,
    "from_postal_code": from.zip,
    "to_country_code": address.country,
    "to_postal_code": address.zip,
    "weight": {
	"value": weight,
	"unit": "gram"
    }
    });

    let config = {
    method: 'post',
    url: 'https://api.shipengine.com/v1/rates/estimate',
    headers: { 
	'Content-Type': 'application/json', 
	'API-Key': api
    },
    data : data
    };

    let result = await axios(config)
	.then(response => {
	    
	    if (weight < 120 && from.country == 'US') {
		return [response.data.find(rate => rate.package_type == 'package' && rate.service_code == 'usps_priority_mail')]
	    }
	    else if (from.country == 'US') {
		console.log('in else')
		return response.data.filter(rate => rate.service_code == 'ups_ground' || rate.service_code == 'ups_2nd_day_air');
	    }
	    else {
		return response.data.filter(rate => rate.service_code == 'ups_standard' || rate.service_code == 'ups_express');
	
	    }
            //return response.data
            
    })
	.catch(function (error) {
	    console.log(error);
    });

    res.send(result)

}


const distance = (lat1, lat2, lon1, lon2) => {

    // The math module contains a function
    // named toRadians which converts from
    // degrees to radians.
    lon1 =  lon1 * Math.PI / 180;
    lon2 = lon2 * Math.PI / 180;
    lat1 = lat1 * Math.PI / 180;
    lat2 = lat2 * Math.PI / 180;

    // Haversine formula
    let dlon = lon2 - lon1;
    let dlat = lat2 - lat1;
    let a = Math.pow(Math.sin(dlat / 2), 2)
		+ Math.cos(lat1) * Math.cos(lat2)
		* Math.pow(Math.sin(dlon / 2),2);

    let c = 2 * Math.asin(Math.sqrt(a));

    // Radius of earth in kilometers. Use 3956
    // for miles
    let r = 6371;

    // calculate the result
    return(c * r);
}
