import '../styles/globals.css'

import { AppWrapper } from '../src/context/appContext'

function MyApp({ Component, pageProps }) {
    return (

        <AppWrapper>
        <Component {...pageProps} />
	</AppWrapper>

    )
}

export default MyApp
