import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
    secret: process.env.AUTH_SECRET,
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID??"",
            clientSecret:process.env.GOOGLE_CLIENT_SECRET??"",
            // authorization:{
            //     params:{
            //      prompt:   "consent",
            //      access_type:"offline",
            //      response_type:"code"
            //     }
            // }
        })
    ]
});

export { handler as GET, handler as POST }; 


// import NextAuth from "next-auth";

// import GoogleProvider from "next-auth/providers/google";


// export const authOptions = {

//   providers: [

//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID ?? "",
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET?? "",

//     }),

//   ],

// };


// export default NextAuth(authOptions);