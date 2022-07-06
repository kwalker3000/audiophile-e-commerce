
import ShipEngine from "shipengine";
const shipengine = new ShipEngine("TEST_9x/Kdebs72wyEFI6Ej7h4+/koTZx+ewF3K7/Q2qBZtE");

export default async function getRatesWithShipmentDetails(address) {


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

    let distanceA = distance(loc1.lat, address.lat, loc1.lon, address.lon)
    let distanceB = distance(loc2.lat, address.lat, loc2.lon, address.lon)
    let from = Math.min(distanceA, distanceB)
    
  const params = {

carrierIds: ["se-963360", "se-963358", "se-963359"],
	from_country_code: from.country,
	from_postal_code: from.zip,
	to_country_code: address.country,
	to_postal_code: address.zip,
	weight: {
		value: 17,
		unit: "pound"
	},



      
    // rateOptions: {
    // 	carrierIds: ["se-963360", "se-963358", "se-963359"]
    // },
    // shipment: {
    //   validateAddress: "no_validation",
    //   shipTo: {
    //     name: "Kevin Walker",
    //     phone: "",
    //     addressLine1: "37 Olde Yorkshire ct",
    //     cityLocality: "saint charles",
    //     stateProvince: "MO",
    //     postalCode: "63304",
    //     countryCode: "US",
    //     addressResidentialIndicator: "yes",
    //   },
    //   shipFrom: {
    //     companyName: "Audiophile",
    //     name: "John Audio",
    //     phone: "+49 2602 999080",
    //     addressLine1: "Horresser Berg 4A",
    //     addressLine2: "",
    //     cityLocality: "Montabaur",
    //     stateProvince: "",
    //     postalCode: "56410",
    //     countryCode: "DE",
    //     addressResidentialIndicator: "no",
    //   },
    //   packages: [
    //     {
    //       weight: {
    //         value: 5.5,
    //         unit: "kilogram",
    //       },
    //     },
 //     ],
 //   },
  };

  try {
    const result = await shipengine.getRatesWithShipmentDetails(params);

    console.log("The rates that were created:");
    console.log(result);
  } catch (e) {
    console.log("Error creating rates: ", e.message);
  }
    return result
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
