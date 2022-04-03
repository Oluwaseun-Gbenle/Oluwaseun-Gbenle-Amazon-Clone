// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import EmailProvider from "next-auth/providers/email"


export default NextAuth({
  providers: [
    // OAuth authentication providers
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code'
    }),
   /* EmailProvider({
      server: process.env.MAIL_SERVER,
      from: "<no-reply@example.com>",
    }),*/
    // Sign in with passwordless email link
  ],
  jwt: {
    encryption: true
  },
  secret: process.env.SECRET,
  callbacks: {
    async jwt(token, account) {
      if (account ?.accessToken) {
        token.accessToken = account.accessToken
      }
      return token;
    },
    redirect: async (url, _baseUrl)=>{
      if (url === '/user') {
        return Promise.resolve('/')
      }
      return  Promise.resolve('/')
    }
}
})
