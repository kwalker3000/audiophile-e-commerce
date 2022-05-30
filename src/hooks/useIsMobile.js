
import React, {useState, useEffect, useRef} from 'react';


// export const useIsMobile = () => {
//     const [isMobile, setIsMobile] = useState(false)

//     useEffect(() => {
//         const getIsMobile = () => window.innerWidth <= 980;
//         const onResize = () => {
//             setIsMobile(getIsMobile());
//         }

//         window.addEventListener('resize', onResize);

//         return () => {
//             window.removeEventListener('resize', onResize);
//         }
//     }, []);

//     return isMobile;
// }

export const useIsMobile = () => {
    const screenSize = useRef();

    useEffect(() => {
        window.addEventListener('resize', () => {
            screenSize.current = window.innerWidth;
        });
        return () => {
            window.removeEventListener('resize', () => {
                screenSize.current = window.innerWidth;
            })
        }
    }, []);
    
    return screenSize.current <= 980
}
