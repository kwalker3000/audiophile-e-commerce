
import axios from 'axios';

export default async function handler(req, res) {
    let { address } = req.body;

    let country = address.country;
    let zip = address.zip;
    let api = `${process.env.WEATHER_KEY}`

    let domain = `http://api.openweathermap.org`
    let path = `/geo/1.0/zip`
    let params = `?zip=${zip},${country}&appid=${api}`

    try {

	let data = await axios.get(domain + path + params);
	let response = await data.status

	if (!(data.data)) {
	    res.status(404).send()
	}
	res.send(data.data)
    }
    catch (err) {
	console.error(err)
	res.status(404).send()
    }

};
