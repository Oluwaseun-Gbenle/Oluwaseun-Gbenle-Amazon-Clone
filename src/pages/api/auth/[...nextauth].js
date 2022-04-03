// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import EmailProvider from "next-auth/providers/email"


export default NextAuth({
  secret: process.env.SECRET,
  providers: [
    // OAuth authentication providers
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
   /* EmailProvider({
      server: process.env.MAIL_SERVER,
      from: "<no-reply@example.com>",
    }),*/
    // Sign in with passwordless email link
  ],

})
