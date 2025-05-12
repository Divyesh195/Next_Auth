import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"

const Google_id = process.env.GOOGLE_CLIENT_ID!
const Google_secret = process.env.GOOGLE_CLIENT_SECRET!

export const { handlers, auth, signIn, signOut } = NextAuth({ providers: [GitHub,  Google({
    clientId: Google_id,
    clientSecret: Google_secret
})] })