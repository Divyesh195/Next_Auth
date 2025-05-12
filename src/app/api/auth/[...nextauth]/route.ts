import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import Google from "next-auth/providers/google";

const Google_id = process.env.GOOGLE_CLIENT_ID!
const Google_secret = process.env.GOOGLE_CLIENT_SECRET!

const authOptions : NextAuthOptions = {
    session:{
        strategy : "jwt"
    },
    providers : [
        Google({
            clientId: Google_id,
            clientSecret: Google_secret
        })
    ],
    callbacks:{
        async signIn({account,profile}){
            if(!profile?.email){
                throw new Error("Profile email not found")
            }

            // localStorage.setItem("email", profile.email)
            // localStorage.setItem("email", profile.name!)

            return profile.email , profile.name!
            
        }
    }
}

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}