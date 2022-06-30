
import Stripe from "stripe";
import { useAppContext } from "../src/context/appContext";

export const getServerSideProps = async () => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    //const paymentIntent = await stripe.paymentIntents.create({});
    const prices = await stripe.prices.list({
        active: true,
        expand: ["data.product"]
    });

    return {
        props: {
            prices
        }
    };
};


export default function Checkout({ prices }) {
    let { data } = prices

    let { cart } = useAppContext();

    let cartCheckout = [];

    cart.forEach(item => {
        let product = data.find(stripe => stripe.product.default_price == item.stripe_id);
        cartCheckout.push(product)
    })
    console.log(cartCheckout)
        
    // return (
    //     <div>
    //       <div>
    //         <ul>

    //         </ul>
    //       </div>
    //     </div>
    // )
    return (
        <pre>{JSON.stringify(prices, null, 2)}</pre>
    )
}

