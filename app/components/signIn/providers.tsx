// 'use client'
// import { SessionProvider } from "next-auth/react";
// import { ReactNode } from "react";

// interface Props{
//     children:ReactNode;
// }
// const Provider = (props:Props) =>{
//     return<SessionProvider>{props.children}</SessionProvider>
// }
// export default Provider;

// 'use client';
// import '../styles/globals.css'
// import { SessionProvider } from "next-auth/react"
// import type { AppProps } from "next/app"

// export default function App({ Component, pageProps }: AppProps) {
//   return (
//     <SessionProvider
//       session={pageProps.session}
//     >
//       <Component {...pageProps} />
//     </SessionProvider>
//   )
// }

"use client";

import { SessionProvider } from "next-auth/react";

type Props = {
  children?: React.ReactNode;
};

export const NextAuthProvider = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};