// "use client"

// import { ReactNode } from "react";
// import { SessionProvider } from "next-auth/react";

// type props = {
//     children: ReactNode
// }

// export default function SessionWrapper({ children }: props) {
//     return (
//         <SessionProvider >
//         { children }
//         </SessionProvider>
//     )
// }


import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }: AppProps) {
    return (<SessionProvider session= { pageProps.session } >
        <Component { ...pageProps } />
        </SessionProvider>);
}
export default MyApp;

