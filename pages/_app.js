import '../styles/globals.css'

import useScrollRestoration from '../src/hooks/useScrollRestoration';
import { AppWrapper } from '../src/context/appContext';

function MyApp({ Component, pageProps, router }) {
    useScrollRestoration(router);
    return (

        <AppWrapper>
        <Component {...pageProps} />
	</AppWrapper>

    )
}

export default MyApp
